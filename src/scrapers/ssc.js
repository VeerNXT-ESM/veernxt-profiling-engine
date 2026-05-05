/**
 * Scraper for Staff Selection Commission notifications.
 *   Landing page: https://ssc.gov.in/  → "Notices" / "Notifications" section
 * 
 * Updated to use SSC API for SPA compatibility.
 */

const { fetchJSON, normalise } = require('./_base');

const API_ENDPOINT = 'https://ssc.gov.in/api/general-website/portal/records?page=1&limit=20&contentType=notice-boards&key=createdAt&order=DESC&pageType=filter&isAttachment=true&attributes=id,headline,examId,contentType,redirectUrl,startDate,endDate,language,createdAt&queryKey=startDate,endDate&customKey=createdAt&exams=false&date=false&language=english';

async function fetch(exam) {
  try {
    const response = await fetchJSON(API_ENDPOINT);
    const records = response.data || [];
    
    const rows = [];
    records.forEach(item => {
      const title = item.headline || '';
      if (matches(exam, title)) {
        rows.push({
          title,
          url: item.redirectUrl || `https://ssc.gov.in/portal/records/attachment/${item.id}`,
          publishedOn: item.createdAt || item.startDate,
          vacancies: null,
          ageRange: null,
          lastDate: item.endDate || null,
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
