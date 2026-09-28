import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { aboutImages } from './about-content';

type AboutHeaderProps = {
    eyebrow: string;
    heading: string;
    introduction: string;
};

const facts = [
    { label: 'Founded', value: '2009' },
    { label: 'Based in', value: 'Dallas–Fort Worth' },
    { label: 'Working model', value: 'Remote-first, senior-led' },
];

export function AboutHeader({ eyebrow, heading, introduction }: AboutHeaderProps) {
    const image = aboutImages.hero;

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="about-heading">
            <div className="container mx-auto grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2 md:items-center">
                <div>
                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">{eyebrow}</p>
                    <h1 id="about-heading" className="font-header text-primary mb-5 text-4xl leading-tight font-bold md:mb-6 md:text-6xl lg:text-7xl">
                        {heading}
                    </h1>
                    <p className="text-lg leading-8 text-gray-700">{introduction}</p>
                    <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                        <Link
                            href={contactHref('new-project')}
                            className="bg-accent-pink hover:bg-accent-pink/90 focus-visible:ring-accent-pink inline-flex min-h-11 items-center justify-center rounded-md px-6 py-2.5 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            Start a New Project
                        </Link>
                        <a
                            href="#about-process"
                            className="border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary inline-flex min-h-11 items-center justify-center rounded-md border px-6 py-2.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                        >
                            See How We Work
                        </a>
                    </div>
                    <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3">
                        {facts.map((fact) => (
                            <div key={fact.label}>
                                <dt className="text-sm text-gray-600">{fact.label}</dt>
                                <dd className="text-primary mt-1 font-semibold">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div>
                    <img
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="aspect-[4/5] w-full rounded-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
