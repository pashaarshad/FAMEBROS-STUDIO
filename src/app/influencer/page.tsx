import HeroInfluencer from "@/components/sections/influencer/HeroInfluencer";
import ProblemInfluencer from "@/components/sections/influencer/ProblemInfluencer";
import NetworkInfluencer from "@/components/sections/influencer/NetworkInfluencer";
import WorkInfluencer from "@/components/sections/influencer/WorkInfluencer";
import ClientsGrid from "@/components/sections/ClientsGrid";
import CelebrityGallery from "@/components/sections/CelebrityGallery";
import CTAInfluencer from "@/components/sections/influencer/CTAInfluencer";
import ContactInfluencer from "@/components/sections/influencer/ContactInfluencer";

export default function InfluencerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroInfluencer />
      <ProblemInfluencer />
      <NetworkInfluencer />
      <WorkInfluencer />
      <ClientsGrid isDark={true} />
      <CelebrityGallery isDark={true} />
      <CTAInfluencer />
      <ContactInfluencer />
    </div>
  );
}
