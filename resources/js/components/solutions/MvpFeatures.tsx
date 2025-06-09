import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Lightbulb, Code, Rocket } from "lucide-react";

export function MvpFeatures() {
  const features = [
    {
      icon: <Lightbulb className="size-12 text-[#BD1550]" aria-hidden="true" />,
      title: "Direct Access to Senior Developers",
      description: "As a boutique micro agency, we provide direct collaboration with our senior developers who understand your industry's unique challenges and opportunities."
    },
    {
      icon: <Code className="size-12 text-[#BD1550]" aria-hidden="true" />,
      title: "Personalized MVP Development",
      description: "Our specialized team creates truly personalized MVPs using cutting-edge technologies, with the focused attention and customization that only a micro agency can deliver."
    },
    {
      icon: <Rocket className="size-12 text-[#BD1550]" aria-hidden="true" />,
      title: "Faster Time-to-Market Advantage",
      description: "Experience the micro agency advantage with quicker implementation times and more dedicated attention than larger firms—helping you validate ideas and reach your market faster."
    }
  ];

  return (
    <section id="mvp-features" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50" aria-labelledby="mvp-features-heading">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <header className="mb-12 w-full max-w-2xl text-center md:mb-16 lg:mb-20">
            <p id="mvp-features-subheading" className="mb-3 font-semibold text-[#BD1550] md:mb-4">Boutique MVP Development</p>
            <h2 id="mvp-features-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              The Micro Agency MVP Advantage
            </h2>
            <p className="text-gray-700 md:text-lg">
              As a specialized micro agency, our senior developers work directly with you to transform ideas into market-ready products. Unlike larger firms, our boutique approach delivers personalized MVPs with faster implementation times and more dedicated attention—helping you validate concepts and reach your market quicker.
            </p>
          </header>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {features.map((feature, index) => (
              <article 
                key={index} 
                className="flex w-full flex-col items-center text-center"
                aria-labelledby={`feature-heading-${index}`}
              >
                <div className="mb-5 md:mb-6" role="img" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 
                  id={`feature-heading-${index}`} 
                  className="mb-5 text-2xl font-bold font-header text-primary md:mb-6 md:text-3xl md:leading-[1.3]"
                >
                  {feature.title.replace("\n", " ")}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
          <nav className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16" aria-label="MVP features navigation">
            <Link
              href="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Learn more about our MVP solutions"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center text-sm font-medium text-[#BD1550] transition-colors hover:text-[#BD1550]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BD1550] focus-visible:ring-offset-2"
              aria-label="Start an MVP development project with us"
            >
              Start A Project
              <ChevronRight className="ml-1 size-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
