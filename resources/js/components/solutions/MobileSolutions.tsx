import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function MobileSolutions() {
    return (
        <section id="mobile-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-solutions-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">New and Existing Apps</p>
                        <h2
                            id="mobile-solutions-heading"
                            className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Mobile Apps Built Around the Work They Support
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            We build new apps for iOS and Android and take over existing apps that have become difficult to maintain because of
                            platform divergence, outdated dependencies, performance issues, or weak release practices. Either way, we start by
                            defining the users, the devices they rely on, their connectivity, and the systems the app has to reach.
                        </p>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Mobile solutions next steps">
                            <Link
                                href={contactHref('project')}
                                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                            >
                                Discuss an Existing App
                            </Link>
                        </nav>
                    </div>
                    <figure>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_2.png"
                            className="rounded-image w-full object-cover"
                            alt="A mobile developer working on an app"
                            width="800"
                            height="600"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
