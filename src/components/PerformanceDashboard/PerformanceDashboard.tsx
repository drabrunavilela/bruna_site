import { useState, useEffect } from 'react';
import styles from './PerformanceDashboard.module.css';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface CustomMetrics {
  appointmentButtonTime: number | null;
  medicalImagesLoaded: number;
  formInteractions: number;
  offlineEvents: number;
  pushNotificationsSent: number;
}

const PerformanceDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  const [customMetrics, setCustomMetrics] = useState<CustomMetrics>({
    appointmentButtonTime: null,
    medicalImagesLoaded: 0,
    formInteractions: 0,
    offlineEvents: 0,
    pushNotificationsSent: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar dashboard apenas em desenvolvimento ou com parâmetro específico
    const isDev = import.meta.env.DEV;
    const showDashboard = new URLSearchParams(window.location.search).has('perf-dashboard');
    
    if (isDev || showDashboard) {
      setIsVisible(true);
    }

    // Listener para métricas Core Web Vitals
    const handleWebVitals = (event: CustomEvent) => {
      const { name, value } = event.detail;
      
      setMetrics(prev => ({
        ...prev,
        [name.toLowerCase()]: value
      }));
    };

    // Listener para métricas customizadas
    const handleCustomMetrics = (event: CustomEvent) => {
      const { type, value } = event.detail;
      
      setCustomMetrics(prev => {
        switch (type) {
          case 'appointment_visible':
            return { ...prev, appointmentButtonTime: value };
          case 'medical_image_loaded':
            return { ...prev, medicalImagesLoaded: prev.medicalImagesLoaded + 1 };
          case 'form_interaction':
            return { ...prev, formInteractions: prev.formInteractions + 1 };
          case 'offline_event':
            return { ...prev, offlineEvents: prev.offlineEvents + 1 };
          case 'push_notification':
            return { ...prev, pushNotificationsSent: prev.pushNotificationsSent + 1 };
          default:
            return prev;
        }
      });
    };

    // Adicionar event listeners
    window.addEventListener('web-vital-metric', handleWebVitals as EventListener);
    window.addEventListener('custom-metric', handleCustomMetrics as EventListener);

    return () => {
      window.removeEventListener('web-vital-metric', handleWebVitals as EventListener);
      window.removeEventListener('custom-metric', handleCustomMetrics as EventListener);
    };
  }, []);

  const getMetricRating = (name: string, value: number | null): 'good' | 'needs-improvement' | 'poor' => {
    if (value === null) return 'good';
    
    switch (name) {
      case 'lcp':
        return value <= 2500 ? 'good' : value <= 4000 ? 'needs-improvement' : 'poor';
      case 'fid':
        return value <= 100 ? 'good' : value <= 300 ? 'needs-improvement' : 'poor';
      case 'cls':
        return value <= 0.1 ? 'good' : value <= 0.25 ? 'needs-improvement' : 'poor';
      case 'fcp':
        return value <= 1800 ? 'good' : value <= 3000 ? 'needs-improvement' : 'poor';
      case 'ttfb':
        return value <= 800 ? 'good' : value <= 1800 ? 'needs-improvement' : 'poor';
      default:
        return 'good';
    }
  };

  const formatValue = (name: string, value: number | null): string => {
    if (value === null) return '-';
    
    switch (name) {
      case 'cls':
        return value.toFixed(3);
      case 'lcp':
      case 'fid':
      case 'fcp':
      case 'ttfb':
        return `${Math.round(value)}ms`;
      default:
        return value.toString();
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h3>📊 Performance Dashboard - Dra. Bruna Vilela</h3>
        <button 
          className={styles.closeBtn}
          onClick={() => setIsVisible(false)}
          aria-label="Fechar dashboard"
        >
          ✕
        </button>
      </div>

      <div className={styles.metricsGrid}>
        <div className={styles.section}>
          <h4>🚀 Core Web Vitals</h4>
          <div className={styles.metrics}>
            {Object.entries(metrics).map(([name, value]) => (
              <div 
                key={name}
                className={`${styles.metric} ${styles[getMetricRating(name, value)]}`}
              >
                <span className={styles.metricName}>{name.toUpperCase()}</span>
                <span className={styles.metricValue}>{formatValue(name, value)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h4>🏥 Métricas Médicas</h4>
          <div className={styles.customMetrics}>
            <div className={styles.customMetric}>
              <span>⏱️ Tempo até Agendamento</span>
              <span>{customMetrics.appointmentButtonTime ? `${Math.round(customMetrics.appointmentButtonTime)}ms` : '-'}</span>
            </div>
            <div className={styles.customMetric}>
              <span>🖼️ Imagens Médicas Carregadas</span>
              <span>{customMetrics.medicalImagesLoaded}</span>
            </div>
            <div className={styles.customMetric}>
              <span>📝 Interações com Formulários</span>
              <span>{customMetrics.formInteractions}</span>
            </div>
            <div className={styles.customMetric}>
              <span>📱 Eventos Offline</span>
              <span>{customMetrics.offlineEvents}</span>
            </div>
            <div className={styles.customMetric}>
              <span>🔔 Push Notifications</span>
              <span>{customMetrics.pushNotificationsSent}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <small>
          💡 Dashboard visível apenas em desenvolvimento ou com ?perf-dashboard na URL
        </small>
      </div>
    </div>
  );
};

export default PerformanceDashboard;
