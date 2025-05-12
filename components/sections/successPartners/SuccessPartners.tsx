"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import Autoplay styles

// import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { successPartnersImages } from "@/constants";
import Image from "next/image";

const SuccessPartners = () => {
  const images: string[] = successPartnersImages;
  const defaultImages: string[] = [];

  const carouselImages = images && images.length > 0 ? images : defaultImages;

  return (
    <section className="content-width py-8 section-margin">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">شركاء النجاح</h2>
        <p>نحن نفخر بشراكتنا مع أفضل الشركات والمؤسسات</p>
      </div>
      <div className="relative">
        <Swiper
          className="cursor-grab select-none"
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".swiper-next",
            nextEl: ".swiper-prev",
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          speed={1000} // Add transition speed in milliseconds
          effect={"fade"} // Add fade effect
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 32,
            },
          }}
        >
          {carouselImages.map((url, idx) => (
            <SwiperSlide key={idx} className="max-w-[250]">
              <Image
                src={url}
                alt={`Slide ${idx + 1}`}
                className="w-full h-44 object-cover rounded-3xl shadow-xl"
                width={500}
                height={500}
                loading="lazy"
              />

              <p className="text-center mt-4 font-bold header-gradient text-background rounded-xl py-1.5 px-2 truncate">
                {url.split("/").pop()?.split(".")[0]?.split(" - ")[0]}

                {/* {url.split('/').pop()?.split('.')[0]?.split(' - ')[1]} */}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button className="swiper-prev absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
          <ArrowLeft size={24} />
        </button>
        <button className="swiper-next absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none">
          <ArrowRight size={24} />
        </button>
      </div>
      {/* <div className="text-center mt-6">
        <Button>View More</Button>
      </div> */}
    </section>
  );
};

export default SuccessPartners;
