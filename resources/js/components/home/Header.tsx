import React from "react";
import { Link } from "@inertiajs/react";
import { motion, useScroll, useTransform } from "framer-motion";

type ImageProps = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  description: string;
  buttons: {
    title: string;
    href: string;
    variant?: "primary" | "secondary";
  }[];
  images: ImageProps[];
};

export type HeaderProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header = (props: HeaderProps) => {
  const { title, description, buttons, images } = {
    ...HeaderDefaults,
    ...props,
  };

  const { scrollYProgress } = useScroll();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;

  // Create transforms for each property directly using the useTransform hook
  const containerHeightTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? ["60vh", "100vh"] : ["70vh", "100vh"]
  );

  const leftImageGroupXTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? ["0vw", "-25vw"] : ["0vw", "-50vw"]
  );

  const centerImageXTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? ["0vw", "-25vw"] : ["0vw", "-50vw"]
  );

  const centerImageWidthTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? ["50vw", "100vw"] : ["30vw", "100vw"]
  );

  const centerImageHeightTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? ["50vh", "100vh"] : ["70vh", "100vh"]
  );

  const rightImageXTransform = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? ["0vw", "25vw"] : ["0vw", "20vw"]
  );

  // Apply transforms to style objects
  const containerHeight = {
    height: containerHeightTransform,
  };

  const leftImageGroup = {
    x: leftImageGroupXTransform,
  };

  const centerImageContainer = {
    x: centerImageXTransform,
    width: centerImageWidthTransform,
    height: centerImageHeightTransform,
  };

  const rightImage = {
    x: rightImageXTransform,
  };

  return (
    <section id="hero" className="relative h-[250vh]" aria-labelledby="hero-heading" style={{ backgroundImage: 'url("/images/backgrounds/Background pattern-2.svg")', backgroundSize: '400px', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right' }}>
      <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
        <div className="container">
          <div className="w-full max-w-lg">
            <h1 id="hero-heading" className="mb-5 text-4xl font-bold font-header text-primary md:mb-6 md:text-5xl lg:text-6xl">{title}</h1>
            <p className="text-lg text-gray-700">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                button.variant === "secondary" ? (
                  <Link
                    key={index}
                    href={button.href}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    {button.title}
                  </Link>
                ) : (
                  <Link
                    key={index}
                    href={button.href}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-accent-pink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-pink/90 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2"
                  >
                    {button.title}
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
        <motion.div
          className="z-10 grid w-full grid-flow-col grid-cols-[25%_50%_25%] justify-center md:grid-cols-[50%_30%_20%]"
          style={containerHeight}
        >
          <motion.div
            className="grid grid-flow-col grid-cols-1 justify-items-end gap-4 justify-self-end px-4"
            style={leftImageGroup}
          >
            <div className="relative top-[5%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]">
              <img 
                className="aspect-[2/3] w-full object-cover rounded-lg" 
                src={images[0].src} 
                alt={images[0].alt}
                loading="lazy" 
              />
            </div>

            <div className="relative top-[-5%] flex flex-col gap-4 self-center">
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img 
                  className="aspect-square w-full object-cover rounded-lg" 
                  src={images[1].src} 
                  alt={images[1].alt}
                  loading="lazy" 
                />
              </div>
              <div className="relative w-[30vw] flex-none md:w-[15vw]">
                <img 
                  className="aspect-[3/4] w-full object-cover rounded-lg" 
                  src={images[2].src} 
                  alt={images[2].alt}
                  loading="lazy" 
                />
              </div>
            </div>

            <div className="relative top-[15%] hidden w-[40vw] sm:w-[25vw] md:block lg:w-[22vw]">
              <img 
                className="aspect-square w-full object-cover rounded-lg" 
                src={images[3].src} 
                alt={images[3].alt}
                loading="lazy" 
              />
            </div>
          </motion.div>

          <motion.div className="relative" style={centerImageContainer}>
            <img 
              className="size-full object-cover rounded-lg" 
              src={images[4].src} 
              alt={images[4].alt}
              loading="lazy" 
            />
          </motion.div>

          <motion.div
            className="grid grid-flow-col grid-cols-1 gap-4 justify-self-start px-4"
            style={rightImage}
          >
            <div className="relative top-[5%] w-[40vw] md:w-[25vw] lg:w-[22vw]">
              <img 
                className="aspect-[3/4] w-full object-cover rounded-lg" 
                src={images[5].src} 
                alt={images[5].alt}
                loading="lazy" 
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 mt-[100vh]" />
    </section>
  );
};

export const HeaderDefaults: Props = {
  title: "Innovative Software Solutions for Modern Businesses",
  description:
    "Empuls3 delivers custom software development, web applications, and IT consulting services that transform your business and drive growth in the digital landscape.",
  buttons: [
    {
      title: "Explore Solutions",
      href: "/solutions",
      variant: "primary",
    },
    {
      title: "Contact Us",
      href: "/contact",
      variant: "secondary",
    },
  ],
  images: [
    {
      src: "/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_074e0918-602f-489f-a994-549f9d1f62fa.png",
      alt: "Software developer working on code",
    },
    {
      src: "/images/site-images/rob_thomas23_African_American_Web_Developers_in_a_working_envir_008ed057-ce50-4832-bfc4-21051acf71dd.png",
      alt: "Web development team collaboration",
    },
    {
      src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_Happy__Mobile_de_addb40d4-04d4-481e-9072-f29d1dee05d1_3 (1).png",
      alt: "Mobile development team meeting",
    },
    {
      src: "/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_390a7a57-d7d7-4496-88ad-dce46e0c4c80.png",
      alt: "Software development team working together",
    },
    {
      src: "/images/site-images/rob_thomas23_African_American_Project_Manager_Makes_a_Presentat_2d8255b5-eb2b-4d1c-b57d-58077e6d9d44.png",
      alt: "Project manager presenting to team",
    },
    {
      src: "/images/site-images/rob_thomas23_A_African_American_team_of_professionals_collabora_0c9ec954-2131-4655-b31f-c9a5c027ba39.png",
      alt: "Team of professionals collaborating",
    },
  ],
};
