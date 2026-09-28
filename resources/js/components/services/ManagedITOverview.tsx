'use client';

import { Link } from '@inertiajs/react';
import { ChevronRight, Clock, HelpCircle, Settings, Users } from 'lucide-react';

export function ManagedITOverview() {
    return (
        <section id="managed-it-overview" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="it-overview-heading">
            <div className="relative z-10 container mx-auto">
                <header className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-white md:mb-4">Managed IT Support</p>
                        <h2 id="it-overview-heading" className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            What Managed IT Covers
                        </h2>
                    </div>
                    <div>
                        <p className="md:text-md text-white">
                            Recurring IT issues cost more than support time. They interrupt customer work, delay employees, and weaken security.
                            Support covers the people, devices, access, and vendors behind those issues.
                        </p>
                    </div>
                </header>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-4">
                    <article className="flex flex-col" aria-labelledby="overview-users-heading">
                        <div className="mb-5 md:mb-6">
                            <HelpCircle className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="overview-users-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Users, Devices, and Access
                        </h3>
                        <p className="text-white">Help for business users with accounts, permissions, devices, and common workplace systems.</p>
                    </article>
                    <article className="flex flex-col" aria-labelledby="overview-recurring-heading">
                        <div className="mb-5 md:mb-6">
                            <Clock className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="overview-recurring-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Recurring Problems
                        </h3>
                        <p className="text-white">
                            Device, access, vendor, network, and configuration causes are tracked and fixed, not just closed ticket by ticket.
                        </p>
                    </article>
                    <article className="flex flex-col" aria-labelledby="overview-vendors-heading">
                        <div className="mb-5 md:mb-6">
                            <Users className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="overview-vendors-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Vendor Coordination
                        </h3>
                        <p className="text-white">
                            When internet, software, hardware, and application providers each own one piece of an incident, we coordinate them toward
                            a resolution.
                        </p>
                    </article>
                    <article className="flex flex-col" aria-labelledby="overview-scope-heading">
                        <div className="mb-5 md:mb-6">
                            <Settings className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                        </div>
                        <h3 id="overview-scope-heading" className="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl">
                            Planning Ahead
                        </h3>
                        <p className="text-white">
                            Security gaps, aging devices, and upcoming system changes are tracked and planned with you before they cause problems.
                        </p>
                    </article>
                </div>
                <nav className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20" aria-label="Managed IT overview navigation">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-1 font-medium text-white hover:text-[#BD1550] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946] focus-visible:outline-none"
                    >
                        Compare Our Services
                        <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </nav>
            </div>
            <figure className="absolute inset-0 z-0" aria-hidden="true">
                <img
                    src="/images/site-images/rob_thomas23_African_American_People_sticky_note_and_office_g_cf3e7832-6a5e-48da-9f5b-7dd8a0ac57e4_1.png"
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
