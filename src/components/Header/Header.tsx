import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" aria-label="Página inicial - Dra. Bruna Vilela">
            <img 
              src="/src/assets/images/identidade-visual/logo-dra-bruna-vilela-principal.webp"
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
            <li><Link to="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Início</Link></li>
            <li><Link to="/sobre" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Sobre Mim</Link></li>
            <li><Link to="/servicos" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Áreas de Atuação</Link></li>
            <li><Link to="/blog" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            <li><Link to="/contato" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contato</Link></li>
          </ul>
        </nav>

        <div className={styles.ctaContainer}>
          <Link to="/agendar" className={styles.ctaButton}>
            Agendar Consulta
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
