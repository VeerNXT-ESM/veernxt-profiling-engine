/**
 * Base scraper helpers shared by every conducting-body scraper.
 * - Uses axios with retry and polite user-agent
 * - Normalises the output shape
 */

const axios   = require('axios');
const cheerio = require('cheerio');

const UA = 'VeerNXT-Agniveer-Career-Bot/1.0 (+contact: veernxt.in)';

async function fetchHTML(url, { retries = 2, timeoutMs = 15000 } = {}) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      const { data } = await axios.get(url, {
        timeout: timeoutMs,
        headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*' },
        maxRedirects: 5,
      });
      return cheerio.load(data);
    } catch (e) {
      lastErr = e;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw lastErr;
}

function normalise(notifications = [], source = '') {
  return {
    source,
    fetchedAt: new Date().toISOString(),
    notifications: notifications.map(n => ({
      title:       n.title?.toString().trim() || '',
      url:         n.url  || '',
      publishedOn: n.publishedOn || null,
      vacancies:   typeof n.vacancies === 'number' ? n.vacancies : null,
      ageRange:    n.ageRange || null,         // { min, max }
      lastDate:    n.lastDate || null,
      notes:       n.notes    || '',
    })),
  };
}

module.exports = { fetchHTML, normalise };
