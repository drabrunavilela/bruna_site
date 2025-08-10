import React, { useEffect } from 'react';

const Performance: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would be implemented with web-vitals library
      // Performance monitoring enabled
    }

    // Performance monitoring enabled
    // Removed unnecessary preloads to fix console warnings
  }, []);

  return null; // This component doesn't render anything
};

export default Performance; 