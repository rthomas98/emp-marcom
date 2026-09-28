import { Link } from '@inertiajs/react';

export function MobilePWA() {
    return (
        <section id="mobile-pwa" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-pwa-heading">
            <div className="relative z-10 container mx-auto">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
                    <header>
                        <p className="mb-3 font-semibold text-white md:mb-4">Progressive Web Apps</p>
                        <h2 id="mobile-pwa-heading" className="font-header text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                            Progressive Web Apps When a Store App Isn't Needed
                        </h2>
                    </header>
                    <div>
                        <p className="mb-6 text-white/90 md:mb-8 md:text-lg">
                            A PWA runs in the browser and can be added to a phone's home screen, so users get an app-like experience without an app
                            store download.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2 sm:gap-y-8">
                            <article aria-labelledby="mobile-pwa-performance-heading">
                                <h3
                                    id="mobile-pwa-performance-heading"
                                    className="font-header mb-3 text-xl leading-[1.4] font-bold text-white md:mb-4 md:text-2xl"
                                >
                                    Offline Use, Depending on Scope
                                </h3>
                                <p className="text-white/90">
                                    Depending on scope, some features can keep working when the connection drops. We agree on what needs to work
                                    offline before building.
                                </p>
                            </article>
                            <article aria-labelledby="mobile-pwa-compatibility-heading">
                                <h3
                                    id="mobile-pwa-compatibility-heading"
                                    className="font-header mb-3 text-xl leading-[1.4] font-bold text-white md:mb-4 md:text-2xl"
                                >
                                    Phones, Tablets, and Desktops
                                </h3>
                                <p className="text-white/90">
                                    The same app runs on phones, tablets, and desktops, and updates without an app store release.
                                </p>
                            </article>
                        </div>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Progressive Web App next steps">
                            <Link
                                href="/solutions"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                            >
                                Browse All Solutions
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/site-images/rob_thomas23_African_American_developers_at_an_agency_waterco_145993e3-2092-4107-aff9-f6d916f76c36_1.png"
                    className="size-full object-cover"
                    alt="Illustration of developers talking together in an office"
                    width="1920"
                    height="1080"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[#BD1550]/80" aria-hidden="true" />
            </div>
        </section>
    );
}
