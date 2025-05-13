import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Palette, Code, Layers, Zap } from "lucide-react";

export function FrontendDevelopment() {
  return (
    <section id="frontend-development" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-development-heading">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">
              Inspire creativity and drive innovation forward.
            </p>
            <h2 id="frontend-development-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Front-End Development Solutions Overview
            </h2>
            <p className="text-gray-700 md:text-lg">
              At Empuls3, we specialize in crafting interactive user interfaces
              that enhance user experience. Our front-end development services
              leverage the latest frameworks to deliver visually stunning and
              highly functional applications.
            </p>
          </div>
        </div>
        <div className="grid place-items-center gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-x-12">
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
                User-Centric Design
              </h3>
              <p className="text-gray-700">
                We prioritize user experience to create engaging interfaces that
                captivate and retain users.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
                Framework Expertise
              </h3>
              <p className="text-gray-700">
                Our team excels in modern front-end frameworks for scalable and
                maintainable web applications.
              </p>
            </div>
          </div>
          <div className="relative order-last w-full sm:col-span-2 lg:order-none lg:col-span-1">
            <img
              src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
              alt="Frontend development team collaborating"
              className="h-auto w-full rounded-image object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16">
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
                Interactive Interfaces
              </h3>
              <p className="text-gray-700">
                We build dynamic interfaces that enhance user engagement and
                drive conversions effectively.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary md:mb-4 md:text-2xl">
                Seamless Integration
              </h3>
              <p className="text-gray-700">
                Our solutions integrate seamlessly with back-end systems for a
                cohesive user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:mt-18 lg:mt-20">
          <Link
            href="/solutions/frontend-development-uxui-design"
            className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-primary hover:text-accent-pink"
          >
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
