import SiteLayout from '@/layouts/site-layout';
import { ManagedITHeader } from '@/components/services/ManagedITHeader';
import { ManagedITOverview } from '@/components/services/ManagedITOverview';
import { ManagedITTeams } from '@/components/services/ManagedITTeams';
import { ManagedITSupport } from '@/components/services/ManagedITSupport';
import { ManagedITServices } from '@/components/services/ManagedITServices';
import { ManagedITSolutions } from '@/components/services/ManagedITSolutions';
import { ManagedITCTA } from '@/components/services/ManagedITCTA';
import { Head } from '@inertiajs/react';

export default function ManagedItSupportServices() {
  return (
    <SiteLayout>
      <Head>
        <title>Boutique Managed IT & Support Services - Empuls3</title>
        <meta name="description" content="Experience personalized managed IT and support services from our boutique micro agency. Direct collaboration with senior specialists for responsive technical support without the overhead of larger firms." />
        <meta name="keywords" content="micro agency, boutique IT support, managed services, senior IT specialists, personalized technical support, responsive help desk, IT management" />
      </Head>
      <ManagedITHeader />
      <ManagedITOverview />
      <ManagedITTeams />
      <ManagedITSupport />
      <ManagedITServices />
      <ManagedITSolutions />
      <ManagedITCTA />
    </SiteLayout>
  );
}
