import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function Home() {
    return <LeadPage config={leadPages.home} />;
}
