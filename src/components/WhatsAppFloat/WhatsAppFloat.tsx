import React from 'react';
import styles from './WhatsAppFloat.module.css';
import whatsappIcon from '../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png';

const WhatsAppFloat: React.FC = () => {
  const phoneNumber = '5531973178377';
  const message = 'Olá! Gostaria de agendar uma consulta com a Dra. Bruna Vilela.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    // Track WhatsApp click if analytics is available
    if (typeof (window as any).trackWhatsAppClick === 'function') {
      (window as any).trackWhatsAppClick();
    }
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      onClick={handleClick}
      aria-label="Agendar consulta via WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp - Agende sua consulta" />
    </a>
  );
};

export default WhatsAppFloat; 