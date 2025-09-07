import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
      aria-pressed={isDark}
      title={`Tema atual: ${isDark ? 'Escuro' : 'Claro'}. Clique para alternar.`}
    >
      <div className={styles.toggleTrack}>
        <div className={`${styles.toggleThumb} ${isDark ? styles.toggleThumbDark : ''}`}>
          <span className={styles.toggleIcon}>
            {isDark ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
      <span className={styles.toggleLabel}>
        {isDark ? 'Escuro' : 'Claro'}
      </span>
    </button>
  );
};

export default ThemeToggle;
