import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function BackendSolutions() {
  return (
    <section id="backend-solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
            The Micro Agency Advantage
          </p>
          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Specialized Back-End Expertise
          </h2>
          <p className="text-gray-700 md:text-lg">
            As a boutique micro agency, we enhance your applications with powerful server-side logic built by senior developers who work directly with you throughout your project. Unlike larger firms where your project might be handed off to junior staff, our specialized team ensures optimal performance, reliability, and scalability without the overhead costs and communication barriers of traditional agencies.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Efficiency</p>
                <h3 className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Tailored Server-Side Operations for Growth
                </h3>
                <p className="text-gray-700">
                  Our boutique team delivers tailored server-side solutions with direct access to senior developers throughout your project, creating systems specifically designed for your unique business needs without the bureaucracy of larger firms.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-[#BD1550] hover:underline"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                alt="Server-side development team"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="grid auto-cols-fr grid-cols-1 flex-col overflow-hidden rounded-lg border border-gray-200 bg-white sm:grid-cols-2 lg:col-span-2">
            <div className="block p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Integration</p>
                <h3 className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Seamless API Integrations for Enhanced Functionality
                </h3>
                <p className="text-gray-700">
                  Experience the micro agency advantage with API integrations built by our specialized team of senior developers who work directly with you to seamlessly connect your systems, delivering enterprise-quality performance without the overhead costs of larger agencies.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#BD1550] hover:underline"
                >
                  Contact Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex size-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                alt="API integration specialists"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
