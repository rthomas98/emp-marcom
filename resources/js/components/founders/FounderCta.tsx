import { contactHref, type ContactIntent } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

type FounderCtaProps = {
    heading: string;
    body: string;
    intent: ContactIntent;
    primaryLabel?: string;
    secondary: { label: string; href: string };
    note?: string;
};

/** Closing call to action shared by /for-founders and /for-incubators. */
export function FounderCta({ heading, body, intent, primaryLabel = 'Let’s Talk About Your Project', secondary, note }: FounderCtaProps) {
    return (
        <section className="bg-primary px-[5%] py-16 text-white md:py-24" aria-labelledby="founder-cta-heading">
            <div className="container mx-auto max-w-3xl text-center">
                <h2 id="founder-cta-heading" className="font-header mb-5 text-4xl font-bold md:mb-6 md:text-5xl">
                    {heading}
                </h2>
                <p className="text-white/90 md:text-lg">{body}</p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href={contactHref(intent)}
                        className="bg-accent-pink hover:bg-accent-pink/90 inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
                    >
                        {primaryLabel}
                    </Link>
                    <Link
                        href={secondary.href}
                        className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/70 px-6 py-2.5 font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
                    >
                        {secondary.label}
                        <ChevronRight className="ml-1 size-4" aria-hidden="true" />
                    </Link>
                </div>
                {note && <p className="mt-6 text-sm text-white/75">{note}</p>}
            </div>
        </section>
    );
}
