import { useEffect, useRef, useCallback } from 'react';

interface FocusManagementOptions {
  autoFocus?: boolean;
  restoreFocus?: boolean;
  trapFocus?: boolean;
}

interface FocusManagementReturn<T = HTMLElement> {
  containerRef: React.RefObject<T | null>;
  focusFirst: () => void;
  focusLast: () => void;
  trapFocus: (enabled: boolean) => void;
  restoreFocus: () => void;
}

const FOCUSABLE_ELEMENTS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]'
].join(', ');

export const useFocusManagement = <T extends HTMLElement = HTMLElement>(
  options: FocusManagementOptions = {}
): FocusManagementReturn<T> => {
  const {
    autoFocus = false,
    restoreFocus = true,
    trapFocus = false
  } = options;

  const containerRef = useRef<T>(null);
  const previousActiveElement = useRef<Element | null>(null);
  const trapEnabled = useRef(false);

  // Encontrar elementos focáveis dentro do container
  const getFocusableElements = useCallback((): HTMLElement[] => {
    if (!containerRef.current) return [];
    
    const elements = Array.from(
      containerRef.current.querySelectorAll(FOCUSABLE_ELEMENTS)
    ) as HTMLElement[];
    
    // Filtrar elementos visíveis
    return elements.filter(element => {
      const style = window.getComputedStyle(element);
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        !element.hasAttribute('hidden') &&
        element.offsetParent !== null
      );
    });
  }, []);

  // Focar no primeiro elemento
  const focusFirst = useCallback(() => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }, [getFocusableElements]);

  // Focar no último elemento
  const focusLast = useCallback(() => {
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[focusableElements.length - 1].focus();
    }
  }, [getFocusableElements]);

  // Lidar com navegação por Tab dentro do trap
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!trapEnabled.current || event.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement;

    if (event.shiftKey) {
      // Shift + Tab (navegação reversa)
      if (activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab (navegação normal)
      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }, [getFocusableElements]);

  // Ativar/desativar trap de foco
  const manageTrapFocus = useCallback((enabled: boolean) => {
    trapEnabled.current = enabled;

    if (enabled) {
      // Salvar elemento ativo atual
      previousActiveElement.current = document.activeElement;
      
      // Focar no primeiro elemento se autoFocus estiver ativo
      if (autoFocus) {
        setTimeout(() => focusFirst(), 0);
      }
      
      // Adicionar listener para trap
      document.addEventListener('keydown', handleKeyDown);
    } else {
      // Remover listener
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [autoFocus, focusFirst, handleKeyDown]);

  // Restaurar foco para elemento anterior
  const restorePreviousFocus = useCallback(() => {
    if (restoreFocus && previousActiveElement.current) {
      const element = previousActiveElement.current as HTMLElement;
      if (element.focus) {
        element.focus();
      }
      previousActiveElement.current = null;
    }
  }, [restoreFocus]);

  // Configuração inicial
  useEffect(() => {
    if (trapFocus) {
      manageTrapFocus(true);
    }

    // Cleanup
    return () => {
      manageTrapFocus(false);
      if (restoreFocus) {
        restorePreviousFocus();
      }
    };
  }, [trapFocus, manageTrapFocus, restoreFocus, restorePreviousFocus]);

  return {
    containerRef,
    focusFirst,
    focusLast,
    trapFocus: manageTrapFocus,
    restoreFocus: restorePreviousFocus
  };
};

export default useFocusManagement;
