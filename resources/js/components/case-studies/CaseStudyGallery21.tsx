import { useState, useRef } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  images: ImageProps[];
};

export type Gallery21Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const CaseStudyGallery21 = (props: Gallery21Props) => {
  const { images } = {
    ...Gallery21Defaults,
    ...props,
  };

  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle manual navigation
  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !carouselRef.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="overflow-hidden px-[5%] py-12 md:py-16">
      <div className="container mx-auto">
        <div className="relative">
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            <div 
              className="ml-0 flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="basis-full pl-0 pr-6 md:basis-1/2 md:pr-8">
                  <img
                    src={image.src}
                    alt={image.alt || "Gallery image"}
                    className="aspect-square size-full object-cover rounded-md"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex items-center justify-between">
            <div className="mt-5 flex w-full items-start justify-start">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={clsx("mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index,
                    "bg-gray-200": current !== index,
                  })}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex items-end justify-end gap-2 md:gap-4">
              <button 
                onClick={handlePrevious}
                className="static right-0 top-0 size-12 -translate-y-0 flex items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-50"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-black" />
              </button>
              
              <button 
                onClick={handleNext}
                className="static right-0 top-0 size-12 -translate-y-0 flex items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-50"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Gallery21Defaults: Props = {
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
    {
      src: "/images/site-images/rob_thomas23_A_Diverse_team_African_American_white_men_and_wo_36e520ed-8877-46b5-8416-655e4dae40c8_3.png",
      alt: "Project image 4",
    },
  ],
};

export default CaseStudyGallery21;
