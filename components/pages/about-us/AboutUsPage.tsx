import Image from "next/image";
import React from "react";
import logoAndTitleImage from "@/public/logo/logo-title.png";
import aboutUsImage from "@/public/images/missionAndVision-image7.png";
import backgroundImage from "@/public/background/background-image3.png";
import MissionAndVision from "@/components/sections/missionAndVision/MissionAndVision";

const AboutUsPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority={true} 
        className="-z-10" 
      />
      <div className="content-width gap-16 items-start py-8 lg:grid lg:grid-cols-2 lg:py-16">
        <div className="flex flex-col gap-8 items-center lg:items-start">
          <div className="my-2 w-[80%] max-w-[500px]">
            <Image
              src={logoAndTitleImage}
              alt="Logo and Title"
              width={1000}
              height={250}
              priority={true}
            />
          </div>
          <p className="lg:text-start text-center">
            تأسست شركة <strong>دار الحنيان للإستشارات الهندسية</strong> منذ عام{" "}
            <strong>1435 هجرية</strong> ومنذ ذلك الحين ونحن نعمل في مجال الهندسة
            المدنية والمعمارية والمساحية ومشاريع الدراسات والإشراف. تم خلال تلك
            الفترة تكوين كادر هندسي قوي وذو خبرة عالية، وتم تقديم الكثير من
            الأعمال الكبيرة والمشرفة في مجالات البناء المختلفة على مدار السنوات
            الماضية، آخذين على عاتقنا الوصول إلى أعلى التصميمات وتقديم أفضل
            الخدمات حتى يتسنى لنا خدمة هذا الوطن من خلال عملنا.
          </p>
          <p className="lg:text-start text-center">
            نحن فريق من المهندسين والمصممين والمطورين. مبتكرون ومحللو مشاكل.
            نعمل بمرونة وسرعة لتقديم أفضل الحلول الهندسية.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 flex justify-center">
          <Image
            className="max-w-[500px] w-full rounded-lg"
            src={aboutUsImage.src}
            alt="aboutUsImage"
            width={800}
            height={1000}
            priority={true}
          />
        </div>
      </div>
      <MissionAndVision />
    </div>
  );
};

export default AboutUsPage;
