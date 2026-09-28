'use client';

import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function HubspotOverview() {
    return (
        <section id="hubspot-overview" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-overview-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <header>
                            <p id="hubspot-overview-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                                Common CRM problems
                            </p>
                            <h2 id="hubspot-overview-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                                Missed follow-ups, duplicates, and reports nobody trusts
                            </h2>
                        </header>
                        <p className="md:text-md mb-6 text-gray-700 md:mb-8">
                            A lead waits because nobody was assigned to it. The same customer appears more than once. Pipeline numbers change
                            depending on who runs the report. These problems usually cross teams and systems, so adding more fields or automation
                            rarely fixes them on its own.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <article aria-labelledby="unified-view-heading">
                                <h3 id="unified-view-heading" className="text-md mb-3 leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                                    One Customer Record
                                </h3>
                                <p className="text-gray-700">
                                    We connect HubSpot to forms, scheduling, finance, delivery, support, and data tools so each team works from the
                                    same record, with visible error handling when a sync fails.
                                </p>
                            </article>
                            <article aria-labelledby="automation-tools-heading">
                                <h3 id="automation-tools-heading" className="text-md mb-3 leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                                    Dependable Handoffs
                                </h3>
                                <p className="text-gray-700">
                                    We agree with your team who follows up at each step, then automate the handoffs you currently track by email or
                                    memory.
                                </p>
                            </article>
                        </div>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="HubSpot overview navigation">
                            <Link
                                href="/company/faqs"
                                className="inline-flex items-center justify-center rounded-md px-2 py-1 text-base font-medium text-[#1F1946] hover:text-[#BD1550] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                            >
                                Read Common Questions <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
                            </Link>
                        </nav>
                    </div>
                    <figure>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_developers_working_in_meetings_st_b5e34501-f3fa-4b29-a260-92f7f138fa79.png"
                            className="w-full rounded-lg object-cover"
                            alt="Developers talking through a project in a meeting room"
                            width="800"
                            height="600"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
