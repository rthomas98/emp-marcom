import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function Services() {
    return (
        <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="services-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">Built for established service businesses</p>
                    <h2 id="services-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Clear Ownership for Difficult Software Problems
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Empuls3 works with DFW owners, COOs, and IT leaders who need an experienced technical partner to understand the business
                        impact, take responsibility for the system, and communicate clearly from diagnosis through delivery.
                    </p>
                </div>
                <div className="grid auto-cols-fr gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                    <article className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm" aria-labelledby="service-tech-heading">
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <div className="mb-5 md:mb-6">
                                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <path d="M18 16.98h-5.99c-1.66 0-3.01-1.34-3.01-3s1.34-3 3.01-3H18" />
                                            <path d="M9 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5" />
                                        </svg>
                                    </div>
                                </div>
                                <h3
                                    id="service-tech-heading"
                                    className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Senior Technical Diagnosis
                                </h3>
                                <p className="text-gray-700">
                                    We trace failures across applications, APIs, databases, cloud infrastructure, and vendor systems before
                                    recommending a repair or modernization path.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link
                                    href="/solutions"
                                    className="text-primary hover:text-accent-pink inline-flex items-center"
                                    aria-label="Learn more about our modern tech solutions"
                                >
                                    Explore Solutions
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                    <article
                        className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm"
                        aria-labelledby="service-comprehensive-heading"
                    >
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <div className="mb-5 md:mb-6">
                                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                                            <polyline points="3.29 7 12 12 20.71 7" />
                                            <line x1="12" x2="12" y1="22" y2="12" />
                                        </svg>
                                    </div>
                                </div>
                                <h3
                                    id="service-comprehensive-heading"
                                    className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Business-First Delivery
                                </h3>
                                <p className="text-gray-700">
                                    Recommendations are tied to operational risk, staff time, revenue, and customer experience—not technology for its
                                    own sake.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link
                                    href="/solutions/software-development-design"
                                    className="text-primary hover:text-accent-pink inline-flex items-center"
                                    aria-label="Learn more about our comprehensive solutions"
                                >
                                    See Our Approach
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm" aria-labelledby="service-secure-heading">
                        <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                            <div>
                                <div className="mb-5 md:mb-6">
                                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-md" aria-hidden="true">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary"
                                        >
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                </div>
                                <h3
                                    id="service-secure-heading"
                                    className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Dependable Operations
                                </h3>
                                <p className="text-gray-700">
                                    We design for security, monitoring, recoverability, and maintainable ownership so improvements remain dependable
                                    after launch.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link
                                    href="/services/software-engineering-it-consulting"
                                    className="text-primary hover:text-accent-pink inline-flex items-center"
                                    aria-label="Learn more about our secure and reliable solutions"
                                >
                                    Explore Support
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                    <article
                        className="flex auto-cols-fr flex-col rounded-lg border border-gray-200 bg-white sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:col-start-3 lg:row-span-2"
                        aria-labelledby="service-innovation-heading"
                    >
                        <div className="flex size-full flex-col items-center justify-center self-start bg-gray-100 p-4 lg:h-auto">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Project_Manager_Makes_a_Presentat_2d8255b5-eb2b-4d1c-b57d-58077e6d9d44.png"
                                alt="Team presenting digital transformation strategy"
                                className="h-full w-full rounded-md border border-gray-200 object-cover"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                        </div>
                        <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
                            <div>
                                <p className="text-accent-pink mb-2 font-semibold">Innovation</p>
                                <h3
                                    id="service-innovation-heading"
                                    className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Modernization Without Unnecessary Disruption
                                </h3>
                                <p className="text-gray-700">
                                    Improve the highest-risk parts of your technology environment in a controlled sequence while preserving the
                                    workflows that already serve the business.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link
                                    href="/solutions/software-development-design"
                                    className="text-primary hover:text-accent-pink inline-flex items-center"
                                    aria-label="Get started with digital transformation solutions"
                                >
                                    Get Started
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                    <article
                        className="flex auto-cols-fr flex-col rounded-lg border border-gray-200 bg-white last-of-type:row-span-1 last-of-type:grid sm:col-span-2 sm:grid-cols-2 sm:last-of-type:row-start-2 md:last-of-type:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-span-1"
                        aria-labelledby="service-enterprise-heading"
                    >
                        <div className="flex size-full flex-col items-center justify-center self-start bg-gray-100 p-4 lg:h-auto">
                            <img
                                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_1e9c41b2-97f0-453f-a3ac-3d7547b2c689_3.png"
                                alt="Diverse team working on enterprise solutions"
                                className="h-full w-full rounded-md border border-gray-200 object-cover"
                                loading="lazy"
                                width="800"
                                height="400"
                            />
                        </div>
                        <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
                            <div>
                                <p className="text-accent-pink mb-2 font-semibold">Scalability</p>
                                <h3
                                    id="service-enterprise-heading"
                                    className="text-primary mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl"
                                >
                                    Direct Access to the People Doing the Work
                                </h3>
                                <p className="text-gray-700">
                                    Work with senior specialists who can explain tradeoffs, make decisions, and remain accountable throughout the
                                    engagement.
                                </p>
                            </div>
                            <div className="mt-5 md:mt-6">
                                <Link
                                    href="/case-studies"
                                    className="text-primary hover:text-accent-pink inline-flex items-center"
                                    aria-label="Explore our case studies with industry leaders"
                                >
                                    Explore
                                    <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
