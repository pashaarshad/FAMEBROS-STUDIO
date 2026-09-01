import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WhyWeExist from "@/components/sections/WhyWeExist";
import BrandingComparison from "@/components/sections/BrandingComparison";
import OrganicGrowth from "@/components/sections/OrganicGrowth";
import HowItWorks from "@/components/sections/HowItWorks";
import Storytelling from "@/components/sections/Storytelling";
import Ecosystem from "@/components/sections/Ecosystem";
import CelebrityGallery from "@/components/sections/CelebrityGallery";
import Work from "@/components/sections/Work";
import CreatorWork from "@/components/sections/CreatorWork";
import Founder from "@/components/sections/Founder";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhyChooseUs />
      <WhyWeExist />
      <HowItWorks />
      <BrandingComparison />
      <Storytelling />
      <OrganicGrowth />
      <Ecosystem />
      <CelebrityGallery />
      <Work />
      <CreatorWork />
      <Founder />
      <ClientsGrid isDark={true} />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
}
