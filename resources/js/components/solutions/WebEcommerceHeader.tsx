import React from "react";
import { Link } from "@inertiajs/react";

export function WebEcommerceHeader() {
  return (
    <section
      id="web-ecommerce-header"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
      aria-labelledby="web-ecommerce-heading"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 id="web-ecommerce-heading" className="mb-5 text-5xl font-bold font-header text-primary md:mb-6 md:text-6xl lg:text-7xl">
          Your Website Loses Sales Every Day. We Fix It in 30 Days.
        </h1>
        <p className="text-gray-700 md:text-lg">
          Slow load times kill conversions. Cart abandonment costs Dallas e-commerce businesses $10K+ monthly. We fix broken websites, optimize WooCommerce stores, and build platforms that actually convert—fast. Average timeline: 30 days. Average client savings: $50K/year.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8" role="navigation" aria-label="Web and e-commerce development actions">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-[#BD1550] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 min-h-[44px]"
            aria-label="Fix my website now"
          >
            Fix My Website Now
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex h-11 items-center justify-center rounded-md border-2 border-[#BD1550] bg-transparent px-6 py-2.5 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2 min-h-[44px]"
            aria-label="See successful websites we built"
          >
            See Our Results
          </Link>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pr-[5vw] pl-[5vw] md:h-[40rem] lg:h-screen lg:pl-0" aria-label="Web and e-commerce development showcase" role="region">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            <div className="grid size-full grid-cols-1 gap-4">
              <figure className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                  alt="E-commerce website on laptop"
                  width="400"
                  height="480"
                  loading="lazy"
                />
                <figcaption className="sr-only">Professional showcasing e-commerce website on laptop</figcaption>
              </figure>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                  alt="Responsive website on multiple devices"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
                  alt="Mobile app interface for e-commerce"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                  alt="Website dashboard with analytics"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_97c07372-4e6a-4c97-90ff-cae9da9aaf12.png"
                  alt="WordPress website customization"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                  alt="Progressive web app on smartphone"
                />
              </div>
            </div>
          </div>
          <div className="grid size-full animate-loop-vertically-reverse grid-cols-1 gap-4">
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                  alt="Shopping cart interface"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_a0d89b7c-6212-4ad9-98e4-6eba85527f77.png"
                  alt="Product page on e-commerce website"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_e7ada02b-b662-4601-ac97-2f46dde081c2.png"
                  alt="Website design mockup"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_97c07372-4e6a-4c97-90ff-cae9da9aaf12.png"
                  alt="Payment gateway on mobile"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png"
                  alt="Website on multiple browsers"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png"
                  alt="Website code editor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
