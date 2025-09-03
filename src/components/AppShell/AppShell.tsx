import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SkipLink from '../SkipLink/SkipLink';

interface AppShellProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

const AppShell: React.FC<AppShellProps> = ({ 
  children, 
  showHeader = true, 
  showFooter = true 
}) => {
  const [isAppShellReady, setIsAppShellReady] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    // Marcar App Shell como carregado
    setIsAppShellReady(true);

    // Listeners para status de conexão
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Skeleton do App Shell durante carregamento
  if (!isAppShellReady) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Header Skeleton */}
        <div style={{
          height: '80px',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5s infinite'
        }} />
        
        {/* Main Content Skeleton */}
        <main style={{ flex: 1, padding: '2rem' }}>
          <div style={{
            height: '200px',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite',
            marginBottom: '1rem',
            borderRadius: '8px'
          }} />
          <div style={{
            height: '100px',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite',
            borderRadius: '8px'
          }} />
        </main>
        
        {/* Footer Skeleton */}
        <div style={{
          height: '120px',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5s infinite'
        }} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Indicador de status offline */}
      {isOffline && (
        <div style={{
          background: '#ff6b6b',
          color: 'white',
          padding: '8px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          position: 'sticky',
          top: 0,
          zIndex: 1001
        }}>
          🔌 Você está offline. Algumas funcionalidades podem estar limitadas.
        </div>
      )}

      <SkipLink />
      
      {showHeader && <Header />}
      
      <main style={{ flex: 1 }}>
        {children}
      </main>
      
      {showFooter && <Footer />}
    </div>
  );
};

export default AppShell;
