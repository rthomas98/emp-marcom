import React from "react";
import { Check } from "lucide-react";

export function MobileOverview() {
  const features = [
    "Direct access to senior developers throughout your entire project.",
    "Faster turnaround times without the overhead of larger agencies.",
    "Personalized attention to your specific business requirements."
  ];

  return (
    <section id="mobile-overview" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="mobile-overview-heading">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">The Micro Agency Advantage</p>
            <h2 id="mobile-overview-heading" className="mb-5 text-4xl leading-[1.2] font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Boutique Mobile Development with Senior Expertise
            </h2>
            <p className="mb-5 text-gray-700 md:mb-6 md:text-lg">
              As a specialized micro agency, we leverage React Native to create high-performance mobile applications with direct access to our senior developers. Unlike larger firms where your project might be handed off to junior staff, our boutique team works closely with you to deliver native-like experiences on both iOS and Android, along with Progressive Web Apps that ensure seamless functionality across all devices.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2" aria-label="Key advantages of our mobile development services">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 flex-none self-start" aria-hidden="true">
                    <Check className="size-6 text-[#BD1550]" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="h-full w-full">
            <img
              src="/images/site-images/rob_thomas23_African_American_developers_testing_an_app_on_a__8ce29719-300c-433f-b269-b04a31ca9ff7_0.png"
              className="w-full rounded-image object-cover"
              alt="Mobile App Development Testing"
              width="800"
              height="600"
              loading="lazy"
            />
            <figcaption className="sr-only">Developers testing a mobile application on various devices</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
