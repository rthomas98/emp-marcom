import { BackendAPIHeader } from '@/components/solutions/BackendAPIHeader';
import { BackendCTA } from '@/components/solutions/BackendCTA';
import { BackendFeatures } from '@/components/solutions/BackendFeatures';
import { BackendSolutions } from '@/components/solutions/BackendSolutions';
import { BackendTestimonials } from '@/components/solutions/BackendTestimonials';
import { DatabaseManagement } from '@/components/solutions/DatabaseManagement';
import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.integration;
// The restored page covers back-end, API and database work for existing systems and new apps, which is broader than leadPages.integration.
const title = 'Backend, API & Integration Development Dallas | Empuls3';
const description =
    'Back-end, API, integration, and database development for Dallas–Fort Worth businesses, whether you are connecting existing systems or building a new app.';

export default function BackendApiDevelopment() {
    return (
        <SiteLayout title={title}>
            <DetailPageSeo
                config={config}
                section="solutions"
                name="Backend & API Development"
                path="/solutions/backend-api-development"
                title={title}
                description={description}
                serviceType="Backend, API, and integration development"
            />
            <BackendAPIHeader />
            <BackendSolutions />
            <BackendFeatures />
            <DatabaseManagement />
            <BackendTestimonials />
            <BackendCTA />
        </SiteLayout>
    );
}
