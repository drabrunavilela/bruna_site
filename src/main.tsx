import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './index.css'; // Para estilos globais básicos/resets
import './assets/styles/variables.css'; // Importa nossas variáveis CSS globais

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
