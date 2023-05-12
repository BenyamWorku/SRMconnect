import { Pool } from 'pg';

const pool = new Pool({
  user: '<database user>',
  host: '<database host>',
  database: '<database name>',
  password: '<database password>',
  port: 0000
});


export default {
  query: (text: string, params: any[]) => pool.query(text, params),
};