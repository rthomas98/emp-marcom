import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function WebEcommerceHeader() {
    return (
        <section
            id="web-ecommerce-header"
            className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
            aria-labelledby="web-ecommerce-heading"
        >
            <div className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
                <h1 id="web-ecommerce-heading" className="font-header text-primary mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
                    Build a New Website or Modernize the One You Have
                </h1>
                <p className="text-gray-700 md:text-lg">
                    We design and build websites and e-commerce experiences for Dallas–Fort Worth businesses, whether you are launching something new
                    or replacing a site that is slow or difficult to manage. We plan each site around what customers need to find or buy and what your
                    team needs to update.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8" role="navigation" aria-label="Web and e-commerce development actions">
                    <Link
                        href={contactHref('project')}
                        className="inline-flex h-11 min-h-[44px] items-center justify-center rounded-md bg-[#BD1550] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                    >
                        Discuss Your Website Project
                    </Link>
                    <Link
                        href="/case-studies"
                        className="inline-flex h-11 min-h-[44px] items-center justify-center rounded-md border-2 border-[#BD1550] bg-transparent px-6 py-2.5 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                    >
                        See Published Work
                    </Link>
                </div>
            </div>
            <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0" aria-hidden="true">
                <div className="grid w-full grid-cols-2 gap-x-4">
                    <div className="animate-loop-vertically -mt-[120%] grid size-full columns-2 grid-cols-1 gap-4 self-center motion-reduce:animate-none!">
                        <div className="grid size-full grid-cols-1 gap-4">
                            <figure className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                                    alt=""
                                    width="400"
                                    height="480"
                                />
                            </figure>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_97c07372-4e6a-4c97-90ff-cae9da9aaf12.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="animate-loop-vertically-reverse grid size-full grid-cols-1 gap-4 motion-reduce:animate-none!">
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_97c07372-4e6a-4c97-90ff-cae9da9aaf12.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="grid size-full grid-cols-1 gap-4">
                            <div className="relative w-full pt-[120%]">
                                <img
                                    className="rounded-image absolute inset-0 size-full object-cover"
                                    src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
