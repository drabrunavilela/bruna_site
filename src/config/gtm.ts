// Configuração do Google Tag Manager
export const GTM_CONFIG = {
  // ID do Google Tag Manager (protegido por variável de ambiente)
  GTM_ID: import.meta.env.VITE_GTM_ID || 'GTM-TWW4RQFJ',
  
  // Configurações de privacidade para LGPD
  PRIVACY_SETTINGS: {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    functionality_storage: 'granted',
    personalization_storage: 'denied',
    security_storage: 'granted',
  },
  
  // Eventos personalizados
  EVENTS: {
    WHATSAPP_CLICK: 'whatsapp_click',
    APPOINTMENT_CLICK: 'appointment_click',
    PAGE_VIEW: 'page_view',
    FORM_SUBMIT: 'form_submit',
    PHONE_CLICK: 'phone_click',
    EMAIL_CLICK: 'email_click',
    CONSENT_UPDATE: 'consent_update',
  },
  
  // Categorias de eventos
  EVENT_CATEGORIES: {
    ENGAGEMENT: 'engagement',
    CONVERSION: 'conversion',
    NAVIGATION: 'navigation',
    CONTACT: 'contact',
  },
  
  // Labels de eventos
  EVENT_LABELS: {
    WHATSAPP_CONTACT: 'whatsapp_contact',
    APPOINTMENT_GENERAL: 'appointment_general',
    APPOINTMENT_HOME_HERO: 'appointment_home_hero',
    APPOINTMENT_HOME_FINAL: 'appointment_home_final',
    APPOINTMENT_CONTACT: 'appointment_contact',
    APPOINTMENT_SERVICES: 'appointment_services',
  },
  
  // Conversões (para Google Ads)
  CONVERSIONS: {
    APPOINTMENT: {
      id: import.meta.env.VITE_GOOGLE_ADS_ID || 'AW-XXXXXXXXXX',
      label: 'appointment_conversion',
    },
    CONTACT: {
      id: import.meta.env.VITE_GOOGLE_ADS_ID || 'AW-XXXXXXXXXX',
      label: 'contact_conversion',
    },
  },
};

// Função para verificar se GTM está habilitado
export const isGTMEnabled = (): boolean => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  return cookieConsent === 'accepted';
};

// Função para rastrear evento de conversão via GTM
export const trackConversion = (conversionId: string, conversionLabel: string) => {
  if (window.dataLayer && isGTMEnabled()) {
    window.dataLayer.push({
      event: 'conversion',
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
};

// Função para rastrear evento personalizado via GTM
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (window.dataLayer && isGTMEnabled()) {
    window.dataLayer.push({
      event: eventName,
      ...parameters,
    });
  }
};

// Função para rastrear visualização de página via GTM
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (window.dataLayer && isGTMEnabled()) {
    window.dataLayer.push({
      event: 'page_view',
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
    });
  }
}; 