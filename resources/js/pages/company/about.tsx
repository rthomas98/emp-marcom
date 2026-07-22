import { LeadPage } from '@/components/marketing/LeadPage';
import { leadPages } from '@/content/lead-pages';

export default function About() {
    return <LeadPage config={leadPages.about} />;
}
