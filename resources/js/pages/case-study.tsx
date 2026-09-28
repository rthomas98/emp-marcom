import CaseStudiesCta from '@/components/case-studies/CaseStudiesCta';
import CaseStudyGallery from '@/components/case-studies/CaseStudyGallery';
import CaseStudyGallery7 from '@/components/case-studies/CaseStudyGallery7';
import { portfolioCaptureCaption, portfolioCaptures, unavailableClientSites } from '@/content/portfolio-captures';
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

// Plain statements of delivered scope, drawn from each published case study. No results are added here.
const deliveredScopeOverrides: Record<string, string> = {
    'hebert-thomas-law-website-refresh':
        '<ul><li>Responsive WordPress website</li><li>Updated information architecture</li><li>Clearer presentation of the firm’s services</li><li>Updated calls to action</li></ul>',
    'solushiens-modern-website-redesign':
        '<ul><li>Redesigned responsive website</li><li>Improved navigation</li><li>Updated visual design</li><li>Updated service content</li></ul>',
    'codegig-strategic-pivot-new-website-for-new-audiences':
        '<ul><li>New responsive website for CodeGig</li><li>Brand messaging for its AI and machine-learning services</li><li>UI/UX design and custom web development</li><li>Service and content architecture</li></ul>',
};

// Clarifies the commissioned role where the published wording is broader than the work.
const solutionOverrides: Record<string, string> = {
    'codegig-strategic-pivot-new-website-for-new-audiences':
        '<p>CodeGig commissioned Empuls3 to design and build its new website. The work covered brand messaging, UI/UX design, custom web development, and content architecture.</p>',
};

// Factual meta descriptions for the published stories, so database meta copy cannot reintroduce outcome claims.
const metaDescriptionOverrides: Record<string, string> = {
    'hebert-thomas-law-website-refresh':
        'How Empuls3 refreshed the Hebert Thomas Law website: a responsive WordPress site with clearer service pages and updated calls to action.',
    'solushiens-modern-website-redesign':
        'How Empuls3 redesigned the Solushiens website with improved navigation, updated visual design, and refreshed service content.',
    'codegig-strategic-pivot-new-website-for-new-audiences':
        'CodeGig commissioned Empuls3 to design and build a new website for its AI and machine-learning services, including messaging and content architecture.',
};

function formatDate(dateString: string | null) {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export default function CaseStudy({ caseStudy, relatedCaseStudies }: CaseStudyProps) {
    const deliveredScope = deliveredScopeOverrides[caseStudy.slug] || caseStudy.results;
    const solution = solutionOverrides[caseStudy.slug] || caseStudy.solution;
    const industry = caseStudy.industry && caseStudy.industry.trim().toLowerCase() !== 'other' ? caseStudy.industry : null;
    const liveCapture = portfolioCaptures[caseStudy.slug];
    const siteUnavailable = unavailableClientSites[caseStudy.slug];
    const metaDescription =
        metaDescriptionOverrides[caseStudy.slug] ||
        caseStudy.meta_description ||
        `The starting point and delivered scope for ${caseStudy.client_name}'s ${caseStudy.service_type.toLowerCase()} project with Empuls3.`;

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
                            {industry && (
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">Industry:</span>
                                    <span>{industry}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <span className="font-medium">Service:</span>
                                <span>{caseStudy.service_type}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A genuine live capture leads; decorative gallery images follow */}
            {liveCapture && (
                <section className="py-12" aria-labelledby="live-site-heading">
                    <div className="container mx-auto px-4">
                        <h2 id="live-site-heading" className="text-secondary mb-6 text-2xl font-bold">
                            The Live Site
                        </h2>
                        <figure>
                            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
                                <div className="flex items-center gap-1.5 border-b border-gray-200 bg-gray-100 px-4 py-3" aria-hidden="true">
                                    <span className="size-3 rounded-full bg-gray-300" />
                                    <span className="size-3 rounded-full bg-gray-300" />
                                    <span className="size-3 rounded-full bg-gray-300" />
                                </div>
                                <img
                                    src={liveCapture.src}
                                    alt={liveCapture.alt}
                                    width={liveCapture.width}
                                    height={liveCapture.height}
                                    loading="lazy"
                                    className="block h-auto w-full border-0"
                                />
                            </div>
                            <figcaption className="mt-3 text-sm text-gray-600">{portfolioCaptureCaption(liveCapture)}</figcaption>
                        </figure>
                    </div>
                </section>
            )}

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
                                <div className="prose text-secondary max-w-none" dangerouslySetInnerHTML={{ __html: solution }} />
                            </div>

                            <div>
                                <h2 className="text-secondary mb-6 text-2xl font-bold">What We Delivered</h2>
                                <div className="prose text-secondary max-w-none" dangerouslySetInnerHTML={{ __html: deliveredScope }} />
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

                                    {caseStudy.website_url && siteUnavailable && (
                                        <div className="flex items-center gap-3">
                                            <Globe size={20} className="text-primary" />
                                            <div>
                                                <p className="text-secondary text-sm">Website</p>
                                                <p className="text-secondary font-medium">Unavailable when checked {siteUnavailable.checkedOn}</p>
                                            </div>
                                        </div>
                                    )}

                                    {caseStudy.website_url && !siteUnavailable && (
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
