const express = require('express');
const app = express();
const path = require('path');
const port = 4444; // Pastikan port ini sama dengan yang disetting di Cloudflare Tunnel

// Endpoint untuk download database
app.get('/download-db', (req, res) => {
  const filePath = path.join(__dirname, 'database.sqlite');
  res.download(filePath, 'database.sqlite', (err) => {
    if (err) {
      res.status(500).send("Gagal mengunduh file.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server download aktif di http://localhost:${port}/download-db`);
});
