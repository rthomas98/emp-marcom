import React from "react";

type Testimonial = {
  quote: string;
  author: string;
  position: string;
  avatar: string;
};

export function MobileTestimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "The mobile app developed by Empuls3 exceeded our expectations!",
      author: "Alice Johnson",
      position: "CTO, TechCorp",
      avatar: "/images/site-images/rob_thomas23_Portrait_of_happy_African_American_business_people_453fe4c5-c7a7-4d1e-9b53-fee82b42f03b.png"
    },
    {
      quote: "Empuls3's expertise in cross-platform development is unmatched!",
      author: "Mark Smith",
      position: "CEO, InnovateX",
      avatar: "/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
    },
    {
      quote: "Their solutions helped us reach a wider audience effortlessly.",
      author: "Sara Lee",
      position: "Product Manager, ShopNow",
      avatar: "/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
    }
  ];
  
  return (
    <section id="mobile-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold text-primary md:mb-6 md:text-7xl lg:text-6xl">
            Customer Testimonials
          </h2>
          <p className="md:text-md text-gray-700 max-w-4xl">
            We specialize in transforming innovative ideas into seamless mobile
            experiences that captivate users and enhance engagement. Our team is
            dedicated to crafting intuitive designs and functionalities that not
            only meet your vision but also elevate the overall user experience,
            ensuring every interaction is smooth and enjoyable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex h-full max-w-lg flex-col items-start justify-start text-left">
              <div className="mb-6 flex md:mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#BD1550" className="h-6 w-6 mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
                <div className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author} avatar`}
                    className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                  />
                </div>
                <div className="mb-3 md:mb-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-gray-700">{testimonial.position}</p>
                </div>
                <div className="hidden w-px self-stretch bg-gray-300 md:block" />
                <div className="mt-4 flex items-center justify-center h-12 w-auto">
                  <div className="h-8 w-auto px-3 py-1 bg-[#1F1946] text-white text-xs font-medium rounded-md flex items-center justify-center">
                    {testimonial.position.split(', ')[1]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
