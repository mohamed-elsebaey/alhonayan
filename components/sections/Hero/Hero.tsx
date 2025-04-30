import React from "react";
import logoAndTitleImage from "@/public/logo/logo-title.png";
import heroImage from "@/public/3D/2.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="py-10 relative ">
        <div className="content-with">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <div className="my-2 w-[80%] max-w-[500px]">
                <Image
                  src={logoAndTitleImage}
                  alt=""
                  width={1000}
                  height={250}
                />
              </div>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                مكتب استشارات هندسي يقدم خدمات متكاملة لمختلف النشاطات والدراسات
                الهندسية، من خلال كوكبة من المهندسين والمستشارين بخبرات وكفاءات
                في مجال التخطيط والتصميم والإشراف والإدارة الإحترافية للمشاريع.
              </p>
              <Link href="/design-request">
                <Button
                  variant="secondary"
                  size="lg"
                  className="font-semibold cursor-pointer"
                >
                  طلب تصميم
                </Button>
              </Link>
            </div>
            <div className="overflow-hidden ">
              <img
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src={heroImage.src}
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
