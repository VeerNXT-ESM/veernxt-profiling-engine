/**
 * Express server exposing the profiling engine as a REST API
 * so your Node.js website backend can call it.
 *
 *   POST /api/recommend        → top-10 exam recommendations
 *   POST /api/validate         → validate profile payload
 *   GET  /api/exams            → list all exams
 *   GET  /api/exams/:id        → single exam detail + live vacancies
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

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`VeerNXT Profiling Engine listening on :${PORT}`);
});

module.exports = app;
