import { useEffect, useState } from 'react';

interface ImagePreloaderOptions {
    onLoad?: (src: string) => void;
    onError?: (src: string) => void;
    onAllLoaded?: () => void;
}

export function useImagePreloader(
    imageSrcs: string[],
    options: ImagePreloaderOptions = {}
) {
    const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (imageSrcs.length === 0) {
            setIsLoading(false);
            return;
        }

        const imagePromises = imageSrcs.map((src) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                
                img.onload = () => {
                    setLoadedImages((prev) => new Set(prev).add(src));
                    options.onLoad?.(src);
                    resolve();
                };
                
                img.onerror = () => {
                    setFailedImages((prev) => new Set(prev).add(src));
                    options.onError?.(src);
                    resolve(); // Resolve even on error to continue loading other images
                };
                
                img.src = src;
            });
        });

        Promise.all(imagePromises).then(() => {
            setIsLoading(false);
            options.onAllLoaded?.();
        });
    }, [imageSrcs.join(',')]); // Re-run if image sources change

    return {
        loadedImages,
        failedImages,
        isLoading,
        progress: loadedImages.size / imageSrcs.length,
    };
}

// Hook for preloading critical images
export function useCriticalImages(criticalImages: string[]) {
    useEffect(() => {
        // Use link preload for critical images
        criticalImages.forEach((src) => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }, [criticalImages]);
}