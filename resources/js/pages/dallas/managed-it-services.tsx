import React from 'react';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { DallasLandingPage } from '@/components/dallas/DallasLandingPage';
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalTitle, generateLocalDescription, dallasKeywords } from '@/utils/seo';

export default function DallasManagedITServices() {
  const serviceInfo = {
    title: "24/7 Managed IT Services",
    description: "Every hour of downtime costs you $5-10K. When email crashes, servers die, or 'everything's slow,' you're hemorrhaging money. We keep you running 24/7 with IT support that actually works. 15-minute response, real fixes, no excuses.",
    features: [
      "24/7 System Monitoring",
      "Help Desk Support", 
      "Network Management",
      "Backup & Disaster Recovery",
      "Security Patch Management",
      "IT Asset Management"
    ],
    benefits: [
      "Remote support = faster fixes, lower costs",
      "15-minute response time (we actually answer)",
      "We fix problems before they happen (95% prevention rate)",
      "One flat price - no surprise bills",
      "24/7 support because problems don't wait",
      "Senior techs who know what they're doing"
    ],
    cta: "Calculate how much downtime is costing you - then let us fix it. Free assessment shows exactly what's broken and what it'll take to keep you running 24/7."
  };

  // Schema markup
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: 'Managed IT Services Dallas',
    description: '24/7 managed IT services for Dallas businesses. Proactive monitoring, help desk support, and IT management from local experts.',
    url: 'https://empuls3.com/dallas/managed-it-services',
    aggregateRating: {
      ratingValue: 4.9,
      reviewCount: 86
    }
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Dallas', url: 'https://empuls3.com/dallas' },
    { name: 'Managed IT Services', url: 'https://empuls3.com/dallas/managed-it-services' }
  ]);

  return (
    <SiteLayout>
      <Head>
        <title>{generateLocalTitle('Managed IT Services')}</title>
        <meta name="description" content={generateLocalDescription('24/7 managed IT services for Dallas businesses. Proactive monitoring, help desk support, and complete IT management from local experts.')} />
        <meta name="keywords" content={dallasKeywords.managedIT.join(', ')} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Managed IT Services Dallas | Empuls3" />
        <meta property="og:description" content="24/7 managed IT support for Dallas businesses. Local technicians, proactive monitoring, flat-rate pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/dallas/managed-it-services" />
        <meta property="og:image" content="https://empuls3.com/images/dallas-managed-it.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Managed IT Services Dallas | Empuls3" />
        <meta name="twitter:description" content="24/7 managed IT support for Dallas businesses. Proactive monitoring and local support team." />
        <meta name="twitter:image" content="https://empuls3.com/images/dallas-managed-it.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com/dallas/managed-it-services" />
        
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
                  "text": "Our Dallas managed IT services include 24/7 monitoring, help desk support, network management, security updates, backup management, and on-site support when needed. We handle all your IT needs for one flat monthly fee."
                }
              },
              {
                "@type": "Question",
                "name": "How much do managed IT services cost in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Managed IT services in Dallas typically cost $100-250 per user per month, depending on services included. We offer transparent, flat-rate pricing with no hidden fees and customized packages for your needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide on-site IT support in Dallas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our Dallas-based technicians provide on-site support throughout the DFW metroplex. We handle most issues remotely for faster resolution but are available on-site when needed, typically within 2-4 hours."
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