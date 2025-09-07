import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './WhatsAppFloat.module.css';
import type { WindowWithAnalytics } from '../../types/analytics';

interface WhatsAppFloatProps {
  customMessage?: string;
  source?: string;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ customMessage, source }) => {
  const location = useLocation();
  const phoneNumber = '5531973178377';
  
  // Mensagens contextuais por página
  const getContextualMessage = () => {
    if (customMessage) return customMessage;
    
    const path = location.pathname;
    const messages: Record<string, string> = {
      '/': 'Olá! Gostaria de agendar uma primeira consulta com a Dra. Bruna Vilela.',
      '/sobre': 'Olá! Gostaria de conhecer mais sobre o trabalho da Dra. Bruna Vilela.',
      '/servicos': 'Olá! Tenho interesse nos serviços de neuropediatria da Dra. Bruna.',
      '/servicos/tdah': 'Olá! Gostaria de uma consulta sobre TDAH com a Dra. Bruna Vilela.',
      '/servicos/tea': 'Olá! Preciso de uma avaliação para Transtorno do Espectro Autista.',
      '/servicos/epilepsia': 'Olá! Gostaria de uma consulta sobre epilepsia infantil.',
      '/servicos/atrasos': 'Olá! Tenho dúvidas sobre atrasos no desenvolvimento infantil.',
      '/servicos/cefaleia': 'Olá! Meu filho tem dores de cabeça frequentes. Gostaria de uma consulta.',
      '/servicos/segunda-opiniao': 'Olá! Gostaria de uma segunda opinião médica com a Dra. Bruna.',
      '/blog': 'Olá! Li um artigo no blog e gostaria de saber mais.',
      '/contato': 'Olá! Gostaria de agendar uma consulta com a Dra. Bruna Vilela.',
      '/glossario': 'Olá! Tenho dúvidas médicas e gostaria de uma consulta.',
      '/politica-privacidade': 'Olá! Gostaria de mais informações sobre os serviços.'
    };
    
    return messages[path] || 'Olá! Gostaria de agendar uma consulta com a Dra. Bruna Vilela.';
  };

  const message = getContextualMessage();
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    // Analytics tracking com contexto
    const analyticSource = source || location.pathname || 'unknown';
    
    // Track WhatsApp click if analytics is available
    if (typeof (window as WindowWithAnalytics).trackWhatsAppClick === 'function') {
      (window as WindowWithAnalytics).trackWhatsAppClick();
    }
    
    // Analytics tracking only
    
    // Track no Google Analytics se disponível
    if (typeof window !== 'undefined' && (window as WindowWithAnalytics).gtag) {
      (window as WindowWithAnalytics).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: analyticSource,
        page_path: location.pathname
      });
    }
  };

  // Verificar se está em horário comercial (8h às 18h, seg-sex)
  const isBusinessHours = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = domingo, 6 = sábado
    
    return day >= 1 && day <= 5 && hour >= 8 && hour < 18;
  };

  const businessHours = isBusinessHours();

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      onClick={handleClick}
      title={`Conversar no WhatsApp: ${message}`}
      aria-label={`Abrir WhatsApp para conversar com Dra. Bruna Vilela - ${message}`}
      role="button"
    >
      <img 
        src="/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png" 
        alt="WhatsApp - Agende sua consulta"
        width="48"
        height="48"
        decoding="async"
      />
      
      {/* Tooltip com informação contextual */}
      <div className={styles.tooltip}>
        <span className={styles.tooltipText}>
          {businessHours 
            ? '💬 Clique para agendar agora!' 
            : '💬 Envie sua mensagem! Resposta em até 2h.'
          }
        </span>
      </div>
      
      {/* Indicador de status opcional */}
      {businessHours && (
        <div className={styles.statusIndicator}>
          <span className={styles.onlineStatus}>🟢 Online</span>
        </div>
      )}
    </a>
  );
};

export default WhatsAppFloat; 