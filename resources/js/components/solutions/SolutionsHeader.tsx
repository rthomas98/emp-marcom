import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function SolutionsHeader() {
    return (
        <section
            id="solutions-header"
            className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
            aria-labelledby="solutions-heading"
        >
            <div className="order-2 lg:order-1">
                <img
                    src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png"
                    alt="Developers working together at their computers"
                    className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
                    width="1024"
                    height="1024"
                />
            </div>
            <div className="order-1 mx-[5%] sm:max-w-md md:justify-self-start lg:order-2 lg:mr-[5vw] lg:ml-20">
                <h1 id="solutions-heading" className="font-header text-primary mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
                    Build New Software or Fix the Systems You Already Use
                </h1>
                <p className="text-gray-700 md:text-lg">
                    Empuls3 builds websites, online stores, custom software, APIs, mobile apps, and HubSpot setups for Dallas–Fort Worth businesses.
                    Bring us a new project or a system that needs work. You work directly with Robert, an independent senior developer, from the first
                    plan through launch and ongoing support.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                    <Link
                        href={contactHref('project')}
                        className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        Let’s Talk About Your Project
                    </Link>
                    <Link
                        href="/case-studies"
                        className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                        View Case Studies
                    </Link>
                </div>
            </div>
        </section>
    );
}
