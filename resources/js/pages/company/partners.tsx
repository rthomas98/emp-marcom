import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function Partners() {
    return <LeadPage config={leadPages.partners} />;
}
