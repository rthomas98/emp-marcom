import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function DallasWebDevelopment() {
    return <LeadPage config={leadPages.dallasWeb} />;
}
