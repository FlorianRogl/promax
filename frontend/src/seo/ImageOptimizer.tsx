import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    loading?: 'lazy' | 'eager';
    priority?: boolean;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    sizes?: string;
    onLoad?: () => void;
    onError?: () => void;
}

/**
 * OptimizedImage Component
 *
 * Features:
 * - Lazy loading mit Intersection Observer
 * - WebP Support mit Fallback
 * - Blur-up Effekt beim Laden
 * - Responsive Images
 * - SEO-optimierte Alt-Tags
 *
 * Usage:
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="PROMAX Engineering Team"
 *   width="100%"
 *   height="500px"
 *   loading="lazy"
 * />
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
                                                                  src,
                                                                  alt,
                                                                  width = '100%',
                                                                  height = 'auto',
                                                                  className = '',
                                                                  loading = 'lazy',
                                                                  priority = false,
                                                                  objectFit = 'cover',
                                                                  sizes,
                                                                  onLoad,
                                                                  onError
                                                              }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority || loading === 'eager');
    const [imageSrc, setImageSrc] = useState<string>('');
    const imgRef = useRef<HTMLImageElement>(null);

    // Intersection Observer für lazy loading
    useEffect(() => {
        if (priority || loading === 'eager') {
            setIsInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '50px', // Lade Bild 50px bevor es sichtbar wird
                threshold: 0.01
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority, loading]);

    // Setze Bild-Source wenn im Viewport
    useEffect(() => {
        if (isInView) {
            // Check für WebP Support
            const supportsWebP = checkWebPSupport();

            if (supportsWebP && !src.endsWith('.svg')) {
                // Versuche WebP Version zu laden
                const webpSrc = convertToWebP(src);
                setImageSrc(webpSrc);
            } else {
                setImageSrc(src);
            }
        }
    }, [isInView, src]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        // Fallback zu Original wenn WebP fehlschlägt
        if (imageSrc !== src) {
            setImageSrc(src);
        }
        onError?.();
    };

    return (
        <div
            ref={imgRef}
            style={{
                width,
                height,
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#f0f0f0'
            }}
            className={className}
        >
            {/* Placeholder während Laden */}
            {!isLoaded && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite'
                    }}
                />
            )}

            {/* Eigentliches Bild */}
            {isInView && (
                <img
                    src={imageSrc}
                    alt={alt}
                    loading={loading}
                    width={typeof width === 'number' ? width : undefined}
                    height={typeof height === 'number' ? height : undefined}
                    sizes={sizes}
                    onLoad={handleLoad}
                    onError={handleError}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit,
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                    // SEO: Title für bessere Accessibility
                    title={alt}
                />
            )}

            <style>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
        </div>
    );
};

// Helper: Check WebP Support
const checkWebPSupport = (): boolean => {
    if (typeof window === 'undefined') return false;

    const elem = document.createElement('canvas');
    if (elem.getContext && elem.getContext('2d')) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
};

// Helper: Convert Image URL to WebP
const convertToWebP = (src: string): string => {
    // Wenn es eine externe URL ist (z.B. Unsplash), nicht konvertieren
    if (src.startsWith('http')) {
        return src;
    }

    // Lokale Bilder: .jpg/.png → .webp
    const webpSrc = src
        .replace(/\.(jpg|jpeg|png)$/i, '.webp');

    return webpSrc;
};

// Export für einfache Verwendung
export default OptimizedImage;


/**
 * VERWENDUNG IN KOMPONENTEN:
 *
 * Anstatt:
 * <img src="/hero.jpg" alt="Hero" />
 *
 * Verwende:
 * <OptimizedImage
 *   src="/hero.jpg"
 *   alt="PROMAX Engineering Hero Image"
 *   loading="lazy"
 *   width="100%"
 *   height="500px"
 * />
 */