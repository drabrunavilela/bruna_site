import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './ServicosPage.module.css';

const ServicosPage: React.FC = () => {
  // Structured Data for Medical Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dra. Bruna Vilela - Serviços de Neuropediatria",
    "description": "Especialista em neuropediatria oferecendo serviços de diagnóstico e tratamento para TDAH, autismo, epilepsia e desenvolvimento infantil",
    "url": "https://drabrunavilela.com.br/servicos",
    "availableService": [
      {
        "@type": "MedicalService",
        "name": "Avaliação e Tratamento de TDAH",
        "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção com Hiperatividade"
      },
      {
        "@type": "MedicalService",
        "name": "Avaliação e Acompanhamento de Autismo",
        "description": "Diagnóstico e acompanhamento do Transtorno do Espectro Autista"
      },
      {
        "@type": "MedicalService",
        "name": "Tratamento de Epilepsia Infantil",
        "description": "Diagnóstico e tratamento de epilepsia em crianças"
      },
      {
        "@type": "MedicalService",
        "name": "Avaliação de Atrasos no Neurodesenvolvimento",
        "description": "Avaliação e intervenção em atrasos de desenvolvimento"
      },
      {
        "@type": "MedicalService",
        "name": "Tratamento de Cefaleias e Enxaquecas",
        "description": "Diagnóstico e tratamento de dores de cabeça em crianças"
      },
      {
        "@type": "MedicalService",
        "name": "Segunda Opinião em Neuropediatria",
        "description": "Análise aprofundada de casos complexos"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Serviços de Neuropediatria - Dra. Bruna Vilela | TDAH, Autismo, Epilepsia e Desenvolvimento Infantil"
        description="Conheça os serviços de neuropediatria da Dra. Bruna Vilela em Belo Horizonte. Especialista em TDAH, autismo, epilepsia, atrasos no desenvolvimento e cefaleias infantis."
        keywords="serviços neuropediatria, TDAH belo horizonte, autismo infantil, epilepsia criança, desenvolvimento infantil, cefaleias infantis, segunda opinião neuropediatria"
        canonical="/servicos"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Áreas de Atuação: Especialidades em Neuropediatria" */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Áreas de Atuação: Especialidades em Neuropediatria
              </h1>
              <p className={styles.heroSubtitle}>
                Cada criança é única, e cada desafio neurológico merece uma abordagem personalizada. Conheça as especialidades da Dra. Bruna Vilela, desenvolvidas com base nas mais recentes evidências científicas e na experiência clínica.
              </p>
            </div>
            <div className={styles.heroImageContainer}>
              <img 
                src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"
                alt="Dra. Bruna Vilela em consultório, demonstrando especialização em neuropediatria"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. Seção de Serviços Detalhados (Cards/Grid) */}
        <section id="explore-servicos" className={styles.sectionPadded}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Condições que Abordamos</h2>
            <div className={styles.servicesGrid}>
              {/* TDAH */}
              <Link to="/servicos/tdah" className={styles.serviceCard}>
                <div className={styles.cardIcon}>🧠</div>
                <h3 className={styles.cardTitle}>TDAH: Compreensão e Manejo</h3>
                <p className={styles.cardDescription}>
                  Oferecemos avaliação completa, diagnóstico diferencial e planos de intervenção personalizados para crianças e adolescentes com Transtorno do Déficit de Atenção e Hiperatividade (TDAH), considerando todas as comorbidades.
                </p>
                <span className={styles.buttonLink}>Saiba Mais →</span>
              </Link>

              {/* TEA */}
              <Link to="/servicos/tea" className={styles.serviceCard}>
                <div className={styles.cardIcon}>🌟</div>
                <h3 className={styles.cardTitle}>TEA: Diagnóstico Precoce e Intervenções</h3>
                <p className={styles.cardDescription}>
                  Nossa abordagem no Transtorno do Espectro Autista foca na identificação precoce, na elaboração de estratégias terapêuticas multidisciplinares e no suporte contínuo para a família, sempre embasados em pesquisas atuais.
                </p>
                <span className={styles.buttonLink}>Saiba Mais →</span>
              </Link>

              {/* Epilepsia */}
              <Link to="/servicos/epilepsia" className={styles.serviceCard}>
                <div className={styles.cardIcon}>⚡</div>
                <h3 className={styles.cardTitle}>Epilepsia Infantil: Diagnóstico e Tratamento</h3>
                <p className={styles.cardDescription}>
                  Dedicamo-nos ao diagnóstico preciso dos diferentes tipos de epilepsia em crianças, buscando o tratamento mais eficaz para controlar as crises e promover a melhor qualidade de vida possível.
                </p>
                <span className={styles.buttonLink}>Saiba Mais →</span>
              </Link>

              {/* Atrasos */}
              <Link to="/servicos/atrasos" className={styles.serviceCard}>
                <div className={styles.cardIcon}>📈</div>
                <h3 className={styles.cardTitle}>Atrasos no Neurodesenvolvimento</h3>
                <p className={styles.cardDescription}>
                  Avaliamos e acompanhamos atrasos na fala, motor, cognitivo e social, identificando as causas e traçando planos de intervenção que estimulem o máximo potencial de cada criança.
                </p>
                <span className={styles.buttonLink}>Saiba Mais →</span>
              </Link>

              {/* Cefaleias */}
              <Link to="/servicos/cefaleias" className={styles.serviceCard}>
                <div className={styles.cardIcon}>🤕</div>
                <h3 className={styles.cardTitle}>Cefaleias e Enxaquecas</h3>
                <p className={styles.cardDescription}>
                  Investigamos as causas das dores de cabeça crônicas e enxaquecas na infância e adolescência, oferecendo estratégias de manejo e tratamento para minimizar o impacto na vida escolar e social.
                </p>
                <span className={styles.buttonLink}>Saiba Mais →</span>
              </Link>

              {/* Segunda Opinião */}
              <Link to="/servicos/segunda-opiniao" className={styles.serviceCard}>
                <div className={styles.cardIcon}>🔍</div>
                <h3 className={styles.cardTitle}>Segunda Opinião em Neuropediatria</h3>
                <p className={styles.cardDescription}>
                  Se você busca uma análise aprofundada de um diagnóstico ou plano de tratamento já existente, a Dra. Bruna oferece uma segunda opinião especializada, utilizando sua experiência em casos desafiadores.
                </p>
                <span className={styles.buttonLink}>Saiba Mais →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Seção Complementar: "Por Que Escolher a Dra. Bruna Vilela?" */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={`${styles.narrowContent} ${styles.textCenter}`}>
              <h2 className={styles.sectionTitle}>Por Que Escolher a Dra. Bruna Vilela?</h2>
              <p className={styles.paragraph}>
                Com um atendimento fundamentado nas mais recentes evidências científicas e um olhar profundamente humano, a Dra. Bruna Vilela oferece:
              </p>
              <ul className={styles.bulletPointsInline}>
                <li><span className={styles.icon}>🔬</span> Rigor Científico e Pesquisa</li>
                <li><span className={styles.icon}>❤️</span> Acolhimento e Empatia</li>
                <li><span className={styles.icon}>✨</span> Planos de Tratamento Personalizados</li>
                <li><span className={styles.icon}>🧩</span> Expertise em Casos Complexos</li>
                <li><span className={styles.icon}>👨‍👩‍👧‍👦</span> Suporte Integral à Família</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Seção Final de Chamada para Ação (CTA Geral) */}
        <section className={`${styles.sectionPadded} ${styles.callToActionBannerServices}`}>
          <div className={styles.container}>
            <div className={`${styles.narrowContent} ${styles.textCenter}`}>
              <h2 className={styles.sectionTitleCta}>
                Não Encontrou o Que Procura?
              </h2>
              <p className={styles.paragraph}>
                A neuropediatria é vasta, e muitos desafios se cruzam. Se a necessidade do seu filho não está explicitamente listada acima, ou se você busca uma orientação mais personalizada, não hesite em entrar em contato.
              </p>
              <p className={styles.paragraph}>
                Estamos prontos para entender sua história e oferecer o caminho mais seguro para o desenvolvimento do seu filho.
              </p>
              <div className={styles.ctaButtons}>
                <Link to="/contato" className={styles.buttonPrimary} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  Entre em Contato
                </Link>
                <a 
                  href="https://wa.me/5531983501417" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buttonSecondary}
                >
                  Agendar Consulta Agora
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

export default ServicosPage; 