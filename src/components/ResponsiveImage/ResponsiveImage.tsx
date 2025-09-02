import React, { useState } from 'react';
import { SkeletonImage } from '../Skeleton';

interface ResponsiveImageProps {
  src: string; // Caminho base da imagem (ex: 'bruna/dra-bruna-vilela-atenciosa-05')
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  useResponsive?: boolean; // Usar srcset responsivo ou apenas fallback simples
  showSkeleton?: boolean; // Mostrar skeleton durante carregamento
  skeletonHeight?: string; // Altura do skeleton
}

interface ImageUrlsSimple {
  webp: string;
  jpg: string;
}

interface ImageUrlsResponsive {
  webp: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    original: string;
  };
  jpg: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    original: string;
  };
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes = '100vw',
  useResponsive = true,
  showSkeleton = true,
  skeletonHeight = '200px'
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };
  // Construir URLs para diferentes tamanhos
  const buildImageUrls = (basePath: string): ImageUrlsSimple | ImageUrlsResponsive => {
    const baseUrl = `/images/${basePath}`;
    
    if (!useResponsive) {
      // Modo simples - apenas WebP + JPG fallback
      return {
        webp: `${baseUrl}.webp`,
        jpg: `${baseUrl}.jpg`
      };
    }
    
    // Modo responsivo - múltiplos tamanhos
    return {
      webp: {
        sm: `${baseUrl}-sm.webp`,
        md: `${baseUrl}-md.webp`, 
        lg: `${baseUrl}-lg.webp`,
        xl: `${baseUrl}-xl.webp`,
        original: `${baseUrl}.webp`
      },
      jpg: {
        sm: `${baseUrl}-sm.jpg`,
        md: `${baseUrl}-md.jpg`,
        lg: `${baseUrl}-lg.jpg`, 
        xl: `${baseUrl}-xl.jpg`,
        original: `${baseUrl}.jpg`
      }
    };
  };

  const imageUrls = buildImageUrls(src);

  // Renderização simples (sem srcset)
  if (!useResponsive) {
    const simpleUrls = imageUrls as ImageUrlsSimple;
    return (
      <div style={{ position: 'relative' }}>
        {showSkeleton && isLoading && (
          <SkeletonImage 
            width="100%" 
            height={skeletonHeight}
            className={className}
          />
        )}
        <picture 
          className={className} 
          style={{ 
            display: isLoading ? 'none' : 'block'
          }}
        >
          <source
            srcSet={simpleUrls.webp}
            type="image/webp"
            sizes={sizes}
          />
          <img
            src={simpleUrls.jpg}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        </picture>
      </div>
    );
  }

  // Renderização responsiva (com srcset)
  const responsiveUrls = imageUrls as ImageUrlsResponsive;

  const webpSrcSet = [
    `${responsiveUrls.webp.sm} 480w`,
    `${responsiveUrls.webp.md} 768w`,
    `${responsiveUrls.webp.lg} 1200w`,
    `${responsiveUrls.webp.xl} 1920w`,
    `${responsiveUrls.webp.original} 2000w`
  ].join(', ');

  const jpgSrcSet = [
    `${responsiveUrls.jpg.sm} 480w`,
    `${responsiveUrls.jpg.md} 768w`,
    `${responsiveUrls.jpg.lg} 1200w`,
    `${responsiveUrls.jpg.xl} 1920w`,
    `${responsiveUrls.jpg.original} 2000w`
  ].join(', ');

  return (
    <div style={{ position: 'relative' }}>
      {showSkeleton && isLoading && (
        <SkeletonImage 
          width="100%" 
          height={skeletonHeight}
          className={className}
        />
      )}
      <picture 
        className={className}
        style={{ 
          display: isLoading ? 'none' : 'block'
        }}
      >
        {/* Fonte WebP responsiva para navegadores modernos */}
        <source
          srcSet={webpSrcSet}
          type="image/webp"
          sizes={sizes}
        />
        
        {/* Fallback JPG responsivo para máxima compatibilidade */}
        <source
          srcSet={jpgSrcSet}
          type="image/jpeg"
          sizes={sizes}
        />
        
        {/* Imagem padrão para navegadores muito antigos */}
        <img
          src={responsiveUrls.jpg.md} // Tamanho médio como fallback
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </picture>
    </div>
  );
};

export default ResponsiveImage;
