import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function Industries() {
  return (
    <section
      id="industries"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-primary text-white"
      aria-labelledby="industries-heading"
    >
      <div className="container mx-auto">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-accent-yellow md:mb-4">
            Understanding and awareness bring clarity and depth.
          </p>
          <h2 id="industries-heading" className="mb-5 text-4xl font-bold font-header text-white md:mb-6 md:text-5xl lg:text-6xl">
            Understanding Your Industry's Unique Challenges
          </h2>
          <p className="text-white/80 md:text-lg">
            At Empuls3, we recognize that every industry has its own set of
            challenges and opportunities. Our deep sector knowledge allows us to
            craft solutions that are not only effective but also tailored to
            your specific needs.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 items-start gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="w-full">
            <div className="mb-6 w-full md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_0f48e92a-5e85-4e9f-9713-d384e5873a22.png"
                alt="Healthcare professionals using digital solutions"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Healthcare
            </h3>
            <p className="text-white/80">
              We deliver HIPAA-compliant solutions that streamline patient care, improve data management, and enhance operational efficiency in healthcare organizations.
            </p>
          </div>
          <div className="w-full md:mt-[25%]">
            <div className="mb-6 w-full md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_Afrianc_American_Women_and_men_in_a_digital_market_57f3a2b1-6eaf-4c56-aa14-4dba9129a523.png"
                alt="Finance professionals analyzing data"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Finance & Banking
            </h3>
            <p className="text-white/80">
              Our secure, scalable solutions help financial institutions modernize their systems, enhance customer experiences, and meet stringent regulatory requirements.
            </p>
          </div>
          <div className="w-full md:mt-[50%]">
            <div className="mb-6 w-full md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png"
                alt="E-commerce platform on multiple devices"
                className="aspect-[3/2] w-full rounded-lg object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Retail & E-commerce
            </h3>
            <p className="text-white/80">
              We build engaging online shopping experiences with robust backend systems that drive conversions, streamline inventory management, and enhance customer loyalty.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Link
            href="/industries"
            className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-accent-yellow hover:text-white"
          >
            Contact
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
