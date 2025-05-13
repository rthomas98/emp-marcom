import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

type TabItemProps = {
  tabItem: {
    heading: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
  };
  index: number;
  activeTab: number;
};

const TabItem = ({ tabItem, index, activeTab }: TabItemProps) => {
  if (index !== activeTab) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="relative flex items-center justify-center size-full"
    >
      {tabItem.image && (
        <img
          src={tabItem.image.src}
          alt={tabItem.image.alt}
          className="rounded-lg mb-6 md:mb-0 w-full"
          loading="lazy"
        />
      )}
    </motion.div>
  );
};

export function Partners() {
  const [activeTab, setActiveTab] = useState(0);
  
  const setActiveTabSetter = (index: number) => () => setActiveTab(index);
  
  const getActiveTabButtonStyles = (index: number) => {
    return clsx("cursor-pointer border-b border-gray-200 py-4", {
      "opacity-100 border-primary": activeTab === index,
      "opacity-50 hover:opacity-75": activeTab !== index,
    });
  };
  
  const getActiveTabButtonContentStyles = (index: number) => {
    return {
      height: activeTab === index ? "auto" : 0,
      opacity: activeTab === index ? 1 : 0,
    };
  };

  const tabItems = [
    {
      heading: "Warner Brothers Discovery",
      description: "We helped Warner Brothers Discovery modernize their content delivery platform, resulting in a 40% increase in streaming performance.",
      image: {
        src: "/images/site-images/rob_thomas23_African_American_Business_professionals_in_a_moder_aa9cdc13-5800-4ce5-8074-5d754c6002f1.png",
        alt: "Team working with Warner Brothers Discovery",
      },
    },
    {
      heading: "Shell",
      description: "Our team developed custom data analytics solutions for Shell, enabling real-time decision making across their global operations.",
      image: {
        src: "/images/site-images/rob_thomas23_African_American_CEO_and_Chief_Executive_Talking_A_72595ef3-0f82-49e6-bbd3-9b4581e80520.png",
        alt: "Executive meeting with Shell leadership",
      },
    },
    {
      heading: "Samsung",
      description: "We created innovative mobile applications for Samsung that enhanced user experience and increased customer engagement by 35%.",
      image: {
        src: "/images/site-images/rob_thomas23_African_American_Project_Manager_Makes_a_Presentat_ff51deb6-2b53-4935-b091-29dd4ac7a594.png",
        alt: "Project presentation for Samsung executives",
      },
    },
  ];

  return (
    <section id="partners" className="px-[5%] py-16 md:py-24 lg:py-28" aria-labelledby="partners-heading">
      <div className="container">
        <div className="relative flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-6 lg:pr-10">
            <div className="mb-8 md:hidden">
              <p className="mb-3 font-semibold text-accent-pink md:mb-4">
                Achieving success is a journey filled with growth.
              </p>
              <h2 id="partners-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
                Partnering with Industry Leaders for Excellence
              </h2>
              <p className="text-gray-700 md:text-lg">
                Empuls3 has a proven track record of delivering exceptional
                results for global leaders. Our collaborations with companies
                like Warner Brothers Discovery, Shell, and Samsung highlight our
                commitment to excellence.
              </p>
            </div>
            <AnimatePresence initial={false}>
              {tabItems.map((item, index) => (
                <TabItem
                  key={index}
                  tabItem={item}
                  index={index}
                  activeTab={activeTab}
                />
              ))}
            </AnimatePresence>
          </div>
          <div className="w-full md:w-1/2 md:pl-6 lg:pl-10">
            <div className="mb-8 hidden md:block">
              <p className="mb-3 font-semibold text-accent-pink md:mb-4">
                Achieving success is a journey filled with growth.
              </p>
              <h2 className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">
                Partnering with Industry Leaders for Excellence
              </h2>
              <p className="text-gray-700 md:text-lg">
                Empuls3 has a proven track record of delivering exceptional
                results for global leaders. Our collaborations with companies
                like Warner Brothers Discovery, Shell, and Samsung highlight our
                commitment to excellence.
              </p>
            </div>
            <div className="static flex flex-col flex-wrap justify-stretch md:block">
              <div className="relative grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch">
                {tabItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={setActiveTabSetter(index)}
                    className={getActiveTabButtonStyles(index)}
                  >
                    <h3 className="text-xl font-bold text-primary md:text-2xl">
                      {item.heading}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={getActiveTabButtonContentStyles(index)}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-gray-700">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Link
                href="/case-studies"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary hover:text-accent-pink"
              >
                Contact
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
