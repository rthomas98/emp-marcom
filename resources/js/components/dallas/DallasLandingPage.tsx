import { Link } from '@inertiajs/react';

interface DallasLandingPageProps {
    service: {
        title: string;
        description: string;
        features: string[];
        benefits: string[];
        cta: string;
    };
}

export function DallasLandingPage({ service }: DallasLandingPageProps) {
    return (
        <>
            {/* Hero Section with Dallas Focus */}
            <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-secondary mb-5 text-5xl font-bold md:text-7xl lg:text-8xl">
                                {service.title} <span className="text-primary">Dallas</span>
                            </h1>
                            <p className="text-secondary mb-6 text-lg md:text-xl">{service.description}</p>
                            <div className="mb-8">
                                <p className="text-secondary/80 mb-4 text-base">Proudly serving Dallas businesses remotely across:</p>
                                <ul className="text-secondary/70 grid grid-cols-2 gap-2 text-sm">
                                    <li>• Downtown Dallas</li>
                                    <li>• Uptown & Victory Park</li>
                                    <li>• Deep Ellum Tech District</li>
                                    <li>• Las Colinas</li>
                                    <li>• Plano Legacy West</li>
                                    <li>• Richardson Telecom Corridor</li>
                                    <li>• Fort Worth</li>
                                    <li>• Arlington</li>
                                </ul>
                                <p className="text-secondary/60 mt-4 text-sm italic">100% Remote Service - No office visits required</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium text-white transition-colors"
                                >
                                    Get Started
                                </Link>
                                <a
                                    href="tel:+19727988914"
                                    className="text-primary border-primary hover:bg-primary/10 inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-base font-medium transition-colors"
                                >
                                    Call Dallas Team
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="/images/dallas-skyline.jpg" alt="Dallas Skyline" className="h-auto w-full rounded-lg shadow-xl" />
                            <div className="bg-primary absolute -bottom-6 -left-6 rounded-lg p-6 text-white shadow-lg">
                                <p className="mb-1 text-2xl font-bold">Since 2009</p>
                                <p className="text-sm">Serving Dallas Remotely</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Trust Indicators */}
            <section className="bg-secondary/5 px-[5%] py-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        <div>
                            <p className="text-primary mb-2 text-4xl font-bold">2009</p>
                            <p className="text-secondary">Founded</p>
                        </div>
                        <div>
                            <p className="text-primary mb-2 text-4xl font-bold">DFW</p>
                            <p className="text-secondary">Business Focus</p>
                        </div>
                        <div>
                            <p className="text-primary mb-2 text-4xl font-bold">Senior</p>
                            <p className="text-secondary">Specialist-Led Delivery</p>
                        </div>
                        <div>
                            <p className="text-primary mb-2 text-4xl font-bold">Direct</p>
                            <p className="text-secondary">Engineer Access</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Features */}
            <section className="px-[5%] py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="mx-auto mb-12 max-w-3xl text-center">
                        <h2 className="text-secondary mb-4 text-4xl font-bold md:text-5xl">Why Dallas Businesses Choose Empuls3</h2>
                        <p className="text-secondary/80 text-lg">
                            We understand the unique needs of Dallas companies, from startups in Deep Ellum to enterprises in Downtown Dallas.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {service.features.map((feature, index) => (
                            <div key={index} className="border-secondary/10 rounded-lg border bg-white p-6 shadow-lg">
                                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                                    <span className="text-primary text-2xl">✓</span>
                                </div>
                                <h3 className="text-secondary mb-2 text-xl font-semibold">{feature}</h3>
                                <p className="text-secondary/70">Tailored solutions for Dallas businesses with local expertise and understanding.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dallas-Specific Benefits */}
            <section className="from-secondary to-secondary/90 bg-gradient-to-r px-[5%] py-16 text-white">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="mb-8 text-center text-4xl font-bold md:text-5xl">Local Dallas Advantages</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {service.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-primary mt-1 h-6 w-6 flex-shrink-0 rounded-full" />
                                    <p className="text-lg">{benefit}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Preview */}
            <section className="px-[5%] py-16 md:py-24">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-secondary mb-4 text-4xl font-bold md:text-5xl">Review Our Published Work</h2>
                        <p className="text-secondary/80 mx-auto max-w-2xl text-lg">
                            Explore selected website modernization work and the delivery approach behind each engagement. We publish measurable
                            outcomes only when they have been verified and approved by the client.
                        </p>
                        <Link href="/case-studies" className="text-primary mt-8 inline-flex items-center font-medium hover:underline">
                            View case studies →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary/5 px-[5%] py-16 md:py-24">
                <div className="container mx-auto text-center">
                    <h2 className="text-secondary mb-4 text-4xl font-bold md:text-5xl">Ready to Transform Your Dallas Business?</h2>
                    <p className="text-secondary/80 mx-auto mb-8 max-w-2xl text-lg">{service.cta}</p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-medium text-white transition-colors"
                        >
                            Schedule Free Consultation
                        </Link>
                        <a
                            href="tel:+19727988914"
                            className="text-secondary border-secondary hover:bg-secondary/10 inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-lg font-medium transition-colors"
                        >
                            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            (972) 798-8914
                        </a>
                    </div>
                    <p className="text-secondary/60 mt-6 text-sm">100% Remote Service • Virtual Meetings • Flexible Hours • No Commute Required</p>
                </div>
            </section>
        </>
    );
}
