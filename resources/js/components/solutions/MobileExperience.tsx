import { Link } from '@inertiajs/react';
import { ChevronRight, Layout, Maximize, Smartphone, Zap } from 'lucide-react';

export function MobileExperience() {
    return (
        <section id="mobile-experience" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-experience-heading">
            <div className="container mx-auto">
                <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
                    <header>
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">User Experience</p>
                        <h2 id="mobile-experience-heading" className="text-primary mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-6xl">
                            Design That Fits How People Use Their Phones
                        </h2>
                        <p className="md:text-md text-gray-700">
                            We design interfaces around the tasks people complete on their phones, such as capturing photos, collecting signatures,
                            completing inspections, or approving requests. Clear navigation and consistent behavior across devices make those tasks
                            easier to finish.
                        </p>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Mobile experience next steps">
                            <Link
                                href="/company/faqs"
                                className="inline-flex items-center justify-center text-base font-medium text-[#1F1946] hover:text-[#BD1550] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                            >
                                Review Engagement Questions <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
                            </Link>
                        </nav>
                    </header>
                    <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
                        <article aria-labelledby="mobile-experience-interfaces-heading">
                            <div className="mb-5 md:mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                                    <Smartphone className="h-6 w-6 text-[#BD1550]" />
                                </div>
                            </div>
                            <h3
                                id="mobile-experience-interfaces-heading"
                                className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Intuitive Interfaces for All Devices
                            </h3>
                            <p className="text-gray-700">
                                Layouts and controls are designed for the devices your users actually carry, whether on iOS, Android, or the browser.
                            </p>
                        </article>
                        <article aria-labelledby="mobile-experience-navigation-heading">
                            <div className="mb-5 md:mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                                    <Layout className="h-6 w-6 text-[#BD1550]" />
                                </div>
                            </div>
                            <h3
                                id="mobile-experience-navigation-heading"
                                className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Clear Navigation for Everyday Tasks
                            </h3>
                            <p className="text-gray-700">
                                Users can find what they need quickly, which matters when they are completing a task on the job or on the go.
                            </p>
                        </article>
                        <article aria-labelledby="mobile-experience-responsive-heading">
                            <div className="mb-5 md:mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                                    <Maximize className="h-6 w-6 text-[#BD1550]" />
                                </div>
                            </div>
                            <h3
                                id="mobile-experience-responsive-heading"
                                className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Responsive Design for Every Screen Size
                            </h3>
                            <p className="text-gray-700">
                                Apps adapt to phones, tablets, and larger screens, so the layout still works wherever the task happens.
                            </p>
                        </article>
                        <article aria-labelledby="mobile-experience-performance-heading">
                            <div className="mb-5 md:mb-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10" aria-hidden="true">
                                    <Zap className="h-6 w-6 text-[#BD1550]" />
                                </div>
                            </div>
                            <h3
                                id="mobile-experience-performance-heading"
                                className="text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl"
                            >
                                Consistent Performance Across Platforms
                            </h3>
                            <p className="text-gray-700">
                                We test on the platforms and devices your users rely on, so the app behaves the same way across them.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}
