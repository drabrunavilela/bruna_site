import React, { useEffect } from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import { AnalyticsContext, type AnalyticsContextType } from '../../contexts/AnalyticsContext';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  enabled?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  enabled = true 
}) => {
  const analytics = useAnalytics();

  useEffect(() => {
    if (!enabled) return;

    // Initialize scroll depth tracking
    const cleanupScrollDepth = analytics.trackScrollDepth();
    
    // Initialize time on page tracking
    const cleanupTimeOnPage = analytics.trackTimeOnPage();
    
    // Track performance metrics
    const performanceTimer = setTimeout(() => {
      analytics.trackPerformance();
    }, 2000);

    // Global error tracking
    const handleError = (event: ErrorEvent) => {
      analytics.trackError('javascript_error', event.message, event.filename);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      analytics.trackError('promise_rejection', String(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      cleanupScrollDepth();
      cleanupTimeOnPage();
      clearTimeout(performanceTimer);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [analytics, enabled]);

  const value: AnalyticsContextType = {
    trackEvent: analytics.trackEvent,
    trackConversion: analytics.trackConversion,
    trackClick: analytics.trackClick,
    trackFormStart: analytics.trackFormStart,
    trackFormSubmit: analytics.trackFormSubmit,
    trackFormAbandon: analytics.trackFormAbandon,
    trackWhatsAppClick: analytics.trackWhatsAppClick,
    trackServiceInterest: analytics.trackServiceInterest,
    trackBlogEngagement: analytics.trackBlogEngagement,
    trackError: analytics.trackError
  };

  if (!enabled) {
    // Return a no-op provider when analytics is disabled
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

    return (
      <AnalyticsContext.Provider value={noOpValue}>
        {children}
      </AnalyticsContext.Provider>
    );
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
