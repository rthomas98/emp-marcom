'use client';

import { Users, Zap } from 'lucide-react';

export function HubspotProcess() {
    return (
        <section id="hubspot-process" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-process-heading">
            <div className="relative z-10 container mx-auto">
                <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
                    <header>
                        <p id="hubspot-process-subheading" className="mb-3 font-semibold text-white md:mb-4">
                            HubSpot workflow automation
                        </p>
                        <h2 id="hubspot-process-heading" className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                            Automate the handoffs your teams already rely on
                        </h2>
                    </header>
                    <div>
                        <p className="md:text-md mb-6 text-white md:mb-8">
                            Automation works when the steps behind it are agreed. We settle who owns a lead, when it moves to sales, and what happens
                            next, then build workflows that follow those steps, so records move between marketing, sales, and service without manual
                            chasing.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <article aria-labelledby="boost-efficiency-heading">
                                <div className="mb-3 md:mb-4" aria-hidden="true">
                                    <Zap className="h-12 w-12 text-[#BD1550]" />
                                </div>
                                <h3 id="boost-efficiency-heading" className="text-md mb-3 leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                                    Fewer Manual Steps
                                </h3>
                                <p className="text-white">
                                    Task creation, assignment, reminders, and status updates happen when a record meets the conditions your team
                                    defined, instead of depending on someone remembering.
                                </p>
                            </article>
                            <article aria-labelledby="consistent-follow-up-heading">
                                <div className="mb-3 md:mb-4" aria-hidden="true">
                                    <Users className="h-12 w-12 text-[#BD1550]" />
                                </div>
                                <h3 id="consistent-follow-up-heading" className="text-md mb-3 leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                                    Consistent Follow-Up
                                </h3>
                                <p className="text-white">
                                    Nurturing, onboarding, and service emails go out based on where each customer is and who owns them, so customers
                                    hear from the right person at the right point.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <img
                    src="/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png"
                    className="absolute inset-0 size-full object-cover"
                    alt=""
                    width="1920"
                    height="1080"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1F1946]/80" aria-hidden="true" />
            </div>
        </section>
    );
}
