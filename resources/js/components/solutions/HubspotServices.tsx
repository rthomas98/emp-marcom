'use client';

import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function HubspotServices() {
    return (
        <section id="hubspot-services" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-services-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <header className="mb-12 text-center md:mb-18 lg:mb-20">
                        <div className="w-full max-w-3xl">
                            <p id="hubspot-services-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                                HubSpot services
                            </p>
                            <h2 id="hubspot-services-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                                Migration, implementation, and automation
                            </h2>
                            <p className="md:text-md text-gray-700">
                                Whether you are moving to HubSpot, rebuilding an existing portal, or adding automation to a CRM your team already
                                uses, the work starts with how your sales and service teams work and the data each team needs.
                            </p>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="data-migration-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_ab0a8b19-f943-4281-95fe-a3acda2eb6c8_1.png"
                                    alt="Colleagues reviewing work together at a desk"
                                    className="rounded-lg"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="data-migration-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Data Migration
                            </h3>
                            <p className="text-gray-700">
                                We map contacts, companies, deals, and activities from spreadsheets or your previous CRM, resolve duplicates, and
                                check the imported records before your team starts using them.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="hubspot-implementation-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png"
                                    alt="Illustration of people discussing a project around a laptop"
                                    className="rounded-lg"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="hubspot-implementation-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                HubSpot Implementation
                            </h3>
                            <p className="text-gray-700">
                                We configure pipelines, properties, permissions, and deal stages around how your teams sell and deliver.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="marketing-automation-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_9f59d12c-3dc1-41f8-bf2f-15c7b925b834_2.png"
                                    alt="Coworkers planning together in an office"
                                    className="rounded-lg"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="marketing-automation-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Marketing Automation
                            </h3>
                            <p className="text-gray-700">
                                We build forms, lists, email sequences, and lead scoring that follow the stage rules your team agreed on and hand
                                qualified leads to sales with the context they need.
                            </p>
                        </article>
                    </div>
                    <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="HubSpot services navigation">
                        <Link
                            href="/solutions"
                            className="inline-flex items-center justify-center rounded-md px-2 py-1 text-base font-medium text-[#1F1946] hover:text-[#BD1550] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                        >
                            Compare All Solutions <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}
