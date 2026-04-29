# Engine Schemas & API Contract

This folder has everything your Node.js website backend needs to integrate the
profiling engine:

| File                     | Purpose                                                     |
|--------------------------|-------------------------------------------------------------|
| `mongoose-models.js`     | 5 Mongoose collections (Profile, Recommendation, Exam, Vacancy, ConfigSnapshot) |
| `openapi.yaml`           | OpenAPI 3.0.3 spec — import into Swagger UI / Postman       |
| `integration-example.js` | Reference Express routes showing `/profile/submit`, `/profile/my-recommendations`, `/admin/exams/:id`, and a node-cron refresher |

## Quick integration

```js
const { recommendTopExams } = require('./engine/src');
const { Profile, Recommendation } = require('./engine/schemas/mongoose-models');

app.post('/profile/submit', async (req, res) => {
  const profile = await Profile.create({ agniveerUserId: req.user._id, ...req.body });
  const result  = await recommendTopExams(req.body, { topN: 10 });
  await Recommendation.create({
    profileId: profile._id,
    agniveerUserId: req.user._id,
    ...result,
    engineVersion: '1.0.0',
    weightsVersion: 'v1',
  });
  res.json({ ok: true, topTen: result.recommendations });
});
```

## View the API in Swagger UI

Drag `openapi.yaml` into https://editor.swagger.io/ or mount it at
`/api-docs` with `swagger-ui-express` in your backend.
