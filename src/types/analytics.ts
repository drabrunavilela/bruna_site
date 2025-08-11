// Analytics types for GTM
export interface DataLayerItem {
  event: string;
  [key: string]: unknown;
}

export interface WindowWithAnalytics extends Window {
  dataLayer: DataLayerItem[];
  gtag: (...args: unknown[]) => void;
  trackWhatsAppClick: () => void;
  trackAppointment: (service?: string) => void;
  trackPageView: (pageTitle: string, pagePath: string) => void;
}

// Event types for GTM
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

export interface ConversionEvent {
  send_to: string;
  [key: string]: unknown;
} 