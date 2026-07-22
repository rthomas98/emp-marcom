'use client';

import { Link } from '@inertiajs/react';

interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    client_name: string;
    industry: string;
    service_type: string;
    featured_image: string;
}

interface CaseStudiesGalleryProps {
    caseStudies?: CaseStudy[];
}

export function CaseStudiesGallery({ caseStudies = [] }: CaseStudiesGalleryProps) {
    const displayCaseStudies = caseStudies;

    return (
        <section id="case-studies-list" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <h2 className="text-secondary mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">Published Case Studies</h2>
                    <p className="md:text-md text-secondary mx-auto max-w-3xl font-medium">
                        Review the client context, delivered scope, and outcomes that are currently approved for publication. Our present examples are
                        website modernization projects; software rescue and integration stories will be added only when evidence and client approval
                        are available.
                    </p>
                </div>
                {displayCaseStudies.length === 0 ? (
                    <p className="rounded-xl bg-gray-50 p-8 text-center text-gray-700">No published case studies are available right now.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {displayCaseStudies.map((caseStudy) => (
                            <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`} className="group mb-8 block w-full">
                                <div className="relative h-[300px] overflow-hidden rounded-lg">
                                    <img
                                        src={caseStudy.featured_image}
                                        alt={caseStudy.title}
                                        className="size-full border-0 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[#1F1946]/80 to-transparent opacity-80"></div>
                                    <div className="absolute bottom-0 left-0 p-6 text-white">
                                        <span className="mb-3 inline-block rounded-full bg-[#BD1550] px-3 py-1 text-xs font-semibold">
                                            {caseStudy.service_type}
                                        </span>
                                        <h3 className="mb-2 text-xl font-bold">{caseStudy.title}</h3>
                                        <p className="text-white/80">{caseStudy.client_name}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default CaseStudiesGallery;
