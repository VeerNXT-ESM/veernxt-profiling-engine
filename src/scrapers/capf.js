/**
 * Central Armed Police Forces:
 *   CRPF, BSF, CISF, ITBP, SSB — each publishes recruitment on their own site.
 *   The SSC-CPO exam is scraped by ssc.js. Direct CAPF recruitments (force-level
 *   short recruitments, rallies) come from each force's own site.
 */
const { fetchHTML, normalise } = require('./_base');

const SITES = {
  CRPF: 'https://crpf.gov.in/',
  BSF:  'https://bsf.gov.in/',
  CISF: 'https://cisf.gov.in/',
  ITBP: 'https://itbpolice.nic.in/',
  SSB:  'https://ssb.nic.in/',
};

function detectForce(exam) {
  const b = (exam.conducting_body + ' ' + exam.exam_name).toUpperCase();
  for (const k of Object.keys(SITES)) if (b.includes(k)) return k;
  return null;
}

async function fetch(exam) {
  const force = detectForce(exam);
  const url = force ? SITES[force] : null;
  if (!url) return normalise([], 'capf (no route)');
  try {
    const $ = await fetchHTML(url);
    const rows = [];
    $('a').each((_, el) => {
      const title = $(el).text().trim();
      const href  = $(el).attr('href') || '';
      if (!title || !href) return;
      if (/recruit|notification|vacancy|advt/i.test(title)) {
        rows.push({ title, url: new URL(href, url).toString() });
      }
    });
    return normalise(rows.slice(0, 5), force + ' (' + url + ')');
  } catch (e) {
    return normalise([], force + ' (fetch failed: ' + e.message + ')');
  }
}
module.exports = { fetch };
