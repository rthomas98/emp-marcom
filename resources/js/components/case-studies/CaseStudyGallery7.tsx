import React from "react";
import clsx from "clsx";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  images: ImageProps[];
};

export type Gallery7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CaseStudyGallery7 = (props: Gallery7Props) => {
  const { images } = {
    ...Gallery7Defaults,
    ...props,
  };
  
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid auto-cols-fr justify-center gap-6 md:grid-cols-2 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={clsx("inline-block w-full", {
                "col-start-1 col-end-2 row-start-1 row-end-3": index === 0,
              })}
            >
              <div
                className={clsx("relative size-full", {
                  "pt-[100%]": index === 0,
                  "pt-[56.25%]": index !== 0,
                })}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 size-full object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery7Defaults: Props = {
  images: [
    {
      src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_0.png",
      alt: "Project image 1",
    },
    {
      src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_1.png",
      alt: "Project image 2",
    },
    {
      src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_2.png",
      alt: "Project image 3",
    },
  ],
};

export default CaseStudyGallery7;
