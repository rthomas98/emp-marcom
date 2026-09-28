import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Layers, Lightbulb, Monitor, Palette } from 'lucide-react';

export function FrontendFeatures() {
    return (
        <section id="frontend-features" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-features-heading">
            <div className="container mx-auto">
                <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">What We Deliver</p>
                        <h2
                            id="frontend-features-heading"
                            className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Help With Websites, Customer Portals, and Business Apps
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            Our UX design follows the user&rsquo;s journey through each task. We prioritize layouts that make the next step obvious
                            and reduce errors.
                        </p>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Frontend work next steps">
                            <Link
                                href="/case-studies"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                See Published Work
                            </Link>
                            <Link
                                href={contactHref('project')}
                                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                Let’s Talk About Your Project
                                <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                            </Link>
                        </nav>
                    </div>
                    <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
                        <article>
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <Layers className="size-12 text-[#BD1550]" />
                            </div>
                            <h3
                                id="frontend-usability-review-heading"
                                className="font-header text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Find Where People Get Stuck
                            </h3>
                            <p className="text-gray-700">
                                We review how people use your current site or application and identify where they get stuck, make errors, or give up.
                            </p>
                        </article>
                        <article>
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <Monitor className="size-12 text-[#BD1550]" />
                            </div>
                            <h3
                                id="frontend-web-app-heading"
                                className="font-header text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Screens for Portals, Dashboards, and Internal Tools
                            </h3>
                            <p className="text-gray-700">
                                We build interfaces for customer portals, dashboards, and internal tools, connected to the APIs and data behind them.
                            </p>
                        </article>
                        <article>
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <Palette className="size-12 text-[#BD1550]" />
                            </div>
                            <h3
                                id="frontend-prototype-heading"
                                className="font-header text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Clickable Prototypes You Can Test
                            </h3>
                            <p className="text-gray-700">
                                Before development, you and a few of your users can click through the main flows, so problems surface while they are
                                still easy to change.
                            </p>
                        </article>
                        <article>
                            <div className="mb-5 md:mb-6" aria-hidden="true">
                                <Lightbulb className="size-12 text-[#BD1550]" />
                            </div>
                            <h3
                                id="frontend-new-interface-heading"
                                className="font-header text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                A New Site or App From Sketch to Launch
                            </h3>
                            <p className="text-gray-700">
                                For a new website or app, we turn your requirements into wireframes, a visual design, and a working interface.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
