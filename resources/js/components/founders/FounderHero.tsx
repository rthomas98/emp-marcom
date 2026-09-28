import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { BLUEPRINT_PRICE, founderHero } from './founder-content';

export function FounderHero() {
    const { image } = founderHero;

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="founder-hero-heading">
            <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2 md:items-center">
                <div>
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">{founderHero.eyebrow}</p>
                    <h1
                        id="founder-hero-heading"
                        className="font-header text-primary mb-5 text-4xl leading-tight font-bold md:mb-6 md:text-5xl lg:text-6xl"
                    >
                        {founderHero.heading}
                    </h1>
                    <p className="text-lg leading-8 text-gray-700">{founderHero.introduction}</p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <Link
                            href={contactHref('product-planning')}
                            className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            Let’s Talk About Your Project
                        </Link>
                        <a
                            href="#founder-path"
                            className="border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary inline-flex min-h-11 items-center justify-center rounded-md border px-6 py-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            See How It Works
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                        Product Blueprint planning starts at {BLUEPRINT_PRICE}. Building the first release is estimated separately.
                    </p>
                </div>
                <div>
                    <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="aspect-[7/4] w-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
