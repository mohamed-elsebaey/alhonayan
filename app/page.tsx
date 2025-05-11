import ContactWithUs from "@/components/sections/contactWithUs/ContactWithUs";
import Hero from "@/components/sections/Hero/Hero";
import Stats from "@/components/sections/stats/Stats";
import Swiper from "@/components/sections/swiper/Swiper";
import TestSection from "@/components/sections/testSection/TestSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Swiper />
      <Stats/>
      <ContactWithUs/>
      
      {/*  */}
      <TestSection />
    </>
  );
}
