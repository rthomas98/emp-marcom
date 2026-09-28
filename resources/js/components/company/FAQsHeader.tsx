import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import React from 'react';

type ImageProps = {
    src: string;
    alt: string;
};

type Props = {
    heading: string;
    description: string;
    image: ImageProps;
};

export type FAQsHeaderProps = React.ComponentPropsWithoutRef<'section'> & Partial<Props>;

export function FAQsHeader(props: FAQsHeaderProps) {
    const { heading, description, image, ...rest } = {
        ...FAQsHeaderDefaults,
        ...props,
    };

    return (
        <section id="faqs-header" className="relative px-[5%]" aria-labelledby="faqs-heading" {...rest}>
            <div className="container mx-auto flex max-h-[60rem] min-h-svh">
                <div className="py-16 md:py-24 lg:py-28">
                    <div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
                        <div className="mx-[7.5%] flex flex-col justify-end">
                            <p className="md:text-md text-white">{description}</p>
                        </div>

                        <div className="order-first flex flex-col justify-start md:order-last md:justify-center">
                            <h1 id="faqs-heading" className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                                {heading}
                            </h1>
                            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                                <a
                                    href="#faq-categories"
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#BD1550] px-6 py-3 text-center font-medium text-white transition hover:bg-[#a01245] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
                                >
                                    Browse the Questions
                                </a>
                                <Link
                                    href={contactHref('consultation')}
                                    className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-center font-medium text-white transition hover:bg-white hover:text-[#1F1946] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F1946]"
                                >
                                    Send Us Your Question
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <img src={image.src} className="h-full w-full object-cover" alt={image.alt} width="1600" height="900" />
                <div className="absolute inset-0 bg-[#1F1946]/80" />
            </div>
        </section>
    );
}

export const FAQsHeaderDefaults: Props = {
    heading: 'Questions We Hear Before a Project Starts',
    description:
        'Straight answers about fit, new website and app projects, software reviews, project size, remote delivery, security, and who owns the work. Founded by Robert Thomas in 2009, Empuls3 works with Dallas–Fort Worth businesses.',
    image: {
        src: '/images/site-images/rob_thomas23_An_African_American_team_in_a_modern_office_discus_a844819d-3fdf-44f6-a340-17d5089a15e7.png',
        alt: '',
    },
};
