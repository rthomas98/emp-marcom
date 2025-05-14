"use client";

import React from "react";

export function ManagedITSolutions() {
  return (
    <section id="managed-it-solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Support is essential for growth and achievement.
            </p>
            <h2 className="mb-5 text-4xl font-bold text-[#1F1946] md:mb-6 md:text-5xl lg:text-6xl">
              Tailored IT Support Services
            </h2>
            <p className="text-gray-700 md:text-md">
              Tailored solutions designed specifically to meet your unique IT
              requirements, ensuring that your business operates smoothly and
              efficiently while addressing all your technological challenges
              effectively.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 sm:row-span-1 sm:grid sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#BD1550]">Solutions</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Comprehensive Support for Your Business
                  </h3>
                  <p className="text-gray-700">
                    Receive expert assistance to ensure your operations run
                    smoothly and efficiently without any interruptions.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
                  alt="Comprehensive IT support for business"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#BD1550]">Growth</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Long-Term Success
                  </h3>
                  <p className="text-gray-700">
                    Equipping your team with the skills and confidence to tackle
                    future challenges successfully.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_The_key_to_success_starts_with_how_you_define_it_a50e51ce-f9d7-41f8-b43e-0a3982ab1dbc_1.png"
                  alt="IT solutions for long-term success"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-[#BD1550]">Expertise</p>
                  <h3 className="mb-2 text-xl font-bold text-[#1F1946] md:text-2xl">
                    Technical Excellence
                  </h3>
                  <p className="text-gray-700">
                    Access to specialized knowledge and advanced technical skills
                    to solve complex IT challenges.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_Two_African_American_business_professionals_shakin_192a73a1-6814-409d-9214-6471b0199cb4.png"
                  alt="Technical expertise and excellence"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
