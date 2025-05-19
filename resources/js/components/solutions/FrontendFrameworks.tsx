import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function FrontendFrameworks() {
  return (
    <section id="frontend-frameworks" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique Framework Expertise</p>
            <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Personalized Modern Framework Development
            </h2>
            <p className="text-gray-700 md:text-lg">
              As a specialized micro agency, our senior developers work directly with you to leverage cutting-edge frameworks like React, Vue.js, and Angular for your project. Unlike larger firms where you might get assigned junior developers, our boutique team ensures your applications are not only visually appealing but also scalable and maintainable—with the personalized attention and faster implementation that only a micro agency can provide.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:outline-none"
              >
                Get Started
                <ChevronRight className="ml-1 size-4" />
              </Link>
            </div>
          </div>
          <div>
            <img
              src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__working_t_e54e2d34-af10-4785-8b30-bc46cef92038_0.png"
              className="w-full rounded-image object-cover aspect-[4/3]"
              alt="Frontend development team working with modern frameworks"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
