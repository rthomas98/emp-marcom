import { Check } from 'lucide-react';

export function SoftwareSolutionsBenefits() {
    return (
        <section id="software-solutions-benefits" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="software-benefits-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
                    <div className="order-2 md:order-1">
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_c3582560-0e6b-4b76-b6b8-58df2a07b29e.png"
                            className="w-full rounded-lg object-cover"
                            alt="Developers discussing work at a desk"
                            loading="lazy"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2
                            id="software-benefits-heading"
                            className="font-header text-primary mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl"
                        >
                            What You Have When the Work Is Done
                        </h2>
                        <p className="mb-5 text-gray-700 md:mb-6 md:text-lg">
                            The goal is software your business can depend on and your team can keep improving.
                        </p>
                        <div className="grid grid-cols-1 gap-4 py-2">
                            <div className="flex self-start">
                                <div className="mr-4 flex-none self-start">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#BD1550]">
                                        <Check className="h-4 w-4 text-white" aria-hidden="true" />
                                    </div>
                                </div>
                                <p className="text-gray-700">Software that fits the workflow it supports, instead of staff working around it.</p>
                            </div>
                            <div className="flex self-start">
                                <div className="mr-4 flex-none self-start">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#BD1550]">
                                        <Check className="h-4 w-4 text-white" aria-hidden="true" />
                                    </div>
                                </div>
                                <p className="text-gray-700">A written summary of what was done and what should come next.</p>
                            </div>
                            <div className="flex self-start">
                                <div className="mr-4 flex-none self-start">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#BD1550]">
                                        <Check className="h-4 w-4 text-white" aria-hidden="true" />
                                    </div>
                                </div>
                                <p className="text-gray-700">Clear documentation of critical paths, so knowledge does not depend on one person.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
