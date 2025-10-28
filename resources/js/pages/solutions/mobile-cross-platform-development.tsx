import SiteLayout from '@/layouts/site-layout';
import { MobileHeader } from '@/components/solutions/MobileHeader';
import { MobileOverview } from '@/components/solutions/MobileOverview';
import { MobilePWA } from '@/components/solutions/MobilePWA';
import { MobileSolutions } from '@/components/solutions/MobileSolutions';
import { MobileProcess } from '@/components/solutions/MobileProcess';
import { MobileExperience } from '@/components/solutions/MobileExperience';
import { MobileFeatures } from '@/components/solutions/MobileFeatures';
import { MobileTestimonials } from '@/components/solutions/MobileTestimonials';
import { MobileCTA } from '@/components/solutions/MobileCTA';
import { MobileFinalCTA } from '@/components/solutions/MobileFinalCTA';
import { Head } from '@inertiajs/react';
import { generateLocalTitle, generateLocalDescription } from '@/utils/seo';
import { generateBreadcrumbSchema } from '@/utils/schema';

export default function MobileCrossPlatformDevelopment() {
  const pageTitle = 'Mobile App Development Dallas';
  const pageDescription = 'Build iOS and Android apps in 90 days. Dallas mobile app developers using React Native to save 40% vs native development. Serving DFW businesses.';
  
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://empuls3.com' },
    { name: 'Solutions', url: 'https://empuls3.com/solutions' },
    { name: 'Mobile App Development', url: 'https://empuls3.com/solutions/mobile-cross-platform-development' }
  ]);
  
  return (
    <SiteLayout title={generateLocalTitle(pageTitle)}>
      <Head>
        <title>{generateLocalTitle(pageTitle)}</title>
        <meta name="description" content={generateLocalDescription(pageDescription)} />
        <meta name="keywords" content="mobile app development Dallas, Dallas mobile developers, React Native development DFW, cross-platform apps, iOS Android development Dallas" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={generateLocalTitle(pageTitle)} />
        <meta property="og:description" content={generateLocalDescription(pageDescription)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://empuls3.com/solutions/mobile-cross-platform-development" />
        <meta property="og:image" content="https://empuls3.com/images/mobile-development-og.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={generateLocalTitle(pageTitle)} />
        <meta name="twitter:description" content="Build iOS and Android apps in 90 days. Dallas mobile developers using React Native." />
        <meta name="twitter:image" content="https://empuls3.com/images/mobile-development-og.jpg" />
        
        <link rel="canonical" href="https://empuls3.com/solutions/mobile-cross-platform-development" />
        
        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Head>
      <MobileHeader />
      <MobileOverview />
      <MobilePWA />
      <MobileSolutions />
      <MobileProcess />
      <MobileExperience />
      <MobileFeatures />
      <MobileTestimonials />
      <MobileCTA />
      <MobileFinalCTA />
    </SiteLayout>
  );
}
