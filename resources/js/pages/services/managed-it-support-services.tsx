import { ManagedITCTA } from '@/components/services/ManagedITCTA';
import { ManagedITHeader } from '@/components/services/ManagedITHeader';
import { ManagedITOverview } from '@/components/services/ManagedITOverview';
import { ManagedITServices } from '@/components/services/ManagedITServices';
import { ManagedITSolutions } from '@/components/services/ManagedITSolutions';
import { ManagedITSupport } from '@/components/services/ManagedITSupport';
import { ManagedITTeams } from '@/components/services/ManagedITTeams';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/utils/schema';
import { generateServiceMetaTags } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function ManagedItSupportServices() {
    const serviceSchema = generateServiceSchema({
        name: 'Managed IT Services Dallas',
        description: 'Managed IT support and services for Dallas businesses. Expert technical support from senior specialists.',
        url: 'https://www.empuls3.com/services/managed-it-support-services',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Services', url: 'https://www.empuls3.com/services' },
        { name: 'Managed IT Services', url: 'https://www.empuls3.com/services/managed-it-support-services' },
    ]);

    const metaTags = generateServiceMetaTags(
        'managedIT',
        'Managed IT & Support Services',
        'Managed IT services for Dallas businesses. Expert support, proactive monitoring, and strategic IT management from senior specialists.',
    );
    return (
        <SiteLayout>
            <Head>
                <title>{metaTags.title}</title>
                <meta name="description" content={metaTags.description} />
                <meta name="keywords" content={metaTags.keywords} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={metaTags.ogTitle} />
                <meta property="og:description" content={metaTags.ogDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/services/managed-it-support-services" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTags.twitterTitle} />
                <meta name="twitter:description" content={metaTags.twitterDescription} />

                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>
            <ManagedITHeader />
            <ManagedITOverview />
            <ManagedITTeams />
            <ManagedITSupport />
            <ManagedITServices />
            <ManagedITSolutions />
            <ManagedITCTA />
        </SiteLayout>
    );
}
