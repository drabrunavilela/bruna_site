import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './ContatoPage.module.css';
import fotoNeuropediatra12 from "../../assets/images/bruna/dra-bruna-vilela-neuropediatra-12.webp";
import logoInstagram from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Instagram.png";
import logoFacebook from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Facebook.png";
import logoDoctoralia from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Doctoralia.png";
import whatsappIcon from "../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png";
import type { WindowWithAnalytics } from '../../types/analytics';

const ContatoPage: React.FC = () => {
  // Structured Data for Contact
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Dra. Bruna Vilela - Consultório",
    "description": "Neuropediatra e pediatra em Belo Horizonte, especialista em TDAH, autismo e desenvolvimento infantil",
    "url": "https://drabrunavilela.com.br/contato",
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

        {/* 2. Agendamento de Consultas */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Agendamento de Consultas</h2>
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

        {/* 3. Fale Conosco (Formulário de Contato) */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Envie Uma Mensagem</h2>
              <p className={styles.paragraph}>
                Se preferir, preencha o formulário abaixo e retornaremos o mais breve possível.
              </p>
              <form className={styles.contactForm}>
                <input type="text" placeholder="Nome Completo" className={styles.formInput} />
                <input type="email" placeholder="E-mail" className={styles.formInput} />
                <input type="tel" placeholder="Telefone (Opcional)" className={styles.formInput} />
                <input type="text" placeholder="Assunto" className={styles.formInput} />
                <textarea placeholder="Sua Mensagem" className={styles.formTextarea}></textarea>
                <div className={styles.privacyCheckbox}>
                  <input type="checkbox" id="privacy-policy" />
                  <label htmlFor="privacy-policy">
                    Li e aceito a <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>.
                  </label>
                </div>
                <button type="submit" className={styles.buttonPrimary}>
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* 4. Nossa Localização e Horários */}
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

        {/* 5. Redes Sociais */}
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