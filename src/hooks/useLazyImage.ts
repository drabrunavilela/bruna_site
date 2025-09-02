import { useState, useCallback } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

interface UseLazyImageOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseLazyImageReturn {
  ref: React.RefObject<HTMLElement | null>;
  isLoading: boolean;
  isLoaded: boolean;
  isInView: boolean;
  handleLoad: () => void;
  handleError: () => void;
  shouldLoad: boolean;
}

export const useLazyImage = (
  options: UseLazyImageOptions = {}
): UseLazyImageReturn => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true
  } = options;

  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const { ref, inView } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  });

  const shouldLoad = inView && !isLoaded && !hasError;

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  // Iniciar loading quando entrar em view
  if (shouldLoad && !isLoading) {
    setIsLoading(true);
  }

  return {
    ref,
    isLoading,
    isLoaded,
    isInView: inView,
    handleLoad,
    handleError,
    shouldLoad
  };
};
