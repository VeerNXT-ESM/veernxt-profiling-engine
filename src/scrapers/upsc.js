const { fetchHTML, normalise } = require('./_base');
const HOME = 'https://upsc.gov.in/';

async function fetch(exam) {
  try {
    const $ = await fetchHTML(HOME);
    const rows = [];
    $('a').each((_, el) => {
      const title = $(el).text().trim();
      const href  = $(el).attr('href') || '';
      if (!title || !href) return;
      if (matches(exam, title)) {
        rows.push({
          title,
          url: new URL(href, HOME).toString(),
        });
      }
    });
    return normalise(rows.slice(0, 5), 'upsc.gov.in');
  } catch (e) {
    return normalise([], 'upsc.gov.in (fetch failed: ' + e.message + ')');
  }
}
function matches(exam, text) {
  const n = (exam.exam_name || '').toLowerCase();
  const t = text.toLowerCase();
  return n.split(/[^a-z0-9]+/).filter(k => k.length > 3).some(k => t.includes(k));
}
module.exports = { fetch };
