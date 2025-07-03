import { ContactUsPage } from "@/components/pages/contact-us/ContactUsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:"تواصل مع دار الحنيان للاستشارات الهندسية للحصول على استشارات هندسية متكاملة وحلول مبتكرة.",
};

function page() {
  return (
    <>
      <ContactUsPage/>
    </>
  );
}

export default page;
