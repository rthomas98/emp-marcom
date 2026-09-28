import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Code, PenTool, Search } from 'lucide-react';

export function DevelopmentProcessOverview() {
    return (
        <section id="development-process-overview" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="development-steps-heading">
            <div className="relative z-10 container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-white md:mb-4">Three steps from first call to working software</p>
                        <h2 id="development-steps-heading" className="font-header text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Our Software Development Process
                        </h2>
                    </div>
                    <div>
                        <p className="text-white/90 md:text-lg">
                            Every project is planned before code is written. We agree on the business problem, the scope, and the order of work, then
                            build in short iterations so you can review progress and adjust priorities along the way.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    <div>
                        <div className="mb-5 md:mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                <Search className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                        </div>
                        <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            Step 1: Initial Consultation and Discovery
                        </h3>
                        <p className="text-white/90">
                            We learn your goals, the workflow the software supports, and any existing systems, data, or vendors involved.
                        </p>
                    </div>
                    <div>
                        <div className="mb-5 md:mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                <PenTool className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                        </div>
                        <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            Step 2: Design and Architecture Planning
                        </h3>
                        <p className="text-white/90">
                            We produce a design and technical plan that covers screens, data, integrations, and the sequence of delivery.
                        </p>
                    </div>
                    <div>
                        <div className="mb-5 md:mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                <Code className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                        </div>
                        <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            Step 3: Development and Iteration
                        </h3>
                        <p className="text-white/90">
                            We develop in agile sprints, sharing working software regularly so feedback shapes the next round of work.
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
                    <Link
                        href={contactHref('project')}
                        className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#BD1550] focus:outline-none"
                    >
                        Let’s Talk About Your Project
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                    className="h-full w-full object-cover"
                    alt=""
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[#BD1550]/80" />
            </div>
        </section>
    );
}
