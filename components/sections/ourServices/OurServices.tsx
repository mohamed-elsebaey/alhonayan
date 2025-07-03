import React from "react";
import {
  Building,
  Settings,
  Map,
  ClipboardList,
  ShieldAlert,
  Home,
} from "lucide-react";
import Link from "next/link";

export const OurServices = () => {
  return (
    <div
      className="py-16 pt-6 md:pt-10 bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage: "url('/background/background-image6.png')",
      }}
    >
      <div className="content-width">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-foreground tracking-wide">
            خدماتنا
          </h2>
          <p className="mt-4 leading-relaxed">
            نقدم مجموعة متنوعة من الخدمات لتلبية احتياجات عملائنا بأعلى جودة.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Link
            href="/services/architectural-design"
            className="group header-gradient p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center"
          >
            <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-0 group-hover:bg-white/30 transition-colors duration-300">
              <Home className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-2xl font-semibold text-white group-hover:text-gray-200">
              التصميمات المعمارية
            </p>
            <p className="text-sm text-gray-200 mt-2">
              تقديم تصميمات معمارية مبتكرة تلبي احتياجات العملاء.
            </p>
          </Link>
          <Link
            href="/services/structural-design"
            className="group header-gradient p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-0 group-hover:bg-white/30 transition-colors duration-300">
              <Building className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-xl font-semibold text-white group-hover:text-gray-200">
              التصميمات الإنشائية
            </p>
            <p className="text-sm text-gray-200 mt-2">
              تصميمات إنشائية دقيقة تضمن سلامة واستدامة المباني.
            </p>
          </Link>
          <Link
            href="/services/mechanical-design"
            className="group header-gradient p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center"
          >
            <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-0 group-hover:bg-white/30 transition-colors duration-300">
              <Settings className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-xl font-semibold text-white group-hover:text-gray-200">
              التصميمات الميكانيكية
            </p>
            <p className="text-sm text-gray-200 mt-2">
              حلول ميكانيكية متطورة تلبي أعلى معايير الجودة.
            </p>
          </Link>
          <Link
            href="/services/surveying"
            className="group header-gradient p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center"
          >
            <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-0 group-hover:bg-white/30 transition-colors duration-300">
              <Map className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-xl font-semibold text-white group-hover:text-gray-200">
              الأعمال المساحية
            </p>
            <p className="text-sm text-gray-200 mt-2">
              خدمات مساحية دقيقة باستخدام أحدث التقنيات.
            </p>
          </Link>
          <Link
            href="/services/construction-supervision"
            className="group header-gradient p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center"
          >
            <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-0 group-hover:bg-white/30 transition-colors duration-300">
              <ClipboardList className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-xl font-semibold text-white group-hover:text-gray-200">
              الإشراف على التنفيذ
            </p>
            <p className="text-sm text-gray-200 mt-2">
              متابعة دقيقة لضمان تنفيذ المشاريع بجودة عالية.
            </p>
          </Link>
          <Link
            href="/services/safety-security"
            className="group header-gradient p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 text-center"
          >
            <div className="w-20 h-20  rounded-full flex items-center justify-center mx-auto mb-0 group-hover:bg-white/30 transition-colors duration-300">
              <ShieldAlert className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <p className="text-xl font-semibold text-white group-hover:text-gray-200">
              تصميمات الأمن والسلامة
            </p>
            <p className="text-sm text-gray-200 mt-2">
              تصميم أنظمة أمان وسلامة متوافقة مع معايير الدفاع المدني.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
