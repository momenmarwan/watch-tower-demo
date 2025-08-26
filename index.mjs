import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

// Create a new PostgreSQL client
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  // host: process.env.DB_HOST || 'localhost',
  // port: process.env.DB_PORT || 5432,
  // database: process.env.DB_NAME || 'postgres',
  // user: process.env.DB_USER || 'postgres',
  // password: process.env.DB_PASSWORD || 'password',
});

// Connect to the database
await client.connect();

async function runQuery() {
  try {
    const result = await client.query('SELECT 1 AS number');
    console.log('Dummy query result:', result.rows[0].number); // Logs: Dummy query result: 1
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

// Run the query every 10 seconds for demo purposes
setInterval(runQuery, 10000);
runQuery(); // Initial run
