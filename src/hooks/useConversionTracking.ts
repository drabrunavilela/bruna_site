import { useLocation } from 'react-router-dom';
import { trackGTMEvent } from './useGTM';

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

    // Enviar via GTM
    trackGTMEvent(data.event, {
      event_category: data.category,
      event_label: data.label,
      value: data.value,
      page_path: data.page_path
    });

    // Conversion tracked successfully
  };

  const trackWhatsAppClick = (source?: string) => {
    const data: ConversionData = {
      event: 'whatsapp_click',
      category: 'engagement',
      label: source || location.pathname,
      value: 1,
      page_path: location.pathname
    };

    // Enviar via GTM
    trackGTMEvent(data.event, {
      event_category: data.category,
      event_label: data.label,
      value: data.value,
      page_path: data.page_path
    });

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

    // Enviar via GTM
    trackGTMEvent(data.event, {
      event_category: data.category,
      event_label: data.label,
      value: data.value,
      page_path: data.page_path,
      patient_age: agendamentoData.patient?.age,
      is_first_time: agendamentoData.patient?.isFirstTime,
      appointment_date: agendamentoData.date
    });

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

    // Enviar via GTM
    trackGTMEvent(data.event, {
      event_category: data.category,
      event_label: data.label,
      value: data.value,
      page_path: data.page_path,
      ...additionalData
    });

    console.log('Lead capture tracked:', data, additionalData);
  };

  return {
    trackFormSubmit,
    trackWhatsAppClick,
    trackAgendamento,
    trackLeadCapture
  };
};
