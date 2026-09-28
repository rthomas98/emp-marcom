'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function EngineeringCTA() {
    return (
        <section id="engineering-cta" className="bg-white px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="cta-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <header>
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Software Engineering &amp; IT Consulting</p>
                            <h2 id="cta-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-6xl">
                                Talk to Robert About Your Software
                            </h2>
                        </header>
                        <p className="md:text-md text-gray-700">
                            Tell us about the project you are planning or the systems that need ongoing support. Robert normally replies within one
                            business day with questions or a suggested next step.
                        </p>
                        <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Engineering call to action navigation">
                            <Link
                                href={contactHref('project')}
                                className="hover:bg-opacity-90 inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                Let’s Talk About Your Project
                            </Link>
                            <Link
                                href="/company/about"
                                className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                About Empuls3
                            </Link>
                        </nav>
                    </div>
                    <figure>
                        <img
                            src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_ab0a8b19-f943-4281-95fe-a3acda2eb6c8_1.png"
                            className="w-full rounded-lg border border-gray-200 object-cover"
                            alt="Illustration of people meeting around a table"
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
