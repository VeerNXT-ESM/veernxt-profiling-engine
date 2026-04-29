/**
 * State Public Service Commissions — one scraper handles all by using
 * the website URL stored in exam.website. Each PSC has its own layout,
 * so this is a "best-effort" generic pass that lists "recruitment"/"notification"
 * links from the homepage.
 */
const { fetchHTML, normalise } = require('./_base');

async function fetch(exam) {
  const url = exam.website;
  if (!url) return normalise([], 'state-psc (no url)');
  try {
    const $ = await fetchHTML(url);
    const rows = [];
    $('a').each((_, el) => {
      const title = $(el).text().trim();
      const href  = $(el).attr('href') || '';
      if (!title || !href) return;
      if (/recruit|notification|advt|vacancy|notice/i.test(title)) {
        rows.push({ title, url: new URL(href, url).toString() });
      }
    });
    return normalise(rows.slice(0, 5), new URL(url).hostname);
  } catch (e) {
    return normalise([], 'state-psc (fetch failed: ' + e.message + ')');
  }
}
module.exports = { fetch };
