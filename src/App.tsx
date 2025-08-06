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
import Performance from './components/Performance/Performance';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Analytics from './components/Analytics/Analytics';
import { useScrollToTop } from './hooks/useScrollToTop';
import './App.css';

const AppContent = () => {
  useScrollToTop();
  
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const handleCookieAccept = () => {
    // Ativar analytics quando cookies forem aceitos
    setAnalyticsEnabled(true);
    console.log('Cookies aceitos - Analytics ativado');
  };
  
  const handleCookieDecline = () => {
    // Desativar analytics quando cookies forem recusados
    setAnalyticsEnabled(false);
    console.log('Cookies recusados - Analytics desativado');
  };
  
  return (
    <div className="App">
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
      </Routes>
      <WhatsAppFloat />
      <CookieBanner onAccept={handleCookieAccept} onDecline={handleCookieDecline} />
      <Analytics enabled={analyticsEnabled} />
    </div>
  );
};

function App() {
  return (
    <>
      <Performance />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;
