import React, { useEffect, useState } from 'react';
import { useFocusVisible } from '../../hooks/useFocusTrap';
import { AccessibilityContext } from '../../contexts/AccessibilityContext';
import type { AccessibilityContextType } from '../../contexts/AccessibilityContext';

interface AccessibilityProviderProps {
  children: React.ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Inicializar focus visible
  useFocusVisible();

  useEffect(() => {
    // Verificar preferência de movimento reduzido
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    // Carregar preferência de alto contraste
    const savedContrast = localStorage.getItem('high-contrast');
    if (savedContrast === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }
  }, []);

  const announceMessage = (message: string) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
      localStorage.setItem('high-contrast', 'true');
      announceMessage('Alto contraste ativado');
    } else {
      document.documentElement.classList.remove('high-contrast');
      localStorage.setItem('high-contrast', 'false');
      announceMessage('Alto contraste desativado');
    }
  };

  const value: AccessibilityContextType = {
    announceMessage,
    isHighContrast,
    toggleHighContrast,
    isReducedMotion
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
