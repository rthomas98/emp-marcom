import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';

export function AboutCta() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="about-cta-heading">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 id="about-cta-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                    Talk directly with the developer who will do the work
                </h2>
                <p className="text-lg leading-8 text-gray-700">
                    Tell us about the website or app you are planning, or the system you need to improve. We normally reply within one business day.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        href={contactHref('project')}
                        className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                        Let’s Talk About Your Project
                    </Link>
                    <Link
                        href={contactHref('consultation')}
                        className="border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary inline-flex min-h-11 items-center justify-center rounded-md border px-6 py-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    >
                        Request a Consultation
                    </Link>
                </div>
                <p className="mt-6 text-sm text-gray-600">
                    Prefer email?{' '}
                    <a href="mailto:info@empuls3.com" className="text-accent-pink underline hover:text-[#a01245]">
                        info@empuls3.com
                    </a>
                </p>
            </div>
        </section>
    );
}
