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
      quote: "Rob is fantastic. Really enjoyed working with him. He is very honest/fair with regards to pricing and turn around time for work is very quick.",
      author: "James McElroy",
      position: "Founder, frienzy.io",
      avatar: "/images/image-800x800.webp"
    },
    {
      quote: "I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end.",
      author: "John Knight",
      position: "Founder, 24peekview.com",
      avatar: "/images/305620519_446536930828187_8773084213258704960_n.jpg"
    },
    {
      quote: "Rob did a wonderful job on my webpage and was responsive to my needs. The feedback on my website has been greatly positive.",
      author: "Theron Williams",
      position: "TJW Consulting LLC",
      avatar: "/images/fx-gs.webp"
    }
  ];
  
  return (
    <section id="mobile-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50" aria-labelledby="mobile-testimonials-heading">
      <div className="container mx-auto">
        <header className="mb-12 w-full md:mb-18 lg:mb-20">
          <h2 id="mobile-testimonials-heading" className="mb-5 text-5xl font-bold text-primary md:mb-6 md:text-7xl lg:text-6xl">
            Customer Testimonials
          </h2>
          <p className="md:text-md text-gray-700 max-w-4xl">
            We specialize in transforming innovative ideas into seamless mobile
            experiences that captivate users and enhance engagement. Our team is
            dedicated to crafting intuitive designs and functionalities that not
            only meet your vision but also elevate the overall user experience,
            ensuring every interaction is smooth and enjoyable.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="flex h-full max-w-lg flex-col items-start justify-start text-left">
              <div className="mb-6 flex md:mb-8" aria-label="5 out of 5 stars rating" role="img">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="#BD1550" 
                    className="h-6 w-6 mr-1"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
                "{testimonial.quote}"
              </blockquote>
              <footer className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
                <figure className="mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.author}, ${testimonial.position}`}
                    className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                    width="56"
                    height="56"
                    loading="lazy"
                  />
                </figure>
                <div className="mb-3 md:mb-4">
                  <cite className="font-semibold text-primary not-italic">{testimonial.author}</cite>
                  <p className="text-gray-700">{testimonial.position}</p>
                </div>
                <div className="hidden w-px self-stretch bg-gray-300 md:block" aria-hidden="true" />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
