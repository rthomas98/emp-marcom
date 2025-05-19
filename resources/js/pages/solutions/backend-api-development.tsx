import SiteLayout from '@/layouts/site-layout';
import { BackendAPIHeader } from '@/components/solutions/BackendAPIHeader';
import { BackendSolutions } from '@/components/solutions/BackendSolutions';
import { DatabaseManagement } from '@/components/solutions/DatabaseManagement';
import { BackendFeatures } from '@/components/solutions/BackendFeatures';
import { BackendTestimonials } from '@/components/solutions/BackendTestimonials';
import { BackendCTA } from '@/components/solutions/BackendCTA';
import { Head } from '@inertiajs/react';

export default function BackendApiDevelopment() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Back-End & API Development - Empuls3</title>
        <meta name="description" content="Experience specialized back-end and API development from our boutique micro agency. Direct collaboration with senior developers for scalable solutions without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique backend development, API integration, senior developers, database management, personalized development services" />
      </Head>
      <BackendAPIHeader />
      <BackendSolutions />
      <DatabaseManagement />
      <BackendFeatures />
      <BackendTestimonials />
      <BackendCTA />
    </SiteLayout>
  );
}
