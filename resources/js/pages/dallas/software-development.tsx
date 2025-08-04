import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, dallasKeywords } from '@/utils/seo';

export default function DallasSoftwareDevelopment() {
  const serviceInfo = {
    title: "Custom Software Development",
    description: "Dallas businesses lose $50K+ yearly on software that doesn't work. We've fixed 200+ tech disasters for companies from Downtown to Plano. No junior developers, no BS, just senior pros who get it done remotely for 40% less than Uptown agencies.",
    features: [
      "Enterprise Software Solutions",
      "Cloud-Native Applications", 
      "Legacy System Modernization",
      "API Development & Integration",
      "Database Design & Optimization",
      "Microservices Architecture"
    ],
    benefits: [
      "Remote team available for virtual meetings anytime",
      "Understanding of Texas business regulations and compliance",
      "Same-day response for critical issues",
      "Experience with Dallas industries: healthcare, finance, energy",
      "Lower costs due to remote operations - savings passed to you",
      "Proven track record with 200+ Dallas businesses"
    ],
    cta: "Stop bleeding money on broken software. Get a free assessment and find out exactly what it'll take to fix your tech problems. We answer in 2 hours, not 2 weeks."
  };

  // Schema markup
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: 'Custom Software Development Dallas',
    description: 'Expert custom software development services for Dallas businesses. Enterprise solutions, cloud applications, and digital transformation.',
    url: 'https://empuls3.com/dallas/software-development',
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 68
    }
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Dallas', url: 'https://empuls3.com/dallas' },
    { name: 'Software Development', url: 'https://empuls3.com/dallas/software-development' }
  ]);

  return (
    <SiteLayout>
      <Head>
        <title>{generateLocalTitle('Custom Software Development Services')}</title>
        <meta name="description" content={generateLocalDescription('Expert custom software development for Dallas businesses. Enterprise applications, cloud solutions, and digital transformation from local specialists.')} />
        <meta name="keywords" content={dallasKeywords.softwareDevelopment.join(', ')} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Custom Software Development Dallas | Empuls3" />
        <meta property="og:description" content="Transform your Dallas business with custom software solutions. Local expertise, senior developers, proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/dallas/software-development" />
        <meta property="og:image" content="https://empuls3.com/images/dallas-software-development.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Software Development Dallas | Empuls3" />
        <meta name="twitter:description" content="Expert software development for Dallas businesses. Enterprise solutions from local specialists." />
        <meta name="twitter:image" content="https://empuls3.com/images/dallas-software-development.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/dallas/software-development" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
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