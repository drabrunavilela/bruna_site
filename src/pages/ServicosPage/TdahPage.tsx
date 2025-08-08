import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './TdahPage.module.css';
import fotoConsultorio04 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-04.webp";
import type { WindowWithAnalytics } from '../../types/analytics';


const TdahPage: React.FC = () => {
  // Structured Data for TDAH Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Avaliação e Tratamento de TDAH",
    "description": "Diagnóstico e tratamento do Transtorno do Déficit de Atenção com Hiperatividade em crianças e adolescentes",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Dra. Bruna Vilela",
      "medicalSpecialty": "Neuropediatria"
    },
    "serviceType": "MedicalService",
    "areaServed": {
      "@type": "City",
      "name": "Belo Horizonte"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceType": "Consultation"
    }
  };

  return (
    <>
      <SEO 
        title="TDAH - Diagnóstico e Tratamento | Dra. Bruna Vilela Neuropediatra em Belo Horizonte"
        description="Especialista em TDAH em Belo Horizonte. Dra. Bruna Vilela oferece diagnóstico preciso e tratamento personalizado para crianças e adolescentes com Transtorno do Déficit de Atenção e Hiperatividade."
        keywords="neuropediatra, pediatra, belo horizonte"
        canonical="/servicos/tdah"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "TDAH: Compreendendo e Tratando com Precisão Científica" */}
        <section className={styles.heroServicePage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                TDAH: Compreendendo e Tratando com Precisão Científica
              </h1>
              <p className={styles.heroSubtitle}>
                O Transtorno do Déficit de Atenção com Hiperatividade (TDAH) é uma condição neurobiológica que afeta milhões de crianças e adolescentes no Brasil. Na prática da Dra. Bruna Vilela, cada caso é abordado com rigor científico e sensibilidade humana, garantindo diagnósticos precisos e tratamentos personalizados que respeitam a individualidade de cada criança e família.
              </p>
              <Link to="#como-diagnosticamos" className={styles.buttonPrimary} onClick={() => document.getElementById('como-diagnosticamos')?.scrollIntoView({ behavior: 'smooth' })}>
                Entenda Nosso Processo
              </Link>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src={fotoConsultorio04}
                alt="Dra. Bruna Vilela em consultório, especialista em TDAH e neuropediatria"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. O que é TDAH? */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>O que é TDAH?</h2>
              <p className={styles.paragraph}>
                O TDAH é caracterizado por um padrão persistente de desatenção e/ou hiperatividade-impulsividade que interfere no funcionamento ou desenvolvimento. É importante notar que esses sintomas devem ser mais frequentes e severos do que o esperado para a idade e o nível de desenvolvimento da criança.
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Desatenção:</strong> Dificuldade em manter o foco, organizar tarefas, seguir instruções, e tendência a cometer erros por descuido.</li>
                <li><strong>Hiperatividade:</strong> Inquietação excessiva, dificuldade em ficar parado, correr ou escalar em situações inadequadas.</li>
                <li><strong>Impulsividade:</strong> Dificuldade em esperar a vez, interromper os outros, agir sem pensar nas consequências.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Diagnóstico de TDAH: Uma Abordagem Científica e Abrangente */}
        <section id="como-diagnosticamos" className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>
                Diagnóstico de TDAH: Uma Abordagem Científica e Abrangente
              </h2>
              <p className={styles.paragraph}>
                O diagnóstico de TDAH é complexo e deve ser realizado por um profissional experiente, como a neuropediatra. Não existe um exame único para confirmar o TDAH. O processo envolve:
              </p>
              <ol className={styles.numberedListStyled}>
                <li><strong>Histórico Clínico Detalhado:</strong> Coleta de informações abrangentes com os pais sobre o desenvolvimento da criança desde o nascimento, comportamento em casa, na escola e em outros ambientes sociais.</li>
                <li><strong>Observação Clínica:</strong> Avaliação do comportamento da criança durante a consulta.</li>
                <li><strong>Questionários e Escalas Padronizadas:</strong> Utilização de ferramentas validadas cientificamente preenchidas pelos pais e professores para quantificar os sintomas.</li>
                <li><strong>Avaliação Diferencial:</strong> Descarte de outras condições médicas, neurológicas ou psiquiátricas que possam mimetizar os sintomas de TDAH.</li>
                <li><strong>Avaliação Neuropsicológica (quando indicada):</strong> Pode complementar o diagnóstico, identificando padrões de força e fraqueza cognitiva e auxiliando na elaboração de um plano de tratamento personalizado.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 4. Tratamento e Manejo Multimodal */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Tratamento e Manejo Multimodal</h2>
              <p className={styles.paragraph}>
                O tratamento mais eficaz para o TDAH é multimodal, combinando diferentes estratégias para atender às necessidades individuais da criança e de sua família:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Terapia Farmacológica:</strong> A medicação (estimulantes ou não estimulantes) pode ser indicada em muitos casos para ajudar a regular os circuitos cerebrais afetados, melhorando o foco, a atenção e reduzindo a hiperatividade e impulsividade. A decisão é sempre individualizada e monitorada de perto.</li>
                <li><strong>Terapias Comportamentais e Cognitivas:</strong> A Terapia Cognitivo-Comportamental (TCC) e intervenções baseadas na modificação de comportamento auxiliam a criança a desenvolver habilidades de organização, planejamento, gerenciamento de tempo e autocontrole.</li>
                <li><strong>Psicoeducação:</strong> Orientação para pais, cuidadores e professores sobre o TDAH, estratégias de manejo em casa e na escola, e como criar um ambiente de apoio.</li>
                <li><strong>Apoio Escolar:</strong> Adaptações no ambiente educacional e estratégias de ensino que favoreçam o aprendizado da criança com TDAH.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Comorbidades Associadas ao TDAH */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Comorbidades Associadas ao TDAH</h2>
              <p className={styles.paragraph}>
                É crucial reconhecer que o TDAH raramente ocorre isoladamente. Muitas crianças com TDAH podem apresentar outras condições concomitantes (comorbidades), como:
              </p>
              <ul className={styles.bulletListStyled}>
                <li>Transtornos de Ansiedade</li>
                <li>Depressão</li>
                <li>Transtorno Opositivo Desafiador (TOD)</li>
                <li>Transtornos de Aprendizagem (ex: Dislexia)</li>
                <li>Transtorno do Espectro Autista (TEA)</li>
                <li>Transtornos do Sono</li>
              </ul>
              <p className={styles.paragraph}>
                A identificação e o tratamento dessas comorbidades são essenciais para um plano terapêutico completo e para melhorar a qualidade de vida da criança e da família.
              </p>
            </div>
          </div>
        </section>

        {/* 6. A Abordagem da Dra. Bruna */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>A Abordagem da Dra. Bruna</h2>
              <p className={styles.paragraph}>
                Com uma abordagem centrada na criança e na família, a Dra. Bruna Vilela realiza uma avaliação cuidadosa e um diagnóstico preciso do TDAH e suas comorbidades. Seu objetivo é desenvolver um plano de manejo personalizado e baseado nas mais recentes evidências científicas, garantindo o suporte necessário para que seu filho possa florescer em todas as áreas da vida.
              </p>
              <div className={styles.buttonCenter}>
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
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default TdahPage; 