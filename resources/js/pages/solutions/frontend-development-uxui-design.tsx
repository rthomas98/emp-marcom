import SiteLayout from '@/layouts/site-layout';
import { FrontendHeader } from '@/components/solutions/FrontendHeader';
import { FrontendSolutions } from '@/components/solutions/FrontendSolutions';
import { FrontendFeatures } from '@/components/solutions/FrontendFeatures';
import { FrontendFrameworks } from '@/components/solutions/FrontendFrameworks';
import { FrontendProcess } from '@/components/solutions/FrontendProcess';
import { FrontendTestimonials } from '@/components/solutions/FrontendTestimonials';
import { FrontendCTA } from '@/components/solutions/FrontendCTA';
import { Head } from '@inertiajs/react';

export default function FrontendDevelopmentUxUiDesign() {
  return (
    <SiteLayout>
      <Head>
        <title>Your UI Looks Like 2010. Users Hate It. We Fix It | Empuls3</title>
        <meta name="description" content="Ugly interface? Confusing navigation? Mobile looks broken? Dallas businesses lose 40% of users to bad UI. We redesign interfaces that convert in 30 days." />
        <meta name="keywords" content="UI UX design Dallas, frontend development, interface redesign, React development, mobile responsive design, user experience" />
        <link rel="canonical" href="https://empuls3.com/solutions/frontend-development-uxui-design" />
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
