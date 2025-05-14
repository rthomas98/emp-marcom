import React from "react";
import { Check } from "lucide-react";

export function MobileOverview() {
  const features = [
    "Native-like performance on all devices.",
    "Streamlined development for faster time to market.",
    "Cross-platform solutions that enhance user engagement."
  ];

  return (
    <section id="mobile-overview" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-4xl leading-[1.2] font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Empower Your Business with Mobile & Cross-Platform Development
              Solutions
            </h2>
            <p className="mb-5 text-gray-700 md:mb-6 md:text-lg">
              Leverage the power of React Native to create high-performance
              mobile applications that deliver a native-like experience on both
              iOS and Android. Our Progressive Web Apps (PWAs) ensure seamless
              functionality across devices, providing users with an engaging
              experience.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 flex-none self-start">
                    <Check className="size-6 text-[#BD1550]" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <img
            src="/images/site-images/rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png"
            className="w-full rounded-image object-cover"
            alt="Mobile App Development Testing"
          />
        </div>
      </div>
    </section>
  );
}
