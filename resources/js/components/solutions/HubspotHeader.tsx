'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function Header9() {
    return (
        <section id="hubspot-header" className="flex h-svh min-h-svh flex-col" aria-labelledby="hubspot-header-title">
            <div className="relative flex-1">
                <div className="absolute inset-0 z-0" role="img" aria-label="Illustration of people meeting around a conference table">
                    <img
                        src="/images/site-images/rob_thomas23_Startup_Meeting_Room_Team_of_African_AmericanEnt_8f1d3e7c-ba74-4a68-a1d4-1f2c469b01fd_2.png"
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                        width="1920"
                        height="1080"
                    />
                </div>
            </div>
            <div className="px-[5%]">
                <div className="relative z-10 container">
                    <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
                        <header>
                            <p id="hubspot-header-subtitle" className="mb-3 font-semibold text-[#BD1550] md:mb-4">
                                HubSpot and CRM workflow integration
                            </p>
                            <h1 id="hubspot-header-title" className="text-4xl font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                                Set Up HubSpot Around How Your Sales and Service Teams Work
                            </h1>
                        </header>
                        <div>
                            <p className="md:text-md text-base text-gray-700">
                                Missed follow-ups, duplicate contacts, and reports nobody trusts usually trace back to how the CRM was set up. We help
                                DFW service businesses clean up HubSpot, connect it to the tools around it, and automate the handoffs your team tracks
                                by memory. Setting up HubSpot for the first time? We start with the same questions.
                            </p>
                            <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="HubSpot solutions navigation">
                                <Link
                                    href={contactHref('project')}
                                    className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                                >
                                    Discuss Your CRM
                                </Link>
                                <Link
                                    href="/solutions"
                                    className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                                >
                                    Compare All Solutions
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
