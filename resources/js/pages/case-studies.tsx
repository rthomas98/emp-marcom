import CaseStudiesCta from '@/components/case-studies/CaseStudiesCta';
import CaseStudiesGallery from '@/components/case-studies/CaseStudiesGallery';
import CaseStudiesHeader from '@/components/case-studies/CaseStudiesHeader';
import SoftwareProjects from '@/components/case-studies/SoftwareProjects';
import WebsiteContributions from '@/components/case-studies/WebsiteContributions';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import React from 'react';

interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    client_name: string;
    industry: string;
    service_type: string;
    featured_image: string;
}

interface CaseStudiesProps {
    caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
    return (
        <>
            <Head title="Case Studies: Websites and Software | Empuls3">
                <meta
                    name="description"
                    content="Websites delivered for Hebert Thomas Law, CodeGig, and Solushiens, plus current software and platform projects including AEC Unites, Carbon Capture, Kinesics Health, and EcoGlobe."
                />
                <meta property="og:title" content="Case Studies: Websites and Software | Empuls3" />
                <meta property="og:description" content="Client websites and current software and platform projects by Empuls3." />
                <meta property="og:url" content="https://www.empuls3.com/case-studies" />
            </Head>

            {/* Animated Header */}
            <CaseStudiesHeader />

            {/* Gallery Component */}
            <CaseStudiesGallery caseStudies={caseStudies} />

            {/* Selected website contributions */}
            <WebsiteContributions />

            {/* Current software and platform projects (anchored sections, no detail routes) */}
            <SoftwareProjects />

            {/* CTA Component */}
            <CaseStudiesCta />
        </>
    );
}

CaseStudies.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Studies: Websites and Software | Empuls3" />;
