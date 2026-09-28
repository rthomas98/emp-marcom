import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function WebEcommerceCTA() {
    return (
        <section id="web-ecommerce-cta" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="web-ecommerce-cta-heading">
            <div className="container mx-auto">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                    <div className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col justify-center bg-white p-8 md:p-12">
                            <div>
                                <h2
                                    id="web-ecommerce-cta-heading"
                                    className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                                >
                                    Tell Us About Your Website
                                </h2>
                                <p className="text-gray-700 md:text-lg">
                                    Share your current site if you have one, the audience you need to reach, and the business action the site should
                                    support. We normally reply within one business day.
                                </p>
                            </div>
                            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                                <Link
                                    href={contactHref('new-project')}
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                                >
                                    Plan a New Website
                                </Link>
                                <Link
                                    href={contactHref('project')}
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                                >
                                    Request a Website Review
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                src="/images/site-images/rob_thomas23_Africa_American_Software_developers_discussing_abo_61339e21-6c03-4f31-9813-6dafd2b02df0.png"
                                className="h-full w-full object-cover"
                                alt="Software developers talking through a project"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
