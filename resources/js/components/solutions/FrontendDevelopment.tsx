import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight, Code, Layers, Palette, Zap } from 'lucide-react';

export function FrontendDevelopment() {
    return (
        <section id="frontend-development" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-development-heading">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-18 lg:mb-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Frontend and UX/UI design</p>
                        <h2
                            id="frontend-development-heading"
                            className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Make Your Website or App Easier to Use
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            We design and build the screens your customers and staff use, starting from a new design or from an interface people
                            struggle with today.
                        </p>
                    </div>
                </div>
                <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
                    <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                    <Palette className="text-primary h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">UX/UI Design</h3>
                            <p className="text-gray-700">Page layouts, navigation, and forms planned around the tasks your users need to finish.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                    <Code className="text-primary h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Modern Frameworks</h3>
                            <p className="text-gray-700">
                                Interfaces built with React, Vue, and similar frameworks so they are easier to maintain and extend.
                            </p>
                        </div>
                    </div>
                    <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
                        <img
                            src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                            alt="Designers and developers reviewing work together"
                            className="rounded-image h-auto w-full object-cover"
                            loading="lazy"
                            width="1456"
                            height="832"
                        />
                    </div>
                    <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                    <Layers className="text-primary h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Interactive Interfaces</h3>
                            <p className="text-gray-700">Dashboards, forms, and tools that respond as people use them, on desktop and mobile.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-5 md:mb-6">
                                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                    <Zap className="text-primary h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">Connected to Your Back End</h3>
                            <p className="text-gray-700">
                                Front ends that work with your existing APIs and data, so what people see matches what is in your systems.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
                    <Link
                        href="/solutions/frontend-development-uxui-design"
                        className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        See Frontend & UX/UI Design
                    </Link>
                    <Link href={contactHref('project')} className="text-primary hover:text-accent-pink inline-flex items-center">
                        Let’s Talk About Your Project
                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
