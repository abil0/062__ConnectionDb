require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'mahasiswa',
});

pool.connect()
  .then((client) => {
    console.log('Terhubung ke database PostgreSQL "mahasiswa"');
    client.release();
  })
  .catch((err) => console.error('Gagal terhubung ke database:', err.message));

module.exports = pool;
