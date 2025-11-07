import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { 
  AnalyticsEvent, 
  ConversionEvent
} from '../types/analytics';
import { trackGTMEvent } from './useGTM';

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    trackGTMEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname
    });
  }, [location]);

  // Track custom events
  const trackEvent = (event: AnalyticsEvent) => {
    trackGTMEvent(event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.custom_parameters
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  };

  // Track conversions
  const trackConversion = (conversion: ConversionEvent) => {
    trackGTMEvent(conversion.event_name, {
      currency: conversion.currency || 'BRL',
      value: conversion.value,
      items: conversion.items
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Conversion Event:', conversion);
    }
  };

  // Scroll depth tracking
  const trackScrollDepth = () => {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90, 100];
    const tracked = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        thresholds.forEach(threshold => {
          if (scrollPercent >= threshold && !tracked.has(threshold)) {
            tracked.add(threshold);
            trackEvent({
              action: 'scroll_depth',
              category: 'engagement',
              label: `${threshold}%`,
              value: threshold
            });
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  };

  // Time on page tracking
  const trackTimeOnPage = () => {
    const startTime = Date.now();
    const intervals = [30, 60, 120, 300];
    const tracked = new Set<number>();

    const checkTime = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      intervals.forEach(interval => {
        if (timeSpent >= interval && !tracked.has(interval)) {
          tracked.add(interval);
          trackEvent({
            action: 'time_on_page',
            category: 'engagement',
            label: `${interval}s`,
            value: interval
          });
        }
      });
    };

    const timer = setInterval(checkTime, 10000);
    return () => clearInterval(timer);
  };

  // Click tracking
  const trackClick = (element: string, locationPath?: string) => {
    trackEvent({
      action: 'click',
      category: 'interaction',
      label: element,
      custom_parameters: {
        click_location: locationPath || window.location.pathname,
        timestamp: new Date().toISOString()
      }
    });
  };

  // Form tracking
  const trackFormStart = (formName: string) => {
    trackEvent({ action: 'form_start', category: 'form', label: formName });
  };

  const trackFormSubmit = (formName: string, success: boolean = true) => {
    trackEvent({ action: success ? 'form_submit' : 'form_error', category: 'form', label: formName });

    if (success) {
      trackConversion({
        event_name: 'generate_lead',
        value: 1,
        items: [{ item_id: 'contact_form', item_name: 'Contact Form Submission', category: 'lead_generation' }]
      });
    }
  };

  const trackFormAbandon = (formName: string, fieldName: string) => {
    trackEvent({
      action: 'form_abandon',
      category: 'form',
      label: formName,
      custom_parameters: { abandoned_field: fieldName }
    });
  };

  // WhatsApp tracking
  const trackWhatsAppClick = (source?: string, message?: string) => {
    trackEvent({
      action: 'whatsapp_click',
      category: 'conversion',
      label: source || location.pathname,
      custom_parameters: {
        message_type: message ? 'custom' : 'contextual',
        source_page: location.pathname
      }
    });

    trackConversion({
      event_name: 'contact_attempt',
      value: 5,
      items: [{ item_id: 'whatsapp_contact', item_name: 'WhatsApp Contact', category: 'communication' }]
    });
  };

  // Service interest tracking
  const trackServiceInterest = (serviceName: string, action: 'view' | 'click' | 'cta') => {
    trackEvent({
      action: `service_${action}`,
      category: 'services',
      label: serviceName,
      custom_parameters: { service_category: serviceName.toLowerCase().replace(/\s+/g, '_') }
    });
  };

  // Blog engagement
  const trackBlogEngagement = (action: 'read' | 'share' | 'comment', postTitle?: string) => {
    trackEvent({
      action: `blog_${action}`,
      category: 'content',
      label: postTitle || 'unknown',
      custom_parameters: { content_type: 'blog_post' }
    });
  };

  // Error tracking
  const trackError = (errorType: string, errorMessage: string, locationPath?: string) => {
    trackEvent({
      action: 'error',
      category: 'technical',
      label: errorType,
      custom_parameters: {
        error_message: errorMessage,
        error_location: locationPath || window.location.pathname
      }
    });
  };

  // Performance tracking
  const trackPerformance = () => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
        trackEvent({
          action: 'page_load_time',
          category: 'performance',
          label: location.pathname,
          value: Math.round(loadTime),
          custom_parameters: { dom_content_loaded: Math.round(domContentLoaded), page_path: location.pathname }
        });
      }
    }
  };

  return {
    trackEvent,
    trackConversion,
    trackScrollDepth,
    trackTimeOnPage,
    trackClick,
    trackFormStart,
    trackFormSubmit,
    trackFormAbandon,
    trackWhatsAppClick,
    trackServiceInterest,
    trackBlogEngagement,
    trackError,
    trackPerformance
  };
};
