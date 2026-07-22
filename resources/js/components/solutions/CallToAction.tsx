import { Link } from '@inertiajs/react';

export function CallToAction() {
    return (
        <section id="call-to-action" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="call-to-action-heading">
            <div className="container mx-auto flex flex-col items-center">
                <div className="mb-12 max-w-3xl text-center md:mb-18 lg:mb-20">
                    <h2 id="call-to-action-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Ready to Make the Next Technology Decision Clearer?
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Tell us what is slowing the business down. We will review the situation, identify the most useful next conversation, and
                        respond within one business day.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                        <Link
                            href="/contact"
                            className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-11 min-h-[44px] items-center justify-center rounded-md px-6 py-2.5 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                        >
                            Request a Software Review
                        </Link>
                        <Link
                            href="/case-studies"
                            className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-11 min-h-[44px] items-center justify-center rounded-md border-2 bg-transparent px-6 py-2.5 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </div>
                <img
                    src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_97c07372-4e6a-4c97-90ff-cae9da9aaf12.png"
                    className="rounded-image w-full object-cover"
                    alt="Team of professionals collaborating"
                />
            </div>
        </section>
    );
}
