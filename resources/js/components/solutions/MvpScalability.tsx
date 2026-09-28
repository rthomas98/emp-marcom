import { Link } from '@inertiajs/react';

export function MvpScalability() {
    return (
        <section id="mvp-scalability" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mvp-scalability-heading">
            <div className="relative z-10 container mx-auto">
                <div className="w-full max-w-md">
                    <p className="mb-3 font-semibold text-white md:mb-4">Scalability</p>
                    <h2 id="mvp-scalability-heading" className="font-header mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                        Room to Grow After Launch
                    </h2>
                    <p className="text-white/90 md:text-lg">
                        We plan the architecture around your product's expected users, data, and integrations. The first version stays focused, and it
                        is built so the features customer feedback supports next can be added without starting over.
                    </p>
                    <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Scalability next steps">
                        <Link
                            href="/solutions"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                        >
                            Browse All Solutions
                        </Link>
                    </nav>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png"
                    alt="Developers working at computers in a software development office"
                    className="absolute inset-0 size-full object-cover"
                    width="1920"
                    height="1080"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-[#BD1550]/80" aria-hidden="true" />
            </div>
        </section>
    );
}
