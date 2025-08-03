import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './TeaPage.module.css';

const TeaPage: React.FC = () => {
  return (
    <>
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Transtorno do Espectro Autista (TEA): Diagnóstico Precoce, Intervenções e Apoio Familiar" */}
        <section className={styles.heroServicePage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Transtorno do Espectro Autista (TEA): Diagnóstico Precoce, Intervenções e Apoio Familiar
              </h1>
              <p className={styles.heroSubtitle}>
                O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento que afeta a comunicação social e o comportamento, manifestando-se de maneiras diversas em cada indivíduo – daí o termo "espectro". Compreender o TEA, seus sinais e as intervenções baseadas em evidências é o primeiro passo para oferecer o suporte necessário e maximizar o potencial de cada criança.
              </p>
              <a 
                href="https://wa.me/5531983501417" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.buttonPrimary}
              >
                Agende uma Avaliação Especializada
              </a>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp"
                alt="Dra. Bruna Vilela em consultório, demonstrando cuidado especializado para TEA"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. Compreendendo o TEA */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Compreendendo o TEA</h2>
              <p className={styles.paragraph}>
                O TEA é caracterizado por desafios em duas áreas principais:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Comunicação Social e Interação:</strong> Dificuldade em iniciar ou manter conversas, interpretar expressões faciais e corporais, compartilhar interesses ou emoções.</li>
                <li><strong>Padrões Restritos e Repetitivos de Comportamento, Interesses ou Atividades:</strong> Isso pode incluir movimentos repetitivos (estereotipias), apego excessivo a rotinas, interesses muito específicos e intensos, e hipo ou hipersensibilidade a estímulos sensoriais.</li>
              </ul>
              <p className={styles.paragraph}>
                É crucial entender que o TEA não é uma doença a ser "curada", mas uma condição que requer compreensão e estratégias de suporte para que a pessoa possa se desenvolver e viver com qualidade.
              </p>
            </div>
          </div>
        </section>

        {/* 3. A Importância Vital do Diagnóstico Precoce e Sinais de Alerta */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>A Importância Vital do Diagnóstico Precoce</h2>
              <p className={styles.paragraph}>
                A identificação do TEA em idades muito jovens é fundamental. Quanto mais cedo as intervenções começarem, maiores são as chances de promover um desenvolvimento mais positivo e melhores resultados a longo prazo. Os pais e cuidadores são os primeiros a notar os sinais.
              </p>
              <h3 className={styles.sectionSubtitle}>Sinais de Alerta para o TEA (em bebês e crianças pequenas):</h3>
              <ul className={styles.bulletListStyled}>
                <li><strong>Até 12 meses:</strong> Não balbucia, não aponta, não responde ao próprio nome, não faz contato visual sustentado.</li>
                <li><strong>Até 16 meses:</strong> Não fala nenhuma palavra.</li>
                <li><strong>Até 24 meses:</strong> Não junta duas palavras (frases espontâneas, não apenas repetição).</li>
                <li><strong>Qualquer idade:</strong> Perda de fala ou habilidades sociais previamente adquiridas, evita o contato visual, prefere brincar sozinho, dificuldade em imitar ou brincar de "faz de conta", não compartilha alegria ou interesse com os pais, reações incomuns a sons, cheiros, texturas.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Processo de Diagnóstico e Intervenções Baseadas em Evidências */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Processo de Diagnóstico</h2>
              <p className={styles.paragraph}>
                O diagnóstico é clínico e realizado por um neuropediatra experiente, muitas vezes com a colaboração de uma equipe multidisciplinar. Envolve:
              </p>
              <ul className={styles.bulletListStyled}>
                <li>Observação direta da criança.</li>
                <li>Entrevista detalhada com os pais sobre o histórico de desenvolvimento e comportamento.</li>
                <li>Uso de instrumentos de rastreamento e avaliação validados.</li>
                <li>Descarte de outras condições que possam causar sintomas semelhantes.</li>
              </ul>
              
              <h2 className={styles.sectionTitle}>Intervenções Baseadas em Evidências para o TEA</h2>
              <p className={styles.paragraph}>
                Uma vez diagnosticado, um plano de intervenção individualizado é essencial. As intervenções mais eficazes são baseadas em evidências científicas e podem incluir:
              </p>
              <ul className={styles.bulletListStyled}>
                <li><strong>Análise do Comportamento Aplicada (ABA):</strong> Metodologia amplamente estudada que ensina habilidades sociais, de comunicação e de vida.</li>
                <li><strong>Fonoaudiologia:</strong> Para desenvolver habilidades de comunicação verbal e não verbal.</li>
                <li><strong>Terapia Ocupacional:</strong> Para auxiliar na integração sensorial, motricidade fina e habilidades de autocuidado.</li>
                <li><strong>Psicomotricidade:</strong> Trabalha o desenvolvimento global da criança através do movimento.</li>
                <li><strong>Psicologia:</strong> Apoio emocional à criança e à família, e intervenções comportamentais.</li>
                <li><strong>Fisioterapia:</strong> Quando há necessidades motoras específicas.</li>
              </ul>
              <p className={styles.paragraph}>
                O plano de tratamento é flexível e se adapta às mudanças nas necessidades da criança ao longo do tempo.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Suporte Familiar: O Alicerce do Desenvolvimento */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Suporte Familiar: O Alicerce do Desenvolvimento</h2>
              <p className={styles.paragraph}>
                O papel da família é insubstituível. A psicoeducação para os pais e cuidadores é vital, capacitando-os a entender o TEA, implementar estratégias em casa e defender os direitos de seus filhos. Grupos de apoio e redes de suporte também são importantes para compartilhar experiências e reduzir o isolamento.
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
                A Dra. Bruna Vilela compreende a jornada das famílias com TEA. Ela oferece um diagnóstico preciso e compassivo, desenvolve planos de tratamento individualizados baseados nas mais recentes evidências científicas e orienta as famílias em cada passo do caminho, garantindo que a criança receba o apoio necessário para alcançar seu máximo potencial em um ambiente acolhedor e compreensivo.
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

export default TeaPage; 