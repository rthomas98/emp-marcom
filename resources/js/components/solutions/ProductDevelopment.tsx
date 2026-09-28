import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Rocket, Zap } from 'lucide-react';

export function ProductDevelopment() {
    return (
        <section id="product-development" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="product-development-heading">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">MVP and product development</p>
                        <h2
                            id="product-development-heading"
                            className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Build a First Version Customers Can Use
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            If you are planning a new product, we help you decide what the first version needs, build it, and put it in front of real
                            users. That first release is often called a Minimum Viable Product (MVP).
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                                <div>
                                    <div className="mb-3 md:mb-4">
                                        <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                            <Rocket className="text-primary h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-primary mb-2 text-xl font-bold md:text-2xl">New Products and Startups</h3>
                                    <p className="text-gray-700">
                                        Plan and build the core features of a new product so you can launch it and see what customers use.
                                    </p>
                                </div>
                                <div className="mt-5 flex items-center gap-4 md:mt-6">
                                    <Link
                                        href="/solutions/mvp-product-development"
                                        className="text-primary hover:text-accent-pink inline-flex items-center"
                                    >
                                        Explore MVP & Product Development
                                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
                            <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                                <div>
                                    <div className="mb-3 md:mb-4">
                                        <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                            <Zap className="text-primary h-6 w-6" />
                                        </div>
                                    </div>
                                    <h3 className="text-primary mb-2 text-xl font-bold md:text-2xl">Test the Idea First</h3>
                                    <p className="text-gray-700">
                                        Build a smaller first release to test your idea with real users before paying for every feature.
                                    </p>
                                </div>
                                <div className="mt-5 flex items-center gap-4 md:mt-6">
                                    <Link
                                        href="/solutions/mvp-product-development"
                                        className="text-primary hover:text-accent-pink inline-flex items-center"
                                    >
                                        See How MVP Development Works
                                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
                            <div className="flex items-center justify-center">
                                <img
                                    src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
                                    alt="People discussing a project"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                    width="1024"
                                    height="1024"
                                />
                            </div>
                            <div className="flex flex-1 flex-col justify-center p-6">
                                <div>
                                    <p className="text-accent-pink mb-2 text-sm font-semibold">Process</p>
                                    <h3 className="text-primary mb-2 text-xl font-bold md:text-2xl">How the Work Runs</h3>
                                    <p className="text-gray-700">
                                        We work in short, agile cycles and review working software with you along the way, so priorities can change as
                                        you learn.
                                    </p>
                                </div>
                                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                                    <Link href={contactHref('new-project')} className="text-primary hover:text-accent-pink inline-flex items-center">
                                        Let’s Talk About Your Project
                                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
