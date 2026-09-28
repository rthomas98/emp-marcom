import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function SoftwareDevelopmentProcess() {
    return (
        <section id="software-development-process" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="software-process-heading">
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">How a project runs</p>
                        <h2 id="software-process-heading" className="font-header text-primary text-4xl font-bold md:text-5xl lg:text-6xl">
                            One Senior Developer From Discovery to Deployment
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-700 md:text-lg">
                            You talk directly with Robert, who makes the technical decisions and explains the tradeoffs as the work moves forward.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    <div>
                        <div className="mb-6 aspect-[4/3] overflow-hidden md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
                                alt="Designers and developers reviewing work together"
                                className="h-full w-full rounded-lg object-cover"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            Discovery & Planning
                        </h3>
                        <p className="text-gray-700">
                            The developer who scopes the work stays on it. The scope separates urgent work from improvements that can wait.
                        </p>
                    </div>
                    <div>
                        <div className="mb-6 aspect-[4/3] overflow-hidden md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png"
                                alt="Developers collaborating at a shared screen"
                                className="h-full w-full rounded-lg object-cover"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            Design & Development
                        </h3>
                        <p className="text-gray-700">You review designs and working builds directly with the developer writing the code.</p>
                    </div>
                    <div>
                        <div className="mb-6 aspect-[4/3] overflow-hidden md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_f24157be-eed3-436d-bba7-665af5c670a7.png"
                                alt="Colleagues working together in an office"
                                className="h-full w-full rounded-lg object-cover"
                                loading="lazy"
                            />
                        </div>
                        <h3 className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                            Testing & Deployment
                        </h3>
                        <p className="text-gray-700">
                            The developer who builds the software also tests and deploys it, so knowledge is not lost in handoffs.
                        </p>
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
                    <Link
                        href={contactHref('consultation')}
                        className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Request a Consultation
                    </Link>
                    <Link
                        href="/company/about"
                        className="text-primary hover:text-primary/80 inline-flex h-10 items-center justify-center text-sm font-medium transition-colors"
                    >
                        About Empuls3
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
