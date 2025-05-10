import AboutUsPage from "@/components/pages/about-us/AboutUsPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من نحن؟",
  description:
    "دار الحنيان للاستشارات الهندسية هي شركة رائدة في مجال الاستشارات الهندسية، تقدم خدمات متكاملة تشمل التصميم والإشراف على المشاريع الهندسية.",
  // alternates: {
  //   canonical: "",
  // },
};

function page() {
  return <AboutUsPage />;
}

export default page;
