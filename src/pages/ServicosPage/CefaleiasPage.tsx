import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './CefaleiasPage.module.css';
import fotoConsultorio03 from "../../assets/images/bruna/dra-bruna-vilela-consultorio-03.webp";


const CefaleiasPage: React.FC = () => {
  // Structured Data for Headaches Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Diagnóstico e Tratamento de Cefaleias Infantis - Dra. Bruna Vilela",
    "description": "Especialista em cefaleias e enxaquecas infantis em Belo Horizonte. Diagnóstico preciso e tratamento para minimizar o impacto na vida escolar e social.",
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
    "serviceType": "Diagnóstico e Tratamento de Cefaleias Infantis"
  };

  return (
    <>
      <SEO 
        title="Cefaleias e Enxaquecas Infantis - Diagnóstico e Tratamento | Dra. Bruna Vilela"
        description="Especialista em cefaleias e enxaquecas infantis em Belo Horizonte. Dra. Bruna Vilela oferece diagnóstico preciso e tratamento para minimizar o impacto na vida escolar e social."
        keywords="neuropediatra, cefaleia, desenvolvimento"
        canonical="/servicos/cefaleias"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Cefaleias e Enxaquecas em Crianças e Adolescentes: Diagnóstico e Manejo Especializado" */}
        <section className={styles.heroServicePage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Cefaleias e Enxaquecas em Crianças e Adolescentes: Diagnóstico e Manejo Especializado
              </h1>
              <p className={styles.heroSubtitle}>
                Dores de cabeça são comuns em crianças e adolescentes, mas nem todas as dores de cabeça são iguais. Enquanto algumas são benignas e transitórias, outras podem ser mais graves, persistentes ou indicar condições subjacentes que necessitam de atenção médica especializada. A avaliação e o manejo adequados, especialmente por um neuropediatra, são essenciais para aliviar o sofrimento e garantir a saúde do seu filho.
              </p>
              <a 
                href="https://wa.me/5531983501417" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.buttonPrimary}
              >
                Agende uma Consulta Especializada
              </a>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src={fotoConsultorio03}
                alt="Dra. Bruna Vilela em consultório, demonstrando cuidado especializado para cefaleias"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. Compreendendo as Cefaleias Pediátricas e Sinais de Alerta (Red Flags) */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Compreendendo as Cefaleias Pediátricas</h2>
              <p className={styles.paragraph}>
                As dores de cabeça em crianças podem ser classificadas em:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Cefaleias Primárias:</strong> Não são causadas por outra condição médica. Incluem:
                  <ul>
                    <li><strong>Cefaleia Tensional:</strong> A mais comum. Dor leve a moderada, bilateral, como pressão ou aperto. Não piora com atividade física e geralmente não é acompanhada de náuseas ou vômitos.</li>
                    <li><strong>Enxaqueca (Migrânea):</strong> Mais severa. Frequentemente unilateral, latejante, moderada a forte. Pode vir com náuseas, vômitos, sensibilidade à luz (fotofobia) e/ou ao som (fonofobia). Pode ser precedida por uma "aura".</li>
                    <li><strong>Cefaleia Crônica Diária:</strong> Dores de cabeça na maioria dos dias do mês, por pelo menos 3 meses.</li>
                  </ul>
                </li>
                <li><strong>Cefaleias Secundárias:</strong> São causadas por outra condição de saúde. Embora menos comuns, é crucial descartá-las. Podem ser sintomas de infecções (meningite), trauma craniano, problemas de visão, pressão alta, tumores cerebrais (raros) ou outras condições neurológicas.</li>
              </ul>

              <h2 className={styles.sectionTitle}>Sinais de Alerta (Red Flags) – Quando se preocupar:</h2>
              <p className={styles.paragraph}>
                Procure atendimento médico imediato se a dor de cabeça do seu filho:
              </p>
              <ul className={styles.bulletListStyled}>
                <li>É a pior dor de cabeça que ele já teve, com início súbito.</li>
                <li>Vem acompanhada de febre, rigidez no pescoço, vômitos em jato.</li>
                <li>Acorda a criança do sono ou piora ao tossir ou se abaixar.</li>
                <li>Vem junto com alterações na visão, fala, equilíbrio ou fraqueza em um lado do corpo.</li>
                <li>Acompanha uma mudança no comportamento ou no nível de consciência.</li>
                <li>Acontece após um trauma na cabeça.</li>
                <li>Piora progressivamente com o tempo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Diagnóstico Detalhado */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Diagnóstico Detalhado</h2>
              <p className={styles.paragraph}>
                O diagnóstico de cefaleias em crianças e adolescentes começa com uma avaliação minuciosa por um neuropediatra, que inclui:
              </p>
              <ol className={styles.numberedListStyled}>
                <li><strong>Histórico Completo:</strong> Perguntas detalhadas sobre a dor de cabeça (frequência, intensidade, localização, tipo de dor, gatilhos, sintomas associados, histórico familiar de enxaqueca) e sobre o histórico médico geral da criança.</li>
                <li><strong>Exame Físico e Neurológico:</strong> Para descartar outras causas e identificar quaisquer sinais neurológicos anormais.</li>
                <li><strong>Diário da Dor de Cabeça:</strong> Os pais podem ser orientados a manter um registro das dores de cabeça do filho, o que ajuda a identificar padrões e gatilhos.</li>
                <li><strong>Exames Complementares:</strong> Em geral, não são necessários para cefaleias primárias típicas. No entanto, exames como a Ressonância Magnética cerebral podem ser indicados se houver sinais de alerta ou achados anormais no exame neurológico para descartar causas secundárias.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 4. Manejo e Opções de Tratamento */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Manejo e Opções de Tratamento</h2>
              <p className={styles.paragraph}>
                O tratamento visa aliviar a dor e, se necessário, prevenir futuras crises, sempre de forma individualizada:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Manejo Agudo (para aliviar a dor):</strong> Analgésicos comuns (paracetamol, ibuprofeno) podem ser suficientes para cefaleias tensionais leves. Para enxaquecas, o neuropediatra pode prescrever medicamentos específicos (triptanos, para adolescentes).</li>
                <li><strong>Manejo Preventivo (para evitar crises):</strong> Para crianças com dores de cabeça frequentes ou incapacitantes, podem ser recomendadas:
                  <ul>
                    <li><strong>Medicações Preventivas:</strong> Quando indicado, o neuropediatra pode prescrever medicamentos para reduzir a frequência e intensidade das crises.</li>
                    <li><strong>Mudanças no Estilo de Vida:</strong> Essenciais para todos os tipos de cefaleias. Incluem:
                      <ul>
                        <li>Sono regular e adequado.</li>
                        <li>Hidratação suficiente.</li>
                        <li>Alimentação equilibrada e refeições regulares.</li>
                        <li>Manejo do estresse (técnicas de relaxamento, mindfulness).</li>
                        <li>Atividade física regular.</li>
                        <li>Evitar gatilhos conhecidos (se identificados).</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Terapias Não Farmacológicas:</strong> Biofeedback, terapia cognitivo-comportamental, e acupuntura podem ser consideradas para o manejo da dor e do estresse.</li>
                <li><strong>Psicoeducação:</strong> Orientar a criança e a família sobre a condição e as estratégias de manejo é fundamental.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. A Abordagem da Dra. Bruna */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>A Abordagem da Dra. Bruna</h2>
              <p className={styles.paragraph}>
                A Dra. Bruna Vilela oferece uma avaliação especializada e um plano de manejo personalizado para crianças e adolescentes com cefaleias e enxaquecas. Sua prioridade é identificar a causa da dor, aliviar o sofrimento, e ajudar a família a desenvolver estratégias eficazes para que a criança possa ter uma vida sem interrupções pela dor, com foco na qualidade de vida e bem-estar.
              </p>
              <div className={styles.buttonCenter}>
                <a 
                  href="https://wa.me/5531983501417" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.buttonPrimary}
                >
                  Agende uma Consulta Especializada
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

export default CefaleiasPage; 