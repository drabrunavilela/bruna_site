import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import SobrePage from './pages/SobrePage/SobrePage';
import ServicosPage from './pages/ServicosPage/ServicosPage';
import TdahPage from './pages/ServicosPage/TdahPage';
import TeaPage from './pages/ServicosPage/TeaPage';
import EpilepsiaPage from './pages/ServicosPage/EpilepsiaPage';
import AtrasosPage from './pages/ServicosPage/AtrasosPage';
import CefaleiasPage from './pages/ServicosPage/CefaleiasPage';
import SegundaOpiniaoPage from './pages/ServicosPage/SegundaOpiniaoPage';
import BlogPage from './pages/BlogPage/BlogPage';
import GlossarioPage from './pages/GlossarioPage/GlossarioPage';
import ContatoPage from './pages/ContatoPage/ContatoPage';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidadePage/PoliticaPrivacidadePage';
import TermosUsoPage from './pages/TermosUsoPage/TermosUsoPage';
import OfflinePage from './components/OfflinePage/OfflinePage';
import Performance from './components/Performance/Performance';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
// import CookieBanner from './components/CookieBanner/CookieBanner';
// import PWAInstall from './components/PWAInstall/PWAInstall';
import CriticalCSS from './components/CriticalCSS/CriticalCSS';
import ResourceOptimization from './components/ResourceOptimization/ResourceOptimization';
import { AccessibilityProvider } from './components/AccessibilityProvider';
import { AnalyticsProvider } from './components/AnalyticsProvider';
// import InstallPrompt from './components/InstallPrompt';

import GTM from './components/GTM/GTM';
import { useScrollToTop } from './hooks/useScrollToTop';
import './App.css';

// Componente para página 404
const NotFoundPage = () => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '4rem 2rem',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#C9C1E0' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Página não encontrada</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
        A página que você está procurando não existe ou foi movida.
      </p>
      <a 
        href="/" 
        style={{
          padding: '1rem 2rem',
          backgroundColor: '#C9C1E0',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        Voltar ao Início
      </a>
    </div>
  );
};

const AppContent = () => {
  useScrollToTop();
  
  const [analyticsEnabled] = useState(false);

  // const handleCookieAccept = () => {
  //   // Ativar analytics quando cookies forem aceitos
  //   setAnalyticsEnabled(true);
  //   // Analytics ativado
  // };
  
  // const handleCookieDecline = () => {
  //   // Desativar analytics quando cookies forem recusados
  //   setAnalyticsEnabled(false);
  //   // Analytics desativado
  // };
  
  return (
    <div className="App">
      <CriticalCSS />
      <ResourceOptimization 
        heroImages={[
          '/images/bruna/dra-bruna-vilela-acolhedora-09.webp',
          '/images/bruna/dra-bruna-vilela-atenciosa-05.webp',
          '/images/bruna/dra-bruna-vilela-acolhedora-10.webp'
        ]}
        criticalPages={['/sobre', '/servicos', '/contato', '/blog']}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/servicos/tdah" element={<TdahPage />} />
        <Route path="/servicos/tea" element={<TeaPage />} />
        <Route path="/servicos/epilepsia" element={<EpilepsiaPage />} />
        <Route path="/servicos/atrasos" element={<AtrasosPage />} />
        <Route path="/servicos/cefaleias" element={<CefaleiasPage />} />
        <Route path="/servicos/segunda-opiniao" element={<SegundaOpiniaoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/glossario" element={<GlossarioPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidadePage />} />
        <Route path="/termos-uso" element={<TermosUsoPage />} />
        <Route path="/offline" element={<OfflinePage />} />
        {/* Rota para capturar todas as outras URLs */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <WhatsAppFloat />
      {/* <PWAInstall /> */}
      {/* <CookieBanner onAccept={handleCookieAccept} onDecline={handleCookieDecline} /> */}

      <GTM enabled={analyticsEnabled} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Performance />
      <AccessibilityProvider>
        <AnalyticsProvider enabled={true}>
          {/* <InstallPrompt /> */}
          <AppContent />
        </AnalyticsProvider>
      </AccessibilityProvider>
    </Router>
  );
}

export default App;
