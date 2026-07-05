import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Menentukan lokasi folder saat ini
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Path otomatis: Naik satu folder dari /d/ ke /data/ lalu cari database.sqlite
const dbPath = path.join(__dirname, '..', 'database.sqlite');

app.get('/download-db', (req, res) => {
  // Mengirim file untuk diunduh
  res.download(dbPath, 'database.sqlite', (err) => {
    if (err) {
      console.error("Gagal download:", err);
      res.status(500).send("Gagal mengunduh file.");
    }
  });
});

app.listen(port, () => {
  console.log(`Server aktif di http://localhost:${port}/download-db`);
});
