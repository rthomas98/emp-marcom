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

export default function MobileCrossPlatformDevelopment() {
  return (
    <SiteLayout>
      <Head title="Mobile & Cross-Platform Development - Empuls3" />
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
