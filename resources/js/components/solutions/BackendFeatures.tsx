import React from "react";

export function BackendFeatures() {
  return (
    <section id="backend-features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="max-w-3xl">
            <h2 className="text-4xl leading-[1.2] font-bold font-header text-primary md:text-5xl lg:text-6xl">
              Unlock the Power of Scalable Back-End Solutions for Your Business
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
                alt="API integration specialists"
                className="rounded-image w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold font-header text-primary md:mb-4 md:text-2xl">
              Seamless API Integrations for Better User Experience
            </h3>
            <p className="text-gray-700">
              Our back-end development focuses on creating strong server-side
              logic while ensuring efficient database management for optimal
              performance.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png"
                alt="Custom backend solutions"
                className="rounded-image w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold font-header text-primary md:mb-4 md:text-2xl">
              Custom Solutions Tailored to Your Unique Business Needs and Goals
            </h3>
            <p className="text-gray-700">
              We specialize in developing custom back-end systems that
              seamlessly scale alongside your business as it grows.
            </p>
          </div>
          <div className="flex flex-col">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_074e0918-602f-489f-a994-549f9d1f62fa.png"
                alt="Database management experts"
                className="rounded-image w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold font-header text-primary md:mb-4 md:text-2xl">
              Expert Database Management for Peak Performance
            </h3>
            <p className="text-gray-700">
              Our dedicated team works tirelessly to ensure that your data
              remains secure and is easily accessible whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
