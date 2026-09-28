import { Link } from '@inertiajs/react';

export function SolutionsOverview() {
    return (
        <section id="solutions-overview" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="solutions-overview-heading">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Where to start</p>
                        <h2
                            id="solutions-overview-heading"
                            className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Start With the Work You Need Done
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            Pick the area closest to your project. Each links to a page with examples and more detail.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <article
                            className="grid grid-cols-1 rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 sm:row-span-1 sm:grid-cols-2"
                            aria-labelledby="overview-software-heading"
                        >
                            <div className="flex flex-1 flex-col justify-center p-6">
                                <div>
                                    <p className="text-accent-pink mb-2 text-sm font-semibold">Custom software</p>
                                    <h3 id="overview-software-heading" className="text-primary mb-2 text-xl font-bold md:text-2xl">
                                        Build or Replace Business Software
                                    </h3>
                                    <p className="text-gray-700">
                                        New applications built around how your business works, or repairs and replacements for software that no longer
                                        fits.
                                    </p>
                                    <Link
                                        href="/solutions/software-development-design"
                                        className="text-primary hover:text-accent-pink mt-4 inline-flex items-center"
                                    >
                                        Explore Custom Software Development
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-gray-50 p-4">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                                    alt="Developers reviewing code together"
                                    className="h-full w-full rounded-md object-cover"
                                    loading="lazy"
                                    width="1024"
                                    height="1024"
                                />
                            </div>
                        </article>
                        <article
                            className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm"
                            aria-labelledby="overview-design-heading"
                        >
                            <div className="flex flex-col justify-center p-6">
                                <div>
                                    <p className="text-accent-pink mb-2 text-sm font-semibold">Design</p>
                                    <h3 id="overview-design-heading" className="text-primary mb-2 text-xl font-bold md:text-2xl">
                                        Make Screens Easier to Use
                                    </h3>
                                    <p className="text-gray-700">
                                        UX/UI design and frontend work for websites and apps, so customers and staff can find what they need and
                                        finish tasks.
                                    </p>
                                    <Link
                                        href="/solutions/frontend-development-uxui-design"
                                        className="text-primary hover:text-accent-pink mt-4 inline-flex items-center"
                                    >
                                        See Frontend & UX/UI Design
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-gray-50 p-4">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
                                    alt="Web developers working at their desks"
                                    className="h-full w-full rounded-md object-cover"
                                    loading="lazy"
                                    width="1024"
                                    height="1024"
                                />
                            </div>
                        </article>
                        <article
                            className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm"
                            aria-labelledby="overview-integration-heading"
                        >
                            <div className="flex flex-col justify-center p-6">
                                <div>
                                    <p className="text-accent-pink mb-2 text-sm font-semibold">Integration</p>
                                    <h3 id="overview-integration-heading" className="text-primary mb-2 text-xl font-bold md:text-2xl">
                                        Connect Your Systems
                                    </h3>
                                    <p className="text-gray-700">
                                        APIs and integrations that move data between the tools you already use, so your team is not copying it by
                                        hand.
                                    </p>
                                    <Link
                                        href="/solutions/backend-api-development"
                                        className="text-primary hover:text-accent-pink mt-4 inline-flex items-center"
                                    >
                                        See Backend & API Development
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center bg-gray-50 p-4">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png"
                                    alt="Programmer working at a computer"
                                    className="w-full rounded-md object-cover"
                                    loading="lazy"
                                    width="1024"
                                    height="1024"
                                />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
