import React, { useEffect } from 'react';

const Performance: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would be implemented with web-vitals library
      console.log('Performance monitoring enabled');
    }

    // Preload critical resources
    const preloadLinks = [
      '/src/assets/images/identidade-visual/logo-dra-bruna-vilela-header.webp',
      '/src/assets/images/bruna/dra-bruna-vilela-sorrindo-01.webp'
    ];

    preloadLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      document.head.appendChild(link);
    });
  }, []);

  return null; // This component doesn't render anything
};

export default Performance; 