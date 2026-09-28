import { Link } from '@inertiajs/react';
import { Code, Lightbulb, Rocket } from 'lucide-react';

export function MvpFeatures() {
    const features = [
        {
            icon: <Lightbulb className="size-12 text-[#BD1550]" aria-hidden="true" />,
            title: 'The Product Your Customers Use',
            description: 'Screens and flows for the main tasks, designed with your users and tested before launch.',
        },
        {
            icon: <Code className="size-12 text-[#BD1550]" aria-hidden="true" />,
            title: 'What It Needs to Run',
            description: 'The admin tools, sign-in, data, monitoring, security, hosting, and support a first version needs for real customers.',
        },
        {
            icon: <Rocket className="size-12 text-[#BD1550]" aria-hidden="true" />,
            title: 'A Plan for What Comes Next',
            description: 'Launch results, early user feedback, and clear documentation guide what you build next.',
        },
    ];

    return (
        <section id="mvp-features" className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mvp-features-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <header className="mb-12 w-full max-w-2xl text-center md:mb-16 lg:mb-20">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Working with Empuls3</p>
                        <h2 id="mvp-features-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                            What a First Version Includes
                        </h2>
                        <p className="text-gray-700 md:text-lg">
                            Each build covers the product itself and everything needed to run it with real customers.
                        </p>
                    </header>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        {features.map((feature, index) => (
                            <article
                                key={feature.title}
                                className="flex w-full flex-col items-center text-center"
                                aria-labelledby={`mvp-feature-heading-${index}`}
                            >
                                <div className="mb-5 md:mb-6" aria-hidden="true">
                                    {feature.icon}
                                </div>
                                <h3
                                    id={`mvp-feature-heading-${index}`}
                                    className="font-header text-primary mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3]"
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </article>
                        ))}
                    </div>
                    <nav className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16" aria-label="MVP features next steps">
                        <Link
                            href="/company/about"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                        >
                            About Empuls3
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}
