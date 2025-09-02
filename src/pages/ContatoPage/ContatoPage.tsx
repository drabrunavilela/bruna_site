import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
// import AgendamentoForm from '../../components/Agendamento/AgendamentoForm'; // Temporariamente desabilitado até backend ficar pronto
import styles from './ContatoPage.module.css';
import fotoNeuropediatra12 from "../../assets/images/bruna/dra-bruna-vilela-neuropediatra-12.webp";
import logoInstagram from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Instagram.png";
import logoFacebook from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Facebook.png";
import logoDoctoralia from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Doctoralia.png";
import whatsappIcon from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png";
import type { WindowWithAnalytics } from '../../types/analytics';

const ContatoPage: React.FC = () => {
  // Estados do formulário
  const [formData, setFormData] = React.useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    aceitePolitica: false
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Função para enviar formulário para WhatsApp
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.aceitePolitica) {
      alert('Por favor, aceite a Política de Privacidade.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Formatar mensagem para WhatsApp
      const mensagem = `🆕 *NOVO CONTATO VIA SITE*

👤 *Nome:* ${formData.nome}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.telefone || 'Não informado'}
📋 *Assunto:* ${formData.assunto}
💬 *Mensagem:* ${formData.mensagem}

🌐 *Enviado de:* brunavilelaneuroped.com.br
📅 *Data:* ${new Date().toLocaleDateString('pt-BR')}
⏰ *Hora:* ${new Date().toLocaleTimeString('pt-BR')}`;

      // Codificar mensagem para URL
      const mensagemCodificada = encodeURIComponent(mensagem);
      
      // Número do WhatsApp da Bruna
      const numeroWhatsApp = '5531973178377';
      
      // Criar link do WhatsApp
      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
      
      // Rastrear evento no GTM
      if (window.trackAppointment) {
        window.trackAppointment('form_contact');
      }

      // Abrir WhatsApp
      window.open(linkWhatsApp, '_blank');
      
      // Limpar formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
        aceitePolitica: false
      });

      // Mostrar mensagem de sucesso
      alert('Mensagem enviada com sucesso! Abrindo WhatsApp...');

    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data for Contact
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Dra. Bruna Vilela - Consultório",
    "description": "Neuropediatra e pediatra em Belo Horizonte, especialista em TDAH, autismo e desenvolvimento infantil",
    "url": "https://www.brunavilelaneuroped.com.br/contato",
    "telephone": "+5531973178377",
    "email": "brunavilela.neuroped@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Raja Gabaglia 2000, Torre 1, Sala 313",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.9167,
      "longitude": -43.9345
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+5531973178377",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "additionalProperty": {
      "@type": "PropertyValue",
      "name": "secondaryTelephone",
      "value": "+553132919009"
    }
  };

  return (
    <>
      <SEO 
        title="Contato - Dra. Bruna Vilela Neuropediatra em Belo Horizonte | Agende sua Consulta"
        description="Entre em contato com a Dra. Bruna Vilela, neuropediatra em Belo Horizonte. Agende sua consulta, tire suas dúvidas via WhatsApp, telefone ou formulário. Localização e horários de atendimento."
        keywords="neuropediatra, contato, agendar consulta"
        canonical="/contato"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Entre em Contato: Seu Caminho para o Cuidado Especializado" */}
        <section className={styles.heroContactPage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Entre em Contato: Seu Caminho para o Cuidado Especializado
              </h1>
              <p className={styles.heroSubtitle}>
                Agende sua consulta, tire suas dúvidas ou nos visite. Estamos prontos para acolher você e sua família com a atenção e expertise que merecem.
              </p>
              <a 
                href="https://wa.me/5531973178377" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.buttonPrimary}
              >
                Agendar Consulta Online
              </a>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src={fotoNeuropediatra12}
                alt="Dra. Bruna Vilela em consultório, demonstrando cuidado e atenção"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. Sistema de Agendamento Online - TEMPORARIAMENTE DESABILITADO ATÉ BACKEND FICAR PRONTO */}
        {/* 
        <section className={`${styles.sectionPadded} ${styles.sectionHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>🗓️ Agendamento Online</h2>
              <p className={styles.paragraph}>
                Agende sua consulta de forma rápida e prática através do nosso sistema online. 
                Escolha o dia e horário que melhor se adequa à sua agenda.
              </p>
              <AgendamentoForm />
            </div>
          </div>
        </section>
        */}

        {/* 3. Agendamento via WhatsApp */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>📱 Agendamento via WhatsApp</h2>
            <div className={styles.bookingOptionsGrid}>
              <div className={styles.bookingOptionCard}>
                <div className={styles.whatsappIcon}>
                  <img src={whatsappIcon} alt="WhatsApp" />
                </div>
                <h3 className={styles.cardTitle}>WhatsApp</h3>
                <p className={styles.cardDescription}>
                  Agende sua consulta diretamente pelo WhatsApp
                </p>
                <div className={styles.contactInfo}>
                  <span className={styles.icon}>📱</span> (31) 97317-8377
                </div>
                <a 
                  href="https://wa.me/5531973178377" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buttonPrimary}
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as WindowWithAnalytics).trackWhatsAppClick) {
                      (window as WindowWithAnalytics).trackWhatsAppClick();
                    }
                  }}
                >
                  Agendar via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Fale Conosco (Formulário de Contato) */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Envie Uma Mensagem</h2>
              <p className={styles.paragraph}>
                Se preferir, preencha o formulário abaixo e retornaremos o mais breve possível.
              </p>
              <form className={styles.contactForm} onSubmit={handleFormSubmit}>
                <input 
                  type="text" 
                  placeholder="Nome Completo" 
                  className={styles.formInput}
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  required
                />
                <input 
                  type="email" 
                  placeholder="E-mail" 
                  className={styles.formInput}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Telefone (Opcional)" 
                  className={styles.formInput}
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Assunto" 
                  className={styles.formInput}
                  value={formData.assunto}
                  onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                  required
                />
                <textarea 
                  placeholder="Sua Mensagem" 
                  className={styles.formTextarea}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  required
                ></textarea>
                <div className={styles.privacyCheckbox}>
                  <input 
                    type="checkbox" 
                    id="privacy-policy" 
                    checked={formData.aceitePolitica}
                    onChange={(e) => setFormData({...formData, aceitePolitica: e.target.checked})}
                    required
                  />
                  <label htmlFor="privacy-policy">
                    Li e aceito a <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>.
                  </label>
                </div>
                <button type="submit" className={styles.buttonPrimary} disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 5. Nossa Localização e Horários */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Onde Nos Encontrar</h2>
            <div className={styles.contactDetailsGrid}>
              <div className={styles.contactInfoBlock}>
                <h3 className={styles.blockTitle}>Endereço</h3>
                <p className={styles.infoText}>
                  <span className={styles.icon}>📍</span> Avenida Raja Gabaglia 2000, Torre 1, Sala 313<br />
                  Clínica Pediátrica Laura Drummond<br />
                  Bairro Belvedere, Belo Horizonte - MG
                </p>
                <a 
                  href="https://maps.app.goo.gl/AvenidaRajaGabaglia2000BeloHorizonte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buttonLink}
                >
                  Ver no Google Maps →
                </a>
              </div>
              <div className={styles.contactInfoBlock}>
                <h3 className={styles.blockTitle}>Horário de Atendimento</h3>
                <p className={styles.infoText}>
                  <span className={styles.icon}>⏰</span> Segunda a Sexta: 08h00 - 18h00
                </p>
                <p className={styles.infoText}>Sábado e Domingo: Fechado</p>
              </div>
              <div className={styles.contactInfoBlock}>
                <h3 className={styles.blockTitle}>Email</h3>
                <p className={styles.infoText}>
                  <span className={styles.icon}>✉️</span> brunavilela.neuroped@gmail.com
                </p>
              </div>
            </div>
            <div className={styles.mapEmbed}>
              {/* Google Maps Embed Code */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.609536879893!2d-43.94056208554743!3d-19.923838642959885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699863a3d5f307%3A0x6b5e1a7b0a8c2d8!2sRua%20Exemplo%2C%20123%20-%20Bairro%20Central%2C%20Belo%20Horizonte%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1678888888888!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy"
                title="Localização da Dra. Bruna Vilela"
              ></iframe>
            </div>
          </div>
        </section>

        {/* 6. Redes Sociais */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={`${styles.narrowContent} ${styles.textCenter}`}>
              <h2 className={styles.sectionTitle}>Conecte-se Conosco</h2>
              <p className={styles.paragraph}>
                Siga a Dra. Bruna nas redes sociais para conteúdos diários, atualizações e interação.
              </p>
              <div className={styles.socialIconsGrid}>
                <a 
                  href="https://instagram.com/brunavilela.neuroped" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialIconLink}
                >
                  <img 
                    src={logoInstagram} 
                    alt="Instagram" 
                    className={styles.socialIcon}
                  />
                  <span>Instagram</span>
                </a>
                <a 
                  href="#" 
                  className={styles.socialIconLink}
                  style={{ opacity: 0.6, pointerEvents: 'none' }}
                  title="Página em breve - esta semana"
                >
                  <img 
                    src={logoFacebook} 
                    alt="Facebook" 
                    className={styles.socialIcon}
                  />
                  <span>Facebook</span>
                  <small style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
                    Em breve
                  </small>
                </a>
                <a 
                  href="https://www.doctoralia.com.br/bruna-vilela-2/neurologista-pediatrico-pediatra/belo-horizonte" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialIconLink}
                >
                  <img 
                    src={logoDoctoralia} 
                    alt="Doctoralia" 
                    className={styles.socialIcon}
                  />
                  <span>Doctoralia</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ContatoPage; 