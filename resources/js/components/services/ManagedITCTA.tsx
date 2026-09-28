'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function ManagedITCTA() {
    return (
        <section id="managed-it-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="it-cta-heading">
            <div className="relative z-10 container mx-auto">
                <div className="w-full max-w-lg">
                    <header>
                        <p className="mb-3 font-semibold text-white md:mb-4">Managed IT Services</p>
                        <h2 id="it-cta-heading" className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                            Tell Us What Your Team Needs Supported
                        </h2>
                    </header>
                    <p className="md:text-md text-white">
                        Share the number of users, systems, current vendors, recurring issues, and coverage expectations so we can evaluate fit. We
                        normally reply within one business day. Managed IT is for established business relationships, not residential, walk-in, or
                        one-time emergency support.
                    </p>
                    <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Managed IT contact navigation">
                        <Link
                            href={contactHref('project')}
                            className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946] focus-visible:outline-none"
                        >
                            Discuss Managed IT Fit
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946] focus-visible:outline-none"
                        >
                            Compare Our Services
                        </Link>
                    </nav>
                </div>
            </div>
            <figure className="absolute inset-0 z-0" aria-hidden="true">
                <img
                    src="/images/site-images/rob_thomas23_Empty_developer_work_stations_in_a_modern_office_w_249ca82d-c4b9-4af2-9af8-aae352b63f75.png"
                    className="h-full w-full object-cover"
                    alt=""
                    width="1920"
                    height="1080"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[#1F1946]/80" />
            </figure>
        </section>
    );
}
