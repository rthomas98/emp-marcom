import { CaseStudyMetrics } from '@/components/case-studies/CaseStudyMetrics';
import SiteLayout from '@/layouts/site-layout';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/utils/schema';
import { generateLocalDescription, generateLocalTitle } from '@/utils/seo';
import { Head, Link } from '@inertiajs/react';

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
    logo: string | null;
    website_url: string | null;
    completion_date: string | null;
    gallery_images: Array<{
        src: string;
        alt: string;
    }> | null;
    is_featured: boolean;
    meta_title: string | null;
    meta_description: string | null;
    status: string;
}

interface Props {
    caseStudy: CaseStudy;
    relatedCaseStudies: CaseStudy[];
}

export default function Show({ caseStudy, relatedCaseStudies }: Props) {
    const pageTitle = caseStudy.meta_title || caseStudy.title;
    const pageDescription =
        caseStudy.meta_description ||
        `${caseStudy.title} - Case study for ${caseStudy.client_name}. ${caseStudy.service_type} services in ${caseStudy.industry} industry.`;

    // Generate breadcrumb schema
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://www.empuls3.com' },
        { name: 'Case Studies', url: 'https://www.empuls3.com/case-studies' },
        { name: caseStudy.title, url: `https://www.empuls3.com/case-studies/${caseStudy.slug}` },
    ]);

    // Generate article schema
    const articleSchema = generateArticleSchema({
        headline: caseStudy.title,
        description: pageDescription,
        image: [caseStudy.featured_image],
        datePublished: caseStudy.completion_date ? new Date(caseStudy.completion_date).toISOString() : new Date().toISOString(),
        dateModified: new Date().toISOString(),
        publisher: {
            name: 'Empuls3',
            logo: 'https://www.empuls3.com/images/logo.png',
        },
    });

    return (
        <SiteLayout>
            <Head>
                <title>{generateLocalTitle(pageTitle)}</title>
                <meta name="description" content={generateLocalDescription(pageDescription)} />
                <meta name="keywords" content={`${caseStudy.service_type}, ${caseStudy.industry}, Dallas case study, ${caseStudy.client_name}`} />

                {/* Open Graph Tags */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={generateLocalDescription(pageDescription)} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://www.empuls3.com/case-studies/${caseStudy.slug}`} />
                <meta property="og:image" content={caseStudy.featured_image} />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={generateLocalDescription(pageDescription)} />
                <meta name="twitter:image" content={caseStudy.featured_image} />

                {/* Structured Data */}
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Head>

            <div className="bg-white">
                {/* Hero Section */}
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900/80 to-gray-900/40"></div>
                    <div
                        className="h-96 w-full bg-cover bg-center md:h-[500px]"
                        style={{ backgroundImage: `url(${caseStudy.featured_image})` }}
                    ></div>
                    <div className="relative z-20 container mx-auto -mt-32 px-4 md:-mt-48 md:px-6">
                        <div className="rounded-lg bg-white p-6 shadow-lg md:p-10">
                            <div className="mb-6 flex flex-col items-start justify-between md:flex-row md:items-center">
                                <div>
                                    <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">{caseStudy.title}</h1>
                                    <p className="text-lg text-gray-600">Client: {caseStudy.client_name}</p>
                                </div>
                                {caseStudy.logo && (
                                    <div className="mt-4 md:mt-0">
                                        <img src={caseStudy.logo} alt={`${caseStudy.client_name} logo`} className="h-16 object-contain" />
                                    </div>
                                )}
                            </div>

                            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="rounded-md bg-gray-50 p-4">
                                    <h3 className="mb-1 font-semibold text-gray-900">Industry</h3>
                                    <p>{caseStudy.industry}</p>
                                </div>
                                <div className="rounded-md bg-gray-50 p-4">
                                    <h3 className="mb-1 font-semibold text-gray-900">Service Type</h3>
                                    <p>{caseStudy.service_type}</p>
                                </div>
                                {caseStudy.completion_date && (
                                    <div className="rounded-md bg-gray-50 p-4">
                                        <h3 className="mb-1 font-semibold text-gray-900">Completion Date</h3>
                                        <p>{new Date(caseStudy.completion_date).toLocaleDateString()}</p>
                                    </div>
                                )}
                                {caseStudy.website_url && (
                                    <div className="rounded-md bg-gray-50 p-4">
                                        <h3 className="mb-1 font-semibold text-gray-900">Website</h3>
                                        <a
                                            href={caseStudy.website_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12 md:px-6">
                    <div className="mx-auto max-w-4xl">
                        {/* Challenge Section */}
                        <div className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">The Challenge</h2>
                            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.challenge }}></div>
                        </div>

                        {/* Solution Section */}
                        <div className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">Our Solution</h2>
                            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.solution }}></div>
                        </div>

                        {/* Gallery Section */}
                        {caseStudy.gallery_images && caseStudy.gallery_images.length > 0 && (
                            <div className="mb-12">
                                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">Project Gallery</h2>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {caseStudy.gallery_images.map((image, index) => (
                                        <div key={index} className="aspect-video overflow-hidden rounded-lg">
                                            <img
                                                src={image.src}
                                                alt={image.alt || `${caseStudy.title} gallery image ${index + 1}`}
                                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Results Section */}
                        <div className="mb-12">
                            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">The Results</h2>
                            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.results }}></div>
                        </div>
                    </div>
                </div>

                {/* Metrics Section */}
                <CaseStudyMetrics />

                {/* Main Content Continued */}
                <div className="container mx-auto px-4 pb-12 md:px-6">
                    <div className="mx-auto max-w-4xl">
                        {/* Testimonial Section */}
                        {caseStudy.testimonial && (
                            <div className="mb-12 rounded-lg bg-gray-50 p-8">
                                <div className="flex flex-col items-center text-center">
                                    <svg className="mb-4 h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                    <blockquote
                                        className="mb-4 text-lg text-gray-700 italic md:text-xl"
                                        dangerouslySetInnerHTML={{ __html: caseStudy.testimonial }}
                                    ></blockquote>
                                    {caseStudy.testimonial_author && (
                                        <cite className="not-italic">
                                            <p className="font-semibold text-gray-900">{caseStudy.testimonial_author}</p>
                                            {caseStudy.testimonial_position && <p className="text-gray-600">{caseStudy.testimonial_position}</p>}
                                        </cite>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Case Studies */}
                {relatedCaseStudies.length > 0 && (
                    <div className="bg-gray-50 py-12">
                        <div className="container mx-auto px-4 md:px-6">
                            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">Related Success Stories</h2>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {relatedCaseStudies.map((relatedCase) => (
                                    <Link key={relatedCase.id} href={`/case-studies/${relatedCase.slug}`}>
                                        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                                            <div className="aspect-video overflow-hidden">
                                                <img
                                                    src={relatedCase.featured_image}
                                                    alt={relatedCase.title}
                                                    className="h-full w-full object-cover"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="mb-2 text-xl font-bold text-gray-900">{relatedCase.title}</h3>
                                                <p className="mb-4 text-gray-600">{relatedCase.client_name}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                                                        {relatedCase.service_type}
                                                    </span>
                                                    <span className="text-sm font-medium text-blue-600">Read More →</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-blue-600 py-16">
                    <div className="container mx-auto px-4 text-center md:px-6">
                        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready to Start Your Own Success Story?</h2>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                            Let's discuss how we can help your business achieve similar results with our tailored solutions.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block rounded-md bg-white px-6 py-3 font-medium text-blue-600 shadow-md transition-colors duration-300 hover:bg-blue-50"
                        >
                            Contact Us Today
                        </Link>
                    </div>
                </div>
            </div>
        </SiteLayout>
    );
}
