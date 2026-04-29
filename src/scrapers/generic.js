/**
 * Generic fallback scraper. Looks at the exam's own website for anchors
 * that contain recruitment / notification / vacancy keywords.
 */
const { fetchHTML, normalise } = require('./_base');

async function fetch(exam) {
  const url = exam.website;
  if (!url) return normalise([], 'generic (no url)');
  try {
    const $ = await fetchHTML(url);
    const rows = [];
    $('a').each((_, el) => {
      const title = $(el).text().trim();
      const href  = $(el).attr('href') || '';
      if (!title || !href) return;
      if (/recruit|notif|advt|vacancy|career|notice/i.test(title)) {
        rows.push({ title, url: new URL(href, url).toString() });
      }
    });
    return normalise(rows.slice(0, 5), new URL(url).hostname);
  } catch (e) {
    return normalise([], 'generic (fetch failed: ' + e.message + ')');
  }
}
module.exports = { fetch };
