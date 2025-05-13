import React from "react";

export function MobileCrossPlatform() {
  return (
    <section id="mobile-cross-platform" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-cross-platform-heading">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 id="mobile-cross-platform-heading" className="text-4xl leading-[1.2] font-bold font-header text-primary md:text-5xl lg:text-6xl">
              Seamless Mobile Solutions for a Cross-Platform Experience
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-lg">
              At Empuls3, we specialize in delivering cutting-edge mobile and
              cross-platform development solutions. Our expertise in React
              Native and Progressive Web Apps (PWAs) ensures that your
              applications perform flawlessly across all devices. We prioritize
              user experience and functionality, enabling businesses to reach
              their audience effectively.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_008ed057-ce50-4832-bfc4-21051acf71dd.png"
                alt="React Native Development Team"
                className="rounded-image w-full h-auto"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
              React Native Development for Dynamic Mobile Applications
            </h3>
            <p className="text-gray-700">
              Utilize our extensive React Native expertise to create
              high-performance mobile applications tailored to your needs.
            </p>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png"
                alt="Progressive Web Apps"
                className="rounded-image w-full h-auto"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
              Progressive Web Apps for Enhanced User Engagement
            </h3>
            <p className="text-gray-700">
              Our Progressive Web Apps seamlessly blend the advantages of web
              and mobile applications for effortless access anytime, anywhere.
            </p>
          </div>
          <div className="w-full">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a696d0db-d515-4354-ae04-969316179fc9.png"
                alt="Mobile App Development Team"
                className="rounded-image w-full h-auto"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
              Mobile App Development Tailored to Your Business Needs
            </h3>
            <p className="text-gray-700">
              Our team specializes in developing tailored mobile solutions that
              perfectly align with your unique business objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
