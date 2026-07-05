const express = require('express');
const app = express();
const path = require('path');
const port = 3000; // Pastikan port 3000 ini sudah disetting di Cloudflare Tunnel Anda

// Mengarah ke lokasi database yang Anda berikan
const dbPath = '/back-old/data/database.sqlite';

app.get('/download-db', (req, res) => {
  res.download(dbPath, 'database.sqlite', (err) => {
    if (err) {
      console.error("Gagal download:", err);
      res.status(500).send("Gagal mengunduh file.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server download aktif di http://localhost:${port}/download-db`);
});
