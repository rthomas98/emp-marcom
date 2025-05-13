import React from "react";
import { Link } from "@inertiajs/react";

export function SolutionsOverview() {
  return (
    <section id="solutions-overview" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="solutions-overview-heading">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              Nurture Innovative Solutions
            </p>
            <h2 id="solutions-overview-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Comprehensive Development Solutions
            </h2>
            <p className="text-gray-700 md:text-lg">
              We specialize in transforming innovative ideas into powerful
              software solutions by leveraging our extensive expertise and
              experience in the industry. Our commitment to quality ensures that
              we deliver reliable and effective results for your unique needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="grid grid-cols-1 rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-accent-pink">Solutions</p>
                  <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    End-to-End Software Development
                  </h3>
                  <p className="text-gray-700">
                    Personalized solutions designed specifically to meet your
                    business needs, from concept to deployment and beyond.
                  </p>
                  <Link 
                    href="/solutions/software-development-design" 
                    className="mt-4 inline-flex items-center text-primary hover:text-accent-pink"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                  alt="Software development team collaborating on code"
                  className="h-full w-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-accent-pink">Design</p>
                  <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    User-Centered Design
                  </h3>
                  <p className="text-gray-700">
                    Designing intuitive interfaces that enhance user experiences and drive engagement.
                  </p>
                  <Link 
                    href="/solutions/frontend-development-uxui-design" 
                    className="mt-4 inline-flex items-center text-primary hover:text-accent-pink"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
                  alt="UX/UI design team working on interfaces"
                  className="h-full w-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-accent-pink">Integration</p>
                  <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    API & System Integration
                  </h3>
                  <p className="text-gray-700">
                    Seamlessly connect your systems and applications for improved efficiency and data flow.
                  </p>
                  <Link 
                    href="/solutions/backend-api-development" 
                    className="mt-4 inline-flex items-center text-primary hover:text-accent-pink"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png"
                  alt="Developer working on API integration"
                  className="w-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
