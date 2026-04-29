const { fetchHTML, normalise } = require('./_base');
const HOME = 'https://www.ibps.in/';

async function fetch(exam) {
  try {
    const $ = await fetchHTML(HOME);
    const rows = [];
    $('.marquee a, .latestnews a, a').each((_, el) => {
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
    return normalise(rows.slice(0, 5), 'ibps.in');
  } catch (e) {
    return normalise([], 'ibps.in (fetch failed: ' + e.message + ')');
  }
}
function matches(exam, text) {
  const name = (exam.exam_name || '').toLowerCase();
  const t = text.toLowerCase();
  // IBPS RRB PO → match "RRB" + "PO"
  const keywords = name.replace(/ibps/ig, '').split(/[^a-z0-9]+/).filter(Boolean);
  return keywords.every(k => t.includes(k));
}
module.exports = { fetch };
