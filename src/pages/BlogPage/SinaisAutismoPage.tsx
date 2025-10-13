import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import SkipLink from '../../components/SkipLink/SkipLink';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import styles from './BlogPage.module.css';

const SinaisAutismoPage: React.FC = () => {
  // Structured Data for Blog Post
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Sinais de Autismo no Primeiro Ano de Vida",
    "description": "Identifique os primeiros sinais de autismo e saiba quando buscar avaliação especializada para o desenvolvimento do seu bebê.",
    "datePublished": "2024-03-10",
    "dateModified": "2024-03-10",
    "author": {
      "@type": "Person",
      "name": "Dra. Bruna Vilela",
      "jobTitle": "Neuropediatra"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dra. Bruna Vilela - Neuropediatra"
    },
    "url": "https://www.brunavilelaneuroped.com.br/blog/sinais-autismo-primeiro-ano"
  };

  return (
    <>
      <SEO 
        title="Sinais de Autismo no Primeiro Ano de Vida | Dra. Bruna Vilela"
        description="Identifique os primeiros sinais de autismo e saiba quando buscar avaliação especializada para o desenvolvimento do seu bebê. Guia completo com sinais de alerta."
        keywords="autismo, sinais precoces, primeiro ano, desenvolvimento infantil, TEA, neuropediatra"
        canonical="/blog/sinais-autismo-primeiro-ano"
        structuredData={structuredData}
      />
      <SkipLink />
      <Header />
      
      <main id="main-content" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroBlogPage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Sinais de Autismo no Primeiro Ano de Vida
              </h1>
              <p className={styles.heroSubtitle}>
                Identifique os primeiros sinais e saiba quando buscar avaliação especializada para o desenvolvimento do seu bebê.
              </p>
              <div className={styles.articleMeta}>
                <span>10 de Março de 2024</span>
                <span>6 min de leitura</span>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <ResponsiveImage 
                src="bruna/dra-bruna-vilela-consultorio-03"
                alt="Dra. Bruna Vilela em consultório, demonstrando conhecimento sobre sinais precoces de autismo"
                className={styles.heroImage}
                loading="eager"
                priority={true}
                sizes="(max-width: 768px) 100vw, 50vw"
                showSkeleton={true}
                skeletonHeight="400px"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.articleContent}>
              <h2>Introdução</h2>
              <p>
                O diagnóstico precoce do Transtorno do Espectro Autista (TEA) é fundamental para o desenvolvimento da criança. 
                Nos primeiros 12 meses de vida, já é possível identificar alguns sinais que podem indicar a necessidade de 
                avaliação especializada.
              </p>

              <h2>Sinais de Alerta nos Primeiros 6 Meses</h2>
              <ul>
                <li><strong>Contato visual limitado:</strong> Bebê não mantém contato visual durante a amamentação</li>
                <li><strong>Falta de resposta ao nome:</strong> Não reage quando chamado pelo nome</li>
                <li><strong>Ausência de sorriso social:</strong> Não sorri em resposta ao sorriso dos pais</li>
                <li><strong>Dificuldade para dormir:</strong> Padrões de sono irregulares e agitados</li>
              </ul>

              <h2>Sinais de 6 a 12 Meses</h2>
              <ul>
                <li><strong>Falta de interesse em brincadeiras:</strong> Não demonstra interesse em jogos simples</li>
                <li><strong>Ausência de gestos:</strong> Não aponta, acena ou faz gestos comunicativos</li>
                <li><strong>Dificuldade com mudanças de rotina:</strong> Fica muito agitado com alterações</li>
                <li><strong>Falta de imitação:</strong> Não imita gestos ou sons dos pais</li>
              </ul>

              <h2>Quando Buscar Ajuda</h2>
              <p>
                Se você notar alguns desses sinais no seu bebê, é importante conversar com o pediatra. 
                A avaliação precoce por um neuropediatra pode fazer toda a diferença no desenvolvimento da criança.
              </p>

              <div className={styles.callToAction}>
                <h3>Precisa de Orientação?</h3>
                <p>
                  A Dra. Bruna Vilela oferece avaliação especializada em neuropediatria. 
                  Entre em contato para agendar uma consulta.
                </p>
                <a href="/contato" className={styles.buttonPrimary}>
                  Agendar Consulta
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </>
  );
};

export default SinaisAutismoPage;
