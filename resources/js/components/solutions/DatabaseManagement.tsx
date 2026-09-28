import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function DatabaseManagement() {
    return (
        <section id="database-management" className="bg-[#1F1946] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="database-management-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Database Work</p>
                        <h2
                            id="database-management-heading"
                            className="font-header mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Fix Slow Databases and Move Data Safely
                        </h2>
                        <p className="mb-6 text-gray-300 md:mb-8 md:text-lg">
                            We assess slow databases, optimize queries, plan migrations, and improve security and observability. For a new
                            application, we design the schema around the records and reports your business needs. For an existing one, we agree on
                            timing and downtime requirements before changes begin.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <div>
                                <h3 className="font-header mb-3 text-lg leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                                    Speed Up Slow Queries and Reports
                                </h3>
                                <p className="text-gray-300">
                                    We review slow queries, indexes, and data access patterns, then fix the causes so pages, reports, and background
                                    jobs keep up as your data grows.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-header mb-3 text-lg leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                                    Keep Records Matching Across Systems
                                </h3>
                                <p className="text-gray-300">
                                    When several systems share the same customers, orders, or financial records, we define identifiers, ownership, and
                                    reconciliation so the records agree.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Database management actions">
                            <Link
                                href={contactHref('project')}
                                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F1946] focus:outline-none"
                            >
                                Request a Systems Review
                            </Link>
                            <Link href="/company/faqs" className="inline-flex items-center text-white hover:underline">
                                Read Common Questions
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <figure>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_a57b60ac-00f5-4255-937e-d7408bd3b519.png"
                            className="rounded-image w-full object-cover"
                            alt="Web developers working in an office"
                            width="600"
                            height="400"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
