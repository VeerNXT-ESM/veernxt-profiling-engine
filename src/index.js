/**
 * Library-style export so you can `require('veernxt-profiling-engine')` inside
 * your existing Node.js website backend without spinning up the Express server.
 */

const { recommendTopExams, loadExamMaster } = require('./engine/recommend');
const { scoreExam }       = require('./engine/scoring');
const { checkEligibility} = require('./engine/eligibility');
const { profileSchema }   = require('./validators/profileSchema');
const liveVacancies       = require('./scrapers/index');

module.exports = {
  recommendTopExams,
  loadExamMaster,
  scoreExam,
  checkEligibility,
  profileSchema,
  liveVacancies,
};
