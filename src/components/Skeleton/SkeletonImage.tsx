import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonImageProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({
  width = '100%',
  height = '200px',
  borderRadius = '8px',
  className = ''
}) => {
  return (
    <div 
      className={`${styles.skeletonImage} ${className}`}
      style={{ 
        width, 
        height, 
        borderRadius 
      }}
      aria-label="Carregando imagem..."
    />
  );
};

export default SkeletonImage;
