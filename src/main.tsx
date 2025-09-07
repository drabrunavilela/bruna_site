import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './assets/styles/variables.css'; // Importa nossas variáveis CSS globais
import './assets/styles/accessibility.css'; // Estilos de acessibilidade WCAG 2.1
import './assets/styles/form-accessibility.css'; // Estilos de formulários acessíveis
import './assets/styles/dark-theme.css'; // Tema escuro

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
