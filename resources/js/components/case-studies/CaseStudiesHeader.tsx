import { Link } from '@inertiajs/react';

export function CaseStudiesHeader() {
    return (
        <section className="bg-primary px-[5%] py-16 text-white md:py-24">
            <div className="container mx-auto max-w-4xl text-center">
                <p className="text-accent-yellow font-semibold tracking-wide uppercase">Published client work</p>
                <h1 className="mt-4 text-4xl font-bold md:text-6xl">Selected work with clear evidence boundaries</h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
                    Our current library documents website modernization engagements. Each story separates delivered scope from measured outcomes, and
                    we do not publish performance claims without client-approved evidence.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link href="#case-studies-list" className="bg-accent-pink rounded-lg px-6 py-3 font-semibold text-white">
                        Review Published Work
                    </Link>
                    <Link href="/contact#contact-form" className="rounded-lg border border-white px-6 py-3 font-semibold text-white">
                        Discuss Your Situation
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CaseStudiesHeader;
