import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Rocket, Zap } from "lucide-react";

export function ProductDevelopment() {
  return (
    <section id="product-development" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="product-development-heading">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              Launch Event Scheduled for Next Week
            </p>
            <h2 id="product-development-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Accelerate Your Product Development
            </h2>
            <p className="text-gray-700 md:text-lg">
              Empuls3 is dedicated to providing innovative solutions for Minimum
              Viable Products (MVP) and comprehensive product development. Our
              expertise ensures that your ideas are transformed into successful,
              market-ready products that meet your business needs and goals.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    Tailored Solutions for Startups
                  </h3>
                  <p className="text-gray-700">
                    Launch your product to the market quickly and with maximum
                    efficiency.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Link
                    href="/solutions/product-development"
                    className="inline-flex items-center text-primary hover:text-accent-pink"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-6">
                <div>
                  <div className="mb-3 md:mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    Rapid MVP Development
                  </h3>
                  <p className="text-gray-700">
                    Test your ideas quickly with our streamlined MVP development
                    process.
                  </p>
                </div>
                <div className="mt-5 flex items-center gap-4 md:mt-6">
                  <Link
                    href="/solutions/mvp-development"
                    className="inline-flex items-center text-primary hover:text-accent-pink"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 rounded-lg border border-gray-200 bg-white shadow-sm sm:col-span-2 sm:row-span-1 sm:grid-cols-2">
              <div className="flex items-center justify-center">
                <img
                  src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
                  alt="Development team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-6">
                <div>
                  <p className="mb-2 text-sm font-semibold text-accent-pink">Innovate</p>
                  <h3 className="mb-2 text-xl font-bold text-primary md:text-2xl">
                    Our Development Process
                  </h3>
                  <p className="text-gray-700">
                    Agile methodologies promote quick and adaptable development
                    processes for teams.
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary hover:text-accent-pink"
                  >
                    Get Started
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
