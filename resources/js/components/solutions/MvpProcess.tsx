import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export function MvpProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Rapid Prototyping",
      subtitle: "Ideate",
      heading: "Transform Ideas into Functional Prototypes Quickly",
      description: "Our fast and efficient rapid prototyping service significantly speeds up your product development process. Transform your innovative concepts into functional working models in no time at all.",
      image: "/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png"
    },
    {
      number: "02",
      title: "User Testing",
      subtitle: "Validate",
      heading: "Gather Valuable User Feedback to Refine Your MVP",
      description: "Our comprehensive user testing approach helps you validate your product with real users. We collect actionable insights that guide refinements and ensure your MVP resonates with your target audience.",
      image: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__working_t_e54e2d34-af10-4785-8b30-bc46cef92038_0.png"
    },
    {
      number: "03",
      title: "Iterative Development",
      subtitle: "Improve",
      heading: "Continuously Enhance Your Product Based on Feedback",
      description: "Our iterative development process incorporates user feedback to continuously improve your MVP. We make data-driven refinements that enhance functionality and user experience with each iteration.",
      image: "/images/site-images/rob_thomas23_African_American_People_working_in_big_modern_of_848a2004-ac77-47fe-9d58-52c599a75e0a_1.png"
    },
    {
      number: "04",
      title: "Launch Strategy",
      subtitle: "Deploy",
      heading: "Strategic Product Launch for Maximum Impact",
      description: "Our launch strategy services help you bring your MVP to market effectively. We develop a comprehensive plan that maximizes visibility, adoption, and sets the foundation for sustainable growth.",
      image: "/images/site-images/rob_thomas23_African_American_People_working_in_big_modern_of_848a2004-ac77-47fe-9d58-52c599a75e0a_2.png"
    }
  ];

  return (
    <section id="mvp-process" className="relative">
      <div className="sticky top-0">
        {processSteps.map((step, index) => {
          const topOffset = index === 0 ? "top-0" : 
                           index === 1 ? "lg:top-16 lg:-mt-32 lg:mb-32" : 
                           index === 2 ? "lg:top-32 lg:-mt-16 lg:mb-16" : 
                           "lg:top-0 lg:mb-16";
          
          return (
            <React.Fragment key={step.number}>
              <div className="relative -top-32 h-0" />
              <div className={`relative border-t border-gray-200 bg-white pb-8 md:pb-14 lg:sticky lg:pb-0 ${topOffset}`}>
                <div className="px-[5%]">
                  <div className="container mx-auto">
                    <div className="flex h-16 w-full items-center">
                      <span className="mr-5 font-semibold text-[#BD1550] md:mr-6 md:text-lg">
                        {step.number}
                      </span>
                      <h3 className="font-semibold font-header text-primary md:text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <div className="py-8 md:py-10 lg:py-12">
                      <div className="grid grid-cols-1 gap-y-12 md:items-center md:gap-x-12 lg:grid-cols-2 lg:gap-x-20">
                        <div>
                          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">{step.subtitle}</p>
                          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
                            {step.heading}
                          </h2>
                          <p className="text-gray-700 md:text-lg">
                            {step.description}
                          </p>
                          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
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
                        <div className="relative">
                          <img
                            src={step.image}
                            className="h-[25rem] w-full rounded-image object-cover sm:h-[30rem] lg:h-[60vh]"
                            alt={`${step.title} process step`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
