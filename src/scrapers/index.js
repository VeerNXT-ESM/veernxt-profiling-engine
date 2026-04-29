/**
 * Live Vacancy / Notification Scraper — dispatch layer.
 *
 * For each exam in the master list, we look up the correct scraper
 * (per conducting body) and return normalised notifications:
 *
 *   { title, url, publishedOn, vacancies, ageRange, lastDate, source }
 *
 * Scrapers are cached (in Redis/Mongo) so every recommendation call
 * doesn't hammer government websites. A node-cron job (see server.js)
 * refreshes the cache every N hours.
 */

const sscScraper      = require('./ssc');
const ibpsScraper     = require('./ibps');
const rrbScraper      = require('./rrb');
const upscScraper     = require('./upsc');
const capfScraper     = require('./capf');
const statePscScraper = require('./state-psc');
const genericScraper  = require('./generic');

const cache = new Map(); // In production: replace with Redis/Mongo

const TTL_MS = 6 * 60 * 60 * 1000; // 6 hours

function routeFor(exam) {
  const body = (exam.conducting_body || '').toLowerCase();
  if (body.includes('staff selection')) return sscScraper;
  if (body.includes('ibps'))            return ibpsScraper;
  if (body.includes('railway'))         return rrbScraper;
  if (body.includes('upsc'))            return upscScraper;
  if (body.includes('crpf') || body.includes('bsf') || body.includes('cisf')
      || body.includes('itbp') || body.includes('ssb')) return capfScraper;
  if (body.includes('public service commission')) return statePscScraper;
  return genericScraper;
}

async function getVacanciesFor(exam) {
  const cacheKey = exam.exam_id;
  const hit = cache.get(cacheKey);
  if (hit && (Date.now() - hit.fetchedAt) < TTL_MS) {
    return hit.data;
  }
  const scraper = routeFor(exam);
  const data = await scraper.fetch(exam);
  cache.set(cacheKey, { fetchedAt: Date.now(), data });
  return data;
}

async function refreshAll(examMaster, { concurrency = 4 } = {}) {
  const exams = examMaster.exams || examMaster;
  let i = 0;
  async function worker() {
    while (i < exams.length) {
      const exam = exams[i++];
      try {
        await getVacanciesFor(exam);
      } catch (e) {
        console.warn(`Refresh failed for ${exam.exam_id}: ${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return { refreshed: exams.length };
}

module.exports = { getVacanciesFor, refreshAll, routeFor };
