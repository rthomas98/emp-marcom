import { portfolioCaptures } from '@/content/portfolio-captures';
import SiteLayout from '@/layouts/site-layout';
import { Head } from '@inertiajs/react';
import { Filter } from 'lucide-react';
import React, { useState } from 'react';

interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    client_name: string;
    industry: string;
    service_type: string;
    featured_image: string;
    is_featured: boolean;
}

interface CaseStudiesProps {
    caseStudies: CaseStudy[];
    featuredCaseStudies?: CaseStudy[];
    filter?: {
        industry: string | null;
        service_type: string | null;
    };
}

export default function Index({ caseStudies = [], featuredCaseStudies = [], filter }: CaseStudiesProps) {
    const [showFilters, setShowFilters] = useState(false);
    const industries = [
        'Technology',
        'Healthcare',
        'Finance',
        'Education',
        'E-commerce',
        'Manufacturing',
        'Real Estate',
        'Hospitality',
        'Entertainment',
        'Other',
    ];
    const serviceTypes = [
        'Web Development',
        'Mobile Development',
        'E-commerce',
        'MVP Development',
        'Software Development',
        'Backend Development',
        'Frontend Development',
        'HubSpot Development',
        'Managed IT Services',
        'Other',
    ];

    return (
        <>
            <Head>
                <title>Success Stories | Empuls3</title>
                <meta
                    name="description"
                    content="Explore our portfolio of successful client projects and case studies across various industries and service types."
                />
                <meta
                    name="keywords"
                    content="case studies, client projects, success stories, web development, mobile development, software solutions"
                />
            </Head>

            {/* Hero Section */}
            <section className="from-secondary to-primary bg-gradient-to-r py-20 text-white" aria-labelledby="hero-heading">
                <div className="container mx-auto px-4">
                    <header className="max-w-3xl">
                        <h1 id="hero-heading" className="mb-4 text-4xl font-bold md:text-5xl">
                            Our Success Stories
                        </h1>
                        <p className="mb-8 text-lg md:text-xl">
                            Explore how we've helped businesses transform their digital presence and achieve their goals.
                        </p>
                    </header>
                </div>
            </section>

            {/* Featured Case Studies - Only shown if there are case studies */}
            {featuredCaseStudies && featuredCaseStudies.length > 0 && (
                <section className="bg-gray-50 py-16" aria-labelledby="featured-case-studies-heading">
                    <div className="container mx-auto px-4">
                        <header className="mb-12 text-center">
                            <h2 id="featured-case-studies-heading" className="text-3xl font-bold">
                                Featured Case Studies
                            </h2>
                        </header>
                        <div className="grid gap-8 md:grid-cols-3">
                            {featuredCaseStudies.map((caseStudy) => (
                                <article
                                    key={caseStudy.id}
                                    className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                                    aria-labelledby={`featured-case-study-${caseStudy.id}`}
                                >
                                    <a
                                        href={`/case-studies/${caseStudy.slug}`}
                                        className="focus-visible:ring-primary block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                                        aria-label={`Read case study about ${caseStudy.title} for ${caseStudy.client_name}`}
                                    >
                                        <figure className="h-48 overflow-hidden">
                                            <img
                                                src={portfolioCaptures[caseStudy.slug]?.src ?? caseStudy.featured_image}
                                                alt={portfolioCaptures[caseStudy.slug]?.alt ?? `${caseStudy.title} case study featured image`}
                                                className={`h-full w-full object-cover transition-transform hover:scale-105 ${portfolioCaptures[caseStudy.slug] ? 'object-top' : ''}`}
                                                width="400"
                                                height="225"
                                                loading="lazy"
                                            />
                                        </figure>
                                        <div className="p-6">
                                            <span className="text-primary bg-primary/10 mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                                                {caseStudy.service_type}
                                            </span>
                                            <h3 id={`featured-case-study-${caseStudy.id}`} className="text-secondary mb-2 text-xl font-bold">
                                                {caseStudy.title}
                                            </h3>
                                            <p className="mb-4 text-gray-600">{caseStudy.client_name}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500">{caseStudy.industry}</span>
                                                <span className="text-primary font-medium" aria-hidden="true">
                                                    Read Case Study →
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Case Studies */}
            <section className="py-16" aria-labelledby="all-case-studies-heading">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex items-center justify-between">
                        <header>
                            <h2 id="all-case-studies-heading" className="text-3xl font-bold">
                                Success Stories
                            </h2>
                        </header>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="focus-visible:ring-primary flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            aria-expanded={showFilters}
                            aria-controls="case-study-filters"
                            aria-label="Toggle filter options"
                        >
                            <Filter size={18} aria-hidden="true" />
                            <span>Filter</span>
                        </button>
                    </div>

                    {/* Filters */}
                    {showFilters && (
                        <div
                            id="case-study-filters"
                            className="mb-8 rounded-lg border border-gray-200 bg-gray-50 p-6"
                            role="region"
                            aria-label="Case study filters"
                        >
                            <h3 className="mb-4 font-semibold">Filter Case Studies</h3>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <fieldset>
                                        <legend className="mb-2 block text-sm font-medium text-gray-700">Industry</legend>
                                        <div className="grid grid-cols-2 gap-2" role="group" aria-label="Filter by industry">
                                            {industries.map((industry) => (
                                                <a
                                                    key={industry}
                                                    href={`/case-studies/filter?industry=${industry}`}
                                                    className={`rounded-md px-3 py-2 text-sm ${
                                                        filter?.industry === industry
                                                            ? 'bg-primary text-white'
                                                            : 'border border-gray-300 bg-white hover:bg-gray-50'
                                                    } focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`}
                                                    aria-current={filter?.industry === industry ? 'true' : 'false'}
                                                    aria-label={`Filter by ${industry} industry ${filter?.industry === industry ? '(currently selected)' : ''}`}
                                                >
                                                    {industry}
                                                </a>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>
                                <div>
                                    <fieldset>
                                        <legend className="mb-2 block text-sm font-medium text-gray-700">Service Type</legend>
                                        <div className="grid grid-cols-2 gap-2" role="group" aria-label="Filter by service type">
                                            {serviceTypes.map((serviceType) => (
                                                <a
                                                    key={serviceType}
                                                    href={`/case-studies/filter?service_type=${serviceType}`}
                                                    className={`rounded-md px-3 py-2 text-sm ${
                                                        filter?.service_type === serviceType
                                                            ? 'bg-primary text-white'
                                                            : 'border border-gray-300 bg-white hover:bg-gray-50'
                                                    } focus-visible:ring-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`}
                                                    aria-current={filter?.service_type === serviceType ? 'true' : 'false'}
                                                    aria-label={`Filter by ${serviceType} service ${filter?.service_type === serviceType ? '(currently selected)' : ''}`}
                                                >
                                                    {serviceType}
                                                </a>
                                            ))}
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            {(filter?.industry || filter?.service_type) && (
                                <div className="mt-4 flex justify-end">
                                    <a
                                        href="/case-studies"
                                        className="text-primary focus-visible:ring-primary rounded-sm px-2 py-1 hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                                        aria-label="Clear all filters"
                                    >
                                        Clear Filters
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Case Studies Grid */}
                    {caseStudies && caseStudies.length > 0 ? (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="region" aria-label="Case studies list">
                            {caseStudies.map((caseStudy) => (
                                <article
                                    key={caseStudy.id}
                                    className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
                                    aria-labelledby={`case-study-${caseStudy.id}`}
                                >
                                    <a
                                        href={`/case-studies/${caseStudy.slug}`}
                                        className="focus-visible:ring-primary block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                                        aria-label={`Read case study about ${caseStudy.title} for ${caseStudy.client_name}`}
                                    >
                                        <figure className="h-48 overflow-hidden">
                                            <img
                                                src={portfolioCaptures[caseStudy.slug]?.src ?? caseStudy.featured_image}
                                                alt={portfolioCaptures[caseStudy.slug]?.alt ?? `${caseStudy.title} case study featured image`}
                                                className={`h-full w-full object-cover transition-transform hover:scale-105 ${portfolioCaptures[caseStudy.slug] ? 'object-top' : ''}`}
                                                width="400"
                                                height="225"
                                                loading="lazy"
                                            />
                                        </figure>
                                        <div className="p-6">
                                            <span className="text-primary bg-primary/10 mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                                                {caseStudy.service_type}
                                            </span>
                                            <h3 id={`case-study-${caseStudy.id}`} className="text-secondary mb-2 text-xl font-bold">
                                                {caseStudy.title}
                                            </h3>
                                            <p className="mb-4 text-gray-600">{caseStudy.client_name}</p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-500">{caseStudy.industry}</span>
                                                <span className="text-primary font-medium" aria-hidden="true">
                                                    Read Case Study →
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div
                            className="rounded-lg border border-gray-200 bg-white py-16 text-center shadow-sm"
                            role="region"
                            aria-label="No case studies found message"
                        >
                            <h3 className="mb-4 text-xl font-medium text-gray-600">No Success Stories Available</h3>
                            <p className="mx-auto max-w-lg text-gray-500">
                                We're currently working on documenting our client success stories. Check back soon to see how we've helped businesses
                                achieve their goals.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-secondary py-16 text-white" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4 text-center">
                    <header>
                        <h2 id="cta-heading" className="mb-4 text-3xl font-bold">
                            Ready to Create Your Success Story?
                        </h2>
                        <p className="mx-auto mb-8 max-w-2xl text-xl">
                            Let's work together to build innovative solutions that drive your business forward.
                        </p>
                    </header>
                    <nav className="flex flex-wrap justify-center gap-4" aria-label="Project action links">
                        <a
                            href="/contact"
                            className="bg-primary hover:bg-primary/90 focus-visible:ring-offset-secondary rounded-md px-6 py-3 font-medium text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
                            aria-label="Start your project by contacting Empuls3"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="/solutions"
                            className="text-primary focus-visible:ring-primary focus-visible:ring-offset-secondary rounded-md bg-white px-6 py-3 font-medium transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            aria-label="Explore our range of technology solutions"
                        >
                            Explore Our Solutions
                        </a>
                    </nav>
                </div>
            </section>
        </>
    );
}

Index.layout = (page: React.ReactNode) => <SiteLayout children={page} title="Success Stories | Empuls3" />;
