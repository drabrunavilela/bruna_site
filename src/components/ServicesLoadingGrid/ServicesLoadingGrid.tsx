import React from 'react';
import { SkeletonCard } from '../Skeleton';
import styles from './ServicesLoadingGrid.module.css';

interface ServicesLoadingGridProps {
  count?: number;
  className?: string;
}

const ServicesLoadingGrid: React.FC<ServicesLoadingGridProps> = ({
  count = 6,
  className = ''
}) => {
  return (
    <div className={`${styles.servicesGrid} ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard
          key={index}
          variant="service"
          showImage={false}
          showIcon={true}
          titleWidth="85%"
          descriptionLines={4}
          className={styles.serviceSkeletonCard}
        />
      ))}
    </div>
  );
};

export default ServicesLoadingGrid;
