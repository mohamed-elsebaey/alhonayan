'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import logoAndTitleImage from "@/public/logo/full-logo.png";

import { Button } from "@/components/ui/button";
import { DownloadCompanyProfileButton } from "../companyProfile/DownloadCompanyProfileButton";

// جميع الصور المتاحة
const heroImages = [
  "/images/hero-Images/1.jpg",
  "/images/hero-Images/2.jpg",
  "/images/hero-Images/3.jpg",
  "/images/hero-Images/4.jpg",
  "/images/hero-Images/5.jpg",
  "/images/hero-Images/6.jpg",
  "/images/hero-Images/7.jpg",
  "/images/hero-Images/8.jpg",
  "/images/hero-Images/9.jpg",
  "/images/hero-Images/10.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // تغيير الصورة كل 5 ثوان
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-[calc(100vb-75px)] overflow-hidden">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`خلفية المكتب الاستشاري ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
        
        {/* Content */}
        <div className="relative z-10 content-width h-full">
          <div className="h-full flex flex-col items-center justify-center gap-8 text-center -mt-8">
            <div className="-mb-8">
              <Image
                src={logoAndTitleImage}
                alt=""
                width={250}
                height={250}
                priority={true}
              />
            </div>
            <p className="text-white text-sm md:text-lg max-w-2xl leading-relaxed">
              مكتب استشارات هندسي يقدم خدمات متكاملة لمختلف النشاطات والدراسات
              الهندسية، من خلال كوكبة من المهندسين والمستشارين بخبرات وكفاءات
              في مجال التخطيط والتصميم والإشراف والإدارة الإحترافية للمشاريع.
            </p>
            <div className="flex gap-4">
              <Link href="/design-request">
                <Button
                  variant="default"
                  size="lg"
                  className="font-semibold cursor-pointer"
                >
                  أطلب خدمتك الأن
                </Button>
              </Link>
              <DownloadCompanyProfileButton />
            </div>
          </div>
        </div>


      </section>
    </>
  );
};

export default Hero;
