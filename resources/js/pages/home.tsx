import SiteLayout from '@/layouts/site-layout';
import { Header } from '@/components/home/Header';
import { Features } from '@/components/home/Features';
import { Services } from '@/components/home/Services';
import { Industries } from '@/components/home/Industries';
import { Innovation } from '@/components/home/Innovation';
import { Approach } from '@/components/home/Approach';
import { Partners } from '@/components/home/Partners';
import { Testimonials } from '@/components/home/Testimonials';
import { HomeComponentWrapper } from '@/components/home/HomeComponentWrapper';
import { StatsBar } from '@/components/common/StatsBar';
import { TrustSignals } from '@/components/common/TrustSignals';
import { ProcessTransparency } from '@/components/common/ProcessTransparency';
import { Head } from '@inertiajs/react';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, dallasKeywords } from '@/utils/seo';

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' }
  ]);

  return (
    <SiteLayout title={generateLocalTitle('Software Development & IT Consulting')}>
      <Head>
        <meta name="description" content={generateLocalDescription('Premier software development, web applications, and IT consulting services for Dallas businesses. Transform your business with local expertise.')} />
        <meta name="keywords" content={dallasKeywords.general.concat(['Dallas boutique agency', 'Dallas enterprise solutions', 'Dallas digital transformation']).join(', ')} />
        {/* Open Graph Tags for better social sharing */}
        <meta property="og:title" content="Empuls3 - Dallas Software Development & IT Consulting" />
        <meta property="og:description" content="Dallas's premier boutique tech agency. Custom software, web development, and IT consulting services for DFW businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com" />
        <meta property="og:image" content="/images/empuls3-og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Empuls3 Dallas - Software Development & IT Consulting" />
        <meta name="twitter:description" content="Dallas's premier tech agency delivering custom software, web development, and IT consulting services to DFW businesses." />
        <meta name="twitter:image" content="/images/empuls3-og-image.jpg" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com" />
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Structured Data for Services */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "serviceType": "Custom Software Development",
                "provider": {
                  "@type": "Organization",
                  "name": "Empuls3"
                },
                "description": "We build custom software applications that solve your specific business challenges.",
                "url": "https://empuls3.com/solutions/software-development-design"
              },
              {
                "@type": "Service",
                "serviceType": "Web Development",
                "provider": {
                  "@type": "Organization",
                  "name": "Empuls3"
                },
                "description": "We create responsive, user-friendly websites and web applications that engage your audience.",
                "url": "https://empuls3.com/services/web-development"
              },
              {
                "@type": "Service",
                "serviceType": "IT Consulting",
                "provider": {
                  "@type": "Organization",
                  "name": "Empuls3"
                },
                "description": "Our consulting services help you navigate the complex digital landscape and make informed technology decisions.",
                "url": "https://empuls3.com/services/software-engineering-it-consulting"
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
