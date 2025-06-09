import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Globe, ShoppingCart, Smartphone } from "lucide-react";

export function WebEcommerce() {
  return (
    <section id="web-ecommerce" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="web-ecommerce-heading">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">Transform entirely</p>
            <h2 id="web-ecommerce-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
              Comprehensive Web and E-commerce Solutions
            </h2>
            <p className="text-gray-700 md:text-lg">
              Empuls3 offers a full suite of web and e-commerce development
              solutions tailored to your business needs. From custom WordPress
              sites to robust e-commerce platforms and Progressive Web Apps, we
              ensure a seamless online experience.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <article className="flex w-full flex-col items-center text-center" aria-labelledby="wordpress-heading">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10" aria-hidden="true">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 id="wordpress-heading" className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Custom WordPress Solutions for You
              </h3>
              <p className="text-gray-700">
                Our comprehensive WordPress solutions are specifically designed
                to enhance and elevate your brand's online presence effectively.
              </p>
            </article>
            <article className="flex w-full flex-col items-center text-center" aria-labelledby="ecommerce-heading">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10" aria-hidden="true">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 id="ecommerce-heading" className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                E-commerce Platforms That Drive Sales Growth
              </h3>
              <p className="text-gray-700">
                We develop scalable e-commerce platforms designed to
                significantly enhance customer engagement and drive increased
                sales for your business.
              </p>
            </article>
            <article className="flex w-full flex-col items-center text-center" aria-labelledby="pwa-heading">
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10" aria-hidden="true">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 id="pwa-heading" className="mb-5 text-2xl font-bold text-primary md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Enhanced User Experience with PWAs
              </h3>
              <p className="text-gray-700">
                Our Progressive Web Apps seamlessly blend the advantages of web
                and mobile technologies, delivering fast and reliable user
                experiences.
              </p>
            </article>
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16" role="navigation" aria-label="Web and e-commerce solutions navigation">
            <Link
              href="/solutions/web-ecommerce-development"
              className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Learn more about our web and e-commerce development solutions"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary hover:text-accent-pink"
              aria-label="Get started with our web and e-commerce development services"
            >
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
