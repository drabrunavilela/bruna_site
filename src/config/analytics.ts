// Configuração do Google Analytics 4
export const ANALYTICS_CONFIG = {
  // ID do Google Analytics 4 (protegido por variável de ambiente)
  GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-Z4J4QM1ZJ1',
  
  // Configurações de privacidade para LGPD
  PRIVACY_SETTINGS: {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
    storage: 'granted',
  },
  
  // Eventos personalizados
  EVENTS: {
    WHATSAPP_CLICK: 'whatsapp_click',
    APPOINTMENT_CLICK: 'appointment_click',
    PAGE_VIEW: 'page_view',
    FORM_SUBMIT: 'form_submit',
    PHONE_CLICK: 'phone_click',
    EMAIL_CLICK: 'email_click',
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

// Função para verificar se analytics está habilitado
export const isAnalyticsEnabled = (): boolean => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  return cookieConsent === 'accepted';
};

// Função para rastrear evento de conversão
export const trackConversion = (conversionId: string, conversionLabel: string) => {
  if (window.gtag && isAnalyticsEnabled()) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
};

// Função para rastrear evento personalizado
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (window.gtag && isAnalyticsEnabled()) {
    window.gtag('event', eventName, parameters);
  }
};

// Função para rastrear visualização de página
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (window.gtag && isAnalyticsEnabled()) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
    });
  }
}; 