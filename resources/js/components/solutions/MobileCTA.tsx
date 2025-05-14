import React from "react";
import { Link } from "@inertiajs/react";

export function MobileCTA() {
  return (
    <section id="mobile-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="mb-5 text-5xl font-bold text-primary md:mb-6 md:text-7xl lg:text-6xl">
              Unlock Your Mobile Potential
            </h2>
            <p className="md:text-md text-gray-700">
              Get in touch with us today to schedule your complimentary
              consultation regarding your mobile development needs and the
              innovative solutions we can provide to help your business thrive
              in a digital world.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link 
                href="/solutions" 
                className="inline-flex items-center justify-center rounded-md bg-[#1F1946] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#1F1946]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-white border border-[#1F1946] px-6 py-3 text-base font-medium text-[#1F1946] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Have A Project in Mind?
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_mobile_developer_working_on_an__bc48faad-4ec2-47b8-bd41-c0baac19a857_1.png"
              className="w-full rounded-lg object-cover"
              alt="Mobile developer working on application"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
