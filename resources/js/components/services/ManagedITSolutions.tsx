'use client';

export function ManagedITSolutions() {
    return (
        <section id="managed-it-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="it-solutions-heading">
            <div className="container mx-auto">
                <header className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-lg text-center">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Before Service Begins</p>
                        <h2 id="it-solutions-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                            What We Agree Before Support Starts
                        </h2>
                        <p className="md:text-md text-gray-700">
                            Before support starts, we write down what is covered, what is not, and how issues are escalated.
                        </p>
                    </div>
                </header>
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <article
                            className="rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 sm:row-span-1 sm:grid sm:grid-cols-2"
                            aria-labelledby="solutions-coverage-heading"
                        >
                            <div className="flex flex-1 flex-col justify-center p-6">
                                <div>
                                    <p className="mb-2 text-sm font-semibold text-[#BD1550]">Scope</p>
                                    <h3 id="solutions-coverage-heading" className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                                        Coverage and Exclusions
                                    </h3>
                                    <p className="text-gray-700">
                                        The supported users, devices, systems, locations, and hours are listed, along with what falls outside the
                                        engagement.
                                    </p>
                                </div>
                            </div>
                            <figure className="flex items-center justify-center">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
                                    alt="Business professionals meeting in a modern office"
                                    className="h-full w-full object-cover"
                                    width="500"
                                    height="400"
                                    loading="lazy"
                                />
                            </figure>
                        </article>
                        <article
                            className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm"
                            aria-labelledby="solutions-guidance-heading"
                        >
                            <div className="flex flex-col justify-center p-6">
                                <div>
                                    <p className="mb-2 text-sm font-semibold text-[#BD1550]">Staff Guidance</p>
                                    <h3 id="solutions-guidance-heading" className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                                        Practical Training
                                    </h3>
                                    <p className="text-gray-700">
                                        Short, practical guidance helps your team handle common access and device questions and report issues clearly.
                                    </p>
                                </div>
                            </div>
                            <figure className="flex items-center justify-center">
                                <img
                                    src="/images/site-images/rob_thomas23_The_key_to_success_starts_with_how_you_define_it_a50e51ce-f9d7-41f8-b43e-0a3982ab1dbc_1.png"
                                    alt="Colleagues working together at a table"
                                    className="w-full object-cover"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                        </article>
                        <article
                            className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm"
                            aria-labelledby="solutions-escalation-heading"
                        >
                            <div className="flex flex-col justify-center p-6">
                                <div>
                                    <p className="mb-2 text-sm font-semibold text-[#BD1550]">Escalation</p>
                                    <h3 id="solutions-escalation-heading" className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                                        Escalation Paths and Service Targets
                                    </h3>
                                    <p className="text-gray-700">
                                        Escalation contacts and service targets are set together after reviewing your systems, vendors, and business
                                        hours.
                                    </p>
                                </div>
                            </div>
                            <figure className="flex items-center justify-center">
                                <img
                                    src="/images/site-images/rob_thomas23_Two_African_American_business_professionals_shakin_192a73a1-6814-409d-9214-6471b0199cb4.png"
                                    alt="Two business professionals shaking hands"
                                    className="w-full object-cover"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
