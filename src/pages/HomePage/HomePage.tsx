import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import SkipLink from '../../components/SkipLink/SkipLink';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
// import LeadCapture from '../../components/LeadCapture/LeadCapture';
import styles from './HomePage.module.css';
import type { WindowWithAnalytics } from '../../types/analytics';

// Definir caminhos das imagens como strings
const fotoAtenciosaPath = 'bruna/dra-bruna-vilela-atenciosa-05';
const fotoAcolhedoraPath = 'bruna/dra-bruna-vilela-acolhedora-10';

const HomePage: React.FC = () => {
  // Page metadata configuration
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "Physician"],
    "name": "Dra. Bruna Vilela - Neuropediatra",
    "alternateName": "Dra. Bruna Vilela - Consultório",
    "description": "Neuropediatra e pediatra em Belo Horizonte, especialista em TDAH, autismo, epilepsia e desenvolvimento infantil. CRMMG 80690 | RQE 66867",
    "url": "https://www.brunavilelaneuroped.com.br",
    "telephone": "+5531973178377",
    "email": "brunavilela.neuroped@gmail.com",
    "medicalSpecialty": ["Neuropediatria", "Pediatria", "Neurologia Infantil"],
    "availableService": [
      {
        "@type": "MedicalService",
        "name": "Avaliação de TDAH",
        "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção e Hiperatividade"
      },
      {
        "@type": "MedicalService", 
        "name": "Avaliação de Autismo",
        "description": "Diagnóstico precoce e acompanhamento do Transtorno do Espectro Autista"
      },
      {
        "@type": "MedicalService",
        "name": "Tratamento de Epilepsia",
        "description": "Diagnóstico e tratamento de epilepsia infantil"
      }
    ],
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
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maria Silva"
        },
        "reviewBody": "A Dra. Bruna tem uma abordagem única que combina conhecimento científico com sensibilidade humana. Ela não apenas trata meu filho, mas educa nossa família inteira."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Carlos Santos"
        },
        "reviewBody": "Finalmente encontramos uma profissional que entende as necessidades especiais do nosso filho. A Dra. Bruna é referência em neuropediatria em Belo Horizonte."
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Dra. Bruna Vilela - Neuropediatra e Pediatra em Belo Horizonte | Especialista em TDAH, Autismo e Epilepsia"
        description="Dra. Bruna Vilela, neuropediatra e pediatra em Belo Horizonte. Especialista em TDAH, autismo, epilepsia e desenvolvimento infantil. Agende sua consulta."
        keywords="neuropediatra, pediatra, belo horizonte"
        canonical="/"
        structuredData={structuredData}
      />
      <SkipLink />
      <Header />
      
      <main id="main-content" className={styles.main}>
        {/* Main content container */}
        <div className={styles.heroAboutContainer}>
          {/* Hero section */}
          <section className={styles.hero}>
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                {/* Professional logo */}
                <div className={styles.heroLogo}>
                  <h2 className={styles.logoTitle} itemProp="name">Dra. Bruna Vilela</h2>
                  <h3 className={styles.logoSubtitle} itemProp="jobTitle">NEUROLOGISTA INFANTIL</h3>
                  <h4 className={styles.logoCredentials} itemProp="identifier">CRMMG 80690 | RQE 66867</h4>
                </div>
                
                <h1 className={styles.heroTitle}>
                  Neuropediatra Cientista. Cuidando do desenvolvimento do seu filho com a precisão da ciência e o calor do acolhimento.
                </h1>
                <p className={styles.heroSubtitle}>
                  Respostas claras e caminhos seguros para o potencial máximo de cada criança.
                </p>
                <div className={styles.heroActions}>
                  <a 
                    href="https://wa.me/5531973178377" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.ctaPrimary}
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as WindowWithAnalytics).trackWhatsAppClick) {
                        (window as WindowWithAnalytics).trackWhatsAppClick();
                      }
                    }}
                  >
                    Agendar Consulta Online
                  </a>
                  <Link to="/sobre" className={styles.ctaSecondary} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Conheça Minha Trajetória
                  </Link>
                </div>
              </div>
              
              {/* Hero image */}
              <div className={styles.heroImageContainer}>
                <ResponsiveImage 
                  src={fotoAtenciosaPath}
                  alt="Dra. Bruna Vilela, neuropediatra atenciosa em Belo Horizonte, especialista em TDAH e autismo infantil"
                  className={styles.heroImage}
                  loading="eager"
                  priority={true}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                  useResponsive={true}
                  showSkeleton={true}
                  skeletonHeight="500px"
                />
              </div>
            </div>
          </section>

          {/* About section */}
          <FadeInSection direction="up" threshold={0.8}>
            <section className={styles.about}>
              <div className={styles.container}>
                <div className={styles.aboutContent}>
                                {/* About section image */}
                <div className={styles.aboutImageContainer}>
                  <ResponsiveImage 
                    src={fotoAcolhedoraPath}
                    alt="Dra. Bruna Vilela, neuropediatra e pediatra, acolhendo e cuidando com dedicação"
                    className={styles.aboutImage}
                    loading="eager"
                    priority={true}
                    sizes="(max-width: 480px) 100vw, (max-width: 768px) 70vw, (max-width: 1200px) 40vw, 35vw"
                    useResponsive={true}
                    showSkeleton={true}
                    skeletonHeight="400px"
                  />
                </div>
                  
                  <div className={styles.aboutTextSection}>
                    <h2 className={styles.sectionTitle}>Sobre Mim</h2>
                    <p className={styles.aboutText}>
                      Mais de 10 anos dedicados a unir a pesquisa de ponta em neuropediatria com a prática clínica diária. 
                      Minha missão é traduzir a complexidade da ciência em estratégias práticas e eficazes para o desenvolvimento 
                      do seu filho, sempre com um olhar atento e humano para as necessidades únicas da sua família.
                    </p>
                    <Link to="/sobre" className={styles.aboutLink} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      Conheça Minha História Completa →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </FadeInSection>
        </div>

        {/* Testimonials section */}
        <FadeInSection direction="up" threshold={0.1} delay={200}>
          <section className={styles.testimonials}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>O Que Dizem Sobre Mim</h2>
              <div className={styles.testimonialsGrid}>
                <div className={styles.testimonial}>
                  <p className={styles.testimonialText}>
                    "A Dra. Bruna tem uma abordagem única que combina conhecimento científico com sensibilidade humana. 
                    Ela não apenas trata meu filho, mas educa nossa família inteira."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <strong>Maria Silva</strong>
                    <span>Mãe do João, 8 anos</span>
                  </div>
                </div>
                
                <div className={styles.testimonial}>
                  <p className={styles.testimonialText}>
                    "Finalmente encontramos uma profissional que entende as necessidades especiais do nosso filho. 
                    A Dra. Bruna é referência em neuropediatria em Belo Horizonte."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <strong>Carlos Santos</strong>
                    <span>Pai da Ana, 6 anos</span>
                  </div>
                </div>
                
                <div className={styles.testimonial}>
                  <p className={styles.testimonialText}>
                    "A diferença que a Dra. Bruna fez na vida do nosso filho é incrível. 
                    Sua abordagem científica e humanizada transformou nossa perspectiva."
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <strong>Patrícia Costa</strong>
                    <span>Mãe do Pedro, 10 anos</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Blog section */}
        <section className={styles.blog}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Informação que Transforma: Artigos do Blog</h2>
            <p className={styles.blogSubtitle}>
              Conteúdo científico traduzido para uma linguagem acessível e empática
            </p>
            
            <div className={styles.blogGrid}>
              <article className={styles.blogCard}>
                <div className={styles.blogCardContent}>
                  <h3 className={styles.blogCardTitle}>
                    TDAH: Além dos Rótulos
                  </h3>
                  <p className={styles.blogCardExcerpt}>
                    Entenda o que realmente significa o diagnóstico de TDAH e como podemos trabalhar juntos 
                    para o desenvolvimento pleno do seu filho.
                  </p>
                  <Link to="/blog/tdah-alem-dos-rotulos" className={styles.blogCardLink}>
                    Ler Artigo →
                  </Link>
                </div>
              </article>

              <article className={styles.blogCard}>
                <div className={styles.blogCardContent}>
                  <h3 className={styles.blogCardTitle}>
                    Sinais de Autismo no Primeiro Ano de Vida
                  </h3>
                  <p className={styles.blogCardExcerpt}>
                    Identifique os primeiros sinais e saiba quando buscar avaliação especializada 
                    para o desenvolvimento do seu bebê.
                  </p>
                  <Link to="/blog/sinais-autismo-primeiro-ano" className={styles.blogCardLink}>
                    Ler Artigo →
                  </Link>
                </div>
              </article>

              <article className={styles.blogCard}>
                <div className={styles.blogCardContent}>
                  <h3 className={styles.blogCardTitle}>
                    O Papel da Nutrição no Desenvolvimento Cerebral
                  </h3>
                  <p className={styles.blogCardExcerpt}>
                    Descubra como a alimentação pode influenciar positivamente o desenvolvimento 
                    neurológico do seu filho.
                  </p>
                  <Link to="/blog/nutricao-desenvolvimento-cerebral" className={styles.blogCardLink}>
                    Ler Artigo →
                  </Link>
                </div>
              </article>
            </div>

            <div className={styles.blogCTA}>
              <Link to="/blog" className={styles.blogCTALink} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Ver Todos os Artigos →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA section */}
        <section className={styles.finalCTA}>
          <div className={styles.container}>
            <div className={styles.finalCTAContent}>
              <h2 className={styles.finalCTATitle}>
                Pronto para Transformar a Vida do Seu Filho?
              </h2>
              <p className={styles.finalCTAText}>
                Agende uma consulta e descubra como a neuropediatria científica pode fazer a diferença 
                no desenvolvimento do seu filho.
              </p>
              <a 
                href="https://wa.me/5531973178377" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.finalCTAButton}
                onClick={() => {
                  if (window.trackAppointment) {
                    window.trackAppointment('home_final_cta');
                  }
                }}
              >
                Agendar Consulta Agora
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lead Capture - ativado por scroll aos 60% da página */}
      {/* <LeadCapture 
        trigger="scroll"
        scrollPercentage={60}
        title="🌟 Primeira Consulta com Desconto Especial!"
        subtitle="Avaliação neurológica completa para seu filho com a Dra. Bruna Vilela"
        buttonText="Quero Agendar Agora"
        incentive="✅ Consulta presencial em Belo Horizonte&#10;✅ Mais de 10 anos de experiência&#10;✅ Atendimento humanizado e acolhedor&#10;✅ Especialista em TDAH, TEA e Desenvolvimento"
        formFields={['nome', 'email', 'telefone', 'interesse']}
      /> */}

      <Footer />
    </>
  );
};

export default HomePage; 