import SiteLayout from '@/layouts/site-layout';
import { ManagedITHeader } from '@/components/services/ManagedITHeader';
import { ManagedITOverview } from '@/components/services/ManagedITOverview';
import { ManagedITTeams } from '@/components/services/ManagedITTeams';
import { ManagedITSupport } from '@/components/services/ManagedITSupport';
import { ManagedITServices } from '@/components/services/ManagedITServices';
import { ManagedITSolutions } from '@/components/services/ManagedITSolutions';
import { ManagedITTestimonial } from '@/components/services/ManagedITTestimonial';
import { ManagedITCTA } from '@/components/services/ManagedITCTA';
import { Head } from '@inertiajs/react';

export default function ManagedItSupportServices() {
  return (
    <SiteLayout>
      <Head title="Managed IT & Support Services - Empuls3" />
      <ManagedITHeader />
      <ManagedITOverview />
      <ManagedITTeams />
      <ManagedITSupport />
      <ManagedITServices />
      <ManagedITSolutions />
      <ManagedITTestimonial />
      <ManagedITCTA />
    </SiteLayout>
  );
}
