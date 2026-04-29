/**
 * Joi schema for the Agniveer profile from the Career Profiling Questionnaire.
 * Every field maps to a section of the form (A-F).
 */

const Joi = require('joi');

const profileSchema = Joi.object({
  // Section A: Identity & Legal Eligibility
  fullName:         Joi.string().min(2).required(),
  dateOfBirth:      Joi.date().iso().required(),
  category:         Joi.string().valid('General','OBC','SC','ST','EWS').required(),
  stateOfDomicile:  Joi.string().required(),
  district:         Joi.string().allow('', null),
  maritalStatus:    Joi.string().valid('Single','Married').required(),
  email:            Joi.string().email().required(),
  mobile:           Joi.string().pattern(/^[0-9+\-\s]{7,15}$/).required(),

  // Section B: Service Record
  serviceBranch:    Joi.string().valid('Indian Army','Indian Navy','Indian Air Force').required(),
  armCorpsTrade:    Joi.string().required(),
  roleAppointment:  Joi.string().required(),
  totalServiceDuration: Joi.string().required(),  // e.g., "4 years 0 months"
  militaryCourses:  Joi.array().items(Joi.string()).default([]),
  characterOnDischarge: Joi.string().valid('Exemplary','Very Good','Good').required(),
  specificSkills:   Joi.array().items(Joi.string()).default([]),

  // Section C: Academic & Additional Weightage
  highestQualification: Joi.string().valid('Class 10','Class 12','Graduate','Post-Graduate').required(),
  completedDuringService: Joi.boolean().default(false),
  nccCertification: Joi.string().valid('None','A Certificate','B Certificate','C Certificate').default('None'),
  sportsAchievement: Joi.string().valid('None','District','State','National','International/Services').default('None'),
  mathInClass12:    Joi.boolean().default(false),

  // Section D: Physical Compliance
  heightCm:         Joi.number().min(100).max(250).required(),
  chestCm:          Joi.number().allow(null),
  chestExpansion:   Joi.number().allow(null),
  vision:           Joi.string().allow('', null),
  colourBlind:      Joi.boolean().default(false),
  medicalCategory:  Joi.string().default('SHAPE-1'),
  physicalProficiency: Joi.string().valid('Excellent','Good','Satisfactory').default('Good'),

  // Section E: Civilian Career Intent
  careerPreferences: Joi.array().items(Joi.string()).min(1).required(),
  relocation:       Joi.string().valid('Home District','Home State','Anywhere in India').default('Home State'),
  englishComfort:   Joi.string().valid('Basic','Intermediate','Fluent').default('Basic'),

  // Section F: Sewa Nidhi
  sewaNidhiInterests: Joi.array().items(Joi.string()).default([]),

  // Section G: Consent
  consent:          Joi.boolean().valid(true).required(),
});

module.exports = { profileSchema };
