import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

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
  console.log(`Server aktif di http://localhost:${port}/download-db`);
});
