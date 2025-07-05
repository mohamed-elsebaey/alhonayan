import Image from "next/image";
import Link from "next/link";

import logoAndTitleImage from "@/public/logo/logo-title.png";
import heroImage from "@/public/images/hero-image.png";

import { Button } from "@/components/ui/button";
import { DownloadCompanyProfileButton } from "../companyProfile/DownloadCompanyProfileButton";

const Hero = () => {
  return (
    <>
      <section className="section-margin relative pb-10">
        <div className="content-width">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap-8 items-center lg:items-start">
              <div className="my-2 w-[80%] max-w-[500px]">
                <Image
                  src={logoAndTitleImage}
                  alt=""
                  width={1000}
                  height={250}
                  priority={true}
                />
              </div>
              <p className="lg:text-start text-center">
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
            <div className="overflow-hidden">
              <Image
                width={1000}
                height={1000}
                className="lg:mx-0 mx-auto max-h-[550px] rounded-3xl object-cover"
                src={heroImage.src}
                alt="hero image"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
