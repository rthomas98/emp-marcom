'use client';

import { contactHref } from '@/utils/contact-intent';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function EngineeringHeader() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const slides = [
        {
            image: '/images/site-images/rob_thomas23_African_American_Software_Engineers_at_an_agency_762428ff-30ee-4066-88f5-c531dd19c25d_0.png',
            title: 'You Work Directly With Robert',
            description:
                'The senior developer who reviews your systems is the same person who plans, builds, and explains the work. Questions about releases, incidents, or roadmap priorities go straight to Robert. We normally reply to new inquiries within one business day.',
            altText: 'Illustration of people reviewing code at a shared workstation',
        },
        {
            image: '/images/site-images/rob_thomas23_African_American_Software_Engineers_at_an_agency_762428ff-30ee-4066-88f5-c531dd19c25d_2.png',
            title: 'Stabilize What Matters First',
            description:
                'We start by learning the system, its users, and its risks, then fix the problems that interrupt the business before planning larger changes. Work is scoped in steps you can review, so progress and tradeoffs stay visible.',
            altText: 'Illustration of people discussing a project in an office',
        },
        {
            image: '/images/site-images/rob_thomas23_African_American_Software_Engineers_standing_fac_1c490440-96b8-4333-88cd-7c5e0c406ec0_3.png',
            title: 'Honest Advice on Repair or Rebuild',
            description:
                "We'll tell you the truth even when the right answer is a focused repair instead of a rebuild, or when another specialist is a better fit. The recommendation follows the business need, not the size of the project.",
            altText: 'Illustration of a group of people standing together in an office',
        },
    ];

    return (
        <section
            id="engineering-header"
            className="grid grid-cols-1 items-center gap-y-16 overflow-hidden pt-16 sm:overflow-auto md:pt-24 lg:grid-cols-[50%_50%] lg:gap-y-0 lg:pt-0"
            aria-labelledby="engineering-header-title"
        >
            <div className="mx-[5%] max-w-md justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
                <header>
                    <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Software Engineering &amp; IT Consulting</p>
                    <h1 id="engineering-header-title" className="mb-5 text-6xl font-bold text-[#1F1946] md:mb-6 md:text-7xl lg:text-7xl">
                        Senior Engineering Help for Your Critical Software
                    </h1>
                </header>
                <p className="md:text-md text-gray-700">
                    Empuls3 is Robert Thomas, an independent senior developer who gives DFW businesses engineering help for the applications,
                    integrations, and infrastructure they depend on, without building a full internal software department. Bring us in for a defined
                    project, such as an assessment, a new system, or a cloud move, or for ongoing support of the systems you already run.
                </p>
                <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Engineering services navigation">
                    <Link
                        href={contactHref('project')}
                        className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    >
                        Let’s Talk About Your Project
                    </Link>
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                    >
                        See Published Work
                    </Link>
                </nav>
            </div>
            <div
                className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full bg-[#f5f5f5] text-center"
                aria-roledescription="carousel"
                aria-label="Software engineering services carousel"
            >
                <div className="relative h-full w-full overflow-hidden" aria-live="polite">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${
                                currentSlide === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                            }`}
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Slide ${index + 1} of ${totalSlides}: ${slide.title}`}
                            aria-hidden={currentSlide !== index}
                        >
                            <div className="flex h-screen flex-col">
                                <figure className="relative flex-1">
                                    <img
                                        className="absolute h-full w-full object-cover"
                                        src={slide.image}
                                        alt={slide.altText}
                                        width="800"
                                        height="600"
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                    />
                                </figure>
                                <div className="relative bg-white px-6 pt-6 pb-32 sm:px-8 sm:pt-8">
                                    <div className="w-full max-w-lg text-left">
                                        <h2 className="text-md mb-1 leading-[1.4] font-bold text-[#1F1946] md:text-xl">{slide.title}</h2>
                                        <p className="text-gray-700">{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div
                        className="absolute top-auto right-auto bottom-[52px] left-8 flex w-full items-start justify-start"
                        role="group"
                        aria-label="Select a slide to show"
                    >
                        {slides.map((slide, index) => (
                            <button
                                type="button"
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`mx-[3px] inline-block h-2 w-2 rounded-full focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none ${currentSlide === index ? 'bg-[#1F1946]' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                                aria-pressed={currentSlide === index}
                            />
                        ))}
                    </div>

                    <div className="absolute right-8 bottom-2 flex items-center gap-4">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="flex h-12 w-12 items-center justify-center bg-transparent focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="h-6 w-6 text-[#1F1946]" aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            onClick={handleNext}
                            className="flex h-12 w-12 items-center justify-center bg-transparent focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2 focus-visible:outline-none"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="h-6 w-6 text-[#1F1946]" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
