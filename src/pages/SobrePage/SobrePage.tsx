import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './SobrePage.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fotoAtenciosa06 from "../../assets/images/bruna/dra-bruna-vilela-atenciosa-06.webp";
import fotoConsultorio03 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-03.webp";
import fotoNeuropediatra17 from "../../assets/images/bruna/dra-bruna-vilela-neuropediatra-17.webp";
import fotoProfissional07 from "../../assets/images/bruna/dra-bruna-vilela-profissional-07.webp";
import type { WindowWithAnalytics } from '../../types/analytics';

const SobrePage: React.FC = () => {
  // Carousel images data
  const carouselImages = [
    { src: fotoAtenciosa06, alt: 'Dra. Bruna Vilela atenciosa no consultório' },
    { src: fotoConsultorio03, alt: 'Dra. Bruna Vilela em ambiente profissional' },
    { src: fotoNeuropediatra17, alt: 'Dra. Bruna Vilela neuropediatra em atendimento' },
  ];

  // Carousel configuration
  const settings = {
    dots: true, // Show page indicators
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-play
    autoplaySpeed: 3000, // Time between slides (3 seconds)
    fade: true, // Smooth transition effect (fade)
  };

  // Page metadata configuration
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dra. Bruna Vilela",
    "jobTitle": "Neuropediatra e Pediatra",
    "description": "Especialista em neuropediatria e pediatria com abordagem científica e humanizada",
    "url": "https://www.brunavilelaneuroped.com.br/sobre",
    "image": "https://www.brunavilelaneuroped.com.br/src/assets/images/bruna/dra-bruna-vilela-profissional-07.webp",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "addressCountry": "BR"
    },
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Consultório Dra. Bruna Vilela"
    },
    "knowsAbout": [
      "Neuropediatria",
      "Pediatria",
      "TDAH",
      "Autismo",
      "Epilepsia",
      "Desenvolvimento Infantil",
      "Doenças Raras"
    ],
    "hasCredential": [
      "Especialização em Neuropediatria",
      "Especialização em Pediatria",
      "Membro da Sociedade Brasileira de Neuropediatria"
    ],
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
        "reviewBody": "A Dra. Bruna tem uma capacidade incrível de explicar coisas complexas de forma simples. Ela não só trata meu filho, mas nos orienta como família."
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
        "reviewBody": "A Dra. Bruna é mais que uma médica, é uma parceira na nossa jornada. Sua abordagem científica e humana fez toda a diferença."
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Sobre Dra. Bruna Vilela - Neuropediatra e Pediatra em Belo Horizonte | Trajetória e Especializações"
        description="Conheça a trajetória da Dra. Bruna Vilela, neuropediatra e pediatra em Belo Horizonte. Especialista em TDAH, autismo, epilepsia e desenvolvimento infantil com abordagem científica e humanizada."
        keywords="neuropediatra, pediatra, belo horizonte"
        canonical="/sobre"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Sobre a Dra. Bruna Vilela
              </h1>
              <p className={styles.heroSubtitle}>
                Neuropediatra e pediatra dedicada ao cuidado integral da criança, com foco no desenvolvimento neurológico e no bem-estar das famílias.
              </p>
            </div>
            <div className={styles.heroImageContainer}>
              <img 
                src={fotoProfissional07}
                alt="Dra. Bruna Vilela, neuropediatra e pediatra em Belo Horizonte"
                className={styles.heroImage}
                loading="eager"
                fetchPriority="high"
                width="500"
                height="600"
              />
            </div>
          </div>
        </section>

        {/* Photo carousel */}
        <section className={styles.photoCarouselSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Momentos da Minha Prática</h2>
            <div className={styles.carouselWrapper}>
              <Slider {...settings}>
                {carouselImages.map((image, index) => (
                  <div key={index} className={styles.carouselImageContainer}>
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className={styles.carouselImage} 
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>

        {/* 2. Professional journey */}
        <section id="minha-trajetoria" className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>
                Minha Jornada: Mais de Uma Década de Cuidado Especializado
              </h2>
              <p className={styles.paragraph}>
                Olá! Sou a Dra. Bruna Vilela, neuropediatra apaixonada por desvendar o potencial único de cada criança. 
                Há <strong>mais de 10 anos</strong>, dedico-me a unir a <strong>pesquisa de ponta em neuropediatria</strong> 
                com uma <strong>prática clínica diária humanizada e acolhedora</strong>. Minha missão é traduzir a complexidade 
                da ciência em estratégias práticas, eficazes e, acima de tudo, empáticas, focadas no desenvolvimento do seu filho.
              </p>
              <p className={styles.paragraph}>
                Acredito que o <strong>desenvolvimento infantil</strong> é uma jornada única para cada família, e meu propósito 
                é oferecer <strong>respostas claras e caminhos seguros</strong> para que seu filho atinja seu potencial máximo. 
                Cada sorriso, cada nova conquista, é a motivação que me impulsiona a buscar a excelência e a inovação no cuidado.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Education and expertise */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>
              Formação Sólida, Expertise Abrangente
            </h2>
            <div className={styles.contentColumns}>
              <div className={styles.column}>
                <p className={styles.paragraph}>
                  Minha trajetória profissional é pautada pela busca constante do conhecimento e pela excelência no cuidado. 
                  Sou <strong>Médica formada pela Universidade Federal de Juiz de Fora (UFJF)</strong>, com 
                  <strong>Residência em Pediatria</strong> e <strong>Especialização em Neurologia Infantil no Hospital Infantil João Paulo II</strong> 
                  (referência em doenças raras em Minas Gerais). Atualmente, aprofundo meus estudos com uma 
                  <strong>Pós-graduação em Neurodesenvolvimento e seus Transtornos</strong>, mantendo-me na vanguarda da ciência.
                </p>
                <p className={styles.paragraph}>
                  Mantenho-me em constante atualização, participando ativamente de congressos, workshops e pesquisas nacionais 
                  e internacionais, garantindo que as famílias que atendo recebam o que há de mais inovador e seguro em 
                  <strong>neuropediatria</strong>.
                </p>
              </div>
              <div className={styles.column}>
                <h3 className={styles.h3ListTitle}>
                  Minhas Áreas de Atuação Incluem:
                </h3>
                <ul className={styles.bulletList}>
                  <li><strong>Neuropediatria Geral:</strong> Cuidado abrangente para o desenvolvimento neurológico infantil.</li>
                  <li><strong>Pediatria Geral:</strong> Acompanhamento completo da saúde da criança.</li>
                  <li><strong>Diagnóstico e Manejo de Doenças Raras:</strong> Expertise em condições neurológicas raras.</li>
                  <li><strong>Acompanhamento do Desenvolvimento Infantil:</strong> Desde a primeira infância até a adolescência.</li>
                  <li><strong>Tratamento Personalizado:</strong> Abordagem individualizada para condições como <strong>TDAH, Autismo (TEA)</strong>, 
                  <strong>Epilepsia</strong> e <strong>Atrasos no Neurodesenvolvimento</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Abordagem Científica e Humanizada */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>
                Abordagem Científica e Humanizada: O Equilíbrio Perfeito
              </h2>
              <p className={styles.paragraph}>
                Acredito que a excelência em neuropediatria vai além do conhecimento técnico. É sobre <strong>conectar-se verdadeiramente</strong> 
                com cada criança e sua família, entendendo que cada caso é único e merece uma abordagem personalizada. 
                Minha prática combina:
              </p>
              <ul className={styles.bulletList}>
                <li><strong>Rigor Científico:</strong> Baseado nas mais recentes evidências e pesquisas em neuropediatria.</li>
                <li><strong>Escuta Ativa:</strong> Entendendo as preocupações e necessidades específicas de cada família.</li>
                <li><strong>Comunicação Clara:</strong> Traduzindo conceitos complexos em linguagem acessível.</li>
                <li><strong>Acompanhamento Contínuo:</strong> Estabelecendo uma parceria duradoura com as famílias.</li>
                <li><strong>Inovação Constante:</strong> Sempre em busca das melhores práticas e tratamentos.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. O Que as Famílias Dizem */}
        <section className={styles.testimonialsSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>O Que as Famílias Dizem</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "A Dra. Bruna tem uma capacidade incrível de explicar coisas complexas de forma simples. Ela não só trata meu filho, mas nos orienta como família. Sua dedicação é impressionante."
                </p>
                <div className={styles.author}>
                  <strong>Maria Silva</strong>
                  <div className={styles.relation}>Mãe do João, 8 anos</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "Depois de várias tentativas frustrantes, encontramos a Dra. Bruna. Ela foi a primeira médica que realmente entendeu o que estava acontecendo com nossa filha. Hoje ela está muito melhor."
                </p>
                <div className={styles.author}>
                  <strong>Ana Costa</strong>
                  <div className={styles.relation}>Mãe da Sofia, 6 anos</div>
                </div>
              </div>
              
              <div className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "A Dra. Bruna é mais que uma médica, é uma parceira na nossa jornada. Sua abordagem científica e humana fez toda a diferença no desenvolvimento do nosso filho."
                </p>
                <div className={styles.author}>
                  <strong>Carlos Santos</strong>
                  <div className={styles.relation}>Pai do Pedro, 10 anos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Call to Action Final */}
        <section className={styles.callToActionBanner}>
          <div className={styles.container}>
            <div className={`${styles.narrowContent} ${styles.textCenter}`}>
              <h2 className={styles.sectionTitleCta}>
                Pronto(a) para Começar Esta Jornada Juntos?
              </h2>
              <p className={styles.paragraph}>
                Cada criança merece o melhor cuidado possível. Vamos trabalhar juntos para desvendar o potencial único do seu filho e construir um futuro brilhante.
              </p>
              <a 
                href="https://wa.me/5531973178377" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.buttonPrimary}
                onClick={() => (window as WindowWithAnalytics)?.trackWhatsAppClick?.()}
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SobrePage; 