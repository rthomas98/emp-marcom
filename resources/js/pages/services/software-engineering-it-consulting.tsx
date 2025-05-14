import SiteLayout from '@/layouts/site-layout';
import { EngineeringHeader } from '@/components/services/EngineeringHeader';
import { EngineeringStrategies } from '@/components/services/EngineeringStrategies';
import { EngineeringArchitecture } from '@/components/services/EngineeringArchitecture';
import { EngineeringSolutions } from '@/components/services/EngineeringSolutions';
import { EngineeringExpertise } from '@/components/services/EngineeringExpertise';
import { EngineeringCloud } from '@/components/services/EngineeringCloud';
import { EngineeringSecurity } from '@/components/services/EngineeringSecurity';
import { EngineeringPerformance } from '@/components/services/EngineeringPerformance';
import { EngineeringTestimonial } from '@/components/services/EngineeringTestimonial';
import { EngineeringCTA } from '@/components/services/EngineeringCTA';
import { Head } from '@inertiajs/react';

export default function SoftwareEngineeringItConsulting() {
  return (
    <SiteLayout>
      <Head title="Software Engineering & IT Consulting - Empuls3" />
      <EngineeringHeader />
      <EngineeringStrategies />
      <EngineeringArchitecture />
      <EngineeringSolutions />
      <EngineeringExpertise />
      <EngineeringCloud />
      <EngineeringSecurity />
      <EngineeringPerformance />
      <EngineeringTestimonial />
      <EngineeringCTA />
    </SiteLayout>
  );
}
