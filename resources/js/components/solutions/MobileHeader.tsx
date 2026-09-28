import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export function MobileHeader() {
    return (
        <section id="mobile-header" className="relative overflow-hidden" aria-labelledby="mobile-header-heading">
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_1.png"
                    alt="Illustration of developers collaborating on a mobile app"
                    className="h-full w-full object-cover"
                    width="1920"
                    height="1080"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F1946]/90 to-[#1F1946]/70" aria-hidden="true" />
            </div>
            <div className="relative z-10 px-[5%] py-16 md:py-24 lg:py-32">
                <div className="container mx-auto">
                    <header className="w-full max-w-lg">
                        <p className="mb-3 font-semibold text-white md:mb-4">Mobile App Development</p>
                        <h1 id="mobile-header-heading" className="font-header mb-5 text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
                            Mobile Apps for Your Customers and Team
                        </h1>
                        <p className="text-white/90 md:text-lg">
                            Empuls3 plans, builds, and improves mobile apps for DFW businesses, from field work and inspections to approvals, data
                            capture, and customer self-service. You work directly with Robert, a senior developer, from the first workflow review
                            through release and support.
                        </p>
                        <nav className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" aria-label="Mobile development next steps">
                            <Link
                                href={contactHref('new-project')}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                            >
                                Tell Us About Your App
                            </Link>
                            <Link
                                href={contactHref('project')}
                                className="inline-flex h-10 items-center justify-center text-sm font-medium text-white transition-colors hover:text-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                            >
                                Discuss an Existing App
                                <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
        </section>
    );
}
