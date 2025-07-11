import React, { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const HeroCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    {
      src: "/slider/Slider-SPTB-scaled.jpeg",
      alt: "SPTB",
    },
    {
      src: "/slider/Slide-Kepala-BSSN-1.jpeg",
      alt: "Kepala BSSN",
    },
    {
      src: "/slider/Slider-PPPK-2024.png",
      alt: "PPPK 2024",
    },
    {
      src: "/slider/Slider-Pengajuan-Gelar-Pahlawan-RK-V2-scaled.jpg",
      alt: "Pengajuan Gelar Pahlawan",
    },
    {
      src: "/slider/Slider-BESTI.png",
      alt: "BESTI",
    },
  ];

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    updateCurrent();

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !isPlaying) {
      return;
    }

    const interval = setInterval(() => {
      scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api, isPlaying, scrollNext]);

  const scrollTo = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-0 shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-200" />
        <CarouselNext className="right-4 bg-white/90 hover:bg-white border-0 shadow-lg backdrop-blur-sm hover:scale-110 transition-all duration-200" />

        {/* Dot Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 hover:scale-125",
                current === index
                  ? "bg-white scale-125 shadow-lg ring-2 ring-white/50"
                  : "bg-white/60 hover:bg-white/80",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
