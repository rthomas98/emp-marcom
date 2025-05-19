import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-accent-pink md:mb-4">
            Outstanding performance in all endeavors.
          </p>
          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Boutique Expertise, Enterprise-Level Results
          </h2>
          <p className="text-gray-700 md:text-lg">
            As a specialized micro agency, we combine deep technical expertise with personalized attention that larger firms can't match. Our nimble team delivers tailored solutions that drive innovation, enhance efficiency, and foster growth—without the overhead and complexity of traditional agencies.
          </p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 16.98h-5.99c-1.66 0-3.01-1.34-3.01-3s1.34-3 3.01-3H18" />
                      <path d="M9 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Modern Tech Solutions
                </h3>
                <p className="text-gray-700">
                  Our team possesses extensive expertise across a wide range of
                  diverse technology stacks and platforms.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/solutions"
                  className="inline-flex items-center text-primary hover:text-accent-pink"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <div className="mb-5 md:mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Secure & Reliable
                </h3>
                <p className="text-gray-700">
                  We implement industry-leading security practices to ensure your data and applications remain protected at all times.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/solutions/security"
                  className="inline-flex items-center text-primary hover:text-accent-pink"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex auto-cols-fr flex-col rounded-lg border border-gray-200 bg-white sm:col-span-2 sm:grid-cols-2 lg:col-span-1 lg:col-start-3 lg:row-span-2">
            <div className="flex size-full flex-col items-center justify-center self-start bg-gray-100 p-4 lg:h-auto">
              <img
                src="/images/site-images/rob_thomas23_African_American_Project_Manager_Makes_a_Presentat_2d8255b5-eb2b-4d1c-b57d-58077e6d9d44.png"
                alt="Team presenting digital transformation strategy"
                className="h-full w-full object-cover rounded-md border border-gray-200"
              />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold text-accent-pink">Innovation</p>
                <h3 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Empowering Your Digital Transformation
                </h3>
                <p className="text-gray-700">
                  Accelerating business growth through cutting-edge technology
                  solutions that drive innovation and success.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/solutions/digital-transformation"
                  className="inline-flex items-center text-primary hover:text-accent-pink"
                >
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex auto-cols-fr flex-col rounded-lg border border-gray-200 bg-white last-of-type:row-span-1 last-of-type:grid sm:col-span-2 sm:grid-cols-2 sm:last-of-type:row-start-2 md:last-of-type:col-span-2 lg:col-span-2 lg:col-start-1 lg:row-span-1">
            <div className="flex size-full flex-col items-center justify-center self-start bg-gray-100 p-4 lg:h-auto">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_1e9c41b2-97f0-453f-a3ac-3d7547b2c689_3.png"
                alt="Diverse team working on enterprise solutions"
                className="h-full w-full object-cover rounded-md border border-gray-200"
              />
            </div>
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8">
              <div>
                <p className="mb-2 font-semibold text-accent-pink">Scalability</p>
                <h3 className="mb-3 text-2xl font-bold text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Experience with Industry Leaders
                </h3>
                <p className="text-gray-700">
                  Recognized by leading global brands for our unwavering
                  commitment to excellence and quality in every aspect of our
                  work.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-primary hover:text-accent-pink"
                >
                  Explore
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
