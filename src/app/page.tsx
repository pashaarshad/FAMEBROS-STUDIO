import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <Services />
      <Work />
      <FAQ />
      <CTA />
      <Contact />
    </div>
  );
}
