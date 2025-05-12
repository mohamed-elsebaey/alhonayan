import ContactWithUs from "@/components/sections/contactWithUs/ContactWithUs";
import Hero from "@/components/sections/Hero/Hero";
import { OurServices } from "@/components/sections/ourServices/OurServices";
import Stats from "@/components/sections/stats/Stats";
import SuccessPartners from "@/components/sections/successPartners/SuccessPartners";
import Swiper from "@/components/sections/swiper/Swiper";
import TestSection from "@/components/sections/testSection/TestSection";

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <Swiper />
      <Stats />
      <SuccessPartners />
      <ContactWithUs />

      {/*  */}
      <TestSection />
    </>
  );
}
