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
  return (
    <a 
      href={href} 
      className={styles.skipLink}
      tabIndex={0}
    >
      {children}
    </a>
  );
};

export default SkipLink;
