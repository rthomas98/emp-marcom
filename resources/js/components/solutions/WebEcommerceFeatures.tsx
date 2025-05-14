import React from "react";
import { Code, ShoppingCart, Smartphone } from "lucide-react";

export function WebEcommerceFeatures() {
  return (
    <section id="web-ecommerce-features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-3xl">
            <h2 className="font-header text-4xl font-bold leading-[1.2] text-primary md:text-5xl lg:text-6xl">
              Elevate Your Online Presence with Custom Web and E-commerce
              Solutions
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                <Code className="h-6 w-6 text-[#BD1550]" />
              </div>
            </div>
            <h3 className="mb-5 text-xl font-bold text-primary md:mb-6 md:text-2xl">
              Transformative Features for Engaging and Scalable Digital
              Experiences
            </h3>
            <p className="text-gray-700">
              We offer tailored solutions that integrate custom themes, plugin
              development, and smooth e-commerce functionalities for your needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                <ShoppingCart className="h-6 w-6 text-[#BD1550]" />
              </div>
            </div>
            <h3 className="mb-5 text-xl font-bold text-primary md:mb-6 md:text-2xl">
              Powerful E-commerce Integrations for a Seamless Shopping
              Experience
            </h3>
            <p className="text-gray-700">
              Increase your sales by utilizing customized e-commerce platforms
              designed to significantly boost user engagement and satisfaction.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 md:mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#BD1550]/10">
                <Smartphone className="h-6 w-6 text-[#BD1550]" />
              </div>
            </div>
            <h3 className="mb-5 text-xl font-bold text-primary md:mb-6 md:text-2xl">
              Progressive Web Apps: The Future of Seamless Mobile and Web
              Integration
            </h3>
            <p className="text-gray-700">
              Experience rapid, dependable, and captivating interactions through
              our innovative Progressive Web App solutions today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
