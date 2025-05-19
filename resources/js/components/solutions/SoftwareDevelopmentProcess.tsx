import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function SoftwareDevelopmentProcess() {
  return (
    <section id="software-development-process" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              Boutique Process, Enterprise Results
            </p>
            <h2 className="text-4xl font-bold font-header text-primary md:text-5xl lg:text-6xl">
              Our Micro Agency Development Advantage
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-lg">
              As a boutique micro agency, we offer a development process that combines the agility of a small team with the expertise of industry veterans. Our senior developers work directly with you at every stage—from planning and design through development, testing, and deployment—eliminating the bureaucracy and communication barriers that slow down larger firms.
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
              Unlike larger agencies where discovery is handled by junior staff, our senior team works directly with you from day one to understand your business goals, user needs, and technical requirements, creating a comprehensive roadmap tailored to your unique challenges.
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
              With direct access to our senior designers and developers, you'll experience a truly collaborative process as we create intuitive interfaces and robust architectures using modern technologies and best practices—without the communication barriers of larger agencies.
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
              Our boutique approach means your project receives meticulous attention during testing and deployment from the same senior team that built it—ensuring quality, security, and performance without handoffs between departments that can introduce errors and delays.
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
