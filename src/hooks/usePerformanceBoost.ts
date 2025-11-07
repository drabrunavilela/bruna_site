import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkConnections: number;
  cacheHitRate: number;
}

interface PerformanceOptimizations {
  lazyLoadImages: boolean;
  prefetchRoutes: boolean;
  compressAssets: boolean;
  optimizeRender: boolean;
  enableCache: boolean;
}

export const usePerformanceBoost = () => {
  const location = useLocation();
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkConnections: 0,
    cacheHitRate: 0
  });
  
  const [optimizations] = useState<PerformanceOptimizations>({
    lazyLoadImages: true,
    prefetchRoutes: true,
    compressAssets: true,
    optimizeRender: true,
    enableCache: true
  });

  // Medir performance da página
  const measurePagePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      const renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;

      // Memória básica
      let memoryUsage = 0;
      try {
        const performanceMemory = (performance as unknown as { memory?: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
        if (performanceMemory) {
          memoryUsage = performanceMemory.usedJSHeapSize / performanceMemory.totalJSHeapSize;
        }
      } catch {
        // Memory API not available
      }

      setMetrics(prev => ({
        ...prev,
        loadTime: Math.round(loadTime),
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memoryUsage * 100)
      }));

      // Enviar via GTM (dataLayer)
      import('../hooks/useGTM').then(({ trackGTMEvent }) => {
        trackGTMEvent('page_performance', {
          event_category: 'performance',
          event_label: location.pathname,
          value: Math.round(loadTime),
          load_time: Math.round(loadTime),
          render_time: Math.round(renderTime),
          memory_usage: Math.round(memoryUsage * 100)
        });
      });
    }
  }, [location.pathname]);

  // Prefetch de rotas importantes
  const prefetchImportantRoutes = useCallback(() => {
    if (!optimizations.prefetchRoutes || typeof document === 'undefined') return;

    const importantRoutes = [
      '/contato',
      '/servicos',
      '/servicos/tdah',
      '/servicos/tea',
      '/sobre'
    ];

    const currentRoute = location.pathname;
    
    importantRoutes.forEach(route => {
      if (route !== currentRoute) {
        // Verificar se já existe
        const existingLink = document.querySelector(`link[href="${route}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          document.head.appendChild(link);
        }
      }
    });
  }, [location.pathname, optimizations.prefetchRoutes]);

  // Cache estratégico simples
  const setupStrategicCache = useCallback(() => {
    if (!optimizations.enableCache || typeof window === 'undefined') return;

    // Cache básico usando sessionStorage para dados da sessão
    try {
      const cacheKey = `bruna-site-cache-${location.pathname}`;
      const timestamp = Date.now();
      sessionStorage.setItem(cacheKey, JSON.stringify({
        path: location.pathname,
        timestamp,
        visited: true
      }));
    } catch {
      // SessionStorage not available
    }
  }, [location.pathname, optimizations.enableCache]);

  const getPerformanceGrade = useCallback((): 'A' | 'B' | 'C' | 'D' | 'F' => {
    const { loadTime, memoryUsage } = metrics;
    
    let score = 100;
    
    // Penalizar load time alto
    if (loadTime > 1000) score -= 10;
    if (loadTime > 2000) score -= 20;
    if (loadTime > 3000) score -= 30;
    
    // Penalizar uso de memória alto
    if (memoryUsage > 70) score -= 15;
    if (memoryUsage > 85) score -= 25;
    
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }, [metrics]);

  const getRecommendations = useCallback((): string[] => {
    const recommendations: string[] = [];
    
    if (metrics.loadTime > 2000) {
      recommendations.push('Considere otimizar recursos críticos para reduzir tempo de carregamento');
    }
    
    if (metrics.memoryUsage > 80) {
      recommendations.push('Alto uso de memória detectado - implemente lazy loading mais agressivo');
    }
    
    if (metrics.loadTime === 0) {
      recommendations.push('Medindo performance... aguarde alguns segundos');
    }
    
    return recommendations;
  }, [metrics]);

  // Relatório de performance simplificado
  const getPerformanceReport = useCallback(() => {
    const grade = getPerformanceGrade();
    
    return {
      grade,
      metrics,
      optimizations,
      recommendations: getRecommendations()
    };
  }, [metrics, optimizations, getPerformanceGrade, getRecommendations]);

  // Efeitos principais
  useEffect(() => {
    const timer = setTimeout(measurePagePerformance, 1000);
    return () => clearTimeout(timer);
  }, [measurePagePerformance]);

  useEffect(() => {
    prefetchImportantRoutes();
    setupStrategicCache();
  }, [prefetchImportantRoutes, setupStrategicCache]);

  return {
    metrics,
    optimizations,
    getPerformanceReport,
    getPerformanceGrade: getPerformanceGrade(),
    measurePagePerformance
  };
};
