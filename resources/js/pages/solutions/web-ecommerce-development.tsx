import { DetailPageSeo } from '@/components/solutions/DetailPageSeo';
import { EcommercePlatforms } from '@/components/solutions/EcommercePlatforms';
import { ProgressiveWebApps } from '@/components/solutions/ProgressiveWebApps';
import { WebEcommerceCTA } from '@/components/solutions/WebEcommerceCTA';
import { WebEcommerceFeatures } from '@/components/solutions/WebEcommerceFeatures';
import { WebEcommerceHeader } from '@/components/solutions/WebEcommerceHeader';
import { WebEcommerceTestimonials } from '@/components/solutions/WebEcommerceTestimonials';
import { WordPressSolutions } from '@/components/solutions/WordPressSolutions';
import { leadPages } from '@/content/lead-pages';
import SiteLayout from '@/layouts/site-layout';

const config = leadPages.webModernization;
const title = 'Website & E-commerce Development Dallas | Empuls3';
const description =
    'New websites, e-commerce builds, and modernization of hard-to-manage sites for Dallas–Fort Worth businesses. Responsive, accessible, and maintainable.';

export default function WebEcommerceDevelopment() {
    return (
        <SiteLayout title={title}>
            <DetailPageSeo
                config={config}
                section="solutions"
                name="Web & E-commerce Development"
                path="/solutions/web-ecommerce-development"
                title={title}
                description={description}
                serviceType="Website and e-commerce development and modernization"
            />
            <WebEcommerceHeader />
            {/* What the project delivers comes before the platforms used to build it. */}
            <WebEcommerceFeatures />
            <WordPressSolutions />
            <EcommercePlatforms />
            <ProgressiveWebApps />
            <WebEcommerceTestimonials />
            <WebEcommerceCTA />
        </SiteLayout>
    );
}
