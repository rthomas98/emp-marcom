import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function SoftwareDevelopmentHeader() {
    return (
        <section id="software-development-header" className="px-[5%] py-12 md:py-16 lg:py-20" aria-labelledby="software-development-heading">
            <div className="container mx-auto">
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <h1
                                id="software-development-heading"
                                className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                            >
                                Custom Software Development and Modernization
                            </h1>
                            <p className="text-gray-700 md:text-lg">
                                Empuls3 designs and builds custom software for Dallas–Fort Worth businesses, and repairs applications that have become
                                fragile, undocumented, or dependent on a disappearing vendor. Robert, an independent senior developer, works directly
                                with you on the front end, the back end, and the data behind them.
                            </p>
                            <div
                                className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
                                role="navigation"
                                aria-label="Software development actions"
                            >
                                <Link
                                    href={contactHref('new-project')}
                                    className="bg-primary hover:bg-primary/90 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                >
                                    Tell Us About Your App
                                </Link>
                                <Link
                                    href="/case-studies"
                                    className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                        <div className="flex h-full items-center justify-center">
                            <figure className="relative h-full w-full overflow-hidden rounded-r-lg">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                                    alt="Developers working at computers in a software office"
                                    className="h-full w-full object-cover"
                                    width="800"
                                    height="600"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
