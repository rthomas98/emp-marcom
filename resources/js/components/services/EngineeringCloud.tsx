'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Cloud, Upload, Zap } from 'lucide-react';

export function EngineeringCloud() {
    return (
        <section id="engineering-cloud" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="cloud-heading">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <header className="mb-12 md:mb-18 lg:mb-20">
                        <div className="w-full max-w-3xl">
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Cloud Services</p>
                            <h2 id="cloud-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                                Cloud Planning, Migration, and Upkeep
                            </h2>
                            <p className="md:text-md text-gray-700">
                                Moving an application to the cloud, or cleaning up one that is already there, touches hosting, data, configuration,
                                secrets, and release steps. We plan the move around the parts of the business that cannot stop, and document the
                                environment so it stays maintainable afterward.
                            </p>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full flex-col" aria-labelledby="cloud-specialists-heading">
                            <div className="mb-5 md:mb-6">
                                <Cloud className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="cloud-specialists-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Cloud Assessment
                            </h3>
                            <p className="text-gray-700">
                                We review your current hosting, environments, costs, and dependencies before recommending whether and how to move.
                            </p>
                        </article>
                        <article className="flex w-full flex-col" aria-labelledby="migration-strategy-heading">
                            <div className="mb-5 md:mb-6">
                                <Upload className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="migration-strategy-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Migration Planning
                            </h3>
                            <p className="text-gray-700">
                                Migrations are staged with data checks, rollback steps, and a cutover plan, so users are interrupted as little as
                                possible.
                            </p>
                        </article>
                        <article className="flex w-full flex-col" aria-labelledby="cloud-optimization-heading">
                            <div className="mb-5 md:mb-6">
                                <Zap className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                            </div>
                            <h3
                                id="cloud-optimization-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Ongoing Cloud Care
                            </h3>
                            <p className="text-gray-700">
                                After launch we maintain configuration, monitoring, backups, and access so the environment does not drift into the
                                next problem.
                            </p>
                        </article>
                    </div>
                    <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Cloud services navigation">
                        <Link
                            href={contactHref('project')}
                            className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                            Discuss a Cloud Project
                        </Link>
                        <Link
                            href="/services/application-devops-services"
                            className="inline-flex items-center text-[#BD1550] hover:underline focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                            See Application Delivery &amp; DevOps
                            <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}
