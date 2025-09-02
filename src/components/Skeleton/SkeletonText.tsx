import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonTextProps {
  lines?: number;
  width?: string | string[];
  height?: string;
  className?: string;
}

const SkeletonText: React.FC<SkeletonTextProps> = ({
  lines = 1,
  width = '100%',
  height = '16px',
  className = ''
}) => {
  const getLineWidth = (index: number): string => {
    if (Array.isArray(width)) {
      return width[index] || width[width.length - 1] || '100%';
    }
    return width;
  };

  return (
    <div className={`${styles.skeletonTextContainer} ${className}`}>
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={styles.skeletonText}
          style={{
            width: getLineWidth(index),
            height,
            marginBottom: index < lines - 1 ? '8px' : '0'
          }}
          aria-label={`Carregando texto linha ${index + 1}...`}
        />
      ))}
    </div>
  );
};

export default SkeletonText;
