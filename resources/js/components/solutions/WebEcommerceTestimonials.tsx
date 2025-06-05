import React from "react";
import { Star } from "lucide-react";

export function WebEcommerceTestimonials() {
  return (
    <section id="web-ecommerce-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Customer testimonials
          </h2>
          <p className="text-gray-700 md:text-lg">
            Empuls3 has completely revitalized our online presence, leading to a
            significant increase in sales and customer engagement. Their
            innovative strategies and expert support have truly made a
            difference in how we connect with our audience.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex text-[#BD1550] md:mb-8">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
              "Rob has been instrumental in helping align our business offering with a terrific website and all the work that comes with that."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/1638545534787.jpeg"
                  alt="Palmer Dean, Founder"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">Palmer Dean</p>
                <p className="text-gray-600">Founder, Wash Metrix</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-300 md:block" />
              <div>
                
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex text-[#BD1550] md:mb-8">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
              "I would highly recommend Empuls3 for any Web design, App Creation, and App Launch. They are knowledgeable, and will ensure your project is completed from beginning to the end."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/305620519_446536930828187_8773084213258704960_n.jpg"
                  alt="John Knight, Founder"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">John Knight</p>
                <p className="text-gray-600">Founder, 24peekview.com</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-300 md:block" />
              
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex text-[#BD1550] md:mb-8">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
              "Rob did a wonderful job on my webpage and was responsive to my needs. The feedback on my website has been greatly positive."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/fx-gs.webp"
                  alt="Theron Williams"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">Theron Williams</p>
                <p className="text-gray-600">Theron J Williams Consulting LLC</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-300 md:block" />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
