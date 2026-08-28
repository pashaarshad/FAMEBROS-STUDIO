import HeroInfluencer from "@/components/sections/influencer/HeroInfluencer";
import PhilosophyInfluencer from "@/components/sections/influencer/PhilosophyInfluencer";
import ServicesInfluencer from "@/components/sections/influencer/ServicesInfluencer";
import PackagesInfluencer from "@/components/sections/influencer/PackagesInfluencer";
import WorkInfluencer from "@/components/sections/influencer/WorkInfluencer";
import FounderInfluencer from "@/components/sections/influencer/FounderInfluencer";
import CTAInfluencer from "@/components/sections/influencer/CTAInfluencer";
import ContactInfluencer from "@/components/sections/influencer/ContactInfluencer";

export default function InfluencerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroInfluencer />
      <PhilosophyInfluencer />
      <ServicesInfluencer />
      <PackagesInfluencer />
      <WorkInfluencer />
      <FounderInfluencer />
      <CTAInfluencer />
      <ContactInfluencer />
    </div>
  );
}
