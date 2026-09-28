'use client';

import { Link } from '@inertiajs/react';
import { ChevronRight, Headphones, Users } from 'lucide-react';

export function ManagedITTeams() {
    return (
        <section id="managed-it-teams" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="it-teams-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <figure className="order-2 md:order-1">
                        <img
                            src="/images/site-images/rob_thomas23_An_African_American_team_leader_shaking_hands_with_6cd791fa-9847-44b3-be94-fd439a747f57.png"
                            className="w-full rounded-lg border border-gray-200 object-cover"
                            alt="Two professionals shaking hands in an office"
                            width="600"
                            height="400"
                            loading="lazy"
                        />
                    </figure>
                    <div className="order-1 md:order-2">
                        <header>
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Support for Your Team</p>
                            <h2 id="it-teams-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                                Clear Support Roles for Your Team
                            </h2>
                        </header>
                        <p className="md:text-md mb-6 text-gray-700 md:mb-8">
                            Managed IT from Empuls3 is built for established service businesses with a defined workforce and a main contact on your
                            side. Robert learns your users, systems, locations, and existing vendors, so your staff know who to contact.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <article aria-labelledby="teams-access-title">
                                <div className="mb-3 md:mb-4">
                                    <Users className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                                </div>
                                <h3 id="teams-access-title" className="text-md mb-3 leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                                    Onboarding and Offboarding
                                </h3>
                                <p className="text-gray-700">
                                    Accounts, permissions, devices, and vendor systems are set up and removed the same way each time people join and
                                    leave.
                                </p>
                            </article>
                            <article aria-labelledby="teams-support-title">
                                <div className="mb-3 md:mb-4">
                                    <Headphones className="h-12 w-12 text-[#BD1550]" aria-hidden="true" />
                                </div>
                                <h3 id="teams-support-title" className="text-md mb-3 leading-[1.4] font-bold text-[#1F1946] md:mb-4 md:text-xl">
                                    Support Alongside Your Staff
                                </h3>
                                <p className="text-gray-700">
                                    If an internal IT person or office manager already handles technology, we work with them and take on the areas you
                                    hand over.
                                </p>
                            </article>
                        </div>
                        <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Managed IT team support navigation">
                            <Link
                                href="/company/faqs"
                                className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                Read Common Questions
                                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
