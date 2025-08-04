import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './HomePage.module.css';

// Importar imagens
import logoProfissional from '../../assets/images/identidade-visual/logo-dra-bruna-vilela-profissional.webp';
import fotoAtenciosa from '../../assets/images/bruna/dra-bruna-vilela-atenciosa-05.webp';
import fotoAcolhedora from '../../assets/images/bruna/dra-bruna-vilela-acolhedora-10.webp';

const HomePage: React.FC = () => {
  // Structured Data for Home Page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Dra. Bruna Vilela - Consultório",
    "description": "Neuropediatra e pediatra em Belo Horizonte, especialista em TDAH, autismo e desenvolvimento infantil",
    "url": "https://drabrunavilela.com.br",
    "telephone": "+5531983501417",
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
      "telephone": "+5531983501417",
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
        keywords="neuropediatra, pediatra, belo horizonte, TDAH, autismo, epilepsia, desenvolvimento infantil, neuropediatria, consulta neuropediátrica"
        canonical="/"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* Container do Degradê Lilás (Hero + Sobre) */}
        <div className={styles.heroAboutContainer}>
          {/* Seção Hero */}
          <section className={styles.hero}>
            <div className={styles.heroContainer}>
              <div className={styles.heroContent}>
                {/* Logo Profissional */}
                <div className={styles.heroLogo}>
                  <img 
                    src={logoProfissional}
                    alt="Logotipo profissional Dra. Bruna Vilela - Neuropediatra e Pediatra"
                    className={styles.heroLogoImage}
                  />
                </div>
                
                <h1 className={styles.heroTitle}>
                  Neuropediatra Cientista. Cuidando do desenvolvimento do seu filho com a precisão da ciência e o calor do acolhimento.
                </h1>
                <p className={styles.heroSubtitle}>
                  Respostas claras e caminhos seguros para o potencial máximo de cada criança.
                </p>
                <div className={styles.heroActions}>
                  <a 
                    href="https://wa.me/5531983501417" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.ctaPrimary}
                  >
                    Agendar Consulta
                  </a>
                  <Link to="/sobre" className={styles.ctaSecondary} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Conheça Minha Trajetória
                  </Link>
                </div>
              </div>
              
              {/* Foto da Dra. Bruna no Hero */}
              <div className={styles.heroImageContainer}>
                <img 
                  src={fotoAtenciosa}
                  alt="Dra. Bruna Vilela atenciosa, neuropediatra e pediatra em Belo Horizonte"
                  className={styles.heroImage}
                  loading="eager"
                  fetchPriority="high"
                  width="500"
                  height="600"
                />
              </div>
            </div>
          </section>

          {/* Seção Sobre Mim (Resumo) */}
          <section className={styles.about}>
            <div className={styles.container}>
              <div className={styles.aboutContent}>
                              {/* Foto da Dra. Bruna na seção Sobre */}
              <div className={styles.aboutImageContainer}>
                <img 
                  src={fotoAcolhedora}
                  alt="Dra. Bruna Vilela, neuropediatra e pediatra, acolhendo e cuidando com dedicação"
                  className={styles.aboutImage}
                  loading="lazy"
                  width="400"
                  height="500"
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
        </div>

        {/* Seção Depoimentos */}
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

        {/* Seção Blog (Chamada) */}
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

        {/* Seção CTA Final */}
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
                href="https://wa.me/5531983501417" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.finalCTAButton}
              >
                Agendar Consulta Agora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage; 