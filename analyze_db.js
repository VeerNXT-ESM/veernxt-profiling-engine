const { Client } = require('pg');

const dbUrl = 'postgresql://postgres:5Rw-uJ2Xkadc$4,@db.jtcyeufhvpieyngracpo.supabase.co:5432/postgres';

async function analyze() {
  const client = new Client({
    connectionString: dbUrl,
  });

  try {
    await client.connect();
    console.log("Connected to Supabase PostgreSQL.");

    const res = await client.query(`
      SELECT table_name, column_name, data_type 
      FROM information_schema.columns 
      WHERE table_schema = 'public' 
      ORDER BY table_name, ordinal_position;
    `);

    const tables = {};
    res.rows.forEach(row => {
      if (!tables[row.table_name]) {
        tables[row.table_name] = [];
      }
      tables[row.table_name].push({ name: row.column_name, type: row.data_type });
    });

    console.log(JSON.stringify(tables, null, 2));

  } catch (err) {
    console.error("Error connecting or querying:", err);
  } finally {
    await client.end();
  }
}

analyze();
