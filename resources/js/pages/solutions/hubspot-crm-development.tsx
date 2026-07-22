import { HubspotCTA } from '@/components/solutions/HubspotCTA';
import { HubspotFeatures } from '@/components/solutions/HubspotFeatures';
import { Header9 } from '@/components/solutions/HubspotHeader';
import { HubspotOverview } from '@/components/solutions/HubspotOverview';
import { HubspotProcess } from '@/components/solutions/HubspotProcess';
import { HubspotReporting } from '@/components/solutions/HubspotReporting';
import { HubspotServices } from '@/components/solutions/HubspotServices';
import { HubspotTestimonial } from '@/components/solutions/HubspotTestimonial';
import { HubspotTraining } from '@/components/solutions/HubspotTraining';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function HubspotCrmDevelopment() {
    const pageTitle = 'HubSpot CRM Development Dallas';
    const pageDescription =
        'HubSpot CRM implementation and workflow integration for Dallas businesses. Improve data quality, automation, reporting, and adoption with senior specialists.';

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Solutions', url: 'https://www.empuls3.com/solutions' },
        { name: 'HubSpot CRM Development', url: 'https://www.empuls3.com/solutions/hubspot-crm-development' },
    ]);
    return (
        <SiteLayout title={generateLocalTitle(pageTitle)}>
            <Head>
                <title>{generateLocalTitle(pageTitle)}</title>
                <meta name="description" content={generateLocalDescription(pageDescription)} />
                <meta
                    name="keywords"
                    content="HubSpot development Dallas, Dallas CRM experts, CRM implementation DFW, sales automation, HubSpot integration Dallas, marketing automation Dallas"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content={generateLocalTitle(pageTitle)} />
                <meta property="og:description" content={generateLocalDescription(pageDescription)} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/solutions/hubspot-crm-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/hubspot-development-og.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
                <meta name="twitter:description" content="HubSpot CRM implementation and workflow integration for Dallas businesses." />
                <meta name="twitter:image" content="https://www.empuls3.com/images/hubspot-development-og.jpg" />

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>
            <Header9 />
            <HubspotOverview />
            <HubspotProcess />
            <HubspotFeatures />
            <HubspotServices />
            <HubspotReporting />
            <HubspotTraining />
            <HubspotTestimonial />
            <HubspotCTA />
        </SiteLayout>
    );
}
