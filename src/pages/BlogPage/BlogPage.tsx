import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './BlogPage.module.css';

const BlogPage: React.FC = () => {
  // Structured Data for Blog
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog da Dra. Bruna Vilela",
    "description": "Artigos científicos e insights sobre neuropediatria, desenvolvimento infantil, TDAH, autismo e epilepsia",
    "url": "https://drabrunavilela.com.br/blog",
    "publisher": {
      "@type": "Person",
      "name": "Dra. Bruna Vilela",
      "jobTitle": "Neuropediatra e Pediatra"
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "TDAH: Além dos Rótulos – Uma Abordagem Integral",
        "description": "Descubra como uma visão científica e humana pode transformar a compreensão e o manejo do TDAH na vida do seu filho.",
        "author": {
          "@type": "Person",
          "name": "Dra. Bruna Vilela"
        },
        "datePublished": "2024-12-20",
        "dateModified": "2024-12-20",
        "url": "https://drabrunavilela.com.br/blog/tdah-alem-dos-rotulos"
      },
      {
        "@type": "BlogPosting",
        "headline": "Autismo: A Importância do Diagnóstico Precoce",
        "description": "Entenda como a identificação precoce pode fazer toda a diferença no desenvolvimento de crianças com TEA.",
        "author": {
          "@type": "Person",
          "name": "Dra. Bruna Vilela"
        },
        "datePublished": "2024-12-20",
        "dateModified": "2024-12-20",
        "url": "https://drabrunavilela.com.br/blog/autismo-diagnostico-precoce"
      },
      {
        "@type": "BlogPosting",
        "headline": "Epilepsia Infantil: Compreendendo e Tratando",
        "description": "Guia completo sobre epilepsia infantil, diagnóstico e tratamento especializado.",
        "author": {
          "@type": "Person",
          "name": "Dra. Bruna Vilela"
        },
        "datePublished": "2024-12-20",
        "dateModified": "2024-12-20",
        "url": "https://drabrunavilela.com.br/blog/epilepsia-infantil"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Blog - Conhecimento Científico em Neuropediatria | Dra. Bruna Vilela"
        description="Aprofunde-se na neuropediatria. O blog da Dra. Bruna Vilela oferece artigos científicos traduzidos, pesquisas e insights sobre desenvolvimento infantil, TDAH, autismo e mais."
        keywords="blog neuropediatria, artigos TDAH, autismo infantil, epilepsia criança, desenvolvimento infantil, neuropediatra blog, conhecimento científico"
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
                src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp"
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
              Nossa seleção de artigos mais relevantes e de maior impacto, cuidadosamente elaborados para pais e profissionais.
            </p>
            <div className={styles.articleGrid}>
              {/* Artigo 1 */}
              <Link to="/blog/tdah-alem-dos-rotulos" className={styles.articleCard}>
                <img 
                  src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp" 
                  alt="Criança brincando com blocos, simbolizando desenvolvimento e aprendizado." 
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>TDAH: Além dos Rótulos – Uma Abordagem Integral</h3>
                  <p className={styles.cardDescription}>
                    Descubra como uma visão científica e humana pode transformar a compreensão e o manejo do TDAH na vida do seu filho.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>15 de Março de 2024</span>
                    <span>8 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Desenvolvimento</span>
                    <span className={styles.tag}>TDAH</span>
                  </div>
                  <span className={styles.buttonLink}>Ler Artigo Completo →</span>
                </div>
              </Link>

              {/* Artigo 2 */}
              <Link to="/blog/autismo-diagnostico-precoce" className={styles.articleCard}>
                <img 
                  src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp" 
                  alt="Criança com autismo em ambiente de aprendizado" 
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Autismo: A Importância do Diagnóstico Precoce</h3>
                  <p className={styles.cardDescription}>
                    Entenda como a identificação precoce pode fazer toda a diferença no desenvolvimento de crianças com TEA.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>10 de Março de 2024</span>
                    <span>6 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Autismo</span>
                    <span className={styles.tag}>Diagnóstico</span>
                  </div>
                  <span className={styles.buttonLink}>Ler Artigo Completo →</span>
                </div>
              </Link>

              {/* Artigo 3 */}
              <Link to="/blog/epilepsia-infantil" className={styles.articleCard}>
                <img 
                  src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp" 
                  alt="Cérebro infantil e conexões neurais" 
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>Epilepsia Infantil: Mitos e Verdades</h3>
                  <p className={styles.cardDescription}>
                    Desmistifique os principais conceitos sobre epilepsia em crianças e conheça os tratamentos mais eficazes.
                  </p>
                  <div className={styles.articleMeta}>
                    <span>5 de Março de 2024</span>
                    <span>7 min de leitura</span>
                  </div>
                  <div className={styles.articleTags}>
                    <span className={styles.tag}>Epilepsia</span>
                    <span className={styles.tag}>Neurologia</span>
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
                  src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-03.webp" 
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
                  src="/src/assets/images/bruna/dra-bruna-vilela-consultorio-04.webp" 
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
              <Link to="#" className={styles.pageLink}>1</Link>
              <Link to="#" className={`${styles.pageLink} ${styles.active}`}>2</Link>
              <Link to="#" className={styles.pageLink}>3</Link>
              <Link to="#" className={`${styles.pageLink} ${styles.next}`}>Próxima →</Link>
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