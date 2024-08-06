import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_DB,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// pool.on('connect', async (client) => {
//   try {
//     const res = await client.query(
//       'SELECT current_database(), current_schema()',
//     );
//     console.log('Connected to database:', res.rows[0].current_database);
//     console.log('Connected to schema:', res.rows[0].current_schema);
//   } catch (err) {
//     console.error('Error fetching current database and schema:', err);
//   }
// });

// pool.on('error', (err) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });

export const dbQuery = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
