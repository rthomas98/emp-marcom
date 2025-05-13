import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Code, Settings } from "lucide-react";

export function ComprehensiveSoftwareSolutions() {
  return (
    <section id="comprehensive-software-solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold text-gray-700 md:mb-4">
              Innovate and embrace change for a better future.
            </p>
            <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Comprehensive Software Solutions
            </h2>
            <p className="text-gray-700 md:text-lg">
              We specialize in turning your innovative ideas into powerful and
              reliable software applications that meet your needs and exceed
              your expectations, ensuring a seamless user experience every time.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg border border-gray-200 bg-[#F8F9FA] p-6 shadow-sm md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-5 text-3xl leading-[1.2] font-bold text-primary md:mb-6 md:text-4xl lg:text-5xl">
                Full-Stack Development Expertise
              </h3>
              <p className="text-gray-700">
                Achieve optimal performance through the seamless integration of
                both front-end and back-end technologies, ensuring a smooth and
                efficient user experience across your website.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/80"
              >
                Contact
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-[#F8F9FA] p-6 shadow-sm md:p-8 lg:p-12">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-5 text-3xl leading-[1.2] font-bold text-primary md:mb-6 md:text-4xl lg:text-5xl">
                Tailored Development Services
              </h3>
              <p className="text-gray-700">
                Tailored solutions specifically crafted to address and fulfill
                the unique requirements of your business, ensuring that you
                receive the utmost value and effectiveness in every aspect.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/80"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
