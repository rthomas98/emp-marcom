import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function MobileCrossPlatform() {
    return (
        <section id="mobile-cross-platform" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-cross-platform-heading">
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
                    <div>
                        <h2
                            id="mobile-cross-platform-heading"
                            className="font-header text-primary text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl"
                        >
                            Build a Mobile App for Your Customers or Your Team
                        </h2>
                    </div>
                    <div>
                        <p className="text-gray-700 md:text-lg">
                            An app can serve your customers, give employees the tools they need on the job, or bring an existing web system to phones
                            and tablets.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
                    <div className="w-full">
                        <div className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_008ed057-ce50-4832-bfc4-21051acf71dd.png"
                                alt="Developers working together in an office"
                                className="rounded-image h-auto w-full"
                                loading="lazy"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <h3 className="text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">React Native Apps for iPhone and Android</h3>
                        <p className="text-gray-700">One codebase for iPhone and Android, which keeps builds and updates simpler to manage.</p>
                    </div>
                    <div className="w-full">
                        <div className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png"
                                alt="Developer writing code at a desk"
                                className="rounded-image h-auto w-full"
                                loading="lazy"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <h3 className="text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Progressive Web Apps</h3>
                        <p className="text-gray-700">An installable web app for cases where you do not need an app store listing.</p>
                    </div>
                    <div className="w-full">
                        <div className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a696d0db-d515-4354-ae04-969316179fc9.png"
                                alt="Designers and developers collaborating"
                                className="rounded-image h-auto w-full"
                                loading="lazy"
                                width="1024"
                                height="1024"
                            />
                        </div>
                        <h3 className="text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Apps Planned Around the Work</h3>
                        <p className="text-gray-700">Customer apps and employee tools planned around what people need to do on their phones.</p>
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-18 lg:mt-20">
                    <Link
                        href="/solutions/mobile-cross-platform-development"
                        className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Explore Mobile & Cross-Platform Development
                    </Link>
                    <Link href={contactHref('new-project')} className="text-primary hover:text-accent-pink inline-flex items-center">
                        Tell Us About Your App
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
