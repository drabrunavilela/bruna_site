import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

export const useTheme = (): UseThemeReturn => {
  const [theme, setThemeState] = useState<Theme>('light');

  // Detectar preferência do sistema
  const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Inicializar tema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemTheme = getSystemTheme();
    const initialTheme = savedTheme || systemTheme;
    
    setThemeState(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // Aplicar tema ao DOM
  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Atualizar meta theme-color para PWA
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', newTheme === 'dark' ? '#0F0F23' : '#FFFFFF');
    }
  };

  // Definir tema
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    
    // Anunciar mudança para leitores de tela
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = `Tema alterado para ${newTheme === 'dark' ? 'escuro' : 'claro'}`;
    
    document.body.appendChild(announcement);
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Alternar tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Escutar mudanças na preferência do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Só aplicar se não houver preferência salva
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const systemTheme = e.matches ? 'dark' : 'light';
        setThemeState(systemTheme);
        applyTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark'
  };
};
