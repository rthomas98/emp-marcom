import { Link } from '@inertiajs/react';

export function MvpApproach() {
    return (
        <section id="mvp-approach" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mvp-approach-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <figure className="order-2 md:order-1">
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
                            className="rounded-image w-full object-cover"
                            alt="Designers and developers collaborating in an office"
                            width="800"
                            height="600"
                            loading="lazy"
                        />
                    </figure>
                    <div className="order-1 md:order-2">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">User-Centered Design</p>
                        <h2 id="mvp-approach-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Design the First Version Around Its Users
                        </h2>
                        <p className="mb-6 text-gray-700 md:mb-8 md:text-lg">
                            Screens and flows are designed around the people who will use them, then refined with their feedback before and during the
                            build.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <article aria-labelledby="mvp-approach-user-focused-heading">
                                <h3
                                    id="mvp-approach-user-focused-heading"
                                    className="font-header text-primary mb-3 text-xl leading-[1.4] font-bold md:mb-4 md:text-2xl"
                                >
                                    User Focused
                                </h3>
                                <p className="text-gray-700">Screens and flows built around the jobs your users need to get done.</p>
                            </article>
                            <article aria-labelledby="mvp-approach-agile-heading">
                                <h3
                                    id="mvp-approach-agile-heading"
                                    className="font-header text-primary mb-3 text-xl leading-[1.4] font-bold md:mb-4 md:text-2xl"
                                >
                                    Agile Approach
                                </h3>
                                <p className="text-gray-700">
                                    Short build cycles that take in user feedback and keep the release focused on what users need.
                                </p>
                            </article>
                        </div>
                        <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="MVP approach next steps">
                            <Link
                                href="/services"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                            >
                                View Our Services
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
