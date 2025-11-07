import React, { useEffect, useCallback } from 'react';
import { AnalyticsContext, type AnalyticsContextType } from '../../contexts/AnalyticsContext';
import { trackGTMEvent } from '../../hooks/useGTM';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  enabled?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  enabled = true 
}) => {
  // Helpers que empurram eventos no GTM (dataLayer)
  const trackEvent = useCallback<AnalyticsContextType['trackEvent']>((event) => {
    if (!enabled) return;
    trackGTMEvent(event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    });
  }, [enabled]);

  const trackConversion: AnalyticsContextType['trackConversion'] = (conversion) => {
    if (!enabled) return;
    trackGTMEvent(conversion.event_name, {
      currency: conversion.currency || 'BRL',
      value: conversion.value,
      items: conversion.items
    });
  };

  const trackClick: AnalyticsContextType['trackClick'] = (element, location) => {
    trackEvent({
      action: 'click',
      category: 'interaction',
      label: element,
      custom_parameters: {
        click_location: location || window.location.pathname,
        timestamp: new Date().toISOString()
      }
    });
  };

  const trackFormStart: AnalyticsContextType['trackFormStart'] = (formName) => {
    trackEvent({ action: 'form_start', category: 'form', label: formName });
  };

  const trackFormSubmit: AnalyticsContextType['trackFormSubmit'] = (formName, success = true) => {
    trackEvent({ action: success ? 'form_submit' : 'form_error', category: 'form', label: formName });

    if (success) {
      trackConversion({
        event_name: 'generate_lead',
        value: 1,
        items: [{ item_id: 'contact_form', item_name: 'Contact Form Submission', category: 'lead_generation' }]
      });
    }
  };

  const trackFormAbandon: AnalyticsContextType['trackFormAbandon'] = (formName, fieldName) => {
    trackEvent({
      action: 'form_abandon',
      category: 'form',
      label: formName,
      custom_parameters: { abandoned_field: fieldName }
    });
  };

  const trackWhatsAppClick: AnalyticsContextType['trackWhatsAppClick'] = (source, message) => {
    trackEvent({
      action: 'whatsapp_click',
      category: 'conversion',
      label: source || window.location.pathname,
      custom_parameters: {
        message_type: message ? 'custom' : 'contextual',
        source_page: window.location.pathname
      }
    });

    trackConversion({
      event_name: 'contact_attempt',
      value: 5,
      items: [{ item_id: 'whatsapp_contact', item_name: 'WhatsApp Contact', category: 'communication' }]
    });
  };

  const trackServiceInterest: AnalyticsContextType['trackServiceInterest'] = (serviceName, action) => {
    trackEvent({
      action: `service_${action}`,
      category: 'services',
      label: serviceName,
      custom_parameters: { service_category: serviceName.toLowerCase().replace(/\s+/g, '_') }
    });
  };

  const trackBlogEngagement: AnalyticsContextType['trackBlogEngagement'] = (action, postTitle) => {
    trackEvent({
      action: `blog_${action}`,
      category: 'content',
      label: postTitle || 'unknown',
      custom_parameters: { content_type: 'blog_post' }
    });
  };

  const trackError = useCallback<AnalyticsContextType['trackError']>((errorType, errorMessage, location) => {
    trackEvent({
      action: 'error',
      category: 'technical',
      label: errorType,
      custom_parameters: {
        error_message: errorMessage,
        error_location: location || window.location.pathname
      }
    });
  }, [trackEvent]);

  // Scroll depth & time on page & performance
  useEffect(() => {
    if (!enabled) return;

    // Scroll depth
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90, 100];
    const tracked = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        thresholds.forEach(t => {
          if (scrollPercent >= t && !tracked.has(t)) {
            tracked.add(t);
            trackEvent({ action: 'scroll_depth', category: 'engagement', label: `${t}%`, value: t });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Tempo na página
    const startTime = Date.now();
    const intervals = [30, 60, 120, 300];
    const trackedTime = new Set<number>();
    const timeTimer = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      intervals.forEach(i => {
        if (timeSpent >= i && !trackedTime.has(i)) {
          trackedTime.add(i);
          trackEvent({ action: 'time_on_page', category: 'engagement', label: `${i}s`, value: i });
        }
      });
    }, 10000);

    // Performance básica
    const performanceTimer = setTimeout(() => {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
          trackEvent({
            action: 'page_load_time',
            category: 'performance',
            label: window.location.pathname,
            value: Math.round(loadTime),
            custom_parameters: { dom_content_loaded: Math.round(domContentLoaded), page_path: window.location.pathname }
          });
        }
      }
    }, 2000);

    // Erros globais
    const handleError = (event: ErrorEvent) => trackError('javascript_error', event.message, event.filename);
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => trackError('promise_rejection', String(event.reason));

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timeTimer);
      clearTimeout(performanceTimer);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [enabled, trackEvent, trackError]);

  const value: AnalyticsContextType = {
    trackEvent,
    trackConversion,
    trackClick,
    trackFormStart,
    trackFormSubmit,
    trackFormAbandon,
    trackWhatsAppClick,
    trackServiceInterest,
    trackBlogEngagement,
    trackError
  };

  if (!enabled) {
    const noOpValue: AnalyticsContextType = {
      trackEvent: () => {},
      trackConversion: () => {},
      trackClick: () => {},
      trackFormStart: () => {},
      trackFormSubmit: () => {},
      trackFormAbandon: () => {},
      trackWhatsAppClick: () => {},
      trackServiceInterest: () => {},
      trackBlogEngagement: () => {},
      trackError: () => {}
    };
    return <AnalyticsContext.Provider value={noOpValue}>{children}</AnalyticsContext.Provider>;
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
