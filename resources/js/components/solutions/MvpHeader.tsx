import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function MvpHeader() {
    return (
        <section id="mvp-header" className="px-[5%] py-12 md:py-16 lg:py-20" aria-labelledby="mvp-header-title">
            <div className="relative container mx-auto">
                <div className="relative z-10 flex min-h-[32rem] flex-col items-start justify-center p-8 md:min-h-[40rem] md:p-16">
                    <div className="w-full max-w-md">
                        <p className="mb-3 font-semibold text-white md:mb-4">MVP and Product Development</p>
                        <h1 id="mvp-header-title" className="font-header mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                            Build a First Version Your Customers Can Use
                        </h1>
                        <p className="text-white md:text-lg">
                            Empuls3 helps DFW businesses and funded teams test product ideas and build the first version. You work directly with
                            Robert, a senior developer, from defining the user and the problem through design, build, launch, and what to build next.
                        </p>
                    </div>
                    <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="MVP development next steps">
                        <Link
                            href={contactHref('new-project')}
                            className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                        >
                            Tell Us About Your Product
                        </Link>
                        <Link
                            href="/company/faqs"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
                        >
                            Review Engagement Questions
                        </Link>
                    </nav>
                </div>
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/site-images/rob_thomas23_African_American_People_working_in_big_modern_of_848a2004-ac77-47fe-9d58-52c599a75e0a_0.png"
                        className="size-full object-cover"
                        alt="People working together in a large, modern office"
                        width="1200"
                        height="800"
                    />
                    <div className="absolute inset-0 bg-[#1F1946]/70" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}
