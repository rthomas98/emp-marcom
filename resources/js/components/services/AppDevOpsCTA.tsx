'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function AppDevOpsCTA() {
    return (
        <section id="app-devops-cta" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="devops-cta-heading">
            <div className="relative z-10 container mx-auto">
                <div className="w-full max-w-lg">
                    <header>
                        <p className="mb-3 font-semibold text-white md:mb-4">Application delivery and DevOps</p>
                        <h2 id="devops-cta-heading" className="mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                            Show us what makes releases stressful
                        </h2>
                    </header>
                    <p className="md:text-md text-white">
                        Tell us about the application, how it is deployed today, and what happens when a release fails. We normally reply within one
                        business day.
                    </p>
                    <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="DevOps CTA navigation">
                        <Link
                            href={contactHref('project')}
                            className="hover:bg-opacity-90 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-center font-medium text-[#1F1946] transition focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946] focus-visible:outline-none"
                        >
                            Request a Deployment Review
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946] focus-visible:outline-none"
                        >
                            Compare All Services
                        </Link>
                    </nav>
                </div>
            </div>
            <figure className="absolute inset-0 z-0" aria-hidden="true">
                <img
                    src="/images/site-images/rob_thomas23_African_American_Web_devoloer_with_their_laptop_st_6c8d2e72-ba66-449b-9cad-d007dcc9b132.png"
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
