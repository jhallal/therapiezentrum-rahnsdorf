import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define our routes
const routes = [
  { path: '/', output: 'index.html' },
  { path: '/impressum', output: 'impressum.html' },
  { path: '/kinderarzt', output: 'kinderarzt.html' },
  { path: '/ergotherapie', output: 'ergotherapie.html' },
  { path: '/neuroperspektiven', output: 'neuroperspektiven.html' },
  { path: '/mandyhaase', output: 'mandyhaase.html' }
];

// Create a temporary index file for each route
async function generateStaticPages() {
  // First, do a normal build
  console.log('Building the application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Copy the built index.html as a template
  const buildDir = path.resolve(__dirname, '../dist');
  const templatePath = path.join(buildDir, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // Create HTML files for each route
  console.log('Generating static HTML files for routes...');
  routes.forEach(route => {
    if (route.path === '/') return; // Skip root as it's already built
    
    // Create a copy of the template
    let pageHtml = template;
    
    // Write the file
    const outputPath = path.join(buildDir, route.output);
    fs.writeFileSync(outputPath, pageHtml);
    console.log(`Generated: ${route.output}`);
  });
  
  console.log('Static site generation complete!');
}

generateStaticPages().catch(console.error);