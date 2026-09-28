import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { partnersImages } from './partners-content';

type PartnersHeroProps = {
    eyebrow: string;
    heading: string;
    introduction: string;
};

export function PartnersHero({ eyebrow, heading, introduction }: PartnersHeroProps) {
    const image = partnersImages.panorama;

    return (
        <section className="px-[5%] pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20" aria-labelledby="partners-heading">
            <div className="container mx-auto">
                <div className="mx-auto mb-10 max-w-5xl text-center md:mb-12">
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">{eyebrow}</p>
                    <h1
                        id="partners-heading"
                        className="font-header text-primary mb-5 text-4xl leading-tight font-bold md:mb-6 md:text-6xl lg:text-7xl"
                    >
                        {heading}
                    </h1>
                    <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-700">{introduction}</p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-8">
                        <Link
                            href={contactHref('project')}
                            className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            Discuss a Collaboration
                        </Link>
                        <a
                            href="#relationship-types"
                            className="border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary inline-flex min-h-11 items-center justify-center rounded-md border px-6 py-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            See How We Work Together
                        </a>
                    </div>
                </div>
                <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-[16/9] lg:aspect-[21/9]"
                />
            </div>
        </section>
    );
}
