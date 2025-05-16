import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    service: string;
  }>;
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
}

const Breadcrumb = () => {
  return (
    <div className="section-margin py-4 border-b md:py-5">
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
          <Link href="/projects" className="hover:text-primary">
            مشاريعنا
          </Link>
          <ArrowLeft className="w-4 h-4 mx-2" />
        </li>
        <li className="text-primary" >Project type</li>
      </ul>
    </div>
  );
};
