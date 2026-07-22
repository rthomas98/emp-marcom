import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function MobileDevelopment() {
    return <LeadPage config={leadPages.mobile} />;
}
