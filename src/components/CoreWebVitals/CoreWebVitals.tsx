import { useEffect } from 'react';

// Declarar gtag global
declare global {
  function gtag(...args: unknown[]): void;
}

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

const CoreWebVitals: React.FC = () => {
  useEffect(() => {
    // Importar web-vitals dinamicamente para evitar SSR issues
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      // Função para enviar métricas
      const sendToAnalytics = (metric: WebVitalMetric) => {
        // Enviar para Google Analytics 4
        if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
          gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            custom_map: {
              metric_rating: metric.rating,
              metric_delta: metric.delta
            }
          });
        }

        // Log para desenvolvimento
        console.log('Core Web Vital:', {
          name: metric.name,
          value: metric.value,
          rating: metric.rating,
          delta: metric.delta,
          id: metric.id
        });

        // Enviar para endpoint personalizado (se disponível)
        fetch('/api/analytics/web-vitals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            metric: metric.name,
            value: metric.value,
            rating: metric.rating,
            delta: metric.delta,
            id: metric.id,
            url: window.location.href,
            userAgent: navigator.userAgent,
            timestamp: Date.now()
          })
        }).catch(() => {
          // Falha silenciosa - não interromper UX
        });
      };

      // Coletar métricas Core Web Vitals
      onCLS(sendToAnalytics);  // Cumulative Layout Shift
      onFID(sendToAnalytics);  // First Input Delay
      onFCP(sendToAnalytics);  // First Contentful Paint
      onLCP(sendToAnalytics);  // Largest Contentful Paint
      onTTFB(sendToAnalytics); // Time to First Byte
    }).catch(error => {
      console.warn('Erro ao carregar web-vitals:', error);
    });

    // Métricas customizadas específicas para site médico
    const measureCustomMetrics = () => {
      // Tempo até primeiro agendamento visível
      const appointmentButton = document.querySelector('[href*="contato"]');
      if (appointmentButton) {
        const appointmentTime = performance.now();
        
        if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
          gtag('event', 'custom_appointment_visible', {
            event_category: 'Medical Site Metrics',
            value: Math.round(appointmentTime)
          });
        }
      }

      // Tempo de carregamento de imagens médicas
      const medicalImages = document.querySelectorAll('img[alt*="Dra. Bruna"]');
      medicalImages.forEach((img, index) => {
        const imgElement = img as HTMLImageElement;
        if (imgElement.complete) {
          const loadTime = performance.now();
          
          if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
            gtag('event', 'medical_image_loaded', {
              event_category: 'Medical Site Metrics',
              event_label: `image_${index}`,
              value: Math.round(loadTime)
            });
          }
        }
      });
    };

    // Executar métricas customizadas após carregamento
    if (document.readyState === 'complete') {
      measureCustomMetrics();
    } else {
      window.addEventListener('load', measureCustomMetrics);
    }

    // Monitorar performance de formulários médicos
    const monitorFormPerformance = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach((form, index) => {
        const startTime = performance.now();
        
        form.addEventListener('submit', () => {
          const submitTime = performance.now() - startTime;
          
          if (typeof window !== 'undefined' && typeof gtag !== 'undefined') {
            gtag('event', 'form_interaction_time', {
              event_category: 'Medical Forms',
              event_label: `form_${index}`,
              value: Math.round(submitTime)
            });
          }
        });
      });
    };

    // Monitorar após DOM estar pronto
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', monitorFormPerformance);
    } else {
      monitorFormPerformance();
    }

  }, []);

  // Este componente não renderiza nada
  return null;
};

export default CoreWebVitals;
