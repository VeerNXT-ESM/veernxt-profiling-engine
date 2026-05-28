/**
 * Express server exposing the profiling engine as a REST API
 * so your Node.js website backend can call it.
 *
 *   POST /api/recommend        → top-10 exam recommendations
 *   POST /api/validate         → validate profile payload
 *   GET  /api/exams            → list all exams
 *   GET  /api/exams/:id        → single exam detail + live vacancies
 *   GET  /api/jobs             → list all scraped notifications from history
 *   POST /api/jobs/refresh     → trigger manual scrape of core job boards
 *   POST /api/refresh-vacancies (admin) → trigger re-scrape
 */

const express = require('express');
const cors    = require('cors');
const cron    = require('node-cron');
const fs      = require('fs');
const path    = require('path');

const { profileSchema }   = require('./validators/profileSchema');
const { recommendTopExams, loadExamMaster } = require('./engine/recommend');
const liveVacancies       = require('./scrapers/index');
const { Client }          = require('pg');

const HISTORY_PATH = path.resolve(__dirname, '../data/scraped_history.json');
const MASTER_PATH = path.resolve(__dirname, '../data/exam_master.json');
const dbUrl = 'postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres';

const app = express();

// Enable CORS for all routes with explicit preflight handling
app.use(cors({
  origin: true, // Reflect the request origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'apikey'],
  credentials: true
}));

app.options('*', cors()); // Handle preflight for all routes

app.use(express.json({ limit: '1mb' }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - Origin: ${req.headers.origin}`);
  next();
});

app.get('/', (_req, res) => res.json({
  name: 'VeerNXT Career Profiling Engine',
  version: '1.0.0',
  endpoints: ['/api/recommend','/api/validate','/api/exams','/api/exams/:id','/api/refresh-vacancies'],
}));

app.post('/api/validate', (req, res) => {
  const { error, value } = profileSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) return res.status(400).json({ ok: false, errors: error.details });
  return res.json({ ok: true, profile: value });
});

app.post('/api/recommend', async (req, res) => {
  const { error, value } = profileSchema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) return res.status(400).json({ ok: false, errors: error.details });
  try {
    const result = await recommendTopExams(value, {
      topN: req.query.topN ? parseInt(req.query.topN) : 10,
      priorityTracks: req.body.priorityTracks,
      attachLiveVacancies: req.query.live !== 'false',
    });
    res.json({ ok: true, ...result });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.get('/api/exams', (req, res) => {
  const { exams } = loadExamMaster();
  const track = req.query.track;
  const state = req.query.state;
  let out = exams;
  if (track) out = out.filter(e => e.career_track === track);
  if (state) out = out.filter(e => (e.state_ut || '').toLowerCase() === state.toLowerCase());
  res.json({ count: out.length, exams: out.slice(0, 200) });
});

app.get('/api/exams/:id', async (req, res) => {
  const { exams } = loadExamMaster();
  const exam = exams.find(e => e.exam_id === req.params.id);
  if (!exam) return res.status(404).json({ ok: false, error: 'exam not found' });
  const live = await liveVacancies.getVacanciesFor(exam);
  res.json({ ok: true, exam, liveVacancies: live });
});

app.get('/api/jobs', async (req, res) => {
  try {
    const flatJobs = [];
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Normalize to start of day

    // 1. Fetch from local file cache if it exists
    if (fs.existsSync(HISTORY_PATH)) {
      try {
        const history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
        Object.keys(history).forEach(body => {
          history[body].forEach(job => {
            // Filter out obsolete/expired jobs
            if (job.lastDate) {
              const expDate = new Date(job.lastDate);
              if (expDate < now) return; // Skip expired
            }
            flatJobs.push({ ...job, body });
          });
        });
      } catch (fileErr) {
        console.error("Failed to read local scraped history:", fileErr.message);
      }
    }

    // 2. Fetch from Supabase notifications if connected
    try {
      const client = new Client({ connectionString: dbUrl });
      await client.connect();
      const query = `
        SELECT * FROM "notifications" 
        WHERE "type" = 'job' OR "type" = 'vacancy' OR "type" IS NULL 
        ORDER BY "created_at" DESC
      `;
      const dbRes = await client.query(query);
      dbRes.rows.forEach(row => {
        const meta = typeof row.metadata === 'string' ? JSON.parse(row.metadata) : (row.metadata || {});
        // Avoid duplicate listing if already loaded from local cache
        const isDuplicate = flatJobs.some(j => 
          j.title?.trim().toLowerCase() === row.title?.trim().toLowerCase() && 
          j.url?.trim().toLowerCase() === (meta.url || '').trim().toLowerCase()
        );
        if (!isDuplicate) {
          // Check expiration
          if (meta.lastDate) {
            const expDate = new Date(meta.lastDate);
            if (expDate < now) return;
          }
          flatJobs.push({
            title: row.title,
            body: row.body || 'Supabase Vacancy',
            url: meta.url || '',
            publishedOn: row.created_at || meta.publishedOn,
            lastDate: meta.lastDate,
            vacancies: meta.vacancies,
            ageRange: meta.ageRange,
            isSupabase: true
          });
        }
      });
      await client.end();
    } catch (dbErr) {
      console.warn("Could not load jobs from Supabase notifications:", dbErr.message);
    }

    // Sort by publishedOn descending
    flatJobs.sort((a, b) => new Date(b.publishedOn || 0) - new Date(a.publishedOn || 0));
    res.json({ ok: true, count: flatJobs.length, jobs: flatJobs });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.post('/api/jobs/refresh', async (req, res) => {
  try {
    const checkAll = req.query.all === 'true';
    const master = loadExamMaster();
    const exams = master.exams;
    
    let history = {};
    if (fs.existsSync(HISTORY_PATH)) {
      history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
    }

    const CORE_KEYWORDS = ['staff selection', 'ibps', 'railway', 'upsc', 'crpf', 'bsf', 'cisf', 'itbp', 'ssb', 'public service commission', 'police'];
    let bodies = [...new Set(exams.map(e => e.conducting_body))].filter(Boolean);
    
    if (!checkAll) {
      bodies = bodies.filter(body => 
        CORE_KEYWORDS.some(k => body.toLowerCase().includes(k))
      );
    }

    const newHistory = { ...history };
    const newEntries = [];
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Normalize to start of day

    // Run sequentially for stability in small environments
    for (const body of bodies) {
      const exampleExam = exams.find(e => e.conducting_body === body);
      try {
        const fetchResult = await liveVacancies.getVacanciesFor(exampleExam);
        const prevEntries = history[body] || [];
        const currentEntries = fetchResult.notifications || [];
        
        // 1. Filter out duplicates inside the fetched entries themselves
        const uniqueFetched = [];
        const fetchedKeys = new Set();
        currentEntries.forEach(item => {
          const key = `${item.title?.trim()}|${item.url?.trim()}`;
          if (!fetchedKeys.has(key)) {
            fetchedKeys.add(key);
            uniqueFetched.push(item);
          }
        });

        // 2. Filter out obsolete/expired entries from the fetched list
        const activeCurrentEntries = uniqueFetched.filter(job => {
          if (job.lastDate) {
            const expDate = new Date(job.lastDate);
            return expDate >= now; // Keep active
          }
          return true;
        });

        // 3. Match against previously seen items to identify "fresh" notifications
        const seen = new Set(prevEntries.map(e => `${e.title?.trim()}|${e.url?.trim()}`));
        const fresh = activeCurrentEntries.filter(e => !seen.has(`${e.title?.trim()}|${e.url?.trim()}`));
        
        if (fresh.length > 0) {
          fresh.forEach(f => newEntries.push({ body, ...f }));
          
          // Write to Supabase notifications table
          try {
            const client = new Client({ connectionString: dbUrl });
            await client.connect();
            for (const f of fresh) {
              const query = `
                INSERT INTO "notifications" ("type", "title", "body", "metadata", "is_read", "created_at")
                VALUES ($1, $2, $3, $4, $5, $6)
              `;
              const metadata = JSON.stringify({
                url: f.url,
                lastDate: f.lastDate,
                publishedOn: f.publishedOn,
                vacancies: f.vacancies,
                ageRange: f.ageRange
              });
              await client.query(query, ['job', f.title, body, metadata, false, new Date()]);
            }
            await client.end();
            console.log(`Synced ${fresh.length} fresh jobs to Supabase.`);
          } catch (dbErr) {
            console.error("Failed to push fresh jobs to Supabase:", dbErr.message);
          }
        }
        newHistory[body] = activeCurrentEntries;
      } catch (err) {
        console.error(`Scrape failed for ${body}:`, err.message);
      }
    }

    fs.writeFileSync(HISTORY_PATH, JSON.stringify(newHistory, null, 2));
    res.json({ ok: true, newEntriesCount: newEntries.length, newEntries });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.post('/api/refresh-vacancies', async (_req, res) => {
  const master = loadExamMaster();
  const result = await liveVacancies.refreshAll(master, { concurrency: 6 });
  res.json({ ok: true, ...result });
});

// ---- Scheduled refresh every 6 hours ----
cron.schedule('0 */6 * * *', async () => {
  try {
    const master = loadExamMaster();
    console.log(`[cron] Refreshing ${master.exams.length} vacancies...`);
    await liveVacancies.refreshAll(master, { concurrency: 6 });
    console.log('[cron] Refresh done.');
  } catch (e) {
    console.error('[cron] Refresh failed:', e.message);
  }
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ ok: false, error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`VeerNXT Profiling Engine listening on :${PORT}`);
});

module.exports = app;
