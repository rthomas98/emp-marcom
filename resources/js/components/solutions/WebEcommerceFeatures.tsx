import { Code, Globe, ShoppingCart } from 'lucide-react';

export function WebEcommerceFeatures() {
    return (
        <section id="web-ecommerce-features" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="web-ecommerce-features-heading">
            <div className="container mx-auto">
                <div className="mb-12 text-center md:mb-18 lg:mb-20">
                    <div className="mx-auto w-full max-w-3xl">
                        <h2
                            id="web-ecommerce-features-heading"
                            className="font-header text-primary text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl"
                        >
                            What a Web or E-commerce Project Can Include
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 md:mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                                <Code className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                            </div>
                        </div>
                        <h3 className="text-primary mb-5 text-xl font-bold md:mb-6 md:text-2xl">Custom Themes and Plugin Development</h3>
                        <p className="text-gray-700">
                            Responsive, accessible themes and plugins built for your content, with a publishing workflow documented for your team.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 md:mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                                <ShoppingCart className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                            </div>
                        </div>
                        <h3 className="text-primary mb-5 text-xl font-bold md:mb-6 md:text-2xl">E-commerce Integrations</h3>
                        <p className="text-gray-700">
                            Payment gateways, inventory, shipping, and the tools your business already uses, connected so orders move without manual
                            re-entry.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 md:mb-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                                <Globe className="h-6 w-6 text-[#BD1550]" aria-hidden="true" />
                            </div>
                        </div>
                        <h3 className="text-primary mb-5 text-xl font-bold md:mb-6 md:text-2xl">Content Migration and Launch</h3>
                        <p className="text-gray-700">
                            Moving pages, forms, and redirects from your current site, so existing links keep working after launch.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
