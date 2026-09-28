import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function FrontendCTA() {
    return (
        <section id="frontend-cta" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-cta-heading">
            <div className="relative container mx-auto">
                <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <div className="w-full max-w-lg">
                        <h2 id="frontend-cta-heading" className="font-header mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                            Tell Us About Your Website or App
                        </h2>
                        <p className="text-white md:text-lg">
                            Whether you are planning a new website or app or improving one that frustrates users, share what people need to do and
                            where they get stuck. We normally reply within one business day.
                        </p>
                    </div>
                    <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Frontend project next steps">
                        <Link
                            href={contactHref('project')}
                            className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                        >
                            Let’s Talk About Your Project
                        </Link>
                        <Link
                            href="/case-studies"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
                        >
                            See Published Work
                        </Link>
                    </nav>
                </div>
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <img
                        src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_3787497e-4cde-4a7f-8959-dbd51c7183c8.png"
                        className="size-full object-cover"
                        alt=""
                        width="1200"
                        height="800"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#1F1946]/80" />
                </div>
            </div>
        </section>
    );
}
