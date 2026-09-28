import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function EcommercePlatforms() {
    return (
        <section
            id="ecommerce-platforms"
            className="bg-[#1F1946] px-[5%] py-16 text-white md:py-24 lg:py-28"
            aria-labelledby="ecommerce-platforms-heading"
        >
            <div className="container mx-auto">
                <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">E-commerce development</p>
                        <h2
                            id="ecommerce-platforms-heading"
                            className="font-header text-4xl leading-[1.2] font-bold text-white md:text-5xl lg:text-6xl"
                        >
                            Online Stores Built Around How You Sell
                        </h2>
                    </div>
                    <div>
                        <p className="text-white/90 md:text-lg">
                            Whether you are opening an online store or fixing one that is hard to run, we work on the details that affect customers
                            and staff: product pages, checkout, payment gateways, and inventory management. We work on platforms such as Shopify,
                            WordPress, and custom builds, and choose based on what your team can operate after launch.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <Link
                                href={contactHref('new-project')}
                                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F1946] focus:outline-none"
                            >
                                Discuss Your Online Store
                            </Link>
                            <Link
                                href="/case-studies"
                                className="inline-flex h-10 items-center justify-center text-sm font-medium text-white transition-colors hover:text-white/80"
                            >
                                View Case Studies
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
                <img
                    src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_f24157be-eed3-436d-bba7-665af5c670a7.png"
                    className="rounded-image w-full object-cover"
                    alt="Colleagues working together in an office"
                    loading="lazy"
                />
            </div>
        </section>
    );
}
