import type { route as routeFn } from 'ziggy-js';

declare global {
    const route: typeof routeFn;
    
    // Google Analytics gtag function
    function gtag(command: string, targetId: string | Date, config?: object): void;
    
    interface Window {
        gtag?: typeof gtag;
    }
}
