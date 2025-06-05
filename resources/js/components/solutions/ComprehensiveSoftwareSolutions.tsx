import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Code, Settings } from "lucide-react";

export function ComprehensiveSoftwareSolutions() {
  return (
    <section id="comprehensive-software-solutions" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              Micro Agency, Major Impact
            </p>
            <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Boutique Development with Direct Senior Access
            </h2>
            <p className="text-gray-700 md:text-lg">
              As a specialized micro agency, we transform your innovative ideas into powerful software solutions with the personal attention that larger firms simply can't match. Our senior developers work directly with you throughout your project, ensuring exceptional quality and a truly collaborative experience.
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
                Seasoned Senior Full-Stack Developers
              </h3>
              <p className="text-gray-700">
                Unlike larger agencies where you rarely interact with senior developers, our boutique team gives you direct access to experienced full-stack engineers who seamlessly integrate front-end and back-end technologies for optimal performance and efficiency.
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
                Personalized Micro Agency Approach
              </h3>
              <p className="text-gray-700">
                Experience the advantage of working with a boutique agency where your project receives undivided attention from senior developers. We craft solutions specifically tailored to your unique business requirements without the overhead costs and bureaucracy of larger firms.
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
