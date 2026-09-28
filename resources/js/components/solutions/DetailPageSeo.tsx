import type { LeadPageConfig } from '@/components/marketing/LeadPage';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { Head } from '@inertiajs/react';

type DetailPageSeoProps = {
    /** Approved route title, description and service positioning from leadPages. */
    config: LeadPageConfig;
    section: 'solutions' | 'services';
    /** Breadcrumb label for this page. */
    name: string;
    /** Route path, e.g. "/solutions/backend-api-development". */
    path: string;
    /** Use when the restored page offer is broader than the leadPages wording. Pass the same title to SiteLayout. */
    title?: string;
    description?: string;
    /** Schema serviceType override; keep it aligned with the visible offer. */
    serviceType?: string;
};

const SITE_URL = 'https://www.empuls3.com';
const sectionLabels = { solutions: 'Solutions', services: 'Services' } as const;

/**
 * Shared <Head> for Solutions and Services detail pages: route title/meta, a Service schema named after the
 * page, and a breadcrumb trail. Page titles are set on SiteLayout.
 */
export function DetailPageSeo({
    config,
    section,
    name,
    path,
    title = config.title,
    description = config.metaDescription,
    serviceType = config.serviceType,
}: DetailPageSeoProps) {
    const url = `${SITE_URL}${path}`;
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': serviceType ? 'Service' : 'WebPage',
        name,
        description,
        provider: serviceType ? { '@type': 'Organization', name: 'Empuls3', url: SITE_URL } : undefined,
        serviceType,
        areaServed: config.locationLabel || 'Dallas–Fort Worth, Texas',
    };
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: sectionLabels[section], url: `${SITE_URL}/${section}` },
        { name, url },
    ]);

    return (
        <Head>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        </Head>
    );
}
