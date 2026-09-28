'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function AppDevOpsFeatures() {
    return (
        <section id="app-devops-features" className="relative z-10 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="devops-features-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <header className="mb-12 text-center md:mb-18 lg:mb-20">
                        <div className="mx-auto w-full max-w-3xl">
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Application and DevOps services</p>
                            <h2 id="devops-features-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                                Deployment Setup That Fits Your Application
                            </h2>
                            <p className="md:text-md text-gray-700">
                                Some teams need help with an application already in production; others are planning a new build and want delivery set
                                up correctly from the start. In both cases, we work on the application code and the way it is released.
                            </p>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="app-development-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png"
                                    alt="E-commerce website displayed on a laptop"
                                    className="h-60 w-full rounded-lg object-cover"
                                    width="400"
                                    height="240"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="app-development-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Application Development
                            </h3>
                            <p className="text-gray-700">
                                We build and maintain web applications with delivery in mind: automated tests, consistent configuration, and
                                deployments that can be reversed.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="operating-context-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                                    alt="Two executives talking in an office"
                                    className="h-60 w-full rounded-lg object-cover"
                                    width="400"
                                    height="240"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="operating-context-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Built Around Your Operations
                            </h3>
                            <p className="text-gray-700">
                                We look at how your teams, customers, and other systems depend on the application, so delivery changes fit how your
                                business runs.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="practical-tooling-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_2ecd10a0-759e-4eab-a9b4-879a27fe0bb7.png"
                                    alt="Illustration of people working together in an office"
                                    className="h-60 w-full rounded-lg object-cover"
                                    width="400"
                                    height="240"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="practical-tooling-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Practical Tooling Choices
                            </h3>
                            <p className="text-gray-700">
                                The target is dependable change, not automation for its own sake. We choose tools your team can operate and explain
                                the tradeoffs before adopting anything new.
                            </p>
                        </article>
                    </div>
                    <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="DevOps features navigation">
                        <Link
                            href={contactHref('new-project')}
                            className="inline-flex items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-6 py-3 text-center font-medium text-[#BD1550] transition hover:bg-[#BD1550] hover:text-white focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                            Tell Us About Your App
                        </Link>
                        <Link
                            href="/company/about"
                            className="inline-flex items-center gap-1 font-medium text-[#BD1550] hover:underline focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                        >
                            About Empuls3
                            <ChevronRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}
