import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import Performance from './components/Performance/Performance';
import { useScrollToTop } from './hooks/useScrollToTop';
import './App.css';

const AppContent = () => {
  useScrollToTop();
  
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
      </Routes>
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Performance />
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
