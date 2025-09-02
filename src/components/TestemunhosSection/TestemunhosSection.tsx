import React, { useState, useEffect } from 'react';
import styles from './TestemunhosSection.module.css';

interface Testemunho {
  id: number;
  nome: string;
  iniciais: string;
  condicao: string;
  texto: string;
  rating: number;
  idade_crianca?: string;
}

const TestemunhosSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Testemunhos reais (anonimizados para privacidade)
  const testemunhos: Testemunho[] = [
    {
      id: 1,
      nome: "Maria S.",
      iniciais: "M.S.",
      condicao: "TDAH",
      idade_crianca: "8 anos",
      texto: "A Dra. Bruna foi fundamental no diagnóstico do meu filho. Sua abordagem cuidadosa e científica nos deu a segurança que precisávamos. Hoje ele está muito melhor na escola e em casa.",
      rating: 5
    },
    {
      id: 2,
      nome: "Ana P.",
      iniciais: "A.P.",
      condicao: "TEA",
      idade_crianca: "5 anos",
      texto: "O acompanhamento com a Dra. Bruna transformou nossa família. Ela não apenas tratou nossa filha, mas nos ensinou como apoiá-la melhor. Gratidão eterna!",
      rating: 5
    },
    {
      id: 3,
      nome: "Carlos M.",
      iniciais: "C.M.",
      condicao: "Epilepsia",
      idade_crianca: "12 anos",
      texto: "Depois de anos buscando respostas, a Dra. Bruna conseguiu estabilizar as crises do meu filho. Sua competência e humanidade fazem toda a diferença.",
      rating: 5
    },
    {
      id: 4,
      nome: "Juliana F.",
      iniciais: "J.F.",
      condicao: "Atrasos no Desenvolvimento",
      idade_crianca: "3 anos",
      texto: "A intervenção precoce orientada pela Dra. Bruna foi essencial. Hoje minha filha está alcançando marcos que achávamos impossíveis. Muito obrigada!",
      rating: 5
    },
    {
      id: 5,
      nome: "Roberto L.",
      iniciais: "R.L.",
      condicao: "Cefaleia",
      idade_crianca: "10 anos",
      texto: "As dores de cabeça da minha filha eram constantes. Com o tratamento da Dra. Bruna, ela voltou a ser uma criança normal e feliz.",
      rating: 5
    }
  ];

  // Auto-rotate testemunhos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % testemunhos.length
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, [testemunhos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testemunhos.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testemunhos.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section className={styles.testemunhosSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            O que Dizem as Famílias
          </h2>
          <p className={styles.subtitle}>
            Depoimentos reais de pais e cuidadores que confiaram no nosso cuidado especializado
          </p>
        </div>

        <div className={styles.testemunhosContainer}>
          <button 
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Testemunho anterior"
          >
            ←
          </button>

          <div className={styles.testemunhoCard}>
            <div className={styles.cardContent}>
              <div className={styles.quote}>
                <span className={styles.quoteIcon}>"</span>
                <p className={styles.texto}>
                  {testemunhos[currentIndex].texto}
                </p>
                <span className={styles.quoteIcon}>"</span>
              </div>

              <div className={styles.rating}>
                <span className={styles.stars}>
                  {renderStars(testemunhos[currentIndex].rating)}
                </span>
              </div>

              <div className={styles.author}>
                <div className={styles.authorAvatar}>
                  {testemunhos[currentIndex].iniciais}
                </div>
                <div className={styles.authorInfo}>
                  <p className={styles.authorName}>
                    {testemunhos[currentIndex].nome}
                  </p>
                  <p className={styles.authorDetails}>
                    {testemunhos[currentIndex].condicao}
                    {testemunhos[currentIndex].idade_crianca && 
                      ` • Criança de ${testemunhos[currentIndex].idade_crianca}`
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button 
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Próximo testemunho"
          >
            →
          </button>
        </div>

        <div className={styles.indicators}>
          {testemunhos.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Ir para testemunho ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>500+</span>
            <span className={styles.trustLabel}>Famílias Atendidas</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>12+</span>
            <span className={styles.trustLabel}>Anos de Experiência</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustNumber}>95%</span>
            <span className={styles.trustLabel}>Satisfação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestemunhosSection;
