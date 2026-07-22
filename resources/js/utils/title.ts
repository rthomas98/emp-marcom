const INTERNAL_TITLE_SUFFIX = /\s*[-|]\s*(emp-marcom|laravel)\s*$/i;

export function formatDocumentTitle(title?: string): string {
    const normalizedTitle = (title || 'Empuls3').replace(INTERNAL_TITLE_SUFFIX, '').trim();

    if (/empuls3/i.test(normalizedTitle)) {
        return normalizedTitle;
    }

    return `${normalizedTitle} | Empuls3`;
}
