import SiteLayout from '@/layouts/site-layout';
import { WebEcommerceHeader } from '@/components/solutions/WebEcommerceHeader';
import { WordPressSolutions } from '@/components/solutions/WordPressSolutions';
import { EcommercePlatforms } from '@/components/solutions/EcommercePlatforms';
import { ProgressiveWebApps } from '@/components/solutions/ProgressiveWebApps';
import { WebEcommerceFeatures } from '@/components/solutions/WebEcommerceFeatures';
import { WebEcommerceTestimonials } from '@/components/solutions/WebEcommerceTestimonials';
import { WebEcommerceCTA } from '@/components/solutions/WebEcommerceCTA';
import { Head } from '@inertiajs/react';

export default function WebEcommerceDevelopment() {
  return (
    <SiteLayout>
      <Head title="Web & E-commerce Development - Empuls3" />
      <WebEcommerceHeader />
      <WordPressSolutions />
      <EcommercePlatforms />
      <ProgressiveWebApps />
      <WebEcommerceFeatures />
      <WebEcommerceTestimonials />
      <WebEcommerceCTA />
    </SiteLayout>
  );
}
