import { OurServices } from "@/components/sections/ourServices/OurServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدماتنا",
  description:"استعرض خدمات دار الحنيان للاستشارات الهندسية التي تعكس التميز والابتكار في تقديم الحلول الهندسية المتكاملة.",
};

function page() {
  return (
    <>
      <OurServices />
    </>
  );
}

export default page;
