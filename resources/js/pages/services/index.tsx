import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function ServicesPage() {
    return <LeadPage config={leadPages.services} />;
}
