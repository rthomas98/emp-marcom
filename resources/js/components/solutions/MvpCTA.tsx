import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export function MvpCTA() {
    return (
        <section id="mvp-cta" className="bg-[#1F1946] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mvp-cta-heading">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <header className="mb-10 max-w-3xl md:mb-12">
                        <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Planning a New Product?</p>
                        <h2 id="mvp-cta-heading" className="font-header mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                            Tell Us What Your Product Needs to Do
                        </h2>
                        <p className="text-white/90 md:text-lg">
                            Tell us who the product is for, the problem it solves, and what the first version needs to do. We normally reply within
                            one business day and can help you work out what the first version should include.
                        </p>
                    </header>
                    <nav className="flex flex-col items-center gap-4 sm:flex-row" aria-label="MVP call to action">
                        <Link
                            href={contactHref('new-project')}
                            className="inline-flex h-12 items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                        >
                            Tell Us About Your Product
                            <ArrowRight className="ml-2 size-5" aria-hidden="true" />
                        </Link>
                        <Link
                            href="/solutions"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                        >
                            Browse All Solutions
                        </Link>
                    </nav>
                </div>
            </div>
        </section>
    );
}
