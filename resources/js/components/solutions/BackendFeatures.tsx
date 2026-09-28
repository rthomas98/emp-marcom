export function BackendFeatures() {
    return (
        <section id="backend-features" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="backend-features-heading">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="max-w-3xl">
                        <h2
                            id="backend-features-heading"
                            className="font-header text-primary text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl"
                        >
                            What You Get From Back-End Work
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    <article className="flex flex-col">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
                                alt="Web developers working in an office"
                                className="rounded-image aspect-[4/3] h-auto w-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                        <h3 id="backend-api-features-heading" className="font-header text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                            APIs Your Apps and Partners Can Connect To
                        </h3>
                        <p className="text-gray-700">
                            Documented APIs your applications, vendors, and partners can connect to without guesswork, with authentication,
                            versioning, error handling, and tests included.
                        </p>
                    </article>
                    <article className="flex flex-col">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png"
                                alt="Developers working in a software office"
                                className="rounded-image aspect-[4/3] h-auto w-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                        <h3 id="backend-custom-systems-heading" className="font-header text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                            Built Around How Your Business Works
                        </h3>
                        <p className="text-gray-700">
                            Back-end systems that follow your actual workflow, including the approvals and exceptions staff now handle by hand.
                        </p>
                    </article>
                    <article className="flex flex-col">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_074e0918-602f-489f-a994-549f9d1f62fa.png"
                                alt="Designers and developers collaborating"
                                className="rounded-image aspect-[4/3] h-auto w-full object-cover"
                                width="400"
                                height="300"
                                loading="lazy"
                            />
                        </figure>
                        <h3 id="backend-data-security-heading" className="font-header text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                            Protected Data Your Team Can Reach
                        </h3>
                        <p className="text-gray-700">
                            Access controls, encryption, and monitoring that limit who can see and change your data, while keeping it available to the
                            people who need it.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
