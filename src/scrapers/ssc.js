/**
 * Scraper for Staff Selection Commission notifications.
 *   Landing page: https://ssc.gov.in/  → "Notices" / "Notifications" section
 *
 * SSC periodically publishes per-exam notices. We read the homepage notice list
 * and filter those whose title matches the exam.exam_name keywords.
 */

const { fetchHTML, normalise } = require('./_base');

const HOME = 'https://ssc.gov.in/';
const NOTICE_BOARD = 'https://ssc.gov.in/notice-board';

async function fetch(exam) {
  try {
    const $ = await fetchHTML(NOTICE_BOARD);
    const rows = [];
    $('a').each((_, el) => {
      const title = $(el).text().trim();
      const href  = $(el).attr('href') || '';
      if (!title || !href.toLowerCase().endsWith('.pdf') && !/notice|notification/i.test(title)) return;
      if (matches(exam, title)) {
        rows.push({
          title,
          url: new URL(href, HOME).toString(),
          publishedOn: null,   // SSC lists dates in adjacent cells; parser TBD
          vacancies: null,
          ageRange: null,
          lastDate: null,
        });
      }
    });
    return normalise(rows.slice(0, 5), 'ssc.gov.in');
  } catch (e) {
    return normalise([], 'ssc.gov.in (fetch failed: ' + e.message + ')');
  }
}

function matches(exam, text) {
  const keywords = (exam.exam_name || '')
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .split(/[^a-z0-9]+/)
    .filter(k => k.length > 2);
  const t = text.toLowerCase();
  return keywords.some(k => t.includes(k));
}

module.exports = { fetch };
