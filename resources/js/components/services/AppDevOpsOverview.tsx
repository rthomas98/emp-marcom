'use client';

import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function AppDevOpsOverview() {
    return (
        <section id="app-devops-services" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="devops-overview-heading">
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                    <header>
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Why releases feel risky</p>
                        <h2 id="devops-overview-heading" className="text-4xl leading-[1.2] font-bold text-[#1F1946] md:text-5xl lg:text-6xl">
                            Why Deployments Keep Going Wrong
                        </h2>
                    </header>
                    <div>
                        <p className="md:text-md text-gray-700">
                            Tools alone do not make releases dependable. Environments, tests, secrets, monitoring, and recovery steps have to work
                            together. Common signs: deployments depend on one person's memory, failures are discovered by users, or nobody is sure how
                            to roll back.
                        </p>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="DevOps services links">
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
                <figure>
                    <img
                        src="/images/site-images/rob_thomas23_African_American_Software_Engineers_at_an_agency_762428ff-30ee-4066-88f5-c531dd19c25d_2.png"
                        className="h-[500px] w-full rounded-lg border border-gray-200 object-cover"
                        alt="Illustration of people working at computers in an office"
                        width="1200"
                        height="500"
                        loading="lazy"
                    />
                </figure>
            </div>
        </section>
    );
}
