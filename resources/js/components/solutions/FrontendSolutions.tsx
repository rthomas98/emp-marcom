import React from "react";

export function FrontendSolutions() {
  return (
    <section id="frontend-solutions" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
            Need Some Front-End Development
          </p>
          <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Dynamic User Experiences
          </h2>
          <p className="text-gray-700 md:text-lg">
            Revolutionizing the way users engage with websites through
            innovative and responsive design solutions that enhance usability
            and create seamless experiences across all devices and screen sizes.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Design</p>
                <h3 className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Crafting Seamless User Interfaces
                </h3>
                <p className="text-gray-700">
                  Improving user experience by implementing cutting-edge design
                  strategies and innovative practices for better usability.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_1.png"
                alt="UI design team collaboration"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Innovate</p>
                <h3 className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  User-Centric Design Approach
                </h3>
                <p className="text-gray-700">
                  Custom solutions designed to enhance and improve every unique
                  user interaction for a more personalized experience.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_66721328-b2d4-4452-af7d-12506bf6fe02_1.png"
                alt="User experience design team"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Create</p>
                <h3 className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Responsive and Engaging Interfaces
                </h3>
                <p className="text-gray-700">
                  Enhancing user engagement by utilizing innovative and
                  cutting-edge technology solutions tailored for modern
                  audiences.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_1e9c41b2-97f0-453f-a3ac-3d7547b2c689_3.png"
                alt="Responsive design team"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
