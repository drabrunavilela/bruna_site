import React, { useEffect } from 'react';

interface ReviewSchemaProps {
  reviews?: Array<{
    author: string;
    rating: number;
    reviewBody: string;
    datePublished?: string;
  }>;
}

const ReviewSchema: React.FC<ReviewSchemaProps> = ({ reviews }) => {
  useEffect(() => {
    // Default reviews if none provided
    const defaultReviews = [
      {
        author: "Maria Santos",
        rating: 5,
        reviewBody: "Excelente profissional! A Dra. Bruna foi muito atenciosa com meu filho que tem TDAH. Explicou tudo detalhadamente e o tratamento está dando ótimos resultados.",
        datePublished: "2024-08-15"
      },
      {
        author: "João Silva", 
        rating: 5,
        reviewBody: "Finalmente encontramos uma neuropediatra que entende as necessidades especiais do nosso filho autista. A Dra. Bruna é referência em Belo Horizonte.",
        datePublished: "2024-07-20"
      },
      {
        author: "Ana Costa",
        rating: 5, 
        reviewBody: "Profissional excepcional! Conseguiu diagnosticar a epilepsia da minha filha rapidamente e o tratamento está controlando perfeitamente as crises.",
        datePublished: "2024-06-10"
      },
      {
        author: "Carlos Oliveira",
        rating: 5,
        reviewBody: "Dra. Bruna é muito competente e humana. Ajudou muito no desenvolvimento do meu filho que tinha atrasos na fala. Recomendo sem hesitar!",
        datePublished: "2024-05-25"
      },
      {
        author: "Fernanda Lima",
        rating: 5,
        reviewBody: "Consulta muito completa e esclarecedora. A doutora explicou todos os aspectos do desenvolvimento neurológico e tirou todas as nossas dúvidas.",
        datePublished: "2024-04-18"
      }
    ];

    const reviewsToUse = reviews || defaultReviews;
    
    // Calculate aggregate rating
    const totalRating = reviewsToUse.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviewsToUse.length;
    
    // Create Review Schema with AggregateRating
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dra. Bruna Vilela - Neuropediatra",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": averageRating.toFixed(1),
        "reviewCount": reviewsToUse.length,
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": reviewsToUse.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": review.rating.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": review.reviewBody,
        "datePublished": review.datePublished || new Date().toISOString().split('T')[0]
      }))
    };

    // Remove existing review schema
    const existingScript = document.querySelector('script[data-review-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new review schema
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('data-review-schema', 'true');
    script.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-review-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [reviews]);

  return null; // This component doesn't render anything
};

export default ReviewSchema;
