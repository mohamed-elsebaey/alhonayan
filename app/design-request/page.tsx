import DesignRequest from '@/components/pages/design-request/DesignRequest';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "نموذج طلب تصميم",
    description:
      "نموذج طلب تصميم من دار الحنيان للاستشارات الهندسية",
    // alternates: {
    //   canonical: "",
    // },
  };

const page = () => {
  return (
    <DesignRequest/>
  )
}

export default page