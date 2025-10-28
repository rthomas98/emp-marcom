import SiteLayout from '@/layouts/site-layout';
import { FrontendHeader } from '@/components/solutions/FrontendHeader';
import { FrontendSolutions } from '@/components/solutions/FrontendSolutions';
import { FrontendFeatures } from '@/components/solutions/FrontendFeatures';
import { FrontendFrameworks } from '@/components/solutions/FrontendFrameworks';
import { FrontendProcess } from '@/components/solutions/FrontendProcess';
import { FrontendTestimonials } from '@/components/solutions/FrontendTestimonials';
import { FrontendCTA } from '@/components/solutions/FrontendCTA';
import { Head } from '@inertiajs/react';
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';
import { generateBreadcrumbSchema } from '@/utils/schema';

export default function FrontendDevelopmentUxUiDesign() {
  const pageTitle = 'Frontend Development & UX/UI Design Dallas';
  const pageDescription = 'Fix confusing interfaces costing Dallas businesses 40% of users. We redesign UIs, make sites mobile-friendly, and build frontends that convert in 30 days. Serving DFW metroplex.';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Solutions', url: 'https://empuls3.com/solutions' },
    { name: 'Frontend Development & UX/UI Design', url: 'https://empuls3.com/solutions/frontend-development-uxui-design' }
  ]);
  
  return (
    <SiteLayout title={generateLocalTitle(pageTitle)}>
      <Head>
        <title>{generateLocalTitle(pageTitle)}</title>
        <meta name="description" content={generateLocalDescription(pageDescription)} />
        <meta name="keywords" content="UI UX design Dallas, Dallas frontend developers, interface redesign DFW, React development, mobile responsive design Dallas, user experience design" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={generateLocalTitle(pageTitle)} />
        <meta property="og:description" content={generateLocalDescription(pageDescription)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/solutions/frontend-development-uxui-design" />
        <meta property="og:image" content="https://empuls3.com/images/frontend-development-og.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
        <meta name="twitter:description" content="Fix confusing interfaces costing Dallas businesses users. 30-day transformations by senior designers." />
        <meta name="twitter:image" content="https://empuls3.com/images/frontend-development-og.jpg" />
        
        <link rel="canonical" href="https://empuls3.com/solutions/frontend-development-uxui-design" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Front-End Development & UX/UI Design Services",
            "description": "Fix interfaces that drive users away. We redesign confusing UIs, make sites mobile-friendly, and build frontends that convert. 30-day transformations.",
            "url": "https://empuls3.com/solutions/frontend-development-uxui-design",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#frontend-header h1"]
            },
            "mainEntity": {
              "@type": "Service",
              "name": "Front-End Development & UX/UI Design Services",
              "description": "Fix broken UIs losing you customers. We redesign confusing interfaces, optimize mobile experience, and build frontends that actually convert visitors.",
              "provider": {
                "@type": "Organization",
                "name": "Empuls3",
                "url": "https://empuls3.com",
                "logo": "https://empuls3.com/images/logos/empuls3-logo.svg"
              },
              "serviceType": "Front-End Development",
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Front-End & UX/UI Design Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "UX/UI Design",
                      "description": "User-centric design solutions that enhance usability and create engaging digital experiences across all devices."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Responsive Web Development",
                      "description": "Creating seamless, responsive interfaces that provide optimal viewing experiences across all devices and screen sizes."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Interactive Interface Development",
                      "description": "Building interactive web applications with modern frameworks that engage users and enhance functionality."
                    }
                  }
                ]
              },
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
                    "name": "David Wilson"
                  },
                  "reviewBody": "Our bounce rate was 70%. They redesigned everything in 3 weeks. Now it's 25% and sales are up 40%. Best money we've spent on our site."
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
                    "name": "Emily Rodriguez"
                  },
                  "reviewBody": "Mobile was completely broken. Lost 60% of our traffic. They fixed it in 2 weeks. Now mobile converts better than desktop. Amazing work."
                }
              ]
            },
            "faq": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How does a micro agency approach benefit front-end development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You work directly with senior designers who've fixed 100+ interfaces. No juniors practicing on your dime. Remote work means 40% lower costs. UI fixed in 30 days or your money back."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What UX/UI design services do you offer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We fix confusing navigation, ugly interfaces, and broken mobile experiences. Most UI problems we solve in 2-4 weeks. If users still hate it after 30 days, you don't pay."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which front-end frameworks do you work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our senior developers are proficient in modern front-end frameworks including React, Angular, Vue.js, Next.js, and Svelte. We select the most appropriate technology based on your specific project requirements and performance goals."
                  }
                }
              ]
            }
          }
        `}</script>
      </Head>
      <FrontendHeader />
      <FrontendSolutions />
      <FrontendFeatures />
      <FrontendFrameworks />
      <FrontendProcess />
      <FrontendTestimonials />
      <FrontendCTA />
    </SiteLayout>
  );
}
