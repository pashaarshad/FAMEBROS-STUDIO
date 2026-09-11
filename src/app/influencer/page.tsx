import HeroInfluencer from "@/components/sections/influencer/HeroInfluencer";
import ProblemOne from "@/components/sections/influencer/ProblemOne";
import ProblemTwo from "@/components/sections/influencer/ProblemTwo";
import EndToEnd from "@/components/sections/influencer/EndToEnd";
import InHouseCreators from "@/components/sections/influencer/InHouseCreators";
import NetworkTiers from "@/components/sections/influencer/NetworkTiers";
import CampaignReels from "@/components/sections/influencer/CampaignReels";
import CelebrityGallery from "@/components/sections/CelebrityGallery";
import CTAInfluencer from "@/components/sections/influencer/CTAInfluencer";
import ContactInfluencer from "@/components/sections/influencer/ContactInfluencer";

export default function InfluencerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. DARK: Hero */}
      <HeroInfluencer />

      {/* 2. DARK: Campaign Reels (19 Videos) & Metrics */}
      <CampaignReels />

      {/* 3. LIGHT: Problem One */}
      <ProblemOne />

      {/* 4. DARK: Problem Two */}
      <ProblemTwo />

      {/* 5. LIGHT: End to End */}
      <EndToEnd />

      {/* 6. DARK: In-House Creators */}
      <InHouseCreators />

      {/* 7. LIGHT: The Network (4 Tiers) */}
      <NetworkTiers />

      {/* 9. LIGHT: Celebrity & Top Creator Gallery */}
      <CelebrityGallery isDark={false} />

      {/* 10. DARK: CTA Band */}
      <CTAInfluencer />

      {/* 11. LIGHT: Contact Section */}
      <ContactInfluencer />
    </div>
  );
}
