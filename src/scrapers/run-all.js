/**
 * Cron/CLI entry: refresh live vacancies for every exam in the master.
 * Usage:  node src/scrapers/run-all.js
 */
const fs = require('fs');
const path = require('path');
const { refreshAll } = require('./index');

const MASTER = path.resolve(__dirname, '../../data/exam_master.json');

(async () => {
  const data = JSON.parse(fs.readFileSync(MASTER, 'utf-8'));
  console.log(`Refreshing ${data.exams.length} exams...`);
  const t0 = Date.now();
  const res = await refreshAll(data, { concurrency: 6 });
  console.log(`Done in ${((Date.now() - t0)/1000).toFixed(1)}s — ${res.refreshed} exams refreshed`);
})();
