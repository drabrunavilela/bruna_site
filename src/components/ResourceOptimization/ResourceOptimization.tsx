import { useEffect } from 'react';

interface ResourceOptimizationProps {
  heroImages?: string[];
  criticalPages?: string[];
}

const ResourceOptimization = ({ 
  heroImages = [
    '/src/assets/images/bruna/dra-bruna-vilela-acolhedora-09.webp',
    '/src/assets/images/bruna/dra-bruna-vilela-atenciosa-05.webp'
  ],
  criticalPages = ['/sobre', '/servicos', '/contato']
}: ResourceOptimizationProps) => {
  
  useEffect(() => {
    // Resource hints para domínios externos
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//wa.me' },
      { rel: 'dns-prefetch', href: '//www.google.com' },
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com', crossorigin: true },
      { rel: 'preconnect', href: 'https://www.googletagmanager.com', crossorigin: true }
    ];

    resourceHints.forEach(hint => {
      if (!document.querySelector(`link[href="${hint.href}"]`)) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossorigin) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }
    });

    // Preload imagens hero críticas
    heroImages.forEach(imageSrc => {
      if (!document.querySelector(`link[href="${imageSrc}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = imageSrc;
        // Usar setAttribute para fetchPriority devido ao TypeScript
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
      }
    });

    // Prefetch páginas críticas após 2 segundos
    const prefetchTimer = setTimeout(() => {
      criticalPages.forEach(pagePath => {
        if (!document.querySelector(`link[href="${pagePath}"]`)) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = pagePath;
          document.head.appendChild(link);
        }
      });
    }, 2000);

    // Otimização dinâmica de imagens
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach(img => {
        // Adicionar loading lazy para imagens fora do viewport
        if (!img.loading && !img.closest('[data-critical]')) {
          img.loading = 'lazy';
        }
        
        // Adicionar decode async para melhor performance
        if ('decoding' in img) {
          img.decoding = 'async';
        }
        
        // Otimizar dimensões se não estiverem definidas
        if (!img.width && !img.height && img.naturalWidth) {
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          if (img.offsetWidth) {
            img.width = img.offsetWidth;
            img.height = Math.round(img.offsetWidth * aspectRatio);
          }
        }
      });
    };

    // Observer para otimização contínua
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            // Preload próximas imagens
            const allImages = Array.from(document.querySelectorAll('img'));
            const currentIndex = allImages.indexOf(img);
            
            // Preload próximas 2 imagens
            for (let i = currentIndex + 1; i <= currentIndex + 2; i++) {
              if (allImages[i] && allImages[i].src) {
                const nextImg = allImages[i] as HTMLImageElement;
                const preloadLink = document.createElement('link');
                preloadLink.rel = 'preload';
                preloadLink.as = 'image';
                preloadLink.href = nextImg.src;
                document.head.appendChild(preloadLink);
              }
            }
            
            imageObserver.unobserve(img);
          }
        });
      },
      { rootMargin: '100px' }
    );

    // Aplicar otimizações após DOM carregar
    const initTimer = setTimeout(() => {
      optimizeImages();
      
      // Observar imagens para preload inteligente
      document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
      });
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(prefetchTimer);
      clearTimeout(initTimer);
      imageObserver.disconnect();
    };
  }, [heroImages, criticalPages]);

  return null; // Componente sem UI
};

export default ResourceOptimization;
