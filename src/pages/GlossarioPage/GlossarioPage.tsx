import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './GlossarioPage.module.css';

const GlossarioPage: React.FC = () => {
  // Structured Data for Glossary
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Glossário Científico - Neuropediatria",
    "description": "Guia prático para entender os termos técnicos da neuropediatria e empoderar sua jornada com informação clara e precisa",
    "url": "https://drabrunavilela.com.br/glossario",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Termos de Neuropediatria",
      "description": "Glossário de termos científicos da neuropediatria",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "DefinedTerm",
            "name": "TDAH",
            "description": "Transtorno do Déficit de Atenção com Hiperatividade"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "DefinedTerm",
            "name": "Neuroplasticidade",
            "description": "Capacidade do cérebro de mudar e se reorganizar"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "DefinedTerm",
            "name": "Autismo",
            "description": "Transtorno do Espectro Autista (TEA)"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Glossário Científico - Descomplicando a Neuropediatria | Dra. Bruna Vilela"
        description="Descomplique a neuropediatria. Consulte o Glossário Científico da Dra. Bruna Vilela para entender termos técnicos de desenvolvimento infantil, autismo, TDAH e epilepsia."
        keywords="glossário neuropediatria, termos médicos, TDAH significado, autismo definição, epilepsia infantil, desenvolvimento infantil, neuropediatria termos"
        canonical="/glossario"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Glossário Científico: Descomplicando a Neuropediatria" */}
        <section className={styles.heroGlossaryPage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Glossário Científico: Descomplicando a Neuropediatria
              </h1>
              <p className={styles.heroSubtitle}>
                Um guia prático para entender os termos técnicos e empoderar sua jornada com informação clara, precisa e embasada, diretamente da expertise da Dra. Bruna Vilela.
              </p>
              <div className={styles.searchBarWrapper}>
                <input type="text" placeholder="Buscar termo..." className={styles.searchInput} />
                <button className={styles.searchButton}>🔍</button>
              </div>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"
                alt="Dra. Bruna Vilela em consultório, demonstrando conhecimento científico"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. Navegação Alfabética */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Encontre o que Você Procura</h2>
              <div className={styles.alphabetNav}>
                <Link to="#A" className={styles.alphabetLetter}>A</Link>
                <Link to="#B" className={styles.alphabetLetter}>B</Link>
                <Link to="#C" className={styles.alphabetLetter}>C</Link>
                <Link to="#D" className={styles.alphabetLetter}>D</Link>
                <Link to="#E" className={styles.alphabetLetter}>E</Link>
                <Link to="#F" className={styles.alphabetLetter}>F</Link>
                <Link to="#G" className={styles.alphabetLetter}>G</Link>
                <Link to="#H" className={styles.alphabetLetter}>H</Link>
                <Link to="#I" className={styles.alphabetLetter}>I</Link>
                <Link to="#J" className={styles.alphabetLetter}>J</Link>
                <Link to="#K" className={styles.alphabetLetter}>K</Link>
                <Link to="#L" className={styles.alphabetLetter}>L</Link>
                <Link to="#M" className={styles.alphabetLetter}>M</Link>
                <Link to="#N" className={styles.alphabetLetter}>N</Link>
                <Link to="#O" className={styles.alphabetLetter}>O</Link>
                <Link to="#P" className={styles.alphabetLetter}>P</Link>
                <Link to="#Q" className={styles.alphabetLetter}>Q</Link>
                <Link to="#R" className={styles.alphabetLetter}>R</Link>
                <Link to="#S" className={styles.alphabetLetter}>S</Link>
                <Link to="#T" className={styles.alphabetLetter}>T</Link>
                <Link to="#U" className={styles.alphabetLetter}>U</Link>
                <Link to="#V" className={styles.alphabetLetter}>V</Link>
                <Link to="#W" className={styles.alphabetLetter}>W</Link>
                <Link to="#X" className={styles.alphabetLetter}>X</Link>
                <Link to="#Y" className={styles.alphabetLetter}>Y</Link>
                <Link to="#Z" className={styles.alphabetLetter}>Z</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Listagem de Termos */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <div className={styles.glossaryList}>
                {/* Termo TDAH */}
                <div className={styles.glossaryTerm} id="TDAH">
                  <h3 className={styles.termTitle}>TDAH</h3>
                  <p className={styles.termSubtitle}><em>Transtorno do Déficit de Atenção com Hiperatividade</em></p>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Condição neurobiológica caracterizada por padrões persistentes de desatenção e/ou hiperatividade-impulsividade, que interferem no funcionamento ou desenvolvimento. Não se trata de falta de vontade ou preguiça, mas de diferenças na regulação de certas funções cerebrais.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> O diagnóstico é clínico e deve ser feito por um profissional qualificado. O tratamento geralmente envolve uma abordagem multimodal, com terapia comportamental, apoio educacional e, em alguns casos, medicação.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#FuncaoExecutiva">Função Executiva</Link>, <Link to="#Neurodesenvolvimento">Neurodesenvolvimento</Link>
                  </p>
                </div>

                {/* Termo TEA */}
                <div className={styles.glossaryTerm} id="TEA">
                  <h3 className={styles.termTitle}>TEA</h3>
                  <p className={styles.termSubtitle}><em>Transtorno do Espectro Autista</em></p>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Condição do neurodesenvolvimento caracterizada por diferenças na comunicação social e padrões restritos e repetitivos de comportamento, interesses ou atividades. O termo "espectro" indica a grande variabilidade na apresentação dos sintomas.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> O diagnóstico precoce é fundamental para intervenções eficazes. Cada pessoa com TEA é única, com necessidades e potencialidades específicas.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#Neurodesenvolvimento">Neurodesenvolvimento</Link>, <Link to="#IntervencaoPrecoce">Intervenção Precoce</Link>
                  </p>
                </div>

                {/* Termo Epilepsia */}
                <div className={styles.glossaryTerm} id="Epilepsia">
                  <h3 className={styles.termTitle}>Epilepsia</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Condição neurológica caracterizada por crises epilépticas recorrentes e não provocadas. Uma crise epiléptica é uma descarga elétrica anormal e excessiva no cérebro.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> A epilepsia é uma das condições neurológicas mais comuns na infância. O tratamento visa controlar as crises e garantir qualidade de vida.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#CrisesEpilepticas">Crises Epilépticas</Link>, <Link to="#EEG">EEG</Link>
                  </p>
                </div>

                {/* Termo Neurodesenvolvimento */}
                <div className={styles.glossaryTerm} id="Neurodesenvolvimento">
                  <h3 className={styles.termTitle}>Neurodesenvolvimento</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Processo de maturação e desenvolvimento do sistema nervoso, incluindo o crescimento do cérebro, formação de conexões neurais e aquisição de habilidades motoras, cognitivas, linguísticas e sociais.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> O neurodesenvolvimento segue uma sequência previsível, mas cada criança tem seu ritmo individual. A identificação de atrasos permite intervenções precoces.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#MarcosDesenvolvimento">Marcos do Desenvolvimento</Link>, <Link to="#AtrasosDesenvolvimento">Atrasos no Desenvolvimento</Link>
                  </p>
                </div>

                {/* Termo Função Executiva */}
                <div className={styles.glossaryTerm} id="FuncaoExecutiva">
                  <h3 className={styles.termTitle}>Função Executiva</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Conjunto de habilidades cognitivas que permitem planejar, organizar, iniciar e completar tarefas, controlar impulsos e adaptar-se a mudanças. Inclui atenção, memória de trabalho, flexibilidade cognitiva e controle inibitório.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> As funções executivas são fundamentais para o aprendizado e comportamento. Dificuldades nessas habilidades são comuns no TDAH.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#TDAH">TDAH</Link>, <Link to="#Atencao">Atenção</Link>
                  </p>
                </div>

                {/* Termo Intervenção Precoce */}
                <div className={styles.glossaryTerm} id="IntervencaoPrecoce">
                  <h3 className={styles.termTitle}>Intervenção Precoce</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Abordagem terapêutica iniciada nos primeiros anos de vida para crianças com atrasos no desenvolvimento ou condições neurodesenvolvimentais. Quanto mais cedo iniciada, melhores os resultados.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> A intervenção precoce aproveita a neuroplasticidade cerebral dos primeiros anos, maximizando o potencial de desenvolvimento da criança.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#Neuroplasticidade">Neuroplasticidade</Link>, <Link to="#TEA">TEA</Link>
                  </p>
                </div>

                {/* Termo Neuroplasticidade */}
                <div className={styles.glossaryTerm} id="Neuroplasticidade">
                  <h3 className={styles.termTitle}>Neuroplasticidade</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Capacidade do cérebro de se adaptar e reorganizar, formando novas conexões neurais em resposta a experiências, aprendizado ou lesões. É mais intensa nos primeiros anos de vida.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> A neuroplasticidade é a base científica das intervenções precoces. Permite que o cérebro se adapte e aprenda novas habilidades.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#IntervencaoPrecoce">Intervenção Precoce</Link>, <Link to="#Neurodesenvolvimento">Neurodesenvolvimento</Link>
                  </p>
                </div>

                {/* Termo Marcos do Desenvolvimento */}
                <div className={styles.glossaryTerm} id="MarcosDesenvolvimento">
                  <h3 className={styles.termTitle}>Marcos do Desenvolvimento</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Habilidades específicas que a maioria das crianças adquire em determinadas idades. Incluem marcos motores, linguísticos, cognitivos e sociais.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> Os marcos servem como guias para monitorar o desenvolvimento. Variações individuais são normais, mas atrasos significativos merecem avaliação.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#Neurodesenvolvimento">Neurodesenvolvimento</Link>, <Link to="#AtrasosDesenvolvimento">Atrasos no Desenvolvimento</Link>
                  </p>
                </div>

                {/* Termo Atrasos no Desenvolvimento */}
                <div className={styles.glossaryTerm} id="AtrasosDesenvolvimento">
                  <h3 className={styles.termTitle}>Atrasos no Desenvolvimento</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Quando uma criança não atinge os marcos do desenvolvimento esperados para sua idade. Pode afetar uma ou múltiplas áreas: motor, linguagem, cognitivo, social.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> Atrasos podem ser temporários ou indicar condições específicas. A avaliação especializada é essencial para identificar causas e planejar intervenções.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#MarcosDesenvolvimento">Marcos do Desenvolvimento</Link>, <Link to="#IntervencaoPrecoce">Intervenção Precoce</Link>
                  </p>
                </div>

                {/* Termo EEG */}
                <div className={styles.glossaryTerm} id="EEG">
                  <h3 className={styles.termTitle}>EEG</h3>
                  <p className={styles.termSubtitle}><em>Eletroencefalograma</em></p>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Exame que registra a atividade elétrica do cérebro através de eletrodos colocados no couro cabeludo. Fundamental para diagnosticar epilepsia e outras condições neurológicas.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> O EEG pode identificar padrões anormais de atividade cerebral, auxiliando no diagnóstico de epilepsia e outras condições neurológicas.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#Epilepsia">Epilepsia</Link>, <Link to="#CrisesEpilepticas">Crises Epilépticas</Link>
                  </p>
                </div>

                {/* Termo Crises Epilépticas */}
                <div className={styles.glossaryTerm} id="CrisesEpilepticas">
                  <h3 className={styles.termTitle}>Crises Epilépticas</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Episódios transitórios de sinais e/ou sintomas devido a atividade elétrica anormal e excessiva no cérebro. Podem manifestar-se de diversas formas.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> Nem todas as crises envolvem convulsões visíveis. Podem incluir ausências, movimentos involuntários ou sensações estranhas.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#Epilepsia">Epilepsia</Link>, <Link to="#EEG">EEG</Link>
                  </p>
                </div>

                {/* Termo Atenção */}
                <div className={styles.glossaryTerm} id="Atencao">
                  <h3 className={styles.termTitle}>Atenção</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Capacidade de focar e manter o foco em uma tarefa ou estímulo específico, ignorando distrações. É fundamental para o aprendizado e funcionamento diário.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> Dificuldades de atenção são centrais no TDAH, mas também podem ocorrer em outras condições ou como parte do desenvolvimento normal.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#TDAH">TDAH</Link>, <Link to="#FuncaoExecutiva">Função Executiva</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Sugira um Termo */}
        <section className={`${styles.sectionPadded} ${styles.callToActionBannerGlossary}`}>
          <div className={styles.container}>
            <div className={`${styles.narrowContent} ${styles.textCenter}`}>
              <h2 className={styles.sectionTitleCta}>Não Encontrou o que Procurava?</h2>
              <p className={styles.paragraph}>
                Nosso glossário está em constante expansão. Se houver algum termo que você gostaria que adicionássemos ou explicasse, envie sua sugestão!
              </p>
              <div className={styles.suggestionForm}>
                <input type="text" placeholder="Termo Sugerido" className={styles.formInput} />
                <input type="email" placeholder="Seu E-mail (Opcional)" className={styles.formInput} />
                <button className={styles.buttonPrimary}>Enviar Sugestão</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default GlossarioPage; 