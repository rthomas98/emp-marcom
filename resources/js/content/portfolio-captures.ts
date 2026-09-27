/**
 * Real screenshots of client sites, keyed by case study slug.
 * A capture shows the live site on the capture date, which may differ from how it looked at delivery.
 * Keep these separate from decorative illustrations; only add a capture of the client's actual site.
 */
export interface PortfolioCapture {
    src: string;
    alt: string;
    capturedOn: string;
    width: number;
    height: number;
}

export const portfolioCaptures: Record<string, PortfolioCapture> = {
    'hebert-thomas-law-website-refresh': {
        src: '/images/case-studies/hebert-thomas-live-2026-09-27.webp',
        alt: 'Screenshot of the Hebert-Thomas Law, PLLC website homepage',
        capturedOn: 'September 27, 2026',
        width: 1728,
        height: 941,
    },
    'codegig-strategic-pivot-new-website-for-new-audiences': {
        src: '/images/case-studies/codegig-live-2026-09-27.webp',
        alt: 'Screenshot of the CodeGig website homepage',
        capturedOn: 'September 27, 2026',
        width: 1728,
        height: 941,
    },
};

/**
 * Client sites known to be unavailable when last checked. The case study facts stay as published;
 * only the outbound link is withheld.
 */
export const unavailableClientSites: Record<string, { checkedOn: string }> = {
    'solushiens-modern-website-redesign': { checkedOn: 'September 27, 2026' },
};

export function portfolioCaptureCaption(capture: PortfolioCapture): string {
    return `Live site captured ${capture.capturedOn}. It may differ from how the site looked at delivery.`;
}
