import React from "react";
import { Link } from "@inertiajs/react";

export function BackendAPIHeader() {
  return (
    <section
      id="backend-api-header"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
      aria-labelledby="backend-api-heading"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:mr-20 lg:ml-[5vw] lg:justify-self-end">
        <h1 id="backend-api-heading" className="mb-5 text-5xl font-bold font-header text-primary md:mb-6 md:text-6xl lg:text-7xl">
          Boutique Back-End Development with Senior Expertise
        </h1>
        <p className="text-gray-700 md:text-lg">
          As a specialized micro agency, we deliver personalized back-end and API development with direct access to our senior developers. Our boutique approach creates scalable server-side logic and seamless database management without the overhead of larger firms, ensuring robust API integrations that empower your applications with faster turnaround times.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8" role="navigation" aria-label="Backend and API development actions">
          <Link
            href="/solutions"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#BD1550] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#BD1550]/90 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            aria-label="Learn more about our backend and API development services"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md border border-[#BD1550] bg-transparent px-4 py-2 text-sm font-medium text-[#BD1550] transition-colors hover:bg-[#BD1550]/10 focus:outline-none focus:ring-2 focus:ring-[#BD1550] focus:ring-offset-2"
            aria-label="Contact us about backend and API development"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4 overflow-hidden py-8 md:py-16 lg:h-screen" aria-label="Backend and API development showcase" role="region">
        <div className="grid shrink-0 grid-cols-1 gap-y-4">
          <div className="ml-[-8.5%] grid w-full animate-marquee-horizontally-reverse auto-cols-fr grid-cols-2 gap-4 self-center">
            <div className="grid w-full grid-flow-col gap-4">
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png"
                  alt="Backend developers coding"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Team of backend developers writing server-side code</figcaption>
              </figure>
              <div className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png"
                  alt="API development team"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">API development team collaborating on integration solutions</figcaption>
              </div>
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_7c130fd9-be51-4ae4-a3d4-cd7c6117e8b8.png"
                  alt="Database management"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Database management specialists optimizing data structures</figcaption>
              </figure>
            </div>
            <div className="grid w-full grid-flow-col gap-4">
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png"
                  alt="Backend programmer"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Backend programmer developing server-side logic</figcaption>
              </figure>
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_008ed057-ce50-4832-bfc4-21051acf71dd.png"
                  alt="Web developers"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Web developers collaborating on backend integration</figcaption>
              </figure>
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_7f9c41d1-f0bf-4879-904b-6e78f960a9d0.png"
                  alt="Backend development team"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Backend development team collaborating on server-side architecture</figcaption>
              </figure>
            </div>
          </div>
          <div className="grid w-full animate-marquee-horizontally grid-cols-2 gap-4 self-center">
            <div className="grid w-full grid-flow-col gap-4">
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_8084df01-8a32-4882-abb7-612cc1d518a3.png"
                  alt="API developers"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">API developers working on integration solutions</figcaption>
              </figure>
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_96d43b55-5303-47c4-aa1d-d61167c301a1.png"
                  alt="API specialists"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">API specialists working on integration solutions</figcaption>
              </figure>
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_a57b60ac-00f5-4255-937e-d7408bd3b519.png"
                  alt="Database engineers"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Database engineers optimizing database performance</figcaption>
              </figure>
            </div>
            <div className="grid w-full grid-flow-col gap-4">
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_ba3a7cd2-d001-4382-a42f-8ac7e434c0a9.png"
                  alt="Backend architecture"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Backend developers working on system architecture</figcaption>
              </figure>
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_074e0918-602f-489f-a994-549f9d1f62fa.png"
                  alt="API integration team"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">API integration team collaborating on solutions</figcaption>
              </figure>
              <figure className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]">
                <img
                  className="absolute inset-0 size-full rounded-image object-cover"
                  src="/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_1e5c5452-6ee0-4eb9-aead-c327f906cadb.png"
                  alt="Server management"
                  width="400"
                  height="300"
                  loading="lazy"
                />
                <figcaption className="sr-only">Server management specialists optimizing backend infrastructure</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
