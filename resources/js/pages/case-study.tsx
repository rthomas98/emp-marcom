import CaseStudiesCta from '@/components/case-studies/CaseStudiesCta';
import CaseStudyGallery from '@/components/case-studies/CaseStudyGallery';
import CaseStudyGallery7 from '@/components/case-studies/CaseStudyGallery7';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { Calendar, Globe } from 'lucide-react';
import React from 'react';

// Define GalleryImage interface
interface GalleryImage {
    src: string;
    alt?: string;
}

// This interface is used for type checking
interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    client_name: string;
    industry: string;
    service_type: string;
    challenge: string;
    solution: string;
    results: string;
    testimonial: string | null;
    testimonial_author: string | null;
    testimonial_position: string | null;
    featured_image: string;
    gallery_images: GalleryImage[] | null;
    logo: string | null;
    website_url: string | null;
    completion_date: string | null;
    meta_title: string | null;
    meta_description: string | null;
}

interface CaseStudyProps {
    caseStudy: CaseStudy;
    relatedCaseStudies: CaseStudy[];
}

export default function CaseStudy({ caseStudy, relatedCaseStudies }: CaseStudyProps) {
    const formatDate = (dateString: string | null) => {
        if (!dateString) return null;
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    };

    return (
        <>
            <Head>
                <title>{caseStudy.meta_title || `${caseStudy.title} | Empuls3 Case Study`}</title>
                {caseStudy.meta_description && <meta name="description" content={caseStudy.meta_description} />}
                <meta property="og:title" content={caseStudy.meta_title || `${caseStudy.title} | Empuls3 Case Study`} />
                {caseStudy.meta_description && <meta property="og:description" content={caseStudy.meta_description} />}
                <meta property="og:url" content={`https://www.empuls3.com/case-studies/${caseStudy.slug}`} />
            </Head>

            {/* Hero Section */}
            <section className="from-secondary to-primary bg-gradient-to-r py-20 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <div className="mb-6 flex items-center gap-4">
                            <a href="/case-studies" className="text-white/80 transition-colors hover:text-white">
                                ← Back to Case Studies
                            </a>
                        </div>
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">{caseStudy.title}</h1>
                        <div className="mt-8 flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Client:</span>
                                <span>{caseStudy.client_name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Industry:</span>
                                <span>{caseStudy.industry}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Service:</span>
                                <span>{caseStudy.service_type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery or Featured Image */}
            {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 ? (
                <CaseStudyGallery7
                    images={caseStudy.gallery_images.slice(0, 3).map((img: GalleryImage) => ({
                        src: img.src, // The Laravel model already provides the full URL
                        alt: img.alt || caseStudy.title,
                    }))}
                />
            ) : (
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="h-[400px] overflow-hidden rounded-xl shadow-lg">
                            <img src={caseStudy.featured_image} alt={caseStudy.title} className="h-full w-full border-0 object-cover" />
                        </div>
                    </div>
                </section>
            )}

            {/* Overview */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <div className="mb-12">
                                <h2 className="text-secondary mb-6 text-2xl font-bold">The Challenge</h2>
                                <div className="prose text-secondary max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.challenge }} />
                            </div>

                            <div className="mb-12">
                                <h2 className="text-secondary mb-6 text-2xl font-bold">Our Solution</h2>
                                <div className="prose text-secondary max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
                            </div>

                            <div>
                                <h2 className="text-secondary mb-6 text-2xl font-bold">The Results</h2>
                                <div className="prose text-secondary max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.results }} />
                            </div>
                        </div>

                        <div>
                            <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
                                {caseStudy.logo && (
                                    <div className="mb-6">
                                        <img src={caseStudy.logo} alt={`${caseStudy.client_name} logo`} className="max-h-16 border-0" />
                                    </div>
                                )}

                                <h3 className="text-secondary mb-4 text-xl font-bold">Project Details</h3>

                                <div className="space-y-4">
                                    {caseStudy.completion_date && (
                                        <div className="flex items-center gap-3">
                                            <Calendar size={20} className="text-primary" />
                                            <div>
                                                <p className="text-secondary text-sm">Completion Date</p>
                                                <p className="text-secondary font-medium">{formatDate(caseStudy.completion_date)}</p>
                                            </div>
                                        </div>
                                    )}

                                    {caseStudy.website_url && (
                                        <div className="flex items-center gap-3">
                                            <Globe size={20} className="text-primary" />
                                            <div>
                                                <p className="text-secondary text-sm">Website</p>
                                                <a
                                                    href={caseStudy.website_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary font-medium hover:underline"
                                                >
                                                    Visit Website
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Testimonial section removed as requested */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Case Studies Gallery */}
            <CaseStudyGallery relatedCaseStudies={relatedCaseStudies} />

            {/* CTA Component */}
            <CaseStudiesCta />
        </>
    );
}

CaseStudy.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Case Study | Empuls3" />;
