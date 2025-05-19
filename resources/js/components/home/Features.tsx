import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type ContentProps = {
  tagline: string;
  heading: string;
  description: string;
  buttons: {
    title: string;
    href: string;
    variant?: "primary" | "secondary" | "link";
  }[];
  image: ImageProps;
};

type Props = {
  contents: ContentProps[];
  images: ImageProps[];
};

export type FeaturesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Features = (props: FeaturesProps) => {
  const { contents, images } = {
    ...FeaturesDefaults,
    ...props,
  };

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const currentScrollPosition = window.scrollY + sectionHeight / 2;
      const currentSection = Math.floor(currentScrollPosition / sectionHeight);
      setActiveSection(currentSection >= 0 && currentSection < contents.length ? currentSection : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contents.length]);

  return (
    <section id="features" className="px-[5%]" aria-labelledby="features-heading">
      <h2 id="features-heading" className="sr-only">Our Features</h2>
      <div className="container mx-auto">
        <div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
          <div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                className={clsx("absolute w-full rounded-lg border border-gray-200 transition-opacity duration-500", {
                  "opacity-100": activeSection === index,
                  "opacity-0": activeSection !== index,
                })}
                alt={image.alt || `Feature image ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-12 md:block">
            {contents.map((content, index) => (
              <div key={index}>
                <div className="flex flex-col items-start justify-center md:h-screen">
                  <p className="mb-3 font-semibold text-accent-pink md:mb-4">{content.tagline}</p>
                  <h3 className="mb-5 text-3xl font-bold font-header text-primary md:mb-6 md:text-4xl lg:text-5xl">
                    {content.heading}
                  </h3>
                  <p className="text-gray-700 md:text-lg">{content.description}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {content.buttons.map((button, index) => {
                      if (button.variant === "secondary") {
                        return (
                          <Link
                            key={index}
                            href={button.href}
                            className="inline-flex h-10 items-center justify-center rounded-md border border-primary bg-transparent px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          >
                            {button.title}
                          </Link>
                        );
                      } else if (button.variant === "link") {
                        return (
                          <Link
                            key={index}
                            href={button.href}
                            className="inline-flex items-center text-primary hover:text-accent-pink"
                          >
                            {button.title}
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        );
                      } else {
                        return (
                          <Link
                            key={index}
                            href={button.href}
                            className="inline-flex h-10 items-center justify-center rounded-md bg-accent-pink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-pink/90 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2"
                          >
                            {button.title}
                          </Link>
                        );
                      }
                    })}
                  </div>
                  <div className="mt-10 block w-full md:hidden">
                    <img 
                      src={content.image.src} 
                      className="w-full rounded-lg" 
                      alt={content.image.alt || `Feature mobile image ${index + 1}`} 
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const FeaturesDefaults: Props = {
  contents: [
    {
      tagline: "Custom Software Development",
      heading: "Tailored Solutions for Your Unique Challenges",
      description:
        "We build custom software applications that solve your specific business challenges. Our development team works closely with you to understand your requirements and deliver scalable, maintainable solutions that drive growth and efficiency. Our boutique team approach ensures direct access to senior developers throughout your project.",
      buttons: [
        { title: "Learn More", href: "/solutions/software-development-design", variant: "secondary" },
        { title: "View Case Studies", href: "/case-studies", variant: "link" },
      ],
      image: {
        src: "/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png",
        alt: "Software development team collaborating on custom solutions",
      },
    },
    {
      tagline: "Web & E-commerce Development",
      heading: "Powerful Online Experiences That Convert",
      description:
        "From responsive websites to full-featured e-commerce platforms, we create web experiences that engage your audience and drive conversions. Our solutions are built with performance, security, and scalability in mind. As a micro agency, we deliver personalized e-commerce experiences with faster turnaround and more attentive service.",
      buttons: [
        { title: "Explore Services", href: "/solutions/web-ecommerce-development", variant: "secondary" },
        { title: "Contact Us", href: "/contact", variant: "link" },
      ],
      image: {
        src: "/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png",
        alt: "E-commerce website displayed on laptop and mobile devices",
      },
    },
    {
      tagline: "API & Backend Development",
      heading: "Robust Infrastructure for Modern Applications",
      description:
        "We design and build powerful backend systems and APIs that form the foundation of your digital products. Our solutions ensure seamless data flow, system integration, and optimal performance for your applications. Our specialized team brings focused expertise to your infrastructure needs without the overhead of larger firms.",
      buttons: [
        { title: "View Solutions", href: "/solutions/backend-api-development", variant: "secondary" },
        { title: "See Our Process", href: "/company/about", variant: "link" },
      ],
      image: {
        src: "/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png",
        alt: "Backend developer working on API infrastructure",
      },
    },
    {
      tagline: "UX/UI Design & Front-End Development",
      heading: "Beautiful Interfaces That Users Love",
      description:
        "We create intuitive, engaging user experiences and translate them into pixel-perfect front-end implementations. Our design-led approach ensures your applications are not just functional but delightful to use. Experience the advantage of working directly with our senior designers from concept to completion.",
      buttons: [
        { title: "See Our Work", href: "/solutions/frontend-development-uxui-design", variant: "secondary" },
        { title: "Start Your Project", href: "/contact", variant: "link" },
      ],
      image: {
        src: "/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png",
        alt: "UX/UI designers collaborating on interface design",
      },
    },
  ],
  images: [
    {
      src: "/images/site-images/rob_thomas23_African_American_Coders_working_in_a_Software_deve_3dadbb8b-55c4-48bc-bf97-a7af44e0ca5e.png",
      alt: "Software development team collaborating on custom solutions",
    },
    {
      src: "/images/site-images/rob_thomas23_A_dynamic_image_of_an_ecommerce_website_on_a_lapto_8573ee70-5ea2-48aa-ae70-35db662a51f2.png",
      alt: "E-commerce website displayed on laptop and mobile devices",
    },
    {
      src: "/images/site-images/rob_thomas23_African_American_Programmer_working_in_a_software__b8f0beff-e05e-4cb9-9bdd-0fe9e598f779.png",
      alt: "Backend developer working on API infrastructure",
    },
    {
      src: "/images/site-images/rob_thomas23_African_American_Designers_and_developers_collabor_5359f06c-96ed-4f19-94a6-00d8d4fdbd59.png",
      alt: "UX/UI designers collaborating on interface design",
    },
  ],
};
