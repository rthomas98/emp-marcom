import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function BackendApiDevelopment() {
    return <LeadPage config={leadPages.integration} />;
}
