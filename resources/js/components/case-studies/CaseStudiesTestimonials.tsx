"use client";

import React from "react";
import { useState } from "react";
import clsx from "clsx";
import { Star } from "lucide-react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  logo?: ImageProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type CaseStudiesTestimonialsProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CaseStudiesTestimonials = (props: CaseStudiesTestimonialsProps) => {
  const { heading, description, testimonials, className, ...rest } = {
    ...CaseStudiesTestimonialsDefaults,
    ...props,
  };

  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // swiped left
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      // swiped right
      handlePrev();
    }
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section 
      className={clsx("overflow-hidden px-[5%] py-16 md:py-24 lg:py-28", className)}
      {...rest}
    >
      <div className="container mx-auto">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-secondary md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        
        <div className="relative pb-20 md:pb-24">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 md:px-8 lg:w-1/2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 flex w-full items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-primary": current === index,
                    "bg-gray-300": current !== index,
                  })}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <button 
                onClick={handlePrev}
                className="flex size-12 items-center justify-center rounded-full border border-gray-300 bg-white text-secondary transition-colors hover:bg-gray-100"
                aria-label="Previous slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="#1F1946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="flex size-12 items-center justify-center rounded-full border border-gray-300 bg-white text-secondary transition-colors hover:bg-gray-100"
                aria-label="Next slide"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="#1F1946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="mx-auto flex h-full max-w-lg flex-col justify-center">
      <div className="mb-6 flex text-primary md:mb-8">
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <Star key={starIndex} className="size-6 fill-primary" />
          ))}
      </div>
      <blockquote className="text-md font-bold leading-[1.4] text-secondary md:text-xl">
        {testimonial.quote}
      </blockquote>
      <div className="mt-6 flex w-full flex-col gap-5 md:mt-8 md:w-auto md:flex-row md:items-center md:text-left">
        <div>
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt || `${testimonial.name}'s avatar`}
            className="size-14 min-h-14 min-w-14 rounded-full object-cover border-0"
          />
        </div>
        <div className="mb-4 md:mb-0">
          <p className="font-semibold text-secondary">{testimonial.name}</p>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
        {testimonial.logo && (
          <>
            <div className="hidden w-px self-stretch bg-gray-200 md:block" />
            <div>
              <img 
                src={testimonial.logo.src} 
                alt={testimonial.logo.alt || `${testimonial.name}'s company logo`} 
                className="max-h-12 border-0" 
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Real testimonials from the existing component
const sampleTestimonials = [
  {
    numberOfStars: 5,
    quote: "I gladly managed and collaborated with Rob at Monkeytag. When Rob joined our company, he jumped right into a fast-moving project for a large client. This challenge required him to learn everything quickly and apply his front-end/back-end development skills, knowledge, and understanding to execute efficiently. His personality and team player approach made challenges like this a continued success.",
    avatar: {
      src: "/images/1723665299718.jpeg",
      alt: "Anthony Bearden portrait",
    },
    name: "Anthony Bearden",
    position: "Founder",
    logo: {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Marketer | Consultant | Investor",
    },
  },
  {
    numberOfStars: 5,
    quote: "Robert is a great member of the team. He is enthusiastic and very engaged with the work he is doing. Robert offers input and looks to solve issues before they occur.",
    avatar: {
      src: "/images/1716269447337.jpeg",
      alt: "Sean Daley portrait",
    },
    name: "Sean Daley",
    position: "Business Ecosystem Connector",
    logo: {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Customer Obsession Expert",
    },
  },
  {
    numberOfStars: 5,
    quote: "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that. Would absolutely recommend to anyone looking for a top notch design agency to work with! Easy, fun, and talented.",
    avatar: {
      src: "/images/1638545534787.jpeg",
      alt: "Palmer Dean portrait",
    },
    name: "Palmer Dean",
    position: "Founder",
    logo: {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "Wash Metrix",
    },
  },
  {
    numberOfStars: 5,
    quote: "I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end.",
    avatar: {
      src: "/images/305620519_446536930828187_8773084213258704960_n.jpg",
      alt: "John Knight portrait",
    },
    name: "John Knight",
    position: "Founder",
    logo: {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "24peekview.com",
    },
  },
  {
    numberOfStars: 5,
    quote: "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick.",
    avatar: {
      src: "/images/image-800x800.webp",
      alt: "James McElroy portrait",
    },
    name: "James McElroy",
    position: "Founder, CEO",
    logo: {
      src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
      alt: "frienzy.io",
    },
  },
];

export const CaseStudiesTestimonialsDefaults: Props = {
  heading: "Client Testimonials",
  description: "Hear what our clients have to say about their experience working with us and the results we've delivered.",
  testimonials: sampleTestimonials,
};

export default CaseStudiesTestimonials;
