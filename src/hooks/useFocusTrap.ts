import { useEffect, useRef } from 'react';

interface UseFocusTrapOptions {
  isActive: boolean;
  restoreFocus?: boolean;
}

export const useFocusTrap = ({ isActive, restoreFocus = true }: UseFocusTrapOptions) => {
  const containerRef = useRef<HTMLElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Salvar elemento ativo atual
    previousActiveElement.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    // Encontrar todos os elementos focáveis
    const getFocusableElements = (): HTMLElement[] => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]'
      ].join(', ');

      return Array.from(container.querySelectorAll(focusableSelectors))
        .filter((el) => {
          const element = el as HTMLElement;
          return element.offsetWidth > 0 && element.offsetHeight > 0;
        }) as HTMLElement[];
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab (navegação reversa)
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab (navegação normal)
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Focar no primeiro elemento focável
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Adicionar listener
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      // Restaurar foco anterior
      if (restoreFocus && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive, restoreFocus]);

  return containerRef;
};

// Hook para melhorar indicadores de foco
export const useFocusVisible = () => {
  useEffect(() => {
    let hadKeyboardEvent = false;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab' || e.key === 'Enter' || e.key === ' ') {
        hadKeyboardEvent = true;
      }
    };

    const handleMouseDown = () => {
      hadKeyboardEvent = false;
    };

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (hadKeyboardEvent) {
        target.classList.add('focus-visible');
      } else {
        target.classList.remove('focus-visible');
      }
    };

    const handleBlur = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('focus-visible');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('focus', handleFocus, true);
    document.addEventListener('blur', handleBlur, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('focus', handleFocus, true);
      document.removeEventListener('blur', handleBlur, true);
    };
  }, []);
};
