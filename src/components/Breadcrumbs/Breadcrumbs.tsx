import React, { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  const breadcrumbs = useMemo((): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbList: BreadcrumbItem[] = [
      { label: 'Início', path: '/' }
    ];

    if (pathSegments.length === 0) {
      return breadcrumbList;
    }

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      
      // Mapear segmentos para labels amigáveis
      const labelMap: { [key: string]: string } = {
        'sobre': 'Sobre',
        'servicos': 'Serviços',
        'tdah': 'TDAH',
        'tea': 'TEA',
        'epilepsia': 'Epilepsia',
        'atrasos': 'Atrasos no Desenvolvimento',
        'cefaleias': 'Cefaleias',
        'segunda-opiniao': 'Segunda Opinião',
        'blog': 'Blog',
        'glossario': 'Glossário',
        'contato': 'Contato',
        'politica-privacidade': 'Política de Privacidade'
      };

      const label = labelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbList.push({ label, path: currentPath });
    });

    return breadcrumbList;
  }, [location.pathname]);

  // Adicionar Schema.org BreadcrumbList JSON-LD
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://brunavilelaneuroped.com.br${item.path === '/' ? '' : item.path}`
      }))
    };

    // Remover schema anterior se existir
    const existingScript = document.querySelector('script[data-breadcrumb-schema]');
    if (existingScript) {
      existingScript.remove();
    }

    // Adicionar novo schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-breadcrumb-schema', 'true');
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[data-breadcrumb-schema]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [breadcrumbs]);

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className={styles.breadcrumbItem}>
            {index === breadcrumbs.length - 1 ? (
              <span className={styles.currentPage} aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link to={item.path} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
                <span className={styles.separator}>/</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
