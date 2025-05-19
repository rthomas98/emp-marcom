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
        src: "/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png",
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
        src: "/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png",
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
        src: "/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png",
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
        src: "/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png",
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
        src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_1e9c41b2-97f0-453f-a3ac-3d7547b2c689_3.png",
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
        src: "/images/site-images/rob_thomas23_African_American_Project_Manager_Makes_a_Presentat_ff51deb6-2b53-4935-b091-29dd4ac7a594.png",
        alt: "Theron Williams portrait",
      },
      name: "Theron Williams",
      position: "Client",
      companyName: "Satisfied Customer",
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
            Client Testimonials
          </h2>
          <p className="text-gray-700 md:text-lg">
            Don't just take our word for it. Here's what our clients have to say about working with Empuls3.
          </p>
        </div>
        
        <div ref={containerRef} className="relative">
          <div className="overflow-hidden">
            <div className="flex">
              {getVisibleTestimonials().map(({ testimonial, index }) => (
                <div 
                  key={index} 
                  className={clsx(
                    "w-full shrink-0 px-3",
                    {
                      "sm:w-1/2": visibleItems === 2,
                      "sm:w-1/2 lg:w-1/3": visibleItems === 3
                    }
                  )}
                >
                  <div className="flex h-full w-full flex-col items-start justify-between border border-gray-200 rounded-lg p-6 md:p-8">
                    <div className="mb-5 flex text-accent-yellow md:mb-6">
                      {Array(testimonial.numberOfStars)
                        .fill(null)
                        .map((_, starIndex) => (
                          <Star key={starIndex} className="size-5 fill-current" />
                        ))}
                    </div>
                    <blockquote className="text-gray-700 md:text-lg italic">"{testimonial.quote}"</blockquote>
                    <div className="mt-5 flex w-full flex-col items-start gap-4 md:mt-6 md:w-auto md:flex-row md:items-center">
                      <div>
                        <img
                          src={testimonial.avatar.src}
                          alt={testimonial.avatar.alt}
                          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-gray-600">
                          <span>{testimonial.position}</span>, <span>{testimonial.companyName}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-start justify-start">
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
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <button 
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary hover:bg-gray-50"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-primary hover:bg-gray-50"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
