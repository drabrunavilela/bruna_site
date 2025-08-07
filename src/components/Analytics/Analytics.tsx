import { useEffect, useCallback } from 'react';
import { ANALYTICS_CONFIG } from '../../config/analytics';
import type { WindowWithAnalytics, AnalyticsEvent, PageViewEvent } from '../../types/analytics';

// Analytics ID
const GA_MEASUREMENT_ID = ANALYTICS_CONFIG.GA_MEASUREMENT_ID;

interface AnalyticsProps {
  enabled?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ enabled = false }) => {
  const loadGoogleAnalytics = useCallback(() => {
    // Check if script already loaded
    if (typeof (window as unknown as WindowWithAnalytics).gtag === 'function') {
      return;
    }

    // Create analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Configure gtag
    (window as unknown as WindowWithAnalytics).dataLayer = (window as unknown as WindowWithAnalytics).dataLayer || [];
    (window as unknown as WindowWithAnalytics).gtag = function(...args: unknown[]) {
      (window as unknown as WindowWithAnalytics).dataLayer.push(args);
    };

    // Initial configuration
    (window as unknown as WindowWithAnalytics).gtag('js', new Date());
    (window as unknown as WindowWithAnalytics).gtag('config', GA_MEASUREMENT_ID, {
      ...ANALYTICS_CONFIG.PRIVACY_SETTINGS,
    });

    // Consent event
    (window as unknown as WindowWithAnalytics).gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied', // No ads for now
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
    });
  }, []);

  useEffect(() => {
    // Check if user accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    
    if (enabled && cookieConsent === 'accepted') {
      // Load analytics only if cookies were accepted
      loadGoogleAnalytics();
    }
  }, [enabled, loadGoogleAnalytics]);

  // Function to track custom events
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof (window as unknown as WindowWithAnalytics).gtag === 'function' && localStorage.getItem('cookieConsent') === 'accepted') {
      (window as unknown as WindowWithAnalytics).gtag('event', eventName, parameters);
    }
  }, []);

  // Function to track WhatsApp clicks
  const trackWhatsAppClick = useCallback(() => {
    trackEvent(ANALYTICS_CONFIG.EVENTS.WHATSAPP_CLICK, {
      event_category: ANALYTICS_CONFIG.EVENT_CATEGORIES.ENGAGEMENT,
      event_label: ANALYTICS_CONFIG.EVENT_LABELS.WHATSAPP_CONTACT,
    } as AnalyticsEvent);
  }, [trackEvent]);

  // Function to track appointments
  const trackAppointment = useCallback((service?: string) => {
    trackEvent(ANALYTICS_CONFIG.EVENTS.APPOINTMENT_CLICK, {
      event_category: ANALYTICS_CONFIG.EVENT_CATEGORIES.CONVERSION,
      event_label: service || ANALYTICS_CONFIG.EVENT_LABELS.APPOINTMENT_GENERAL,
    } as AnalyticsEvent);
  }, [trackEvent]);

  // Function to track page views
  const trackPageView = useCallback((pageTitle: string, pagePath: string) => {
    if (typeof (window as unknown as WindowWithAnalytics).gtag === 'function' && localStorage.getItem('cookieConsent') === 'accepted') {
      (window as unknown as WindowWithAnalytics).gtag('event', 'page_view', {
        page_title: pageTitle,
        page_location: window.location.origin + pagePath,
        page_path: pagePath,
      } as PageViewEvent);
    }
  }, []);

  // Expose functions globally for use in other components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as unknown as WindowWithAnalytics).trackWhatsAppClick = trackWhatsAppClick;
      (window as unknown as WindowWithAnalytics).trackAppointment = trackAppointment;
      (window as unknown as WindowWithAnalytics).trackPageView = trackPageView;
    }
  }, [trackWhatsAppClick, trackAppointment, trackPageView]);

  return null; // This component doesn't render anything
};

export default Analytics; 