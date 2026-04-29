/**
 * RRB (Railway Recruitment Board) — there are 21 regional RRBs + a central RRB CEN
 * aggregator at https://www.rrbcdg.gov.in and https://indianrailways.gov.in/railwayboard/
 * Strategy: scan https://www.rrbcdg.gov.in/ for notice links.
 */
const { fetchHTML, normalise } = require('./_base');
const HOME = 'https://www.rrbcdg.gov.in/';

async function fetch(exam) {
  try {
    const $ = await fetchHTML(HOME);
    const rows = [];
    $('a').each((_, el) => {
      const title = $(el).text().trim();
      const href  = $(el).attr('href') || '';
      if (!title || !href) return;
      if (/cen|notice|recruit/i.test(title) && matches(exam, title)) {
        rows.push({
          title,
          url: new URL(href, HOME).toString(),
        });
      }
    });
    return normalise(rows.slice(0, 5), 'rrbcdg.gov.in');
  } catch (e) {
    return normalise([], 'rrbcdg.gov.in (fetch failed: ' + e.message + ')');
  }
}
function matches(exam, text) {
  const t = text.toLowerCase();
  const n = (exam.exam_name || '').toLowerCase();
  if (n.includes('ntpc') && t.includes('ntpc')) return true;
  if (n.includes('group d') && t.includes('group d')) return true;
  if (n.includes('alp') && t.includes('alp')) return true;
  if (n.includes('je') && /junior engineer|je/.test(t)) return true;
  return t.includes('recruit');
}
module.exports = { fetch };
