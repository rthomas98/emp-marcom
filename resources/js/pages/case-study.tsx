import CaseStudiesCta from '@/components/case-studies/CaseStudiesCta';
import CaseStudyGallery from '@/components/case-studies/CaseStudyGallery';
import CaseStudyGallery7 from '@/components/case-studies/CaseStudyGallery7';
import SiteLayout from '@/layouts/site-layout';
import { Head, Link } from '@inertiajs/react';
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

const verifiedOutcomeOverrides: Record<string, string> = {
    'hebert-thomas-law-website-refresh':
        '<p>The delivered outcome was a responsive WordPress website with updated information architecture, service presentation, and calls to action. Empuls3 has not received client-approved traffic or lead measurements for publication, so no quantitative performance outcome is claimed here.</p>',
    'solushiens-modern-website-redesign':
        '<p>The delivered outcome was a redesigned responsive website with updated navigation, visual presentation, and service content. Empuls3 has not received client-approved engagement, bounce-rate, or lead measurements for publication, so no quantitative performance outcome is claimed here.</p>',
    'codegig-strategic-pivot-new-website-for-new-audiences':
        '<p>The delivered outcome was a new website, message structure, and service architecture aligned to CodeGig’s AI and machine-learning positioning. Empuls3 has not received client-approved inquiry or growth measurements for publication, so no quantitative performance outcome is claimed here.</p>',
};

function formatDate(dateString: string | null) {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function CaseStudy({ caseStudy, relatedCaseStudies }: CaseStudyProps) {
    const publishedOutcome = verifiedOutcomeOverrides[caseStudy.slug] || caseStudy.results;
    const metaDescription =
        caseStudy.meta_description ||
        `Review the challenge, delivered scope, and approved outcome for ${caseStudy.client_name}'s ${caseStudy.service_type.toLowerCase()} engagement with Empuls3.`;

    return (
        <>
            <Head>
                <title>{caseStudy.meta_title || `${caseStudy.title} | Empuls3 Case Study`}</title>
                <meta name="description" content={metaDescription} />
                <meta property="og:title" content={caseStudy.meta_title || `${caseStudy.title} | Empuls3 Case Study`} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:url" content={`https://www.empuls3.com/case-studies/${caseStudy.slug}`} />
            </Head>

            {/* Hero Section */}
            <section className="from-secondary to-primary bg-linear-to-r py-20 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl">
                        <div className="mb-6 flex items-center gap-4">
                            <Link href="/case-studies" className="text-white/80 transition-colors hover:text-white">
                                ← Back to Case Studies
                            </Link>
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
                                <h2 className="text-secondary mb-6 text-2xl font-bold">Delivered Outcome</h2>
                                <div className="prose text-secondary max-w-none" dangerouslySetInnerHTML={{ __html: publishedOutcome }} />
                                <p className="mt-5 rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-600">
                                    Evidence note: business-impact measurements are published only when the client has approved the supporting data. A
                                    completed deliverable is not presented as proof of traffic, leads, revenue, savings, or engagement by itself.
                                </p>
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

CaseStudy.layout = (page: React.ReactNode) => <SiteLayout title="Case Study | Empuls3">{page}</SiteLayout>;
