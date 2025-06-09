import React from "react";
import { Link } from "@inertiajs/react";

export function SolutionsOverview() {
  return (
    <section id="solutions-overview" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="solutions-overview-heading">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              The Micro Agency Advantage
            </p>
            <h2 id="solutions-overview-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Specialized Solutions, Exceptional Results
            </h2>
            <p className="text-gray-700 md:text-lg">
              As a boutique micro agency, we transform innovative ideas into powerful software solutions with a level of personal attention that's impossible at larger firms. Our senior developers work directly with you from day one, ensuring your project benefits from our specialized expertise without layers of management or unnecessary complexity.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <article className="grid grid-cols-1 rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 sm:row-span-1 sm:grid-cols-2" aria-labelledby="software-dev-heading">
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-accent-pink">Solutions</p>
                  <h3 id="software-dev-heading" className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    End-to-End Software Development
                  </h3>
                  <p className="text-gray-700">
                    Our boutique team delivers personalized solutions with direct access to senior developers throughout your project, from concept to deployment and beyond.
                  </p>
                  <Link 
                    href="/solutions/software-development-design" 
                    className="mt-4 inline-flex items-center text-primary hover:text-accent-pink"
                    aria-label="Learn more about our end-to-end software development solutions"
                  >
                    Learn more
                    <span className="sr-only"> about end-to-end software development</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                  alt="Software development team collaborating on code"
                  className="h-full w-full object-cover rounded-md"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </article>
            <article className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm" aria-labelledby="design-heading">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-accent-pink">Design</p>
                  <h3 id="design-heading" className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    User-Centered Design
                  </h3>
                  <p className="text-gray-700">
                    Experience the advantage of working directly with our senior designers to create intuitive interfaces that enhance user experiences and drive engagement.
                  </p>
                  <Link 
                    href="/solutions/frontend-development-uxui-design" 
                    className="mt-4 inline-flex items-center text-primary hover:text-accent-pink"
                    aria-label="Learn more about our user-centered design services"
                  >
                    Learn more
                    <span className="sr-only"> about user-centered design</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
                  alt="UX/UI design team working on interfaces"
                  className="h-full w-full object-cover rounded-md"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </article>
            <article className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm" aria-labelledby="integration-heading">
              <div className="flex flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-accent-pink">Integration</p>
                  <h3 id="integration-heading" className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    API & System Integration
                  </h3>
                  <p className="text-gray-700">
                    Our specialized team brings focused expertise to seamlessly connect your systems and applications, delivering enterprise-quality integration without the overhead of larger firms.
                  </p>
                  <Link 
                    href="/solutions/backend-api-development" 
                    className="mt-4 inline-flex items-center text-primary hover:text-accent-pink"
                    aria-label="Learn more about our API and system integration services"
                  >
                    Learn more
                    <span className="sr-only"> about API and system integration</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gray-50 p-4">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png"
                  alt="Developer working on API integration"
                  className="w-full object-cover rounded-md"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
