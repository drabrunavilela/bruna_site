import { createContext } from 'react';
import type { 
  AnalyticsEvent, 
  ConversionEvent
} from '../types/analytics';

export interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackConversion: (conversion: ConversionEvent) => void;
  trackClick: (element: string, location?: string) => void;
  trackFormStart: (formName: string) => void;
  trackFormSubmit: (formName: string, success?: boolean) => void;
  trackFormAbandon: (formName: string, fieldName: string) => void;
  trackWhatsAppClick: (source?: string, message?: string) => void;
  trackServiceInterest: (serviceName: string, action: 'view' | 'click' | 'cta') => void;
  trackBlogEngagement: (action: 'read' | 'share' | 'comment', postTitle?: string) => void;
  trackError: (errorType: string, errorMessage: string, location?: string) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
