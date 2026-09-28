import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function Industries() {
    return (
        <section
            id="industries"
            className="bg-primary overflow-hidden px-[5%] py-16 text-white md:py-24 lg:py-28"
            aria-labelledby="industries-heading"
        >
            <div className="container mx-auto">
                <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
                    <p className="text-accent-yellow mb-3 font-semibold md:mb-4">Industries</p>
                    <h2 id="industries-heading" className="font-header mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                        Software Shaped Around How Your Industry Works
                    </h2>
                    <p className="text-white/80 md:text-lg">
                        Every industry has its own workflows, rules, and customer expectations. We start by learning how your business operates, then
                        plan the website or software around it.
                    </p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
                    <article className="w-full" aria-labelledby="industry-healthcare-heading">
                        <div className="mb-6 w-full md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
                                alt="Illustration of business professionals in a modern office"
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                        </div>
                        <h3
                            id="industry-healthcare-heading"
                            className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            Healthcare
                        </h3>
                        <p className="text-white/80">
                            Websites and tools that support scheduling, patient communication, and administrative work, planned around privacy
                            requirements.
                        </p>
                    </article>
                    <article className="w-full md:mt-[25%]" aria-labelledby="industry-finance-heading">
                        <div className="mb-6 w-full md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
                                alt="Illustration of professionals reviewing data together"
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                        </div>
                        <h3
                            id="industry-finance-heading"
                            className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            Finance & Banking
                        </h3>
                        <p className="text-white/80">
                            Websites and internal tools for financial teams, planned around their security and compliance requirements.
                        </p>
                    </article>
                    <article className="w-full md:mt-[50%]" aria-labelledby="industry-retail-heading">
                        <div className="mb-6 w-full md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png"
                                alt="Illustration of an online store shown on a laptop and phone"
                                className="aspect-[3/2] w-full rounded-lg object-cover"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                        </div>
                        <h3
                            id="industry-retail-heading"
                            className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                        >
                            Retail & E-commerce
                        </h3>
                        <p className="text-white/80">
                            Online stores and the systems behind them, including inventory, orders, and customer accounts.
                        </p>
                    </article>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8" role="navigation" aria-label="Industry information links">
                    <Link
                        href="/industries"
                        className="focus:ring-offset-primary inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
                        aria-label="Explore the industries we work with"
                    >
                        Explore Industries
                    </Link>
                    <Link
                        href="/contact"
                        className="text-accent-yellow inline-flex items-center hover:text-white"
                        aria-label="Contact us about your industry-specific needs"
                    >
                        Contact
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
