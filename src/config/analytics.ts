// Analytics configuration
export const ANALYTICS_CONFIG = {
  // Analytics ID (protected by environment variable)
  GA_MEASUREMENT_ID: import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-Z4J4QM1ZJ1',
  
  // Privacy settings for GDPR compliance
  PRIVACY_SETTINGS: {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
    storage: 'granted',
  },
  
  // Custom events
  EVENTS: {
    WHATSAPP_CLICK: 'whatsapp_click',
    APPOINTMENT_CLICK: 'appointment_click',
    PAGE_VIEW: 'page_view',
    FORM_SUBMIT: 'form_submit',
    PHONE_CLICK: 'phone_click',
    EMAIL_CLICK: 'email_click',
  },
  
  // Event categories
  EVENT_CATEGORIES: {
    ENGAGEMENT: 'engagement',
    CONVERSION: 'conversion',
    NAVIGATION: 'navigation',
    CONTACT: 'contact',
  },
  
  // Event labels
  EVENT_LABELS: {
    WHATSAPP_CONTACT: 'whatsapp_contact',
    APPOINTMENT_GENERAL: 'appointment_general',
    APPOINTMENT_HOME_HERO: 'appointment_home_hero',
    APPOINTMENT_HOME_FINAL: 'appointment_home_final',
    APPOINTMENT_CONTACT: 'appointment_contact',
    APPOINTMENT_SERVICES: 'appointment_services',
  },
  
  // Conversions (for Google Ads)
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

// Function to check if analytics is enabled
export const isAnalyticsEnabled = (): boolean => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  return cookieConsent === 'accepted';
};

// Function to track conversion event
export const trackConversion = (conversionId: string, conversionLabel: string) => {
  if (window.gtag && isAnalyticsEnabled()) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
};

// Function to track custom event
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (window.gtag && isAnalyticsEnabled()) {
    window.gtag('event', eventName, parameters);
  }
};

// Function to track page view
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (window.gtag && isAnalyticsEnabled()) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath,
      page_path: pagePath,
    });
  }
}; 