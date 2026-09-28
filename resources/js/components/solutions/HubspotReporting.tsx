'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ArrowRightLeft, BarChart2, ChevronRight, Layers, PieChart } from 'lucide-react';

export function HubspotReporting() {
    return (
        <section id="hubspot-reporting" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-reporting-heading">
            <div className="container mx-auto">
                <header className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p id="hubspot-reporting-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                            HubSpot reporting
                        </p>
                        <h2 id="hubspot-reporting-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                            Reports that answer leadership questions
                        </h2>
                        <p className="md:text-md text-gray-700">
                            Reports go wrong when stages mean different things to different people, lead sources are not recorded, or connected
                            systems stop syncing. We fix those inputs first, then build dashboards leaders can use to make decisions.
                        </p>
                    </div>
                </header>
                <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
                    <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
                        <article className="flex flex-col items-center text-center" aria-labelledby="business-dashboards-heading">
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <BarChart2 className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <h3 id="business-dashboards-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                                Dashboards Built on Agreed Definitions
                            </h3>
                            <p className="text-gray-700">
                                Pipeline and service numbers use the stage and source definitions your team agreed on, so they mean the same thing in
                                every meeting.
                            </p>
                        </article>
                        <article className="flex flex-col items-center text-center" aria-labelledby="attribution-heading">
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <PieChart className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <h3 id="attribution-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                                Clear Attribution
                            </h3>
                            <p className="text-gray-700">
                                Lead sources and campaign data are captured consistently, so you can see which channels produce qualified
                                opportunities.
                            </p>
                        </article>
                    </div>
                    <figure className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Web_developers_using_a_computer_t_be2a97fe-d00e-41c1-ad43-4bffd775a774.png"
                            alt="Developers reviewing work on a computer screen"
                            className="h-auto w-full rounded-lg object-cover"
                            width="600"
                            height="450"
                            loading="lazy"
                        />
                    </figure>
                    <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
                        <article className="flex flex-col items-center text-center" aria-labelledby="connected-data-heading">
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <ArrowRightLeft className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <h3 id="connected-data-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                                Connected Data Sources
                            </h3>
                            <p className="text-gray-700">
                                Finance, delivery, and support data sync into HubSpot where reporting needs it, with error handling that shows when a
                                connection stops updating.
                            </p>
                        </article>
                        <article className="flex flex-col items-center text-center" aria-labelledby="usable-reports-heading">
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <Layers className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <h3 id="usable-reports-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                                Reports Teams Can Use
                            </h3>
                            <p className="text-gray-700">
                                Each dashboard is organized around the questions its audience asks, and we show users how to read and filter it.
                            </p>
                        </article>
                    </div>
                </div>
                <nav className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20" aria-label="HubSpot reporting navigation">
                    <Link
                        href={contactHref('project')}
                        className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    >
                        Discuss Your Reporting
                    </Link>
                    <Link
                        href="/company/faqs"
                        className="inline-flex items-center justify-center rounded-md px-2 py-1 text-base font-medium text-[#1F1946] hover:text-[#BD1550] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    >
                        Read Common Questions <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
                    </Link>
                </nav>
            </div>
        </section>
    );
}
