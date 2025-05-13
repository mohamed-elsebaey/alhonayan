'use client'
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import React from "react";

export const DownloadCompanyProfileButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './company-profile.pdf';
    link.target = '_blank';
    // link.download = 'alhonayan-company-profile.pdf';
    
    // Trigger both download and open in new tab
    link.click();
    window.open('./company-profile.pdf', '_blank');
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="font-semibold cursor-pointer"
      onClick={handleDownload}
    >
      بروفايل الشركة
      <Download className="w-8 h-8 " />
    </Button>
  );
};
