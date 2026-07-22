import { EngineeringArchitecture } from '@/components/services/EngineeringArchitecture';
import { EngineeringCloud } from '@/components/services/EngineeringCloud';
import { EngineeringCTA } from '@/components/services/EngineeringCTA';
import { EngineeringExpertise } from '@/components/services/EngineeringExpertise';
import { EngineeringHeader } from '@/components/services/EngineeringHeader';
import { EngineeringPerformance } from '@/components/services/EngineeringPerformance';
import { EngineeringSecurity } from '@/components/services/EngineeringSecurity';
import { EngineeringSolutions } from '@/components/services/EngineeringSolutions';
import { EngineeringStrategies } from '@/components/services/EngineeringStrategies';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/utils/schema';
import { generateServiceMetaTags } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function SoftwareEngineeringItConsulting() {
    const serviceSchema = generateServiceSchema({
        name: 'Software Engineering & IT Consulting Dallas',
        description:
            'Expert software engineering and IT consulting services for Dallas businesses. Strategic technology solutions from senior specialists.',
        url: 'https://www.empuls3.com/services/software-engineering-it-consulting',
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Services', url: 'https://www.empuls3.com/services' },
        { name: 'Software Engineering & IT Consulting', url: 'https://www.empuls3.com/services/software-engineering-it-consulting' },
    ]);

    const metaTags = generateServiceMetaTags(
        'itConsulting',
        'Software Engineering & IT Consulting',
        'Expert software engineering and IT consulting services for Dallas businesses. Transform your technology with local expertise.',
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
                <meta property="og:url" content="https://www.empuls3.com/services/software-engineering-it-consulting" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTags.twitterTitle} />
                <meta name="twitter:description" content={metaTags.twitterDescription} />

                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>
            <EngineeringHeader />
            <EngineeringStrategies />
            <EngineeringArchitecture />
            <EngineeringSolutions />
            <EngineeringExpertise />
            <EngineeringCloud />
            <EngineeringSecurity />
            <EngineeringPerformance />
            <EngineeringCTA />
        </SiteLayout>
    );
}
