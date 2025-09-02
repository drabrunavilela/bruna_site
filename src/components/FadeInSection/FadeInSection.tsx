import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './FadeInSection.module.css';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fadeIn';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  direction = 'fadeIn'
}) => {
  const { ref, inView } = useIntersectionObserver({
    threshold,
    triggerOnce: true
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${styles.fadeInSection} ${styles[direction]} ${
        inView ? styles.visible : ''
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
