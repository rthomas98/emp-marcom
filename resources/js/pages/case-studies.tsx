import CaseStudiesCta from '@/components/case-studies/CaseStudiesCta';
import CaseStudiesGallery from '@/components/case-studies/CaseStudiesGallery';
import CaseStudiesHeader from '@/components/case-studies/CaseStudiesHeader';
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
            <Head title="Case Studies | Empuls3">
                <meta
                    name="description"
                    content="See how Empuls3 approaches software modernization, web transformation, systems integration, and ongoing engineering work for growing organizations."
                />
                <meta property="og:title" content="Technology Case Studies | Empuls3" />
                <meta property="og:description" content="Selected Empuls3 client work across software, integration, and digital modernization." />
                <meta property="og:url" content="https://www.empuls3.com/case-studies" />
            </Head>

            {/* Animated Header */}
            <CaseStudiesHeader />

            {/* Gallery Component */}
            <CaseStudiesGallery caseStudies={caseStudies} />

            {/* CTA Component */}
            <CaseStudiesCta />
        </>
    );
}

CaseStudies.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Studies | Empuls3" />;
