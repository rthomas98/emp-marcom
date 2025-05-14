import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Lightbulb, Code, Rocket } from "lucide-react";

export function MvpFeatures() {
  const features = [
    {
      icon: <Lightbulb className="size-12 text-[#BD1550]" />,
      title: "Industry Challenges Explained",
      description: "Our team has extensive knowledge and understanding of the unique dynamics within various industry sectors."
    },
    {
      icon: <Code className="size-12 text-[#BD1550]" />,
      title: "Innovating with Modern Development",
      description: "We utilize cutting-edge technologies and innovative strategies to deliver the most effective and optimal solutions for our clients."
    },
    {
      icon: <Rocket className="size-12 text-[#BD1550]" />,
      title: "Your Partner in Rapid Product Development",
      description: "Our primary goal is to consistently deliver exceptional value to our clients, ensuring that we do so without any unnecessary delays."
    }
  ];

  return (
    <section id="mvp-features" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-2xl text-center md:mb-16 lg:mb-20">
            <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">Innovate</p>
            <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Transforming Ideas into Market-Ready Products
            </h2>
            <p className="text-gray-700 md:text-lg">
              Our full-stack expertise empowers startups to launch MVPs
              efficiently. We leverage modern technologies to ensure your
              product meets market demands swiftly.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {features.map((feature, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                <div className="mb-5 md:mb-6">
                  {feature.icon}
                </div>
                <h3 className="mb-5 text-2xl font-bold font-header text-primary md:mb-6 md:text-3xl md:leading-[1.3]">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
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
              Start A Project
              <ChevronRight className="ml-1 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
