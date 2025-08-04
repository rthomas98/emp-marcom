import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, dallasKeywords } from '@/utils/seo';

export default function DallasWebDevelopment() {
  const serviceInfo = {
    title: "Professional Web Development",
    description: "Your website sucks. It's slow, ugly, and doesn't convert. We build sites that actually make money - fast-loading, mobile-friendly, and designed to turn visitors into customers. No WordPress themes, no amateur hour, just custom sites that work.",
    features: [
      "Responsive Web Design",
      "E-commerce Development", 
      "Progressive Web Apps",
      "CMS Integration (WordPress, Drupal)",
      "Website Optimization & Speed",
      "SEO-Optimized Development"
    ],
    benefits: [
      "Remote team = 40% cheaper than Dallas agencies",
      "We know what Dallas customers actually want",
      "Mobile-first because 70% of your traffic is on phones",
      "Sites that load in under 2 seconds (not 10)",
      "24/7 support when your site breaks at 2am",
      "150+ Dallas sites that actually make money"
    ],
    cta: "Stop losing customers to a crappy website. Get a free audit and see exactly why your site isn't converting - plus what it'll cost to fix it."
  };

  // Schema markup
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: 'Web Development Dallas',
    description: 'Professional web development services for Dallas businesses. Responsive design, e-commerce, and custom web applications.',
    url: 'https://empuls3.com/dallas/web-development',
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 92
    }
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Dallas', url: 'https://empuls3.com/dallas' },
    { name: 'Web Development', url: 'https://empuls3.com/dallas/web-development' }
  ]);

  return (
    <SiteLayout>
      <Head>
        <title>{generateLocalTitle('Web Development Services')}</title>
        <meta name="description" content={generateLocalDescription('Professional web development for Dallas businesses. Responsive design, e-commerce solutions, and custom web applications from local experts.')} />
        <meta name="keywords" content={dallasKeywords.webDevelopment.join(', ')} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Web Development Dallas | Empuls3" />
        <meta property="og:description" content="Professional web development for Dallas businesses. Stunning designs, powerful functionality, local expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/dallas/web-development" />
        <meta property="og:image" content="https://empuls3.com/images/dallas-web-development.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development Dallas | Empuls3" />
        <meta name="twitter:description" content="Expert web development for Dallas businesses. Responsive design and e-commerce from local specialists." />
        <meta name="twitter:image" content="https://empuls3.com/images/dallas-web-development.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/dallas/web-development" />
        
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
        
        {/* FAQ Schema for Dallas Web Development */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How much does a website cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Website development in Dallas ranges from $5,000 for basic sites to $50,000+ for complex e-commerce or enterprise solutions. We offer transparent pricing and flexible payment options for Dallas businesses."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to build a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Dallas business websites are completed in 6-12 weeks. Simple sites can be done in 3-4 weeks, while complex e-commerce platforms may take 3-4 months. We provide clear timelines upfront."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide website maintenance for Dallas businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer comprehensive website maintenance packages for Dallas businesses, including updates, security monitoring, performance optimization, and content changes. Local support is available."
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