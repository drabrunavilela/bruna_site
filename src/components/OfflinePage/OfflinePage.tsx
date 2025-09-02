import React from 'react';
import styles from './OfflinePage.module.css';

const OfflinePage: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5531983501417?text=Olá, gostaria de agendar uma consulta com a Dra. Bruna Vilela', '_blank');
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className={styles.offlineContainer}>
      <div className={styles.offlineContent}>
        <div className={styles.iconContainer}>
          <div className={styles.offlineIcon}>📡</div>
        </div>
        
        <h1 className={styles.title}>Você está offline</h1>
        
        <p className={styles.description}>
          Parece que você perdeu a conexão com a internet. 
          Não se preocupe, algumas funcionalidades ainda estão disponíveis!
        </p>

        <div className={styles.availableActions}>
          <h2 className={styles.actionsTitle}>Disponível offline:</h2>
          <ul className={styles.actionsList}>
            <li className={styles.actionItem}>
              📞 Contato direto via WhatsApp
            </li>
            <li className={styles.actionItem}>
              📍 Informações de localização da clínica
            </li>
            <li className={styles.actionItem}>
              🕒 Horários de funcionamento
            </li>
            <li className={styles.actionItem}>
              📋 Informações sobre especialidades
            </li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
          <h3 className={styles.contactTitle}>Contato da Dra. Bruna Vilela</h3>
          <div className={styles.contactDetails}>
            <p className={styles.contactItem}>
              <strong>📱 WhatsApp:</strong> (31) 98350-1417
            </p>
            <p className={styles.contactItem}>
              <strong>📧 Email:</strong> brunavilela.neuroped@gmail.com
            </p>
            <p className={styles.contactItem}>
              <strong>📍 Endereço:</strong> Av. Raja Gabaglia 2000, Torre 1 Sala 313<br />
              Clínica Pediátrica Laura Drummond, Belo Horizonte - MG
            </p>
            <p className={styles.contactItem}>
              <strong>🕒 Horário:</strong> Segunda a Sexta, 8h às 18h
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <button 
            className={styles.whatsappButton}
            onClick={handleWhatsAppClick}
          >
            <span className={styles.buttonIcon}>💬</span>
            Conversar no WhatsApp
          </button>
          
          <button 
            className={styles.retryButton}
            onClick={handleRetry}
          >
            <span className={styles.buttonIcon}>🔄</span>
            Tentar novamente
          </button>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Esta página funciona offline para garantir que você sempre tenha acesso 
            às informações essenciais de contato.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
