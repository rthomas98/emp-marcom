'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Check } from 'lucide-react';

export function EngineeringSolutions() {
    return (
        <section id="engineering-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="engineering-solutions-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png"
                            className="w-full rounded-lg object-cover"
                            alt="Software developers working at computers in an office"
                            width="800"
                            height="600"
                            loading="lazy"
                        />
                    </div>
                    <div className="order-1 min-w-0 md:order-2">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Software Engineering</p>
                        <h2
                            id="engineering-solutions-heading"
                            className="mb-5 text-4xl font-bold break-words text-[#1F1946] sm:text-5xl md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl"
                        >
                            What Ongoing Support Covers
                        </h2>
                        <p className="md:text-md mb-5 text-gray-700 md:mb-6">
                            Ongoing support can include maintenance, integrations, incidents, vendor coordination, and planning. We agree the scope
                            first, so you know which systems we look after and how requests are prioritized.
                        </p>
                        <div className="grid grid-cols-1 gap-4 py-2">
                            <div className="flex self-start">
                                <div className="mr-4 flex-none self-start">
                                    <Check className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                                </div>
                                <p className="text-gray-700">
                                    Maintenance and improvements to the applications your business already runs, including defects, dependencies, and
                                    releases.
                                </p>
                            </div>
                            <div className="flex self-start">
                                <div className="mr-4 flex-none self-start">
                                    <Check className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                                </div>
                                <p className="text-gray-700">
                                    Architecture and integration work that connects systems, cleans up handoffs, and documents how data moves.
                                </p>
                            </div>
                            <div className="flex self-start">
                                <div className="mr-4 flex-none self-start">
                                    <Check className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                                </div>
                                <p className="text-gray-700">
                                    Planning and building new features or applications when an existing tool can no longer keep up with the business.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Link
                                href={contactHref('project')}
                                className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                Discuss Engineering Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
