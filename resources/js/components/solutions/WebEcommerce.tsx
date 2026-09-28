import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Globe, ShoppingCart, Smartphone } from 'lucide-react';

export function WebEcommerce() {
    return (
        <section id="web-ecommerce" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="web-ecommerce-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Websites and online stores</p>
                        <h2 id="web-ecommerce-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            Build a New Website or Improve the One You Have
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            Your website is often where customers first find you, contact you, or buy from you. We build new sites and improve the one
                            you have.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="web-wordpress-heading">
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                    <Globe className="text-primary h-6 w-6" />
                                </div>
                            </div>
                            <h3
                                id="web-wordpress-heading"
                                className="text-primary mb-5 text-2xl font-bold break-words md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl xl:text-4xl"
                            >
                                WordPress Websites
                            </h3>
                            <p className="text-gray-700">
                                New WordPress sites, or fixes, updates, and redesigns for the WordPress site you already have.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="web-ecommerce-store-heading">
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                    <ShoppingCart className="text-primary h-6 w-6" />
                                </div>
                            </div>
                            <h3
                                id="web-ecommerce-store-heading"
                                className="text-primary mb-5 text-2xl font-bold break-words md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl xl:text-4xl"
                            >
                                Online Stores
                            </h3>
                            <p className="text-gray-700">
                                E-commerce stores with product catalogs and checkout, built new or rebuilt from a store that has become hard to
                                manage.
                            </p>
                        </article>
                        <article className="flex w-full flex-col items-center text-center" aria-labelledby="web-pwa-heading">
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                    <Smartphone className="text-primary h-6 w-6" />
                                </div>
                            </div>
                            <h3
                                id="web-pwa-heading"
                                className="text-primary mb-5 text-2xl font-bold break-words md:mb-6 md:text-2xl md:leading-[1.3] lg:text-3xl xl:text-4xl"
                            >
                                Progressive Web Apps
                            </h3>
                            <p className="text-gray-700">
                                Websites that people can add to their phone&apos;s home screen and open like an app, without an app store download.
                            </p>
                        </article>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-14 lg:mt-16">
                        <Link
                            href="/solutions/web-ecommerce-development"
                            className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                        >
                            Explore Web & E-commerce Development
                        </Link>
                        <Link href={contactHref('project')} className="text-primary hover:text-accent-pink inline-flex items-center">
                            Let’s Talk About Your Project
                            <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
