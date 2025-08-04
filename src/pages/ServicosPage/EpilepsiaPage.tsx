import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './EpilepsiaPage.module.css';

const EpilepsiaPage: React.FC = () => {
  // Structured Data for Epilepsy Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Diagnóstico e Tratamento de Epilepsia Infantil - Dra. Bruna Vilela",
    "description": "Especialista em epilepsia infantil em Belo Horizonte. Diagnóstico preciso e tratamento personalizado para diferentes tipos de crises epilépticas.",
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
    "serviceType": "Diagnóstico e Tratamento de Epilepsia Infantil"
  };

  return (
    <>
      <SEO 
        title="Epilepsia Infantil - Diagnóstico e Tratamento | Dra. Bruna Vilela Neuropediatra em Belo Horizonte"
        description="Especialista em epilepsia infantil em Belo Horizonte. Dra. Bruna Vilela oferece diagnóstico preciso e tratamento personalizado para diferentes tipos de crises epilépticas."
        keywords="epilepsia infantil, crises epilépticas, neuropediatra epilepsia belo horizonte, diagnóstico epilepsia, tratamento epilepsia, crises convulsivas, síndromes epilépticas"
        canonical="/servicos/epilepsia"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Epilepsia Infantil: Entendimento, Diagnóstico e Abordagens Terapêuticas" */}
        <section className={styles.heroServicePage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Epilepsia Infantil: Entendimento, Diagnóstico e Abordagens Terapêuticas
              </h1>
              <p className={styles.heroSubtitle}>
                A epilepsia é uma condição neurológica crônica caracterizada por crises epilépticas recorrentes e não provocadas. Embora o termo possa causar apreensão, é uma das condições neurológicas mais comuns na infância. Compreender seus tipos, causas e as opções de tratamento é fundamental para um manejo eficaz e para garantir a qualidade de vida da criança.
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
                src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"
                alt="Dra. Bruna Vilela em consultório, demonstrando cuidado especializado para epilepsia infantil"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. O que são Crises Epilépticas? */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>O que são Crises Epilépticas?</h2>
              <p className={styles.paragraph}>
                Uma crise epiléptica é um episódio transitório de sinais e/ou sintomas devido a uma atividade elétrica anormal e excessiva no cérebro. Nem todas as crises envolvem convulsões com perda de consciência e tremores. Elas podem manifestar-se de diversas formas, dependendo da área do cérebro afetada, como:
              </p>
              <ul className={styles.bulletListStyled}>
                <li>Momentos de "desligamento" (crises de ausência)</li>
                <li>Movimentos involuntários (tremores, repuxões)</li>
                <li>Sensações estranhas (olfato, paladar)</li>
                <li>Confusão</li>
                <li>Alterações de comportamento</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Tipos de Crises e Síndromes Epilépticas na Infância */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Tipos de Crises e Síndromes Epilépticas na Infância</h2>
              <p className={styles.paragraph}>
                A epilepsia em crianças é muito diversa. As crises podem ser:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Focais (ou Parciais):</strong> Originam-se em uma área específica do cérebro. A criança pode estar consciente ou ter a consciência alterada.</li>
                <li><strong>Generalizadas:</strong> Envolvem ambas as metades do cérebro desde o início. Exemplos incluem:
                  <ul>
                    <li><strong>Crises Tônico-Clônicas:</strong> As mais conhecidas, com rigidez (tônica) e tremores (clônica).</li>
                    <li><strong>Crises de Ausência:</strong> Períodos curtos de "desligamento" ou olhar fixo.</li>
                    <li><strong>Crises Mioclônicas:</strong> Pequenos espasmos musculares.</li>
                  </ul>
                </li>
              </ul>
              <p className={styles.paragraph}>
                Existem também diversas <strong>síndromes epilépticas infantis</strong>, que são agrupamentos de características clínicas (tipo de crise, idade de início, achados no EEG, prognóstico). Exemplos incluem a Síndrome de West, Síndrome de Lennox-Gastaut, ou epilepsias focais benignas da infância, cada uma com suas particularidades. A classificação correta é vital para o tratamento adequado.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Diagnóstico da Epilepsia Infantil */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Diagnóstico da Epilepsia Infantil</h2>
              <p className={styles.paragraph}>
                O diagnóstico da epilepsia requer uma avaliação cuidadosa de um neuropediatra. Os principais passos incluem:
              </p>
              <ol className={styles.numberedListStyled}>
                <li><strong>História Clínica Detalhada:</strong> A descrição precisa dos eventos (o que a criança estava fazendo, como a crise começou, o que aconteceu durante e depois) é a parte mais importante. Vídeos das crises, se disponíveis, são extremamente úteis.</li>
                <li><strong>Exame Físico e Neurológico:</strong> Para avaliar o desenvolvimento geral e identificar quaisquer sinais que possam indicar a causa da epilepsia.</li>
                <li><strong>Eletroencefalograma (EEG):</strong> Registra a atividade elétrica do cérebro e pode identificar padrões epilépticos. Pode ser realizado com o paciente acordado, dormindo ou em privação de sono.</li>
                <li><strong>Neuroimagem (Ressonância Magnética Cerebral):</strong> Em muitos casos, é realizada para verificar a estrutura do cérebro e identificar possíveis causas subjacentes (lesões, malformações).</li>
                <li><strong>Exames Genéticos e Metabólicos:</strong> Podem ser solicitados em casos específicos, especialmente se houver suspeita de uma causa genética ou metabólica para a epilepsia.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 5. Abordagens de Tratamento para Epilepsia */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Abordagens de Tratamento para Epilepsia</h2>
              <p className={styles.paragraph}>
                O objetivo do tratamento é controlar as crises com o mínimo de efeitos colaterais, permitindo que a criança leve uma vida plena.
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Medicação Antiepiléptica (MAE):</strong> São a primeira linha de tratamento para a maioria das crianças. Existem diversas opções, e a escolha depende do tipo de crise, da síndrome epiléptica, da idade da criança e de outros fatores. O tratamento é individualizado e ajustado conforme a resposta.</li>
                <li><strong>Dieta Cetogênica:</strong> Uma dieta rica em gorduras, adequada e monitorada por uma equipe especializada, pode ser uma opção eficaz para alguns tipos de epilepsia, especialmente aquelas que não respondem bem aos medicamentos.</li>
                <li><strong>Cirurgia de Epilepsia:</strong> Para um subgrupo de pacientes com epilepsia focal refratária (que não responde a medicamentos), a remoção cirúrgica da área do cérebro que gera as crises pode ser uma opção curativa.</li>
                <li><strong>Estimulação do Nervo Vago (ENV):</strong> Um dispositivo implantável que envia pulsos elétricos ao nervo vago, podendo reduzir a frequência e a intensidade das crises em alguns casos refratários.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. A Abordagem da Dra. Bruna */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>A Abordagem da Dra. Bruna</h2>
              <p className={styles.paragraph}>
                A Dra. Bruna Vilela oferece uma avaliação completa e um plano de tratamento personalizado para crianças com epilepsia. Sua abordagem visa não apenas o controle das crises, mas também o monitoramento do desenvolvimento neurológico da criança, o manejo dos efeitos colaterais e a orientação à família, buscando a melhor qualidade de vida possível para seu filho.
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

export default EpilepsiaPage; 