import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import Work from "@/components/sections/Work";
import Founder from "@/components/sections/Founder";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Philosophy />
      <Services />
      <Packages />
      <Work />
      <Founder />
      <Contact />
    </div>
  );
}
