import { lazy, ComponentType } from 'react';

/**
 * Utility function for lazy loading pages with Inertia.js
 * This ensures code splitting works properly with Inertia's page components
 */
export function lazyImport<T extends ComponentType<any>>(
    path: string,
    namedExport?: string
): React.LazyExoticComponent<T> {
    return lazy(async () => {
        const module = await import(path);
        return namedExport ? { default: module[namedExport] } : module;
    });
}

/**
 * Create a lazy-loaded page component with error boundary
 */
export function createLazyPage(importFn: () => Promise<any>) {
    return lazy(() => 
        importFn().catch(() => {
            // Fallback to error page if chunk fails to load
            return import('../pages/error/ChunkLoadError');
        })
    );
}