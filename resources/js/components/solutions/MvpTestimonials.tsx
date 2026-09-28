import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react';

type Testimonial = {
    relationship: string;
    quote: string;
    avatar: {
        src: string;
        alt: string;
    };
    name: string;
    position: string;
    companyName: string;
};

// Quotes, names, roles and portraits are copied verbatim from the approved home page testimonials.
// No star ratings: the original feedback carries no rating, so none is shown.
const testimonials: Testimonial[] = [
    {
        relationship: 'Client',
        quote: 'Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that. Would absolutely recommend to anyone looking for a top notch design agency to work with! Easy, fun, and talented.',
        avatar: {
            src: '/images/1638545534787.jpeg',
            alt: 'Palmer Dean portrait',
        },
        name: 'Palmer Dean',
        position: 'Founder',
        companyName: 'Wash Metrix',
    },
    {
        relationship: 'Client',
        quote: 'I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end.',
        avatar: {
            src: '/images/305620519_446536930828187_8773084213258704960_n.jpg',
            alt: 'John Knight portrait',
        },
        name: 'John Knight',
        position: 'Founder',
        companyName: '24peekview.com',
    },
    {
        relationship: 'Client',
        quote: 'Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick.',
        avatar: {
            src: '/images/image-800x800.webp',
            alt: 'James McElroy portrait',
        },
        name: 'James McElroy',
        position: 'Founder, CEO',
        companyName: 'frienzy.io',
    },
    {
        relationship: 'Client',
        quote: 'Rob did a wonderful job on my webpage and was responsive to my needs. The feedback on my website has been greatly positive.',
        avatar: {
            src: '/images/fx-gs.webp',
            alt: 'Theron Williams portrait',
        },
        name: 'Theron Williams',
        position: 'Client',
        companyName: 'Owner at Theron J Williams Consulting LLC',
    },
];

const PANEL_ID = 'mvp-testimonials-panel';

export function MvpTestimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const focusTab = (index: number) => {
        const next = (index + testimonials.length) % testimonials.length;
        setCurrentIndex(next);
        tabRefs.current[next]?.focus();
    };

    const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                focusTab(index + 1);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                focusTab(index - 1);
                break;
            case 'Home':
                e.preventDefault();
                focusTab(0);
                break;
            case 'End':
                e.preventDefault();
                focusTab(testimonials.length - 1);
                break;
        }
    };

    const visible = testimonials
        .map((testimonial, index) => ({ testimonial, index }))
        .slice(currentIndex, Math.min(currentIndex + 2, testimonials.length));

    return (
        <section
            id="mvp-testimonials"
            className="overflow-hidden bg-gray-50 px-[5%] py-16 md:py-24 lg:py-28"
            aria-labelledby="mvp-testimonials-heading"
        >
            <div className="container mx-auto">
                <div className="mb-12 w-full max-w-2xl md:mb-16 lg:mb-20">
                    <h2 id="mvp-testimonials-heading" className="font-header text-primary mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
                        Client Feedback
                    </h2>
                    <p className="text-gray-700 md:text-lg">
                        Feedback from founders and business owners who have worked with Rob Thomas and Empuls3.
                    </p>
                </div>

                <div className="relative pb-20 md:pb-24" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
                    <div className="overflow-hidden">
                        <div
                            id={PANEL_ID}
                            role="tabpanel"
                            aria-labelledby={`mvp-testimonial-tab-${currentIndex}`}
                            aria-live="polite"
                            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
                        >
                            {visible.map(({ testimonial, index }) => (
                                <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} totalCount={testimonials.length} />
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-0 flex w-full items-center justify-between">
                        <div className="mt-5 flex w-full items-start justify-start" role="tablist" aria-label="Select a testimonial">
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={testimonial.name}
                                    ref={(el) => {
                                        tabRefs.current[index] = el;
                                    }}
                                    type="button"
                                    onClick={() => setCurrentIndex(index)}
                                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                                    role="tab"
                                    aria-selected={currentIndex === index}
                                    aria-controls={PANEL_ID}
                                    id={`mvp-testimonial-tab-${index}`}
                                    tabIndex={currentIndex === index ? 0 : -1}
                                    className={`mx-[3px] inline-block size-2 rounded-full ${
                                        currentIndex === index ? 'bg-[#BD1550]' : 'bg-gray-300'
                                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2`}
                                    aria-label={`Testimonial ${index + 1} of ${testimonials.length}: ${testimonial.name}`}
                                />
                            ))}
                        </div>
                        <div className="flex items-end justify-end gap-2 md:gap-4">
                            <button
                                type="button"
                                onClick={prevTestimonial}
                                aria-controls={PANEL_ID}
                                className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="size-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={nextTestimonial}
                                aria-controls={PANEL_ID}
                                className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="size-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const TestimonialCard = ({ testimonial, index, totalCount }: { testimonial: Testimonial; index: number; totalCount: number }) => {
    return (
        <article
            className="flex h-full flex-col justify-center rounded-lg bg-white p-8 shadow-sm"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${totalCount}: ${testimonial.name}`}
        >
            <p className="mb-6 text-sm font-semibold tracking-wide text-[#BD1550] uppercase md:mb-8">{testimonial.relationship}</p>
            <blockquote className="mb-6 text-lg leading-relaxed font-medium text-gray-700">
                <p>{testimonial.quote}</p>
            </blockquote>
            <footer className="mt-auto flex w-full flex-col gap-5 md:flex-row md:items-center md:text-left">
                <img
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                    width="56"
                    height="56"
                    loading="lazy"
                />
                <div className="mb-4 md:mb-0">
                    <p className="text-primary font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600">
                        {testimonial.position}, {testimonial.companyName}
                    </p>
                </div>
            </footer>
        </article>
    );
};
