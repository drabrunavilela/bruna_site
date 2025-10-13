import { useEffect } from 'react';

// Hook para gerenciar GTM via HTML (não React)
export const useGTM = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) return;

    // Verificar se o usuário aceitou cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (cookieConsent === 'accepted') {
      // Ativar tracking completo
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'consent_update',
          analytics_storage: 'granted',
          ad_storage: 'denied',
          functionality_storage: 'granted',
          personalization_storage: 'denied',
          security_storage: 'granted',
        });
      }
    } else if (cookieConsent === 'declined') {
      // Desativar tracking
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'consent_update',
          analytics_storage: 'denied',
          ad_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'denied',
        });
      }
    }
    // Se não há consentimento, GTM carrega mas sem tracking
  }, [enabled]);
};

// Funções globais para eventos
export const trackGTMEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (window.dataLayer && localStorage.getItem('cookieConsent') === 'accepted') {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

export const trackWhatsAppClick = () => {
  trackGTMEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: 'whatsapp_contact',
  });
};

export const trackAppointment = (service?: string) => {
  trackGTMEvent('appointment_click', {
    event_category: 'conversion',
    event_label: service || 'appointment_general',
  });
};

export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (window.dataLayer && localStorage.getItem('cookieConsent') === 'accepted') {
    window.dataLayer.push({
      event: 'page_view',
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
    });
  }
};

// Expor funções globalmente
if (typeof window !== 'undefined') {
  (window as any).trackWhatsAppClick = trackWhatsAppClick;
  (window as any).trackAppointment = trackAppointment;
  (window as any).trackPageView = trackPageView;
}
