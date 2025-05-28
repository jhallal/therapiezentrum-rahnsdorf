import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes to pre-render
const routes = [
  { path: '/', output: 'index.html' },
  { path: '/impressum', output: 'impressum/index.html' },
  { path: '/kinderarzt', output: 'kinderarzt/index.html' },
  { path: '/ergotherapie', output: 'ergotherapie/index.html' },
  { path: '/neuroperspektiven', output: 'neuroperspektiven/index.html' },
  { path: '/mandyhaase', output: 'mandyhaase/index.html' }
];

// Start a dev server for puppeteer to crawl
function startDevServer() {
  return new Promise((resolve) => {
    console.log('Starting dev server...');
    const server = exec('npx vite preview --port 3000');
    
    // Give the server time to start
    setTimeout(() => {
      resolve(server);
    }, 3000);
  });
}

// Sleep function for delay
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function prerenderPages() {
  console.log('Starting pre-rendering process...');
  
  // Launch the server
  const server = await startDevServer();
  
  try {
    // Launch browser
    console.log('Launching headless browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Process each route
    for (const route of routes) {
      console.log(`Pre-rendering: ${route.path}`);
      
      // Navigate to the page and wait for it to be fully loaded
      await page.goto(`http://localhost:3000${route.path}`, {
        waitUntil: 'networkidle0',
      });
      
      // Wait a bit for JS execution using our sleep function
      await sleep(2000);
      
      // Get the HTML content
      const html = await page.content();
      
      // Create directory if needed
      const outputPath = path.resolve(__dirname, '../dist', route.output);
      const outputDir = path.dirname(outputPath);
      
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      // Write to file
      fs.writeFileSync(outputPath, html);
      
      console.log(`Generated: ${route.output}`);
    }
    
    await browser.close();
    console.log('Pre-rendering complete!');
    
  } catch (error) {
    console.error('Error during pre-rendering:', error);
  } finally {
    // Kill the server
    if (server && server.kill) {
      server.kill();
    }
    console.log('Server closed');
    process.exit(0);
  }
}

// Run the pre-rendering
prerenderPages();