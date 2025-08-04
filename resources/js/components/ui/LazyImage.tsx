import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    placeholderSrc?: string;
    className?: string;
    onLoad?: () => void;
    onError?: () => void;
}

export function LazyImage({
    src,
    alt,
    placeholderSrc,
    className,
    onLoad,
    onError,
    ...props
}: LazyImageProps) {
    const [imageSrc, setImageSrc] = useState(placeholderSrc || '');
    const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (!imageRef) return;

        // Check if native lazy loading is supported
        if ('loading' in HTMLImageElement.prototype) {
            setImageSrc(src);
            return;
        }

        // Use Intersection Observer for browsers that don't support native lazy loading
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setImageSrc(src);
                        observerRef.current?.disconnect();
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before the image enters viewport
            }
        );

        observerRef.current.observe(imageRef);

        return () => {
            observerRef.current?.disconnect();
        };
    }, [imageRef, src]);

    const handleLoad = () => {
        setIsLoaded(true);
        setIsError(false);
        onLoad?.();
    };

    const handleError = () => {
        setIsError(true);
        setIsLoaded(false);
        onError?.();
        
        // Fallback to a default error image
        if (src !== '/images/placeholder-error.png') {
            setImageSrc('/images/placeholder-error.png');
        }
    };

    return (
        <div className={cn('relative overflow-hidden', className)}>
            {/* Blur placeholder while loading */}
            {!isLoaded && placeholderSrc && (
                <img
                    src={placeholderSrc}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover blur-xl"
                    aria-hidden="true"
                />
            )}
            
            <img
                ref={setImageRef}
                src={imageSrc}
                alt={alt}
                onLoad={handleLoad}
                onError={handleError}
                loading="lazy"
                className={cn(
                    'transition-opacity duration-300',
                    isLoaded ? 'opacity-100' : 'opacity-0',
                    isError && 'opacity-50',
                    className
                )}
                {...props}
            />

            {/* Loading skeleton */}
            {!isLoaded && !isError && (
                <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}
        </div>
    );
}

// Optimized image component with srcset support
interface OptimizedImageProps extends LazyImageProps {
    sizes?: string;
    srcSet?: string;
}

export function OptimizedImage({
    src,
    alt,
    sizes = '100vw',
    srcSet,
    ...props
}: OptimizedImageProps) {
    // Generate srcSet if not provided
    const generateSrcSet = () => {
        if (srcSet) return srcSet;
        
        // This assumes your images follow a naming convention
        // e.g., image.jpg, image-2x.jpg, image-3x.jpg
        const baseName = src.replace(/\.[^/.]+$/, '');
        const extension = src.match(/\.[^/.]+$/)?.[0] || '';
        
        return `
            ${baseName}${extension} 1x,
            ${baseName}-2x${extension} 2x,
            ${baseName}-3x${extension} 3x
        `.trim();
    };

    return (
        <LazyImage
            src={src}
            alt={alt}
            sizes={sizes}
            srcSet={generateSrcSet()}
            {...props}
        />
    );
}