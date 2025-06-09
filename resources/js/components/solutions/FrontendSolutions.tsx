import React from "react";

export function FrontendSolutions() {
  return (
    <section id="frontend-solutions" className="bg-[#F8F9FA] px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="frontend-solutions-heading">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-[#BD1550] md:mb-4">
            The Micro Agency Advantage
          </p>
          <h2 id="frontend-solutions-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
            Boutique Design with Direct Access to Senior Talent
          </h2>
          <p className="text-gray-700 md:text-lg">
            As a specialized micro agency, we revolutionize the way users engage with your website through personalized design solutions created by our senior designers. Unlike larger firms where your project might be handed off to junior staff, our boutique team works directly with you to create responsive interfaces that enhance usability across all devices with faster turnaround times and more personalized attention.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Design</p>
                <h3 id="ui-design-heading" className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Crafting Seamless User Interfaces
                </h3>
                <p className="text-gray-700">
                  Our boutique team of senior designers works directly with you to implement cutting-edge UI strategies that improve user experience, delivering enterprise-quality interfaces without the overhead costs and communication barriers of larger agencies.
                </p>
              </div>
            </div>
            <figure className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_1.png"
                alt="UI design team collaboration"
                className="w-full h-auto aspect-[4/3] object-cover"
                width="400"
                height="300"
                loading="lazy"
              />
              <figcaption className="sr-only">Team of UI designers collaborating on interface design</figcaption>
            </figure>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Innovate</p>
                <h3 id="ux-design-heading" className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  User-Centric Design Approach
                </h3>
                <p className="text-gray-700">
                  Experience the micro agency advantage with user-centric designs created by our specialized team who collaborate directly with you, enhancing every interaction with personalized solutions that larger firms struggle to deliver.
                </p>
              </div>
            </div>
            <figure className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_66721328-b2d4-4452-af7d-12506bf6fe02_1.png"
                alt="User experience design team"
                className="w-full h-auto aspect-[4/3] object-cover"
                width="400"
                height="300"
                loading="lazy"
              />
              <figcaption className="sr-only">UX design team working on user-centric design solutions</figcaption>
            </figure>
          </article>
          <article className="flex flex-col overflow-hidden rounded-lg border border-gray-200">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold text-[#BD1550]">Create</p>
                <h3 id="responsive-design-heading" className="mb-3 text-2xl font-bold font-header text-primary md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Responsive and Engaging Interfaces
                </h3>
                <p className="text-gray-700">
                  With direct access to our senior designers, your interfaces will engage users through innovative technology solutions tailored specifically for your audience—with the focused attention and faster implementation that only a boutique micro agency can provide.
                </p>
              </div>
            </div>
            <figure className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_1e9c41b2-97f0-453f-a3ac-3d7547b2c689_3.png"
                alt="Responsive design team"
                className="w-full h-auto aspect-[4/3] object-cover"
                width="400"
                height="300"
                loading="lazy"
              />
              <figcaption className="sr-only">Team developing responsive and engaging user interfaces</figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
