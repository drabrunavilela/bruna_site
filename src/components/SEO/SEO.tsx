import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noIndex?: boolean;
  structuredData?: object;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTag?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/images/identidade-visual/logo-dra-bruna-vilela-profissional.webp",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  structuredData,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  articleSection,
  articleTag
}) => {
  const baseUrl = "https://www.brunavilelaneuroped.com.br";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);
    
    // Update Open Graph tags
    const updateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(`meta[property="${property}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateMetaTag('og:type', ogType);
    updateMetaTag('og:url', fullCanonical);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', fullOgImage);
    
    // Add article-specific meta tags if provided
    if (articlePublishedTime) {
      updateMetaTag('article:published_time', articlePublishedTime);
    }
    if (articleModifiedTime) {
      updateMetaTag('article:modified_time', articleModifiedTime);
    }
    if (articleAuthor) {
      updateMetaTag('article:author', articleAuthor);
    }
    if (articleSection) {
      updateMetaTag('article:section', articleSection);
    }
    if (articleTag && articleTag.length > 0) {
      articleTag.forEach(tag => {
        updateMetaTag('article:tag', tag);
      });
    }
    
    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string) => {
      let metaTag = document.querySelector(`meta[name="${name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', content);
    };
    
    updateTwitterTag('twitter:card', twitterCard);
    updateTwitterTag('twitter:url', fullCanonical);
    updateTwitterTag('twitter:title', title);
    updateTwitterTag('twitter:description', description);
    updateTwitterTag('twitter:image', fullOgImage);
    
    // Add structured data if provided
    if (structuredData) {
      // Remove existing structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"][data-seo-schema]');
      if (existingScript) {
        existingScript.remove();
      }
      
      // Add new structured data
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-schema', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Add expanded FAQ Schema for medical specialties
    const expandedFAQSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        // TDAH - 4 perguntas
        {
          "@type": "Question",
          "name": "Quais são os principais sintomas do TDAH em crianças?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os principais sintomas do TDAH incluem dificuldade de concentração, hiperatividade, impulsividade, desatenção em atividades, dificuldade para seguir instruções e inquietação motora. É importante uma avaliação profissional para diagnóstico correto."
          }
        },
        {
          "@type": "Question", 
          "name": "Como é feito o diagnóstico de TDAH?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O diagnóstico de TDAH é clínico, baseado em critérios específicos, avaliação comportamental, histórico escolar e familiar. A Dra. Bruna Vilela utiliza protocolos padronizados e avaliação multidisciplinar para um diagnóstico preciso."
          }
        },
        {
          "@type": "Question",
          "name": "Qual a idade ideal para avaliar TDAH?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "O TDAH pode ser avaliado a partir dos 4-5 anos de idade, quando os sintomas se tornam mais evidentes no ambiente escolar. Quanto mais precoce o diagnóstico e intervenção, melhores os resultados no desenvolvimento da criança."
          }
        },
        {
          "@type": "Question",
          "name": "O tratamento de TDAH sempre inclui medicação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não necessariamente. O tratamento é individualizado e pode incluir terapia comportamental, orientação escolar, mudanças no ambiente e, quando necessário, medicação. A Dra. Bruna avalia cada caso para definir a melhor abordagem."
          }
        },
        // Autismo/TEA - 4 perguntas  
        {
          "@type": "Question",
          "name": "Quais são os primeiros sinais de autismo em bebês?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sinais precoces incluem pouco contato visual, atraso na fala, comportamentos repetitivos, dificuldade de interação social e sensibilidade sensorial. A avaliação precoce é fundamental para intervenção adequada."
          }
        },
        {
          "@type": "Question",
          "name": "Como é feito o diagnóstico de autismo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O diagnóstico é clínico, baseado em observação comportamental, escalas padronizadas como ADOS e ADI-R, e avaliação do desenvolvimento. A Dra. Bruna utiliza protocolos internacionais para diagnóstico preciso do TEA."
          }
        },
        {
          "@type": "Question",
          "name": "Quais terapias são recomendadas para crianças com autismo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As principais terapias incluem ABA, fonoaudiologia, terapia ocupacional, psicoterapia e integração sensorial. O plano terapêutico é individualizado conforme as necessidades específicas de cada criança."
          }
        },
        {
          "@type": "Question",
          "name": "Como a família pode ajudar no desenvolvimento da criança com autismo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A família é fundamental no processo. Orientações incluem criar rotinas estruturadas, usar comunicação clara, estimular interações sociais adequadas e seguir as orientações terapêuticas. O apoio familiar potencializa os resultados."
          }
        },
        // Epilepsia - 3 perguntas
        {
          "@type": "Question",
          "name": "Quais são os tipos mais comuns de epilepsia infantil?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os tipos mais comuns incluem epilepsia focal, generalizada, ausências típicas e síndrome de West. Cada tipo tem características específicas e requer abordagem terapêutica diferenciada pela neuropediatra."
          }
        },
        {
          "@type": "Question",
          "name": "Como agir durante uma crise epiléptica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mantenha a calma, proteja a criança de machucados, coloque-a de lado, não coloque objetos na boca, cronometre a crise e procure atendimento se durar mais de 5 minutos ou se houver dificuldade respiratória."
          }
        },
        {
          "@type": "Question",
          "name": "A medicação para epilepsia tem efeitos colaterais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As medicações antiepilépticas podem ter efeitos colaterais, mas são geralmente bem toleradas. A Dra. Bruna monitora cuidadosamente cada paciente, ajustando doses e medicações para minimizar efeitos adversos."
          }
        },
        // Desenvolvimento - 2 perguntas
        {
          "@type": "Question",
          "name": "Quais são os marcos do desenvolvimento neurológico normal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Marcos incluem sorrir (2 meses), sustentar cabeça (3-4 meses), sentar (6 meses), andar (12-15 meses), primeiras palavras (12 meses) e frases (24 meses). Variações são normais, mas atrasos significativos devem ser avaliados."
          }
        },
        {
          "@type": "Question",
          "name": "Quando devo me preocupar com atrasos no desenvolvimento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Procure avaliação se houver atraso significativo nos marcos, perda de habilidades já adquiridas, ausência de interação social, atraso importante na fala ou comportamentos atípicos. A intervenção precoce é sempre mais eficaz."
          }
        },
        // Geral - 2 perguntas
        {
          "@type": "Question",
          "name": "Quando procurar um neuropediatra?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Procure um neuropediatra para atrasos no desenvolvimento, convulsões, dores de cabeça recorrentes, problemas de aprendizagem, alterações comportamentais significativas ou quando o pediatra recomendar avaliação especializada."
          }
        },
        {
          "@type": "Question",
          "name": "Como é a primeira consulta com a Dra. Bruna Vilela?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A primeira consulta inclui anamnese detalhada, exame neurológico completo, avaliação do desenvolvimento, orientações aos pais e definição de plano terapêutico. Traga exames anteriores, relatórios escolares e lista de medicações."
          }
        }
      ]
    };

    // Add FAQ Schema to page
    const existingFAQScript = document.querySelector('script[data-faq-schema]');
    if (existingFAQScript) {
      existingFAQScript.remove();
    }
    
    const faqScript = document.createElement('script');
    faqScript.setAttribute('type', 'application/ld+json');
    faqScript.setAttribute('data-faq-schema', 'true');
    faqScript.textContent = JSON.stringify(expandedFAQSchema);
    document.head.appendChild(faqScript);
    
    // Update robots
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', noIndex ? 'noindex, nofollow' : 'index, follow');
    
  }, [title, description, keywords, fullCanonical, fullOgImage, ogType, twitterCard, noIndex, structuredData, articlePublishedTime, articleModifiedTime, articleAuthor, articleSection, articleTag]);

  return null; // This component doesn't render anything
};

export default SEO; 