import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './AtrasosPage.module.css';
import fotoNeuropediatra12 from "../../assets/images/bruna/dra-bruna-vilela-neuropediatra-12.webp";
import type { WindowWithAnalytics } from '../../types/analytics';

const AtrasosPage: React.FC = () => {
  // Structured Data for Atrasos Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalService",
    "name": "Avaliação de Atrasos no Neurodesenvolvimento",
    "description": "Identificação precoce e intervenção para atrasos no desenvolvimento infantil",
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
        title="Atrasos no Neurodesenvolvimento - Avaliação e Intervenção | Dra. Bruna Vilela Neuropediatra em Belo Horizonte"
        description="Especialista em atrasos no neurodesenvolvimento em Belo Horizonte. Dra. Bruna Vilela oferece avaliação abrangente e intervenção precoce para crianças com atrasos no desenvolvimento."
        keywords="atrasos desenvolvimento, neuropediatra, pediatra, belo horizonte"
        canonical="/servicos/atrasos"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Atrasos no Neurodesenvolvimento: Identificação, Avaliação e Intervenção Precisa" */}
        <section className={styles.heroServicePage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Atrasos no Neurodesenvolvimento: Identificação, Avaliação e Intervenção Precisa
              </h1>
              <p className={styles.heroSubtitle}>
                O desenvolvimento infantil é um processo dinâmico e complexo, onde cada criança atinge marcos importantes em diferentes ritmos. No entanto, quando há uma lacuna significativa entre o que é esperado para a idade e o que a criança consegue fazer, falamos em atrasos no neurodesenvolvimento. A identificação precoce e a avaliação abrangente são cruciais para que as intervenções possam ser iniciadas no momento certo, aproveitando as "janelas de oportunidade" do cérebro em desenvolvimento.
              </p>
              <Link to="#o-que-sao-atrasos" className={styles.buttonPrimary} onClick={() => document.getElementById('o-que-sao-atrasos')?.scrollIntoView({ behavior: 'smooth' })}>
                Entenda os Atrasos
              </Link>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src={fotoNeuropediatra12}
                alt="Dra. Bruna Vilela, especialista em neurodesenvolvimento infantil"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. O que são Atrasos no Neurodesenvolvimento? */}
        <section id="o-que-sao-atrasos" className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>O que são Atrasos no Neurodesenvolvimento?</h2>
              <p className={styles.paragraph}>
                São condições que afetam o desenvolvimento de habilidades em diversas áreas, como:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Atraso na Fala e Linguagem:</strong> Dificuldade em compreender (linguagem receptiva) ou expressar (linguagem expressiva) ideias, palavras e frases. Pode incluir atraso para balbuciar, falar as primeiras palavras, formar frases ou dificuldade em se comunicar socialmente.</li>
                <li><strong>Atraso Motor:</strong>
                  <ul>
                    <li><strong>Motor Grosso:</strong> Dificuldade em adquirir habilidades como sentar sem apoio, engatinhar, andar, correr, pular, ou coordenação motora geral.</li>
                    <li><strong>Motor Fino:</strong> Dificuldade em usar as mãos e dedos para tarefas delicadas como pegar objetos pequenos, desenhar, escrever, abotoar roupas.</li>
                  </ul>
                </li>
                <li><strong>Atraso Cognitivo:</strong> Dificuldade no raciocínio, resolução de problemas, aprendizado de novos conceitos, memória e atenção.</li>
                <li><strong>Atraso Social e Emocional:</strong> Dificuldade em interagir com outras pessoas, expressar emoções de forma apropriada, brincar em grupo ou entender as dicas sociais.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Causas Potenciais dos Atrasos e a Crucial Importância da Avaliação Abrangente */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Causas Potenciais dos Atrasos</h2>
              <p className={styles.paragraph}>
                Os atrasos no neurodesenvolvimento podem ter diversas causas, incluindo:
              </p>
              <ul className={styles.bulletListStyled}>
                <li>Fatores genéticos e condições cromossômicas (ex: Síndrome de Down, Síndrome do X Frágil).</li>
                <li>Problemas durante a gravidez (infecções, exposição a toxinas).</li>
                <li>Nascimento prematuro ou complicações no parto.</li>
                <li>Condições médicas pós-nascimento (infecções graves, lesões cerebrais, exposição a toxinas).</li>
                <li>Fatores ambientais (privação, desnutrição severa).</li>
                <li>Distúrbios metabólicos ou neurológicos.</li>
              </ul>
              <p className={styles.paragraph}>
                Muitas vezes, a causa específica não é identificada, mas a intervenção continua sendo eficaz.
              </p>

              <h2 className={styles.sectionTitle}>A Crucial Importância da Avaliação Abrangente</h2>
              <p className={styles.paragraph}>
                Quando os pais percebem que algo não está progredindo como o esperado, é fundamental buscar ajuda profissional. Não ignore os sinais, mesmo que "pequenos", pois o cérebro da criança é mais maleável nos primeiros anos de vida.
              </p>
              <p className={styles.paragraph}>
                Uma avaliação completa por um neuropediatra envolve:
              </p>
              <ol className={styles.numberedListStyled}>
                <li><strong>Histórico Detalhado:</strong> Anamnese cuidadosa sobre o desenvolvimento pré-natal, perinatal e pós-natal da criança, marcos de desenvolvimento atingidos, e preocupações dos pais.</li>
                <li><strong>Exame Físico e Neurológico:</strong> Avaliação do tônus muscular, reflexos, coordenação e a presença de outros sinais neurológicos.</li>
                <li><strong>Avaliação do Desenvolvimento:</strong> Observação do comportamento e habilidades da criança em diferentes domínios (motor, linguagem, social, cognitivo).</li>
                <li><strong>Exames Complementares (se necessário):</strong> Podem incluir exames de sangue, exames genéticos, ressonância magnética cerebral ou eletroencefalograma para investigar a causa subjacente do atraso.</li>
                <li><strong>Encaminhamento para Equipe Multidisciplinar:</strong> A avaliação pode envolver a colaboração com fonoaudiólogos, terapeutas ocupacionais, fisioterapeutas e psicólogos para um diagnóstico e plano de intervenção mais precisos.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 4. Intervenção Personalizada e Precoce */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Intervenção Personalizada e Precoce</h2>
              <p className={styles.paragraph}>
                Com base na avaliação, um plano de intervenção personalizado é desenvolvido. As terapias podem incluir:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Fonoaudiologia:</strong> Para atrasos na fala e linguagem.</li>
                <li><strong>Fisioterapia:</strong> Para atrasos motores grossos.</li>
                <li><strong>Terapia Ocupacional:</strong> Para atrasos motores finos, integração sensorial e habilidades de autocuidado.</li>
                <li><strong>Psicologia/Terapia Comportamental:</strong> Para atrasos sociais, emocionais e cognitivos.</li>
                <li><strong>Estimulação Cognitiva:</strong> Para desenvolver habilidades de raciocínio e aprendizado.</li>
              </ul>
              <p className={styles.paragraph}>
                O objetivo é fornecer o suporte necessário para que a criança possa superar desafios, desenvolver novas habilidades e participar plenamente da vida.
              </p>
            </div>
          </div>
        </section>

        {/* 5. A Abordagem da Dra. Bruna */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>A Abordagem da Dra. Bruna</h2>
              <p className={styles.paragraph}>
                A Dra. Bruna Vilela dedica-se a identificar precocemente os atrasos no neurodesenvolvimento, investigando suas causas e desenvolvendo um plano de intervenção abrangente e personalizado para cada criança. Sua abordagem integra o conhecimento científico com um profundo acolhimento familiar, guiando pais e cuidadores nesse caminho de desenvolvimento e potencial.
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

export default AtrasosPage; 