require('dotenv').config();
const express = require('express');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API Biodata Mahasiswa berjalan' });
});


app.get('/biodata', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM biodata ORDER BY id ASC');
    res.json({
      success: true,
      count: result.rowCount,
      data: result.rows,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Terjadi kesalahan server' });
  }
});


app.get('/biodata/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM biodata WHERE id = $1', [req.params.id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Terjadi kesalahan server' });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
