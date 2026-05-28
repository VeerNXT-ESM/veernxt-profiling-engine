const fs = require('fs');
const path = require('path');
const { recommendTopExams } = require('../src/engine/recommend');
const { profileSchema } = require('../src/validators/profileSchema');
const { matchResourcesForExams } = require('./match_resources');

const CSV_PATH = path.resolve(__dirname, '../../web/public/User_Profiles.csv');
const RESULTS_JSON_PATH = path.resolve(__dirname, 'stress_test_results.json');
const HISTORY_PATH = path.resolve(__dirname, '../data/scraped_history.json');

// Helper to parse double-quoted CSV line properly, supporting embedded commas and quotes
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// -----------------------------------------------------------------------------
// NORMALIZATION HELPERS
// -----------------------------------------------------------------------------

function normalizeCategory(cat) {
  if (!cat) return 'General';
  const c = cat.toString().trim().toLowerCase();
  if (c.includes('obc')) return 'OBC';
  if (c.includes('sc')) return 'SC';
  if (c.includes('st')) return 'ST';
  if (c.includes('ews') || c.includes('general (ews)')) return 'EWS';
  return 'General';
}

function parseDOB(raw) {
  if (!raw) return '2002-01-01';
  try {
    const d = new Date(raw);
    if (!isNaN(d.getTime())) {
      return d.toISOString().split('T')[0];
    }
  } catch (e) {}
  return '2002-01-01';
}

function parseMobile(raw) {
  if (!raw) return '9000000000';
  const cleaned = raw.toString().replace(/[^0-9+\-\s]/g, '').trim();
  if (cleaned.length >= 7 && cleaned.length <= 15) {
    return cleaned;
  }
  return '9000000000';
}

function parseEmail(email, name) {
  if (!email) {
    const cleanName = (name || 'agniveer').toLowerCase().replace(/[^a-z0-9]/g, '');
    return `${cleanName}@veernxt.org`;
  }
  
  let e = email.toString().trim().toLowerCase();
  
  // Auto-correct common typos found in raw CSV data
  if (e.endsWith('.cim')) e = e.substring(0, e.length - 4) + '.com';
  if (e.endsWith('.comd')) e = e.substring(0, e.length - 5) + '.com';
  if (e.endsWith('@com')) e = e.replace('@com', '@gmail.com');
  
  // Validate format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(e)) {
    const cleanName = (name || 'agniveer').toLowerCase().replace(/[^a-z0-9]/g, '');
    return `${cleanName}@veernxt.org`;
  }
  
  return e;
}

function normalizeQual(qual) {
  if (!qual) return 'Class 12';
  const q = qual.toLowerCase();
  if (q.includes('matric') || q.includes('10')) return 'Class 10';
  if (q.includes('inter') || q.includes('12')) return 'Class 12';
  if (q.includes('gradu') || q.includes('degree') || q.includes('bba')) return 'Graduate';
  if (q.includes('post') || q.includes('master')) return 'Post-Graduate';
  return 'Class 12';
}

function normalizeNCC(ncc) {
  if (!ncc) return 'None';
  const n = ncc.toString().trim().toLowerCase();
  if (n.includes('n/a') || n.includes('none') || n.includes('nil')) return 'None';
  if (n.includes('c certificate') || n.includes('c cert') || n.startsWith('c')) return 'C Certificate';
  if (n.includes('b certificate') || n.includes('b cert') || n.startsWith('b')) return 'B Certificate';
  if (n.includes('a certificate') || n.includes('a cert') || n.startsWith('a')) return 'A Certificate';
  return 'None';
}

function normalizeSports(sports) {
  if (!sports) return 'None';
  const s = sports.toString().trim().toLowerCase();
  if (s.includes('none') || s.includes('nil') || s.includes('no')) return 'None';
  if (s.includes('internat') || s.includes('services')) return 'International/Services';
  if (s.includes('national')) return 'National';
  if (s.includes('state')) return 'State';
  if (s.includes('district')) return 'District';
  return 'None';
}

function normalizeRelocation(rel) {
  if (!rel) return 'Home State';
  const r = rel.toString().trim().toLowerCase();
  if (r.includes('district')) return 'Home District';
  if (r.includes('pan india') || r.includes('anywhere') || r.includes('india')) return 'Anywhere in India';
  return 'Home State';
}

function normalizeEnglish(eng) {
  if (!eng) return 'Basic';
  const e = eng.toString().trim().toLowerCase();
  if (e.includes('fluent')) return 'Fluent';
  if (e.includes('intermed')) return 'Intermediate';
  return 'Basic';
}

function parseHeight(raw) {
  if (!raw) return 170;
  const match = raw.toString().match(/\d+/);
  if (!match) return 170;
  let val = parseInt(match[0], 10);
  
  // Height outliers normalization (e.g. 1638 -> 163, 73 -> 173)
  if (val > 250) {
    const s = val.toString();
    if (s.length >= 3) {
      const candidate = parseInt(s.substring(0, 3), 10);
      if (candidate >= 100 && candidate <= 250) {
        return candidate;
      }
    }
    return 170;
  }
  if (val < 100) {
    if (val >= 50 && val <= 99) {
      return val + 100;
    }
    return 170;
  }
  return val;
}

function parseChest(raw) {
  if (!raw) return { chestCm: null, chestExpansion: 5 };
  const s = raw.toString().trim().toLowerCase();
  
  // Find up to two numbers in string (chest and expansion / inflated chest)
  const numbers = [];
  const regex = /(\d+(?:\.\d+)?)/g;
  let match;
  while ((match = regex.exec(s)) !== null) {
    numbers.push(parseFloat(match[1]));
  }
  
  if (numbers.length >= 2) {
    const c1 = numbers[0];
    const c2 = numbers[1];
    if (c1 >= 70 && c1 <= 120 && c2 >= 70 && c2 <= 120) {
      const chest = Math.min(c1, c2);
      const expansion = Math.abs(c2 - c1);
      return { chestCm: chest, chestExpansion: expansion };
    }
  }
  
  if (numbers.length >= 1) {
    const c = numbers[0];
    if (c >= 70 && c <= 120) {
      return { chestCm: c, chestExpansion: 5 };
    }
  }
  
  return { chestCm: null, chestExpansion: 5 };
}

function normalizeMedical(med) {
  if (!med) return 'SHAPE-1';
  const m = med.toString().trim().toUpperCase();
  if (m.includes('SHAPE-1') || m.includes('SHAPE 1') || m.includes('GOOD')) return 'SHAPE-1';
  return m; // Preserve other categories (like F(2)P) for physical gate filtering
}

function normalizeCharacter(char) {
  if (!char) return 'Exemplary';
  const c = char.toString().trim().toLowerCase();
  if (c.includes('exemplary')) return 'Exemplary';
  if (c.includes('very good')) return 'Very Good';
  if (c.includes('good')) return 'Good';
  return 'Exemplary';
}

function normalizePhysical(prof) {
  if (!prof) return 'Good';
  const p = prof.toString().trim().toLowerCase();
  if (p.includes('excellent')) return 'Excellent';
  if (p.includes('satisfactory')) return 'Satisfactory';
  if (p.includes('good')) return 'Good';
  return 'Good';
}

function parseMilitaryCourses(courses) {
  if (!courses) return [];
  const s = courses.toString().trim();
  const lower = s.toLowerCase();
  if (lower === 'no' || lower === 'nil' || lower === 'nill' || lower === '-' || lower === 'non' || lower === 'nahi') {
    return [];
  }
  return s.split(',').map(item => item.trim()).filter(Boolean);
}

function mapCSVToProfile(row) {
  // Column indices from CSV analysis
  const name = row[1];
  const dob = parseDOB(row[2]);
  const category = normalizeCategory(row[5]);
  const state = row[6] || 'Delhi';
  const district = row[7] || '';
  const marital = (row[8] || 'Single').includes('Married') ? 'Married' : 'Single';
  const email = parseEmail(row[4], name);
  const mobile = parseMobile(row[3]);
  const branch = normalizeServiceBranch(row[9]);
  const trade = row[10] || 'General Duty';
  const role = row[11] || 'General Duty';
  const courses = parseMilitaryCourses(row[12]);
  const character = normalizeCharacter(row[13]);
  const skills = row[14] ? row[14].split(',').map(s => s.trim()).filter(Boolean) : [];
  const qual = normalizeQual(row[15]);
  const ncc = normalizeNCC(row[16]);
  const sports = normalizeSports(row[17]);
  const height = parseHeight(row[18]);
  const { chestCm, chestExpansion } = parseChest(row[19]);
  const vision = row[20] || '6/6';
  const medical = normalizeMedical(row[21]);
  const physical = normalizePhysical(row[22]);
  
  // Split preferences by comma for robust normalisePreferences match
  const preferences = row[23] ? row[23].split(',').map(s => s.trim()).filter(Boolean) : ['Central Govt'];
  const relocation = normalizeRelocation(row[24]);
  const english = normalizeEnglish(row[25]);
  const sewa = row[26] ? row[26].split(',').map(s => s.trim()).filter(Boolean) : [];

  // Infer Math in Class 12 based on technical roles/trades
  let mathInClass12 = false;
  const tradeLower = `${trade} ${role} ${skills.join(' ')}`.toLowerCase();
  if (tradeLower.includes('technical') || tradeLower.includes('eme') || tradeLower.includes('clerk') || tradeLower.includes('artzan') || tradeLower.includes('weld')) {
    mathInClass12 = true;
  }

  function normalizeServiceBranch(b) {
    if (!b) return 'Indian Army';
    const s = b.toLowerCase();
    if (s.includes('navy')) return 'Indian Navy';
    if (s.includes('air') || s.includes('iaf')) return 'Indian Air Force';
    return 'Indian Army';
  }

  return {
    fullName: name,
    dateOfBirth: dob,
    category,
    stateOfDomicile: state,
    district,
    maritalStatus: marital,
    email,
    mobile,
    serviceBranch: branch,
    armCorpsTrade: trade,
    roleAppointment: role,
    totalServiceDuration: '4 years 0 months', // Default standard term
    militaryCourses: courses,
    characterOnDischarge: character,
    specificSkills: skills,
    highestQualification: qual,
    completedDuringService: true,
    nccCertification: ncc,
    sportsAchievement: sports,
    mathInClass12,
    heightCm: height,
    chestCm,
    chestExpansion,
    vision,
    colourBlind: false,
    medicalCategory: medical,
    physicalProficiency: physical,
    careerPreferences: preferences,
    relocation,
    englishComfort: english,
    sewaNidhiInterests: sewa,
    consent: true
  };
}

// -----------------------------------------------------------------------------
// MAIN EXECUTION RUNNER
// -----------------------------------------------------------------------------

async function runStressTest() {
  console.log(`\n======================================================`);
  console.log(`🚀 STARTING BATCH STRESS TEST OF VEERNXT PROFILING ENGINE`);
  console.log(`======================================================`);

  if (!fs.existsSync(CSV_PATH)) {
    console.error(`❌ CSV File not found at: ${CSV_PATH}`);
    process.exit(1);
  }

  const csvContent = fs.readFileSync(CSV_PATH, 'utf-8');
  const lines = csvContent.split('\n').filter(l => l.trim());
  const headers = parseCSVLine(lines[0]);

  console.log(`Total rows found in CSV: ${lines.length - 1}`);

  // Load scraped history for matching dates
  let scrapedHistory = {};
  if (fs.existsSync(HISTORY_PATH)) {
    scrapedHistory = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
    console.log(`Successfully loaded vacancy notifications from scraped_history.json`);
  }

  const results = [];
  const validationErrors = [];
  let successCount = 0;
  let failCount = 0;

  for (let i = 1; i < lines.length; i++) {
    const row = parseCSVLine(lines[i]);
    const name = row[1];

    // Skip the test user "vv"
    if (name === 'vv' || (name && name.trim() === 'vv')) {
      console.log(`[SKIP] Skipping test user "vv" (row ${i + 1})`);
      continue;
    }

    const rawProfile = mapCSVToProfile(row);
    
    // Validate with Joi Joi.object({ ... })
    const { error, value: validatedProfile } = profileSchema.validate(rawProfile, { 
      abortEarly: false, 
      stripUnknown: true 
    });

    if (error) {
      failCount++;
      validationErrors.push({
        row: i + 1,
        name: name || 'Unknown',
        errors: error.details.map(d => `${d.path.join('.')}: ${d.message}`)
      });
      console.log(`❌ [Row ${i + 1}] Validation Failed for ${name || 'Unknown'}: ${error.details[0].message}`);
      continue;
    }

    try {
      successCount++;
      // Call engine recommendation in offline mode for speed
      const engineRes = await recommendTopExams(validatedProfile, { 
        topN: 10, 
        attachLiveVacancies: false 
      });

      // Match resources
      const matchedResources = await matchResourcesForExams(engineRes.recommendations);

      // Attach exam dates/links from scraped_history.json
      const recommendationsWithScraped = engineRes.recommendations.map(rec => {
        const bodyNotices = scrapedHistory[rec.conducting_body] || [];
        
        // Try fuzzy filter notices for matching words in the exam name
        const examWords = rec.exam_name.toLowerCase().split(/\s+/).filter(w => w.length > 2);
        let relevantNotices = bodyNotices.filter(notice => {
          const title = notice.title.toLowerCase();
          return examWords.some(word => title.includes(word));
        });

        // Fallback to top 2 notices from conducting body if no specific word matches
        if (relevantNotices.length === 0) {
          relevantNotices = bodyNotices.slice(0, 2);
        }

        return {
          ...rec,
          relevantNotices
        };
      });

      results.push({
        candidate: {
          fullName: validatedProfile.fullName,
          email: validatedProfile.email,
          mobile: validatedProfile.mobile,
          branch: validatedProfile.serviceBranch,
          trade: validatedProfile.armCorpsTrade,
          role: validatedProfile.roleAppointment,
          qualification: validatedProfile.highestQualification,
          domicile: validatedProfile.stateOfDomicile,
          district: validatedProfile.district,
          category: validatedProfile.category,
          ncc: validatedProfile.nccCertification,
          sports: validatedProfile.sportsAchievement,
          medicalCategory: validatedProfile.medicalCategory,
          physicalProficiency: validatedProfile.physicalProficiency,
          heightCm: validatedProfile.heightCm,
          chestCm: validatedProfile.chestCm,
          chestExpansion: validatedProfile.chestExpansion,
          careerPreferences: validatedProfile.careerPreferences,
          relocation: validatedProfile.relocation,
          englishComfort: validatedProfile.englishComfort
        },
        totalEligibleExams: engineRes.totalEligible,
        totalRejectedExams: engineRes.totalRejected,
        recommendations: recommendationsWithScraped,
        matchedResources
      });

      if (successCount % 20 === 0) {
        console.log(`Processed ${successCount} users successfully...`);
      }
    } catch (e) {
      failCount++;
      validationErrors.push({
        row: i + 1,
        name: name || 'Unknown',
        errors: [`Engine exception: ${e.message}`]
      });
      console.error(`💥 Exception processing row ${i + 1} (${name}):`, e);
    }
  }

  console.log(`\n======================================================`);
  console.log(`📊 STRESS TEST PROCESSING COMPLETE`);
  console.log(`======================================================`);
  console.log(`Successfully Processed: ${successCount}`);
  console.log(`Failed / Skipped      : ${failCount}`);
  console.log(`Success Rate          : ${((successCount / (successCount + failCount)) * 100).toFixed(1)}%`);

  // Save the full raw JSON results
  fs.writeFileSync(RESULTS_JSON_PATH, JSON.stringify({
    stats: {
      totalProcessed: successCount,
      totalFailed: failCount,
      successRatePercent: (successCount / (successCount + failCount)) * 100
    },
    validationErrors,
    results
  }, null, 2));

  console.log(`💾 Raw results written to: ${RESULTS_JSON_PATH}`);

  if (validationErrors.length > 0) {
    console.log(`\n⚠️ Warning: ${validationErrors.length} profiles encountered errors. Check details in results JSON.`);
  }
}

if (require.main === module) {
  runStressTest();
}

module.exports = {
  runStressTest,
  mapCSVToProfile
};
