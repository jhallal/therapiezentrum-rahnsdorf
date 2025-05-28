import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')));

// For all routes, serve the appropriate HTML file
app.get('*', (req, res) => {
  const route = req.originalUrl;
  let htmlFile = 'index.html'; // Default to index.html
  
  // Map routes to their HTML files
  const routeMap = {
    '/': 'index.html',
    '/impressum': 'impressum.html',
    '/kinderarzt': 'kinderarzt.html',
    '/ergotherapie': 'ergotherapie.html',
    '/neuroperspektiven': 'neuroperspektiven.html',
    '/mandyhaase': 'mandyhaase.html'
  };
  
  if (routeMap[route]) {
    htmlFile = routeMap[route];
  }
  
  // Serve the appropriate HTML file
  res.sendFile(path.join(__dirname, '../dist', htmlFile));
});

app.listen(PORT, () => {
  console.log(`Static server running on port ${PORT}`);
});