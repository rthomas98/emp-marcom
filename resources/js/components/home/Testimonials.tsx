import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

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
  companyName: string;
};



export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(3);

  // Determine how many items to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials: Testimonial[] = [
    {
      numberOfStars: 5,
      quote: "I gladly managed and collaborated with Rob at Monkeytag. When Rob joined our company, he jumped right into a fast-moving project for a large client. This challenge required him to learn everything quickly and apply his front-end/back-end development skills, knowledge, and understanding to execute efficiently. His personality and team player approach made challenges like this a continued success.",
      avatar: {
        src: "/images/1723665299718.jpeg",
        alt: "Anthony Bearden portrait",
      },
      name: "Anthony Bearden",
      position: "Founder",
      companyName: "Marketer | Consultant | Investor",
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
      companyName: "Customer Obsession Expert",
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
      companyName: "Wash Metrix",
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
      companyName: "24peekview.com",
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
      companyName: "frienzy.io",
    },
    {
      numberOfStars: 5,
      quote: "Rob did a wonderful job on my webpage and was responsive to my needs. The feedback on my website has been greatly positive.",
      avatar: {
        src: "/images/fx-gs.webp",
        alt: "Theron Williams portrait",
      },
      name: "Theron Williams",
      position: "Client",
      companyName: "Owner at Theron J Williams Consulting LLC",
    },
  ];

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  // Calculate which items to show based on current index and visible items
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleItems; i++) {
      const index = (current + i) % testimonials.length;
      result.push({
        testimonial: testimonials[index],
        index
      });
    }
    return result;
  };

  return (
    <section id="testimonials" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h2 id="testimonials-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            200+ Satisfied Dallas Clients Can't Be Wrong
          </h2>
          <p className="text-gray-700 md:text-lg">
            We don't just deliver code—we save businesses time, money, and headaches. See what Dallas companies say about working with senior developers who actually get things done.
          </p>
          <div className="mt-6 inline-flex items-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <div className="flex text-accent-yellow">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} className="size-5 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-primary">4.9/5 Rating</span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold text-primary">200+ Projects</span> Delivered
            </div>
          </div>
        </div>
        
        <div ref={containerRef} className="relative" aria-roledescription="carousel" aria-label="Client testimonials carousel">
          <div className="overflow-hidden">
            <div className="flex" role="region" aria-live="polite">
              {getVisibleTestimonials().map(({ testimonial, index }) => (
                <article 
                  key={index} 
                  className={clsx(
                    "w-full shrink-0 px-3",
                    {
                      "sm:w-1/2": visibleItems === 2,
                      "sm:w-1/2 lg:w-1/3": visibleItems === 3
                    }
                  )}
                  aria-labelledby={`testimonial-author-${index}`}
                >
                  <div className="flex h-full w-full flex-col items-start justify-between border border-gray-200 rounded-lg p-6 md:p-8">
                    <div className="mb-5 flex text-accent-yellow md:mb-6" aria-label={`${testimonial.numberOfStars} out of 5 stars rating`}>
                      {Array(testimonial.numberOfStars)
                        .fill(null)
                        .map((_, starIndex) => (
                          <Star key={starIndex} className="size-5 fill-current" aria-hidden="true" />
                        ))}
                    </div>
                    <blockquote className="text-gray-700 md:text-lg leading-relaxed">"{testimonial.quote}"</blockquote>
                    <footer className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                      <div>
                        <img
                          src={testimonial.avatar.src}
                          alt={testimonial.avatar.alt}
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                          loading="lazy"
                          width="48"
                          height="48"
                        />
                      </div>
                      <div>
                        <p id={`testimonial-author-${index}`} className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-gray-600">
                          <span>{testimonial.position}</span>, <span>{testimonial.companyName}</span>
                        </p>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-start justify-start" role="tablist" aria-label="Testimonial pagination">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                  }}
                  className={clsx("mx-1 inline-block h-2 w-2 rounded-full", {
                    "bg-primary": index === current,
                    "bg-gray-300": index !== current,
                  })}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-selected={index === current}
                  role="tab"
                  tabIndex={index === current ? 0 : -1}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4" role="navigation" aria-label="Testimonial carousel controls">
              <button 
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button 
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
