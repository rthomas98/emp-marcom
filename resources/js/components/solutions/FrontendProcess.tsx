import React from "react";
import { Code, PenTool, Rocket } from "lucide-react";

export function FrontendProcess() {
  return (
    <section id="frontend-process" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-4xl leading-[1.2] font-bold font-header text-primary md:text-5xl lg:text-6xl">
              Transforming Ideas into Engaging User Experiences through
              Front-End Development
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:text-lg">
              Our front-end development process begins with understanding your
              vision and user needs. We then create interactive prototypes that
              bring your ideas to life, ensuring a seamless user experience.
              Finally, we implement the design using the latest technologies to
              deliver a responsive and engaging interface.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-5 md:mb-6">
              <PenTool className="size-12 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-xl font-bold font-header text-primary md:mb-4 md:text-2xl">
              Front-End Development and UX/UI Guide
            </h3>
            <p className="text-gray-700">
              Our team will expertly guide you through every phase of your
              project, from initial concept to successful launch.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Code className="size-12 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-xl font-bold font-header text-primary md:mb-4 md:text-2xl">
              Iterative Design and Development for Optimal User Engagement
            </h3>
            <p className="text-gray-700">
              Our iterative approach guarantees ongoing enhancement, driven by
              valuable feedback from our users and stakeholders.
            </p>
          </div>
          <div>
            <div className="mb-5 md:mb-6">
              <Rocket className="size-12 text-[#BD1550]" />
            </div>
            <h3 className="mb-3 text-xl font-bold font-header text-primary md:mb-4 md:text-2xl">
              Final Implementation: Ensuring a Seamless User Experience
            </h3>
            <p className="text-gray-700">
              We guarantee that your application will operate seamlessly and
              flawlessly across all platforms, providing a consistent user
              experience everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
