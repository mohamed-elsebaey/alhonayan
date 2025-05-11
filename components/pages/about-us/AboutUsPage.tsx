import Image from "next/image";
import React from "react";
import logoAndTitleImage from "@/public/logo/logo-title.png";

import aboutUsImage1 from "@/public/images/aboutUs-image1.jpg";
import aboutUsImage2 from "@/public/images/aboutUs-image2.jpg";
import MissionAndVision from "@/components/sections/missionAndVision/MissionAndVision";

const AboutUsPage = () => {
  return (
    <div className="bg-[url('/background/background-image3.png')] bg-cover bg-center min-h-screen flex flex-col justify-center items-center shadow-2xl shadow-primary/50">
      <div className=" content-width gap-16 items-center py-8 lg:grid lg:grid-cols-2 lg:py-16">
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
            تأسس مكتب <strong>دار الحنيان للإستشارات الهندسية</strong> منذ عام{" "}
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
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src={aboutUsImage2.src}
            alt="aboutUsImage2"
            width={1700}
            height={2000}
            priority={true}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src={aboutUsImage1.src}
            alt="aboutUsImage1"
            width={1700}
            height={2000}
            priority={true}
          />
        </div>
      </div>
      <MissionAndVision/>
    </div>
  );
};

export default AboutUsPage;
