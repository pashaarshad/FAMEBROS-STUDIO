import type { Metadata } from "next";
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
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Influencer Marketing Agency in Mumbai | Famebros Studio",
  description: "Famebros Studio is a top influencer marketing agency in Mumbai. We connect brands with 1,000+ verified Instagram creators, food bloggers, lifestyle influencers, and celebrities.",
  keywords: ["Influencer Marketing Agency Mumbai", "Instagram Influencers Mumbai", "Celebrity Marketing Agency Mumbai", "Influencer Marketing Mulund"],
  alternates: {
    canonical: "/influencer-marketing-agency-mumbai",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Mumbai | Famebros Studio",
    description: "Scale your brand with 1,000+ verified influencers and celebrity endorsements in Mumbai.",
    url: "https://www.famebrosstudio.com/influencer-marketing-agency-mumbai",
  }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Influencer Marketing Agency Mumbai",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Famebros Studio",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "IN"
    }
  },
  "description": "End-to-end influencer marketing campaigns, creator matchmaking, celebrity collaborations, product seeding, and performance reporting in Mumbai."
};

export default function InfluencerMarketingAgencyMumbai() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={serviceSchema} />
      <HeroInfluencer />
      <CampaignReels />
      <ProblemOne />
      <ProblemTwo />
      <EndToEnd />
      <InHouseCreators />
      <NetworkTiers />
      <CelebrityGallery isDark={false} />
      <CTAInfluencer />
      <ContactInfluencer />
    </div>
  );
}
