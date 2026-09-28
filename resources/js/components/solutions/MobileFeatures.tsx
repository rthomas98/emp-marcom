export function MobileFeatures() {
    const features = [
        {
            id: 'mobile-feature-react-native',
            title: 'Store Releases and Updates',
            description: 'We handle app store submissions and ship updates as iOS, Android, and browsers change.',
            image: '/images/site-images/rob_thomas23_black_people_in_an_web_agency_esigner_people_happy_231ca761-cd7b-4371-8719-fd4d25a20666.png',
            altText: 'Illustration of designers collaborating in an office',
        },
        {
            id: 'mobile-feature-responsive',
            title: 'Monitoring and Fixes',
            description: 'Monitoring and user feedback show problems early, so fixes can be planned before they affect more of your users.',
            image: '/images/site-images/rob_thomas23_black_people_in_an_web_agency_esigner_people_happy_2581b789-5dcf-4b06-8d99-b553a5a00ff3.png',
            altText: 'Illustration of people collaborating on a design',
        },
        {
            id: 'mobile-feature-senior-team',
            title: 'The Same Senior Developer',
            description: 'The senior developer who built the app stays involved through store submission, monitoring, and version support.',
            image: '/images/site-images/rob_thomas23_black_people_in_an_web_agency_esigner_people_happy_ca5d6073-7710-4b4f-b1e7-0d9510677b13.png',
            altText: 'Illustration of designers and developers collaborating',
        },
    ];

    return (
        <section id="mobile-features" className="bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-features-heading">
            <div className="container mx-auto">
                <header className="mb-12 md:mb-16 lg:mb-20">
                    <div className="max-w-2xl">
                        <h2
                            id="mobile-features-heading"
                            className="font-header text-primary text-4xl leading-[1.2] font-bold md:text-5xl lg:text-6xl"
                        >
                            Support After the App Is Released
                        </h2>
                    </div>
                </header>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {features.map((feature) => (
                        <article key={feature.id} className="flex flex-col" aria-labelledby={feature.id}>
                            <figure className="mb-6 md:mb-8">
                                <img
                                    src={feature.image}
                                    alt={feature.altText}
                                    className="rounded-image h-64 w-full object-cover"
                                    width="400"
                                    height="256"
                                    loading="lazy"
                                />
                            </figure>
                            <h3 id={feature.id} className="font-header text-primary mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
