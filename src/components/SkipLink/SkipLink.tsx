import React from 'react';
import styles from './SkipLink.module.css';

interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ 
  href = '#main-content', 
  children = 'Pular para o conteúdo principal' 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focar no elemento alvo para leitores de tela
      (target as HTMLElement).focus();
    }
  };

  return (
    <a 
      href={href} 
      className={styles.skipLink}
      onClick={handleClick}
      aria-label={`${children} - Pressione Enter para navegar`}
    >
      {children}
    </a>
  );
};

export default SkipLink;
