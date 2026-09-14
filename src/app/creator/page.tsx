import type { Metadata } from "next";
import CreatorClient from "./CreatorClient";

export const metadata: Metadata = {
  title: "Creator Network & Growth Services | Famebros Studio",
  description: "Personal branding, content strategy, shoot production, and brand deal opportunities for creators and influencers in Mumbai.",
};

export default function CreatorPage() {
  return <CreatorClient />;
}
