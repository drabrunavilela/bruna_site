import { useEffect } from 'react';
import { ANALYTICS_CONFIG } from '../../config/analytics';

// ID do Google Analytics 4 (substitua pelo seu ID real)
const GA_MEASUREMENT_ID = ANALYTICS_CONFIG.GA_MEASUREMENT_ID;

interface AnalyticsProps {
  enabled?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ enabled = false }) => {
  useEffect(() => {
    // Verificar se o usuário aceitou cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (enabled && cookieConsent === 'accepted') {
      // Carregar Google Analytics apenas se cookies foram aceitos
      loadGoogleAnalytics();
    }
  }, [enabled]);

  const loadGoogleAnalytics = () => {
    // Verificar se o script já foi carregado
    if (typeof window.gtag === 'function') {
      return;
    }

    // Criar script do Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configurar gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Configuração inicial
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      ...ANALYTICS_CONFIG.PRIVACY_SETTINGS,
    });

    // Evento de consentimento
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied', // Não usar ads por enquanto
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
    });
  };

  // Função para rastrear eventos personalizados
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window.gtag === 'function' && localStorage.getItem('cookieConsent') === 'accepted') {
      window.gtag('event', eventName, parameters);
    }
  };



  // Função para rastrear cliques em WhatsApp
  const trackWhatsAppClick = () => {
    trackEvent(ANALYTICS_CONFIG.EVENTS.WHATSAPP_CLICK, {
      event_category: ANALYTICS_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      event_label: ANALYTICS_CONFIG.EVENT_LABELS.WHATSAPP_CONTACT,
    });
  };

  // Função para rastrear agendamentos
  const trackAppointment = (service?: string) => {
    trackEvent(ANALYTICS_CONFIG.EVENTS.APPOINTMENT_CLICK, {
      event_category: ANALYTICS_CONFIG.EVENT_CATEGORIES.CONVERSION,
      event_label: service || ANALYTICS_CONFIG.EVENT_LABELS.APPOINTMENT_GENERAL,
    });
  };

  // Função para rastrear visualizações de página
  const trackPageView = (pageTitle: string, pagePath: string) => {
    if (typeof window.gtag === 'function' && localStorage.getItem('cookieConsent') === 'accepted') {
      window.gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.origin + pagePath,
        page_path: pagePath,
      });
    }
  };

  // Expor funções globalmente para uso em outros componentes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackWhatsAppClick = trackWhatsAppClick;
      (window as any).trackAppointment = trackAppointment;
      (window as any).trackPageView = trackPageView;
    }
  }, []);

  return null; // Este componente não renderiza nada
};

export default Analytics;

// Declarações de tipos para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    trackWhatsAppClick: () => void;
    trackAppointment: (service?: string) => void;
    trackPageView: (pageTitle: string, pagePath: string) => void;
  }
} 