type AnalyticsParameters = Record<string, string | number | boolean | undefined>;

export function trackAnalyticsEvent(eventName: string, parameters: AnalyticsParameters = {}): void {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
    }
}

export function initializeConversionTracking(): void {
    if (typeof document === 'undefined' || document.documentElement.dataset.conversionTracking === 'ready') {
        return;
    }

    document.documentElement.dataset.conversionTracking = 'ready';
    document.addEventListener('click', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const link = target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href') || '';

        if (href.startsWith('tel:')) {
            trackAnalyticsEvent('phone_click', { link_url: href, link_text: link.textContent?.trim() });
        } else if (href.startsWith('mailto:')) {
            trackAnalyticsEvent('email_click', { link_url: href, link_text: link.textContent?.trim() });
        } else if (href.includes('calendly.com')) {
            trackAnalyticsEvent('schedule_consultation_click', { link_url: href, link_text: link.textContent?.trim() });
        }
    });
}
