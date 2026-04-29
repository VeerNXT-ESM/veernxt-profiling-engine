/**
 * Military Trade / Arm / Corps  →  Civilian Career Track mapping.
 *
 * Each military trade or skillset maps to:
 *   - strong[]:  career tracks where the Agniveer's skills give a REAL edge
 *   - soft[]:    career tracks where skills are adjacent/transferable
 *
 * Source buckets referenced match career_track values in exam_master.json.
 */

const TRADE_MAP = {
  // ---- Combat Arms ----
  'Infantry':        { strong: ['POLICE_CAPF'],           soft: ['SSC','DEFENCE','FIRE','SECURITY'] },
  'Armoured':        { strong: ['POLICE_CAPF','ENGINEERING'], soft: ['TRANSPORT','SSC'] },
  'Artillery':       { strong: ['POLICE_CAPF'],           soft: ['ENGINEERING','SSC'] },
  'Mechanised Infantry': { strong: ['POLICE_CAPF'],       soft: ['ENGINEERING','SSC'] },

  // ---- Combat Support ----
  'Signals':         { strong: ['ENGINEERING','RAILWAYS','PSU'], soft: ['SSC','BANKING','METRO'] },
  'Engineers':       { strong: ['ENGINEERING','PSU','RAILWAYS'], soft: ['SSC','MUNICIPAL'] },
  'Army Aviation':   { strong: ['ENGINEERING','PSU'],     soft: ['TRANSPORT'] },
  'Intelligence':    { strong: ['POLICE_CAPF','CIVIL_SERVICES'], soft: ['SSC'] },

  // ---- Services ----
  'EME':             { strong: ['ENGINEERING','PSU','RAILWAYS'], soft: ['SSC','TRANSPORT'] },
  'ASC':             { strong: ['POSTAL','RAILWAYS','PSU'],       soft: ['SSC','ACCOUNTING','ADMINISTRATIVE'] },
  'AOC':             { strong: ['POSTAL','ACCOUNTING','ADMINISTRATIVE'], soft: ['SSC','BANKING'] },
  'AMC':             { strong: ['HEALTH','NURSING'],      soft: ['SSC'] },
  'AEC':             { strong: ['TEACHING','ADMINISTRATIVE'], soft: ['SSC','BANKING'] },
  'RVC':             { strong: ['ANIMAL_HUSBANDRY'],      soft: ['AGRICULTURE','SSC'] },

  // ---- Common trades ----
  'Clerk':           { strong: ['SSC','BANKING','ACCOUNTING','ADMINISTRATIVE','SECRETARIAT','POSTAL'],
                        soft:   ['INSURANCE','RAILWAYS'] },
  'Storekeeper':     { strong: ['ACCOUNTING','ADMINISTRATIVE','POSTAL'], soft: ['SSC','RAILWAYS'] },
  'Radio Operator':  { strong: ['ENGINEERING','RAILWAYS'], soft: ['SSC','PSU'] },
  'Driver':          { strong: ['TRANSPORT','RAILWAYS','POLICE_CAPF'], soft: ['SSC','PSU'] },
  'Driver MT':       { strong: ['TRANSPORT','RAILWAYS','POLICE_CAPF'], soft: ['SSC','PSU'] },
  'Chef':            { strong: ['RAILWAYS','TOURISM'],    soft: ['SSC','HEALTH'] },
  'Cook':            { strong: ['RAILWAYS','TOURISM'],    soft: ['SSC'] },
  'Washerman':       { strong: ['MUNICIPAL'],             soft: ['SSC','RAILWAYS'] },
  'Steward':         { strong: ['RAILWAYS','TOURISM'],    soft: ['SSC','BANKING'] },
  'Barber':          { strong: ['MUNICIPAL','SSC'],       soft: [] },
  'Tradesman':       { strong: ['ENGINEERING','RAILWAYS','PSU','MUNICIPAL'], soft: ['SSC'] },
  'General Duty':    { strong: ['POLICE_CAPF'],           soft: ['SSC','DEFENCE','FIRE'] },
  'Rifleman':        { strong: ['POLICE_CAPF'],           soft: ['SSC','FIRE'] },
  'Sepoy':           { strong: ['POLICE_CAPF'],           soft: ['SSC','DEFENCE'] },

  // ---- Navy ----
  'Logistics (Navy)':    { strong: ['BANKING','ACCOUNTING','ADMINISTRATIVE','POSTAL'], soft: ['SSC'] },
  'Engineering (Navy)':  { strong: ['ENGINEERING','PSU'], soft: ['SSC','RAILWAYS'] },
  'Electrical (Navy)':   { strong: ['ENGINEERING','PSU','RAILWAYS'], soft: ['SSC'] },
  'Seaman':              { strong: ['TRANSPORT','POLICE_CAPF'], soft: ['SSC'] },
  'Hydro':               { strong: ['ENVIRONMENT','ENGINEERING'], soft: ['SSC'] },

  // ---- Air Force ----
  'Automobile Technician': { strong: ['ENGINEERING','RAILWAYS','PSU','TRANSPORT'], soft: ['SSC'] },
  'Electronics Fitter':    { strong: ['ENGINEERING','RAILWAYS','PSU'], soft: ['SSC'] },
  'Mechanical Fitter':     { strong: ['ENGINEERING','RAILWAYS','PSU'], soft: ['SSC'] },
  'IAF(X) Group':          { strong: ['ENGINEERING','PSU'], soft: ['SSC'] },
  'IAF(Y) Group':          { strong: ['ADMINISTRATIVE','SSC'], soft: ['BANKING','POSTAL'] },
  'Weapons Fitter':        { strong: ['ENGINEERING','POLICE_CAPF'], soft: ['SSC'] },

  // ---- Skill-based (from questionnaire "Specific Skills Handled") ----
  'Weapons Handling':        { strong: ['POLICE_CAPF'],   soft: ['DEFENCE','FIRE'] },
  'Inventory/Store Management': { strong: ['ACCOUNTING','ADMINISTRATIVE','POSTAL'], soft: ['SSC','BANKING'] },
  'Technical Repair/Maintenance': { strong: ['ENGINEERING','RAILWAYS','PSU'], soft: ['SSC'] },
  'Driving (LMV/HMV)':       { strong: ['TRANSPORT','RAILWAYS','POLICE_CAPF'], soft: ['SSC'] },
  'Office Admin/Computer Work': { strong: ['SSC','BANKING','ADMINISTRATIVE','SECRETARIAT','ACCOUNTING'], soft: ['INSURANCE','RAILWAYS'] },
  'Instruction/Training':    { strong: ['TEACHING','ADMINISTRATIVE'], soft: ['SSC'] },
};

/**
 * Resolve trade to tracks with graceful fallback for partial string matches.
 */
function resolveTradeTracks(tradeString = '', skills = []) {
  const inputs = [tradeString, ...skills]
    .filter(Boolean)
    .map(s => s.toLowerCase());
  const matched = { strong: new Set(), soft: new Set() };

  for (const key of Object.keys(TRADE_MAP)) {
    const k = key.toLowerCase();
    if (inputs.some(s => s.includes(k) || k.includes(s))) {
      TRADE_MAP[key].strong.forEach(t => matched.strong.add(t));
      TRADE_MAP[key].soft.forEach(t => matched.soft.add(t));
    }
  }
  return {
    strong: [...matched.strong],
    soft:   [...matched.soft],
  };
}

module.exports = { TRADE_MAP, resolveTradeTracks };
