import { CompanyAchievements } from '@/components/company/CompanyAchievements';
import { CompanyContact } from '@/components/company/CompanyContact';
import { CompanyHeader } from '@/components/company/CompanyHeader';
import { CompanyJourney } from '@/components/company/CompanyJourney';
import { CompanyTeam } from '@/components/company/CompanyTeam';
import { CompanyValues } from '@/components/company/CompanyValues';
import { CompanyVision } from '@/components/company/CompanyVision';
import SiteLayout from '@/layouts/site-layout';
import { generateLocalBusinessSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function About() {
    // Use comprehensive local business schema
    const organizationSchema = generateLocalBusinessSchema();

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle('About Our Dallas Agency')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Learn about Empuls3, a senior-led technology agency founded in 2009 and serving Dallas-Fort Worth businesses remotely.',
                    )}
                />
                <meta
                    name="keywords"
                    content="micro agency, boutique technology firm, Robert Thomas, senior specialists, personalized technology solutions, direct collaboration, founded 2009"
                />

                {/* Open Graph tags for social sharing */}
                <meta property="og:title" content="About Empuls3 Dallas - Senior-Led Technology Agency" />
                <meta
                    property="og:description"
                    content="Learn about Empuls3, a senior-led software development and IT consulting agency serving DFW businesses since 2009."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/company/about" />
                <meta property="og:image" content="https://www.empuls3.com/images/about-cover.jpg" />

                {/* Twitter Card tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Our Boutique Agency - Empuls3" />
                <meta name="twitter:description" content="Learn about Empuls3, a specialized micro agency founded in 2009 by Robert Thomas." />
                <meta name="twitter:image" content="https://www.empuls3.com/images/about-cover.jpg" />

                {/* JSON-LD structured data */}
                <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
            </Head>

            <main id="main-content">
                <CompanyHeader
                    heading="About Our Remote Agency Serving Dallas"
                    description="Founded in 2009 by Robert Thomas, Empuls3 is a remote software development and IT consulting agency. Our senior-led team serves Dallas-Fort Worth businesses with software rescue, systems integration, and ongoing engineering support."
                />
                <CompanyJourney />
                <CompanyVision />
                <CompanyValues />
                <CompanyAchievements />
                <CompanyTeam />
                <CompanyContact />
            </main>
        </SiteLayout>
    );
}
