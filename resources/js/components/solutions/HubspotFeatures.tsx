'use client';

import { BarChart3, Database, Layers } from 'lucide-react';

export function HubspotFeatures() {
    return (
        <section id="hubspot-features" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-features-heading">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <header className="mb-12 md:mb-18 lg:mb-20">
                        <div className="w-full max-w-3xl">
                            <p id="hubspot-features-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                                What we set up
                            </p>
                            <h2 id="hubspot-features-heading" className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                                What We Set Up in Your CRM
                            </h2>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full gap-6" aria-labelledby="lifecycle-design-heading">
                            <div className="flex-none self-start" aria-hidden="true">
                                <Database className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <div>
                                <h3 id="lifecycle-design-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                                    Clean Records and Clear Stages
                                </h3>
                                <p className="text-gray-700">
                                    Agree what each field and stage means and who owns each record, then merge duplicates and fill gaps before
                                    anything is automated.
                                </p>
                            </div>
                        </article>
                        <article className="flex w-full gap-6" aria-labelledby="integration-automation-heading">
                            <div className="flex-none self-start" aria-hidden="true">
                                <BarChart3 className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <div>
                                <h3 id="integration-automation-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                                    Integration and Automation
                                </h3>
                                <p className="text-gray-700">
                                    Connect HubSpot to the tools around it and automate assignments, reminders, and handoffs, with alerts when a sync
                                    fails.
                                </p>
                            </div>
                        </article>
                        <article className="flex w-full gap-6" aria-labelledby="reporting-guidance-heading">
                            <div className="flex-none self-start" aria-hidden="true">
                                <Layers className="h-12 w-12 text-[#BD1550]" />
                            </div>
                            <div>
                                <h3 id="reporting-guidance-heading" className="mb-3 text-xl font-bold text-[#1F1946] md:mb-4 md:text-2xl">
                                    Reporting and Team Guidance
                                </h3>
                                <p className="text-gray-700">
                                    Dashboards built on the cleaned-up data, plus instructions that keep the CRM accurate after launch.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
