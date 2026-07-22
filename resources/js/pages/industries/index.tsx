import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function IndustriesPage() {
    return <LeadPage config={leadPages.industries} />;
}
