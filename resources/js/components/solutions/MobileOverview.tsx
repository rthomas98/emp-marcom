import { Check } from 'lucide-react';

export function MobileOverview() {
    const features = [
        'Native iOS or Android when the app depends heavily on device features or platform-specific behavior.',
        'React Native when you need iOS and Android apps from one shared codebase.',
        "A Progressive Web App when a browser-based app, added to the phone's home screen, covers the work.",
    ];

    return (
        <section id="mobile-overview" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-overview-heading">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="text-accent-pink mb-3 font-semibold md:mb-4">Choosing a Platform</p>
                        <h2
                            id="mobile-overview-heading"
                            className="font-header text-primary mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl"
                        >
                            Native, Cross-Platform, or a Web App
                        </h2>
                        <p className="mb-5 text-gray-700 md:mb-6 md:text-lg">
                            We recommend a platform before building starts, based on the devices your users carry, the phone features the app needs,
                            how it will be distributed, and what your team can maintain.
                        </p>
                        <ul className="grid grid-cols-1 gap-4 py-2" aria-label="Platform options">
                            {features.map((feature) => (
                                <li key={feature} className="flex items-start">
                                    <div className="mr-4 flex-none self-start" aria-hidden="true">
                                        <Check className="size-6 text-[#BD1550]" />
                                    </div>
                                    <p className="text-gray-700">{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <figure className="h-full w-full">
                        <img
                            src="/images/site-images/rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png"
                            className="rounded-image w-full object-cover"
                            alt="Developers testing an app on a mobile device"
                            width="800"
                            height="600"
                            loading="lazy"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
