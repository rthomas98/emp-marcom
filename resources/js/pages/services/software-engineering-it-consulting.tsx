import SiteLayout from '@/layouts/site-layout';
import { EngineeringHeader } from '@/components/services/EngineeringHeader';
import { EngineeringStrategies } from '@/components/services/EngineeringStrategies';
import { EngineeringArchitecture } from '@/components/services/EngineeringArchitecture';
import { EngineeringSolutions } from '@/components/services/EngineeringSolutions';
import { EngineeringExpertise } from '@/components/services/EngineeringExpertise';
import { EngineeringCloud } from '@/components/services/EngineeringCloud';
import { EngineeringSecurity } from '@/components/services/EngineeringSecurity';
import { EngineeringPerformance } from '@/components/services/EngineeringPerformance';
import { EngineeringCTA } from '@/components/services/EngineeringCTA';
import { Head } from '@inertiajs/react';

export default function SoftwareEngineeringItConsulting() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Software Engineering & IT Consulting - Empuls3</title>
        <meta name="description" content="Experience personalized software engineering and IT consulting from our boutique micro agency. Direct collaboration with senior specialists for tailored solutions without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique software engineering, IT consulting, senior specialists, personalized development, direct collaboration, software architecture" />
      </Head>
      <EngineeringHeader />
      <EngineeringStrategies />
      <EngineeringArchitecture />
      <EngineeringSolutions />
      <EngineeringExpertise />
      <EngineeringCloud />
      <EngineeringSecurity />
      <EngineeringPerformance />
      <EngineeringCTA />
    </SiteLayout>
  );
}
