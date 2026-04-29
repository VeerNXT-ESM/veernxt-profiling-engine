/**
 * Offline test harness: runs 3 realistic Agniveer personas through the engine
 * WITHOUT touching the internet (attachLiveVacancies: false) so we can
 * verify the scoring logic alone.
 */

const { recommendTopExams } = require('../src/engine/recommend');

const personas = {
  /** Infantry Rifleman, Class 12, UP domicile, SHAPE-1. Classic CAPF/SSC GD candidate. */
  rifleman: {
    fullName: 'Rohan Yadav',
    dateOfBirth: '2003-06-15',
    category: 'OBC',
    stateOfDomicile: 'Uttar Pradesh',
    district: 'Kanpur',
    maritalStatus: 'Single',
    email: 'r@example.com',
    mobile: '9876543210',
    serviceBranch: 'Indian Army',
    armCorpsTrade: 'Infantry',
    roleAppointment: 'Rifleman (General Duty)',
    totalServiceDuration: '4 years 0 months',
    militaryCourses: ['PT Course','Weapons Handling'],
    characterOnDischarge: 'Exemplary',
    specificSkills: ['Weapons Handling','Instruction/Training'],
    highestQualification: 'Class 12',
    completedDuringService: true,
    nccCertification: 'C Certificate',
    sportsAchievement: 'State',
    mathInClass12: false,
    heightCm: 172,
    chestCm: 84,
    chestExpansion: 5,
    vision: '6/6 without glasses',
    colourBlind: false,
    medicalCategory: 'SHAPE-1',
    physicalProficiency: 'Excellent',
    careerPreferences: ['Central Govt (CAPF, SSC, Railways, Banking, etc)', 'State Govt (Police, Revenue, Secretariat, etc)'],
    relocation: 'Anywhere in India',
    englishComfort: 'Intermediate',
    sewaNidhiInterests: ['higher education'],
    consent: true,
  },

  /** EME Tradesman / Signals, Graduate, Maharashtra. Technical → Engineering / PSU / RRB JE. */
  technician: {
    fullName: 'Vikram Patil',
    dateOfBirth: '2002-02-10',
    category: 'General',
    stateOfDomicile: 'Maharashtra',
    district: 'Pune',
    maritalStatus: 'Single',
    email: 'v@example.com',
    mobile: '9876543211',
    serviceBranch: 'Indian Army',
    armCorpsTrade: 'EME',
    roleAppointment: 'Technician / Tradesman',
    totalServiceDuration: '4 years 0 months',
    militaryCourses: ['EME Tradesman Course'],
    characterOnDischarge: 'Very Good',
    specificSkills: ['Technical Repair/Maintenance','Driving (LMV/HMV)'],
    highestQualification: 'Graduate',
    completedDuringService: true,
    nccCertification: 'None',
    sportsAchievement: 'None',
    mathInClass12: true,
    heightCm: 170,
    chestCm: 82,
    chestExpansion: 5,
    vision: '6/9',
    colourBlind: false,
    medicalCategory: 'SHAPE-1',
    physicalProficiency: 'Good',
    careerPreferences: ['Central Govt (CAPF, SSC, Railways, Banking, etc)', 'Banking/PSU (Clerical/Security Officer)'],
    relocation: 'Home State',
    englishComfort: 'Intermediate',
    sewaNidhiInterests: ['higher education'],
    consent: true,
  },

  /** Navy Clerk / Logistics, Graduate. Banking/PSU ideal. */
  clerk: {
    fullName: 'Priya Sharma',
    dateOfBirth: '2002-08-22',
    category: 'General',
    stateOfDomicile: 'Rajasthan',
    district: 'Jaipur',
    maritalStatus: 'Single',
    email: 'p@example.com',
    mobile: '9876543212',
    serviceBranch: 'Indian Navy',
    armCorpsTrade: 'Logistics (Navy)',
    roleAppointment: 'Clerk / Storekeeper',
    totalServiceDuration: '4 years 0 months',
    militaryCourses: ['Clerk Course','Computer Applications'],
    characterOnDischarge: 'Exemplary',
    specificSkills: ['Office Admin/Computer Work','Inventory/Store Management'],
    highestQualification: 'Graduate',
    completedDuringService: false,
    nccCertification: 'B Certificate',
    sportsAchievement: 'District',
    mathInClass12: true,
    heightCm: 162,
    chestCm: null,
    chestExpansion: null,
    vision: '6/6 without glasses',
    colourBlind: false,
    medicalCategory: 'SHAPE-1',
    physicalProficiency: 'Good',
    careerPreferences: ['Banking/PSU (Clerical/Security Officer)', 'Central Govt (CAPF, SSC, Railways, Banking, etc)'],
    relocation: 'Home State',
    englishComfort: 'Fluent',
    sewaNidhiInterests: ['seed capital'],
    consent: true,
  },
};

(async () => {
  for (const [name, profile] of Object.entries(personas)) {
    console.log('\n====================================================');
    console.log(` PERSONA: ${name.toUpperCase()}  (${profile.armCorpsTrade} / ${profile.highestQualification} / ${profile.stateOfDomicile})`);
    console.log('====================================================');
    const res = await recommendTopExams(profile, { topN: 10, attachLiveVacancies: false });
    console.log(`Eligible pool: ${res.totalEligible} exams (rejected ${res.totalRejected})`);
    res.recommendations.forEach(r => {
      console.log(`  #${String(r.rank).padStart(2)}  [${String(r.score).padStart(5)}]  ${r.career_track.padEnd(18)} ${r.exam_name.slice(0,60).padEnd(60)}  | ${r.level}${r.state_ut ? '/' + r.state_ut : ''}`);
    });
    // Print breakdown for top-1 to sanity-check
    console.log(`\n  [TOP-1 breakdown] ${JSON.stringify(res.recommendations[0].breakdown, null, 2)}`);
  }
})();
