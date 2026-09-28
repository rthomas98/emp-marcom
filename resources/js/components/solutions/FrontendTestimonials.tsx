import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

type Testimonial = {
    quote: string;
    name: string;
    position: string;
    companyName: string;
    avatar: string;
};

// Quotes, names, roles and avatars are copied verbatim from the approved list in components/home/Testimonials.tsx.
const testimonials: Testimonial[] = [
    {
        quote: 'Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that. Would absolutely recommend to anyone looking for a top notch design agency to work with! Easy, fun, and talented.',
        name: 'Palmer Dean',
        position: 'Founder',
        companyName: 'Wash Metrix',
        avatar: '/images/1638545534787.jpeg',
    },
    {
        quote: 'I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end.',
        name: 'John Knight',
        position: 'Founder',
        companyName: '24peekview.com',
        avatar: '/images/305620519_446536930828187_8773084213258704960_n.jpg',
    },
];

export function FrontendTestimonials() {
    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section id="frontend-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-testimonials-heading">
            <h2 id="frontend-testimonials-heading" className="sr-only">
                Client Feedback
            </h2>
            <div className="container mx-auto">
                <div className="relative pt-20 md:pt-0 md:pb-20" aria-roledescription="carousel" aria-label="Client feedback">
                    <div className="relative" aria-live="polite">
                        {testimonials.map((testimonial, index) => (
                            <article
                                key={testimonial.name}
                                className={`transition-opacity duration-500 ${activeSlide === index ? 'opacity-100' : 'absolute inset-0 opacity-0'}`}
                                aria-roledescription="slide"
                                aria-label={`${index + 1} of ${testimonials.length}`}
                                aria-hidden={activeSlide !== index}
                            >
                                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                                    <div className="order-last md:order-first">
                                        <figure className="rounded-image relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#F8F9FA]">
                                            <img
                                                src={testimonial.avatar}
                                                alt={`${testimonial.name} portrait`}
                                                className="size-32 rounded-full object-cover md:size-40"
                                                width="160"
                                                height="160"
                                                loading="lazy"
                                            />
                                        </figure>
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <p className="mb-6 rounded-full bg-[#BD1550]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#BD1550] uppercase md:mb-8">
                                            Client
                                        </p>
                                        <blockquote className="font-header text-primary text-xl font-bold md:text-2xl">
                                            &ldquo;{testimonial.quote}&rdquo;
                                        </blockquote>
                                        <footer className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                                            <div>
                                                <p className="text-primary font-semibold">{testimonial.name}</p>
                                                <p className="text-gray-700">{testimonial.position}</p>
                                            </div>
                                            <div className="mx-4 w-px self-stretch bg-gray-200 sm:mx-0" aria-hidden="true" />
                                            <div className="flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                                                <p className="text-primary font-semibold">{testimonial.companyName}</p>
                                            </div>
                                        </footer>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="absolute top-0 flex w-full items-start justify-between md:top-auto md:bottom-0 md:items-end">
                        <div
                            className="mt-2.5 flex w-full items-start justify-start md:mt-0 md:mb-2.5"
                            role="group"
                            aria-label="Choose a testimonial"
                        >
                            {testimonials.map((testimonial, index) => (
                                <button
                                    type="button"
                                    key={testimonial.name}
                                    onClick={() => setActiveSlide(index)}
                                    className="flex size-6 items-center justify-center rounded-full focus:ring-2 focus:ring-[#BD1550] focus:outline-none"
                                    aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
                                    aria-current={activeSlide === index ? 'true' : undefined}
                                >
                                    <span
                                        className={`inline-block size-2 rounded-full ${activeSlide === index ? 'bg-[#1F1946]' : 'bg-gray-300'}`}
                                        aria-hidden="true"
                                    />
                                </button>
                            ))}
                        </div>
                        <div className="flex items-end justify-end gap-2 md:gap-4">
                            <button
                                type="button"
                                onClick={prevSlide}
                                className="flex size-12 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="size-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={nextSlide}
                                className="flex size-12 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 focus:outline-none"
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
