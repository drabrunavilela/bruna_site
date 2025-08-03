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

                {/* Termo Neuroplasticidade */}
                <div className={styles.glossaryTerm} id="Neuroplasticidade">
                  <h3 className={styles.termTitle}>Neuroplasticidade</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Capacidade do cérebro de mudar, adaptar-se e se reorganizar ao longo da vida em resposta a novas experiências, aprendizado, lesões ou doenças. É a base para a reabilitação neurológica e o desenvolvimento de novas habilidades.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> A plasticidade cerebral é mais intensa na infância, o que ressalta a importância de intervenções precoces e estimulação adequada para o desenvolvimento neurológico.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#DesenvolvimentoInfantil">Desenvolvimento Infantil</Link>, <Link to="#IntervencaoPrecoce">Intervenção Precoce</Link>
                  </p>
                </div>

                {/* Termo Autismo */}
                <div className={styles.glossaryTerm} id="Autismo">
                  <h3 className={styles.termTitle}>Autismo</h3>
                  <p className={styles.termSubtitle}><em>Transtorno do Espectro Autista (TEA)</em></p>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Condição do neurodesenvolvimento caracterizada por desafios na comunicação social e interação, além de padrões restritos e repetitivos de comportamento, interesses ou atividades.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> O autismo é um espectro, o que significa que cada pessoa apresenta características únicas. O diagnóstico precoce e intervenções adequadas são fundamentais para o desenvolvimento.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#Neurodesenvolvimento">Neurodesenvolvimento</Link>, <Link to="#ComunicacaoSocial">Comunicação Social</Link>
                  </p>
                </div>

                {/* Termo Epilepsia */}
                <div className={styles.glossaryTerm} id="Epilepsia">
                  <h3 className={styles.termTitle}>Epilepsia</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Condição neurológica crônica caracterizada por crises epilépticas recorrentes e não provocadas, resultantes de atividade elétrica anormal no cérebro.
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> A epilepsia pode ter diversas causas e manifestações. O tratamento visa controlar as crises e melhorar a qualidade de vida, podendo incluir medicação, dieta especial ou cirurgia.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#CriseEpileptica">Crise Epiléptica</Link>, <Link to="#EEG">EEG</Link>
                  </p>
                </div>

                {/* Termo Atraso de Desenvolvimento */}
                <div className={styles.glossaryTerm} id="AtrasoDesenvolvimento">
                  <h3 className={styles.termTitle}>Atraso de Desenvolvimento</h3>
                  <p className={styles.termDefinition}>
                    <strong>Definição:</strong> Condição em que uma criança não atinge os marcos de desenvolvimento esperados para sua idade em uma ou mais áreas (motor, linguagem, cognitivo, social).
                  </p>
                  <p className={styles.termContext}>
                    <strong>Contexto:</strong> A identificação precoce é crucial, pois permite intervenções que podem melhorar significativamente o prognóstico. Cada criança tem seu ritmo, mas atrasos significativos merecem atenção.
                  </p>
                  <p className={styles.termSeeAlso}>
                    <strong>Ver Também:</strong> <Link to="#MarcosDesenvolvimento">Marcos de Desenvolvimento</Link>, <Link to="#IntervencaoPrecoce">Intervenção Precoce</Link>
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