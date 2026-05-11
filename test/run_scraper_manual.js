const fs = require('fs');
const path = require('path');
const { getVacanciesFor, routeFor } = require('../src/scrapers/index');

const HISTORY_PATH = path.resolve(__dirname, '../data/scraped_history.json');
const MASTER_PATH = path.resolve(__dirname, '../data/exam_master.json');

const CORE_KEYWORDS = ['staff selection', 'ibps', 'railway', 'upsc', 'crpf', 'bsf', 'cisf', 'itbp', 'ssb', 'public service commission', 'police'];

async function runManualScrape() {
  const checkAll = process.argv.includes('--all');
  console.log(`\n>>> STARTING MANUAL SCRAPE (First Page Only) <<<\n`);
  if (!checkAll) {
    console.log(`[INFO] Only checking CORE job boards. Use --all to check all ${MASTER_PATH} entries.\n`);
  }

  // 1. Load History
  let history = {};
  if (fs.existsSync(HISTORY_PATH)) {
    history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
  }

  // 2. Load Master
  const master = JSON.parse(fs.readFileSync(MASTER_PATH, 'utf-8'));
  const exams = master.exams;

  // 3. Filter bodies
  let bodies = [...new Set(exams.map(e => e.conducting_body))].filter(Boolean);
  
  if (!checkAll) {
    bodies = bodies.filter(body => 
      CORE_KEYWORDS.some(k => body.toLowerCase().includes(k))
    );
  }

  console.log(`Checking ${bodies.length} conducting bodies...\n`);

  const newHistory = { ...history };
  const allNewEntries = [];

  // We only need to scrape each conducting body's landing page ONCE
  // because our scrapers (SSC, UPSC, etc.) fetch the latest feed for that body.
  for (const body of bodies) {
    if (!body) continue;
    
    // Pick the first exam belonging to this body to trigger the scraper
    const exampleExam = exams.find(e => e.conducting_body === body);
    
    console.log(`Checking ${body.padEnd(40)} ...`);
    
    try {
      // getVacanciesFor internally caches, so for manual run we bypass or clear cache if needed
      // but since this is a fresh node process, the internal Map is empty.
      const res = await getVacanciesFor(exampleExam);
      
      const prevEntries = history[body] || [];
      const currentEntries = res.notifications || [];
      
      // Identify NEW entries
      const seen = new Set(prevEntries.map(e => `${e.title}|${e.url}`));
      const fresh = currentEntries.filter(e => !seen.has(`${e.title}|${e.url}`));
      
      if (fresh.length > 0) {
        console.log(`   [!] FOUND ${fresh.length} NEW ENTRIES!`);
        fresh.forEach(f => {
          console.log(`       - ${f.title}`);
          allNewEntries.push({ body, ...f });
        });
      } else {
        console.log(`   [OK] No new entries since last run.`);
      }
      
      // Update history
      newHistory[body] = currentEntries;
      
    } catch (e) {
      console.error(`   [ERR] Failed to scrape ${body}: ${e.message}`);
    }
  }

  // 4. Save History
  fs.writeFileSync(HISTORY_PATH, JSON.stringify(newHistory, null, 2));
  
  console.log(`\n>>> SCRAPE COMPLETE <<<`);
  console.log(`Total new jobs discovered: ${allNewEntries.length}`);
  if (allNewEntries.length > 0) {
    console.log(`History updated in: ${HISTORY_PATH}`);
  }
}

runManualScrape();
