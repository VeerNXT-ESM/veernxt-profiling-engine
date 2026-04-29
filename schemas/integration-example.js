/**
 * Reference integration: how your existing Node.js website backend wires the
 * profiling engine into the profile-submission flow.
 *
 * Copy these patterns into your Express / Fastify / NestJS app.
 */

const express = require('express');
const mongoose = require('mongoose');
const { recommendTopExams } = require('../src');                  // library import
const {
  Profile, Recommendation, Exam, Vacancy, ConfigSnapshot,
} = require('./mongoose-models');

const app = express();
app.use(express.json());

// Ensure Mongo connected before handlers run
mongoose.connect(process.env.MONGO_URI);

// ---------------------------------------------------------------------------
// Agniveer submits the career profiling form on the VeerNXT website
// ---------------------------------------------------------------------------
app.post('/profile/submit', requireAuth, async (req, res) => {
  try {
    // 1. Persist the profile
    const profileDoc = await Profile.create({
      agniveerUserId: req.user._id,
      ...req.body,
    });

    // 2. Run the engine (attaches live vacancies by default)
    const result = await recommendTopExams(req.body, {
      topN: 10,
      priorityTracks: ['POLICE_CAPF', 'SSC', 'BANKING', 'RAILWAYS', 'ENGINEERING', 'PSU'],
      attachLiveVacancies: true,
    });

    // 3. Snapshot the recommendation (for audit)
    const recDoc = await Recommendation.create({
      profileId:      profileDoc._id,
      agniveerUserId: req.user._id,
      totalEligible:  result.totalEligible,
      totalRejected:  result.totalRejected,
      recommendations: result.recommendations.map(r => ({
        ...r,
        liveVacanciesSnapshot: r.liveVacancies,
      })),
      engineVersion: '1.0.0',
      weightsVersion: 'v1',
      priorityTracks: ['POLICE_CAPF','SSC','BANKING','RAILWAYS','ENGINEERING','PSU'],
    });

    // 4. Return to the Agniveer
    res.json({
      ok: true,
      profileId: profileDoc._id,
      recommendationId: recDoc._id,
      topTen: result.recommendations,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ---------------------------------------------------------------------------
// Agniveer re-opens their last recommendation (read-only, fast)
// ---------------------------------------------------------------------------
app.get('/profile/my-recommendations', requireAuth, async (req, res) => {
  const rec = await Recommendation.findOne({ agniveerUserId: req.user._id })
                                   .sort({ generatedAt: -1 })
                                   .lean();
  if (!rec) return res.json({ ok: true, topTen: [] });
  res.json({ ok: true, topTen: rec.recommendations });
});

// ---------------------------------------------------------------------------
// Counsellor overrides an eligibility flag on an exam
// ---------------------------------------------------------------------------
app.patch('/admin/exams/:examId', requireAdmin, async (req, res) => {
  const exam = await Exam.findOneAndUpdate(
    { exam_id: req.params.examId },
    { $set: req.body, updatedBy: req.user._id },
    { new: true },
  );
  res.json({ ok: true, exam });
});

// ---------------------------------------------------------------------------
// Scheduled refresh of live vacancies (can also run as separate worker)
// ---------------------------------------------------------------------------
const liveVacancies = require('../src/scrapers');
const cron = require('node-cron');
cron.schedule('0 */6 * * *', async () => {
  const exams = await Exam.find({ isActive: true }).lean();
  for (const exam of exams) {
    try {
      const res = await liveVacancies.getVacanciesFor(exam);
      await Vacancy.findOneAndUpdate(
        { exam_id: exam.exam_id },
        { ...res, exam_id: exam.exam_id, fetchedAt: new Date() },
        { upsert: true },
      );
    } catch (e) {
      await Vacancy.findOneAndUpdate(
        { exam_id: exam.exam_id },
        { fetchError: e.message, fetchedAt: new Date(), exam_id: exam.exam_id },
        { upsert: true },
      );
    }
  }
});

// ---------------------------------------------------------------------------
// Placeholder middlewares — replace with your own auth
// ---------------------------------------------------------------------------
function requireAuth(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'unauthenticated' });
  next();
}
function requireAdmin(req, res, next) {
  if (!req.user?.isAdmin) return res.status(403).json({ error: 'forbidden' });
  next();
}

module.exports = app;
