import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: {
    src: string;
    alt?: string;
  };
  name: string;
  position: string;
  logo: {
    src: string;
    alt?: string;
  };
};

export function MvpTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      numberOfStars: 5,
      quote: "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that. Would absolutely recommend to anyone looking for a top notch design agency to work with! Easy, fun, and talented.",
      avatar: {
        src: "/images/1638545534787.jpeg",
        alt: "Palmer Dean Testimonial"
      },
      name: "Palmer Dean",
      position: "Founder, Wash Metrix",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Wash Metrix Logo"
      }
    },
    {
      numberOfStars: 5,
      quote: "I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end.",
      avatar: {
        src: "/images/305620519_446536930828187_8773084213258704960_n.jpg",
        alt: "John Knight Testimonial"
      },
      name: "John Knight",
      position: "Founder, 24peekview.com",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "24peekview Logo"
      }
    },
    {
      numberOfStars: 5,
      quote: "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick.",
      avatar: {
        src: "/images/image-800x800.webp",
        alt: "James McElroy Testimonial"
      },
      name: "James McElroy",
      position: "Founder & CEO, frienzy.io",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "frienzy.io Logo"
      }
    },
    {
      numberOfStars: 5,
      quote: "Rob did a wonderful job on my webpage and was responsive to my needs. The feedback on my website has been greatly positive.",
      avatar: {
        src: "/images/fx-gs.webp",
        alt: "Theron Williams Testimonial"
      },
      name: "Theron Williams",
      position: "Owner at Theron J Williams Consulting LLC",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "Client Logo"
      }
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section id="mvp-testimonials" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50" aria-labelledby="mvp-testimonials-heading">
      <div className="container mx-auto">
        <div className="mb-12 w-full max-w-2xl md:mb-16 lg:mb-20">
          <h2 id="mvp-testimonials-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Client Success Stories
          </h2>
          <p className="text-gray-700 md:text-lg">
            Hear from startups and businesses that have successfully launched their MVPs with our help.
          </p>
        </div>
        
        <div 
          className="relative pb-20 md:pb-24"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials carousel"
        >
          <div className="overflow-hidden">
            <div 
              className="grid grid-cols-1 gap-8 lg:grid-cols-2"
              aria-live="polite"
            >
              {testimonials.slice(currentIndex, currentIndex + 2 > testimonials.length ? testimonials.length : currentIndex + 2).map((testimonial, index) => (
                <TestimonialCard 
                  key={currentIndex + index} 
                  testimonial={testimonial} 
                  index={currentIndex + index}
                  totalCount={testimonials.length}
                />
              ))}
            </div>
          </div>
          
          <div className="absolute bottom-0 flex w-full items-center justify-between">
            <div 
              className="mt-5 flex w-full items-start justify-start"
              role="tablist"
              aria-label="Select a testimonial"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  onKeyDown={(e) => handleKeyDown(e, () => goToTestimonial(index))}
                  role="tab"
                  aria-selected={currentIndex === index}
                  aria-controls={`testimonial-${index}`}
                  id={`testimonial-tab-${index}`}
                  className={`mx-[3px] inline-block size-2 rounded-full ${
                    currentIndex === index ? "bg-[#BD1550]" : "bg-gray-300"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2`}
                  aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
                  tabIndex={0}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <button 
                onClick={prevTestimonial}
                onKeyDown={(e) => handleKeyDown(e, prevTestimonial)}
                className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </button>
              <button 
                onClick={nextTestimonial}
                onKeyDown={(e) => handleKeyDown(e, nextTestimonial)}
                className="flex size-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
                <span className="sr-only">Next</span>
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
      role="tabpanel"
      id={`testimonial-${index}`}
      aria-labelledby={`testimonial-tab-${index}`}
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${totalCount}`}
    >
      <div 
        className="mb-6 flex md:mb-8"
        role="img"
        aria-label={`${testimonial.numberOfStars} out of 5 stars rating`}
      >
        {Array(testimonial.numberOfStars)
          .fill(null)
          .map((_, starIndex) => (
            <Star key={starIndex} className="size-5 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
          ))}
      </div>
      <blockquote className="mb-6 text-lg font-medium leading-relaxed text-gray-700">
        <p>{testimonial.quote}</p>
      </blockquote>
      <footer className="mt-auto flex w-full flex-col gap-5 md:flex-row md:items-center md:text-left">
        <figure>
          <img
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt || `${testimonial.name}'s profile picture`}
            className="size-14 min-h-14 min-w-14 rounded-full object-cover"
            width="56"
            height="56"
            loading="lazy"
          />
          <figcaption className="sr-only">{testimonial.name}, {testimonial.position}</figcaption>
        </figure>
        <div className="mb-4 md:mb-0">
          <p className="font-semibold text-primary">{testimonial.name}</p>
          <p className="text-gray-600">{testimonial.position}</p>
        </div>
      </footer>
    </article>
  );
};
