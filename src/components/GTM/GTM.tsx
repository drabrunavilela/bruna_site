import { useEffect, useCallback } from 'react';
import { GTM_CONFIG } from '../../config/gtm';
import type { DataLayerItem } from '../../types/analytics';

interface GTMProps {
  enabled?: boolean;
}

const GTM: React.FC<GTMProps> = ({ enabled = false }) => {
  // Função para rastrear eventos personalizados via GTM
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (window.dataLayer && localStorage.getItem('cookieConsent') === 'accepted') {
      window.dataLayer.push({
        event: eventName,
        ...parameters,
      });
    }
  }, []);

  // Função para rastrear cliques em WhatsApp via GTM
  const trackWhatsAppClick = useCallback(() => {
    trackEvent('whatsapp_click', {
      event_category: 'engagement',
      event_label: 'whatsapp_contact',
    });
  }, [trackEvent]);

  // Função para rastrear agendamentos via GTM
  const trackAppointment = useCallback((service?: string) => {
    trackEvent('appointment_click', {
      event_category: 'conversion',
      event_label: service || 'general',
    });
  }, [trackEvent]);

  // Função para rastrear visualizações de página via GTM
  const trackPageView = useCallback((pageTitle: string, pagePath: string) => {
    if (window.dataLayer && localStorage.getItem('cookieConsent') === 'accepted') {
      window.dataLayer.push({
        event: 'page_view',
        page_title: pageTitle,
        page_location: window.location.origin + pagePath,
        page_path: pagePath,
      });
    }
  }, []);

  const loadGTM = useCallback(() => {
    // Verificar se o script já foi carregado
    if (window.dataLayer && typeof window.gtag === 'function') {
      return;
    }

    // Configurar dataLayer
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: unknown[]) {
      window.dataLayer.push(...args as DataLayerItem[]);
    };

    // Carregar script do Google Tag Manager
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONFIG.GTM_ID}`;
    document.head.appendChild(script);

    // Evento de consentimento
    window.dataLayer.push({
      event: 'consent_update',
      analytics_storage: 'granted',
      ad_storage: 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
    });
  }, []);

  useEffect(() => {
    // Verificar se o usuário aceitou cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (enabled && cookieConsent === 'accepted') {
      // Carregar Google Tag Manager apenas se cookies foram aceitos
      loadGTM();
    }
  }, [enabled, loadGTM]);

  // Expor funções globalmente para uso em outros componentes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as Window & {
        trackWhatsAppClick: () => void;
        trackAppointment: (service?: string) => void;
        trackPageView: (pageTitle: string, pagePath: string) => void;
      }).trackWhatsAppClick = trackWhatsAppClick;
      (window as Window & {
        trackWhatsAppClick: () => void;
        trackAppointment: (service?: string) => void;
        trackPageView: (pageTitle: string, pagePath: string) => void;
      }).trackAppointment = trackAppointment;
      (window as Window & {
        trackWhatsAppClick: () => void;
        trackAppointment: (service?: string) => void;
        trackPageView: (pageTitle: string, pagePath: string) => void;
      }).trackPageView = trackPageView;
    }
  }, [trackWhatsAppClick, trackAppointment, trackPageView]);

  return null; // Este componente não renderiza nada
};

export default GTM;

// Declarações de tipos para TypeScript
declare global {
  interface Window {
    dataLayer: DataLayerItem[];
    gtag: (...args: unknown[]) => void;
    trackWhatsAppClick: () => void;
    trackAppointment: (service?: string) => void;
    trackPageView: (pageTitle: string, pagePath: string) => void;
  }
} 