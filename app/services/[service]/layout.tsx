import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { services } from "./_constants";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    service: string;
  }>;
}


export default async function Layout({
  children,
  params,
}: LayoutProps) {
  const resolvedParams = (await params).service;

  return (
    <div style={{
        backgroundImage: "url('/background/background-image6.png')",
      }}>
      <Breadcrumb serviceKey={resolvedParams} />
      {children}
    </div>
  );
}

const Breadcrumb = ({ serviceKey }: { serviceKey: string }) => {
  const serviceObj = services[serviceKey as keyof typeof services];
  const serviceName = serviceObj?.title?.ar || "تفاصيل الخدمة";

  return (
    <div className="pt-6 md:pt-10 py-4 border-b md:py-5">
      <ul className="content-width flex items-center font-medium">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex gap-2 items-center  hover:text-primary"
          >
            <Home className="w-4 h-4" />
            الرئيسية
          </Link>
          <ArrowLeft className="w-4 h-4 mx-2" />
        </li>
        <li className="flex items-center">
          <Link href="/services" className="hover:text-primary">
            خدماتنا
          </Link>
          <ArrowLeft className="w-4 h-4 mx-2" />
        </li>
        <li className="text-primary font-semibold">{serviceName}</li>
      </ul>
    </div>
  );
};
