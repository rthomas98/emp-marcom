'use client';

import { Link } from '@inertiajs/react';
import { BookOpen, ChevronRight, FileText, HeadphonesIcon } from 'lucide-react';

export function HubspotTraining() {
    return (
        <section id="hubspot-training" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-training-heading">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <header className="mb-12 md:mb-18 lg:mb-20">
                        <div className="w-full max-w-3xl">
                            <p id="hubspot-training-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                                HubSpot training and adoption
                            </p>
                            <h2 id="hubspot-training-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                                Help your team use the CRM the way it was designed
                            </h2>
                            <p className="md:text-md text-gray-700">
                                A well-built CRM still falls apart if people use it differently. Training covers the steps each role follows, not just
                                where to click, and leaves your administrators able to manage changes.
                            </p>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full flex-col" aria-labelledby="role-training-heading">
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <BookOpen className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <h3
                                id="role-training-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Role-Based Training
                            </h3>
                            <p className="text-gray-700">
                                Sales, marketing, service, and administrators each learn the stages, fields, and tasks they own, using your records
                                and workflows rather than a generic demo portal.
                            </p>
                        </article>
                        <article className="flex w-full flex-col" aria-labelledby="training-specialists-heading">
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <HeadphonesIcon className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <h3
                                id="training-specialists-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Training From the Person Who Set It Up
                            </h3>
                            <p className="text-gray-700">
                                The developer who configured your CRM runs the training, answers follow-up questions, and explains tradeoffs when a
                                request would change the setup.
                            </p>
                        </article>
                        <article className="flex w-full flex-col" aria-labelledby="team-resources-heading">
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <FileText className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <h3
                                id="team-resources-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Documentation for Your Team
                            </h3>
                            <p className="text-gray-700">
                                You receive user instructions, admin settings notes, and a plan for ongoing changes, so new hires and future updates
                                follow the same rules.
                            </p>
                        </article>
                    </div>
                    <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="HubSpot training navigation">
                        <Link
                            href="/company/about"
                            className="inline-flex items-center justify-center rounded-md px-2 py-1 text-base font-medium text-[#1F1946] hover:text-[#BD1550] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                        >
                            About Empuls3 <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}
