import React from 'react';
import styles from './LoadingButton.module.css';

interface LoadingButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  loadingText?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  children,
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  className = '',
  loadingText = 'Carregando...'
}) => {
  const buttonClasses = [
    styles.loadingButton,
    styles[`loadingButton--${variant}`],
    styles[`loadingButton--${size}`],
    isLoading && styles['loadingButton--loading'],
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-describedby={isLoading ? 'loading-status' : undefined}
    >
      <span className={styles.buttonContent}>
        {isLoading && (
          <span className={styles.spinner} aria-hidden="true">
            <svg viewBox="0 0 24 24" className={styles.spinnerIcon}>
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="31.416"
                strokeDashoffset="31.416"
              />
            </svg>
          </span>
        )}
        <span className={isLoading ? styles.textHidden : styles.textVisible}>
          {isLoading ? loadingText : children}
        </span>
      </span>
      
      {isLoading && (
        <span id="loading-status" className={styles.srOnly}>
          Processando sua solicitação, aguarde...
        </span>
      )}
    </button>
  );
};

export default LoadingButton;
