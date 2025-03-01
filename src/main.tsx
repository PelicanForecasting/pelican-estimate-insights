
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check if the Lovable script tag exists, if not, dynamically add it
const lovableScriptExists = Array.from(document.querySelectorAll('script')).some(
  script => script.src === 'https://cdn.gpteng.co/gptengineer.js'
);

if (!lovableScriptExists) {
  const lovableScript = document.createElement('script');
  lovableScript.src = 'https://cdn.gpteng.co/gptengineer.js';
  lovableScript.type = 'module';
  
  // Find the main script tag to insert before it
  const mainScript = Array.from(document.querySelectorAll('script')).find(
    script => script.src.includes('/src/main.tsx')
  );
  
  if (mainScript) {
    document.body.insertBefore(lovableScript, mainScript);
  } else {
    document.body.appendChild(lovableScript);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
