import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function HubspotSolutions() {
  return (
    <section id="hubspot-solutions" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="hubspot-solutions-heading">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-accent-pink md:mb-4">
            Integrating systems for better efficiency and performance.
          </p>
          <h2 id="hubspot-solutions-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Custom HubSpot Solutions
          </h2>
          <p className="text-gray-700 md:text-lg">
            Enhance the efficiency of your customer relationship management
            system by utilizing customized integrations with HubSpot. These
            tailored solutions are designed to seamlessly connect your existing
            tools and processes, allowing for a more streamlined workflow that
            ultimately improves productivity and helps you better manage your
            customer interactions.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
                alt="HubSpot automation solutions"
                className="w-full h-auto rounded-t-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-accent-pink">Automation</p>
                <h3 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Enhance Your CRM Experience
                </h3>
                <p className="text-gray-700">
                  Enhance your productivity and streamline processes using our
                  innovative automation solutions for success.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/solutions/hubspot-automation"
                  className="inline-flex items-center text-primary hover:text-accent-pink"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                alt="HubSpot integrations"
                className="w-full h-auto rounded-t-lg"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-accent-pink">Solutions</p>
                <h3 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Tailored Integrations for Your Business
                </h3>
                <p className="text-gray-700">
                  Tailored solutions designed specifically to address your
                  unique CRM requirements and preferences.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/solutions/hubspot-integrations"
                  className="inline-flex items-center text-primary hover:text-accent-pink"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_African_American_People_sticky_note_and_office_g_cf3e7832-6a5e-48da-9f5b-7dd8a0ac57e4_1.png"
                alt="HubSpot implementation support"
                className="w-full h-auto rounded-t-lg object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-accent-pink">Support</p>
                <h3 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Expert Guidance for Implementation
                </h3>
                <p className="text-gray-700">
                  Our dedicated team works tirelessly to provide seamless
                  integration and exceptional support for all users.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary hover:text-accent-pink"
                >
                  Contact Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
