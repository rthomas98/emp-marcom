import React from "react";
import { Star } from "lucide-react";

export function SoftwareTestimonials() {
  return (
    <section id="software-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Customer Testimonials
          </h2>
          <p className="text-gray-700 md:text-lg">
            Empuls3 has truly revolutionized our business by providing us with
            innovative solutions that have significantly enhanced our
            operations, improved efficiency, and driven remarkable growth in our
            overall performance and success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex text-[#BD1550] md:mb-8">
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
              <Star className="h-6 w-6 fill-current" />
            </div>
            <blockquote className="text-lg leading-[1.4] font-bold text-gray-800 md:text-xl">
              "The team at Empuls3 exceeded our expectations in every way. Their
              expertise in software development was evident throughout the
              project."
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <img
                  src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                  alt="John Doe, CEO"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">John Doe</p>
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
              "Working with Empuls3 was a game changer for us. Their attention
              to detail and commitment to quality made all the difference."
            </blockquote>
            <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
              <div>
                <img
                  src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                  alt="Jane Smith, Project Manager"
                  className="h-14 w-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-4 md:mb-0">
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-600">Project Manager, Retail Corp</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-300 md:block" />
              <div>
                <div className="h-12 w-24 flex items-center justify-center bg-gray-100 rounded">
                  <span className="text-sm font-semibold text-gray-700">Retail Corp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
