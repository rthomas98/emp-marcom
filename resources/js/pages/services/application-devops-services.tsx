import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function ApplicationDevopsServices() {
    return <LeadPage config={leadPages.devops} />;
}
