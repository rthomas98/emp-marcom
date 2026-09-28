import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Smartphone, Zap } from 'lucide-react';

export function ProgressiveWebApps() {
    return (
        <section id="progressive-web-apps" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="progressive-web-apps-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Progressive web apps</p>
                        <h2
                            id="progressive-web-apps-heading"
                            className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            App-Like Experiences That Run in the Browser
                        </h2>
                        <p className="mb-6 text-gray-700 md:mb-8 md:text-lg">
                            A progressive web app can be installed on a phone or desktop without going through an app store. Depending on scope, some
                            features can keep working on an unreliable connection. We help you decide whether a PWA fits your customers and workflow
                            before anything is built.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <div>
                                <div className="mb-3 md:mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                                        <Zap className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                                    </div>
                                </div>
                                <h3 className="text-primary mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl">Performance</h3>
                                <p className="text-gray-700">
                                    Caching and lean front-end code keep pages quick to load and responsive to taps and clicks.
                                </p>
                            </div>
                            <div>
                                <div className="mb-3 md:mb-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                                        <Smartphone className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                                    </div>
                                </div>
                                <h3 className="text-primary mb-3 text-lg leading-[1.4] font-bold md:mb-4 md:text-xl">Cross-Platform Compatibility</h3>
                                <p className="text-gray-700">
                                    One codebase serves phones, tablets, and desktops, so customers get a consistent experience.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Link
                                href={contactHref('new-project')}
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                            >
                                Tell Us About Your App
                            </Link>
                            <Link
                                href="/solutions/mobile-cross-platform-development"
                                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/80"
                            >
                                Compare Mobile App Options
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
                            className="rounded-image w-full object-cover"
                            alt="Web developers working at computers"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
