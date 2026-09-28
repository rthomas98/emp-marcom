import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { CheckCircle2 } from 'lucide-react';
import { clientProfile } from './situations-content';

export function SituationsCta() {
    return (
        <section className="px-[5%] pb-16 md:pb-24 lg:pb-28" aria-labelledby="situations-cta-heading">
            <div className="container mx-auto overflow-hidden rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-12 lg:p-16">
                        <h2 id="situations-cta-heading" className="font-header text-primary mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
                            Tell us what you are building or fixing
                        </h2>
                        <p className="text-lg leading-8 text-gray-700">
                            Share what you want to build or fix, who depends on it, and what happens when it goes wrong. We normally reply within one
                            business day.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                            <Link
                                href={contactHref('project')}
                                className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                            >
                                Discuss Your Situation
                            </Link>
                            <Link
                                href="/case-studies"
                                className="border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary inline-flex min-h-11 items-center justify-center rounded-md border px-6 py-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                            >
                                See Published Work
                            </Link>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8 md:p-12 lg:p-16">
                        <h3 className="text-primary text-xl font-bold">Who we work best with</h3>
                        <ul className="mt-6 space-y-5">
                            {clientProfile.map((item) => (
                                <li key={item} className="flex items-start gap-3 leading-7 text-gray-700">
                                    <CheckCircle2 className="text-accent-pink mt-1 size-5 shrink-0" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
