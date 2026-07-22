import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type ImageProps = {
    src: string;
    alt?: string;
};

type ContentProps = {
    tagline: string;
    heading: string;
    description: string;
    buttons: {
        title: string;
        href: string;
        variant?: 'primary' | 'secondary' | 'link';
    }[];
    image: ImageProps;
};

type Props = {
    contents: ContentProps[];
    images: ImageProps[];
};

export type FeaturesProps = React.ComponentPropsWithoutRef<'section'> & Partial<Props>;

export const Features = (props: FeaturesProps) => {
    const { contents, images } = {
        ...FeaturesDefaults,
        ...props,
    };

    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const sectionHeight = window.innerHeight;
            const currentScrollPosition = window.scrollY + sectionHeight / 2;
            const currentSection = Math.floor(currentScrollPosition / sectionHeight);
            setActiveSection(currentSection >= 0 && currentSection < contents.length ? currentSection : 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [contents.length]);

    return (
        <section id="features" className="px-[5%]" aria-labelledby="features-heading">
            <h2 id="features-heading" className="sr-only">
                Our Core Services and Features
            </h2>
            <div className="container mx-auto">
                <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
                    <div
                        className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center"
                        role="region"
                        aria-label="Feature images gallery"
                    >
                        {images.map((image, index) => (
                            <figure
                                key={index}
                                className={clsx('absolute w-full transition-opacity duration-500', {
                                    'opacity-100': activeSection === index,
                                    'opacity-0': activeSection !== index,
                                })}
                                aria-hidden={activeSection !== index}
                            >
                                <img
                                    src={image.src}
                                    className="w-full rounded-lg border border-gray-200"
                                    alt={image.alt || `Feature image ${index + 1}`}
                                    loading="lazy"
                                    width="600"
                                    height="400"
                                />
                                <figcaption className="sr-only">
                                    {contents[index]?.tagline} - {contents[index]?.heading}
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:block">
                        {contents.map((content, index) => (
                            <article
                                key={index}
                                id={`feature-${index + 1}`}
                                className="feature-item"
                                aria-labelledby={`feature-heading-${index + 1}`}
                            >
                                <div className="flex flex-col items-start justify-center md:h-screen">
                                    <p className="text-accent-pink mb-3 font-semibold md:mb-4">{content.tagline}</p>
                                    <h3
                                        id={`feature-heading-${index + 1}`}
                                        className="font-header text-primary mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl"
                                    >
                                        {content.heading}
                                    </h3>
                                    <p className="text-gray-700 md:text-lg">{content.description}</p>
                                    <div
                                        className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
                                        role="navigation"
                                        aria-labelledby={`feature-heading-${index + 1}`}
                                    >
                                        {content.buttons.map((button, buttonIndex) => {
                                            if (button.variant === 'secondary') {
                                                return (
                                                    <Link
                                                        key={buttonIndex}
                                                        href={button.href}
                                                        className="border-primary text-primary hover:bg-primary/10 focus:ring-primary inline-flex h-10 items-center justify-center rounded-md border bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                                        aria-label={`${button.title} about ${content.tagline}`}
                                                    >
                                                        {button.title}
                                                    </Link>
                                                );
                                            } else if (button.variant === 'link') {
                                                return (
                                                    <Link
                                                        key={buttonIndex}
                                                        href={button.href}
                                                        className="text-primary hover:text-accent-pink inline-flex items-center"
                                                        aria-label={`${button.title} about ${content.tagline}`}
                                                    >
                                                        {button.title}
                                                        <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
                                                    </Link>
                                                );
                                            } else {
                                                return (
                                                    <Link
                                                        key={buttonIndex}
                                                        href={button.href}
                                                        className="bg-accent-pink hover:bg-accent-pink/90 focus:ring-accent-pink inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
                                                        aria-label={`${button.title} about ${content.tagline}`}
                                                    >
                                                        {button.title}
                                                    </Link>
                                                );
                                            }
                                        })}
                                    </div>
                                    <figure className="mt-10 block w-full md:hidden">
                                        <img
                                            src={content.image.src}
                                            className="w-full rounded-lg border border-gray-200"
                                            alt={content.image.alt || `Feature mobile image ${index + 1}`}
                                            loading="lazy"
                                            width="600"
                                            height="400"
                                        />
                                        <figcaption className="sr-only">
                                            {content.tagline} - {content.heading}
                                        </figcaption>
                                    </figure>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export const FeaturesDefaults: Props = {
    contents: [
        {
            tagline: 'Software Rescue & Legacy Modernization',
            heading: 'Stabilize the Systems Your Business Depends On',
            description:
                'We diagnose brittle applications, production failures, performance problems, and aging codebases, then create a practical path from immediate stabilization to maintainable modernization. You work directly with senior engineers throughout the engagement.',
            buttons: [
                { title: 'Explore Modernization', href: '/solutions/software-development-design', variant: 'secondary' },
                { title: 'Request a Review', href: '/contact', variant: 'link' },
            ],
            image: {
                src: '/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png',
                alt: 'Senior software engineers reviewing a legacy application',
            },
        },
        {
            tagline: 'CRM, API & Workflow Integration',
            heading: 'Connect the Systems That Keep Your Team Moving',
            description:
                'We connect CRMs, line-of-business applications, vendor APIs, databases, and manual workflows so information moves reliably and teams stop re-entering the same data. Every integration includes clear ownership, failure handling, and operational visibility.',
            buttons: [
                { title: 'Explore API Integration', href: '/solutions/backend-api-development', variant: 'secondary' },
                { title: 'Discuss Your Systems', href: '/contact', variant: 'link' },
            ],
            image: {
                src: '/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png',
                alt: 'Business systems connected through a modern integration workflow',
            },
        },
        {
            tagline: 'Ongoing Senior Engineering Support',
            heading: 'Add Experienced Engineering Capacity Without Another Handoff',
            description:
                'Keep critical systems healthy with direct access to senior engineers who can investigate incidents, reduce technical debt, improve delivery pipelines, and own the next round of enhancements without forcing your team to start over with a new vendor.',
            buttons: [
                { title: 'Explore Engineering Support', href: '/services/software-engineering-it-consulting', variant: 'secondary' },
                { title: 'See How We Work', href: '/company/about', variant: 'link' },
            ],
            image: {
                src: '/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png',
                alt: 'Senior engineer providing ongoing application support',
            },
        },
        {
            tagline: 'Focused Web Modernization',
            heading: 'Modernize the Customer Experience When the Website Is the Bottleneck',
            description:
                'For established service businesses whose website no longer reflects their expertise, we modernize the experience, content structure, performance, analytics, and lead path. This remains a focused engagement tied to a measurable business problem—not a generic redesign package.',
            buttons: [
                { title: 'Explore Web Modernization', href: '/solutions/web-ecommerce-development', variant: 'secondary' },
                { title: 'View Case Studies', href: '/case-studies', variant: 'link' },
            ],
            image: {
                src: '/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png',
                alt: 'Designers and engineers modernizing a business website',
            },
        },
    ],
    images: [
        {
            src: '/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png',
            alt: 'Software development team collaborating on custom solutions',
        },
        {
            src: '/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png',
            alt: 'E-commerce website displayed on laptop and mobile devices',
        },
        {
            src: '/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png',
            alt: 'Backend developer working on API infrastructure',
        },
        {
            src: '/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png',
            alt: 'UX/UI designers collaborating on interface design',
        },
    ],
};
