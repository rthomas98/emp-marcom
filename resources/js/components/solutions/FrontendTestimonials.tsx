import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function FrontendTestimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Empuls3 transformed our online presence with their exceptional front-end development and UX/UI design. The user engagement has significantly increased since the launch of our new interface.",
      name: "Jane Doe",
      position: "CEO, Tech Innovations",
      image: "/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_0c9ec954-2131-4655-b31f-c9a5c027ba39.png"
    },
    {
      quote: "The responsive design and intuitive user interface created by Empuls3 has dramatically improved our conversion rates. Their attention to detail and focus on user experience is unmatched.",
      name: "Michael Johnson",
      position: "Marketing Director, Digital Solutions",
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
    <section id="frontend-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="relative pt-20 md:pt-0 md:pb-20">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${activeSlide === index ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              >
                <div className="grid w-full auto-cols-fr grid-cols-1 items-center justify-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-x-20">
                  <div className="order-last md:order-first">
                    <div className="relative w-full overflow-hidden rounded-image aspect-[4/3]">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} testimonial`}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="mb-6 flex md:mb-8">
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
                      <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
                    </div>
                    <blockquote className="text-xl font-bold font-header text-primary md:text-2xl">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mt-6 flex flex-nowrap items-center gap-5 md:mt-8">
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-gray-700">{testimonial.position}</p>
                      </div>
                      <div className="mx-4 w-px self-stretch bg-gray-200 sm:mx-0" />
                      <div className="flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                        <p className="font-semibold text-primary">{testimonial.position.split(',')[1].trim()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 flex w-full items-start justify-between md:top-auto md:bottom-0 md:items-end">
            <div className="mt-2.5 flex w-full items-start justify-start md:mt-0 md:mb-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`mx-[3px] inline-block size-2 rounded-full ${
                    activeSlide === index ? "bg-[#1F1946]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <button 
                onClick={prevSlide}
                className="flex size-12 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button 
                onClick={nextSlide}
                className="flex size-12 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
