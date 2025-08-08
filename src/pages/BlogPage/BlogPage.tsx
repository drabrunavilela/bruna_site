import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './BlogPage.module.css';

// Importar imagens do blog
import fotoNeuropediatra18 from '../../assets/images/bruna/dra-bruna-vilela-neuropediatra-18.webp';
import fotoConsultorio04 from '../../assets/images/bruna/dra-bruna-vilela-consultorio-04.webp';
import fotoConsultorio03 from '../../assets/images/bruna/dra-bruna-vilela-consultorio-03.webp';
import fotoNeuropediatra17 from '../../assets/images/bruna/dra-bruna-vilela-neuropediatra-17.webp';
import fotoAcolhedora10 from '../../assets/images/bruna/dra-bruna-vilela-acolhedora-10.webp';
import fotoSorrindo02 from '../../assets/images/bruna/dra-bruna-vilela-sorrindo-02.webp';

const BlogPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');
  
  // Structured Data for Blog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog da Dra. Bruna Vilela - Neuropediatria",
    "description": "Artigos científicos sobre neuropediatria, TDAH, autismo, epilepsia e desenvolvimento infantil. Conhecimento científico traduzido para pais e profissionais.",
    "url": "https://drabrunavilela.com.br/blog",
    "publisher": {
      "@type": "Person",
      "name": "Dra. Bruna Vilela",
      "jobTitle": "Neuropediatra",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Belo Horizonte",
        "addressRegion": "MG",
        "addressCountry": "BR"
      }
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "TDAH: Além dos Rótulos – Uma Abordagem Integral",
        "description": "Descubra como uma visão científica e humana pode transformar a compreensão e o manejo do TDAH na vida do seu filho.",
        "datePublished": "2024-03-15",
        "author": {
          "@type": "Person",
          "name": "Dra. Bruna Vilela"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Dra. Bruna Vilela - Neuropediatra"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "Autismo: A Importância do Diagnóstico Precoce",
        "description": "Entenda como a identificação precoce pode fazer toda a diferença no desenvolvimento de crianças com TEA.",
        "datePublished": "2024-03-10",
        "author": {
          "@type": "Person",
          "name": "Dra. Bruna Vilela"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Dra. Bruna Vilela - Neuropediatra"
        }
      },
      {
        "@type": "BlogPosting",
        "headline": "Epilepsia Infantil: Mitos e Verdades",
        "description": "Desmistifique a epilepsia infantil. Conheça os diferentes tipos de crises e tratamentos disponíveis.",
        "datePublished": "2024-03-05",
        "author": {
          "@type": "Person",
          "name": "Dra. Bruna Vilela"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Dra. Bruna Vilela - Neuropediatra"
        }
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Blog - Conhecimento Científico em Neuropediatria | Dra. Bruna Vilela"
        description="Aprofunde-se na neuropediatria. O blog da Dra. Bruna Vilela oferece artigos científicos traduzidos, pesquisas e insights sobre desenvolvimento infantil, TDAH, autismo e mais."
        keywords="neuropediatra, blog, conhecimento científico"
        canonical="/blog"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* 1. Hero Section: "Conhecimento Científico: Informação Que Transforma" */}
        <section className={styles.heroBlogPage}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Conhecimento Científico: Informação Que Transforma
              </h1>
              <p className={styles.heroSubtitle}>
                Aprofunde-se nos temas da neuropediatria. Artigos, pesquisas traduzidas e insights da Dra. Bruna Vilela para empoderar você com a ciência mais atual, acessível e confiável.
              </p>
              <div className={styles.searchBarWrapper}>
                <input type="text" placeholder="Buscar artigos..." className={styles.searchInput} />
                <button className={styles.searchButton}>🔍</button>
              </div>
              <Link to="#artigos-recente" className={styles.buttonSecondary}>
                Ver Artigos Mais Recentes
              </Link>
            </div>
            <div className={styles.heroImageWrapper}>
              <img 
                src={fotoNeuropediatra18}
                alt="Dra. Bruna Vilela em consultório, demonstrando conhecimento científico"
                className={styles.heroImage}
              />
            </div>
          </div>
        </section>

        {/* 2. Artigos em Destaque */}
        <section id="artigos-recente" className={styles.sectionPadded}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Insights Selecionados para Você</h2>
            <p className={styles.paragraph}>
              Nossa seleção de artigos mais relevantes e de maior impacto, cuidadosamente elaborados para pais e profissionais. Cada artigo é baseado em evidências científicas e traduzido para uma linguagem acessível.
            </p>
            <div className={styles.relatedTopics}>
              <h3 className={styles.relatedTopicsTitle}>Tópicos Relacionados:</h3>
              <div className={styles.relatedTopicsLinks}>
                <Link to="/servicos/tdah" className={styles.relatedTopicLink}>TDAH</Link>
                <Link to="/servicos/tea" className={styles.relatedTopicLink}>Autismo</Link>
                <Link to="/servicos/epilepsia" className={styles.relatedTopicLink}>Epilepsia</Link>
                <Link to="/servicos/atrasos" className={styles.relatedTopicLink}>Atrasos no Desenvolvimento</Link>
                <Link to="/glossario" className={styles.relatedTopicLink}>Glossário Médico</Link>
              </div>
            </div>
            <div className={styles.articleGrid}>
              {/* Artigo 1 - TDAH */}
              <Link to="/blog/tdah-alem-dos-rotulos" className={styles.articleCard}>
                <img 
                  src={fotoConsultorio04} 
                  alt="Criança brincando com blocos, simbolizando desenvolvimento e aprendizado." 
                  className={styles.cardImage}
                  loading="lazy"
                  width="300"
                  height="200"
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>TDAH: Além dos Rótulos – Uma Abordagem Integral</h3>
                  <p className={styles.cardDescription}>
                    Descubra como uma visão científica e humana pode transformar a compreensão e o manejo do TDAH na vida do seu filho. Abordagem baseada em evidências científicas.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>15 de Março de 2024</span>
                    <span>8 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Desenvolvimento</span>
                    <span className={styles.tag}>TDAH</span>
                    <span className={styles.tag}>Neuropediatria</span>
                  </div>
                  <span className={styles.buttonLink}>Ler Artigo Completo →</span>
                </div>
              </Link>

              {/* Artigo 2 - Autismo */}
              <Link to="/blog/autismo-diagnostico-precoce" className={styles.articleCard}>
                <img 
                  src={fotoConsultorio03} 
                  alt="Criança com autismo em ambiente de aprendizado" 
                  className={styles.cardImage}
                  loading="lazy"
                  width="300"
                  height="200"
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Autismo: A Importância do Diagnóstico Precoce</h3>
                  <p className={styles.cardDescription}>
                    Entenda como a identificação precoce pode fazer toda a diferença no desenvolvimento de crianças com TEA. Sinais de alerta e intervenções baseadas em evidências.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>10 de Março de 2024</span>
                    <span>6 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Autismo</span>
                    <span className={styles.tag}>Diagnóstico</span>
                    <span className={styles.tag}>TEA</span>
                  </div>
                  <span className={styles.buttonLink}>Ler Artigo Completo →</span>
                </div>
              </Link>

              {/* Artigo 3 - Epilepsia */}
              <Link to="/blog/epilepsia-infantil" className={styles.articleCard}>
                <img 
                  src={fotoNeuropediatra17} 
                  alt="Criança em ambiente médico, simbolizando cuidado especializado" 
                  className={styles.cardImage}
                  loading="lazy"
                  width="300"
                  height="200"
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Epilepsia Infantil: Mitos e Verdades</h3>
                  <p className={styles.cardDescription}>
                    Desmistifique a epilepsia infantil. Conheça os diferentes tipos de crises, tratamentos disponíveis e como garantir qualidade de vida para a criança.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>5 de Março de 2024</span>
                    <span>7 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Epilepsia</span>
                    <span className={styles.tag}>Neurologia</span>
                    <span className={styles.tag}>Tratamento</span>
                  </div>
                  <span className={styles.buttonLink}>Ler Artigo Completo →</span>
                </div>
              </Link>

              {/* Artigo 4 - Desenvolvimento Infantil */}
              <Link to="/blog/desenvolvimento-infantil-marcos" className={styles.articleCard}>
                <img 
                  src={fotoAcolhedora10} 
                  alt="Criança brincando, simbolizando desenvolvimento saudável" 
                  className={styles.cardImage}
                  loading="lazy"
                  width="300"
                  height="200"
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Marcos do Desenvolvimento: O que Esperar em Cada Idade</h3>
                  <p className={styles.cardDescription}>
                    Guia completo dos marcos do desenvolvimento infantil. Saiba o que é normal, quando se preocupar e como estimular o desenvolvimento do seu filho.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>1 de Março de 2024</span>
                    <span>10 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Desenvolvimento</span>
                    <span className={styles.tag}>Marcos</span>
                    <span className={styles.tag}>Pediatria</span>
                  </div>
                  <span className={styles.buttonLink}>Ler Artigo Completo →</span>
                </div>
              </Link>

              {/* Artigo 5 - Atrasos no Desenvolvimento */}
              <Link to="/blog/atrasos-desenvolvimento-quando-procurar-ajuda" className={styles.articleCard}>
                <img 
                  src={fotoSorrindo02} 
                  alt="Criança em avaliação, simbolizando diagnóstico precoce" 
                  className={styles.cardImage}
                  loading="lazy"
                  width="300"
                  height="200"
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Atrasos no Desenvolvimento: Quando Procurar Ajuda</h3>
                  <p className={styles.cardDescription}>
                    Sinais de alerta para atrasos no desenvolvimento. Saiba quando é hora de buscar avaliação especializada e como a intervenção precoce pode fazer diferença.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>25 de Fevereiro de 2024</span>
                    <span>9 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Atrasos</span>
                    <span className={styles.tag}>Diagnóstico</span>
                    <span className={styles.tag}>Intervenção</span>
                  </div>
                  <span className={styles.buttonLink}>Ler Artigo Completo →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Categorias de Conteúdo */}
        <section className={`${styles.sectionPadded} ${styles.sectionSoftHighlight}`}>
          <div className={styles.container}>
            <div className={styles.narrowContent}>
              <h2 className={styles.sectionTitle}>Explore por Tema</h2>
              <div className={styles.categoryTagsGrid}>
                <Link to="/blog/categoria/desenvolvimento-infantil" className={styles.categoryTag}>Desenvolvimento Infantil</Link>
                <Link to="/blog/categoria/autismo" className={styles.categoryTag}>Autismo</Link>
                <Link to="/blog/categoria/tdah" className={styles.categoryTag}>TDAH</Link>
                <Link to="/blog/categoria/doencas-raras" className={styles.categoryTag}>Doenças Raras</Link>
                <Link to="/blog/categoria/atrasos-neurodesenvolvimento" className={styles.categoryTag}>Atrasos do Neurodesenvolvimento</Link>
                <Link to="/blog/categoria/epilepsia" className={styles.categoryTag}>Epilepsia</Link>
                <Link to="/blog/categoria/nutricao-cerebral" className={styles.categoryTag}>Nutrição Cerebral</Link>
                <Link to="/blog/categoria/pesquisas-evidencias" className={styles.categoryTag}>Pesquisas e Evidências</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Todos os Artigos */}
        <section className={styles.sectionPadded}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Nosso Acervo de Conhecimento</h2>
            <div className={styles.articleList}>
              {/* Artigo List Item 1 */}
              <div className={styles.articleListItem}>
                <img 
                  src={fotoConsultorio03} 
                  alt="Ícone de molécula, representando pesquisa científica." 
                  className={styles.listItemImage}
                />
                <div className={styles.listItemContent}>
                  <h3 className={styles.listItemTitle}>O Resveratrol e o TEA: O Que a Ciência Atual Sugere?</h3>
                  <p className={styles.listItemDescription}>
                    Uma análise aprofundada sobre as últimas pesquisas que investigam o potencial do resveratrol no Transtorno do Espectro Autista. [Leia mais...]
                  </p>
                  <div className={styles.articleMeta}>
                    <span>28 de Fevereiro de 2024</span>
                    <span>5 min de leitura</span>
                    <div className={styles.articleTags}>
                      <span className={styles.tag}>Pesquisa</span>
                      <span className={styles.tag}>Autismo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Artigo List Item 2 */}
              <div className={styles.articleListItem}>
                <img 
                  src={fotoConsultorio04} 
                  alt="Criança em desenvolvimento" 
                  className={styles.listItemImage}
                />
                <div className={styles.listItemContent}>
                  <h3 className={styles.listItemTitle}>Marcos do Desenvolvimento: O Que Esperar em Cada Idade</h3>
                  <p className={styles.listItemDescription}>
                    Um guia completo sobre os marcos de desenvolvimento infantil e quando buscar ajuda profissional. [Leia mais...]
                  </p>
                  <div className={styles.articleMeta}>
                    <span>20 de Fevereiro de 2024</span>
                    <span>10 min de leitura</span>
                    <div className={styles.articleTags}>
                      <span className={styles.tag}>Desenvolvimento</span>
                      <span className={styles.tag}>Pediatria</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pagination}>
              <Link 
                to="/blog?page=1" 
                className={`${styles.pageLink} ${currentPage === 1 ? styles.active : ''}`}
              >
                1
              </Link>
              <Link 
                to="/blog?page=2" 
                className={`${styles.pageLink} ${currentPage === 2 ? styles.active : ''}`}
              >
                2
              </Link>
              <Link 
                to="/blog?page=3" 
                className={`${styles.pageLink} ${currentPage === 3 ? styles.active : ''}`}
              >
                3
              </Link>
              <Link 
                to={`/blog?page=${currentPage < 3 ? currentPage + 1 : 3}`} 
                className={`${styles.pageLink} ${styles.next}`}
              >
                Próxima →
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Assine Nossa Newsletter Científica */}
        <section className={`${styles.sectionPadded} ${styles.callToActionBannerBlog}`}>
          <div className={styles.container}>
            <div className={`${styles.narrowContent} ${styles.textCenter}`}>
              <h2 className={styles.sectionTitleCta}>Receba Conhecimento na Sua Caixa de Entrada</h2>
              <p className={styles.paragraph}>
                Não perca os novos artigos, traduções de pesquisas e insights exclusivos da Dra. Bruna. Assine nossa newsletter e mantenha-se atualizado com o que há de mais relevante na neuropediatria.
              </p>
              <div className={styles.newsletterForm}>
                <input type="email" placeholder="Seu Melhor E-mail" className={styles.emailInput} />
                <button className={styles.buttonPrimary}>Assinar</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPage; 