import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function Innovation() {
    return (
        <section id="innovation" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="innovation-heading">
            <div className="relative z-10 container mx-auto">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-white md:mb-4">How We Build</p>
                        <h2 id="innovation-heading" className="font-header text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Modern Tools, Applied Where They Help
                        </h2>
                    </div>
                    <div>
                        <p className="mb-6 text-white/80 md:mb-8 md:text-lg">
                            We use current development practices and tools where they solve a real problem for your business, not for their own sake.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
                            <article aria-labelledby="agile-development-heading">
                                <h3 id="agile-development-heading" className="text-md mb-3 leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                                    Agile Development
                                </h3>
                                <p className="text-white/80">
                                    We work in short cycles, so you can review progress and adjust priorities as the project moves.
                                </p>
                            </article>
                            <article aria-labelledby="tech-integration-heading">
                                <h3 id="tech-integration-heading" className="text-md mb-3 leading-[1.4] font-bold text-white md:mb-4 md:text-xl">
                                    Tech Integration
                                </h3>
                                <p className="text-white/80">
                                    We connect new tools to the systems you already use, so your team is not switching between disconnected apps.
                                </p>
                            </article>
                        </div>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Innovation information links">
                            <Link
                                href="/services/software-engineering-it-consulting"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 focus:outline-none"
                                aria-label="Explore our software engineering services"
                            >
                                Explore Engineering Services
                            </Link>
                            <Link
                                href="/contact"
                                className="text-accent-yellow inline-flex items-center hover:text-white"
                                aria-label="Contact us about your innovation needs"
                            >
                                Contact Us
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <img
                    src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                    className="h-full w-full object-cover"
                    alt=""
                    loading="lazy"
                    width="1920"
                    height="1080"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
        </section>
    );
}
