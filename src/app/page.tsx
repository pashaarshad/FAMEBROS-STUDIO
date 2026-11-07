import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import CelebrityGallery from "@/components/sections/CelebrityGallery";
import About from "@/components/sections/About";
import WhyWeExist from "@/components/sections/WhyWeExist";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";

// Code-split below-the-fold components to reduce initial JS execution and Total Blocking Time (TBT)
const Work = dynamic(() => import("@/components/sections/Work"));
const BrandingComparison = dynamic(() => import("@/components/sections/BrandingComparison"));
const Storytelling = dynamic(() => import("@/components/sections/Storytelling"));
const OrganicGrowth = dynamic(() => import("@/components/sections/OrganicGrowth"));
const Ecosystem = dynamic(() => import("@/components/sections/Ecosystem"));
const Founder = dynamic(() => import("@/components/sections/Founder"));
const ClientsGrid = dynamic(() => import("@/components/sections/ClientsGrid"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CelebrityGallery />
      <About />
      <WhyWeExist />
      <WhyChooseUs />
      <HowItWorks />
      <Work />
      <BrandingComparison />
      <Storytelling />
      <OrganicGrowth />
      <Ecosystem />
      <Founder />
      <ClientsGrid isDark={true} />
      <FAQ />
      <Contact />
    </div>
  );
}
