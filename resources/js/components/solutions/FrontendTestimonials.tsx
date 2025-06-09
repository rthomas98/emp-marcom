import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function FrontendTestimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that. Would absolutely recommend to anyone looking for a top notch design agency to work with! Easy, fun, and talented.",
      name: "Palmer Dean",
      position: "Founder, Wash Metrix",
      image: "/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_0c9ec954-2131-4655-b31f-c9a5c027ba39.png"
    },
    {
      quote: "I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end.",
      name: "John Knight",
      position: "Founder, 24peekview.com",
      image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_20ceb692-4f97-46ca-9d6e-d8e9ad71c06b_0 (1).png"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section id="frontend-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-testimonials-heading">
      <h2 id="frontend-testimonials-heading" className="sr-only">Client Testimonials</h2>
      <div className="container mx-auto">
        <div className="relative pt-20 md:pt-0 md:pb-20" aria-roledescription="carousel" aria-label="Client testimonials carousel">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <article 
                key={index} 
                className={`transition-opacity duration-500 ${activeSlide === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${testimonials.length}`}
                aria-hidden={activeSlide !== index}
              >
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <figure className="relative w-full overflow-hidden rounded-image aspect-[4/3]">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}, ${testimonial.position}`}
                        className="size-full object-cover"
                        width="400"
                        height="300"
                        loading="lazy"
                      />
                      <figcaption className="sr-only">{testimonial.name} from {testimonial.position.split(',')[1].trim()}</figcaption>
                    </figure>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8" role="img" aria-label="5 out of 5 stars rating">
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" aria-hidden="true" />
                    </div>
                    <blockquote className="text-xl font-bold font-header text-primary md:text-2xl">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-gray-700">{testimonial.position}</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-gray-200 sm:mx-0" aria-hidden="true" />
                      <div className="flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                        <p className="font-semibold text-primary">{testimonial.position.split(',')[1].trim()}</p>
                      </div>
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="absolute top-0 flex w-full items-start justify-between md:top-auto md:bottom-0 md:items-end">
            <div className="mt-2.5 flex w-full items-start justify-start md:mt-0 md:mb-2.5" role="tablist" aria-label="Select a testimonial slide to display">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`mx-[3px] inline-block size-2 rounded-full ${
                    activeSlide === index ? "bg-[#1F1946]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={activeSlide === index}
                  role="tab"
                  tabIndex={activeSlide === index ? 0 : -1}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <button 
                onClick={prevSlide}
                className="flex size-12 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button 
                onClick={nextSlide}
                className="flex size-12 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
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
