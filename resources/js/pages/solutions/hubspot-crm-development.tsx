import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function HubspotCrmDevelopment() {
    return <LeadPage config={leadPages.crm} />;
}
