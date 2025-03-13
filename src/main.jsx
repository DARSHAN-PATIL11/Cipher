import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');
rootElement.style.width = '100%';
rootElement.style.overflow = 'hidden';
rootElement.style.backgroundColor = '#000000';

createRoot(rootElement).render(
  <StrictMode>
    <div className="w-full overflow-hidden bg-black">
      <App />
    </div>
  </StrictMode>,
)