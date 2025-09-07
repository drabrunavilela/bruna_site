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

// Event types for GTM - Compatible with useAnalytics hook
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, string | number | boolean>;
}

export interface ConversionEvent {
  event_name: string;
  currency?: string;
  value?: number;
  items?: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity?: number;
    price?: number;
  }>;
}

export interface PageViewEvent {
  page_title: string;
  page_location: string;
  page_path: string;
}

export interface FormEvent {
  form_name: string;
  form_action: 'start' | 'submit' | 'abandon';
  field_name?: string;
  success?: boolean;
}

export interface ServiceEvent {
  service_name: string;
  action: 'view' | 'click' | 'cta';
  source_page?: string;
}

export interface BlogEvent {
  action: 'read' | 'share' | 'comment';
  post_title?: string;
  engagement_time?: number;
}

export interface AnalyticsErrorEvent {
  error_type: string;
  error_message: string;
  location?: string;
  stack_trace?: string;
} 