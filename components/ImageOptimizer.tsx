'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';

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
    // If priority or eager, start in-view immediately
    const [isInView, setIsInView] = useState(priority || loading === 'eager');
    // Track WebP fallback: if webp fails, fall back to original src
    const [webpFailed, setWebpFailed] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Intersection Observer für lazy loading – only attach when not already in-view
    useEffect(() => {
        if (isInView) return;

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

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [isInView]);

    // Compute the image src to use (no setState in effect – pure derivation)
    const imageSrc = useMemo(() => {
        if (!isInView) return '';
        if (webpFailed) return src;
        // checkWebPSupport is SSR-safe (returns false on server)
        if (checkWebPSupport() && !src.endsWith('.svg')) {
            return convertToWebP(src);
        }
        return src;
    }, [isInView, src, webpFailed]);

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        // Fallback zu Original wenn WebP fehlschlägt
        if (imageSrc !== src) {
            setWebpFailed(true);
        }
        onError?.();
    };

    return (
        <div
            ref={containerRef}
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

// Helper: Check WebP Support (SSR-safe)
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
    // Wenn es eine externe URL ist, nicht konvertieren
    if (src.startsWith('http')) {
        return src;
    }

    // Lokale Bilder: .jpg/.png → .webp
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
};

// Export für einfache Verwendung
export default OptimizedImage;
