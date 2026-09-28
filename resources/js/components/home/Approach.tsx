import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function Approach() {
    return (
        <section id="approach" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="sr-only">
                Our Approach
            </h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
                    <article aria-labelledby="approach-flexibility-heading">
                        <div className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_20ceb692-4f97-46ca-9d6e-d8e9ad71c06b_0 (1).png"
                                alt="Illustration of a team collaborating around a laptop"
                                className="w-full rounded-lg"
                                loading="lazy"
                                width="800"
                                height="450"
                            />
                        </div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Flexibility</p>
                        <h3
                            id="approach-flexibility-heading"
                            className="font-header text-primary mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl"
                        >
                            Remote-First, Senior-Led Work
                        </h3>
                        <p className="mt-5 text-gray-700 md:mt-6">
                            We work remotely, with regular check-ins and shared progress updates, so you know where the work stands without needing to
                            meet in person.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Flexibility approach links">
                            <Link
                                href="/company/about"
                                className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                aria-label="About Empuls3"
                            >
                                About Empuls3
                            </Link>
                            <Link
                                href="/contact"
                                className="text-primary hover:text-accent-pink inline-flex items-center"
                                aria-label="Contact us about flexible remote solutions"
                            >
                                Contact
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </article>
                    <article aria-labelledby="approach-agility-heading">
                        <div className="mb-6 md:mb-8">
                            <img
                                src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
                                alt="Illustration of a team discussing a project"
                                className="w-full rounded-lg"
                                loading="lazy"
                                width="800"
                                height="450"
                            />
                        </div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Agility</p>
                        <h3
                            id="approach-agility-heading"
                            className="font-header text-primary mb-5 text-3xl leading-[1.2] font-bold md:mb-6 md:text-4xl lg:text-5xl"
                        >
                            Adjusting as the Project Changes
                        </h3>
                        <p className="mt-5 text-gray-700 md:mt-6">
                            Requirements change as a project takes shape. We review priorities with you along the way and adjust the plan when
                            something new comes up.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Agility approach links">
                            <Link
                                href="/services"
                                className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                aria-label="Explore our services"
                            >
                                Explore Services
                            </Link>
                            <Link
                                href="/contact"
                                className="text-primary hover:text-accent-pink inline-flex items-center"
                                aria-label="Contact Empuls3"
                            >
                                Contact
                                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
