import HeroInfluencer from "@/components/sections/influencer/HeroInfluencer";
import PhilosophyInfluencer from "@/components/sections/influencer/PhilosophyInfluencer";
import ServicesInfluencer from "@/components/sections/influencer/ServicesInfluencer";
import WorkInfluencer from "@/components/sections/influencer/WorkInfluencer";
import ClientsGrid from "@/components/sections/ClientsGrid";
import FounderInfluencer from "@/components/sections/influencer/FounderInfluencer";
import CelebrityGallery from "@/components/sections/CelebrityGallery";
import CTAInfluencer from "@/components/sections/influencer/CTAInfluencer";
import ContactInfluencer from "@/components/sections/influencer/ContactInfluencer";

export default function InfluencerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroInfluencer />
      <PhilosophyInfluencer />
      <ServicesInfluencer />
      <WorkInfluencer />
      <ClientsGrid isDark={true} />
      <FounderInfluencer />
      <CelebrityGallery isDark={true} />
      <CTAInfluencer />
      <ContactInfluencer />
    </div>
  );
}
