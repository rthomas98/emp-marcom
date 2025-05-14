import React from "react";
import { Link } from "@inertiajs/react";

export function WebEcommerceCTA() {
  return (
    <section id="web-ecommerce-cta" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <div className="grid auto-cols-fr grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-white p-8 md:p-12">
              <div>
                <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
                  Transform Your Online Presence
                </h2>
                <p className="text-gray-700 md:text-lg">
                  Reach out to us today to elevate your web and e-commerce
                  development experience. Our tailored solutions are specifically
                  crafted to meet your unique needs and help your business thrive
                  in the digital landscape. Let's connect!
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
                >
                  Consult
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/images/site-images/rob_thomas23_Africa_American_Software_developers_discussing_abo_61339e21-6c03-4f31-9813-6dafd2b02df0.png"
                className="h-full w-full object-cover"
                alt="Web development team collaborating"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
