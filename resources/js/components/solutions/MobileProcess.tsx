export function MobileProcess() {
    return (
        <section id="mobile-process" className="bg-[#BD1550] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-process-heading">
            <div className="container mx-auto">
                <header className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-white md:mb-4">How Delivery Works</p>
                        <h2 id="mobile-process-heading" className="text-5xl font-bold text-white md:text-7xl lg:text-6xl">
                            Confirm the App Is Needed Before Building It
                        </h2>
                    </div>
                    <div>
                        <p className="md:text-md text-white">
                            The goal is the simplest dependable way to support the work, not an app for its own sake. We plan the app, its connections
                            to your other systems, and its security together.
                        </p>
                    </div>
                </header>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    <article aria-labelledby="mobile-process-fit-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_951e0ed1-e092-48e3-802a-9bc4e19c7af2.png"
                                alt="A group of developers talking in an office"
                                className="aspect-video h-auto w-full rounded-lg object-cover"
                                width="400"
                                height="225"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="mobile-process-fit-heading"
                            className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            Review the Work and the Users
                        </h3>
                        <p className="text-white">
                            Define users, frequency, device capabilities, connectivity, security, and the systems the app must reach.
                        </p>
                    </article>
                    <article aria-labelledby="mobile-process-delivery-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_bd469912-996e-4571-8b24-605888555825.png"
                                alt="Developers standing together to review a project"
                                className="aspect-video h-auto w-full rounded-lg object-cover"
                                width="400"
                                height="225"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="mobile-process-delivery-heading"
                            className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            Build the App and Its Connections
                        </h3>
                        <p className="text-white">
                            Build the experience and the supporting APIs, identity, data movement, and administrative controls.
                        </p>
                    </article>
                    <article aria-labelledby="mobile-process-release-heading">
                        <figure className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Web_Developers_standing_in_a_grou_c2c76405-7d19-4853-a0f4-468f736d29b6.png"
                                alt="Illustration of developers meeting as a group"
                                className="aspect-video h-auto w-full rounded-lg object-cover"
                                width="400"
                                height="225"
                                loading="lazy"
                            />
                        </figure>
                        <h3
                            id="mobile-process-release-heading"
                            className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            Plan the Release
                        </h3>
                        <p className="text-white">Set up testing, store submission, and a way for early users to report problems.</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
