import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateServiceSchema } from '@/utils/schema';
import { dallasKeywords, generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function DallasManagedITServices() {
    const serviceInfo = {
        title: 'Managed IT Services',
        description:
            'We help Dallas businesses reduce operational disruption with structured monitoring, support, maintenance, backup, and technology planning.',
        features: [
            'System Monitoring',
            'Help Desk Support',
            'Network Management',
            'Backup & Disaster Recovery',
            'Security Patch Management',
            'IT Asset Management',
        ],
        benefits: [
            'Remote-first support with clear escalation paths',
            'Defined response targets for each engagement',
            'Proactive maintenance and risk identification',
            'Transparent scope and predictable billing',
            'Documented backup and recovery procedures',
            'Senior specialists for complex issues',
        ],
        cta: 'Request an IT operations review to identify support gaps, recurring risks, and the right service model for your team.',
    };

    // Schema markup
    const localBusinessSchema = generateLocalBusinessSchema();
    const serviceSchema = generateServiceSchema({
        name: 'Managed IT Services Dallas',
        description: 'Managed IT services for Dallas businesses. Proactive monitoring, help desk support, and IT management from senior specialists.',
        url: 'https://www.empuls3.com/dallas/managed-it-services',
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Dallas', url: 'https://www.empuls3.com/dallas' },
        { name: 'Managed IT Services', url: 'https://www.empuls3.com/dallas/managed-it-services' },
    ]);

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle('Managed IT Services')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Managed IT services for Dallas businesses. Proactive monitoring, help desk support, and technology management from senior specialists.',
                    )}
                />
                <meta name="keywords" content={dallasKeywords.managedIT.join(', ')} />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Managed IT Services Dallas | Empuls3" />
                <meta
                    property="og:description"
                    content="Managed IT support for Dallas businesses, including proactive monitoring, help desk support, maintenance, and technology planning."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/dallas/managed-it-services" />
                <meta property="og:image" content="https://www.empuls3.com/images/dallas-managed-it.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Managed IT Services Dallas | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Managed IT support, proactive monitoring, maintenance, and technology planning for Dallas businesses."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/dallas-managed-it.jpg" />

                {/* Schema Markup */}
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

                {/* FAQ Schema for Dallas Managed IT */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What's included in managed IT services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Managed IT engagements can include monitoring, help desk support, network management, security updates, backup management, and escalation planning. The exact service window, response targets, and pricing are defined in each agreement."
                }
              },
              {
                "@type": "Question",
                "name": "How much do managed IT services cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pricing depends on the number of users and devices, the systems in scope, service windows, security requirements, and response targets. We provide a written service scope and pricing after an environment review."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide on-site IT support in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most support begins remotely. If on-site work is needed, availability and response expectations are confirmed as part of the engagement scope."
                }
              }
            ]
          }
        `}</script>
            </Head>

            <DallasLandingPage service={serviceInfo} />
        </SiteLayout>
    );
}
