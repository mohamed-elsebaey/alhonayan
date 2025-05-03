"use client";
import { swiperImagesUrl } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = ({
  images,
  autoPlay = false,
  interval = 3000,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //   const goToImage = (index: number) => {
  //     setCurrentIndex(index);
  //   };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  return (
    <div className="relative w-full h-[500px] md:h-[calc(100vh-4rem)] max-h-[1000px] overflow-hidden">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              width={2000}
              height={1000}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover"
              priority={index === 0}
              loading={index !== 0 ? "lazy" : "eager"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition-colors"
        aria-label="Previous image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white rounded-full p-2 transition-colors"
        aria-label="Next image"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicators */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {images.map((image, index) => (
        <button
        key={image}
        onClick={() => goToImage(index)}
        className={`w-3 h-3 rounded-full transition-colors ${
          index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
        }`}
        aria-label={`Go to image ${index + 1}`}
        />
      ))}
      </div> */}
    </div>
  );
};

const Swiper = () => {
  
  const images = swiperImagesUrl.map((image) => image.src);

  return (
    <div>
      <Carousel images={images} autoPlay interval={5000} />
    </div>
  );
};

export default Swiper;
