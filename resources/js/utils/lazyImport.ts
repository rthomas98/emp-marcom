import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

type LazyComponentModule<T extends ComponentType> = {
    default: T;
} & Record<string, unknown>;

/**
 * Utility function for lazy loading pages with Inertia.js
 * This ensures code splitting works properly with Inertia's page components
 */
export function lazyImport<T extends ComponentType>(path: string, namedExport?: string): LazyExoticComponent<T> {
    return lazy(async () => {
        const module = (await import(path)) as LazyComponentModule<T>;
        const component = namedExport ? (module[namedExport] as T) : module.default;

        return { default: component };
    });
}

/**
 * Create a lazy-loaded page component with error boundary
 */
export function createLazyPage<T extends ComponentType>(importFn: () => Promise<LazyComponentModule<T>>): LazyExoticComponent<T> {
    return lazy(() =>
        importFn().catch(async () => {
            // Fallback to error page if chunk fails to load
            const fallback = await import('../pages/error/ChunkLoadError');

            return { default: fallback.default as unknown as T };
        }),
    );
}
