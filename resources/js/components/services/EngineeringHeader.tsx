'use client';

import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export function EngineeringHeader() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    // Auto-advance slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

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
            title: 'You Work With The Developers, Not Account Managers',
            description:
                "Tired of playing telephone through account managers who can't spell API? Work directly with developers who've been coding since the 90s. We answer our own emails, pick up our phones, and actually understand your problems.",
            altText: 'Senior software engineers collaborating on a project at Empuls3 micro agency',
        },
        {
            image: '/images/site-images/rob_thomas23_African_American_Software_Engineers_at_an_agency_762428ff-30ee-4066-88f5-c531dd19c25d_2.png',
            title: 'We Fix It In Weeks, Not Months',
            description:
                "Big agencies need 6 months for a 2-week project. We don't. Our senior developers have seen your problem before and know exactly how to fix it. No learning on your dime, no endless meetings, just results.",
            altText: 'Software engineering team working on implementing solutions with personalized attention',
        },
        {
            image: '/images/site-images/rob_thomas23_African_American_Software_Engineers_standing_fac_1c490440-96b8-4333-88cd-7c5e0c406ec0_3.png',
            title: 'Honest Advice That Saves You Money',
            description:
                "We'll tell you the truth even when the right answer is a focused repair instead of a rebuild, or when another specialist is a better fit. The recommendation follows the business need, not the size of the project.",
            altText: 'IT consultants providing strategic guidance to clients at Empuls3',
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
                    <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Real Developers. Real Solutions.</p>
                    <h1 id="engineering-header-title" className="mb-5 text-6xl font-bold text-[#1F1946] md:mb-6 md:text-7xl lg:text-7xl">
                        We Fix Software That Other Agencies Broke
                    </h1>
                </header>
                <p className="md:text-md text-gray-700">
                    If a vendor disappeared, releases are risky, or a legacy system cannot keep pace with the business, our senior engineers can
                    assess the situation, stabilize what matters, and create a controlled modernization path.
                </p>
                <nav className="mt-6 flex flex-wrap gap-4 md:mt-8" aria-label="Engineering services navigation">
                    <Link
                        href="#services"
                        className="inline-flex items-center justify-center rounded-md bg-[#BD1550] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                        aria-label="Learn more about our engineering services"
                    >
                        Learn More
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md border border-[#1F1946] bg-transparent px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                        aria-label="Contact us about software engineering services"
                    >
                        Contact Us
                    </Link>
                </nav>
            </div>
            <div
                className="relative clear-both h-[300px] max-h-[60rem] min-h-screen w-full bg-[#f5f5f5] text-center"
                aria-roledescription="carousel"
                aria-label="Software engineering services carousel"
            >
                <div className="relative h-full w-full overflow-hidden">
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
                                        loading="lazy"
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
                        role="tablist"
                        aria-label="Select a slide to show"
                    >
                        {slides.map((slide, index) => (
                            <button
                                type="button"
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`mx-[3px] inline-block h-2 w-2 rounded-full ${currentSlide === index ? 'bg-[#1F1946]' : 'bg-gray-300'}`}
                                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                                aria-selected={currentSlide === index}
                                role="tab"
                                tabIndex={currentSlide === index ? 0 : -1}
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
