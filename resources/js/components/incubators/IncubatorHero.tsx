import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { incubatorHero } from './incubator-content';

export function IncubatorHero() {
    const { image } = incubatorHero;

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="incubator-hero-heading">
            <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2 md:items-center">
                <div>
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">{incubatorHero.eyebrow}</p>
                    <h1
                        id="incubator-hero-heading"
                        className="font-header text-primary mb-5 text-4xl leading-tight font-bold md:mb-6 md:text-5xl lg:text-6xl"
                    >
                        {incubatorHero.heading}
                    </h1>
                    <p className="text-lg leading-8 text-gray-700">{incubatorHero.introduction}</p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <Link
                            href={contactHref('consultation')}
                            className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            Discuss Your Program
                        </Link>
                        <Link
                            href="/for-founders"
                            className="border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary inline-flex min-h-11 items-center justify-center rounded-md border px-6 py-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            See the Founder Path
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="aspect-[3/2] w-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
