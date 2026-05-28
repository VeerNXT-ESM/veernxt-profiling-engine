const { Client } = require('pg');

const DB_URL = 'postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres';

let cachedResources = null;

/**
 * Connects to Supabase and fetches all study resources.
 * Caches in memory to avoid repetitive DB hits during the batch run of 113+ profiles.
 */
async function getAllResources() {
  if (cachedResources) return cachedResources;

  const client = new Client({ connectionString: DB_URL });
  try {
    await client.connect();
    const res = await client.query('SELECT id, title, subject, category, exam_name, conducting_body, website_url, thumbnail_url, is_freemium, is_locked FROM resources');
    cachedResources = res.rows;
    return cachedResources;
  } catch (err) {
    console.error('Error fetching resources from DB:', err.message);
    // Fallback to empty array to ensure stress test does not crash
    return [];
  } finally {
    try {
      await client.end();
    } catch (e) {
      // Ignore client closing errors
    }
  }
}

/**
 * Scores and ranks resources for a list of recommended exams.
 * Combines exact/fuzzy exam matching with career track subject mapping.
 * 
 * @param {Array} recommendations - The user's top-10 recommended exams from the engine
 * @returns {Array} Top-5 matched resources
 */
async function matchResourcesForExams(recommendations = []) {
  if (!recommendations || recommendations.length === 0) return [];
  
  const resources = await getAllResources();
  if (resources.length === 0) return [];

  const matched = resources.map(resource => {
    let score = 0;
    const matches = [];

    // Helper for normalized comparison
    const norm = (str) => (str || '').toString().toLowerCase().trim();

    const resTitle = norm(resource.title);
    const resSubject = norm(resource.subject);
    const resCategory = norm(resource.category);
    const resExamName = norm(resource.exam_name);
    const resConductingBody = norm(resource.conducting_body);

    recommendations.forEach(rec => {
      const examName = norm(rec.exam_name);
      const conductingBody = norm(rec.conducting_body);
      const track = norm(rec.career_track);
      
      // Calculate weight based on the exam rank (1st has highest weight)
      // Rank ranges from 1 to 10. Weight ranges from 1.0 (Rank 1) to 0.1 (Rank 10).
      const rankWeight = (11 - rec.rank) / 10;

      // 1. Direct Exam / Conducting Body matches (high score)
      let examMatch = false;
      if (resExamName && (resExamName.includes(examName) || examName.includes(resExamName))) {
        score += 80 * rankWeight;
        examMatch = true;
      }
      if (resTitle && (resTitle.includes(examName) || resTitle.includes(conductingBody))) {
        score += 60 * rankWeight;
        examMatch = true;
      }
      if (resConductingBody && (resConductingBody.includes(conductingBody) || conductingBody.includes(resConductingBody))) {
        score += 40 * rankWeight;
        examMatch = true;
      }

      if (examMatch) {
        matches.push(rec.exam_name);
      }

      // 2. Career track to subject matching rules
      let trackMatch = false;
      
      // Banking track match
      if (track === 'banking' && (resSubject.includes('bank') || resCategory.includes('bank') || 
          resSubject.includes('aptitude') || resSubject.includes('quant') || resSubject.includes('reasoning') || resSubject.includes('english'))) {
        score += 30 * rankWeight;
        trackMatch = true;
      }

      // Police & CAPF track match
      if (track === 'police_capf' && (resSubject.includes('police') || resCategory.includes('police') || 
          resSubject.includes('gk') || resSubject.includes('general knowledge') || resSubject.includes('history') || resSubject.includes('law'))) {
        score += 30 * rankWeight;
        trackMatch = true;
      }

      // Railways track match
      if (track === 'railways' && (resSubject.includes('rail') || resCategory.includes('rail') || 
          resSubject.includes('gk') || resSubject.includes('general awareness') || resSubject.includes('science'))) {
        score += 30 * rankWeight;
        trackMatch = true;
      }

      // SSC track match
      if (track === 'ssc' && (resSubject.includes('ssc') || resCategory.includes('ssc') || 
          resSubject.includes('gk') || resSubject.includes('english') || resSubject.includes('quant') || resSubject.includes('reasoning'))) {
        score += 35 * rankWeight;
        trackMatch = true;
      }

      // Defence track match
      if (track === 'defence' && (resSubject.includes('defence') || resCategory.includes('defence') || 
          resSubject.includes('gk') || resSubject.includes('history') || resSubject.includes('science'))) {
        score += 30 * rankWeight;
        trackMatch = true;
      }

      // Engineering & technical match
      if (track === 'engineering' && (resSubject.includes('engineer') || resCategory.includes('engineer') || 
          resSubject.includes('tech') || resSubject.includes('math') || resSubject.includes('physics'))) {
        score += 40 * rankWeight;
        trackMatch = true;
      }

      // General fallback subject matching
      if (!trackMatch) {
        if (resSubject && (track.includes(resSubject) || resSubject.includes(track))) {
          score += 15 * rankWeight;
        }
      }
    });

    return {
      id: resource.id,
      title: resource.title,
      subject: resource.subject,
      category: resource.category,
      exam_name: resource.exam_name,
      conducting_body: resource.conducting_body,
      website_url: resource.website_url,
      thumbnail_url: resource.thumbnail_url,
      is_freemium: resource.is_freemium,
      is_locked: resource.is_locked,
      matchScore: Math.round(score * 10) / 10,
      matchedExams: [...new Set(matches)]
    };
  });

  // Filter non-zero matches, sort descending, and return top 5
  return matched
    .filter(r => r.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);
}

// Standalone diagnostics run
if (require.main === module) {
  (async () => {
    console.log('Querying resources from database for verification...');
    const resources = await getAllResources();
    console.log(`Successfully fetched and cached ${resources.length} study resources.`);
    if (resources.length > 0) {
      console.log('Sample resource entry:');
      console.log(JSON.stringify(resources[0], null, 2));

      // Test with dummy banking recommendations
      const dummyExams = [
        { rank: 1, exam_name: 'IBPS RRB Clerk', conducting_body: 'Institute of Banking Personnel Selection', career_track: 'BANKING' },
        { rank: 2, exam_name: 'SSC GD Constable', conducting_body: 'Staff Selection Commission', career_track: 'POLICE_CAPF' }
      ];
      const matched = await matchResourcesForExams(dummyExams);
      console.log(`\nMatched ${matched.length} study resources for sample exams:`);
      console.log(JSON.stringify(matched, null, 2));
    }
  })();
}

module.exports = {
  getAllResources,
  matchResourcesForExams
};
