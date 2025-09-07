import React from 'react';
import SkeletonImage from './SkeletonImage';
import SkeletonText from './SkeletonText';
import styles from './Skeleton.module.css';

interface SkeletonCardProps {
  showImage?: boolean;
  imageHeight?: string;
  imageWidth?: string;
  titleWidth?: string;
  descriptionLines?: number;
  className?: string;
  variant?: 'service' | 'blog' | 'testimonial';
  showIcon?: boolean;
  showButton?: boolean;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({
  showImage = true,
  imageHeight = '200px',
  imageWidth = '100%',
  titleWidth = '80%',
  descriptionLines = 3,
  className = '',
  variant = 'service',
  showIcon = true,
  showButton = true
}) => {
  const getDescriptionWidths = () => {
    switch (variant) {
      case 'blog':
        return ['100%', '95%', '60%'];
      case 'testimonial':
        return ['100%', '90%', '70%', '40%'];
      default:
        return ['100%', '90%', '65%'];
    }
  };

  return (
    <div className={`${styles.skeletonCard} ${styles[`skeletonCard--${variant}`]} ${className}`}>
      {/* Ícone para cards de serviço */}
      {variant === 'service' && showIcon && (
        <div className={styles.skeletonCardIcon}>
          <SkeletonText
            lines={1}
            width="40px"
            height="40px"
            className={styles.skeletonIcon}
          />
        </div>
      )}

      {showImage && (
        <SkeletonImage
          width={imageWidth}
          height={imageHeight}
          className={styles.skeletonCardImage}
        />
      )}
      
      <div className={styles.skeletonCardContent}>
        {/* Título */}
        <SkeletonText
          lines={1}
          width={titleWidth}
          height="24px"
          className={styles.skeletonCardTitle}
        />
        
        {/* Descrição */}
        <SkeletonText
          lines={descriptionLines}
          width={getDescriptionWidths()}
          height="16px"
          className={styles.skeletonCardDescription}
        />
        
        {/* Metadata (para blogs) */}
        {variant === 'blog' && (
          <div className={styles.skeletonCardMeta}>
            <SkeletonText
              lines={1}
              width="120px"
              height="14px"
            />
            <SkeletonText
              lines={1}
              width="80px"
              height="14px"
            />
          </div>
        )}
        
        {/* Button/Link */}
        {showButton && (
          <SkeletonText
            lines={1}
            width="140px"
            height="20px"
            className={styles.skeletonCardButton}
          />
        )}
      </div>
    </div>
  );
};

export default SkeletonCard;
