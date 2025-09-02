// import React, { useState, useEffect } from 'react';
// import useFocusManagement from '../../hooks/useFocusManagement';
// import styles from './CookieBanner.module.css';

// interface CookieBannerProps {
//   onAccept: () => void;
//   onDecline: () => void;
// }

// const CookieBanner: React.FC<CookieBannerProps> = ({ onAccept, onDecline }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Focus management para acessibilidade
//   const { containerRef, trapFocus, restoreFocus } = useFocusManagement<HTMLDivElement>({
//     autoFocus: true,
//     restoreFocus: true,
//     trapFocus: isExpanded
//   });

//   useEffect(() => {
//     // Verificar se o usuário já deu consentimento
//     const consent = localStorage.getItem('cookieConsent');
//     if (!consent) {
//       setIsVisible(true);
//     }
//   }, []);

//   // Gerenciar trap de foco quando expandido
//   useEffect(() => {
//     trapFocus(isExpanded);
    
//     return () => {
//       if (isExpanded) {
//         restoreFocus();
//       }
//     };
//   }, [isExpanded, trapFocus, restoreFocus]);

//   const handleAccept = () => {
//     localStorage.setItem('cookieConsent', 'accepted');
//     localStorage.setItem('cookieConsentDate', new Date().toISOString());
//     setIsVisible(false);
//     onAccept();
//   };

//   const handleDecline = () => {
//     localStorage.setItem('cookieConsent', 'declined');
//     localStorage.setItem('cookieConsentDate', new Date().toISOString());
//     setIsVisible(false);
//     onDecline();
//   };

//   const handleManageCookies = () => {
//     setIsExpanded(!isExpanded);
//   };

//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <div className={styles.cookieBanner}>
//       <div className={styles.bannerContent} ref={containerRef}>
//         <div className={styles.mainContent}>
//           <div className={styles.cookieIcon}>
//             🍪
//           </div>
          
//           <div className={styles.textContent}>
//             <h3 className={styles.title}>
//               Política de Cookies
//             </h3>
//             <p className={styles.description}>
//               Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
//               analisar o tráfego do site e personalizar conteúdo. 
//               Ao continuar navegando, você concorda com nosso uso de cookies.
//             </p>
            
//             {isExpanded && (
//               <div className={styles.expandedContent}>
//                 <h4 className={styles.subtitle}>Tipos de cookies que utilizamos:</h4>
//                 <ul className={styles.cookieList}>
//                   <li>
//                     <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site
//                   </li>
//                   <li>
//                     <strong>Cookies de Análise:</strong> Google Analytics para entender como você usa nosso site
//                   </li>
//                   <li>
//                     <strong>Cookies de Preferências:</strong> Para lembrar suas escolhas e melhorar sua experiência
//                   </li>
//                 </ul>
                
//                 <p className={styles.moreInfo}>
//                   Para mais informações, consulte nossa{' '}
//                   <a 
//                     href="/politica-privacidade" 
//                     className={styles.privacyLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Política de Privacidade
//                   </a>
//                   {' '}e{' '}
//                   <a 
//                     href="https://www.google.com/policies/privacy/partners/" 
//                     className={styles.privacyLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     como o Google usa informações
//                   </a>.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className={styles.actions}>
//           <button
//             onClick={handleManageCookies}
//             className={styles.manageButton}
//           >
//             {isExpanded ? 'Menos Detalhes' : 'Mais Detalhes'}
//           </button>
          
//           <div className={styles.primaryActions}>
//             <button
//               onClick={handleDecline}
//               className={styles.declineButton}
//             >
//               Recusar
//             </button>
//             <button
//               onClick={handleAccept}
//               className={styles.acceptButton}
//             >
//               Aceitar Todos
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookieBanner; 