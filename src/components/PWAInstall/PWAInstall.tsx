// import React, { useState, useEffect } from 'react';
// import styles from './PWAInstall.module.css';

// interface BeforeInstallPromptEvent extends Event {
//   readonly platforms: string[];
//   readonly userChoice: Promise<{
//     outcome: 'accepted' | 'dismissed';
//     platform: string;
//   }>;
//   prompt(): Promise<void>;
// }

// declare global {
//   interface WindowEventMap {
//     beforeinstallprompt: BeforeInstallPromptEvent;
//   }
// }

// const PWAInstall: React.FC = () => {
//   const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
//   const [showInstallPrompt, setShowInstallPrompt] = useState(false);
//   const [isInstalled, setIsInstalled] = useState(false);

//   useEffect(() => {
//     // Verificar se já está instalado
//     const checkIfInstalled = () => {
//       const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
//       const isIOSStandalone = 'standalone' in window.navigator && (window.navigator as { standalone?: boolean }).standalone === true;
//       setIsInstalled(isStandalone || isIOSStandalone);
//     };

//     checkIfInstalled();

//     // Capturar evento de instalação
//     const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
//       // Prevenir prompt automático
//       e.preventDefault();
//       setDeferredPrompt(e);
      
//       // Mostrar nosso prompt personalizado depois de 30 segundos
//       setTimeout(() => {
//         if (!isInstalled) {
//           setShowInstallPrompt(true);
//         }
//       }, 30000);
//     };

//     window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

//     // Detectar quando o app foi instalado
//     window.addEventListener('appinstalled', () => {
//       setIsInstalled(true);
//       setShowInstallPrompt(false);
//       console.log('PWA foi instalado com sucesso!');
//     });

//     return () => {
//       window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
//     };
//   }, [isInstalled]);

//   const handleInstallClick = async () => {
//     if (!deferredPrompt) return;

//     // Mostrar prompt de instalação
//     deferredPrompt.prompt();

//     // Aguardar escolha do usuário
//     const { outcome } = await deferredPrompt.userChoice;
    
//     if (outcome === 'accepted') {
//       console.log('Usuário aceitou instalar o PWA');
//     } else {
//       console.log('Usuário rejeitou instalar o PWA');
//     }

//     setDeferredPrompt(null);
//     setShowInstallPrompt(false);
//   };

//   const handleDismiss = () => {
//     setShowInstallPrompt(false);
//     // Não mostrar novamente nesta sessão
//     sessionStorage.setItem('pwa-install-dismissed', 'true');
//   };

//   // Não mostrar se já foi rejeitado nesta sessão
//   useEffect(() => {
//     const dismissed = sessionStorage.getItem('pwa-install-dismissed');
//     if (dismissed) {
//       setShowInstallPrompt(false);
//     }
//   }, []);

//   // Não renderizar se já estiver instalado ou não houver suporte
//   if (isInstalled || !showInstallPrompt || !deferredPrompt) {
//     return null;
//   }

//   return (
//     <div className={styles.installPrompt}>
//       <div className={styles.promptContent}>
//         <div className={styles.promptHeader}>
//           <div className={styles.appIcon}>
//             📱
//           </div>
//           <div className={styles.promptText}>
//             <h3 className={styles.promptTitle}>Instalar App</h3>
//             <p className={styles.promptDescription}>
//               Instale o app da Dra. Bruna para acesso rápido e funcionamento offline
//             </p>
//           </div>
//           <button 
//             className={styles.dismissButton}
//             onClick={handleDismiss}
//             aria-label="Fechar prompt de instalação"
//           >
//             ✕
//           </button>
//         </div>
        
//         <div className={styles.promptActions}>
//           <button 
//             className={styles.dismissTextButton}
//             onClick={handleDismiss}
//           >
//             Agora não
//           </button>
//           <button 
//             className={styles.installButton}
//             onClick={handleInstallClick}
//           >
//             Instalar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PWAInstall;
