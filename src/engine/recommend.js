/**
 * Main entry point for the recommendation engine.
 *
 *   recommendTopExams(profile, options)
 *     ↳ loads exam master, applies hard eligibility gates,
 *       scores each survivor, attaches live vacancy data if available,
 *       returns the top-N (default 10) ranked results.
 */

const fs   = require('fs');
const path = require('path');
const { checkEligibility } = require('./eligibility');
const { scoreExam }        = require('./scoring');
// Lazy-load scrapers so the engine can run offline for tests / unit work
// without needing axios/cheerio installed.
function getLiveVacancies() { return require('../scrapers/index'); }

const EXAM_MASTER_PATH = path.resolve(__dirname, '../../data/exam_master.json');

let CACHE = null;
function loadExamMaster() {
  if (CACHE) return CACHE;
  if (!fs.existsSync(EXAM_MASTER_PATH)) {
    throw new Error(`exam_master.json not found at ${EXAM_MASTER_PATH}`);
  }
  CACHE = JSON.parse(fs.readFileSync(EXAM_MASTER_PATH, 'utf-8'));
  return CACHE;
}

/**
 * @param {Object} profile  — the Agniveer profile from Section A-F
 * @param {Object} options  — { topN:10, priorityTracks:[], attachLiveVacancies:true }
 */
async function recommendTopExams(profile, options = {}) {
  const topN = options.topN || 10;
  const priorityTracks = options.priorityTracks ||
    ['POLICE_CAPF', 'SSC', 'BANKING', 'RAILWAYS', 'ENGINEERING', 'PSU'];
  const attachLive = options.attachLiveVacancies !== false;

  const master = loadExamMaster();
  const exams = master.exams;

  // 1. Hard eligibility filter
  const survivors = [];
  const rejected = [];
  for (const exam of exams) {
    const e = checkEligibility(profile, exam);
    if (e.eligible) survivors.push(exam);
    else rejected.push({ exam_id: exam.exam_id, reasons: e.reasons });
  }

  // 2. Score survivors
  const scored = survivors.map(exam => {
    const { score, breakdown } = scoreExam(profile, exam, { priorityTracks });
    return { exam, score, breakdown };
  });

  // 3. Rank
  scored.sort((a, b) => b.score - a.score);

  // 4. Top-N  +  diversify a bit to avoid 10 identical SSC exams
  const diversified = diversify(scored, topN, 4);

  // 5. Attach live vacancy data (optional)
  if (attachLive) {
    const liveVacancies = getLiveVacancies();
    for (const row of diversified) {
      try {
        row.liveVacancies = await liveVacancies.getVacanciesFor(row.exam);
      } catch (e) {
        row.liveVacancies = { error: e.message, notifications: [] };
      }
    }
  }

  return {
    profileSummary: summariseProfile(profile),
    totalEligible: survivors.length,
    totalRejected: rejected.length,
    recommendations: diversified.map((r, i) => ({
      rank: i + 1,
      exam_id:         r.exam.exam_id,
      exam_name:       r.exam.exam_name,
      conducting_body: r.exam.conducting_body,
      level:           r.exam.level,
      state_ut:        r.exam.state_ut,
      career_track:    r.exam.career_track,
      website:         r.exam.website,
      score:           Math.round(r.score * 10) / 10,
      breakdown:       r.breakdown,
      liveVacancies:   r.liveVacancies,
      eligibilityFlags: {
        ex_servicemen_quota:  r.exam.ex_servicemen_quota,
        ncc_bonus:            r.exam.ncc_bonus,
        physical_required:    r.exam.physical_required,
        min_qualification:    r.exam.min_qualification,
        domicile_required:    r.exam.domicile_required,
      },
    })),
  };
}

/**
 * Diversify: cap the number of exams from the same career_track in the top-N
 * so the user doesn't get 10 SSC variants.
 */
function diversify(scored, topN, capPerTrack) {
  const out = [];
  const counts = {};
  for (const row of scored) {
    const t = row.exam.career_track;
    if ((counts[t] || 0) >= capPerTrack) continue;
    out.push(row);
    counts[t] = (counts[t] || 0) + 1;
    if (out.length >= topN) break;
  }
  // If we ran out because of the cap, pad with next best ignoring cap
  if (out.length < topN) {
    const chosen = new Set(out.map(r => r.exam.exam_id));
    for (const row of scored) {
      if (chosen.has(row.exam.exam_id)) continue;
      out.push(row);
      if (out.length >= topN) break;
    }
  }
  return out;
}

function summariseProfile(p) {
  return {
    name: p.fullName,
    branch: p.serviceBranch,
    trade: p.armCorpsTrade,
    qualification: p.highestQualification,
    domicile: p.stateOfDomicile,
    character: p.characterOnDischarge,
    preferences: p.careerPreferences,
  };
}

module.exports = { recommendTopExams, loadExamMaster };
