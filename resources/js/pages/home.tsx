import { ProcessTransparency } from '@/components/common/ProcessTransparency';
import { StatsBar } from '@/components/common/StatsBar';
import { TrustSignals } from '@/components/common/TrustSignals';
import { Approach } from '@/components/home/Approach';
import { Features } from '@/components/home/Features';
import { Header } from '@/components/home/Header';
import { HomeComponentWrapper } from '@/components/home/HomeComponentWrapper';
import { Industries } from '@/components/home/Industries';
import { Innovation } from '@/components/home/Innovation';
import { Partners } from '@/components/home/Partners';
import { Services } from '@/components/home/Services';
import { Testimonials } from '@/components/home/Testimonials';
import SiteLayout from '@/layouts/site-layout';
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from '@/utils/schema';
import { dallasKeywords } from '@/utils/seo';
import { Head } from '@inertiajs/react';

export default function Home() {
    const localBusinessSchema = generateLocalBusinessSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([{ name: 'Home', url: 'https://www.empuls3.com' }]);

    return (
        <SiteLayout title="Software Rescue & Integration for DFW Businesses | Empuls3">
            <Head>
                <meta
                    name="description"
                    content="Senior software rescue, legacy modernization, CRM and API integration, and ongoing engineering support for established Dallas–Fort Worth service businesses."
                />
                <meta
                    name="keywords"
                    content={dallasKeywords.general
                        .concat(['legacy software modernization Dallas', 'Dallas systems integration', 'senior engineering support DFW'])
                        .join(', ')}
                />
                {/* Open Graph Tags for better social sharing */}
                <meta property="og:title" content="Software Rescue & Integration for DFW Businesses | Empuls3" />
                <meta
                    property="og:description"
                    content="Senior engineers who stabilize aging software, connect critical systems, and provide ongoing technical ownership for established DFW businesses."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.empuls3.com" />
                <meta property="og:image" content="/images/empuls3-og-image.jpg" />
                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Software Rescue & Integration for DFW Businesses | Empuls3" />
                <meta
                    name="twitter:description"
                    content="Senior software rescue, systems integration, and ongoing engineering support for established Dallas–Fort Worth businesses."
                />
                <meta name="twitter:image" content="/images/empuls3-og-image.jpg" />
                {/* Local Business Schema */}
                <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>

                {/* Breadcrumb Schema */}
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

                {/* Structured Data for Services */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "serviceType": "Software Rescue and Legacy Modernization",
                "provider": {
                  "@type": "Organization",
                  "name": "Empuls3"
                },
                "description": "We stabilize aging or unreliable software and create a controlled modernization path.",
                "url": "https://www.empuls3.com/solutions/software-development-design"
              },
              {
                "@type": "Service",
                "serviceType": "CRM, API, and Workflow Integration",
                "provider": {
                  "@type": "Organization",
                  "name": "Empuls3"
                },
                "description": "We connect business systems, data, and workflows to reduce manual work and operational risk.",
                "url": "https://www.empuls3.com/solutions/backend-api-development"
              },
              {
                "@type": "Service",
                "serviceType": "Ongoing Senior Engineering Support",
                "provider": {
                  "@type": "Organization",
                  "name": "Empuls3"
                },
                "description": "We provide ongoing senior-level engineering ownership for critical applications and infrastructure.",
                "url": "https://www.empuls3.com/services/software-engineering-it-consulting"
              }
            ]
          }
        `}</script>

                {/* Structured Data for Testimonials */}
                <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Empuls3",
            "review": [
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Anthony Bearden"
                },
                "reviewBody": "I gladly managed and collaborated with Rob at Monkeytag. When Rob joined our company, he jumped right into a fast-moving project for a large client. This challenge required him to learn everything quickly and apply his front-end/back-end development skills, knowledge, and understanding to execute efficiently. His personality and team player approach made challenges like this a continued success."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Palmer Dean"
                },
                "reviewBody": "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that. Would absolutely recommend to anyone looking for a top notch design agency to work with! Easy, fun, and talented."
              }
            ]
          }
        `}</script>
            </Head>
            <HomeComponentWrapper>
                <Header />
                <StatsBar />
                <TrustSignals />
                <Features />
                <Services />
                <Industries />
                <Innovation />
                <Approach />
                <ProcessTransparency />
                <Partners />
                <Testimonials />
            </HomeComponentWrapper>
        </SiteLayout>
    );
}
