// import React, { useState, useEffect } from 'react';
// import styles from './InstallPrompt.module.css';

// interface BeforeInstallPromptEvent extends Event {
//   prompt(): Promise<void>;
//   userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
// }

// const InstallPrompt: React.FC = () => {
//   const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
//   const [showPrompt, setShowPrompt] = useState(false);
//   const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     // Verificar se já está instalado
//     const checkInstalled = () => {
//       const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
//       const isInWebAppiOS = (window.navigator as { standalone?: boolean }).standalone === true;
//       setIsInstalled(isStandalone || isInWebAppiOS);
//     };

//     checkInstalled();

//     // Escutar evento de instalação
//     const handleBeforeInstallPrompt = (e: Event) => {
//       e.preventDefault();
//       setDeferredPrompt(e as BeforeInstallPromptEvent);
      
//       // Mostrar prompt após 30 segundos na página
//       setTimeout(() => {
//         if (!isInstalled) {
//           setShowPrompt(true);
//         }
//       }, 30000);
//     };

//     // Escutar quando app é instalado
//     const handleAppInstalled = () => {
//       setIsInstalled(true);
//       setShowPrompt(false);
//       setDeferredPrompt(null);
//       console.log('PWA foi instalado');
//     };

//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//     window.addEventListener('appinstalled', handleAppInstalled);

//     return () => {
//       window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//       window.removeEventListener('appinstalled', handleAppInstalled);
//     };
//   }, [isInstalled]);

//   const handleInstallClick = async () => {
//     if (!deferredPrompt) return;

//     try {
//       await deferredPrompt.prompt();
//       const { outcome } = await deferredPrompt.userChoice;
      
//       if (outcome === 'accepted') {
//         console.log('Usuário aceitou instalar o PWA');
//       } else {
//         console.log('Usuário recusou instalar o PWA');
//       }
      
//       setDeferredPrompt(null);
//       setShowPrompt(false);
//     } catch (error) {
//       console.error('Erro ao mostrar prompt de instalação:', error);
//     }
//   };

//   const handleDismiss = () => {
//     setShowPrompt(false);
//     // Não mostrar novamente nesta sessão
//     sessionStorage.setItem('installPromptDismissed', 'true');
//   };

//   // Não mostrar se já instalado ou se foi dispensado nesta sessão
//   if (isInstalled || !showPrompt || !deferredPrompt || sessionStorage.getItem('installPromptDismissed')) {
//     return null;
//   }

//   return (
//     <div className={styles.installPrompt} role="dialog" aria-labelledby="install-title">
//       <div className={styles.promptContent}>
//         <button 
//           className={styles.closeButton}
//           onClick={handleDismiss}
//           aria-label="Fechar prompt de instalação"
//         >
//           ✕
//         </button>
        
//         <div className={styles.promptIcon}>
//           📱
//         </div>
        
//         <h3 id="install-title" className={styles.promptTitle}>
//           Instalar App da Dra. Bruna
//         </h3>
        
//         <p className={styles.promptDescription}>
//           Tenha acesso rápido às informações sobre neuropediatria e agende consultas facilmente.
//         </p>
        
//         <div className={styles.promptBenefits}>
//           <div className={styles.benefit}>
//             <span className={styles.benefitIcon}>⚡</span>
//             <span>Acesso mais rápido</span>
//           </div>
//           <div className={styles.benefit}>
//             <span className={styles.benefitIcon}>📱</span>
//             <span>Funciona offline</span>
//           </div>
//           <div className={styles.benefit}>
//             <span className={styles.benefitIcon}>🔔</span>
//             <span>Notificações importantes</span>
//           </div>
//         </div>
        
//         <div className={styles.promptActions}>
//           <button 
//             className={styles.installButton}
//             onClick={handleInstallClick}
//             aria-describedby="install-description"
//           >
//             📲 Instalar App
//           </button>
//           <button 
//             className={styles.dismissButton}
//             onClick={handleDismiss}
//           >
//             Agora não
//           </button>
//         </div>
        
//         <p id="install-description" className={styles.installNote}>
//           Gratuito • Sem ocupar muito espaço • Fácil de remover
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InstallPrompt;
