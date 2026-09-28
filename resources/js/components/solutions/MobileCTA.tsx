import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function MobileCTA() {
    return (
        <section id="mobile-cta" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-cta-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <header>
                            <h2 id="mobile-cta-heading" className="text-primary mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-6xl">
                                Tell Us Who Will Use the App and What They Need to Do
                            </h2>
                        </header>
                        <p className="md:text-md text-gray-700">
                            Tell us who will use the app, what they need to do, and the systems it has to connect to. We normally reply within one
                            business day and can help you choose the right mobile approach and plan who will support the app after launch.
                        </p>
                        <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Mobile call to action">
                            <Link
                                href={contactHref('new-project')}
                                className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                            >
                                Tell Us About Your App
                            </Link>
                            <Link
                                href={contactHref('project')}
                                className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-white px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                            >
                                Discuss an Existing App
                            </Link>
                        </nav>
                    </div>
                    <figure>
                        <img
                            src="/images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_1.png"
                            className="w-full rounded-lg object-cover"
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
