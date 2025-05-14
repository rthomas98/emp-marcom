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
              "The e-commerce platform developed by Empuls3 exceeded our
              expectations."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Project_Manager_Makes_a_Presentat_2d8255b5-eb2b-4d1c-b57d-58077e6d9d44.png"
                  alt="Jane Doe, CEO"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">Jane Doe</p>
                <p className="text-gray-600">CEO, Tech Innovations</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-300 md:block" />
              <div>
                <div className="h-12 w-24 flex items-center justify-center bg-gray-100 rounded">
                  <span className="text-sm font-semibold text-gray-700">Tech Innovations</span>
                </div>
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
              "Their WordPress solutions are top-notch and user-friendly!"
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                  alt="John Smith, Founder"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">John Smith</p>
                <p className="text-gray-600">Founder, E-Shop</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-300 md:block" />
              <div>
                <div className="h-12 w-24 flex items-center justify-center bg-gray-100 rounded">
                  <span className="text-sm font-semibold text-gray-700">E-Shop</span>
                </div>
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
              "Empuls3's PWAs have significantly improved our customer
              engagement."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
                  alt="Emily Johnson, Marketing Director"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold">Emily Johnson</p>
                <p className="text-gray-600">Marketing Director, Retail Hub</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-300 md:block" />
              <div>
                <div className="h-12 w-24 flex items-center justify-center bg-gray-100 rounded">
                  <span className="text-sm font-semibold text-gray-700">Retail Hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
