const fs = require('fs');
const path = require('path');
const { recommendTopExams } = require('../src/engine/recommend');

const CSV_PATH = path.resolve(__dirname, '../../public/Profiles.csv');

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

function normalizeCategory(cat) {
  if (!cat) return 'General';
  const c = cat.toLowerCase();
  if (c.includes('obc')) return 'OBC';
  if (c.includes('sc')) return 'SC';
  if (c.includes('st')) return 'ST';
  if (c.includes('ews')) return 'EWS';
  return 'General';
}

function normalizeQual(qual) {
  if (!qual) return 'Class 12';
  const q = qual.toLowerCase();
  if (q.includes('matric') || q.includes('10')) return 'Class 10';
  if (q.includes('inter') || q.includes('12')) return 'Class 12';
  if (q.includes('gradu')) return 'Graduate';
  if (q.includes('post')) return 'Post-Graduate';
  return 'Class 12';
}

function normalizeNCC(ncc) {
  if (!ncc || ncc.toLowerCase().includes('n/a') || ncc.toLowerCase().includes('none')) return 'None';
  if (ncc.includes('A')) return 'A Certificate';
  if (ncc.includes('B')) return 'B Certificate';
  if (ncc.includes('C')) return 'C Certificate';
  return 'None';
}

function normalizeSports(sports) {
  if (!sports || sports.toLowerCase().includes('none')) return 'None';
  const s = sports.toLowerCase();
  if (s.includes('district')) return 'District';
  if (s.includes('state')) return 'State';
  if (s.includes('national')) return 'National';
  if (s.includes('internat')) return 'International/Services';
  return 'None';
}

function normalizeRelocation(rel) {
  if (!rel) return 'Home State';
  const r = rel.toLowerCase();
  if (r.includes('district')) return 'Home District';
  if (r.includes('pan india') || r.includes('anywhere')) return 'Anywhere in India';
  return 'Home State';
}

function mapCSVToProfile(row) {
  // Column mapping (0-based)
  // 1: Name, 2: DOB, 3: Mobile, 4: Email, 5: Category, 6: State, 7: District, 8: Marital, 9: Branch
  // 10: Arm/Corps, 11: Role, 12: Courses, 13: Character, 14: Skills, 15: Qual, 16: NCC, 17: Sports
  // 18: Height, 19: Chest, 20: Eye, 21: Med, 22: Physical, 23: Pref, 24: Relocate, 25: English, 26: Sewa, 27: Consent

  try {
    const profile = {
      fullName: row[1],
      dateOfBirth: row[2] ? new Date(row[2]).toISOString().split('T')[0] : '2000-01-01',
      category: normalizeCategory(row[5]),
      stateOfDomicile: row[6] || 'Delhi',
      district: row[7] || '',
      maritalStatus: (row[8] || 'Single').includes('Married') ? 'Married' : 'Single',
      email: row[4] || 'test@example.com',
      mobile: row[3] || '9000000000',
      serviceBranch: row[9] || 'Indian Army',
      armCorpsTrade: row[10] || 'General Duty',
      roleAppointment: row[11] || 'General Duty',
      totalServiceDuration: '4 years 0 months', // Default
      militaryCourses: (row[12] || '').split(',').map(s => s.trim()).filter(Boolean),
      characterOnDischarge: (row[13] || 'Exemplary').includes('Very Good') ? 'Very Good' : (row[13] || 'Exemplary').includes('Good') ? 'Good' : 'Exemplary',
      specificSkills: (row[14] || '').split(',').map(s => s.trim()).filter(Boolean),
      highestQualification: normalizeQual(row[15]),
      completedDuringService: true,
      nccCertification: normalizeNCC(row[16]),
      sportsAchievement: normalizeSports(row[17]),
      mathInClass12: false, // Default
      heightCm: parseInt(row[18]) || 170,
      chestCm: parseInt(row[19]) || 80,
      chestExpansion: 5,
      vision: row[20] || '6/6',
      colourBlind: false,
      medicalCategory: row[21] || 'SHAPE-1',
      physicalProficiency: (row[22] || 'Good').includes('Excellent') ? 'Excellent' : (row[22] || 'Good').includes('Satisfactory') ? 'Satisfactory' : 'Good',
      careerPreferences: (row[23] || 'Central Govt').split(',').map(s => s.trim()).filter(Boolean),
      relocation: normalizeRelocation(row[24]),
      englishComfort: (row[25] || 'Basic').includes('Fluent') ? 'Fluent' : (row[25] || 'Basic').includes('Intermediate') ? 'Intermediate' : 'Basic',
      sewaNidhiInterests: (row[26] || '').split(',').map(s => s.trim()).filter(Boolean),
      consent: true
    };
    return profile;
  } catch (e) {
    console.error('Error mapping row:', row[1], e.message);
    return null;
  }
}

(async () => {
  const content = fs.readFileSync(CSV_PATH, 'utf-8');
  const lines = content.split('\n').filter(l => l.trim());
  const headers = parseCSVLine(lines[0]);
  
  // Test first 10 actual profiles
  const profilesToTest = lines.slice(1, 11).map(line => {
    const row = parseCSVLine(line);
    return mapCSVToProfile(row);
  }).filter(Boolean);

  console.log(`\n>>> RUNNING TEST ON ${profilesToTest.length} ACTUAL PROFILES FROM CSV <<<\n`);

  const results = [];

  for (const profile of profilesToTest) {
    console.log(`----------------------------------------------------`);
    console.log(` USER: ${profile.fullName} | ${profile.armCorpsTrade} | ${profile.highestQualification}`);
    console.log(` PREFS: ${profile.careerPreferences.join(', ')}`);
    
    try {
      const res = await recommendTopExams(profile, { topN: 3, attachLiveVacancies: false });
      console.log(` Eligible: ${res.totalEligible} | Recommendations:`);
      
      res.recommendations.forEach(r => {
        console.log(`   [${r.score}] ${r.career_track} - ${r.exam_name}`);
      });
      
      results.push({
        user: profile.fullName,
        eligible: res.totalEligible,
        top_recommendations: res.recommendations.map(r => ({
          exam: r.exam_name,
          score: r.score,
          track: r.career_track
        }))
      });
    } catch (e) {
      console.error(`Error processing ${profile.fullName}:`, e.message);
    }
  }

  const resultsPath = path.resolve(__dirname, 'results_actual_profiles.json');
  fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  console.log(`\n>>> TEST COMPLETE. Results saved to ${resultsPath} <<<\n`);
})();
