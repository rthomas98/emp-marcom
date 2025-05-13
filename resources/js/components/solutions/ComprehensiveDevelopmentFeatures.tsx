import React from "react";
import { Code, Layers, Palette } from "lucide-react";

export function ComprehensiveDevelopmentFeatures() {
  return (
    <section id="comprehensive-development-features" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
            <h3 className="text-3xl leading-[1.2] font-bold font-header text-primary md:text-4xl lg:text-5xl">
              Comprehensive Software Development Solutions Tailored to Your
              Business Needs
            </h3>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-5 text-xl font-bold text-primary md:mb-6 md:text-2xl">
                End-to-End Development: From Concept to Deployment
              </h3>
              <p className="mb-5 text-gray-700 md:mb-6">
                Our comprehensive software development services cover all
                aspects, including design, development, and implementation for
                your needs.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-5 text-xl font-bold text-primary md:mb-6 md:text-2xl">
                Scalable Solutions for Modern Business Challenges
              </h3>
              <p className="mb-5 text-gray-700 md:mb-6">
                We specialize in developing scalable applications that
                seamlessly adapt to your ever-changing business landscape and
                needs.
              </p>
            </div>
            <div>
              <div className="mb-5 md:mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-5 text-xl font-bold text-primary md:mb-6 md:text-2xl">
                Innovative Designs That Enhance User Experience
              </h3>
              <p className="mb-5 text-gray-700 md:mb-6">
                Our design philosophy emphasizes creating user-centric
                interfaces that effectively enhance engagement and improve
                overall experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
