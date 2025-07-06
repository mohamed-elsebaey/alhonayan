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
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100vb-75px)] overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
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
          <p className="text-white text-sm md:text-lg xl:text-2xl font-black 2xl:text-4xl max-w-2xl leading-relaxed">
            شركة استشارات هندسية تقدّم لك تجربة متكاملة في التصميم، التنفيذ، وإدارة المشاريع، بخبرة وكفاءة هندسية تليق بتطلعاتك.
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


      {/* Scroll Down Animation - Elegant Chevron */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        {/* <span className="text-white text-xs mb-2">مرر للأسفل</span> */}
        <div className="flex flex-col items-center gap-1">
          <span className="block w-8 h-8">
            <svg className="chevron chevron-1" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 12l8 8 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="block w-8 h-8 -mt-3">
            <svg className="chevron chevron-2" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M8 12l8 8 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
        <style jsx>{`
          .chevron {
            opacity: 0.7;
            transform: translateY(0);
            animation: chevronMove 1.6s infinite;
          }
          .chevron-2 {
            animation-delay: 0.8s;
            opacity: 0.4;
          }
          @keyframes chevronMove {
            0% { opacity: 0; transform: translateY(-8px); }
            40% { opacity: 1; transform: translateY(0); }
            80% { opacity: 0.4; transform: translateY(8px); }
            100% { opacity: 0; transform: translateY(16px); }
          }
        `}</style>
      </div>
    </section>
  );
}

export default Hero;
