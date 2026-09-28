import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function BackendAPI() {
    return (
        <section id="backend-api" className="bg-[#BD1550] px-[5%] py-16 text-white md:py-24 lg:py-28" aria-labelledby="backend-api-heading">
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-white md:mb-4">Back-end, APIs, and databases</p>
                        <h2 id="backend-api-heading" className="font-header text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Connect Your Systems and Keep Your Data in Order
                        </h2>
                    </div>
                    <div>
                        <p className="text-white/90 md:text-lg">
                            Less time copying data between tools, and records your team can trust. We build and repair the server-side code, APIs, and
                            databases that make that work.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    <article aria-labelledby="backend-services-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png"
                                alt="Developers working together at their computers"
                                className="rounded-image h-auto w-full"
                                width="1024"
                                height="1024"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="backend-services-heading"
                            className="mb-5 text-2xl font-bold break-words text-white md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl xl:text-4xl"
                        >
                            Back-End Development
                        </h3>
                        <p className="text-white/90">
                            Server-side code for new applications, or changes to an existing back end as your business adds users, locations, or
                            features.
                        </p>
                    </article>
                    <article aria-labelledby="api-integrations-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_a57b60ac-00f5-4255-937e-d7408bd3b519.png"
                                alt="Web developers working in an office"
                                className="rounded-image h-auto w-full"
                                width="1024"
                                height="1024"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="api-integrations-heading"
                            className="mb-5 text-2xl font-bold break-words text-white md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl xl:text-4xl"
                        >
                            API Integrations
                        </h3>
                        <p className="text-white/90">APIs that let your CRM, website, and internal tools share the same customer and order data.</p>
                    </article>
                    <article aria-labelledby="database-management-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png"
                                alt="Programmer working at a computer"
                                className="rounded-image h-auto w-full"
                                width="1024"
                                height="1024"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="database-management-heading"
                            className="mb-5 text-2xl font-bold break-words text-white md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl xl:text-4xl"
                        >
                            Database Design and Cleanup
                        </h3>
                        <p className="text-white/90">
                            New databases, cleanup of messy records, and fixes for slow queries in the databases your applications already use.
                        </p>
                    </article>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
                    <Link
                        href="/solutions/backend-api-development"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
                    >
                        See Backend & API Development
                    </Link>
                    <Link href={contactHref('project')} className="inline-flex items-center text-white hover:text-white/80">
                        Discuss Your Systems
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
