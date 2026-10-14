import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PdvLanding } from './pages/PdvLanding';
import './styles/global.css';
import './styles/pdv.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PdvLanding />
  </StrictMode>,
);
