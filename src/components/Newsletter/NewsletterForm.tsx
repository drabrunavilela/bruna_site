import React, { useState } from 'react';
import styles from './NewsletterForm.module.css';

interface NewsletterFormProps {
  variant?: 'inline' | 'modal' | 'sidebar';
  onSuccess?: () => void;
  onClose?: () => void;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ 
  variant = 'inline',
  onSuccess,
  onClose 
}) => {
  const [email, setEmail] = useState('');
  const [interesse, setInteresse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const interesseOptions = [
    { value: 'tdah', label: 'TDAH - Déficit de Atenção e Hiperatividade' },
    { value: 'tea', label: 'TEA - Transtorno do Espectro Autista' },
    { value: 'epilepsia', label: 'Epilepsia Infantil' },
    { value: 'atrasos', label: 'Atrasos no Desenvolvimento' },
    { value: 'cefaleias', label: 'Cefaleias e Enxaquecas' },
    { value: 'geral', label: 'Neuropediatria em Geral' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Usar Formspree (serviço gratuito que não requer backend)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          interesse,
          source: 'Newsletter Signup',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        setInteresse('');
        
        // Google Analytics event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'newsletter_signup', {
            event_category: 'engagement',
            event_label: interesse || 'geral',
            custom_parameters: {
              interesse: interesse || 'geral',
              source: 'newsletter_form'
            }
          });
        }

        if (onSuccess) {
          setTimeout(onSuccess, 1500);
        }
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (err) {
      setError('Erro ao se inscrever. Tente novamente.');
      console.error('Newsletter signup error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`${styles.newsletterForm} ${styles[variant]}`}>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✅</div>
          <h3>Inscrição realizada com sucesso!</h3>
          <p>Em breve você receberá conteúdos exclusivos sobre {interesse ? interesseOptions.find(opt => opt.value === interesse)?.label : 'neuropediatria'}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.newsletterForm} ${styles[variant]}`}>
      {variant === 'modal' && onClose && (
        <button 
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
      )}
      
      <div className={styles.header}>
        <h3 className={styles.title}>
          📧 Receba Conteúdo Exclusivo
        </h3>
        <p className={styles.description}>
          Dicas, orientações e novidades sobre neuropediatria direto no seu e-mail.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label htmlFor="newsletter-email" className={styles.label}>
            E-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="newsletter-interesse" className={styles.label}>
            Principal interesse
          </label>
          <select
            id="newsletter-interesse"
            value={interesse}
            onChange={(e) => setInteresse(e.target.value)}
            className={styles.select}
            required
          >
            <option value="">Selecione um tema</option>
            {interesseOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !email || !interesse}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Inscrevendo...' : 'Quero Receber'}
        </button>

        <p className={styles.privacy}>
          Seus dados estão seguros. Não enviamos spam e você pode cancelar a qualquer momento.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
