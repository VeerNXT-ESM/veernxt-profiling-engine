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

const HISTORY_PATH = path.resolve(__dirname, '../data/scraped_history.json');
const MASTER_PATH = path.resolve(__dirname, '../data/exam_master.json');

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

app.get('/api/jobs', (req, res) => {
  if (!fs.existsSync(HISTORY_PATH)) {
    return res.json({ ok: true, jobs: [] });
  }
  try {
    const history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
    const flatJobs = [];
    Object.keys(history).forEach(body => {
      history[body].forEach(job => {
        flatJobs.push({ ...job, body });
      });
    });
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

    // Run sequentially for stability in small environments
    for (const body of bodies) {
      const exampleExam = exams.find(e => e.conducting_body === body);
      try {
        const fetchResult = await liveVacancies.getVacanciesFor(exampleExam);
        const prevEntries = history[body] || [];
        const currentEntries = fetchResult.notifications || [];
        
        const seen = new Set(prevEntries.map(e => `${e.title}|${e.url}`));
        const fresh = currentEntries.filter(e => !seen.has(`${e.title}|${e.url}`));
        
        if (fresh.length > 0) {
          fresh.forEach(f => newEntries.push({ body, ...f }));
        }
        newHistory[body] = currentEntries;
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`VeerNXT Profiling Engine listening on :${PORT}`);
});

module.exports = app;
