'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function CaseStudiesCta() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 className="text-secondary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Planning a website or software project?
                        </h2>
                        <p className="md:text-md text-gray-700">
                            Tell us who it is for and what it needs to do. Projects start at $2,500, and we normally reply within one business day by
                            email.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Link
                                href={contactHref('project')}
                                className="bg-primary hover:bg-primary/90 focus:ring-primary inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
                            >
                                Let’s Talk About Your Project
                            </Link>
                            <Link
                                href="/solutions"
                                className="border-primary text-primary focus:ring-primary inline-flex items-center justify-center rounded-md border bg-white px-6 py-3 text-base font-medium shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                            >
                                Explore Solutions
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_developers_at_an_agency_waterco_31b61ffe-cc01-4adc-81dd-e6e0a1f5674e_1.png"
                            className="w-full rounded-lg border-0 object-cover"
                            alt="Illustration of developers working together"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CaseStudiesCta;
