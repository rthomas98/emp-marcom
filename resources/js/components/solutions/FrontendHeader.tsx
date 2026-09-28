import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function FrontendHeader() {
    return (
        <section id="frontend-header" className="relative px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-header-heading">
            <div className="relative z-10 container mx-auto max-w-3xl text-center">
                <p className="mb-3 font-semibold text-white md:mb-4">Frontend Development and UX/UI Design</p>
                <h1 id="frontend-header-heading" className="font-header mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                    Design and Build Easy-to-Use Websites and Apps
                </h1>
                <p className="text-white md:text-lg">
                    Empuls3 designs and builds websites, customer portals, and business applications for Dallas–Fort Worth organizations. We can
                    design a new interface from the start, or improve one where confusing navigation or inconsistent screens slow people down. You
                    work directly with Robert, who handles both the design and the code.
                </p>
                <nav className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8" aria-label="Frontend next steps">
                    <Link
                        href={contactHref('new-project')}
                        className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                    >
                        Tell Us About Your New Site or App
                    </Link>
                    <Link
                        href={contactHref('project')}
                        className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
                    >
                        Request an Experience Review
                    </Link>
                </nav>
            </div>
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <img
                    src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_4131a61a-cf71-4493-911e-e766265cc50c_1.png"
                    className="size-full object-cover"
                    alt=""
                    width="1920"
                    height="1080"
                />
                <div className="absolute inset-0 bg-[#1F1946]/70" />
            </div>
        </section>
    );
}
