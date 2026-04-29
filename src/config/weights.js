/**
 * Scoring weights for the VeerNXT Career Profiling Engine.
 * All scores are in 0..100 range and then multiplied by these weights.
 * Tune these over time based on feedback from counsellors.
 */

module.exports = {
  // ---- Priority track boost (user-selected focus areas) ----
  // Adds a flat bonus when the exam belongs to a track the user prioritized.
  PRIORITY_TRACK_BONUS: 15,

  // ---- Ex-Servicemen track boost ----
  // Agniveers get explicit reservations/age-relaxations here.
  EX_SERVICEMEN_TRACK_BONUS: 25,

  // ---- Preference alignment ----
  PREFERENCE_WEIGHTS: {
    CENTRAL_GOVT: 20,
    STATE_GOVT: 18,
    BANKING_PSU: 16,
    PRIVATE: 6,
    ENTREPRENEURSHIP: 2,
  },

  // ---- Trade → Role match ----
  TRADE_ROLE_MATCH_BONUS: 20,       // strong match (e.g. EME → JE Mechanical)
  TRADE_ROLE_SOFT_MATCH_BONUS: 10,  // weak match (e.g. Infantry → Police/CAPF)

  // ---- Qualification fit ----
  QUALIFICATION_EXACT_MATCH: 15,
  QUALIFICATION_OVER_MATCH: 8,      // overqualified (e.g. Graduate applying for 10+2 role)
  QUALIFICATION_GATE_FAIL: null,    // null = hard-filter the exam out

  // ---- Domicile ----
  DOMICILE_MATCH_BONUS: 18,         // state/UT exam in home state
  DOMICILE_MISMATCH_PENALTY: null,  // null = hard-filter out

  // ---- Category / Reservation boost ----
  CATEGORY_RESERVATION_BONUS: {
    SC: 5, ST: 5, OBC: 3, EWS: 3, General: 0,
  },

  // ---- Character on discharge (critical for Banking/PSU/Police) ----
  CHARACTER_BONUS: {
    Exemplary: 10,
    'Very Good': 6,
    Good: 2,
  },
  CHARACTER_REQUIRED_TRACKS: ['BANKING','PSU','POLICE_CAPF','JUDICIARY'],

  // ---- NCC bonus ----
  NCC_WEIGHTS: {
    'C Certificate': 10,
    'B Certificate': 5,
    'A Certificate': 2,
    'None': 0,
  },

  // ---- Sports quota ----
  SPORTS_BONUS: {
    'International/Services': 15,
    'National': 10,
    'State': 6,
    'District': 3,
    'None': 0,
  },

  // ---- Math-in-12 (required for technical/clerical) ----
  MATH_REQUIRED_BONUS: 8,
  MATH_REQUIRED_PENALTY: -10,

  // ---- English comfort ----
  ENGLISH_WEIGHTS: {
    Fluent: 8,
    Intermediate: 4,
    Basic: 0,
  },
  ENGLISH_PENALTY_FOR_INTENSIVE_IF_BASIC: -8,

  // ---- Physical compliance ----
  PHYSICAL_MATCH_BONUS: 10,
  PHYSICAL_FAIL_PENALTY: null,      // null = hard-filter out for uniformed exams

  // ---- Age relaxation for Agniveers (ex-srvc rules) ----
  // Agniveers get 3-5 years relaxation typically. We soften the age cutoff.
  AGNIVEER_AGE_RELAXATION_YEARS: 5,

  // ---- Service duration ----
  SERVICE_DURATION_FULL_4YR_BONUS: 5,   // completed full 4 year term
};
