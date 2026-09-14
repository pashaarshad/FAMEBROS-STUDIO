import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Social Media Marketing Case Studies | Famebros Studio",
  description: "Explore real case studies of businesses expanded from 1 store to 3 stores, 36K+ combined followers, and 10X enquiry growth with Famebros Studio.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
