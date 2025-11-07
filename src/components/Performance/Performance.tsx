import React, { useEffect } from 'react';
import { trackGTMEvent } from '../../hooks/useGTM';
import type { Metric } from 'web-vitals';

const Performance: React.FC = () => {
  useEffect(() => {
    // Importar web-vitals dinamicamente para evitar SSR issues
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      // Monitor Core Web Vitals and send to GTM
      const sendToAnalytics = (metric: Metric) => {
        trackGTMEvent('web_vital', {
          metric_name: metric.name,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true,
        });

        // Log to console in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`${metric.name}:`, metric.value);
        }
      };

      // Measure all Core Web Vitals
      onCLS(sendToAnalytics);
      onFID(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
    }).catch(error => {
      console.warn('Erro ao carregar web-vitals:', error);
    });

    // Preload critical resources
    const preloadLinks = [
      { href: '/images/identidade-visual/logo-dra-bruna-vilela-header.webp', as: 'image' }
    ];

    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'preload';
      linkElement.href = link.href;
      linkElement.as = link.as;
      if (link.as === 'image') {
        linkElement.type = 'image/webp';
      }
      document.head.appendChild(linkElement);
    });
  }, []);

  return null; // This component doesn't render anything
};

export default Performance; 