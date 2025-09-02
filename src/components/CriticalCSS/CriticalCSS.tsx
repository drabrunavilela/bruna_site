import { useEffect } from 'react';
import { CRITICAL_CSS } from '../../utils/criticalCSS';

interface CriticalCSSProps {
  inline?: boolean;
}

const CriticalCSS: React.FC<CriticalCSSProps> = ({ inline = true }) => {
  useEffect(() => {
    if (!inline) return;

    // Criar elemento style para CSS crítico
    const styleElement = document.createElement('style');
    styleElement.id = 'critical-css';
    styleElement.textContent = CRITICAL_CSS;
    
    // Inserir no head antes de outros stylesheets
    const firstLink = document.querySelector('link[rel="stylesheet"]');
    if (firstLink && firstLink.parentNode) {
      firstLink.parentNode.insertBefore(styleElement, firstLink);
    } else {
      document.head.appendChild(styleElement);
    }

    // Lazy load do CSS não-crítico após carregamento
    const loadNonCriticalCSS = () => {
      // Aguardar um frame para garantir que o critical CSS foi aplicado
      requestAnimationFrame(() => {
        // Aqui podemos carregar CSS não-crítico se necessário
        console.log('Critical CSS aplicado, pronto para CSS não-crítico');
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadNonCriticalCSS);
    } else {
      loadNonCriticalCSS();
    }

    return () => {
      // Cleanup se necessário
      const existingStyle = document.getElementById('critical-css');
      if (existingStyle) {
        existingStyle.remove();
      }
      document.removeEventListener('DOMContentLoaded', loadNonCriticalCSS);
    };
  }, [inline]);

  return null; // O CSS é injetado via useEffect
};

export default CriticalCSS;
