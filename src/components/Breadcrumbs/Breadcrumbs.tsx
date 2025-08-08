import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Início', path: '/' }
    ];

    if (pathSegments.length === 0) {
      return breadcrumbs;
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
      breadcrumbs.push({ label, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

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
