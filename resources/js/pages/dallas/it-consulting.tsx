import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, dallasKeywords } from '@/utils/seo';

export default function DallasITConsulting() {
  const serviceInfo = {
    title: "Strategic IT Consulting",
    description: "Your IT is a disaster. Systems don't talk, everything's manual, and you're bleeding money. We'll tell you exactly what's wrong, what to fix first, and how much you'll save. No 200-page reports, just honest advice that makes sense.",
    features: [
      "Digital Transformation Strategy",
      "Technology Stack Assessment", 
      "Cloud Migration Planning",
      "Cybersecurity Consulting",
      "IT Infrastructure Design",
      "Business Process Optimization"
    ],
    benefits: [
      "Virtual consultations save you time and money",
      "We know Texas compliance inside and out",
      "Vendor-neutral advice (we don't get kickbacks)",
      "Fixed 100+ disasters for Dallas energy, healthcare, finance",
      "Same-day response when everything's on fire",
      "We'll tell you the truth, even if it costs us money"
    ],
    cta: "Find out why your IT sucks and exactly how to fix it. Free assessment, honest answers, no sales pitch. We'll even tell you if someone else can do it better."
  };

  // Schema markup
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: 'IT Consulting Dallas',
    description: 'Strategic IT consulting services for Dallas businesses. Digital transformation, cloud strategy, and technology optimization.',
    url: 'https://empuls3.com/dallas/it-consulting',
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 73
    }
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Dallas', url: 'https://empuls3.com/dallas' },
    { name: 'IT Consulting', url: 'https://empuls3.com/dallas/it-consulting' }
  ]);

  return (
    <SiteLayout>
      <Head>
        <title>{generateLocalTitle('IT Consulting Services')}</title>
        <meta name="description" content={generateLocalDescription('Strategic IT consulting for Dallas businesses. Digital transformation, cloud strategy, and technology optimization from local experts.')} />
        <meta name="keywords" content={dallasKeywords.itConsulting.join(', ')} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="IT Consulting Dallas | Empuls3" />
        <meta property="og:description" content="Strategic IT consulting for Dallas businesses. Transform your technology with local expertise and proven strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/dallas/it-consulting" />
        <meta property="og:image" content="https://empuls3.com/images/dallas-it-consulting.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Consulting Dallas | Empuls3" />
        <meta name="twitter:description" content="Expert IT consulting for Dallas businesses. Digital transformation and strategic guidance from local specialists." />
        <meta name="twitter:image" content="https://empuls3.com/images/dallas-it-consulting.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/dallas/it-consulting" />
        
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
                  "text": "Dallas IT consultants typically charge $150-350/hour or offer project-based pricing. We provide flexible engagement models including hourly, project-based, and retainer options to fit your budget and needs."
                }
              },
              {
                "@type": "Question",
                "name": "Why choose local Dallas IT consultants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Local Dallas IT consultants understand the Texas business environment, can meet in-person for strategic sessions, know local vendors and regulations, and provide same-day response for urgent issues. We've served Dallas businesses since 2009."
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