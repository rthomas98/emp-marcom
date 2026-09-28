import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { HubspotCTA } from '@/components/solutions/HubspotCTA';
import { HubspotFeatures } from '@/components/solutions/HubspotFeatures';
import { Header9 } from '@/components/solutions/HubspotHeader';
import { HubspotOverview } from '@/components/solutions/HubspotOverview';
import { HubspotProcess } from '@/components/solutions/HubspotProcess';
import { HubspotReporting } from '@/components/solutions/HubspotReporting';
import { HubspotServices } from '@/components/solutions/HubspotServices';
import { HubspotTestimonial } from '@/components/solutions/HubspotTestimonial';
import { HubspotTraining } from '@/components/solutions/HubspotTraining';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.crm;

export default function HubspotCrmDevelopment() {
    return (
        <SiteLayout title={config.title}>
            <DetailPageSeo config={config} section="solutions" name="HubSpot CRM Development" path="/solutions/hubspot-crm-development" />
            <Header9 />
            <HubspotOverview />
            <HubspotProcess />
            <HubspotFeatures />
            <HubspotServices />
            <HubspotReporting />
            <HubspotTraining />
            <HubspotTestimonial />
            <HubspotCTA />
        </SiteLayout>
    );
}
