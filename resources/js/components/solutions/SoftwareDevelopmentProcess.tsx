import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function SoftwareDevelopmentProcess() {
  return (
    <section id="software-development-process" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-gray-700 md:mb-4">
              Our proven approach to software excellence.
            </p>
            <h2 className="text-4xl font-bold font-header text-primary md:text-5xl lg:text-6xl">
              How We Deliver Exceptional Software Solutions
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-lg">
              At Empuls3, we follow a structured yet flexible development process that ensures quality at every stage. 
              From initial planning and design through development, testing, and deployment, our methodology is designed 
              to deliver robust, scalable software that exceeds your expectations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8 aspect-[4/3] overflow-hidden">
              <img
                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
                alt="Discovery and planning phase"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Discovery & Planning
            </h3>
            <p className="text-gray-700">
              We begin with a thorough understanding of your business goals, user needs, and technical requirements to create a comprehensive roadmap for your project.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8 aspect-[4/3] overflow-hidden">
              <img
                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png"
                alt="Design and development phase"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Design & Development
            </h3>
            <p className="text-gray-700">
              Our team creates intuitive user interfaces and robust architectures, then implements them using modern technologies and best practices for clean, maintainable code.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8 aspect-[4/3] overflow-hidden">
              <img
                src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_f24157be-eed3-436d-bba7-665af5c670a7.png"
                alt="Testing and deployment phase"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Testing & Deployment
            </h3>
            <p className="text-gray-700">
              We rigorously test all aspects of your software to ensure quality, security, and performance, then deploy with careful planning to minimize disruption and maximize adoption.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Link
            href="/solutions"
            className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Contact Us
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
