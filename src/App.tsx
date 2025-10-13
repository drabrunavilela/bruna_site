import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
import HomePage from './pages/HomePage/HomePage';
import SobrePage from './pages/SobrePage/SobrePage';
import ServicosPage from './pages/ServicosPage/ServicosPage';
import ContatoPage from './pages/ContatoPage/ContatoPage';

// Lazy loading para páginas não críticas
const TdahPage = lazy(() => import('./pages/ServicosPage/TdahPage'));
const TeaPage = lazy(() => import('./pages/ServicosPage/TeaPage'));
const EpilepsiaPage = lazy(() => import('./pages/ServicosPage/EpilepsiaPage'));
const AtrasosPage = lazy(() => import('./pages/ServicosPage/AtrasosPage'));
const CefaleiasPage = lazy(() => import('./pages/ServicosPage/CefaleiasPage'));
const SegundaOpiniaoPage = lazy(() => import('./pages/ServicosPage/SegundaOpiniaoPage'));
const BlogPage = lazy(() => import('./pages/BlogPage/BlogPage'));
const SinaisAutismoPage = lazy(() => import('./pages/BlogPage/SinaisAutismoPage'));
const GlossarioPage = lazy(() => import('./pages/GlossarioPage/GlossarioPage'));
const PoliticaPrivacidadePage = lazy(() => import('./pages/PoliticaPrivacidadePage/PoliticaPrivacidadePage'));
const TermosUsoPage = lazy(() => import('./pages/TermosUsoPage/TermosUsoPage'));
const OfflinePage = lazy(() => import('./components/OfflinePage/OfflinePage'));
// Lazy loading para componentes não críticos
const Performance = lazy(() => import('./components/Performance/Performance'));
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat/WhatsAppFloat'));
const CriticalCSS = lazy(() => import('./components/CriticalCSS/CriticalCSS'));
const ResourceOptimization = lazy(() => import('./components/ResourceOptimization/ResourceOptimization'));
// GTM carregado via HTML

// Componentes críticos mantidos síncronos
import { AccessibilityProvider } from './components/AccessibilityProvider';
import { AnalyticsProvider } from './components/AnalyticsProvider';
import CookieBanner from './components/CookieBanner/CookieBanner';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useGTM } from './hooks/useGTM';
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
  
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  
  // Gerenciar GTM via HTML
  useGTM(analyticsEnabled);

  const handleCookieAccept = () => {
    // Ativar analytics quando cookies forem aceitos
    setAnalyticsEnabled(true);
    localStorage.setItem('cookieConsent', 'accepted');
    // Analytics ativado
  };
  
  const handleCookieDecline = () => {
    // Desativar analytics quando cookies forem recusados
    setAnalyticsEnabled(false);
    localStorage.setItem('cookieConsent', 'declined');
    // Analytics desativado
  };
  
  return (
    <div className="App">
      <Suspense fallback={<div style={{display: 'none'}}></div>}>
        <CriticalCSS />
      </Suspense>
      <Suspense fallback={<div style={{display: 'none'}}></div>}>
        <ResourceOptimization 
          heroImages={[
            '/images/bruna/dra-bruna-vilela-acolhedora-09.webp',
            '/images/bruna/dra-bruna-vilela-atenciosa-05.webp',
            '/images/bruna/dra-bruna-vilela-acolhedora-10.webp'
          ]}
          criticalPages={['/sobre', '/servicos', '/contato', '/blog']}
        />
      </Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/contato" element={<ContatoPage />} />
        
        {/* Rotas com lazy loading */}
        <Route path="/servicos/tdah" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <TdahPage />
          </Suspense>
        } />
        <Route path="/servicos/tea" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <TeaPage />
          </Suspense>
        } />
        <Route path="/servicos/epilepsia" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <EpilepsiaPage />
          </Suspense>
        } />
        <Route path="/servicos/atrasos" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <AtrasosPage />
          </Suspense>
        } />
        <Route path="/servicos/cefaleias" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <CefaleiasPage />
          </Suspense>
        } />
        <Route path="/servicos/segunda-opiniao" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <SegundaOpiniaoPage />
          </Suspense>
        } />
        <Route path="/blog" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <BlogPage />
          </Suspense>
        } />
        <Route path="/blog/sinais-autismo-primeiro-ano" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <SinaisAutismoPage />
          </Suspense>
        } />
        <Route path="/glossario" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <GlossarioPage />
          </Suspense>
        } />
        <Route path="/politica-privacidade" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <PoliticaPrivacidadePage />
          </Suspense>
        } />
        <Route path="/termos-uso" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <TermosUsoPage />
          </Suspense>
        } />
        <Route path="/offline" element={
          <Suspense fallback={<div style={{textAlign: 'center', padding: '2rem'}}>Carregando...</div>}>
            <OfflinePage />
          </Suspense>
        } />
        {/* Rota para capturar todas as outras URLs */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Suspense fallback={<div style={{display: 'none'}}></div>}>
        <WhatsAppFloat />
      </Suspense>
      {/* <PWAInstall /> */}
      <CookieBanner onAccept={handleCookieAccept} onDecline={handleCookieDecline} />

      {/* GTM carregado via HTML - não precisa do componente React */}
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
