import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function BackendAPI() {
  return (
    <section id="backend-api" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#BD1550] text-white" aria-labelledby="backend-api-heading">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-white md:mb-4">
              Expanding for growth and adaptability in various contexts.
            </p>
            <h2 id="backend-api-heading" className="text-4xl font-bold font-header text-white md:text-5xl lg:text-6xl">
              Robust Back-End & API Development Solutions
            </h2>
          </div>
          <div>
            <p className="text-white/90 md:text-lg">
              At Empuls3, we specialize in creating scalable server-side logic
              that powers your applications. Our expertise in database
              management and API integrations ensures seamless communication
              between your systems. Trust us to deliver custom solutions that
              enhance performance and user experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img 
                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png" 
                alt="Back-End Services" 
                className="rounded-image w-full h-auto" 
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Choose Our Back-End Services
            </h3>
            <p className="text-white/90">
              We offer customized back-end solutions designed to evolve and
              expand alongside your growing business needs.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img 
                src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_a57b60ac-00f5-4255-937e-d7408bd3b519.png" 
                alt="API Integrations" 
                className="rounded-image w-full h-auto" 
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Our Expertise in API Integrations
            </h3>
            <p className="text-white/90">
              We guarantee that your applications will communicate seamlessly
              and effectively through our robust API solutions.
            </p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img 
                src="/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png" 
                alt="Database Management" 
                className="rounded-image w-full h-auto" 
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Database Management for Optimal Performance
            </h3>
            <p className="text-white/90">
              Our database solutions are meticulously crafted to ensure both
              exceptional speed and unwavering reliability for all your data
              needs.
            </p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Link
            href="/solutions/backend-api-development"
            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-white hover:text-white/80"
          >
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
