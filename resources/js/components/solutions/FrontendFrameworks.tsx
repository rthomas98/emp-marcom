import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function FrontendFrameworks() {
    return (
        <section id="frontend-frameworks" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-frameworks-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Frameworks</p>
                        <h2
                            id="frontend-frameworks-heading"
                            className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Built With React, Vue.js, or Angular
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            We choose the framework that fits your project, your team, and any existing code. The aim is code your team can keep
                            current: reusable components, a testable structure, and dependencies that are kept up to date.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Link
                                href="/solutions"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                See All Solutions
                            </Link>
                            <Link
                                href={contactHref('project')}
                                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                Discuss Your Frontend Project
                                <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__working_t_e54e2d34-af10-4785-8b30-bc46cef92038_0.png"
                            className="rounded-image aspect-[4/3] w-full object-cover"
                            alt="Developers working together"
                            width="600"
                            height="450"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
