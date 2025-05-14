import React from "react";

export function MobileFeatures() {
  const features = [
    {
      title: "Revolutionize App Development with React Native and PWAs",
      description: "Leverage a single codebase to guarantee uniform performance and reliability across all platforms and devices.",
      image: "/images/site-images/rob_thomas23_black_people_in_an_web_agency_esigner_people_happy_231ca761-cd7b-4371-8719-fd4d25a20666.png"
    },
    {
      title: "Enhance User Engagement with Fast and Responsive Mobile Apps",
      description: "Enhance your user experience significantly with our fast-loading and efficient Progressive Web Apps designed for optimal performance.",
      image: "/images/site-images/rob_thomas23_black_people_in_an_web_agency_esigner_people_happy_2581b789-5dcf-4b06-8d99-b553a5a00ff3.png"
    },
    {
      title: "Streamline Development Processes with Our Expert Team",
      description: "Tap into our extensive expertise to speed up your mobile app development process and achieve success.",
      image: "/images/site-images/rob_thomas23_black_people_in_an_web_agency_esigner_people_happy_ca5d6073-7710-4b4f-b1e7-0d9510677b13.png"
    }
  ];

  return (
    <section id="mobile-features" className="px-[5%] py-16 md:py-24 lg:py-28 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl leading-[1.2] font-bold font-header text-primary md:text-5xl lg:text-6xl">
              Achieve Seamless Cross-Platform Experiences with Our Mobile
              Development Solutions
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6 md:mb-8">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 rounded-image object-cover"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold font-header text-primary md:mb-4 md:text-2xl">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
