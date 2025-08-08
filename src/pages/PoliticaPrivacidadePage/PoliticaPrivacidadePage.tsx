import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import styles from './PoliticaPrivacidadePage.module.css';

const PoliticaPrivacidadePage: React.FC = () => {
  // Structured Data for Privacy Policy
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de Privacidade - Dra. Bruna Vilela",
    "description": "Política de Privacidade do site da Dra. Bruna Vilela, neuropediatra em Belo Horizonte",
    "url": "https://drabrunavilela.com.br/politica-privacidade"
  };

  return (
    <>
      <SEO 
        title="Política de Privacidade - Dra. Bruna Vilela Neuropediatra"
        description="Política de Privacidade do site da Dra. Bruna Vilela. Saiba como coletamos, usamos e protegemos suas informações."
        keywords="política de privacidade, cookies, dados pessoais"
        canonical="/politica-privacidade"
        structuredData={structuredData}
      />
      <Header />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Política de Privacidade
              </h1>
              <p className={styles.heroSubtitle}>
                Transparência e proteção dos seus dados são fundamentais para nós
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              
              {/* Introdução */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Introdução</h2>
                <p className={styles.paragraph}>
                  A Dra. Bruna Vilela ("nós", "nosso", "nossa") respeita sua privacidade e está comprometida em proteger seus dados pessoais. 
                  Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações quando você visita nosso site.
                </p>
                <p className={styles.paragraph}>
                  <strong>Última atualização:</strong> Janeiro de 2025
                </p>
              </div>

              {/* Informações que Coletamos */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Informações que Coletamos</h2>
                
                <h3 className={styles.subsectionTitle}>2.1 Informações Automáticas</h3>
                <p className={styles.paragraph}>
                  Quando você visita nosso site, coletamos automaticamente:
                </p>
                <ul className={styles.list}>
                  <li>Endereço IP e informações de localização</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Referência (como você chegou ao nosso site)</li>
                  <li>Informações de cookies e tecnologias similares</li>
                </ul>

                <h3 className={styles.subsectionTitle}>2.2 Informações que Você Fornece</h3>
                <p className={styles.paragraph}>
                  Quando você entra em contato conosco, podemos coletar:
                </p>
                <ul className={styles.list}>
                  <li>Nome e informações de contato</li>
                  <li>Mensagens e comunicações</li>
                  <li>Informações sobre consultas e agendamentos</li>
                </ul>
              </div>

              {/* Como Usamos Suas Informações */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Como Usamos Suas Informações</h2>
                <p className={styles.paragraph}>
                  Utilizamos suas informações para:
                </p>
                <ul className={styles.list}>
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Responder suas perguntas e solicitações</li>
                  <li>Agendar consultas e atendimentos</li>
                  <li>Enviar informações relevantes sobre saúde infantil</li>
                  <li>Analisar o uso do site para melhorias</li>
                  <li>Cumprir obrigações legais</li>
                </ul>
              </div>

              {/* Google Analytics */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Google Analytics</h2>
                <p className={styles.paragraph}>
                  Nosso site utiliza o Google Analytics para analisar o tráfego e melhorar sua experiência. 
                  O Google Analytics coleta informações sobre como você usa nosso site.
                </p>
                <p className={styles.paragraph}>
                  <strong>Como o Google usa informações de sites ou apps que usam nossos serviços:</strong>
                  <br />
                  <a 
                    href="https://www.google.com/policies/privacy/partners/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Clique aqui para saber mais
                  </a>
                </p>
                <p className={styles.paragraph}>
                  Você pode optar por não participar do Google Analytics instalando o 
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {" "}Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </div>

              {/* Cookies */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Cookies e Tecnologias Similares</h2>
                <p className={styles.paragraph}>
                  Utilizamos cookies e tecnologias similares para:
                </p>
                <ul className={styles.list}>
                  <li>Lembrar suas preferências</li>
                  <li>Analisar o uso do site</li>
                  <li>Melhorar a funcionalidade</li>
                  <li>Personalizar conteúdo</li>
                </ul>
                <p className={styles.paragraph}>
                  Você pode controlar o uso de cookies através das configurações do seu navegador. 
                  No entanto, desabilitar cookies pode afetar a funcionalidade do site.
                </p>
              </div>

              {/* Compartilhamento de Informações */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Compartilhamento de Informações</h2>
                <p className={styles.paragraph}>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
                </p>
                <ul className={styles.list}>
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Com prestadores de serviços que nos ajudam a operar o site (sempre com proteções adequadas)</li>
                  <li>Para proteger nossos direitos e segurança</li>
                </ul>
              </div>

              {/* Segurança */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Segurança dos Dados</h2>
                <p className={styles.paragraph}>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra:
                </p>
                <ul className={styles.list}>
                  <li>Acesso não autorizado</li>
                  <li>Alteração, divulgação ou destruição não autorizada</li>
                  <li>Perda acidental de dados</li>
                </ul>
                <p className={styles.paragraph}>
                  No entanto, nenhum sistema de segurança é 100% seguro. 
                  Comprometemo-nos a notificar você em caso de violação de dados que possa afetá-lo.
                </p>
              </div>

              {/* Seus Direitos */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Seus Direitos</h2>
                <p className={styles.paragraph}>
                  Você tem os seguintes direitos relacionados aos seus dados pessoais:
                </p>
                <ul className={styles.list}>
                  <li><strong>Acesso:</strong> Solicitar informações sobre os dados que temos sobre você</li>
                  <li><strong>Correção:</strong> Solicitar correção de dados imprecisos</li>
                  <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais</li>
                  <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                  <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
                  <li><strong>Retirada do consentimento:</strong> Retirar consentimento a qualquer momento</li>
                </ul>
              </div>

              {/* Retenção de Dados */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Retenção de Dados</h2>
                <p className={styles.paragraph}>
                  Mantemos suas informações pessoais apenas pelo tempo necessário para:
                </p>
                <ul className={styles.list}>
                  <li>Fornecer nossos serviços</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Resolver disputas</li>
                  <li>Fazer cumprir nossos acordos</li>
                </ul>
                <p className={styles.paragraph}>
                  Quando não precisarmos mais de suas informações, as excluiremos de forma segura.
                </p>
              </div>

              {/* Menores de Idade */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Menores de Idade</h2>
                <p className={styles.paragraph}>
                  Nosso site não é destinado a menores de 18 anos. Não coletamos intencionalmente informações pessoais de menores de idade. 
                  Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco.
                </p>
              </div>

              {/* Alterações na Política */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>11. Alterações nesta Política</h2>
                <p className={styles.paragraph}>
                  Podemos atualizar esta Política de Privacidade periodicamente. 
                  Notificaremos você sobre mudanças significativas através de:
                </p>
                <ul className={styles.list}>
                  <li>Notificação em nosso site</li>
                  <li>Email (se você nos forneceu seu endereço)</li>
                  <li>Outros meios apropriados</li>
                </ul>
                <p className={styles.paragraph}>
                  Recomendamos que você revise esta política regularmente para se manter informado sobre como protegemos suas informações.
                </p>
              </div>

              {/* Contato */}
              <div className={styles.section}>
                <h2 className={styles.sectionTitle}>12. Entre em Contato</h2>
                <p className={styles.paragraph}>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco:
                </p>
                <div className={styles.contactInfo}>
                  <p><strong>Dra. Bruna Vilela</strong></p>
                  <p>Email: brunavilela.neuroped@gmail.com</p>
                  <p>Telefone: (31) 97317-8377</p>
                  <p>Endereço: Avenida Raja Gabaglia 2000, Torre 1, Sala 313 - Belo Horizonte/MG</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PoliticaPrivacidadePage; 