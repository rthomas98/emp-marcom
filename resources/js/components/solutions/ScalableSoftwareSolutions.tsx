import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Code, Database } from 'lucide-react';

export function ScalableSoftwareSolutions() {
    return (
        <section
            id="scalable-software-solutions"
            className="bg-[#BD1550] px-[5%] py-16 text-white md:py-24 lg:py-28"
            aria-labelledby="scalable-software-heading"
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Design and architecture together</p>
                        <h2 id="scalable-software-heading" className="font-header mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Software That Can Grow With Your Business
                        </h2>
                        <p className="mb-6 md:mb-8 md:text-lg">
                            We plan the user experience and the architecture at the same time. That keeps the software easy for people to use and
                            gives it a structure that can take on more users, data, and features later.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <div>
                                <div className="mb-3 md:mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                        <Code className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                </div>
                                <h3 className="mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl">Interface Design</h3>
                                <p className="text-white/90">Screens and flows designed around the tasks people need to complete.</p>
                            </div>
                            <div>
                                <div className="mb-3 md:mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                        <Database className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                </div>
                                <h3 className="mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl">Application Architecture</h3>
                                <p className="text-white/90">
                                    A data model, services, and integrations structured so the software can be extended safely.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Link
                                href={contactHref('new-project')}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#BD1550] focus:outline-none"
                            >
                                Plan a New Application
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_a57b60ac-00f5-4255-937e-d7408bd3b519.png"
                            className="w-full rounded-lg object-cover"
                            alt="Web developers working at their desks"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
