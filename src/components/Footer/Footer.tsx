import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = () => {
    scrollToTop();
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Linha de Separação Superior */}
        <div className={styles.divider}></div>
        
        <div className={styles.footerContent}>
          {/* Seção de Informações da Dra. Bruna */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Dra. Bruna Vilela</h3>
            <p className={styles.footerSubtitle}>Neuropediatra e Pediatra</p>
            <p className={styles.footerDescription}>
              Especialista em neuropediatria e pediatria com abordagem científica e humanizada. 
              Referência em Belo Horizonte para o cuidado integral da criança.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Navegação</h4>
            <nav className={styles.footerNav} aria-label="Links de navegação do rodapé">
              <ul className={styles.footerNavList}>
                <li><Link to="/" className={styles.footerLink} onClick={handleNavigation}>Início</Link></li>
                <li><Link to="/sobre" className={styles.footerLink} onClick={handleNavigation}>Sobre Mim</Link></li>
                <li><Link to="/servicos" className={styles.footerLink} onClick={handleNavigation}>Áreas de Atuação</Link></li>
                <li><Link to="/blog" className={styles.footerLink} onClick={handleNavigation}>Blog</Link></li>
                <li><Link to="/contato" className={styles.footerLink} onClick={handleNavigation}>Contato</Link></li>
              </ul>
            </nav>
          </div>

          {/* Áreas de Atuação */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Especialidades</h4>
            <ul className={styles.specialtiesList}>
              <li>Neuropediatria</li>
              <li>Pediatria Geral</li>
              <li>Doenças Raras</li>
              <li>Desenvolvimento Infantil</li>
              <li>Tratamento Personalizado</li>
            </ul>
          </div>

          {/* Contato e Agendamento */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <strong>Endereço:</strong><br />
                Avenida Raja Gabaglia 2000, Torre 1, Sala 313<br />
                Bairro Belvedere, Belo Horizonte - MG
              </p>
              <p className={styles.contactItem}>
                <strong>Telefone:</strong> (31) 98350-1417 (WhatsApp)<br />
                <strong>Telefone:</strong> (31) 3291-9009
              </p>
              <p className={styles.contactItem}>
                <strong>E-mail:</strong> brunavilela.neuroped@gmail.com
              </p>
              <p className={styles.contactItem}>
                <strong>Atendimento:</strong> Segunda a Sexta
              </p>
              <a 
                href="https://wa.me/5531983501417" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className={styles.dividerBottom}></div>

        {/* Copyright e Links Legais */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} Dra. Bruna Vilela. Todos os direitos reservados.</p>
          </div>
          <div className={styles.legalLinks}>
            <Link to="/politica-privacidade" className={styles.legalLink} onClick={handleNavigation}>
              Política de Privacidade
            </Link>
            <Link to="/termos-uso" className={styles.legalLink} onClick={handleNavigation}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 