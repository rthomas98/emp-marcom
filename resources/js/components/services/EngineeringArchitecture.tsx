'use client';

import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function EngineeringArchitecture() {
    return (
        <section id="engineering-architecture" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="architecture-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <header>
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Architecture Services</p>
                            <h2 id="architecture-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                                System Architecture That Fits How the Business Works
                            </h2>
                        </header>
                        <p className="md:text-md text-gray-700">
                            We map how your applications, data, integrations, and infrastructure fit together, then design changes around the
                            workflows your staff and customers rely on. Whether the goal is extending an existing system or planning a new one, you
                            get a documented architecture, the tradeoffs behind it, and a delivery sequence that limits disruption.
                        </p>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Architecture services navigation">
                            <Link
                                href="/solutions"
                                className="inline-flex items-center text-[#BD1550] hover:underline focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                Browse Technical Solutions
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </nav>
                    </div>
                    <figure>
                        <img
                            src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
                            className="w-full rounded-lg object-cover"
                            alt="Illustration of professionals working at laptops in an office"
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
