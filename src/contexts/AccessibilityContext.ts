import { createContext } from 'react';

export interface AccessibilityContextType {
  announceMessage: (message: string) => void;
  isHighContrast: boolean;
  toggleHighContrast: () => void;
  isReducedMotion: boolean;
}

export const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);
