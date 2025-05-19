import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function DatabaseManagement() {
  return (
    <section id="database-management" className="bg-[#1F1946] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Boutique Database Solutions
            </p>
            <h2 className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
              Personalized Database Management with Senior Expertise
            </h2>
            <p className="mb-6 text-gray-300 md:mb-8 md:text-lg">
              As a specialized micro agency, we deliver database management solutions with direct access to our senior developers throughout your entire project. Unlike larger firms where your database needs might be handled by junior staff, our boutique team ensures high performance and reliability with personalized attention to your specific application requirements.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg leading-[1.4] font-bold font-header text-white md:mb-4 md:text-xl">
                  Performance Optimization
                </h3>
                <p className="text-gray-300">
                  Our boutique team of senior developers creates expertly managed databases that maximize application efficiency and scale with your business—without the overhead costs and communication barriers of larger agencies.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-lg leading-[1.4] font-bold font-header text-white md:mb-4 md:text-xl">
                  Seamless Integration
                </h3>
                <p className="text-gray-300">
                  Experience the micro agency advantage with seamless API integrations built by our specialized team who work directly with you, enhancing functionality and user experience with faster implementation times than traditional firms.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F1946]"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-white hover:underline"
              >
                Contact Us
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_a57b60ac-00f5-4255-937e-d7408bd3b519.png"
              className="w-full rounded-image object-cover"
              alt="Database management specialists"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
