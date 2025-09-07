import React from 'react';
import SEO from '../../components/SEO/SEO';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FadeInSection from '../../components/FadeInSection/FadeInSection';
import styles from './TermosUsoPage.module.css';

const TermosUsoPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Termos de Uso - Dra. Bruna Vilela | Neuropediatra"
        description="Termos de uso do site da Dra. Bruna Vilela, neuropediatra em Belo Horizonte. Condições de utilização dos serviços e informações disponibilizadas."
        keywords="termos de uso, condições de uso, neuropediatra, Dra. Bruna Vilela, Belo Horizonte"
        canonical="/termos-uso"
      />
      
      <Header />
      
      <main className={styles.main}>
        <FadeInSection>
          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>Termos de Uso</h1>
              <p className={styles.subtitle}>
                Condições de utilização do site da Dra. Bruna Vilela
              </p>
              <p className={styles.lastUpdated}>
                Última atualização: Janeiro de 2025
              </p>
            </div>

            <div className={styles.content}>
              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Aceitação dos Termos</h2>
                <p className={styles.text}>
                  Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. 
                  Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site.
                </p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Uso do Site</h2>
                <p className={styles.text}>
                  Este site é destinado a fornecer informações sobre os serviços médicos da Dra. Bruna Vilela, 
                  neuropediatra e pediatra. O conteúdo é apenas para fins informativos e educacionais.
                </p>
                <ul className={styles.list}>
                  <li>As informações não substituem consulta médica presencial</li>
                  <li>O site não oferece diagnósticos ou tratamentos online</li>
                  <li>É proibido o uso comercial não autorizado do conteúdo</li>
                  <li>Não é permitido reproduzir conteúdo sem autorização expressa</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Informações Médicas</h2>
                <p className={styles.text}>
                  As informações médicas disponibilizadas neste site têm caráter educativo e não substituem 
                  a consulta médica presencial. Sempre procure orientação médica qualificada para questões de saúde.
                </p>
                <div className={styles.warning}>
                  <p><strong>Importante:</strong> Em caso de emergência médica, procure imediatamente atendimento hospitalar ou ligue para o SAMU (192).</p>
                </div>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Agendamento de Consultas</h2>
                <p className={styles.text}>
                  O agendamento de consultas é realizado através do WhatsApp oficial da Dra. Bruna Vilela. 
                  Ao solicitar agendamento, você concorda com:
                </p>
                <ul className={styles.list}>
                  <li>Fornecer informações verdadeiras e atualizadas</li>
                  <li>Respeitar os horários agendados</li>
                  <li>Comunicar cancelamentos com antecedência mínima de 24 horas</li>
                  <li>Seguir as orientações médicas fornecidas</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Propriedade Intelectual</h2>
                <p className={styles.text}>
                  Todo o conteúdo deste site, incluindo textos, imagens, logos, vídeos e design, 
                  é propriedade da Dra. Bruna Vilela e está protegido por leis de direitos autorais.
                </p>
                <ul className={styles.list}>
                  <li>É proibida a reprodução sem autorização prévia</li>
                  <li>O uso comercial do conteúdo é vedado</li>
                  <li>Links para o site são permitidos com atribuição adequada</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Privacidade e Dados Pessoais</h2>
                <p className={styles.text}>
                  A coleta e uso de dados pessoais seguem nossa <a href="/politica-privacidade" className={styles.link}>Política de Privacidade</a>. 
                  Ao utilizar este site, você concorda com o tratamento de seus dados conforme descrito na política.
                </p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Limitação de Responsabilidade</h2>
                <p className={styles.text}>
                  A Dra. Bruna Vilela não se responsabiliza por:
                </p>
                <ul className={styles.list}>
                  <li>Danos decorrentes do uso inadequado das informações do site</li>
                  <li>Interrupções temporárias no funcionamento do site</li>
                  <li>Conteúdo de sites de terceiros linkados</li>
                  <li>Decisões tomadas com base exclusivamente nas informações do site</li>
                </ul>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Modificações dos Termos</h2>
                <p className={styles.text}>
                  Estes termos podem ser atualizados periodicamente. As alterações entrarão em vigor 
                  imediatamente após sua publicação no site. É responsabilidade do usuário verificar 
                  regularmente os termos atualizados.
                </p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Lei Aplicável</h2>
                <p className={styles.text}>
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida 
                  no foro da comarca de Belo Horizonte, Minas Gerais.
                </p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Contato</h2>
                <p className={styles.text}>
                  Para dúvidas sobre estes termos de uso, entre em contato:
                </p>
                <div className={styles.contact}>
                  <p><strong>Dra. Bruna Vilela</strong></p>
                  <p>CRM-MG: 80690 | RQE: 66867</p>
                  <p>WhatsApp: (31) 97317-8377</p>
                  <p>Email: brunavilela.neuroped@gmail.com</p>
                  <p>Endereço: Av. Raja Gabaglia 2000, Torre 1, Sala 313</p>
                  <p>Belo Horizonte - MG</p>
                </div>
              </section>
            </div>
          </div>
        </FadeInSection>
      </main>
      
      <Footer />
    </>
  );
};

export default TermosUsoPage;
