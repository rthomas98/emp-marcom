import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function Approach() {
  return (
    <section id="approach" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="approach-heading">
      <h2 id="approach-heading" className="sr-only">Our Approach</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16">
          <article aria-labelledby="approach-flexibility-heading">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_20ceb692-4f97-46ca-9d6e-d8e9ad71c06b_0 (1).png"
                alt="Remote team collaborating on digital solutions"
                className="w-full rounded-lg"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">Flexibility</p>
            <h3 id="approach-flexibility-heading" className="mb-5 text-3xl leading-[1.2] font-bold font-header text-primary md:mb-6 md:text-4xl lg:text-5xl">
              Empowering Your Business with Remote Solutions
            </h3>
            <p className="mt-5 text-gray-700 md:mt-6">
              Our remote-first approach empowers us to achieve outstanding
              results with unparalleled efficiency. This flexibility
              significantly boosts our scalability and guarantees that we can
              effectively meet your unique business requirements, ensuring
              tailored solutions that align perfectly with your goals.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Flexibility approach links">
              <Link
                href="/company/about"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Learn more about our remote-first approach"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary hover:text-accent-pink"
                aria-label="Contact us about flexible remote solutions"
              >
                Contact
                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
          <article aria-labelledby="approach-agility-heading">
            <div className="mb-6 md:mb-8">
              <img
                src="/images/site-images/rob_thomas23_African_American_Team_of_Young_Managers_Discussing_df53a8b9-91a0-4201-a378-f71855407ec1.png"
                alt="Team discussing project integration strategies"
                className="w-full rounded-lg"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>
            <p className="mb-3 font-semibold text-accent-pink md:mb-4">Agility</p>
            <h3 id="approach-agility-heading" className="mb-5 text-3xl leading-[1.2] font-bold font-header text-primary md:mb-6 md:text-4xl lg:text-5xl">
              Seamless Integration for Your Projects
            </h3>
            <p className="mt-5 text-gray-700 md:mt-6">
              Our approach ensures that your projects are executed smoothly,
              regardless of location. With a team of experts at your disposal,
              we adapt quickly to changing requirements and deliver top-notch
              solutions.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" role="navigation" aria-label="Agility approach links">
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Get started with our agile project integration services"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center text-primary hover:text-accent-pink"
                aria-label="Explore our agile project integration services"
              >
                Explore
                <ChevronRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
