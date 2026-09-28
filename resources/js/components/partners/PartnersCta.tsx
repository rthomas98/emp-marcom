import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { conversationPrep } from './partners-content';

export function PartnersCta() {
    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="partners-cta-heading">
            <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-2 lg:items-center">
                <div>
                    <h2 id="partners-cta-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                        Tell us about the project and who is involved
                    </h2>
                    <p className="text-lg leading-8 text-gray-700">
                        Agencies can describe the client project and the development help they need. Internal teams can tell us about the system to
                        improve or the new website or app to build. We normally reply within one business day.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <Link
                            href={contactHref('project')}
                            className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            Discuss a Collaboration
                        </Link>
                        <Link
                            href="/case-studies"
                            className="border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary inline-flex min-h-11 items-center justify-center rounded-md border px-6 py-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            See Published Work
                        </Link>
                    </div>
                </div>
                <div className="rounded-lg bg-[#1F1946] p-8 text-white md:p-10">
                    <h3 className="font-header text-2xl font-bold">Helpful to share in your first message</h3>
                    <ul className="mt-6 space-y-4">
                        {conversationPrep.map((item) => (
                            <li key={item} className="flex items-start gap-3 leading-7 text-white/90">
                                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#BD1550]" aria-hidden="true">
                                    <Check className="size-3.5" />
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 border-t border-white/15 pt-6 text-sm text-white/70">
                        Please do not include passwords, credentials, or regulated data in the form.
                    </p>
                </div>
            </div>
        </section>
    );
}
