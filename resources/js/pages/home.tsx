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
import { Head } from '@inertiajs/react';

export default function Home() {
  return (
    <SiteLayout title="Empuls3 - Software Development & IT Consulting">
      <Head>
        <meta name="description" content="Empuls3 delivers custom software development, web applications, and IT consulting services that transform your business and drive growth in the digital landscape." />
        <meta name="keywords" content="software development, web development, IT consulting, custom applications, digital transformation, boutique agency, enterprise solutions" />
        {/* Open Graph Tags for better social sharing */}
        <meta property="og:title" content="Empuls3 - Software Development & IT Consulting" />
        <meta property="og:description" content="Boutique expertise with enterprise-level results. Custom software, web development, and IT consulting services that drive business growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com" />
        <meta property="og:image" content="/images/empuls3-og-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Empuls3 - Software Development & IT Consulting" />
        <meta name="twitter:description" content="Boutique expertise with enterprise-level results. Custom software, web development, and IT consulting services that drive business growth." />
        <meta name="twitter:image" content="/images/empuls3-og-image.jpg" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://empuls3.com" />
        {/* Structured Data for Organization */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Empuls3",
            "url": "https://empuls3.com",
            "logo": "https://empuls3.com/images/logo.png",
            "description": "Boutique software development and IT consulting agency delivering enterprise-level results.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-555-5555",
              "contactType": "customer service",
              "email": "info@empuls3.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/empuls3",
              "https://twitter.com/empuls3"
            ]
          }
        `}</script>
        
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
        <Features />
        <Services />
        <Industries />
        <Innovation />
        <Approach />
        <Partners />
        <Testimonials />
      </HomeComponentWrapper>
    </SiteLayout>
  );
}
