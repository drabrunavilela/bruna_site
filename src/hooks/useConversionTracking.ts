import { useLocation } from 'react-router-dom';
import type { WindowWithAnalytics } from '../types/analytics';

interface ConversionData {
  event: string;
  category: string;
  label: string;
  value?: number;
  page_path: string;
}

interface AgendamentoData {
  date: string;
  time: string;
  patient: {
    name: string;
    email: string;
    phone: string;
    age: string;
    reason: string;
    isFirstTime: boolean;
  };
  timestamp: string;
}

export const useConversionTracking = () => {
  const location = useLocation();

  const trackFormSubmit = (formType: string, source?: string) => {
    const data: ConversionData = {
      event: 'form_submit',
      category: 'conversion',
      label: `${formType}_${source || location.pathname}`,
      value: 1,
      page_path: location.pathname
    };

    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as WindowWithAnalytics).gtag) {
      (window as WindowWithAnalytics).gtag('event', data.event, {
        event_category: data.category,
        event_label: data.label,
        value: data.value,
        page_path: data.page_path
      });
    }

    // Console log para debug
    console.log('Conversion tracked:', data);
  };

  const trackWhatsAppClick = (source?: string) => {
    const data: ConversionData = {
      event: 'whatsapp_click',
      category: 'engagement',
      label: source || location.pathname,
      value: 1,
      page_path: location.pathname
    };

    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as WindowWithAnalytics).gtag) {
      (window as WindowWithAnalytics).gtag('event', data.event, {
        event_category: data.category,
        event_label: data.label,
        value: data.value,
        page_path: data.page_path
      });
    }

    console.log('WhatsApp click tracked:', data);
  };

  const trackAgendamento = (agendamentoData: AgendamentoData) => {
    const data: ConversionData = {
      event: 'agendamento_request',
      category: 'conversion',
      label: 'online_booking',
      value: 100, // Valor alto para agendamento
      page_path: location.pathname
    };

    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as WindowWithAnalytics).gtag) {
      (window as WindowWithAnalytics).gtag('event', data.event, {
        event_category: data.category,
        event_label: data.label,
        value: data.value,
        page_path: data.page_path,
        custom_parameters: {
          patient_age: agendamentoData.patient?.age,
          is_first_time: agendamentoData.patient?.isFirstTime,
          appointment_date: agendamentoData.date
        }
      });
    }

    console.log('Agendamento tracked:', data, agendamentoData);
  };

  const trackLeadCapture = (triggerType: string, source?: string, additionalData?: Record<string, string | number | boolean>) => {
    const data: ConversionData = {
      event: 'lead_capture',
      category: 'lead_generation',
      label: `${triggerType}_${source || location.pathname}`,
      value: 50, // Valor médio para lead capture
      page_path: location.pathname
    };

    // Google Analytics tracking
    if (typeof window !== 'undefined' && (window as WindowWithAnalytics).gtag) {
      (window as WindowWithAnalytics).gtag('event', data.event, {
        event_category: data.category,
        event_label: data.label,
        value: data.value,
        page_path: data.page_path,
        custom_parameters: additionalData
      });
    }

    console.log('Lead capture tracked:', data, additionalData);
  };

  return {
    trackFormSubmit,
    trackWhatsAppClick,
    trackAgendamento,
    trackLeadCapture
  };
};
