import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ClaraLanding } from './pages/ClaraLanding';
import './styles/clara.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClaraLanding />
  </StrictMode>,
);
