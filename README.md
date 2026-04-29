# VeerNXT Agniveer Career Profiling Engine

A Node.js library + REST API that takes an Agniveer's profile (from the VeerNXT
Career Profiling Questionnaire) and returns the **top-10 best-fit government /
PSU / banking exams** from a catalogue of 1,629 exams across Central, all 28
States, and all 8 UTs. Also fetches **live vacancy notifications** from official
government websites for each recommended exam.

## Folder layout

```
engine/
├── data/
│   └── exam_master.json         # 1,629 exams, standardized schema
├── src/
│   ├── index.js                 # library entry-point (require in your Node backend)
│   ├── server.js                # standalone Express REST server
│   ├── config/
│   │   ├── weights.js           # all scoring weights in one place
│   │   ├── tradeMap.js          # military trade → civilian career track map
│   │   └── preferenceMap.js     # Section-E preference bucket → tracks
│   ├── engine/
│   │   ├── eligibility.js       # hard eligibility gates
│   │   ├── scoring.js           # weighted scorer
│   │   └── recommend.js         # main recommendTopExams() orchestrator
│   ├── scrapers/
│   │   ├── index.js             # dispatcher: route an exam to the right scraper
│   │   ├── _base.js             # axios+cheerio helpers
│   │   ├── ssc.js               # Staff Selection Commission
│   │   ├── ibps.js              # Banking (IBPS)
│   │   ├── rrb.js               # Railway Recruitment Board
│   │   ├── upsc.js              # Civil services
│   │   ├── capf.js              # CRPF / BSF / CISF / ITBP / SSB
│   │   ├── state-psc.js         # State PSCs (generic)
│   │   ├── generic.js           # fallback for any exam.website
│   │   └── run-all.js           # CLI: refresh every exam's vacancies
│   └── validators/
│       └── profileSchema.js     # Joi schema for the profile payload
└── test/
    └── test.js                  # 3 personas, offline verification
```

## Install & run

```bash
cd engine
npm install               # express, axios, cheerio, node-cron, mongoose, joi
npm test                  # runs 3 personas, offline, no internet needed
npm start                 # boots Express server on :4000
npm run refresh-vacancies # one-shot: hit every exam's site & cache results
```

## Use as a library in your Node.js website backend

```js
const { recommendTopExams } = require('./engine/src');

app.post('/profile/submit', async (req, res) => {
  // ... save profile to your DB ...
  const { recommendations } = await recommendTopExams(req.body, {
    topN: 10,
    attachLiveVacancies: true,   // fetches live govt notifications
  });
  res.json({ recommendations });
});
```

## REST API

| Method | Path                      | Purpose                                      |
|--------|---------------------------|----------------------------------------------|
| POST   | /api/validate             | Validate profile payload (Joi)               |
| POST   | /api/recommend            | Top-10 recommendations + live notifications  |
| GET    | /api/exams                | List exams (filter by track/state)           |
| GET    | /api/exams/:id            | Single exam detail + live vacancies          |
| POST   | /api/refresh-vacancies    | Admin: force re-scrape all sources           |

## Scoring algorithm (high level)

For every exam in `exam_master.json`:

1. **Hard filters** (eligibility.js) drop the exam if: qualification below the
   minimum needed, state-only exam the Agniveer doesn't have domicile for
   (unless "Anywhere in India" is selected), uniformed exam but non-SHAPE-1
   medical category.
2. **Weighted scoring** (scoring.js) on 15 signals:
   - Ex-Servicemen quota bonus (+25)
   - Priority track bonus (+15)
   - Career preference alignment (Central/State/Banking/Private)
   - Trade → role match (strong +20 / soft +10)
   - Qualification exact/over match
   - Domicile home state match (+18)
   - Category reservation (SC/ST/OBC/EWS)
   - Character on discharge bonus
   - NCC (A/B/C) bonus (big for SSC GD / Police)
   - Sports achievement bonus
   - Math-in-12 bonus / penalty
   - English comfort bonus / penalty
   - Physical fit bonus (for uniformed exams)
   - Full 4-year service bonus
   - Technical trade alignment bonus

3. **Diversify**: cap any single career_track to 4 entries in the top-10 so
   users don't receive 10 SSC variants.

4. **Attach live vacancies** from the appropriate government website.

All weights live in `config/weights.js` — tune them over time from counsellor
feedback without touching the engine logic.

## Live vacancy subsystem

`scrapers/index.js` dispatches each exam to the correct body-specific parser.
Each parser uses `axios` + `cheerio` to scrape the official website for
recruitment/notification links. Results are cached in-memory for 6 hours and
refreshed via a `node-cron` job every 6 hours.

**For production** replace the in-memory cache with Redis or MongoDB and
consider hosting scraping on a dedicated worker so the API server isn't blocked.

## Tuning & next steps

- Swap the trade map in `config/tradeMap.js` as your career counsellors share
  real mapping feedback.
- Add Hindi translations for all exam-names in `exam_master.json` — use a
  second column so multilingual front-ends can render Devanagari.
- Add persisted storage for Agniveer profiles + recommendation snapshots
  (see design doc for Mongo/SQL schemas).
