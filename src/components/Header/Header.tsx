import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logoHeader from '../../assets/images/identidade-visual/logo-dra-bruna-vilela-header.webp';

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
              src={logoHeader}
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

          <ul id="main-menu" className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ''}`}>
            <li><Link to="/" className={styles.navLink} onClick={handleNavigation}>Início</Link></li>
            <li><Link to="/sobre" className={styles.navLink} onClick={handleNavigation}>Sobre Mim</Link></li>
            <li><Link to="/servicos" className={styles.navLink} onClick={handleNavigation}>Áreas de Atuação</Link></li>
            <li><Link to="/blog" className={styles.navLink} onClick={handleNavigation}>Blog</Link></li>
            <li><Link to="/contato" className={styles.navLink} onClick={handleNavigation}>Contato</Link></li>
          </ul>
        </nav>

        <div className={styles.ctaContainer}>
          <a 
            href="https://wa.me/5531973178377" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={() => (window as any).trackWhatsAppClick?.()}
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
