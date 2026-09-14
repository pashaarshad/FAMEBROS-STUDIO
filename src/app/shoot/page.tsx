import type { Metadata } from "next";
import ShootClient from "./ShootClient";

export const metadata: Metadata = {
  title: "Book Creator Trial Shoot | Famebros Studio",
  description: "Test Famebros Studio before you commit. 1 Content Shoot, Strategy + Scripting, 15 Edited Reels, and Ready-to-post Content.",
};

export default function BookPaidTrialShootPage() {
  return <ShootClient />;
}
