/**
 * VeerNXT Profiling Engine — Mongoose models
 *
 * Drop this file into your existing Node.js website backend:
 *
 *   const models = require('./engine/schemas/mongoose-models');
 *   await models.Profile.create({ ... });
 *
 * All five collections (Profile, Recommendation, Exam, Vacancy, ConfigSnapshot)
 * are defined here with realistic indexes and validation.
 */

const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

// ==========================================================================
// 1. PROFILE  — one per Agniveer (form submission)
// ==========================================================================
const ProfileSchema = new Schema({
  agniveerUserId:  { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },

  // Section A: Identity
  fullName:         { type: String, required: true, trim: true },
  dateOfBirth:      { type: Date,   required: true },
  category:         { type: String, enum: ['General','OBC','SC','ST','EWS'], required: true },
  stateOfDomicile:  { type: String, required: true, index: true, trim: true },
  district:         { type: String, trim: true },
  maritalStatus:    { type: String, enum: ['Single','Married'], required: true },
  email:            { type: String, required: true, lowercase: true, trim: true,
                      match: /^\S+@\S+\.\S+$/ },
  mobile:           { type: String, required: true, trim: true,
                      match: /^[0-9+\-\s]{7,15}$/ },

  // Section B: Service Record
  serviceBranch:    { type: String, enum: ['Indian Army','Indian Navy','Indian Air Force'], required: true },
  armCorpsTrade:    { type: String, required: true, trim: true },
  roleAppointment:  { type: String, required: true, trim: true },
  totalServiceDuration: { type: String, required: true }, // e.g., "4 years 0 months"
  militaryCourses:  { type: [String], default: [] },
  characterOnDischarge: { type: String, enum: ['Exemplary','Very Good','Good'], required: true, index: true },
  specificSkills:   { type: [String], default: [] },

  // Section C: Academic
  highestQualification: { type: String, enum: ['Class 10','Class 12','Graduate','Post-Graduate'], required: true, index: true },
  completedDuringService: { type: Boolean, default: false },
  nccCertification: { type: String, enum: ['None','A Certificate','B Certificate','C Certificate'], default: 'None' },
  sportsAchievement: { type: String, enum: ['None','District','State','National','International/Services'], default: 'None' },
  mathInClass12:    { type: Boolean, default: false },

  // Section D: Physical
  heightCm:         { type: Number, min: 100, max: 250, required: true },
  chestCm:          Number,
  chestExpansion:   Number,
  vision:           String,
  colourBlind:      { type: Boolean, default: false },
  medicalCategory:  { type: String, default: 'SHAPE-1' },
  physicalProficiency: { type: String, enum: ['Excellent','Good','Satisfactory'], default: 'Good' },

  // Section E: Career Intent
  careerPreferences: { type: [String], default: [], required: true },
  relocation:       { type: String, enum: ['Home District','Home State','Anywhere in India'], default: 'Home State' },
  englishComfort:   { type: String, enum: ['Basic','Intermediate','Fluent'], default: 'Basic' },

  // Section F: Sewa Nidhi
  sewaNidhiInterests: { type: [String], default: [] },

  // Section G: Consent
  consent:          { type: Boolean, required: true, validate: v => v === true },

  // System
  createdAt:        { type: Date, default: Date.now },
  updatedAt:        { type: Date, default: Date.now },
}, {
  timestamps: true,
  collection: 'profiles',
});
ProfileSchema.index({ agniveerUserId: 1, createdAt: -1 });

// ==========================================================================
// 2. RECOMMENDATION  — one per scoring run (for audit / reproducibility)
// ==========================================================================
const RecommendationRowSchema = new Schema({
  rank:              Number,
  exam_id:           { type: String, index: true },
  exam_name:         String,
  conducting_body:   String,
  level:             { type: String, enum: ['central','state','ut'] },
  state_ut:          String,
  career_track:      String,
  website:           String,
  score:             Number,
  breakdown:         Schema.Types.Mixed,   // { ex_servicemen_quota: 25, ... }
  eligibilityFlags:  Schema.Types.Mixed,   // { ex_servicemen_quota, ncc_bonus, ... }
  liveVacanciesSnapshot: Schema.Types.Mixed,
}, { _id: false });

const RecommendationSchema = new Schema({
  profileId:       { type: Schema.Types.ObjectId, ref: 'Profile', required: true, index: true },
  agniveerUserId:  { type: Schema.Types.ObjectId, ref: 'User',    required: true, index: true },
  generatedAt:     { type: Date, default: Date.now, index: true },
  totalEligible:   Number,
  totalRejected:   Number,
  recommendations: [RecommendationRowSchema],
  engineVersion:   String,
  weightsVersion:  String,
  priorityTracks:  [String],
}, {
  timestamps: true,
  collection: 'recommendations',
});
RecommendationSchema.index({ agniveerUserId: 1, generatedAt: -1 });

// ==========================================================================
// 3. EXAM  — mirrors exam_master.json; counsellors can override flags here
// ==========================================================================
const ExamSchema = new Schema({
  exam_id:           { type: String, required: true, unique: true, index: true },
  level:             { type: String, enum: ['central','state','ut'], required: true, index: true },
  state_ut:          { type: String, index: true },
  raw_category:      String,
  career_track:      { type: String, index: true },
  conducting_body:   String,
  exam_name:         { type: String, required: true },
  website:           String,
  source_file:       String,

  // Eligibility flags (editable by counsellors)
  min_qualification: String,
  physical_required: { type: Boolean, default: false },
  math_required:     { type: Boolean, default: false },
  technical_trade_preferred: { type: Boolean, default: false },
  ncc_bonus:         { type: Boolean, default: false },
  sports_quota_eligible: { type: Boolean, default: false },
  ex_servicemen_quota: { type: Boolean, default: false },
  domicile_required: { type: Boolean, default: false },
  english_intensive: { type: Boolean, default: false },

  // Counsellor metadata
  manualOverrides:   Schema.Types.Mixed,   // stores any counsellor edits
  notes:             String,
  isActive:          { type: Boolean, default: true },
  updatedBy:         { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
  collection: 'exams',
});

// ==========================================================================
// 4. VACANCY  — live-scraped notifications cache (per exam)
// ==========================================================================
const VacancyNotificationSchema = new Schema({
  title:       String,
  url:         String,
  publishedOn: Date,
  vacancies:   Number,
  ageRange:    { min: Number, max: Number },
  lastDate:    Date,
  notes:       String,
}, { _id: false });

const VacancySchema = new Schema({
  exam_id:        { type: String, required: true, unique: true, index: true },
  source:         String,
  fetchedAt:      { type: Date, default: Date.now, index: true },
  notifications:  [VacancyNotificationSchema],
  fetchError:     String,       // populated if scrape failed
  httpStatus:     Number,
}, {
  timestamps: true,
  collection: 'vacancies',
});

// ==========================================================================
// 5. CONFIG_SNAPSHOT  — versioned weights / tradeMap for auditability
// ==========================================================================
const ConfigSnapshotSchema = new Schema({
  name:       { type: String, required: true, index: true },   // 'weights' | 'tradeMap' | 'preferenceMap'
  version:    { type: String, required: true },
  data:       { type: Schema.Types.Mixed, required: true },
  effectiveFrom: { type: Date, default: Date.now, index: true },
  createdBy:  { type: Schema.Types.ObjectId, ref: 'User' },
  notes:      String,
}, {
  timestamps: true,
  collection: 'config_snapshots',
});
ConfigSnapshotSchema.index({ name: 1, effectiveFrom: -1 });

// ==========================================================================
module.exports = {
  Profile:         mongoose.model('Profile',         ProfileSchema),
  Recommendation:  mongoose.model('Recommendation',  RecommendationSchema),
  Exam:            mongoose.model('Exam',            ExamSchema),
  Vacancy:         mongoose.model('Vacancy',         VacancySchema),
  ConfigSnapshot:  mongoose.model('ConfigSnapshot',  ConfigSnapshotSchema),
};
