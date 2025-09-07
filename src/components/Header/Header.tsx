import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import type { WindowWithAnalytics } from '../../types/analytics';
import ThemeToggle from '../ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" aria-label="Página inicial - Dra. Bruna Vilela" onClick={scrollToTop}>
            <img 
              src="/images/identidade-visual/logo-dra-bruna-vilela-header.webp"
              alt="Logotipo oficial Dra. Bruna Vilela - Neuropediatra e Pediatra"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <nav className={styles.navigation} role="navigation" aria-label="Navegação principal">
          <button 
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            aria-label="Abrir menu de navegação"
          >
            <span className={styles.menuIcon}></span>
          </button>

          <ul id="main-menu" className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`} role="menubar">
            <li role="none"><Link to="/" className={styles.navLink} onClick={handleNavigation} role="menuitem" aria-label="Navegar para página inicial">Início</Link></li>
            <li role="none"><Link to="/sobre" className={styles.navLink} onClick={handleNavigation} role="menuitem" aria-label="Navegar para página sobre a doutora">Sobre Mim</Link></li>
            <li role="none"><Link to="/servicos" className={styles.navLink} onClick={handleNavigation} role="menuitem" aria-label="Navegar para áreas de atuação médica">Áreas de Atuação</Link></li>
            <li role="none"><Link to="/blog" className={styles.navLink} onClick={handleNavigation} role="menuitem" aria-label="Navegar para blog médico">Blog</Link></li>
            <li role="none"><Link to="/contato" className={styles.navLink} onClick={handleNavigation} role="menuitem" aria-label="Navegar para página de contato">Contato</Link></li>
          </ul>
        </nav>

        <div className={styles.ctaContainer}>
          <ThemeToggle />
          <a 
            href="https://wa.me/5531973178377" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => (window as WindowWithAnalytics).trackWhatsAppClick?.()}
            aria-label="Agendar consulta via WhatsApp - Abre em nova aba"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
