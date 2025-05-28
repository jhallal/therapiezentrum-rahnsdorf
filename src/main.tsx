import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Check if the app was server-rendered (has content)
if (rootElement.hasChildNodes()) {
  // If already rendered (by react-snap), hydrate instead of rendering from scratch
  hydrateRoot(rootElement, <App />);
} else {
  // Normal client-side rendering
  createRoot(rootElement).render(<App />);
}

// For react-snap to discover all routes
export default App;