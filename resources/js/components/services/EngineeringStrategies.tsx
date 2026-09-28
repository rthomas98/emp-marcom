'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Code, LayoutTemplate, Zap } from 'lucide-react';

export function EngineeringStrategies() {
    return (
        <section id="engineering-strategies" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="strategies-heading">
            <div className="relative z-10 container mx-auto">
                <header className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-white md:mb-4">Two Ways to Work Together</p>
                        <h2 id="strategies-heading" className="text-5xl font-bold text-white md:text-5xl lg:text-6xl">
                            Project Consulting or Ongoing Support
                        </h2>
                    </div>
                    <p className="md:text-md text-white">
                        Some businesses need a defined piece of work with a clear finish. Others need someone to look after their software every
                        month. We agree which fits, and what is included, before work starts. A project can move into ongoing support later if that
                        suits you.
                    </p>
                </header>
                <div className="grid grid-cols-1 items-start gap-y-12 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
                    <article className="flex w-full min-w-0 gap-6 lg:flex-col lg:gap-0" aria-labelledby="architecture-solutions-heading">
                        <LayoutTemplate className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6" aria-hidden="true" />
                        <div>
                            <h3
                                id="architecture-solutions-heading"
                                className="mb-5 text-2xl font-bold break-words text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-2xl xl:text-3xl"
                            >
                                Project Consulting
                            </h3>
                            <p className="text-white">
                                A defined scope, such as a system assessment, an architecture plan, a new build, or a migration, with agreed
                                deliverables.
                            </p>
                        </div>
                    </article>
                    <article className="flex w-full min-w-0 gap-6 lg:flex-col lg:gap-0" aria-labelledby="senior-engineers-heading">
                        <Code className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6" aria-hidden="true" />
                        <div>
                            <h3
                                id="senior-engineers-heading"
                                className="mb-5 text-2xl font-bold break-words text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-2xl xl:text-3xl"
                            >
                                Ongoing Support
                            </h3>
                            <p className="text-white">
                                Regular maintenance, fixes, releases, and planned improvements for the systems we agree to look after.
                            </p>
                        </div>
                    </article>
                    <article className="flex w-full min-w-0 gap-6 lg:flex-col lg:gap-0" aria-labelledby="technology-approach-heading">
                        <Zap className="mb-5 h-12 w-12 flex-none self-start text-white md:mb-6" aria-hidden="true" />
                        <div>
                            <h3
                                id="technology-approach-heading"
                                className="mb-5 text-2xl font-bold break-words text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-2xl xl:text-3xl"
                            >
                                Plain-Language Updates
                            </h3>
                            <p className="text-white">
                                Either way, you get the options, costs, and risks explained in business terms, and a clear next step.
                            </p>
                        </div>
                    </article>
                </div>
                <nav className="mt-12 flex flex-wrap justify-start gap-4 md:mt-18 lg:mt-20" aria-label="Engineering strategies navigation">
                    <Link
                        href={contactHref('consultation')}
                        className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                        Request a Consultation
                    </Link>
                    <Link
                        href="/services"
                        className="inline-flex items-center text-white hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                        Compare Our Services
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                </nav>
            </div>
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <img
                    src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
                    className="h-full w-full object-cover"
                    alt=""
                    width="1600"
                    height="900"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1F1946]/80" aria-hidden="true" />
            </div>
        </section>
    );
}
