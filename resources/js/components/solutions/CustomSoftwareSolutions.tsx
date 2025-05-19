import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function CustomSoftwareSolutions() {
  return (
    <section id="custom-software-solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              The Micro Agency Advantage
            </p>
            <h2 className="text-4xl font-bold font-header text-primary md:text-5xl lg:text-6xl">
              Personalized Software Solutions with Senior Expertise
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-lg">
              As a boutique micro agency, Empuls3 delivers custom software solutions with a level of personal attention that larger firms simply can't match. Our senior developers work directly with you throughout the entire process—from design and architecture to development—ensuring seamless integration of front-end and back-end functionalities without the bureaucracy and overhead of traditional agencies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_Africa_American_Software_developers_discussing_abo_61339e21-6c03-4f31-9813-6dafd2b02df0.png"
                alt="Custom software development team"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Why Choose Our Custom Software Development?
            </h3>
            <p className="text-gray-700">
              Unlike larger firms with multiple layers of management, our boutique team provides direct access to senior developers who create customized solutions designed to evolve alongside your growing business.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_1e5c5452-6ee0-4eb9-aead-c327f906cadb.png"
                alt="Quality software development process"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Quality and Efficiency Guaranteed
            </h3>
            <p className="text-gray-700">
              Our micro agency structure enables truly agile development with faster decision-making and implementation, while maintaining enterprise-level quality standards throughout the entire process.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_93d7f90a-01e6-4bdf-8982-21d4887e2a9d.png"
                alt="Scalable software solutions team"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Partner with Us for Scalable Solutions
            </h3>
            <p className="text-gray-700">
              Partner with our specialized team for solutions that grow with you. Our senior developers build with long-term scalability in mind, supporting your ongoing growth without the overhead costs of larger agencies.
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
