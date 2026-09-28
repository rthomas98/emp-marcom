import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function BackendSolutions() {
    return (
        <section id="backend-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="backend-solutions-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">What We Build and Repair</p>
                    <h2 id="backend-solutions-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        The Code and Connections Behind Your Software
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        The back end holds your business rules, your data, and the connections to your other systems. When it works well, staff spend
                        less time re-entering data and waiting on slow screens. We design server-side logic for new applications and repair existing
                        code that has become slow, brittle, or hard to change.
                    </p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                    <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Server-Side Logic</p>
                                <h3
                                    id="backend-logic-heading"
                                    className="font-header text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Handle Approvals, Permissions, and Automated Tasks
                                </h3>
                                <p className="text-gray-700">
                                    We implement the validation, workflows, permissions, and background jobs your application depends on, whether we
                                    are extending an existing codebase or building a new service.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link href="/solutions" className="inline-flex items-center text-[#BD1550] hover:underline">
                                    See All Solutions
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                        <figure className="flex size-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                                alt="Designers and developers collaborating"
                                className="size-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                    </article>
                    <article className="grid auto-cols-fr grid-cols-1 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white sm:grid-cols-2 lg:col-span-2">
                        <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Integration</p>
                                <h3
                                    id="backend-integration-heading"
                                    className="font-header text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Connect Your CRM, Finance, and Operations Systems
                                </h3>
                                <p className="text-gray-700">
                                    We connect CRM, finance, operations, reporting, and customer systems so a record entered once shows up where it is
                                    needed. When a sync fails, it retries and alerts someone instead of failing silently.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link href={contactHref('project')} className="inline-flex items-center text-[#BD1550] hover:underline">
                                    Discuss an Integration
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                        <figure className="flex size-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                                alt="Developers working in a software office"
                                className="size-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                    </article>
                </div>
            </div>
        </section>
    );
}
