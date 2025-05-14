import React from "react";
import { Star } from "lucide-react";

export function BackendTestimonials() {
  return (
    <section id="backend-testimonials" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Customer Testimonials
          </h2>
          <p className="text-gray-700 md:text-lg">
            Empuls3 has significantly enhanced our backend systems, delivering
            exceptional efficiency and performance improvements that have
            streamlined our processes and boosted overall productivity across
            the board.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
              "The API integration was seamless and exceeded our expectations."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_People_sticky_note_and_office_g_cf3e7832-6a5e-48da-9f5b-7dd8a0ac57e4_1.png"
                  alt="Testimonial avatar 1"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">Jane Doe</p>
                <p className="text-gray-700">CTO, TechCorp</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-200 md:block" />
              <div className="mt-2 flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                <p className="font-semibold text-primary">TechCorp</p>
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
              "Their expertise in back-end development was a game changer for
              us."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_b3490e73-4b60-4a0c-ba7a-b0c02fbab916.png"
                  alt="Testimonial avatar 2"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">John Smith</p>
                <p className="text-gray-700">Manager, RetailCo</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-200 md:block" />
              <div className="mt-2 flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                <p className="font-semibold text-primary">RetailCo</p>
              </div>
            </div>
          </div>
          <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
            <div className="mb-6 flex md:mb-8">
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
              <Star className="size-6 fill-[#BD1550] text-[#BD1550]" />
            </div>
            <blockquote className="text-md leading-[1.4] font-bold text-primary md:text-xl">
              "We achieved faster deployment and improved performance."
            </blockquote>
            <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
              <div className="mb-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Project_Manager_Makes_a_Presentat_ff51deb6-2b53-4935-b091-29dd4ac7a594.png"
                  alt="Testimonial avatar 3"
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <p className="font-semibold text-primary">Alice Johnson</p>
                <p className="text-gray-700">Director, FinTech</p>
              </div>
              <div className="hidden w-px self-stretch bg-gray-200 md:block" />
              <div className="mt-2 flex h-12 items-center justify-center rounded-md bg-gray-100 px-4">
                <p className="font-semibold text-primary">FinTech Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
