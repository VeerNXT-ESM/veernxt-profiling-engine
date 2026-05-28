const { Client } = require('pg');
const dbUrl = 'postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres';

async function count() {
  const client = new Client({ connectionString: dbUrl });
  try {
    await client.connect();
    console.log("Connected to Supabase PostgreSQL.");
    
    const tables = ['exams', 'notifications', 'questions', 'quiz_attempts', 'quizzes', 'resources', 'user_profiles'];
    for (const table of tables) {
      const res = await client.query(`SELECT COUNT(*) FROM "${table}"`);
      console.log(`Table "${table}": ${res.rows[0].count} rows`);
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.end();
  }
}

count();
