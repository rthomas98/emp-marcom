import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function SoftwareDevelopmentCTA() {
    return (
        <section id="software-development-cta" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="software-cta-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h2 id="software-cta-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Tell Us What the Software Needs to Do
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            Describe the application you want to build, or the system that is causing problems today. We normally reply within one
                            business day.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Link
                                href={contactHref('project')}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                Let’s Talk About Your Project
                            </Link>
                            <Link
                                href="/case-studies"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_97c07372-4e6a-4c97-90ff-cae9da9aaf12.png"
                            className="w-full rounded-lg object-cover"
                            alt="Professionals collaborating at a table"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
