import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import whatsappIcon from '../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Whatsapp.png';
import instagramIcon from '../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Instagram.png';
import doctoraliaIcon from '../../assets/images/Icon/dra-bruna-vilela-neuropediatra-logo-Doctoralia.png';

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
            
            <div className={styles.footerSocialIcons}>
              <a 
                href="https://wa.me/5531973178377" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
                aria-label="WhatsApp"
              >
                <img src={whatsappIcon} alt="WhatsApp" />
              </a>
              
              <a 
                href="https://www.instagram.com/brunavilela.neuroped/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
                aria-label="Instagram"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              
              <a 
                href="https://www.doctoralia.com.br/bruna-vilela-2/neurologista-pediatrico-pediatra/belo-horizonte" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerSocialIcon}
                aria-label="Doctoralia"
              >
                <img src={doctoraliaIcon} alt="Doctoralia" />
              </a>
            </div>
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
            <h3 className={styles.footerTitle}>Contato</h3>
            <div className={styles.contactDetails}>
              <p className={styles.contactText}>
                <strong>Endereço:</strong> Av. Raja Gabaglia 2000, Torre 1, Sala 313<br />
                Belo Horizonte - MG
              </p>
              <p className={styles.contactText}>
                <strong>Telefone:</strong> (31) 97317-8377 (WhatsApp)<br />
                <strong>Email:</strong> brunavilela.neuroped@gmail.com
              </p>
              <p className={styles.contactText}>
                <strong>Horário:</strong> Segunda a Sexta, 08:00 - 18:00
              </p>
              <div className={styles.contactLinks}>
                <a 
                  href="https://wa.me/5531973178377" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  onClick={() => (window as any).trackWhatsAppClick?.()}
                >
                  Agendar Consulta
                </a>
              </div>
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