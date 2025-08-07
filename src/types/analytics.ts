// Analytics types
export interface GtagFunction {
  (...args: unknown[]): void;
}

export interface DataLayerItem {
  event: string;
  [key: string]: unknown;
}

export interface WindowWithAnalytics extends Window {
  gtag: GtagFunction;
  dataLayer: DataLayerItem[];
  trackWhatsAppClick: () => void;
  trackAppointment: (service?: string) => void;
  trackPageView: (pageTitle: string, pagePath: string) => void;
}

// Analytics event types
export interface AnalyticsEvent {
  event_category: string;
  event_label: string;
  [key: string]: unknown;
}

export interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path: string;
}

// Conversion tracking types
export interface ConversionEvent {
  send_to: string;
  [key: string]: unknown;
} 