import React from 'react';
import styles from './WhatsAppFloat.module.css';
import whatsappIcon from '../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png';

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5531983501417';
    const message = 'Olá! Gostaria de agendar uma consulta com a Dra. Bruna Vilela.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={styles.whatsappFloat} onClick={handleWhatsAppClick}>
      <img 
        src={whatsappIcon} 
        alt="WhatsApp - Agende sua consulta" 
        className={styles.whatsappIcon}
      />
    </div>
  );
};

export default WhatsAppFloat; 