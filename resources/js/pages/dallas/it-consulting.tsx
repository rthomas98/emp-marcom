import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateServiceSchema } from '@/utils/schema';
import { dallasKeywords, generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function DallasITConsulting() {
    const serviceInfo = {
        title: 'Strategic IT Consulting',
        description:
            'When systems do not communicate, work stays manual, or technology decisions keep stalling, we help Dallas leaders establish priorities and a practical modernization roadmap.',
        features: [
            'Digital Transformation Strategy',
            'Technology Stack Assessment',
            'Cloud Migration Planning',
            'Cybersecurity Consulting',
            'IT Infrastructure Design',
            'Business Process Optimization',
        ],
        benefits: [
            'Focused virtual working sessions for busy leadership teams',
            'Risk and compliance requirements included in planning',
            'Vendor-neutral recommendations',
            'Experience with complex operational workflows',
            'Prioritized decisions instead of a generic report',
            'Clear advice even when the best next step is not a build',
        ],
        cta: 'Request an IT strategy review and leave with a clearer view of the risks, priorities, and next decisions.',
    };

    // Schema markup
    const localBusinessSchema = generateLocalBusinessSchema();
    const serviceSchema = generateServiceSchema({
        name: 'IT Consulting Dallas',
        description: 'Strategic IT consulting services for Dallas businesses. Digital transformation, cloud strategy, and technology optimization.',
        url: 'https://www.empuls3.com/dallas/it-consulting',
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Dallas', url: 'https://www.empuls3.com/dallas' },
        { name: 'IT Consulting', url: 'https://www.empuls3.com/dallas/it-consulting' },
    ]);

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle('IT Consulting Services')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Strategic IT consulting for Dallas businesses. Digital transformation, cloud strategy, and technology optimization from local experts.',
                    )}
                />
                <meta name="keywords" content={dallasKeywords.itConsulting.join(', ')} />

                {/* Open Graph Tags */}
                <meta property="og:title" content="IT Consulting Dallas | Empuls3" />
                <meta
                    property="og:description"
                    content="Strategic IT consulting for Dallas businesses. Transform your technology with local expertise and proven strategies."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/dallas/it-consulting" />
                <meta property="og:image" content="https://www.empuls3.com/images/dallas-it-consulting.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IT Consulting Dallas | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Expert IT consulting for Dallas businesses. Digital transformation and strategic guidance from local specialists."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/dallas-it-consulting.jpg" />

                {/* Schema Markup */}
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

                {/* FAQ Schema for Dallas IT Consulting */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What IT consulting services do you offer in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive IT consulting for Dallas businesses including digital transformation strategy, cloud migration, cybersecurity assessment, technology roadmapping, and vendor selection. Our consultants work on-site or remotely based on your needs."
                }
              },
              {
                "@type": "Question",
                "name": "How do IT consultants charge in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IT consulting can be scoped as an assessment, defined project, or ongoing advisory engagement. We provide a written scope and pricing after understanding the systems, risks, stakeholders, and decisions involved."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose local Dallas IT consultants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Dallas-focused technology partner understands the regional business environment and can collaborate with DFW stakeholders while supporting distributed teams. Empuls3 has operated since 2009."
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
