import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateServiceSchema } from '@/utils/schema';
import { dallasKeywords, generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function DallasSoftwareDevelopment() {
    const serviceInfo = {
        title: 'Custom Software Development',
        description:
            'When aging software, disconnected systems, or an unreliable vendor slows the business down, our senior engineers help Dallas teams diagnose the problem and modernize it without losing operational continuity.',
        features: [
            'Enterprise Software Solutions',
            'Cloud-Native Applications',
            'Legacy System Modernization',
            'API Development & Integration',
            'Database Design & Optimization',
            'Microservices Architecture',
        ],
        benefits: [
            'Senior-led technical assessment and delivery',
            'Modernization plans built around business continuity',
            'Direct access to the engineers doing the work',
            'Experience with regulated and operationally complex systems',
            'Remote collaboration across the Dallas-Fort Worth metroplex',
            'Clear scope, priorities, risks, and next steps',
        ],
        cta: 'Tell us what is slowing the business down. We will review the situation and respond within one business day with a practical next step.',
    };

    // Schema markup
    const localBusinessSchema = generateLocalBusinessSchema();
    const serviceSchema = generateServiceSchema({
        name: 'Custom Software Development Dallas',
        description:
            'Expert custom software development services for Dallas businesses. Enterprise solutions, cloud applications, and digital transformation.',
        url: 'https://www.empuls3.com/dallas/software-development',
    });
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Dallas', url: 'https://www.empuls3.com/dallas' },
        { name: 'Software Development', url: 'https://www.empuls3.com/dallas/software-development' },
    ]);

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle('Custom Software Development Services')}</title>
                <meta
                    name="description"
                    content={generateLocalDescription(
                        'Expert custom software development for Dallas businesses. Enterprise applications, cloud solutions, and digital transformation from local specialists.',
                    )}
                />
                <meta name="keywords" content={dallasKeywords.softwareDevelopment.join(', ')} />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Custom Software Development Dallas | Empuls3" />
                <meta
                    property="og:description"
                    content="Transform your Dallas business with custom software solutions. Local expertise, senior developers, proven results."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com/dallas/software-development" />
                <meta property="og:image" content="https://www.empuls3.com/images/dallas-software-development.jpg" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Custom Software Development Dallas | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Expert software development for Dallas businesses. Enterprise solutions from local specialists."
                />
                <meta name="twitter:image" content="https://www.empuls3.com/images/dallas-software-development.jpg" />

                {/* Schema Markup */}
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

                {/* FAQ Schema for Dallas Software Development */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does custom software development cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom software development in Dallas typically ranges from $50,000 to $500,000+ depending on complexity, features, and timeline. We offer flexible engagement models and can work within your budget to deliver maximum value."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to develop custom software?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Development timelines vary based on project scope. Simple applications can be completed in 3-4 months, while enterprise solutions may take 6-12 months. We use agile methodology to deliver working software incrementally."
                }
              },
              {
                "@type": "Question",
                "name": "Do you work with Dallas startups and enterprises?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we work with Dallas businesses of all sizes, from Deep Ellum startups to Fortune 500 companies in Downtown Dallas. Our flexible approach adapts to your specific needs and budget."
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
