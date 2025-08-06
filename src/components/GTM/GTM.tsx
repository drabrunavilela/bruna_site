import { useEffect } from 'react';

interface GTMProps {
  enabled?: boolean;
}

const GTM: React.FC<GTMProps> = ({ enabled = false }) => {
  useEffect(() => {
    // Verificar se o usuário aceitou cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (enabled && cookieConsent === 'accepted') {
      // Carregar Google Tag Manager apenas se cookies foram aceitos
      loadGTM();
    }
  }, [enabled]);

  const loadGTM = () => {
    // Verificar se o script já foi carregado
    if (window.dataLayer) {
      return;
    }

    // Configurar dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    // Evento de consentimento
    window.dataLayer.push({
      event: 'consent_update',
      analytics_storage: 'granted',
      ad_storage: 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
    });
  };

  // Função para rastrear eventos personalizados via GTM
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (window.dataLayer && localStorage.getItem('cookieConsent') === 'accepted') {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
  };



  // Função para rastrear cliques em WhatsApp via GTM
  const trackWhatsAppClick = () => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'whatsapp_contact',
    });
  };

  // Função para rastrear agendamentos via GTM
  const trackAppointment = (service?: string) => {
    trackEvent('appointment_click', {
      event_category: 'conversion',
      event_label: service || 'general',
    });
  };

  // Função para rastrear visualizações de página via GTM
  const trackPageView = (pageTitle: string, pagePath: string) => {
    if (window.dataLayer && localStorage.getItem('cookieConsent') === 'accepted') {
      window.dataLayer.push({
        event: 'page_view',
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

export default GTM;

// Declarações de tipos para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    trackWhatsAppClick: () => void;
    trackAppointment: (service?: string) => void;
    trackPageView: (pageTitle: string, pagePath: string) => void;
  }
} 