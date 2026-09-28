'use client';

export function EngineeringSecurity() {
    return (
        <section id="engineering-security" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="engineering-security-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Security Work</p>
                    <h2 id="engineering-security-heading" className="mb-5 text-5xl font-bold text-[#1F1946] md:mb-6 md:text-6xl lg:text-7xl">
                        Security Built Into Everyday Engineering
                    </h2>
                    <p className="md:text-md text-gray-700">
                        Security work is part of maintaining a system, not a separate project that happens once. We review access, dependencies,
                        configuration, and known weak points, fix the highest-risk items first, and keep a record of what changed and what still needs
                        attention.
                    </p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
                    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Web_developers_using_a_computer_t_be2a97fe-d00e-41c1-ad43-4bffd775a774.png"
                                alt="Two web developers working together at a computer"
                                className="h-64 w-full object-cover"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Review</p>
                                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Security Review
                                </h3>
                                <p className="text-gray-700">
                                    We look at who can access what, outdated libraries, exposed configuration, and how secrets are stored, then rank
                                    what to fix.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_An_African_American_developer_holding_his_computer_160e36fc-9208-4e49-8166-d14de5aa74b0.png"
                                alt="Developer holding a laptop"
                                className="h-64 w-full object-cover"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Maintenance</p>
                                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Updates and Monitoring
                                </h3>
                                <p className="text-gray-700">
                                    Dependency updates, patches, logs, and alerts are handled as part of regular maintenance, alongside feature work
                                    and releases.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <div className="flex w-full flex-col items-center justify-center self-start">
                            <img
                                src="/images/site-images/rob_thomas23_Laptop_Standing_on_a_Desk_with_a_Video_Streaming_4cf335b7-cb95-43d9-8eff-5e907d49c3f4_3.png"
                                alt="Laptop open on a desk"
                                className="h-64 w-full object-cover"
                                width="600"
                                height="400"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <p className="mb-2 font-semibold text-[#BD1550]">Planning</p>
                                <h3 className="mb-3 text-2xl font-bold text-[#1F1946] md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    Security in the Roadmap
                                </h3>
                                <p className="text-gray-700">
                                    Security gaps are tracked in the same prioritized roadmap as other technical work, so leadership can see the risk
                                    and decide when to address it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
