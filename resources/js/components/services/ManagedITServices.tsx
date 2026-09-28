'use client';

export function ManagedITServices() {
    return (
        <section id="managed-it-services" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="it-services-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <header className="mb-12 text-center md:mb-18 lg:mb-20">
                        <div className="mx-auto w-full max-w-3xl">
                            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Day-to-Day Support</p>
                            <h2 id="it-services-heading" className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
                                How Requests Work
                            </h2>
                            <p className="md:text-md text-gray-700">
                                Support is remote, and Robert handles requests directly. Your staff report an issue, it is recorded and worked on, and
                                anything that needs a vendor or specialist is escalated to them.
                            </p>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="services-tracking-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_Startup_Meeting_Room_Team_of_African_AmericanEnt_8f1d3e7c-ba74-4a68-a1d4-1f2c469b01fd_0.png"
                                    alt="Illustration of people meeting around a table in a conference room"
                                    className="rounded-image"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="services-tracking-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Issue Tracking and Prevention
                            </h3>
                            <p className="text-gray-700">
                                Every request is recorded against the system and user it affects, which makes repeat problems visible and easier to
                                prevent.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="services-troubleshooting-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_developer_Software_development_te_a1893dc1-71a2-4688-b1dc-e38c62c215f0.png"
                                    alt="Developer working at a computer"
                                    className="rounded-image"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="services-troubleshooting-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Troubleshooting and Escalation
                            </h3>
                            <p className="text-gray-700">
                                We troubleshoot devices, accounts, and workplace systems, and bring in the right vendor or specialist when a problem
                                sits with them.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="services-staff-heading">
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src="/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png"
                                    alt="Illustration of people having a discussion in a modern office"
                                    className="rounded-image"
                                    width="400"
                                    height="300"
                                    loading="lazy"
                                />
                            </figure>
                            <h3
                                id="services-staff-heading"
                                className="mb-5 text-2xl font-bold text-[#1F1946] md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Authorized Contacts
                            </h3>
                            <p className="text-gray-700">
                                Requests such as new accounts or access changes come from the people you name, so changes are approved before they are
                                made.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
