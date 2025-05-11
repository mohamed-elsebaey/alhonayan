import Image from "next/image";

import missionAndVisionImage1 from "@/public/images/missionAndVision-image1.png";
import missionAndVisionImage3 from "@/public/images/missionAndVision-image3.png";
import missionAndVisionImage4 from "@/public/images/missionAndVision-image4.png"; 

const MissionAndVision = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary-light to-primary-dark">
      <div className="content-width">
        <h1 className="text-4xl font-extrabold text-center text-primary mb-12">
          رؤيتنا ورسالتنا
        </h1>
        <div className="space-y-16">
          {/* Vision Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src={missionAndVisionImage3}
                alt="Vision"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-start">
              <h2 className="text-3xl font-bold text-secondary mb-4">رؤيتنا</h2>
              <ol>
                <li>
                  التفوق والإبداع في مجال الهندسة المدنية والمعمارية والدراسات
                  والإشراف والأعمال المساحية حتى تكون خدماتنا في معظم مدن
                  المملكة.
                </li>
                <li>تأدية العمل بكل مصداقية واحترافية ودقة وتميز.</li>
              </ol>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src={missionAndVisionImage1}
                alt="Mission"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-start">
              <h2 className="text-3xl font-bold text-secondary mb-4">رسالتنا</h2>
              <ol>
                <li>
                  العمل على إيجاد تصاميم (عالية الجودة - سهلة التنفيذ - قليلة
                  التكاليف).
                </li>
                <li>
                  العمل على بناء ثقة متبادلة مع كل العملاء من خلال (العمل الجاد -
                  التصاميم المميزة - الأداء الراقي).
                </li>
                <li>
                  العمل على تقديم الحلول الهندسية المتكاملة التي تجمع بين الشكل -
                  الوظيفة - التكلفة - البعد الإنساني.
                </li>
              </ol>
            </div>
          </div>

          {/* Goal Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src={missionAndVisionImage4} // Replace with the appropriate image for "هدفنا"
                alt="Goal"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-start">
              <h2 className="text-3xl font-bold text-secondary mb-4">هدفنا</h2>
              <ol>
                <li>
                  تحقيق الريادة في تقديم الخدمات الهندسية المتكاملة التي تلبي
                  احتياجات العملاء.
                </li>
                <li>
                  المساهمة في تطوير البنية التحتية للمملكة من خلال تقديم حلول
                  مبتكرة ومستدامة.
                </li>
                <li>
                  تعزيز الجودة والتميز في جميع مشاريعنا لتحقيق رضا العملاء.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
