import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function CustomSoftwareSolutions() {
    return (
        <section id="custom-software-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="custom-software-heading">
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">New builds and existing systems</p>
                        <h2 id="custom-software-heading" className="font-header text-primary text-4xl font-bold md:text-5xl lg:text-6xl">
                            Software Built Around How Your Business Works
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-700 md:text-lg">
                            Some clients come to us with a new application in mind. Others rely on software that still runs but has become risky to
                            change. We take on both kinds of work.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    <article aria-labelledby="custom-dev-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_Africa_American_Software_developers_discussing_abo_61339e21-6c03-4f31-9813-6dafd2b02df0.png"
                                alt="Software developers talking through a project"
                                className="h-auto w-full rounded-lg"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </figure>
                        <h3 id="custom-dev-heading" className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            New Custom Applications
                        </h3>
                        <p className="text-gray-700">
                            Applications for workflows that off-the-shelf tools do not handle well, from internal tools to customer-facing software.
                        </p>
                    </article>
                    <article aria-labelledby="quality-efficiency-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_1e5c5452-6ee0-4eb9-aead-c327f906cadb.png"
                                alt="Designers and developers working together"
                                className="h-auto w-full rounded-lg"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="quality-efficiency-heading"
                            className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            Fixing Fragile Software
                        </h3>
                        <p className="text-gray-700">
                            When an application is fragile, we address urgent defects, improve visibility, document critical paths, and reduce
                            dependence on undocumented knowledge.
                        </p>
                    </article>
                    <article aria-labelledby="scalable-solutions-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_93d7f90a-01e6-4bdf-8982-21d4887e2a9d.png"
                                alt="People planning work together at a table"
                                className="h-auto w-full rounded-lg"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="scalable-solutions-heading"
                            className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            A Plan to Repair, Replace, or Rebuild
                        </h3>
                        <p className="text-gray-700">
                            We compare repair, staged replacement, and a rebuild, including cost, risk, and order of work, so you can choose the next
                            step.
                        </p>
                    </article>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20" role="navigation" aria-label="Custom software actions">
                    <Link
                        href={contactHref('project')}
                        className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Let’s Talk About Your Project
                    </Link>
                    <Link
                        href="/solutions"
                        className="text-primary hover:text-primary/80 inline-flex h-10 items-center justify-center text-sm font-medium transition-colors"
                    >
                        Compare All Solutions
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
