import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function EcommercePlatforms() {
  return (
    <section id="ecommerce-platforms" className="bg-[#1F1946] px-[5%] py-16 text-white md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
              Boutique E-commerce Development
            </p>
            <h3 className="font-header text-4xl font-bold leading-[1.2] text-white md:text-5xl lg:text-6xl">
              Personalized E-commerce Solutions with Senior Expertise
            </h3>
          </div>
          <div>
            <p className="text-white/90 md:text-lg">
              As a boutique micro agency, we deliver e-commerce solutions with direct access to our senior developers throughout your entire project. Unlike larger agencies, our specialized team provides personalized attention to every detail—from seamless payment gateways to robust inventory management—ensuring a smooth user experience that drives sales without the overhead costs and communication barriers of traditional firms.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/solutions"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1F1946]"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center text-sm font-medium text-white transition-colors hover:text-white/80 focus:outline-none"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_f24157be-eed3-436d-bba7-665af5c670a7.png"
          className="w-full rounded-image object-cover"
          alt="E-commerce platform dashboard"
        />
      </div>
    </section>
  );
}
