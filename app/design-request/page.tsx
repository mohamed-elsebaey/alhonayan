import DesignRequestPage from "@/components/pages/design-request/DesignRequestPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "طلب تصميم",
  description:
    "نموذج طلب تصميم من دار الحنيان للاستشارات الهندسية. يرجى ملء النموذج أدناه لتقديم طلبك.",
  // alternates: {
  //   canonical: "",
  // },
};

const page = () => {
  return <DesignRequestPage />;
};

export default page;
