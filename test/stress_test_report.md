# VeerNXT Profiling Engine — Comprehensive Stress Test Analytics Report

**Stress Test Run date:** May 28, 2026
**Data Corpus:** 1,629 active exams in `exam_master.json`
**Test Population:** 113 real Agniveer candidate profiles (from `User_Profiles.csv`)
**Validation success Rate:** 100.0% (113/113 profiles normalized and passed Joi schema constraints)

---

## Section 1: Executive Summary

This stress test executed all 113 validated Agniveer candidate profiles against the entire VeerNXT exam master database of 1,629 exams. This batch execution stress-tests the eligibility gates, 15 scoring dimensions, and track diversification filter to evaluate performance stability and match quality.

### Core Engine Metrics
* **Total Candidates Tested:** 113
* **Successful Pipeline Passes:** 113
* **Average Exams Eligible Per Candidate:** **628.2** / 1,629 (62900.0% access rate)
* **Average Top-1 Recommended Score:** **127.9**
* **Average Top-5 Recommended Score:** **117.6**
* **Average Top-10 Recommended Score:** **99.6**
* **Perfect Validation Completion:** **100%** (zero pipeline crashes or schema drops)

### General Matching Quality Indicators
* **🟢 Strong Match (Score ≥ 100):** Represents candidates with high qualification alignment, quota matches, and preference congruence.
* **🟡 Moderate Match (Score 60-99):** Satisfies hard criteria with average eligibility and trade overlap.
* **🔴 Weak Match (Score < 60):** Minimal alignment with civil exams, often constrained by qualification or severe domicile limitations.

---

## Section 2: Career Track Distribution & Stated Preference Alignment

This section analyzes the diversity of career track recommendations and measures how well the engine's top choices align with what candidates stated in their preferences.

### Top-1 Recommended Career Track Distribution
The table below displays how many candidates received each career track as their **#1 absolute recommendation**:

| Career Track | Candidates as #1 Rec | Percentage |
|--------------|----------------------|------------|
| **POLICE_CAPF** | 109 | 96.5% |
| **RAILWAYS** | 4 | 3.5% |

### Track Diversity in Top-10
* **Average Unique Tracks per Candidate Top-10:** **4.50** (out of a max possible 6 due to track diversification caps)
* **Preference Alignment Rate:** **97.3%** 
  *(The percentage of candidates whose #1 recommendation is within their stated career preference buckets: Central Govt, State Govt, Banking, etc.)*

### Career Track Exposure in Top-10 Recommendations
The number of candidates who had at least one exam from each career track in their top-10 list:

| Career Track | Candidates Exposed | Percentage |
|--------------|--------------------|------------|
| **SSC** | 113 | 100.0% |
| **POLICE_CAPF** | 110 | 97.3% |
| **RAILWAYS** | 110 | 97.3% |
| **BANKING** | 31 | 27.4% |
| **GROUP_D** | 26 | 23.0% |
| **ENGINEERING** | 24 | 21.2% |
| **FIRE** | 17 | 15.0% |
| **ADMINISTRATIVE** | 14 | 12.4% |
| **PSU** | 14 | 12.4% |
| **CIVIL_SERVICES** | 13 | 11.5% |
| **FOREST** | 12 | 10.6% |
| **SECRETARIAT** | 7 | 6.2% |
| **TEACHING** | 3 | 2.7% |
| **JUDICIARY** | 3 | 2.7% |
| **POSTAL** | 3 | 2.7% |
| **REVENUE** | 2 | 1.8% |
| **AGRICULTURE** | 2 | 1.8% |
| **GROUP_C** | 1 | 0.9% |
| **EXCISE** | 1 | 0.9% |
| **MUNICIPAL** | 1 | 0.9% |
| **TRANSPORT** | 1 | 0.9% |

---

## Section 3: Scoring Analysis

Understanding the point distribution and identifying the highest-scoring dimensions helps verify if weights are balanced and how the engine behaves across different profiles.

### Score Bins Distribution (Across all 1,130 recommendations)
* **0–30 Points:** 0 exams
* **31–60 Points:** 89 exams
* **61–90 Points:** 355 exams
* **91–120 Points:** 442 exams
* **121–150 Points:** 199 exams
* **151+ Points:** 45 exams

### Average Points Contributed by Scoring Dimensions
We aggregated every scoring breakdown key across all recommendations. The table below lists the average points contributed by each active scoring feature:

| Scoring Dimension (breakdown key) | Average Points Contributed | Primary Source |
|-----------------------------------|----------------------------|----------------|
| `ex_servicemen_quota` | 19.8 pts | Ex-Servicemen Quota (+25) |
| `priority_track` | 13.3 pts | Dynamic Input |
| `preference_central_govt` | 8.7 pts | Career Preference Match (+15/20) |
| `trade_strong_match` | 8.6 pts | Strong Military Trade Mapping (+20) |
| `physical_fit` | 7.9 pts | Physical Fitness Standard (+10) |
| `preference_state_govt` | 7.4 pts | Career Preference Match (+15/20) |
| `domicile_home` | 6.3 pts | State Domicile Match (+18) |
| `full_term` | 5.0 pts | Full 4-Year Service (+5) |
| `qualification_over` | 4.5 pts | Over-Qualified Bonus (+8) |
| `qualification_exact` | 4.2 pts | Exact Qualification Fit (+15) |
| `character_required_track` | 3.9 pts | Discharge Character Bonus (+2 to +10) |
| `category_reservation` | 2.5 pts | Dynamic Input |
| `character_general` | 2.3 pts | Discharge Character Bonus (+2 to +10) |
| `trade_soft_match` | 2.1 pts | Soft Military Trade Mapping (+10) |
| `english` | 1.1 pts | English Level Assessment (+0 to +8) |
| `ncc` | 1.1 pts | NCC Certificate (+2 to +10) |
| `technical_trade_alignment` | 0.7 pts | Dynamic Input |
| `preference_banking_psu` | 0.6 pts | Career Preference Match (+15/20) |
| `sports_quota` | 0.6 pts | Sports Quota Bonus (+2 to +15) |
| `preference_private` | 0.4 pts | Career Preference Match (+15/20) |
| `math` | 0.1 pts | Class 12 Mathematics (+8) |
| `english_penalty` | -1.2 pts | English Level Assessment (+0 to +8) |

### Top 5 Best-Scored Candidates (Highest Recommendation Score)
These candidates received the highest overall scores, showing high alignment across state domicile, qualifications, and military trades:


1. **Mohd Sameer** (Armd GD | Graduate)
   * Top Exam: **UP Police SI** (POLICE_CAPF)
   * Highest Score: **184**
   * Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
   * Domicile: *Uttar Pradesh*

2. **Mantoo kumar gaun** (Armd gd | Graduate)
   * Top Exam: **UP Jail Warder** (POLICE_CAPF)
   * Highest Score: **175**
   * Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
   * Domicile: *Uttar Pradesh*

3. **Ritesh Kumar** (Armd | Class 12)
   * Top Exam: **HPSSSB Clerk** (POLICE_CAPF)
   * Highest Score: **169**
   * Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
   * Domicile: *Himachal Pradesh*

4. **Ajay Kumar** (EME | Class 12)
   * Top Exam: **PSSSB Clerk (LDC/UDC)** (POLICE_CAPF)
   * Highest Score: **167**
   * Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
   * Domicile: *Punjab*

5. **Amit Kumar** (Armd | Graduate)
   * Top Exam: **UP Police SI** (POLICE_CAPF)
   * Highest Score: **165**
   * Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
   * Domicile: *Uttar Pradesh*


### Bottom 5 Candidates (Lowest Recommendation Score)
These candidates received the lowest recommendation scores. These profiles typically lack qualifications, have non-SHAPE-1 medical categories, or reside in states with very few localized state-level exams:


1. **Chauhan govindji chandanji** (Armd | Class 12)
   * Top Exam: **RPF Constable**
   * Score: **81**
   * Constraints: *Medical: SHAPE-1 | Physical: Satisfactory*
   * Domicile: *Gujarat*

2. **Apovitho tsuori** (Barber | Class 10)
   * Top Exam: **Railways Group D**
   * Score: **84**
   * Constraints: *Medical: F(2)P | Physical: Good*
   * Domicile: *Nagaland*

3. **ABHAY SINGH** (ARMD/CHEF | Class 12)
   * Top Exam: **SSB Constable**
   * Score: **91**
   * Constraints: *Medical: SHAPE-1 | Physical: Excellent*
   * Domicile: *Uttarakhand*

4. **Surja ghosh** (Armd | Class 12)
   * Top Exam: **SSB Constable**
   * Score: **93**
   * Constraints: *Medical: SHAPE-1 | Physical: Excellent*
   * Domicile: *West Bengal*

5. **Rahul** (Armd | Class 12)
   * Top Exam: **SSB Constable**
   * Score: **94**
   * Constraints: *Medical: SHAPE-1 | Physical: Excellent*
   * Domicile: *Haryana*


---

## Section 4: Eligibility Gate Analysis

Candidates must pass three hard eligibility gates before scoring. We analyze how these gates impact candidate access.

### Domicile & Location Gate Analysis
* State-level exams require candidates to be domiciled in that state unless they select **"Anywhere in India"** for relocation.
* Relocation Preference:
  * **"Home State Only":** **77 candidates** (68.1% of population) — heavily limits them to state exams in their home state + central exams.
  * **"Anywhere in India":** **36 candidates** (31.9% of population) — dramatically increases their pool of eligible state-level exams.

### Physical Compliance Filter
* **Non-SHAPE-1 Candidates:** **1 candidates** (0.9%)
  * *These candidates were automatically filtered and rejected from all uniformed military and police roles (including POLICE_CAPF and DEFENCE).*
* **Satisfactory-only Physical Proficiency:** **2 candidates** (1.8%)
  * *These candidates were blocked from POLICE_CAPF and DEFENCE tracks due to unsatisfactory physical conditioning.*

---

## Section 5: Per-User Recommendation Cards (Top 10 Exams & matched Resources)

This section displays the detailed report cards for the 113 candidates tested.


### Candidate #1: Amit Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 136)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Storekeeper` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **491** | Rejected: **1138**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **136** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 2 | RSMSSB Stenographer |  | `POLICE_CAPF` | **136** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 3 | RSMSSB Driver |  | `POLICE_CAPF` | **136** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 4 | Rajasthan Police Constable | Rajasthan Police | `POLICE_CAPF` | **133** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 5 | RPSC Executive Officer |  | `ADMINISTRATIVE` | **108** | preference central govt(+20), trade strong match(+20), preference state govt(+18) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **103** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |
| 10 | SSC CPO | Staff Selection Commission | `SSC` | **102** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **548** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RPSC Executive Officer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **524** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RPSC Executive Officer, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **516** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RPSC Executive Officer, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **516** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RPSC Executive Officer, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[SSC REASONING GUIDE BOOK]** (Subject: `REASONING` | Category: `Guide`) — Relevance Score: **443** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RPSC Executive Officer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #2: Akshay Kumar Jaswal
* **Match Quality:** **🟢 Strong Match** (Top Score: 153)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured Corps` | Role: `Clerk SD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `District` | English: `Intermediate`
* **Preferences:** State: `Himachal Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **363** | Rejected: **1266**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | HPSSSB Clerk | Himachal Pradesh Staff Selection Commission | `POLICE_CAPF` | **153** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | HPSSSB JBT Teacher |  | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | HPSSSB TGT |  | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | HPSSSB PGT |  | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 7 | Himachal Gramin Bank Clerk (Office Assistant) | IBPS RRB | `BANKING` | **111** | trade strong match(+20), domicile home(+18), preference banking psu(+16) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | IBPS Clerk | Institute of Banking Personnel Selection (IBPS) | `BANKING` | **93** | trade strong match(+20), preference banking psu(+16), priority track(+15) |
| 10 | SBI Clerk | State Bank of India (SBI) | `BANKING` | **93** | trade strong match(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **473.5** (Matches: *HPSSSB Clerk, HPSSSB JBT Teacher, HPSSSB TGT, HPSSSB PGT, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **473.5** (Matches: *HPSSSB Clerk, HPSSSB JBT Teacher, HPSSSB TGT, HPSSSB PGT, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **473.5** (Matches: *HPSSSB Clerk, HPSSSB JBT Teacher, HPSSSB TGT, HPSSSB PGT, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **389.5** (Matches: *HPSSSB JBT Teacher, HPSSSB TGT, HPSSSB PGT*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *HPSSSB Clerk, HPSSSB JBT Teacher, HPSSSB TGT, HPSSSB PGT, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #3: Honey Singh
* **Match Quality:** **🟢 Strong Match** (Top Score: 136)
* **Military Profile:** Branch: `Indian Army` | Trade: `Corps` | Role: `Clerk/OA` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Police SI | UPPRPB | `POLICE_CAPF` | **136** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 2 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **136** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 3 | UP Police SI |  | `POLICE_CAPF` | **136** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 4 | UP Jail Warder |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 5 | SSC CPO | Staff Selection Commission | `SSC` | **115** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **115** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 7 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **115** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 8 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **115** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 9 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **108** | ex servicemen quota(+25), trade strong match(+20), preference banking psu(+16) |
| 10 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **98** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **438** (Matches: *UP Police SI, UP Jail Warder, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **414** (Matches: *UP Police SI, UP Jail Warder, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **390** (Matches: *UP Police SI, UP Jail Warder, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **318** (Matches: *UP Police SI, UP Jail Warder*)
* **[SSC CPO]** (Subject: `General` | Category: `Intro`) — Relevance Score: **306** (Matches: *UP Police SI, UP Jail Warder, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #4: Mohit Kumar harinkhede
* **Match Quality:** **🟢 Strong Match** (Top Score: 140)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gunner` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Maharashtra` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
* **Exams Statistics:** Eligible: **362** | Rejected: **1267**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Maharashtra Forest Guard | Maharashtra Forest Department | `FOREST` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **76** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | MPSC Stenographer | Maharashtra Public Service Commission | `SECRETARIAT` | **76** | preference central govt(+20), preference state govt(+18), domicile home(+18) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #5: Subhojit mondal
* **Match Quality:** **🟢 Strong Match** (Top Score: 118)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gunner` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **118** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **118** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **118** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **118** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **95** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **85** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **85** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **61** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **60** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | WB Gramin Bank Clerk | IBPS RRB | `BANKING` | **60** | domicile home(+18), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #6: Teela Suresh
* **Match Quality:** **🟡 Moderate Match** (Top Score: 94)
* **Military Profile:** Branch: `Indian Army` | Trade: `Crops` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Andhra Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **310** | Rejected: **1319**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **94** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **84** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 3 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **84** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 4 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **69** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 5 | RPF Sub Inspector | RRB (Railway Recruitment Board) | `RAILWAYS` | **61** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 6 | Patna Metro Recruitment | PMRC | `RAILWAYS` | **61** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 7 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **59** | preference central govt(+20), priority track(+15), trade soft match(+10) |
| 8 | APPSC AE |  | `ENGINEERING` | **59** | preference central govt(+20), domicile home(+18), priority track(+15) |
| 9 | SSC Stenographer Grade ‘C’ & ‘D’ | Staff Selection Commission | `SSC` | **58** | preference central govt(+20), priority track(+15), qualification exact(+15) |
| 10 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **58** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **286.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN), APPSC AE, SSC Stenographer Grade ‘C’ & ‘D’*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **286.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN), APPSC AE, SSC Stenographer Grade ‘C’ & ‘D’*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **286.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN), APPSC AE, SSC Stenographer Grade ‘C’ & ‘D’*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **210.5** (Matches: *APPSC AE, SSC Stenographer Grade ‘C’ & ‘D’*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **194** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN), APPSC AE, SSC Stenographer Grade ‘C’ & ‘D’*)


#### Active Vacancy Notifications & Exam Dates
* **For RPF Constable** (RRB (Railway Recruitment Board)):
  * [रेलवे भर्ती बोर्ड, चंडीगढ़Railway Recruitment Board, Chandigarh](https://www.rrbcdg.gov.in/index.php) (Last Date: TBD)
  * [Recruitment Notices](https://www.rrbcdg.gov.in/employment-notices.php) (Last Date: TBD)
* **For SSC GD Constable (General Duty)** (Staff Selection Commission):
  * [Important information for the candidates selected to the posts of Accountant in Indian Audit and Accounts Department (offices under Comptroller and Auditor General of India) through Combined Graduate Level Examination, 2025 (CGLE-2025)](https://ssc.gov.in/portal/records/attachment/q7dih97yi2jfor4swjm9p) (Last Date: TBD)
  * [Calling Options/Preferences by CBIC from selected candidates for the post of Tax Assistant for allocation of Zones/Formations - CGLE, 2025](https://ssc.gov.in/portal/records/attachment/6wc8jsbrhzjsy7826ybtx) (Last Date: TBD)
* **For SSC Constable (Tradesman)** (Staff Selection Commission):
  * [Important information for the candidates selected to the posts of Accountant in Indian Audit and Accounts Department (offices under Comptroller and Auditor General of India) through Combined Graduate Level Examination, 2025 (CGLE-2025)](https://ssc.gov.in/portal/records/attachment/q7dih97yi2jfor4swjm9p) (Last Date: TBD)
  * [Calling Options/Preferences by CBIC from selected candidates for the post of Tax Assistant for allocation of Zones/Formations - CGLE, 2025](https://ssc.gov.in/portal/records/attachment/6wc8jsbrhzjsy7826ybtx) (Last Date: TBD)


---


### Candidate #7: Abu Taleab khan
* **Match Quality:** **🟢 Strong Match** (Top Score: 129)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Driver` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Assam` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **365** | Rejected: **1264**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Assam Jail Warder |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | APSC DSP |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | ABUB (Armed Branch UB) |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **88** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | ADRE Grade IV (Peon/MTS) |  | `ADMINISTRATIVE` | **54** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **53** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | Gauhati HC Stenographer |  | `SECRETARIAT` | **53** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **475.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **412** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #8: Pawan Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 132)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **132** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 2 | UP Police SI | UPPRPB | `POLICE_CAPF` | **131** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 3 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **131** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 4 | UP Police SI |  | `POLICE_CAPF` | **131** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **91** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |
| 9 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **90** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **90** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **389** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **389** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **389** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **333** (Matches: *UP Jail Warder, UP Police SI*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **274** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #9: Dhiraj Kumar yadav
* **Match Quality:** **🟢 Strong Match** (Top Score: 114)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd corps` | Role: `Dvr` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **56** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | WBCS (West Bengal Civil Service) | WBPSC | `CIVIL_SERVICES` | **49** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #10: JHA SHUBHAM NIRBHAYBHAI
* **Match Quality:** **🟢 Strong Match** (Top Score: 150)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Gujarat` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | GSSSB Additional Assistant Engineer |  | `POLICE_CAPF` | **150** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Gujarat Police Constable (LRB) | Gujarat Police (LRB) | `POLICE_CAPF` | **150** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Gujarat Police ASI | Gujarat Police | `POLICE_CAPF` | **150** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Gujarat Police PSI |  | `POLICE_CAPF` | **150** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **102** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **102** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **100** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **396** (Matches: *GSSSB Additional Assistant Engineer, Gujarat Police PSI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **380** (Matches: *GSSSB Additional Assistant Engineer, Gujarat Police PSI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **380** (Matches: *GSSSB Additional Assistant Engineer, Gujarat Police PSI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **332** (Matches: *GSSSB Additional Assistant Engineer, Gujarat Police PSI*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **272** (Matches: *GSSSB Additional Assistant Engineer, Gujarat Police PSI*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #11: Abinesh S
* **Match Quality:** **🟢 Strong Match** (Top Score: 126)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd(GNR/OPR)` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Tamil Nadu` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **476** | Rejected: **1153**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | TNUSRB Police Constable | Tamil Nadu Uniformed Services | `POLICE_CAPF` | **126** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | TNUSRB Police Sub-Inspector | TNUSRB | `POLICE_CAPF` | **126** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | TNPSC DSP |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | DSSSB Nursing Officer | Delhi Subordinate Services Selection Board | `POLICE_CAPF` | **118** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **80** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 8 | SSC CPO | Staff Selection Commission | `SSC` | **77** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 9 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **77** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **70** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **329** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **305** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **305** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **241** (Matches: *TNPSC DSP*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **192** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #12: Lokesh p
* **Match Quality:** **🟢 Strong Match** (Top Score: 154)
* **Military Profile:** Branch: `Indian Army` | Trade: `driver or operator GD General Duty` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 10` | NCC: `None` | Sports: `None` | English: `Fluent`
* **Preferences:** State: `Tamil Nadu` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **990** | Rejected: **639**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | APSSB Driver |  | `POLICE_CAPF` | **154** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | RSMSSB Driver |  | `POLICE_CAPF` | **154** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Constable (Driver) | Delhi Police | `POLICE_CAPF` | **154** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | TNPSC DSP |  | `POLICE_CAPF` | **149** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **123** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **113** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **113** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **104** | ex servicemen quota(+25), preference state govt(+18), qualification exact(+15) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **104** | ex servicemen quota(+25), preference state govt(+18), qualification exact(+15) |
| 10 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **104** | ex servicemen quota(+25), preference state govt(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **511.5** (Matches: *APSSB Driver, RSMSSB Driver, Constable (Driver), TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **447.5** (Matches: *APSSB Driver, RSMSSB Driver, TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **447.5** (Matches: *APSSB Driver, RSMSSB Driver, TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **411.5** (Matches: *APSSB Driver, RSMSSB Driver, TNPSC DSP*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **408** (Matches: *APSSB Driver, RSMSSB Driver, Constable (Driver), TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates
* **For Constable (Driver)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)


---


### Candidate #13: Arvind
* **Match Quality:** **🟢 Strong Match** (Top Score: 106)
* **Military Profile:** Branch: `Indian Army` | Trade: `EME` | Role: `Technical` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Delhi` | Relocate: `Home State` | Preferences: *Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **374** | Rejected: **1255**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Constable (Driver) | Delhi Police | `POLICE_CAPF` | **106** | ex servicemen quota(+25), domicile home(+18), priority track(+15) |
| 2 | Constable (Executive) | Delhi Police | `POLICE_CAPF` | **98** | ex servicemen quota(+25), domicile home(+18), priority track(+15) |
| 3 | Head Constable (Ministerial) | Delhi Police | `POLICE_CAPF` | **98** | ex servicemen quota(+25), domicile home(+18), priority track(+15) |
| 4 | Warder Recruitment | Delhi Prisons | `POLICE_CAPF` | **98** | ex servicemen quota(+25), domicile home(+18), priority track(+15) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **95** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | Fire Operator | Delhi Fire Service | `FIRE` | **86** | ex servicemen quota(+25), domicile home(+18), physical fit(+10) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **85** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **85** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | Station Controller / Train Operator | DMRC | `RAILWAYS` | **78** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 10 | IBPS RRB Clerk | Institute of Banking Personnel Selection (IBPS) | `RAILWAYS` | **75** | trade strong match(+20), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **270** (Matches: *Constable (Driver), Constable (Executive), Head Constable (Ministerial), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **261.5** (Matches: *Constable (Driver), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **190** (Matches: *Constable (Driver), Constable (Executive), Head Constable (Ministerial), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **181.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **181.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates
* **For Constable (Driver)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)
* **For Constable (Executive)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)
* **For Head Constable (Ministerial)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)


---


### Candidate #14: Waghmare Harshal Arun
* **Match Quality:** **🟢 Strong Match** (Top Score: 119)
* **Military Profile:** Branch: `Indian Army` | Trade: `Chef` | Role: `Tradesman` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Fluent`
* **Preferences:** State: `Maharashtra` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **119** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | APSSB Driver |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 3 | RSMSSB Driver |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 4 | Constable (Driver) | Delhi Police | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 5 | APSSB Personal Assistant / Stenographer |  | `POLICE_CAPF` | **111** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **109** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **109** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **97** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |
| 9 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **97** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |
| 10 | BPCL Recruitment | Bharat Petroleum Corporation Limited (BPCL) | `PSU` | **97** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **473.5** (Matches: *APSSB Driver, RSMSSB Driver, Constable (Driver), APSSB Personal Assistant / Stenographer, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **429.5** (Matches: *APSSB Driver, RSMSSB Driver, APSSB Personal Assistant / Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **417.5** (Matches: *APSSB Driver, RSMSSB Driver, APSSB Personal Assistant / Stenographer, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **417.5** (Matches: *APSSB Driver, RSMSSB Driver, APSSB Personal Assistant / Stenographer, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **370** (Matches: *RPF Constable, APSSB Driver, RSMSSB Driver, APSSB Personal Assistant / Stenographer*)


#### Active Vacancy Notifications & Exam Dates
* **For RPF Constable** (RRB (Railway Recruitment Board)):
  * [रेलवे भर्ती बोर्ड, चंडीगढ़Railway Recruitment Board, Chandigarh](https://www.rrbcdg.gov.in/index.php) (Last Date: TBD)
  * [Recruitment Notices](https://www.rrbcdg.gov.in/employment-notices.php) (Last Date: TBD)


---


### Candidate #15: NASEEM AHMAD
* **Match Quality:** **🟢 Strong Match** (Top Score: 148)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **148** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **74** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | UPTET | UP Basic Education Board | `TEACHING` | **67** | preference central govt(+20), preference state govt(+18), domicile home(+18) |
| 10 | UP TGT (Trained Graduate Teacher) | UPSESSB | `TEACHING` | **67** | preference central govt(+20), preference state govt(+18), domicile home(+18) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **442.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **386.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **386.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **350.5** (Matches: *UP Jail Warder, UPPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #16: Sachin patel
* **Match Quality:** **🟢 Strong Match** (Top Score: 149)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `National` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **474** | Rejected: **1155**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MP Police Constable | MP Police | `POLICE_CAPF` | **149** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | MP Police Head Constable |  | `POLICE_CAPF` | **149** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | MP Police SI |  | `POLICE_CAPF` | **149** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | MPPSC DSP |  | `POLICE_CAPF` | **134** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **101** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC CPO | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 8 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 9 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | MP Vyapam Forest Guard |  | `FOREST` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **515** (Matches: *MP Police Head Constable, MP Police SI, MPPSC DSP, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police, MP Vyapam Forest Guard*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **491** (Matches: *MP Police Head Constable, MP Police SI, MPPSC DSP, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police, MP Vyapam Forest Guard*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **475** (Matches: *MP Police Head Constable, MP Police SI, MPPSC DSP, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police, MP Vyapam Forest Guard*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **419** (Matches: *MP Police Head Constable, MP Police SI, MPPSC DSP, MP Vyapam Forest Guard*)
* **[SSC CPO]** (Subject: `General` | Category: `Intro`) — Relevance Score: **376** (Matches: *MP Police Head Constable, MP Police SI, MPPSC DSP, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, SSC Constable (Driver) in Delhi Police, MP Vyapam Forest Guard*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #17: ROHIT KUMAR
* **Match Quality:** **🟢 Strong Match** (Top Score: 162)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `District` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **476** | Rejected: **1153**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Police Constable | Bihar Police Sub-ordinate Services Commission | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Bihar Police SI |  | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Bihar Police Home Guard |  | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Bihar Jail Warder |  | `POLICE_CAPF` | **155** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | BPSC Assistant Engineer |  | `ENGINEERING` | **117** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 6 | BPSC Junior Engineer | Bihar Engineering Service | `ENGINEERING` | **117** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 7 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **116** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **114** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **495.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, Bihar Jail Warder, BPSC Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **479.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, Bihar Jail Warder, BPSC Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **463.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, Bihar Jail Warder, BPSC Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **435.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, Bihar Jail Warder, BPSC Assistant Engineer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **402** (Matches: *Bihar Police SI, Bihar Police Home Guard, Bihar Jail Warder, BPSC Assistant Engineer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #18: Biswajit sardar
* **Match Quality:** **🟡 Moderate Match** (Top Score: 96)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `House keeper` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **73** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **73** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **73** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | WB Gramin Bank Clerk | IBPS RRB | `BANKING` | **68** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 9 | WBSSC Clerk |  | `ADMINISTRATIVE` | **66** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **59** | preference state govt(+18), domicile home(+18), qualification over(+8) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **412** (Matches: *Constable, RPF Constable, WBSSC Clerk*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **408.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **400** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **304** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **256** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #19: Abhishek yadav
* **Match Quality:** **🟢 Strong Match** (Top Score: 112)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Hair dresser` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **104** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | UPSSSC Group D (Peon/MTS) | UPSSSC | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | UP Lekhpal |  | `REVENUE` | **49** | preference state govt(+18), domicile home(+18), character general(+5) |
| 10 | UP Agriculture Technical Assistant |  | `AGRICULTURE` | **49** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **472.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UP Lekhpal, UP Agriculture Technical Assistant*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **416.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UP Lekhpal, UP Agriculture Technical Assistant*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **416.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UP Lekhpal, UP Agriculture Technical Assistant*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **374** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable, UP Lekhpal, UP Agriculture Technical Assistant*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **372.5** (Matches: *UP Jail Warder, UPPSC DSP, UP Lekhpal, UP Agriculture Technical Assistant*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #20: Pradeep sharma
* **Match Quality:** **🟢 Strong Match** (Top Score: 132)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **132** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | UP Gramin Bank Clerk (Office Assistant) | IBPS RRB | `BANKING` | **66** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 9 | RRB Technician Grade 3 | RRB (Railway Recruitment Board) | `RAILWAYS` | **64** | trade strong match(+20), priority track(+15), math(+8) |
| 10 | UPSSSC Group C (Clerk/Steno) |  | `ADMINISTRATIVE` | **64** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **449.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **393.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **393.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **382** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable, UPSSSC Group C (Clerk/Steno)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **357.5** (Matches: *UP Jail Warder, UPPSC DSP, UPSSSC Group C (Clerk/Steno)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #21: Dola saikumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 140)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Andhra Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | APPSC SI |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | RSMSSB LDC |  | `POLICE_CAPF` | **137** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **135** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **135** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **114** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **104** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **104** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |
| 10 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **433.5** (Matches: *APPSC SI, RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **377.5** (Matches: *APPSC SI, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **377.5** (Matches: *APPSC SI, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *APPSC SI, RSMSSB LDC, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **341.5** (Matches: *APPSC SI, RSMSSB LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #22: Indrajit mondal
* **Match Quality:** **🟢 Strong Match** (Top Score: 108)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **108** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **108** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **108** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **108** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **55** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **54** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | WBCS (West Bengal Civil Service) | WBPSC | `CIVIL_SERVICES` | **47** | preference state govt(+18), domicile home(+18), category reservation(+5) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #23: Sanjit mondal
* **Match Quality:** **🟢 Strong Match** (Top Score: 114)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **56** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | WBCS (West Bengal Civil Service) | WBPSC | `CIVIL_SERVICES` | **49** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #24: Roshan choudhary
* **Match Quality:** **🟢 Strong Match** (Top Score: 100)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Tdn` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 10` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **352** | Rejected: **1277**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MPPSC DSP |  | `POLICE_CAPF` | **100** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **97** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | Bihar Police | `POLICE_CAPF` | **97** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | West Bengal Police | `POLICE_CAPF` | **97** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | MP Vyapam Forest Guard |  | `FOREST` | **82** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **76** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **76** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **76** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 9 | MP Vyapam Group 5 (Peon/MTS) | MPESB (MP Vyapam) | `GROUP_D` | **62** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | MPPSC State Service Exam (SSE) | Madhya Pradesh Public Service Commission | `CIVIL_SERVICES` | **47** | preference state govt(+18), domicile home(+18), full term(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **458.5** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **412** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, RPF Constable*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **406** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **356** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **338.5** (Matches: *MPPSC DSP, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #25: ABHAY SINGH
* **Match Quality:** **🟡 Moderate Match** (Top Score: 91)
* **Military Profile:** Branch: `Indian Army` | Trade: `ARMD/CHEF` | Role: `TRADESMAN` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttarakhand` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **91** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **91** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **91** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **91** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **88** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | UKSSSC Stenographer |  | `SSC` | **60** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 9 | UKSSSC Group C/D (Peon/MTS) | UKSSSC | `GROUP_C` | **54** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 10 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **53** | trade strong match(+20), priority track(+15), qualification over(+8) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **450** (Matches: *Constable, RPF Constable, UKSSSC Stenographer*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **423** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UKSSSC Stenographer*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **402** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UKSSSC Stenographer*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **298** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UKSSSC Stenographer*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **258** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UKSSSC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #26: Ashanulla Gazi
* **Match Quality:** **🟢 Strong Match** (Top Score: 136)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Driver` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `C Certificate` | Sports: `State` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **136** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **136** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **136** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **136** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **107** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **91** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **91** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **62** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 9 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 10 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **56** | priority track(+15), trade soft match(+10), ncc(+10) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **396** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **376** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **272** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **232** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #27: Mohit
* **Match Quality:** **🟢 Strong Match** (Top Score: 101)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gunner` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Haryana` | Relocate: `Anywhere in India` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **101** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 2 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | Bihar Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | West Bengal Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **74** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 6 | Fire Operator | Delhi Fire Service | `FIRE` | **74** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 7 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **74** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 8 | Fireman / Driver | Fire & Emergency Services Lakshadweep | `FIRE` | **74** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 9 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 10 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **344.5** (Matches: *RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **322** (Matches: *RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **310** (Matches: *RSMSSB LDC, Constable*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **248** (Matches: *RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **232** (Matches: *RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #28: Ankit Singh gurjar
* **Match Quality:** **🟢 Strong Match** (Top Score: 140)
* **Military Profile:** Branch: `Indian Army` | Trade: `Eme` | Role: `Technical.    Auto tech A veh` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Delhi police*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MPPSC DSP |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | APSSB Driver |  | `POLICE_CAPF` | **138** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | RSMSSB JE |  | `POLICE_CAPF` | **138** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | RSMSSB Driver |  | `POLICE_CAPF` | **138** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | JE / Clerk / Admin Staff | Chandigarh Housing Board | `ENGINEERING` | **89** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | Clerk / JE / Technical Staff Recruitment | LAHDC Leh | `ENGINEERING` | **89** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Clerk / JE / Technical Staff Recruitment | LAHDC Kargil | `ENGINEERING` | **89** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *MPPSC DSP, APSSB Driver, RSMSSB JE, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *MPPSC DSP, APSSB Driver, RSMSSB JE, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *MPPSC DSP, APSSB Driver, RSMSSB JE, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **491.5** (Matches: *MPPSC DSP, APSSB Driver, RSMSSB JE, RSMSSB Driver*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **442** (Matches: *MPPSC DSP, APSSB Driver, RSMSSB JE, RSMSSB Driver*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #29: Omprakash Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 154)
* **Military Profile:** Branch: `Indian Army` | Trade: `Eme` | Role: `Technical` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi), Patwaari*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **154** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **146** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | APSSB Driver |  | `POLICE_CAPF` | **144** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | RSMSSB JE |  | `POLICE_CAPF` | **144** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | Bihar Pharmacist/Lab Technician |  | `ENGINEERING` | **106** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | JE / Clerk / Admin Staff | Chandigarh Housing Board | `ENGINEERING` | **95** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Clerk / JE / Technical Staff Recruitment | LAHDC Leh | `ENGINEERING` | **95** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **562.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **562.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **562.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **534.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **492** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #30: Bipin kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 132)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Driver` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Anywhere in India` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **132** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | RSMSSB LDC |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **74** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **74** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 10 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **74** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *Bihar Jail Warder, BPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *Bihar Jail Warder, BPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *Bihar Jail Warder, BPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **421.5** (Matches: *Bihar Jail Warder, BPSC DSP, RSMSSB LDC*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **372** (Matches: *Bihar Jail Warder, BPSC DSP, RSMSSB LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #31: Roushan kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 128)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **363** | Rejected: **1266**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **110** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **110** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | BSSC Stenographer |  | `SSC` | **61** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 9 | BSSC Group D (Peon/Sweeper) | Bihar Staff Selection Commission | `GROUP_D` | **55** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 10 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **54** | trade strong match(+20), priority track(+15), qualification over(+8) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **485** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Stenographer, BSSC Group D (Peon/Sweeper)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **429** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Stenographer, BSSC Group D (Peon/Sweeper)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **429** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Stenographer, BSSC Group D (Peon/Sweeper)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **409** (Matches: *Bihar Jail Warder, BPSC DSP, BSSC Stenographer*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **402** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, RPF Constable, BSSC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #32: Arvind kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 114)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Washerman` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Chhattisgarh` | Relocate: `Anywhere in India` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | CG Excise Constable | CG Excise | `POLICE_CAPF` | **114** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | CGPSC DSP |  | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | CGPSC Excise Sub Inspector |  | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | CG Home Guard | Home Guard Dept., CG | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | CG Vyapam Forest Guard |  | `FOREST` | **86** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **83** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **83** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **83** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | Inspector / Clerk | Excise & Taxation Dept | `EXCISE` | **83** | ex servicemen quota(+25), preference state govt(+18), qualification exact(+15) |
| 10 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **76** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **408.5** (Matches: *CGPSC DSP, CGPSC Excise Sub Inspector, CG Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **408.5** (Matches: *CGPSC DSP, CGPSC Excise Sub Inspector, CG Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **408.5** (Matches: *CGPSC DSP, CGPSC Excise Sub Inspector, CG Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **372.5** (Matches: *CGPSC DSP, CGPSC Excise Sub Inspector, CG Vyapam Forest Guard*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **332** (Matches: *CGPSC DSP, CGPSC Excise Sub Inspector, CG Vyapam Forest Guard*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #33: Vivek
* **Match Quality:** **🟢 Strong Match** (Top Score: 137)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Driver` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Anywhere in India` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MP Police Constable | MP Police | `POLICE_CAPF` | **137** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | MP Police Head Constable |  | `POLICE_CAPF` | **137** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | MP Police SI |  | `POLICE_CAPF` | **137** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **130** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **101** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **91** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **91** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | MP Vyapam Forest Guard |  | `FOREST` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 9 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **410** (Matches: *MP Police Head Constable, MP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), MP Vyapam Forest Guard, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **410** (Matches: *MP Police Head Constable, MP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), MP Vyapam Forest Guard, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **410** (Matches: *MP Police Head Constable, MP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), MP Vyapam Forest Guard, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **362** (Matches: *MP Police Head Constable, MP Police SI, MP Vyapam Forest Guard*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **302** (Matches: *MP Police Head Constable, MP Police SI, MP Vyapam Forest Guard*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #34: Anirban taye
* **Match Quality:** **🟢 Strong Match** (Top Score: 134)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Driver` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Assam` | Relocate: `Anywhere in India` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Assam Jail Warder |  | `POLICE_CAPF` | **134** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | APSC DSP |  | `POLICE_CAPF` | **126** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | ABUB (Armed Branch UB) |  | `POLICE_CAPF` | **126** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | RSMSSB LDC |  | `POLICE_CAPF` | **123** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **93** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **83** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **83** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **76** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **76** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 10 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **76** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **491.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), RSMSSB LDC*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **442** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), RSMSSB LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #35: Krishna Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 124)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armed` | Role: `Steward` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **474** | Rejected: **1155**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MPPSC DSP |  | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | MP Police Constable | MP Police | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | MP Police Head Constable |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | MP Police SI |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **85** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | MP Vyapam Forest Guard |  | `FOREST` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 8 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 10 | SSC CPO | Staff Selection Commission | `SSC` | **70** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **463** (Matches: *MPPSC DSP, MP Police Head Constable, MP Police SI, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **455** (Matches: *MPPSC DSP, MP Police Head Constable, MP Police SI, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **455** (Matches: *MPPSC DSP, MP Police Head Constable, MP Police SI, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **431** (Matches: *MPPSC DSP, MP Police Head Constable, MP Police SI, MP Vyapam Forest Guard*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **392** (Matches: *MPPSC DSP, MP Police Head Constable, MP Police SI, MP Vyapam Forest Guard*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #36: Aashish Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 140)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `National` | English: `Basic`
* **Preferences:** State: `Haryana` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | HPSC Deputy Superintendent of Police (DSP) |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Haryana Police Constable | Haryana Police | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Haryana Police Sub Inspector |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Haryana Police Commando |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **128** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **97** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **97** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | Railway Foundation Courses | RRB (Railway Recruitment Board) | `RAILWAYS` | **90** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **478** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **478** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **478** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **422** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **352** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando*)


#### Active Vacancy Notifications & Exam Dates
* **For Haryana Police Constable** (Haryana Police):
  * [List of Authorized/Unauthorized/ Recruiting aqents for sending people
                                            in abroad for the State of Haryana.](https://haryanapolice.gov.in/#) (Last Date: TBD)


---


### Candidate #37: SOURAV GHOSH
* **Match Quality:** **🟢 Strong Match** (Top Score: 116)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **466** | Rejected: **1163**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | WBPSC WBSI (West Bengal Police SI) |  | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | WB Police Constable | WBPRB | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | WB Police Sub-Inspector |  | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **86** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC CPO | Staff Selection Commission | `SSC` | **85** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **85** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **84** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **438** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **414** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **414** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **350** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **292** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #38: Shashikant Yadav
* **Match Quality:** **🟢 Strong Match** (Top Score: 112)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `OPR` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **104** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | UP Police SI | UPPRPB | `POLICE_CAPF` | **101** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **101** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **75** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | PCS | UPPSC | `CIVIL_SERVICES` | **64** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | UPPSC PCS (Provincial Civil Services) | UPPSC | `CIVIL_SERVICES` | **64** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **368.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **368.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **368.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **332.5** (Matches: *UP Jail Warder, UPPSC DSP*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **292** (Matches: *UP Jail Warder, UPPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #39: Praveen f
* **Match Quality:** **🟢 Strong Match** (Top Score: 108)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gunnet` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Tamil Nadu` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **367** | Rejected: **1262**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | TNPSC DSP |  | `POLICE_CAPF` | **108** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **98** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | Bihar Police | `POLICE_CAPF` | **98** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | West Bengal Police | `POLICE_CAPF` | **98** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | TNPSC Group 4 MTS/Peon | TNPSC | `GROUP_D` | **61** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Tamil Nadu Gramin Bank Clerk | IBPS RRB | `BANKING` | **60** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 10 | Group 1 | TNPSC | `CIVIL_SERVICES` | **53** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **416.5** (Matches: *TNPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **366** (Matches: *TNPSC DSP, Constable, RPF Constable*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **354** (Matches: *TNPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **312** (Matches: *TNPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **296.5** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #40: Rakesh Kumar khichar
* **Match Quality:** **🟢 Strong Match** (Top Score: 119)
* **Military Profile:** Branch: `Indian Army` | Trade: `12th` | Role: `Auto tech vehicle` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **380** | Rejected: **1249**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **119** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | RSMSSB JE |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | RSMSSB Junior Accountant |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | RSMSSB Driver |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | Rajasthan Fireman |  | `FIRE` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | Rajasthan Marudhara Gramin Bank Clerk |  | `BANKING` | **66** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 10 | Rajasthan High Court Clerk | Rajasthan High Court | `JUDICIARY` | **51** | domicile home(+18), qualification exact(+15), character required track(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **598.5** (Matches: *RSMSSB LDC, RSMSSB JE, RSMSSB Junior Accountant, RSMSSB Driver, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **598.5** (Matches: *RSMSSB LDC, RSMSSB JE, RSMSSB Junior Accountant, RSMSSB Driver, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **598.5** (Matches: *RSMSSB LDC, RSMSSB JE, RSMSSB Junior Accountant, RSMSSB Driver, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **562.5** (Matches: *RSMSSB LDC, RSMSSB JE, RSMSSB Junior Accountant, RSMSSB Driver, Rajasthan Fireman, Rajasthan Marudhara Gramin Bank Clerk*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **522** (Matches: *RSMSSB LDC, RSMSSB JE, RSMSSB Junior Accountant, RSMSSB Driver, Rajasthan Fireman, Rajasthan Marudhara Gramin Bank Clerk*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #41: Kumar sourav
* **Match Quality:** **🟢 Strong Match** (Top Score: 129)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gunner` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `State` | English: `Intermediate`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **380** | Rejected: **1249**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | RSMSSB Stenographer |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | RSMSSB Driver |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | RSMSSB Lab Assistant |  | `POLICE_CAPF` | **114** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | Rajasthan Fireman |  | `FIRE` | **88** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **81** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | Rajasthan Marudhara Gramin Bank Clerk |  | `BANKING` | **60** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 10 | Rajasthan High Court Stenographer |  | `JUDICIARY` | **55** | domicile home(+18), qualification exact(+15), character required track(+10) |

#### Matched Preparation Materials (Top 5)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **651.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, Rajasthan Fireman, Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **599.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **599.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **599.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[SSC REASONING GUIDE BOOK]** (Subject: `REASONING` | Category: `Guide`) — Relevance Score: **540.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, Rajasthan Fireman, Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #42: KRISHNA JADHAV
* **Match Quality:** **🟡 Moderate Match** (Top Score: 94)
* **Military Profile:** Branch: `Indian Army` | Trade: `Chef` | Role: `Tradesman` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Maharashtra` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **362** | Rejected: **1267**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | Maharashtra Forest Guard | Maharashtra Forest Department | `FOREST` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | Maharashtra Gramin Bank Clerk (Office Assistant) | IBPS RRB | `BANKING` | **66** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 10 | RRB Technician Grade 3 | RRB (Railway Recruitment Board) | `RAILWAYS` | **64** | trade strong match(+20), priority track(+15), math(+8) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **367.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **364** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **252** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **220** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #43: Avinash Verma
* **Match Quality:** **🟢 Strong Match** (Top Score: 110)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Tradesmen` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Jammu & Kashmir` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Constable | J&K Police | `POLICE_CAPF` | **110** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 2 | JKSSB Graduate Level Examination | JKSSB | `POLICE_CAPF` | **102** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 3 | Sub-Inspector | J&K Police | `POLICE_CAPF` | **102** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 4 | Sub-Inspector (Home Dept Cadre) | JKSSB | `POLICE_CAPF` | **102** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **89** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **89** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **87** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |
| 9 | GDS / Postal Assistant | India Post | `POSTAL` | **81** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 10 | SSC CPO | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **284** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **212** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **204** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **196** (Matches: *Constable, RPF Constable*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **188** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)


#### Active Vacancy Notifications & Exam Dates
* **For Constable** (J&K Police):
  * [Notifications](https://jkpolice.gov.in/#) (Last Date: TBD)
  * [Tender Notices](https://jkpolice.gov.in/Tender-Notices) (Last Date: TBD)
* **For Sub-Inspector** (J&K Police):
  * [Notifications](https://jkpolice.gov.in/#) (Last Date: TBD)
  * [Tender Notices](https://jkpolice.gov.in/Tender-Notices) (Last Date: TBD)


---


### Candidate #44: shahib chaudhary
* **Match Quality:** **🟢 Strong Match** (Top Score: 129)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `opr` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **88** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | UPSSSC Group D (Peon/MTS) | UPSSSC | `GROUP_D` | **54** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **53** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | UP Lekhpal |  | `REVENUE` | **46** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **449.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UP Lekhpal*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **393.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UP Lekhpal*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **393.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UP Lekhpal*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **382** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable, UP Lekhpal*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **357.5** (Matches: *UP Jail Warder, UPPSC DSP, UP Lekhpal*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #45: Av Rohit Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 110)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **110** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **102** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 3 | APSSB Combined Higher Secondary Level (CHSL) |  | `POLICE_CAPF` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 4 | APSSB Combined Secondary Level (CSLE) |  | `POLICE_CAPF` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **89** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **89** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **87** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **575** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Combined Higher Secondary Level (CHSL), APSSB Combined Secondary Level (CSLE), SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **559** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Combined Higher Secondary Level (CHSL), APSSB Combined Secondary Level (CSLE), SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **559** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Combined Higher Secondary Level (CHSL), APSSB Combined Secondary Level (CSLE), SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Combined Higher Secondary Level (CHSL), APSSB Combined Secondary Level (CSLE)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **444** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Combined Higher Secondary Level (CHSL), APSSB Combined Secondary Level (CSLE), SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #46: Shashank Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 129)
* **Military Profile:** Branch: `Indian Army` | Trade: `EME` | Role: `Technical` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Bihar` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.), Railway*
* **Exams Statistics:** Eligible: **363** | Rejected: **1266**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **90** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | Bihar Pharmacist/Lab Technician |  | `ENGINEERING` | **81** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | BSSC Clerk/LDC |  | `ADMINISTRATIVE` | **71** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | IBPS RRB Clerk | Institute of Banking Personnel Selection (IBPS) | `RAILWAYS` | **70** | trade strong match(+20), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **491.5** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Clerk/LDC*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **442** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, RPF Constable, Bihar Pharmacist/Lab Technician, BSSC Clerk/LDC*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **435.5** (Matches: *Bihar Jail Warder, BPSC DSP, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Clerk/LDC*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **435.5** (Matches: *Bihar Jail Warder, BPSC DSP, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Clerk/LDC*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **407.5** (Matches: *Bihar Jail Warder, BPSC DSP, Bihar Pharmacist/Lab Technician, BSSC Clerk/LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #47: MASIDUL SK
* **Match Quality:** **🟢 Strong Match** (Top Score: 111)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Driver` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **88** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **78** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **54** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **53** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | WBCS (West Bengal Civil Service) | WBPSC | `CIVIL_SERVICES` | **46** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #48: Koushik Ghosh
* **Match Quality:** **🟢 Strong Match** (Top Score: 140)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd DVR` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **89** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |
| 9 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **89** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |
| 10 | BPCL Recruitment | Bharat Petroleum Corporation Limited (BPCL) | `PSU` | **89** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **379.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #49: Shivam upadhyay
* **Match Quality:** **🟢 Strong Match** (Top Score: 133)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Driver` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Anywhere in India` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **133** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **125** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | APSSB Personal Assistant / Stenographer |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | RSMSSB LDC |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **97** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **87** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **87** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **75** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **75** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 10 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **75** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |

#### Matched Preparation Materials (Top 5)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **555.5** (Matches: *UP Jail Warder, UPPSC DSP, APSSB Personal Assistant / Stenographer, RSMSSB LDC*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *UP Jail Warder, UPPSC DSP, APSSB Personal Assistant / Stenographer, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *UP Jail Warder, UPPSC DSP, APSSB Personal Assistant / Stenographer, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *UP Jail Warder, UPPSC DSP, APSSB Personal Assistant / Stenographer, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **442** (Matches: *UP Jail Warder, UPPSC DSP, APSSB Personal Assistant / Stenographer, RSMSSB LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #50: Sangam kumar yadav
* **Match Quality:** **🟢 Strong Match** (Top Score: 148)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **148** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | RSMSSB LDC |  | `POLICE_CAPF` | **137** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |
| 10 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **421.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **372** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #51: Apovitho tsuori
* **Match Quality:** **🟡 Moderate Match** (Top Score: 84)
* **Military Profile:** Branch: `Indian Army` | Trade: `Barber` | Role: `Tradesman` | Medical: `F(2)P`
* **Academic Profile:** Qualification: `Class 10` | NCC: `None` | Sports: `International/Services` | English: `Intermediate`
* **Preferences:** State: `Nagaland` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **292** | Rejected: **1337**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **84** | trade strong match(+20), priority track(+15), qualification exact(+15) |
| 2 | Inspector of Cooperative Societies | Nagaland Registrar Cooperative | `ENGINEERING` | **72** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 3 | Nagaland Group D (Peon/MTS) | Nagaland PSC/NSSB | `GROUP_D` | **70** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 4 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **69** | trade strong match(+20), priority track(+15), qualification exact(+15) |
| 5 | RPF Sub Inspector | RRB (Railway Recruitment Board) | `RAILWAYS` | **69** | trade strong match(+20), priority track(+15), sports quota(+15) |
| 6 | Patna Metro Recruitment | PMRC | `RAILWAYS` | **69** | trade strong match(+20), priority track(+15), sports quota(+15) |
| 7 | Indore Metro Recruitment | MPMRCL | `RAILWAYS` | **69** | trade strong match(+20), priority track(+15), sports quota(+15) |
| 8 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **59** | trade strong match(+20), priority track(+15), character required track(+10) |
| 9 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **59** | trade strong match(+20), priority track(+15), character required track(+10) |
| 10 | BPCL Recruitment | Bharat Petroleum Corporation Limited (BPCL) | `PSU` | **59** | trade strong match(+20), priority track(+15), character required track(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **127.5** (Matches: *SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **127.5** (Matches: *SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **127.5** (Matches: *SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SC DELHI POLICE HEAD CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **120** (Matches: *Nagaland Group D (Peon/MTS), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **99.5** (Matches: *Career Track*)


#### Active Vacancy Notifications & Exam Dates
* **For Railways Group D** (RRB (Railway Recruitment Board)):
  * [रेलवे भर्ती बोर्ड, चंडीगढ़Railway Recruitment Board, Chandigarh](https://www.rrbcdg.gov.in/index.php) (Last Date: TBD)
  * [Recruitment Notices](https://www.rrbcdg.gov.in/employment-notices.php) (Last Date: TBD)


---


### Candidate #52: Jalendra amanatya
* **Match Quality:** **🟢 Strong Match** (Top Score: 143)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `SS` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Odisha` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **475** | Rejected: **1154**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Odisha Police Constable (Sepoy) | Odisha Police | `POLICE_CAPF` | **143** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | Odisha Police SI | Odisha Police/State Selection Board | `POLICE_CAPF` | **143** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | Delhi Police Driver | Staff Selection Commission (ssc) | `POLICE_CAPF` | **133** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Odisha ABHAD Constable | SSB Odisha | `POLICE_CAPF` | **128** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **120** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 6 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **112** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **112** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **107** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 9 | OSSC Junior Engineer (JE Civil/Mech/Elect) |  | `ENGINEERING` | **103** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 10 | SSC CPO | Staff Selection Commission | `SSC` | **102** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **331** (Matches: *Delhi Police Driver, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, OSSC Junior Engineer (JE Civil/Mech/Elect), SSC CPO*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **291** (Matches: *Delhi Police Driver, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, OSSC Junior Engineer (JE Civil/Mech/Elect), SSC CPO*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **283** (Matches: *Delhi Police Driver, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, OSSC Junior Engineer (JE Civil/Mech/Elect), SSC CPO*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **187** (Matches: *OSSC Junior Engineer (JE Civil/Mech/Elect)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **186** (Matches: *Delhi Police Driver, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, OSSC Junior Engineer (JE Civil/Mech/Elect), SSC CPO*)


#### Active Vacancy Notifications & Exam Dates
* **For Delhi Police Driver** (Staff Selection Commission (ssc)):
  * [Constable (Driver) Male in Delhi Police Examination, 2025–Uploading of Final Answer Keys along with Question Papers cum Response Sheets of CBE, along with the Marks](https://ssc.gov.in/portal/records/attachment/82liqxb6q7v0m8s0jg65w) (Last Date: TBD)
  * [Schedule of Constable (GD) in Central Armed Police Forces (CAPFs) and 
SSF, and Rifleman (GD) in Assam Rifles Examination, 2026](https://ssc.gov.in/portal/records/attachment/24b7iihqak05cxypteuje) (Last Date: TBD)
  * [Constable (Driver) Male in Delhi Police Examination, 2025 – Declaration of result of Computer Based Examination for shortlisting candidates to appear in Physical Endurance and Measurement Test (PE and MT)/ Document Verification (DV)/ Trade Test](https://ssc.gov.in/portal/records/attachment/66njoxneu52ywayce437n) (Last Date: TBD)
  * [Constable (GD) in Central Armed Police Forces (CAPFs) and SSF, and Rifleman (GD) in Assam Rifles Examination, 2026 : Corrigendum regarding Uniform Guidelines of Medical Examination.](https://ssc.gov.in/portal/records/attachment/r23ochai30gzqusx86iid) (Last Date: TBD)
  * [Important Notice: Constable (GD) in Central Armed Police Forces (CAPFs), SSF, Rifleman (GD) in Assam Rifles and Sepoy in Narcotics Control Bureau Examination, 2026](https://ssc.gov.in/portal/records/attachment/mzdhs3ifn7mb9o9xmey2b) (Last Date: TBD)


---


### Candidate #53: Suraj kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 117)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Tradesman` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Chhattisgarh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **479** | Rejected: **1150**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Chhattisgarh Police Constable | CG Police | `POLICE_CAPF` | **117** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | Chhattisgarh Police SI | CG Police/CGPSC | `POLICE_CAPF` | **117** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | CG Excise Constable | CG Excise | `POLICE_CAPF` | **110** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | Delhi Police Driver | Staff Selection Commission (ssc) | `POLICE_CAPF` | **107** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | CG Vyapam Assistant Engineer |  | `ENGINEERING` | **97** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 6 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **96** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 8 | SSC CPO | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 9 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **324.5** (Matches: *Delhi Police Driver, CG Vyapam Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **308.5** (Matches: *Delhi Police Driver, CG Vyapam Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **284.5** (Matches: *Delhi Police Driver, CG Vyapam Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **212.5** (Matches: *CG Vyapam Assistant Engineer*)
* **[SSC CPO]** (Subject: `General` | Category: `Intro`) — Relevance Score: **174** (Matches: *Delhi Police Driver, CG Vyapam Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #54: Amit Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 165)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Police SI | UPPRPB | `POLICE_CAPF` | **165** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **165** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | UP Police SI |  | `POLICE_CAPF` | **165** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | UP Jail Warder |  | `POLICE_CAPF` | **158** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | UPPSC AE (Assistant Engineer) |  | `ENGINEERING` | **123** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 6 | UPSSSC Junior Engineer |  | `ENGINEERING` | **123** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 7 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **116** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **455.5** (Matches: *UP Police SI, UP Jail Warder, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **439.5** (Matches: *UP Police SI, UP Jail Warder, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **423.5** (Matches: *UP Police SI, UP Jail Warder, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **395.5** (Matches: *UP Police SI, UP Jail Warder, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **362** (Matches: *UP Police SI, UP Jail Warder, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #55: Mahantesh Basappa sannamani
* **Match Quality:** **🟢 Strong Match** (Top Score: 140)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Karnataka` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | KPSC DSP |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | RSMSSB LDC |  | `POLICE_CAPF` | **137** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |
| 10 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), trade soft match(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **433.5** (Matches: *KPSC DSP, RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **377.5** (Matches: *KPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **377.5** (Matches: *KPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *KPSC DSP, RSMSSB LDC, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **341.5** (Matches: *KPSC DSP, RSMSSB LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #56: Siddharth Singh
* **Match Quality:** **🟢 Strong Match** (Top Score: 129)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **90** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | UPSSSC Group D (Peon/MTS) | UPSSSC | `GROUP_D` | **56** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **55** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | UPSSSC Group C (Clerk/Steno) |  | `ADMINISTRATIVE` | **53** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **449.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **393.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **393.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **382** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable, UPSSSC Group C (Clerk/Steno)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **357.5** (Matches: *UP Jail Warder, UPPSC DSP, UPSSSC Group C (Clerk/Steno)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #57: Anil Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 128)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `B Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UP Police SI | UPPRPB | `POLICE_CAPF` | **122** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **122** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | UP Police SI |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **94** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **84** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **84** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **73** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 9 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **73** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **71** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **395** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **395** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **395** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **339** (Matches: *UP Jail Warder, UP Police SI*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **272** (Matches: *UP Jail Warder, UP Police SI*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #58: Subhash kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 138)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **138** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **130** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **125** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **125** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **102** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **92** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **92** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | UP Gramin Bank Clerk (Office Assistant) | IBPS RRB | `BANKING` | **80** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 9 | UPSSSC Group C (Clerk/Steno) |  | `ADMINISTRATIVE` | **78** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | IBPS RRB Clerk | Institute of Banking Personnel Selection (IBPS) | `RAILWAYS` | **77** | trade strong match(+20), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **456.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **400.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **400.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **392** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable, UPSSSC Group C (Clerk/Steno)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **364.5** (Matches: *UP Jail Warder, UPPSC DSP, UPSSSC Group C (Clerk/Steno)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #59: Praves Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 128)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured corps` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | UP Police SI | UPPRPB | `POLICE_CAPF` | **117** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **117** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | UPPSC AE (Assistant Engineer) |  | `ENGINEERING` | **77** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 8 | UPSSSC Junior Engineer |  | `ENGINEERING` | **77** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 9 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **76** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **71** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **475.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **459.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **459.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **407.5** (Matches: *UP Jail Warder, UPPSC DSP, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **362** (Matches: *UP Jail Warder, UPPSC DSP, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #60: Jeet Halder
* **Match Quality:** **🟡 Moderate Match** (Top Score: 96)
* **Military Profile:** Branch: `Indian Army` | Trade: `ARMD` | Role: `GD(GNR)` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **73** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **73** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **73** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **59** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | WBCS (West Bengal Civil Service) | WBPSC | `CIVIL_SERVICES` | **51** | preference state govt(+18), domicile home(+18), category reservation(+5) |
| 10 | WB TET (Teacher Eligibility Test) | WBBPE/WBBSE | `TEACHING` | **51** | preference state govt(+18), domicile home(+18), category reservation(+5) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **392** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **388.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **380** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **284** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **236** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #61: AMIT SHARMA
* **Match Quality:** **🟢 Strong Match** (Top Score: 132)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Jharkhand` | Relocate: `Anywhere in India` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | JSSC Excise Constable |  | `POLICE_CAPF` | **132** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | JSSC Assistant Jailor |  | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | APSSB Driver |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | RSMSSB Driver |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | Fireman / Driver Operator | A&N Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 6 | Fire Operator | Delhi Fire Service | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 7 | Fireman / Driver Operator | Fire & Emergency Services Ladakh | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 8 | Fireman / Driver | Fire & Emergency Services Lakshadweep | `FIRE` | **82** | ex servicemen quota(+25), preference state govt(+18), physical fit(+10) |
| 9 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 10 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **464.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, APSSB Driver, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **464.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, APSSB Driver, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **464.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, APSSB Driver, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **452.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, APSSB Driver, RSMSSB Driver*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **442** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, APSSB Driver, RSMSSB Driver*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #62: Sukhendra pandey
* **Match Quality:** **🟢 Strong Match** (Top Score: 110)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **474** | Rejected: **1155**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MP Police Constable | MP Police | `POLICE_CAPF` | **110** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 2 | MP Police Head Constable |  | `POLICE_CAPF` | **110** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 3 | MP Police SI |  | `POLICE_CAPF` | **110** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **103** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **98** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **98** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **98** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **88** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |
| 9 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **87** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **87** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **389** (Matches: *MP Police Head Constable, MP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **389** (Matches: *MP Police Head Constable, MP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **389** (Matches: *MP Police Head Constable, MP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **333** (Matches: *MP Police Head Constable, MP Police SI*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **274** (Matches: *MP Police Head Constable, MP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #63: Mohd Sameer
* **Match Quality:** **🟢 Strong Match** (Top Score: 184)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd GD` | Role: `GNR/DVR` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `International/Services` | English: `Intermediate`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Police SI | UPPRPB | `POLICE_CAPF` | **184** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **184** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | UP Police SI |  | `POLICE_CAPF` | **184** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | UP Jail Warder |  | `POLICE_CAPF` | **177** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **115** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **115** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **112** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **112** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **103** | ex servicemen quota(+25), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **375** (Matches: *UP Police SI, UP Jail Warder, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **375** (Matches: *UP Police SI, UP Jail Warder, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **375** (Matches: *UP Police SI, UP Jail Warder, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **319** (Matches: *UP Police SI, UP Jail Warder*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **252** (Matches: *UP Police SI, UP Jail Warder*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #64: Mantoo kumar gaun
* **Match Quality:** **🟢 Strong Match** (Top Score: 175)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd gd` | Role: `Dvr/ Opr` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `International/Services` | English: `Intermediate`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **175** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UP Police SI | UPPRPB | `POLICE_CAPF` | **172** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **172** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | UP Police SI |  | `POLICE_CAPF` | **172** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC CPO | Staff Selection Commission | `SSC` | **102** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **102** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | Railway Foundation Courses | RRB (Railway Recruitment Board) | `RAILWAYS` | **102** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **422** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **398** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **398** (Matches: *UP Jail Warder, UP Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **342** (Matches: *UP Jail Warder, UP Police SI*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **272** (Matches: *UP Jail Warder, UP Police SI*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #65: Kundan kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 148)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd gd` | Role: `Dvr/opp` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **148** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | APSSB Driver |  | `POLICE_CAPF` | **138** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | RSMSSB JE |  | `POLICE_CAPF` | **138** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | Bihar Pharmacist/Lab Technician |  | `ENGINEERING` | **100** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | JE / Clerk / Admin Staff | Chandigarh Housing Board | `ENGINEERING` | **89** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Clerk / JE / Technical Staff Recruitment | LAHDC Leh | `ENGINEERING` | **89** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **562.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **562.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **562.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **534.5** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **492** (Matches: *Bihar Jail Warder, BPSC DSP, APSSB Driver, RSMSSB JE, Bihar Pharmacist/Lab Technician*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #66: Ritesh Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 169)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `C Certificate` | Sports: `State` | English: `Basic`
* **Preferences:** State: `Himachal Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | HPSSSB Clerk | Himachal Pradesh Staff Selection Commission | `POLICE_CAPF` | **169** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Constable (Driver) | Delhi Police | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **154** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **154** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **127** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **111** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **111** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | JE / Clerk / Admin Staff | Chandigarh Housing Board | `ENGINEERING` | **97** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | Clerk / JE / Technical Staff Recruitment | LAHDC Leh | `ENGINEERING` | **97** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Clerk / JE / Technical Staff Recruitment | LAHDC Kargil | `ENGINEERING` | **97** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **355.5** (Matches: *HPSSSB Clerk, Constable (Driver), Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **258** (Matches: *HPSSSB Clerk, Constable (Driver), Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *HPSSSB Clerk, Constable (Driver), Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **227.5** (Matches: *HPSSSB Clerk, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **227.5** (Matches: *HPSSSB Clerk, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates
* **For Constable (Driver)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)


---


### Candidate #67: RANJEET SWAMI
* **Match Quality:** **🟢 Strong Match** (Top Score: 116)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Opr` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **491** | Rejected: **1138**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | RSMSSB Stenographer |  | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | RSMSSB Driver |  | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | Rajasthan Police Constable | Rajasthan Police | `POLICE_CAPF` | **113** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | Rajasthan Fireman |  | `FIRE` | **88** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **87** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **75** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 10 | SSC CPO | Staff Selection Commission | `SSC` | **72** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **538** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, Rajasthan Fireman*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **506** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **498** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **498** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO*)
* **[SSC REASONING GUIDE BOOK]** (Subject: `REASONING` | Category: `Guide`) — Relevance Score: **445** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, Rajasthan Fireman*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #68: Anil Prajapat
* **Match Quality:** **🟢 Strong Match** (Top Score: 116)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **365** | Rejected: **1264**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MPPSC DSP |  | `POLICE_CAPF` | **116** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **106** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | Bihar Police | `POLICE_CAPF` | **106** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | West Bengal Police | `POLICE_CAPF` | **106** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | MP Vyapam Forest Guard |  | `FOREST` | **80** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **77** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **77** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **67** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | MP Vyapam Group 5 (Peon/MTS) | MPESB (MP Vyapam) | `GROUP_D` | **53** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 10 | MP Vyapam Stenographer |  | `SECRETARIAT` | **52** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **468.5** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman), MP Vyapam Stenographer*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **422** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, RPF Constable, MP Vyapam Stenographer*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **416** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman), MP Vyapam Stenographer*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **366** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman), MP Vyapam Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **348.5** (Matches: *MPPSC DSP, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman), MP Vyapam Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #69: Bishant sanyasi
* **Match Quality:** **🟢 Strong Match** (Top Score: 111)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **111** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **90** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **80** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **56** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **55** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | WBSSC Clerk |  | `ADMINISTRATIVE` | **53** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **430** (Matches: *Constable, RPF Constable, WBSSC Clerk*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **395.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **382** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **278** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **238** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), WBSSC Clerk*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #70: Abrar ali dar
* **Match Quality:** **🟢 Strong Match** (Top Score: 113)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Jammu & Kashmir` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **373** | Rejected: **1256**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Constable | J&K Police | `POLICE_CAPF` | **113** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | JKSSB Graduate Level Examination | JKSSB | `POLICE_CAPF` | **105** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | Sub-Inspector | J&K Police | `POLICE_CAPF` | **105** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | Sub-Inspector (Home Dept Cadre) | JKSSB | `POLICE_CAPF` | **105** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | Forest Guard | JKSSB | `FOREST` | **85** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **72** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **72** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **72** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | Junior Stenographer | JKSSB | `SECRETARIAT` | **65** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | Inspector / Clerk | Urban Local Bodies | `MUNICIPAL` | **55** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **258.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **182** (Matches: *Constable, RPF Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **178.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **178.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **176** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates
* **For Constable** (J&K Police):
  * [Notifications](https://jkpolice.gov.in/#) (Last Date: TBD)
  * [Tender Notices](https://jkpolice.gov.in/Tender-Notices) (Last Date: TBD)
* **For Sub-Inspector** (J&K Police):
  * [Notifications](https://jkpolice.gov.in/#) (Last Date: TBD)
  * [Tender Notices](https://jkpolice.gov.in/Tender-Notices) (Last Date: TBD)


---


### Candidate #71: FAYZAN ZAHOOR
* **Match Quality:** **🟢 Strong Match** (Top Score: 136)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `District` | English: `Intermediate`
* **Preferences:** State: `Jammu & Kashmir` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **373** | Rejected: **1256**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Constable | J&K Police | `POLICE_CAPF` | **136** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | JKSSB Graduate Level Examination | JKSSB | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Sub-Inspector | J&K Police | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Sub-Inspector (Home Dept Cadre) | JKSSB | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **95** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | Forest Guard | JKSSB | `FOREST` | **85** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **82** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **82** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | Motor Vehicle Inspector | Transport Dept | `TRANSPORT` | **70** | trade strong match(+20), preference state govt(+18), domicile home(+18) |
| 10 | Junior Stenographer | JKSSB | `SECRETARIAT` | **65** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **252.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **224** (Matches: *Constable, RPF Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **172.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **172.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **168** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates
* **For Constable** (J&K Police):
  * [Notifications](https://jkpolice.gov.in/#) (Last Date: TBD)
  * [Tender Notices](https://jkpolice.gov.in/Tender-Notices) (Last Date: TBD)
* **For Sub-Inspector** (J&K Police):
  * [Notifications](https://jkpolice.gov.in/#) (Last Date: TBD)
  * [Tender Notices](https://jkpolice.gov.in/Tender-Notices) (Last Date: TBD)


---


### Candidate #72: Sandeep
* **Match Quality:** **🟢 Strong Match** (Top Score: 129)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **129** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **121** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **116** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **116** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **93** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **83** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **83** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | UPSSSC Group D (Peon/MTS) | UPSSSC | `GROUP_D` | **54** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **53** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **48** | priority track(+15), trade soft match(+10), qualification over(+8) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **447** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **391** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **391** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **351** (Matches: *UP Jail Warder, UPPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #73: Girwar singh
* **Match Quality:** **🟢 Strong Match** (Top Score: 146)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armored corps` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `C Certificate` | Sports: `National` | English: `Basic`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **380** | Rejected: **1249**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **146** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | RSMSSB Driver |  | `POLICE_CAPF` | **139** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | RSMSSB Stenographer |  | `POLICE_CAPF` | **138** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **131** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **108** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | Rajasthan Fireman |  | `FIRE` | **91** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **63** | trade strong match(+20), priority track(+15), sports quota(+10) |
| 10 | RPF Sub Inspector | RRB (Railway Recruitment Board) | `RAILWAYS` | **55** | trade strong match(+20), priority track(+15), sports quota(+10) |

#### Matched Preparation Materials (Top 5)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **537.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Stenographer, Rajasthan Fireman*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **501.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Stenographer, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **501.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Stenographer, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **501.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Stenographer, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **422** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Stenographer, Rajasthan Fireman*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #74: Gautam Thalore
* **Match Quality:** **🟢 Strong Match** (Top Score: 160)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured corps` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `National` | English: `Fluent`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **380** | Rejected: **1249**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB Driver |  | `POLICE_CAPF` | **160** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | RSMSSB LDC |  | `POLICE_CAPF` | **159** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | RSMSSB Stenographer |  | `POLICE_CAPF` | **159** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | RSMSSB Lab Assistant |  | `POLICE_CAPF` | **144** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **129** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **109** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **109** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | RPSC AEN |  | `ENGINEERING` | **102** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 9 | RPSC AAE |  | `ENGINEERING` | **102** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 10 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **94** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **608.5** (Matches: *RSMSSB Driver, RSMSSB LDC, RSMSSB Stenographer, RSMSSB Lab Assistant, RPSC AEN, RPSC AAE*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **580.5** (Matches: *RSMSSB Driver, RSMSSB LDC, RSMSSB Stenographer, RSMSSB Lab Assistant, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC AEN, RPSC AAE*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **580.5** (Matches: *RSMSSB Driver, RSMSSB LDC, RSMSSB Stenographer, RSMSSB Lab Assistant, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC AEN, RPSC AAE*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **580.5** (Matches: *RSMSSB Driver, RSMSSB LDC, RSMSSB Stenographer, RSMSSB Lab Assistant, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC AEN, RPSC AAE*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **492** (Matches: *RSMSSB Driver, RSMSSB LDC, RSMSSB Stenographer, RSMSSB Lab Assistant, RPSC AEN, RPSC AAE*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #75: Rudra Mondal
* **Match Quality:** **🟢 Strong Match** (Top Score: 116)
* **Military Profile:** Branch: `Indian Army` | Trade: `armoured corps` | Role: `general duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `District` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **98** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **98** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **76** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | RPF Sub Inspector | RRB (Railway Recruitment Board) | `RAILWAYS` | **68** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Patna Metro Recruitment | PMRC | `RAILWAYS` | **68** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **397.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #76: chandan kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 139)
* **Military Profile:** Branch: `Indian Army` | Trade: `armd` | Role: `gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Jharkhand` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **369** | Rejected: **1260**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | JSSC Excise Constable |  | `POLICE_CAPF` | **139** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | JSSC Assistant Jailor |  | `POLICE_CAPF` | **126** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **121** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **121** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **106** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **106** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | JSSC Stenographer |  | `SSC` | **83** | preference central govt(+20), domicile home(+18), priority track(+15) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **76** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **71** | preference central govt(+20), priority track(+15), trade soft match(+10) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **487.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), JSSC Stenographer, SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **431.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, SSC GD Constable (General Duty), SSC Constable (Tradesman), JSSC Stenographer, SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **431.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, SSC GD Constable (General Duty), SSC Constable (Tradesman), JSSC Stenographer, SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **415.5** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, JSSC Stenographer*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **402** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, Constable, RPF Constable, JSSC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #77: Chauhan govindji chandanji
* **Match Quality:** **🟡 Moderate Match** (Top Score: 81)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Gujarat` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **305** | Rejected: **1324**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **81** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 2 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 3 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 4 | Gujarat Group D / Peon | Gujarat Subordinate Service Selection Board | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 5 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **56** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 6 | SSC Stenographer Grade ‘C’ & ‘D’ | Staff Selection Commission | `SSC` | **53** | priority track(+15), qualification exact(+15), trade soft match(+10) |
| 7 | IBPS RRB Clerk | Institute of Banking Personnel Selection (IBPS) | `RAILWAYS` | **53** | trade strong match(+20), priority track(+15), qualification exact(+15) |
| 8 | Gujarat Gramin Bank Clerk (Office Assistant) | IBPS RRB | `BANKING` | **52** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 9 | GPSC Class 1 & 2 (State Service Exam) | Gujarat Public Service Commission | `CIVIL_SERVICES` | **49** | preference state govt(+18), domicile home(+18), full term(+5) |
| 10 | GPSC Deputy Collector |  | `CIVIL_SERVICES` | **49** | preference state govt(+18), domicile home(+18), full term(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **235** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Stenographer Grade ‘C’ & ‘D’, GPSC Deputy Collector*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **235** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Stenographer Grade ‘C’ & ‘D’, GPSC Deputy Collector*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **235** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Stenographer Grade ‘C’ & ‘D’, GPSC Deputy Collector*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **187** (Matches: *SSC Stenographer Grade ‘C’ & ‘D’, GPSC Deputy Collector*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **170** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Stenographer Grade ‘C’ & ‘D’, GPSC Deputy Collector*)


#### Active Vacancy Notifications & Exam Dates
* **For RPF Constable** (RRB (Railway Recruitment Board)):
  * [रेलवे भर्ती बोर्ड, चंडीगढ़Railway Recruitment Board, Chandigarh](https://www.rrbcdg.gov.in/index.php) (Last Date: TBD)
  * [Recruitment Notices](https://www.rrbcdg.gov.in/employment-notices.php) (Last Date: TBD)
* **For SSC GD Constable (General Duty)** (Staff Selection Commission):
  * [Important information for the candidates selected to the posts of Accountant in Indian Audit and Accounts Department (offices under Comptroller and Auditor General of India) through Combined Graduate Level Examination, 2025 (CGLE-2025)](https://ssc.gov.in/portal/records/attachment/q7dih97yi2jfor4swjm9p) (Last Date: TBD)
  * [Calling Options/Preferences by CBIC from selected candidates for the post of Tax Assistant for allocation of Zones/Formations - CGLE, 2025](https://ssc.gov.in/portal/records/attachment/6wc8jsbrhzjsy7826ybtx) (Last Date: TBD)
* **For SSC Constable (Tradesman)** (Staff Selection Commission):
  * [Important information for the candidates selected to the posts of Accountant in Indian Audit and Accounts Department (offices under Comptroller and Auditor General of India) through Combined Graduate Level Examination, 2025 (CGLE-2025)](https://ssc.gov.in/portal/records/attachment/q7dih97yi2jfor4swjm9p) (Last Date: TBD)
  * [Calling Options/Preferences by CBIC from selected candidates for the post of Tax Assistant for allocation of Zones/Formations - CGLE, 2025](https://ssc.gov.in/portal/records/attachment/6wc8jsbrhzjsy7826ybtx) (Last Date: TBD)


---


### Candidate #78: Yogender
* **Match Quality:** **🟢 Strong Match** (Top Score: 142)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Delhi` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **374** | Rejected: **1255**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Constable (Driver) | Delhi Police | `POLICE_CAPF` | **142** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Constable (Executive) | Delhi Police | `POLICE_CAPF` | **134** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Head Constable (Ministerial) | Delhi Police | `POLICE_CAPF` | **134** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Warder Recruitment | Delhi Prisons | `POLICE_CAPF` | **134** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Station Controller / Train Operator | DMRC | `RAILWAYS` | **94** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 9 | Fire Operator | Delhi Fire Service | `FIRE` | **92** | ex servicemen quota(+25), domicile home(+18), trade soft match(+10) |
| 10 | Customer Relations Assistant | DMRC | `RAILWAYS` | **86** | preference central govt(+20), trade strong match(+20), domicile home(+18) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **279.5** (Matches: *Constable (Driver), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **278** (Matches: *Constable (Driver), Constable (Executive), Head Constable (Ministerial), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **199.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **199.5** (Matches: *SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **198** (Matches: *Constable (Driver), Constable (Executive), Head Constable (Ministerial), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates
* **For Constable (Driver)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)
* **For Constable (Executive)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)
* **For Head Constable (Ministerial)** (Delhi Police):
  * [Pay Pending Notices](https://delhitrafficpolice.nic.in/notice/pay-notice/) (Last Date: TBD)
  * [Recruitment](https://delhipolice.gov.in/recruitments.aspx) (Last Date: TBD)


---


### Candidate #79: vinod yadav
* **Match Quality:** **🟢 Strong Match** (Top Score: 112)
* **Military Profile:** Branch: `Indian Army` | Trade: `armd` | Role: `gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **491** | Rejected: **1138**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | RSMSSB Driver |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | RSMSSB Lab Assistant |  | `POLICE_CAPF` | **104** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | RSMSSB Forest Guard |  | `POLICE_CAPF` | **104** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 5 | Rajasthan Fireman |  | `FIRE` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 6 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **75** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 10 | RPSC School Lecturer |  | `TEACHING` | **64** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **570.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Lab Assistant, RSMSSB Forest Guard, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC School Lecturer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **570.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Lab Assistant, RSMSSB Forest Guard, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC School Lecturer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **570.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Lab Assistant, RSMSSB Forest Guard, Rajasthan Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC School Lecturer*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **542.5** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Lab Assistant, RSMSSB Forest Guard, Rajasthan Fireman, RPSC School Lecturer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **512** (Matches: *RSMSSB LDC, RSMSSB Driver, RSMSSB Lab Assistant, RSMSSB Forest Guard, Rajasthan Fireman, RPSC School Lecturer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #80: Akash yadav
* **Match Quality:** **🟢 Strong Match** (Top Score: 114)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **114** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 9 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 10 | BPCL Recruitment | Bharat Petroleum Corporation Limited (BPCL) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **442.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **386.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **386.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **344** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **342.5** (Matches: *UP Jail Warder, UPPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #81: Raushan Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 112)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **363** | Rejected: **1266**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **104** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | BSSC Clerk/LDC |  | `ADMINISTRATIVE` | **64** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 9 | BSSC Group D (Peon/Sweeper) | Bihar Staff Selection Commission | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 10 | Bihar Pharmacist/Lab Technician |  | `ENGINEERING` | **54** | domicile home(+18), priority track(+15), math(+8) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **490.5** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Clerk/LDC, BSSC Group D (Peon/Sweeper), Bihar Pharmacist/Lab Technician*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **434.5** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Clerk/LDC, BSSC Group D (Peon/Sweeper), Bihar Pharmacist/Lab Technician*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **434.5** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Clerk/LDC, BSSC Group D (Peon/Sweeper), Bihar Pharmacist/Lab Technician*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **386** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Clerk/LDC, BSSC Group D (Peon/Sweeper), Bihar Pharmacist/Lab Technician*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **384** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, RPF Constable, BSSC Clerk/LDC, Bihar Pharmacist/Lab Technician*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #82: Abhishek Chaudhary
* **Match Quality:** **🟢 Strong Match** (Top Score: 114)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `C Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **114** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 2 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 3 | Constable | Bihar Police | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 4 | Constable | West Bengal Police | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 9 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 10 | BPCL Recruitment | Bharat Petroleum Corporation Limited (BPCL) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **416.5** (Matches: *UP Jail Warder, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **366** (Matches: *UP Jail Warder, Constable, RPF Constable*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **354** (Matches: *UP Jail Warder, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **312** (Matches: *UP Jail Warder, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **296.5** (Matches: *UP Jail Warder, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #83: Ankit kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 132)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured corps` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **363** | Rejected: **1266**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **132** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | Bihar Pharmacist/Lab Technician |  | `ENGINEERING` | **64** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 9 | BSSC Stenographer |  | `SSC` | **63** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 10 | BSSC Group D (Peon/Sweeper) | Bihar Staff Selection Commission | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503.5** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), Bihar Pharmacist/Lab Technician, BSSC Stenographer, BSSC Group D (Peon/Sweeper)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **447.5** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), Bihar Pharmacist/Lab Technician, BSSC Stenographer, BSSC Group D (Peon/Sweeper)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **447.5** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), Bihar Pharmacist/Lab Technician, BSSC Stenographer, BSSC Group D (Peon/Sweeper)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **415.5** (Matches: *Bihar Jail Warder, BPSC DSP, Bihar Pharmacist/Lab Technician, BSSC Stenographer*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **394** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, RPF Constable, Bihar Pharmacist/Lab Technician, BSSC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #84: Baljeet singh
* **Match Quality:** **🟢 Strong Match** (Top Score: 109)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **109** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **101** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **91** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **91** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **68** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **68** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **68** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | UP Gramin Bank Clerk (Office Assistant) | IBPS RRB | `BANKING` | **63** | domicile home(+18), priority track(+15), qualification exact(+15) |
| 9 | UPSSSC Group C (Clerk/Steno) |  | `ADMINISTRATIVE` | **61** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | UPSSSC Group D (Peon/MTS) | UPSSSC | `GROUP_D` | **54** | preference state govt(+18), domicile home(+18), qualification over(+8) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **462.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **406.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **406.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPSSSC Group C (Clerk/Steno)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **364** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable, UPSSSC Group C (Clerk/Steno)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **362.5** (Matches: *UP Jail Warder, UPPSC DSP, UPSSSC Group C (Clerk/Steno)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #85: Rahul
* **Match Quality:** **🟡 Moderate Match** (Top Score: 94)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Haryana` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **363** | Rejected: **1266**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **94** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **71** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | Haryana CET Group D |  | `ADMINISTRATIVE` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Haryana Group D / Peon | Haryana Staff Selection Commission | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 10 | Haryana Civil Services (HCS) | Haryana Public Service Commission | `CIVIL_SERVICES` | **49** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **426.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), Haryana CET Group D, Haryana Group D / Peon*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **422** (Matches: *Constable, RPF Constable, Haryana CET Group D*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **418** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), Haryana CET Group D, Haryana Group D / Peon*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **322** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), Haryana CET Group D, Haryana Group D / Peon*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **274** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), Haryana CET Group D, Haryana Group D / Peon*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #86: Lakshman kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 114)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Jharkhand` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **369** | Rejected: **1260**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | JSSC Excise Constable |  | `POLICE_CAPF` | **114** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 2 | JSSC Assistant Jailor |  | `POLICE_CAPF` | **106** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **91** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **91** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | JSSC Stenographer |  | `SSC` | **73** | preference central govt(+20), domicile home(+18), priority track(+15) |
| 9 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 10 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **483** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), JSSC Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **427** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, SSC GD Constable (General Duty), SSC Constable (Tradesman), JSSC Stenographer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **427** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, SSC GD Constable (General Duty), SSC Constable (Tradesman), JSSC Stenographer*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **407** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, JSSC Stenographer*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **374** (Matches: *JSSC Excise Constable, JSSC Assistant Jailor, Constable, RPF Constable, JSSC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #87: Prabhakar kuiry
* **Match Quality:** **🟢 Strong Match** (Top Score: 119)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **119** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Constable | Bihar Police | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | West Bengal Police | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Odisha GDS (Gramin Dak Sevak) | Odisha Postal Circle | `POSTAL` | **81** | ex servicemen quota(+25), preference central govt(+20), qualification exact(+15) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **74** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | RPF Sub Inspector | RRB (Railway Recruitment Board) | `RAILWAYS` | **66** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **416.5** (Matches: *RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **394** (Matches: *RSMSSB LDC, Constable, RPF Constable*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **346** (Matches: *RSMSSB LDC, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **296.5** (Matches: *RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **296.5** (Matches: *RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #88: Rahul sahu
* **Match Quality:** **🟢 Strong Match** (Top Score: 124)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **365** | Rejected: **1264**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MPPSC DSP |  | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | Bihar Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | West Bengal Police | `POLICE_CAPF` | **114** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **91** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | MP Vyapam Forest Guard |  | `FOREST` | **84** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 7 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **81** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | MP Vyapam Group 5 (Peon/MTS) | MPESB (MP Vyapam) | `GROUP_D` | **57** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 10 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **56** | trade strong match(+20), priority track(+15), qualification over(+8) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **445.5** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **444** (Matches: *MPPSC DSP, Constable, RPF Constable, MP Vyapam Forest Guard*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **388** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **330** (Matches: *MPPSC DSP, Constable, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **325.5** (Matches: *MPPSC DSP, MP Vyapam Forest Guard, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #89: Ghanshyam Lodhi
* **Match Quality:** **🟢 Strong Match** (Top Score: 134)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **134** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **126** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **76** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 10 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **69** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **442.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **386.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **386.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **350.5** (Matches: *UP Jail Warder, UPPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #90: Sukracharya Satpati
* **Match Quality:** **🟢 Strong Match** (Top Score: 107)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **107** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **107** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **107** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **107** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **86** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **76** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **76** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | WBSSC Group D (Peon/MTS) | WBSSC | `GROUP_D` | **52** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **51** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | WBCS (West Bengal Civil Service) | WBPSC | `CIVIL_SERVICES` | **44** | preference state govt(+18), domicile home(+18), full term(+5) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #91: Ummed kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 127)
* **Military Profile:** Branch: `Indian Army` | Trade: `No` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **380** | Rejected: **1249**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB LDC |  | `POLICE_CAPF` | **127** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 2 | RSMSSB Stenographer |  | `POLICE_CAPF` | **127** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 3 | RSMSSB Driver |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 4 | RSMSSB Lab Assistant |  | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), domicile home(+18) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **97** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **97** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **97** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Rajasthan Marudhara Gramin Bank Clerk |  | `BANKING` | **78** | domicile home(+18), preference banking psu(+16), priority track(+15) |
| 9 | Rajasthan High Court Stenographer |  | `JUDICIARY` | **77** | preference central govt(+20), domicile home(+18), qualification exact(+15) |
| 10 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **75** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **630.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **586.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **586.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **586.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, SSC GD Constable (General Duty), SSC Constable (Tradesman), Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)
* **[SSC REASONING GUIDE BOOK]** (Subject: `REASONING` | Category: `Guide`) — Relevance Score: **525.5** (Matches: *RSMSSB LDC, RSMSSB Stenographer, RSMSSB Driver, RSMSSB Lab Assistant, Rajasthan Marudhara Gramin Bank Clerk, Rajasthan High Court Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #92: MOHIT KUMAR
* **Match Quality:** **🟢 Strong Match** (Top Score: 128)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **473** | Rejected: **1156**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | UP Police SI | UPPRPB | `POLICE_CAPF` | **117** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **117** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | UPPSC AE (Assistant Engineer) |  | `ENGINEERING` | **77** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 9 | UPSSSC Junior Engineer |  | `ENGINEERING` | **77** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 10 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **76** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **443** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **435** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **435** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **395** (Matches: *UP Jail Warder, UPPSC DSP, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **342** (Matches: *UP Jail Warder, UPPSC DSP, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #93: Surja ghosh
* **Match Quality:** **🟡 Moderate Match** (Top Score: 93)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **356** | Rejected: **1273**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **93** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **93** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **93** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **93** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **88** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **66** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 9 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **66** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 10 | BPCL Recruitment | Bharat Petroleum Corporation Limited (BPCL) | `PSU` | **66** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **392** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **388.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **380** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **284** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **236** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #94: Ravi Kumar Rathour
* **Match Quality:** **🟢 Strong Match** (Top Score: 160)
* **Military Profile:** Branch: `Indian Army` | Trade: `EME` | Role: `Auto tech A veh Technician` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `District` | English: `Intermediate`
* **Preferences:** State: `Madhya Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | MP Police Constable | MP Police | `POLICE_CAPF` | **160** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 2 | MP Police Head Constable |  | `POLICE_CAPF` | **160** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 3 | MP Police SI |  | `POLICE_CAPF` | **160** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 4 | Delhi Police Driver | Staff Selection Commission (ssc) | `POLICE_CAPF` | **150** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 5 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **128** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | MPPSC Assistant Engineer |  | `ENGINEERING` | **127** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 7 | SSC CPO | Staff Selection Commission | `SSC` | **120** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **120** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **120** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **118** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **513.5** (Matches: *MP Police Head Constable, MP Police SI, Delhi Police Driver, SSC Constable (Driver) in Delhi Police, MPPSC Assistant Engineer, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **497.5** (Matches: *MP Police Head Constable, MP Police SI, Delhi Police Driver, SSC Constable (Driver) in Delhi Police, MPPSC Assistant Engineer, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **465.5** (Matches: *MP Police Head Constable, MP Police SI, Delhi Police Driver, SSC Constable (Driver) in Delhi Police, MPPSC Assistant Engineer, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **377.5** (Matches: *MP Police Head Constable, MP Police SI, MPPSC Assistant Engineer*)
* **[SSC CPO]** (Subject: `General` | Category: `Intro`) — Relevance Score: **364** (Matches: *MP Police Head Constable, MP Police SI, Delhi Police Driver, SSC Constable (Driver) in Delhi Police, MPPSC Assistant Engineer, SSC CPO, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #95: Damor Hardikkumar Amraji
* **Match Quality:** **🟢 Strong Match** (Top Score: 127)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `A Certificate` | Sports: `District` | English: `Basic`
* **Preferences:** State: `Gujarat` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **367** | Rejected: **1262**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | GPSC DSP |  | `POLICE_CAPF` | **127** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | GSSSB Revenue Talati |  | `POLICE_CAPF` | **127** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | GSSSB Municipal Engineer |  | `POLICE_CAPF` | **127** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | GSSSB Fireman |  | `POLICE_CAPF` | **127** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **103** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **103** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **68** | preference central govt(+20), priority track(+15), trade soft match(+10) |
| 9 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **67** | preference central govt(+20), preference banking psu(+16), priority track(+15) |
| 10 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **67** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **559** (Matches: *GPSC DSP, GSSSB Revenue Talati, GSSSB Municipal Engineer, GSSSB Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **559** (Matches: *GPSC DSP, GSSSB Revenue Talati, GSSSB Municipal Engineer, GSSSB Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **559** (Matches: *GPSC DSP, GSSSB Revenue Talati, GSSSB Municipal Engineer, GSSSB Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503** (Matches: *GPSC DSP, GSSSB Revenue Talati, GSSSB Municipal Engineer, GSSSB Fireman*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **444** (Matches: *GPSC DSP, GSSSB Revenue Talati, GSSSB Municipal Engineer, GSSSB Fireman, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #96: Arindrom borah
* **Match Quality:** **🟢 Strong Match** (Top Score: 128)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Assam` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **365** | Rejected: **1264**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Assam Jail Warder |  | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | APSC DSP |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | ABUB (Armed Branch UB) |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **110** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | DME Technician/Assistant |  | `ENGINEERING` | **80** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 7 | Assam Lab Technician/Pharmacist |  | `ENGINEERING` | **80** | trade strong match(+20), domicile home(+18), priority track(+15) |
| 8 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 9 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 10 | Deputy Project Director (Agriculture) |  | `AGRICULTURE` | **63** | preference state govt(+18), domicile home(+18), math(+8) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), DME Technician/Assistant, Assam Lab Technician/Pharmacist, SSC GD Constable (General Duty), SSC Constable (Tradesman), Deputy Project Director (Agriculture)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), DME Technician/Assistant, Assam Lab Technician/Pharmacist, SSC GD Constable (General Duty), SSC Constable (Tradesman), Deputy Project Director (Agriculture)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **527.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), DME Technician/Assistant, Assam Lab Technician/Pharmacist, SSC GD Constable (General Duty), SSC Constable (Tradesman), Deputy Project Director (Agriculture)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **507.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), DME Technician/Assistant, Assam Lab Technician/Pharmacist, Deputy Project Director (Agriculture)*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **472** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), DME Technician/Assistant, Assam Lab Technician/Pharmacist, Deputy Project Director (Agriculture)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #97: Gaurav singh
* **Match Quality:** **🟢 Strong Match** (Top Score: 131)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **131** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **123** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **118** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **118** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **113** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **103** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **103** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **73** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **68** | preference central govt(+20), priority track(+15), trade soft match(+10) |
| 10 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **66** | preference central govt(+20), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **401.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **401.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **357.5** (Matches: *UP Jail Warder, UPPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #98: Nazim
* **Match Quality:** **🟢 Strong Match** (Top Score: 130)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armoured` | Role: `Trademan` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **358** | Rejected: **1271**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **85** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |
| 9 | BHEL Recruitment | Bharat Heavy Electricals Limited (BHEL) | `PSU` | **85** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |
| 10 | BPCL Recruitment | Bharat Petroleum Corporation Limited (BPCL) | `PSU` | **85** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **433.5** (Matches: *UP Jail Warder, UPPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **377.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **377.5** (Matches: *UP Jail Warder, UPPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *UP Jail Warder, UPPSC DSP, Constable, RPF Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **341.5** (Matches: *UP Jail Warder, UPPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #99: Vikash
* **Match Quality:** **🟢 Strong Match** (Top Score: 140)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Rajasthan` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **380** | Rejected: **1249**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | RSMSSB JE |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 2 | RSMSSB Driver |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 3 | RSMSSB LDC |  | `POLICE_CAPF` | **139** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 4 | RSMSSB Junior Accountant |  | `POLICE_CAPF` | **132** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **101** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | RPSC AEN |  | `ENGINEERING` | **94** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 9 | RPSC AAE |  | `ENGINEERING` | **94** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 10 | ONGC Recruitment | Oil and Natural Gas Corporation (ONGC) | `PSU` | **89** | preference central govt(+20), trade strong match(+20), preference banking psu(+16) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **577.5** (Matches: *RSMSSB JE, RSMSSB Driver, RSMSSB LDC, RSMSSB Junior Accountant, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC AEN, RPSC AAE*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **577.5** (Matches: *RSMSSB JE, RSMSSB Driver, RSMSSB LDC, RSMSSB Junior Accountant, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC AEN, RPSC AAE*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **577.5** (Matches: *RSMSSB JE, RSMSSB Driver, RSMSSB LDC, RSMSSB Junior Accountant, SSC GD Constable (General Duty), SSC Constable (Tradesman), RPSC AEN, RPSC AAE*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **541.5** (Matches: *RSMSSB JE, RSMSSB Driver, RSMSSB LDC, RSMSSB Junior Accountant, RPSC AEN, RPSC AAE*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **492** (Matches: *RSMSSB JE, RSMSSB Driver, RSMSSB LDC, RSMSSB Junior Accountant, RPSC AEN, RPSC AAE*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #100: Pragalathan S
* **Match Quality:** **🟢 Strong Match** (Top Score: 101)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `Gd` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Tamil Nadu` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **476** | Rejected: **1153**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | TNPSC DSP |  | `POLICE_CAPF` | **101** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | TNUSRB Police Constable | Tamil Nadu Uniformed Services | `POLICE_CAPF` | **98** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | TNUSRB Police Sub-Inspector | TNUSRB | `POLICE_CAPF` | **98** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **91** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **72** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **68** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **68** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **68** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **57** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **57** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **317** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **301** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **301** (Matches: *TNPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **253** (Matches: *TNPSC DSP*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **202** (Matches: *TNPSC DSP*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #101: SHASHIKUMAR PUJAR
* **Match Quality:** **🟢 Strong Match** (Top Score: 159)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `None` | English: `Intermediate`
* **Preferences:** State: `Karnataka` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **475** | Rejected: **1154**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Karnataka Police Constable | Karnataka State Police | `POLICE_CAPF` | **159** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Karnataka Police SI |  | `POLICE_CAPF` | **159** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **144** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **144** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **123** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **113** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **113** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **110** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **110** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | KFD Forest Guard/Range Officer | Karnataka Forest Department | `FOREST` | **101** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **371** (Matches: *Karnataka Police SI, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **315** (Matches: *Karnataka Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **315** (Matches: *Karnataka Police SI, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **286** (Matches: *Karnataka Police SI, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **272** (Matches: *Karnataka Police SI, Constable, RPF Constable*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #102: Janak ch nath
* **Match Quality:** **🟢 Strong Match** (Top Score: 128)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Assam` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **365** | Rejected: **1264**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Assam Jail Warder |  | `POLICE_CAPF` | **128** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | APSC DSP |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | ABUB (Armed Branch UB) |  | `POLICE_CAPF` | **120** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **110** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | ADRE Grade IV (Peon/MTS) |  | `ADMINISTRATIVE` | **55** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **54** | trade strong match(+20), priority track(+15), qualification over(+8) |
| 10 | Gauhati HC Stenographer |  | `SECRETARIAT` | **54** | preference state govt(+18), domicile home(+18), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **503.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **475.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **412** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #103: Yogendra Awasthi
* **Match Quality:** **🟢 Strong Match** (Top Score: 142)
* **Military Profile:** Branch: `Indian Army` | Trade: `EME` | Role: `Auto tech A veh` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Police SI | UPPRPB | `POLICE_CAPF` | **142** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 2 | UP Police Constable | UPPRPB | `POLICE_CAPF` | **142** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 3 | UP Police SI |  | `POLICE_CAPF` | **142** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 4 | GSSSB Additional Assistant Engineer |  | `POLICE_CAPF` | **140** | ex servicemen quota(+25), preference central govt(+20), preference state govt(+18) |
| 5 | UPPSC AE (Assistant Engineer) |  | `ENGINEERING` | **120** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 6 | UPSSSC Junior Engineer |  | `ENGINEERING` | **120** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 7 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **113** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **108** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **105** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **455.5** (Matches: *UP Police SI, GSSSB Additional Assistant Engineer, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **439.5** (Matches: *UP Police SI, GSSSB Additional Assistant Engineer, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **423.5** (Matches: *UP Police SI, GSSSB Additional Assistant Engineer, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **395.5** (Matches: *UP Police SI, GSSSB Additional Assistant Engineer, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **362** (Matches: *UP Police SI, GSSSB Additional Assistant Engineer, UPPSC AE (Assistant Engineer), UPSSSC Junior Engineer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #104: Rajesh Ghosh
* **Match Quality:** **🟢 Strong Match** (Top Score: 117)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **466** | Rejected: **1163**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | WBPSC WBSI (West Bengal Police SI) |  | `POLICE_CAPF` | **117** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | WB Police Constable | WBPRB | `POLICE_CAPF` | **117** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | WB Police Sub-Inspector |  | `POLICE_CAPF` | **117** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **110** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **89** | ex servicemen quota(+25), trade strong match(+20), priority track(+15) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **79** | ex servicemen quota(+25), priority track(+15), trade soft match(+10) |
| 8 | Credit Officer (PGDBF) | Central Bank of India | `BANKING` | **71** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **68** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **68** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |

#### Matched Preparation Materials (Top 5)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **406** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **390** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **390** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman), SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **342** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **282** (Matches: *WBPSC WBSI (West Bengal Police SI), WB Police Sub-Inspector*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #105: Vishal Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 130)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **363** | Rejected: **1266**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **130** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **122** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **112** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **109** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **99** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | BSSC Stenographer |  | `SSC` | **81** | preference central govt(+20), domicile home(+18), priority track(+15) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **74** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | RPF Sub Inspector | RRB (Railway Recruitment Board) | `RAILWAYS` | **66** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **483** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **427** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Stenographer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **427** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Stenographer*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **415** (Matches: *Bihar Jail Warder, BPSC DSP, BSSC Stenographer*)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **402** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, RPF Constable, BSSC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #106: Ajay Kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 167)
* **Military Profile:** Branch: `Indian Army` | Trade: `EME` | Role: `Tech GCE` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Punjab` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | PSSSB Clerk (LDC/UDC) | Punjab Subordinate Services | `POLICE_CAPF` | **167** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | PSSSB Group D (Peon/MTS) |  | `POLICE_CAPF` | **160** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | PSSSB Patwari/Canal Patwari |  | `POLICE_CAPF` | **152** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | PSSSB Excise Inspector |  | `POLICE_CAPF` | **152** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **113** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **103** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **103** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | JE / Clerk / Admin Staff | Chandigarh Housing Board | `ENGINEERING` | **99** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | Clerk / JE / Technical Staff Recruitment | LAHDC Leh | `ENGINEERING` | **99** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Clerk / JE / Technical Staff Recruitment | LAHDC Kargil | `ENGINEERING` | **99** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **427.5** (Matches: *PSSSB Group D (Peon/MTS), PSSSB Patwari/Canal Patwari, PSSSB Excise Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **427.5** (Matches: *PSSSB Group D (Peon/MTS), PSSSB Patwari/Canal Patwari, PSSSB Excise Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **427.5** (Matches: *PSSSB Group D (Peon/MTS), PSSSB Patwari/Canal Patwari, PSSSB Excise Inspector, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **391.5** (Matches: *PSSSB Group D (Peon/MTS), PSSSB Patwari/Canal Patwari, PSSSB Excise Inspector*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **342** (Matches: *PSSSB Group D (Peon/MTS), PSSSB Patwari/Canal Patwari, PSSSB Excise Inspector*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #107: Chhatis kumar
* **Match Quality:** **🟢 Strong Match** (Top Score: 165)
* **Military Profile:** Branch: `Indian Army` | Trade: `EME` | Role: `Artzan Metal` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Private Sector(Logistics, Security, Management, etc)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Police Constable | Bihar Police Sub-ordinate Services Commission | `POLICE_CAPF` | **165** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Bihar Police SI |  | `POLICE_CAPF` | **165** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Bihar Police Home Guard |  | `POLICE_CAPF` | **165** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | GSSSB Additional Assistant Engineer |  | `POLICE_CAPF` | **163** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | BPSC Assistant Engineer |  | `ENGINEERING` | **123** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 6 | BPSC Junior Engineer | Bihar Engineering Service | `ENGINEERING` | **123** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 7 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **116** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **111** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 9 | SSC CPO | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 10 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **108** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **495.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, GSSSB Additional Assistant Engineer, BPSC Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **479.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, GSSSB Additional Assistant Engineer, BPSC Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **463.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, GSSSB Additional Assistant Engineer, BPSC Assistant Engineer, SSC Constable (Driver) in Delhi Police, SSC CPO, SSC Delhi Police Constable*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **435.5** (Matches: *Bihar Police SI, Bihar Police Home Guard, GSSSB Additional Assistant Engineer, BPSC Assistant Engineer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **402** (Matches: *Bihar Police SI, Bihar Police Home Guard, GSSSB Additional Assistant Engineer, BPSC Assistant Engineer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #108: MANISH KUMAR SAHNI
* **Match Quality:** **🟢 Strong Match** (Top Score: 142)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General Duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 10` | NCC: `None` | Sports: `District` | English: `Basic`
* **Preferences:** State: `Bihar` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **349** | Rejected: **1280**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Bihar Jail Warder |  | `POLICE_CAPF` | **142** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 2 | BPSC DSP |  | `POLICE_CAPF` | **127** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 3 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 4 | Constable | Bihar Police | `POLICE_CAPF` | **124** | ex servicemen quota(+25), trade strong match(+20), preference state govt(+18) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **88** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **81** | ex servicemen quota(+25), priority track(+15), qualification exact(+15) |
| 8 | BSSC Group D (Peon/Sweeper) | Bihar Staff Selection Commission | `GROUP_D` | **64** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 9 | SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN) | Staff Selection Commission | `SSC` | **53** | priority track(+15), qualification exact(+15), trade soft match(+10) |
| 10 | BPSC Combined Competitive Examination (CCE) | Bihar Public Service Commission | `CIVIL_SERVICES` | **49** | preference state govt(+18), domicile home(+18), character general(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **469.5** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Group D (Peon/Sweeper), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **413.5** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Group D (Peon/Sweeper), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **413.5** (Matches: *Bihar Jail Warder, BPSC DSP, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Group D (Peon/Sweeper), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **358** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Group D (Peon/Sweeper), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **352** (Matches: *Bihar Jail Warder, BPSC DSP, Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman), BSSC Group D (Peon/Sweeper), SSC MTS (Multi-Tasking Staff) & Havaldar (CBIC & CBN)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #109: Maheshwar kakoti
* **Match Quality:** **🟢 Strong Match** (Top Score: 108)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Assam` | Relocate: `Home State` | Preferences: *State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **365** | Rejected: **1264**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | Assam Jail Warder |  | `POLICE_CAPF` | **108** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 2 | APSC DSP |  | `POLICE_CAPF` | **100** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 3 | ABUB (Armed Branch UB) |  | `POLICE_CAPF` | **100** | ex servicemen quota(+25), preference state govt(+18), domicile home(+18) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **90** | ex servicemen quota(+25), preference state govt(+18), priority track(+15) |
| 5 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **69** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 6 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **69** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 7 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **69** | ex servicemen quota(+25), priority track(+15), physical fit(+10) |
| 8 | ADRE Grade IV (Peon/MTS) |  | `ADMINISTRATIVE` | **55** | preference state govt(+18), domicile home(+18), qualification over(+8) |
| 9 | Gauhati HC Stenographer |  | `SECRETARIAT` | **54** | preference state govt(+18), domicile home(+18), qualification exact(+15) |
| 10 | APSC Combined Competitive Examination (CCE) | Assam Public Service Commission | `CIVIL_SERVICES` | **47** | preference state govt(+18), domicile home(+18), full term(+5) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **516.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **516.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **516.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), SSC GD Constable (General Duty), SSC Constable (Tradesman), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **488.5** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **422** (Matches: *Assam Jail Warder, APSC DSP, ABUB (Armed Branch UB), ADRE Grade IV (Peon/MTS), Gauhati HC Stenographer*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #110: Bhusare shailesh popat
* **Match Quality:** **🟢 Strong Match** (Top Score: 147)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd gunner/operater` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `B Certificate` | Sports: `None` | English: `Fluent`
* **Preferences:** State: `Maharashtra` | Relocate: `Home State` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Entrepreneurship (using Sewa Nidhi)*
* **Exams Statistics:** Eligible: **362** | Rejected: **1267**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **147** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Constable | Bihar Police | `POLICE_CAPF` | **147** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Constable | West Bengal Police | `POLICE_CAPF` | **147** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable | Assam Police | `POLICE_CAPF` | **147** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **124** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **114** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **114** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | MPSC Clerk/Typist | Maharashtra Subordinate Services | `ADMINISTRATIVE` | **100** | preference central govt(+20), preference state govt(+18), domicile home(+18) |
| 9 | IBPS RRB Clerk | Institute of Banking Personnel Selection (IBPS) | `RAILWAYS` | **99** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Maharashtra Gramin Bank Clerk (Office Assistant) | IBPS RRB | `BANKING` | **98** | domicile home(+18), preference banking psu(+16), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[RRB RPF CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **420** (Matches: *Constable, RPF Constable*)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **385.5** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **372** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GD]** (Subject: `General` | Category: `Intro`) — Relevance Score: **268** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **228** (Matches: *Constable, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #111: Krishnanand
* **Match Quality:** **🟢 Strong Match** (Top Score: 126)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `GD` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Uttar Pradesh` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.)*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | UP Jail Warder |  | `POLICE_CAPF` | **126** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | UPPSC DSP |  | `POLICE_CAPF` | **118** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | RSMSSB LDC |  | `POLICE_CAPF` | **115** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | SSB Constable | Sashastra Seema Bal | `POLICE_CAPF` | **108** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **107** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **97** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **97** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | Odisha GDS (Gramin Dak Sevak) | Odisha Postal Circle | `POSTAL` | **79** | ex servicemen quota(+25), preference central govt(+20), qualification exact(+15) |
| 9 | Railways Group D | RRB (Railway Recruitment Board) | `RAILWAYS` | **72** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | RPF Sub Inspector | RRB (Railway Recruitment Board) | `RAILWAYS` | **64** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **466.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **466.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **466.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **430.5** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC*)
* **[RRB GEN STUDIES COMPLETE BOOK]** (Subject: `GENERAL KNOWLEDGE` | Category: `Guide`) — Relevance Score: **372** (Matches: *UP Jail Warder, UPPSC DSP, RSMSSB LDC*)


#### Active Vacancy Notifications & Exam Dates



---


### Candidate #112: AMIT KUMAR
* **Match Quality:** **🟢 Strong Match** (Top Score: 162)
* **Military Profile:** Branch: `Indian Army` | Trade: `Armd` | Role: `General duty` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Graduate` | NCC: `C Certificate` | Sports: `None` | English: `Basic`
* **Preferences:** State: `Haryana` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.)*
* **Exams Statistics:** Eligible: **1629** | Rejected: **0**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | HPSC Deputy Superintendent of Police (DSP) |  | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | Haryana Police Constable | Haryana Police | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | Haryana Police Sub Inspector |  | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Haryana Police Commando |  | `POLICE_CAPF` | **162** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | SSC Constable (Driver) in Delhi Police | Staff Selection Commission | `SSC` | **121** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 6 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **116** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 7 | SSC Delhi Police Constable | Staff Selection Commission | `SSC` | **113** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | SSC Delhi Police MTS / Head Constable / Ministerial Exams | Staff Selection Commission | `SSC` | **113** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 9 | HPSC Assistant Engineer |  | `ENGINEERING` | **112** | preference central govt(+20), trade strong match(+20), domicile home(+18) |
| 10 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **106** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **540** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, HPSC Assistant Engineer, SSC GD Constable (General Duty)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **492** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, HPSC Assistant Engineer, SSC GD Constable (General Duty)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **492** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, HPSC Assistant Engineer, SSC GD Constable (General Duty)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **436** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, HPSC Assistant Engineer*)
* **[SSC DELHI POLICE CONSTABLE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **382** (Matches: *HPSC Deputy Superintendent of Police (DSP), Haryana Police Sub Inspector, Haryana Police Commando, SSC Constable (Driver) in Delhi Police, SSC Delhi Police Constable, SSC Delhi Police MTS / Head Constable / Ministerial Exams, HPSC Assistant Engineer, SSC GD Constable (General Duty)*)


#### Active Vacancy Notifications & Exam Dates
* **For Haryana Police Constable** (Haryana Police):
  * [List of Authorized/Unauthorized/ Recruiting aqents for sending people
                                            in abroad for the State of Haryana.](https://haryanapolice.gov.in/#) (Last Date: TBD)


---


### Candidate #113: Biswajit Maity
* **Match Quality:** **🟢 Strong Match** (Top Score: 135)
* **Military Profile:** Branch: `Indian Army` | Trade: `EME` | Role: `AMW (artisan matel work) welder` | Medical: `SHAPE-1`
* **Academic Profile:** Qualification: `Class 12` | NCC: `None` | Sports: `None` | English: `Basic`
* **Preferences:** State: `West Bengal` | Relocate: `Anywhere in India` | Preferences: *Central (CAPF, CDS, SSC, Railways, PSU, Banking, etc.), State (Police, Forest, Transport, revenue, Secretariate, etc.), Delhi police*
* **Exams Statistics:** Eligible: **1135** | Rejected: **494**

#### Top 10 Recommended Exams
| Rank | Exam Name | Conducting Body | Career Track | Score | Main Scoring Drivers |
|------|-----------|-----------------|--------------|-------|----------------------|
| 1 | APSSB Driver |  | `POLICE_CAPF` | **135** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 2 | RSMSSB JE |  | `POLICE_CAPF` | **135** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 3 | RSMSSB Driver |  | `POLICE_CAPF` | **135** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 4 | Constable (Driver) | Delhi Police | `POLICE_CAPF` | **135** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 5 | RPF Constable | RRB (Railway Recruitment Board) | `RAILWAYS` | **106** | ex servicemen quota(+25), preference central govt(+20), trade strong match(+20) |
| 6 | SSC GD Constable (General Duty) | Staff Selection Commission | `SSC` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 7 | SSC Constable (Tradesman) | Staff Selection Commission | `SSC` | **96** | ex servicemen quota(+25), preference central govt(+20), priority track(+15) |
| 8 | JE / Clerk / Admin Staff | Chandigarh Housing Board | `ENGINEERING` | **86** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 9 | Clerk / JE / Technical Staff Recruitment | LAHDC Leh | `ENGINEERING` | **86** | preference central govt(+20), trade strong match(+20), priority track(+15) |
| 10 | Clerk / JE / Technical Staff Recruitment | LAHDC Kargil | `ENGINEERING` | **86** | preference central govt(+20), trade strong match(+20), priority track(+15) |

#### Matched Preparation Materials (Top 5)
* **[Delhi_Police_Driver_Traffic_Rules]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **513.5** (Matches: *APSSB Driver, RSMSSB JE, RSMSSB Driver, Constable (Driver), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[ITI_Technical_Trade_Literacy_GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *APSSB Driver, RSMSSB JE, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[Computer Science guide Book]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **457.5** (Matches: *APSSB Driver, RSMSSB JE, RSMSSB Driver, SSC GD Constable (General Duty), SSC Constable (Tradesman)*)
* **[SSC GS & GK GUIDE BOOK]** (Subject: `GK` | Category: `Guide`) — Relevance Score: **421.5** (Matches: *APSSB Driver, RSMSSB JE, RSMSSB Driver*)
* **[SSC DELHI POLICE CONSTABL_DRIVER_MALE]** (Subject: `General` | Category: `Intro`) — Relevance Score: **404** (Matches: *APSSB Driver, RSMSSB JE, RSMSSB Driver, Constable (Driver), SSC GD Constable (General Duty), SSC Constable (Tradesman)*)


#### Active Vacancy Notifications & Exam Dates



---


## Section 6: Identified Issues & Weight Tuning Recommendations

This stress test confirmed several critical algorithm biases and database quality gaps that must be addressed to maximize profiling efficacy:

### 1. POLICE_CAPF Bias Confirmed
* **POLICE_CAPF as #1 Recommendation:** **96.5%** of all candidates.
* **POLICE_CAPF in Top-3 Recommendations:** **97.3%** of all candidates.
* **Root Cause:** Uniformed police/CAPF exams stack several high-scoring bonuses:
  * Ex-Servicemen Quota: **+25**
  * Physical Fitness Match: **+10**
  * Exemplary Character: **+10** (very common in Agniveer discharges)
  * Domicile State Match: **+18** (for state police)
  * Career preference alignment: **+15/20**
* *This results in a stack of +60 to +80 points that completely overwhelms academic qualifications or specific civilian trade alignments, making police exams the default recommendation even for clerks or administrative professionals who prefer banking.*

### 2. Weight Tuning Proposals
To mitigate this bias and surface other suitable sectors (like Banking, Railways, and SSC admin jobs), we propose adjusting the scoring weights in `src/config/weights.js`:

```diff
- EX_SERVICEMEN_TRACK_BONUS: 25,
+ EX_SERVICEMEN_TRACK_BONUS: 15, // Reduce uniform quota bias

- DOMICILE_MATCH_BONUS: 18,
+ DOMICILE_MATCH_BONUS: 12, // Moderate state-level state exam bias

- TRADE_ROLE_MATCH_BONUS: 20,
+ TRADE_ROLE_MATCH_BONUS: 35, // Significantly increase military-to-civilian trade match influence
```

By increasing the trade match bonus from `20` to `35` and reducing quota/domicile stack weights, we will heavily promote exact career alignments (e.g. military storekeepers and clerks matching civil clerk positions).

### 3. Exam Master Data Quality Gaps
* **IBPS RRB Exams conducting track:** Several IBPS RRB exams (Regional Rural Banks) are tagged as `career_track: "RAILWAYS"` instead of `"BANKING"` in `exam_master.json`. This causes clerical candidates with banking preferences to miss exact matches. We must fix this in the database to restore alignment.
* **Scraper date availability:** Live notifications scraper currently returns a `null` or empty `lastDate` and `vacancies` for the majority of active SSC and IBPS boards. A more robust regex-based PDF parser is needed in the scrapers module to extract specific dates.

