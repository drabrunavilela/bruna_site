import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './SegundaOpiniaoPage.module.css';
import fotoConsultorio04 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-04.webp";


const SegundaOpiniaoPage: React.FC = () => {
  // Structured Data for Second Opinion Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Segunda Opinião em Neuropediatria - Dra. Bruna Vilela",
    "description": "Segunda opinião especializada em neuropediatria em Belo Horizonte. Dra. Bruna Vilela oferece análise aprofundada de diagnósticos e planos de tratamento.",
    "provider": {
      "@type": "Physician",
      "name": "Dra. Bruna Vilela",
      "medicalSpecialty": "Neuropediatria",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Raja Gabaglia 2000, Torre 1, Sala 313",
        "addressLocality": "Belo Horizonte",
        "addressRegion": "MG",
        "addressCountry": "BR"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Belo Horizonte"
    },
    "serviceType": "Segunda Opinião em Neuropediatria"
  };

  return (
    <>
      <SEO 
        title="Segunda Opinião em Neuropediatria | Dra. Bruna Vilela - Análise Especializada"
        description="Segunda opinião especializada em neuropediatria em Belo Horizonte. Dra. Bruna Vilela oferece análise aprofundada de diagnósticos e planos de tratamento."
        keywords="neuropediatra, pediatra, belo horizonte"
        canonical="/servicos/segunda-opiniao"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Segunda Opinião em Neuropediatria: Clareza e Segurança para Decisões Cruciais" */}
        <section className={styles.heroServicePage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Segunda Opinião em Neuropediatria: Clareza e Segurança para Decisões Cruciais
              </h1>
              <p className={styles.heroSubtitle}>
                Lidar com um diagnóstico neurológico infantil pode ser um caminho desafiador, gerando dúvidas e incertezas. Em momentos assim, um novo olhar especializado, embasado em ciência e acolhimento, pode trazer a tranquilidade e a segurança que sua família precisa para tomar as decisões mais importantes sobre o desenvolvimento do seu filho.
              </p>
              <Link to="#como-funciona" className={styles.buttonPrimary} onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>
                Entenda Como Funciona
              </Link>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src={fotoConsultorio04}
                alt="Dra. Bruna Vilela em consultório, demonstrando cuidado especializado para segunda opinião"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. Por Que Buscar Uma Segunda Opinião? */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Por Que Buscar Uma Segunda Opinião?</h2>
              <p className={styles.paragraph}>
                A busca por uma segunda opinião é um direito do paciente e da família. Ela não reflete desconfiança, mas sim um desejo legítimo de:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Confirmar o Diagnóstico:</strong> Obter uma validação ou uma nova perspectiva sobre um diagnóstico complexo ou raro.</li>
                <li><strong>Explorar Opções de Tratamento:</strong> Conhecer abordagens terapêuticas alternativas ou complementares, especialmente para casos que não respondem ao tratamento inicial.</li>
                <li><strong>Reduzir Incertezas:</strong> Diminuir a ansiedade e as dúvidas, consolidando a confiança no plano de ação.</li>
                <li><strong>Garantir o Melhor Caminho:</strong> Assegurar que todas as possibilidades foram exploradas para o desenvolvimento ideal da criança.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Quando a Expertise da Dra. Bruna Pode Fazer a Diferença? */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Quando a Expertise da Dra. Bruna Pode Fazer a Diferença?</h2>
              <p className={styles.paragraph}>
                A Dra. Bruna Vilela se dedica a casos que exigem um olhar minucioso e uma análise aprofundada, com foco na ciência e na individualidade de cada criança. Recomenda-se buscar uma segunda opinião quando:
              </p>
              <ul className={styles.bulletListStyled}>
                <li>O diagnóstico inicial é complexo, raro ou inconclusivo.</li>
                <li>Os sintomas persistem ou evoluem de forma atípica, apesar do tratamento.</li>
                <li>Você tem dúvidas sobre a adequação ou eficácia do tratamento proposto.</li>
                <li>A família busca maior clareza sobre o prognóstico ou diferentes abordagens.</li>
                <li>Há discordância entre as opiniões de profissionais de saúde.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. A Abordagem Científica e Acolhedora da Dra. Bruna */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>A Abordagem Científica e Acolhedora da Dra. Bruna</h2>
              <p className={styles.paragraph}>
                Com vasta experiência em neuropediatria e um compromisso inabalável com a pesquisa e as mais recentes descobertas científicas, a Dra. Bruna Vilela oferece uma análise imparcial e detalhada. Ela integra o conhecimento técnico-científico com uma escuta ativa e empática, garantindo que você e sua família se sintam compreendidos e seguros. Seu processo inclui:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Revisão Detalhada:</strong> Análise minuciosa de todo o histórico clínico, exames e relatórios anteriores.</li>
                <li><strong>Avaliação Integrativa:</strong> Consideração de todos os aspectos do desenvolvimento da criança.</li>
                <li><strong>Discussão Aprofundada:</strong> Sessões dedicadas a sanar todas as suas dúvidas e explicar cada detalhe.</li>
                <li><strong>Recomendações Personalizadas:</strong> Sugestões de planos de tratamento e acompanhamento baseados nas melhores evidências.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Como Funciona? Nosso Processo Simplificado */}
        <section id="como-funciona" className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Como Funciona? Nosso Processo Simplificado</h2>
              <p className={styles.paragraph}>
                Seu caminho para a clareza em 3 etapas:
              </p>
              <ol className={styles.numberedListStyled}>
                <li><strong>Agendamento e Preparação:</strong> Entre em contato para agendar e receba as orientações para envio da documentação necessária (exames, relatórios médicos, histórico).</li>
                <li><strong>Análise Detalhada:</strong> A Dra. Bruna dedicará um tempo exclusivo para estudar seu caso a fundo, antes mesmo da consulta, garantindo um parecer preciso.</li>
                <li><strong>Consulta de Segunda Opinião:</strong> Encontro presencial ou online para a discussão do caso, apresentação das conclusões e recomendações, e esclarecimento de todas as dúvidas da família.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 6. Chamada para Ação Final */}
        <section className={`${styles.sectionPadded} ${styles.callToActionBannerServices}`}>
          <div className={styles.container}>
            <div className={`${styles.narrowContent} ${styles.textCenter}`}>
              <h2 className={styles.sectionTitleCta}>
                Pronto(a) para Um Novo Olhar sobre o Desenvolvimento do Seu Filho(a)?
              </h2>
              <p className={styles.paragraph}>
                Permita que a expertise científica e o cuidado humano da Dra. Bruna Vilela ofereçam a clareza e a segurança que você busca para as decisões mais importantes.
              </p>
              <div className={styles.buttonCenter}>
                <a 
                  href="https://wa.me/5531983501417" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buttonPrimary}
                >
                  Agendar Consulta de Segunda Opinião
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

export default SegundaOpiniaoPage; 