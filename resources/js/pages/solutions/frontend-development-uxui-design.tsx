import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function FrontendDevelopment() {
    return <LeadPage config={leadPages.frontend} />;
}
