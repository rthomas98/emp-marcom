import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Layers, Palette, Monitor, Lightbulb } from "lucide-react";

export function FrontendFeatures() {
  return (
    <section id="frontend-features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Engage</p>
            <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Creating Exceptional User Experiences in Front-End Design
            </h2>
            <p className="text-gray-700 md:text-lg">
              Our UX design focuses on the user's journey, ensuring every
              interaction is seamless and enjoyable. We prioritize intuitive
              layouts that captivate and retain users.
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
          <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <Layers className="size-12 text-[#BD1550]" />
              </div>
              <h3 className="mb-5 text-2xl font-bold font-header text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                User-Centric Design for Maximum Engagement
              </h3>
              <p className="text-gray-700">
                Our unique designs are specifically crafted to significantly
                enhance user satisfaction and experience.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <Monitor className="size-12 text-[#BD1550]" />
              </div>
              <h3 className="mb-5 text-2xl font-bold font-header text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Modern Web App Solutions
              </h3>
              <p className="text-gray-700">
                We seamlessly integrate cutting-edge technologies to
                significantly enhance and elevate your digital presence online.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <Palette className="size-12 text-[#BD1550]" />
              </div>
              <h3 className="mb-5 text-2xl font-bold font-header text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Responsive Design for All Devices
              </h3>
              <p className="text-gray-700">
                Our responsive designs guarantee a seamless and flawless user
                experience, no matter which device you choose to use.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <Lightbulb className="size-12 text-[#BD1550]" />
              </div>
              <h3 className="mb-5 text-2xl font-bold font-header text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Transforming Ideas into Engaging Interfaces
              </h3>
              <p className="text-gray-700">
                Allow us to transform your vision into reality by creating a
                stunning and user-friendly interface that captivates your
                audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
