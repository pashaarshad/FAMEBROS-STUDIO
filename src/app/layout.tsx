import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import JsonLd, { famebrosOrganizationSchema, websiteSchema } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.famebrosstudio.com"),
  title: {
    default: "Social Media Marketing Agency in Mulund & Mumbai | Famebros Studio",
    template: "%s | Famebros Studio",
  },
  description: "Famebros Studio is a social media marketing and content production agency based in Mulund, Mumbai, providing social media management, content creation, influencer marketing, Meta Ads, brand shoots and performance marketing.",
  keywords: [
    "Social Media Agency Mulund",
    "Social Media Marketing Agency Mulund",
    "Social Media Agency Mumbai",
    "Social Media Marketing Agency in Mumbai",
    "Content Creation Agency Mumbai",
    "Influencer Marketing Agency Mumbai",
    "Meta Ads Agency Mumbai",
    "Reels Production Agency Mumbai",
    "Brand Shoots Mumbai",
    "Performance Marketing Agency Mumbai",
    "Restaurant Social Media Agency Mumbai",
    "Salon Social Media Agency Mumbai",
    "Fashion Social Media Agency Mumbai",
    "Famebros Studio",
    "Famebros Studio Mulund",
  ],
  authors: [{ name: "Sultan Sayed" }, { name: "Bilal Sayed" }],
  creator: "Famebros Studio",
  publisher: "Famebros Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Mulund & Mumbai | Famebros Studio",
    description: "Famebros Studio is a social media marketing and content production agency based in Mulund, Mumbai, providing social media management, content creation, influencer marketing, Meta Ads, brand shoots and performance marketing.",
    url: "https://www.famebrosstudio.com",
    siteName: "Famebros Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/imp-doc/logo.png",
        width: 1200,
        height: 630,
        alt: "Famebros Studio - Social Media Marketing & Content Agency in Mulund, Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency in Mulund & Mumbai | Famebros Studio",
    description: "Famebros Studio is a social media marketing and content production agency based in Mulund, Mumbai, providing social media management, content creation, influencer marketing, Meta Ads, brand shoots and performance marketing.",
    images: ["/imp-doc/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/imp-doc/logo.png",
    shortcut: "/imp-doc/logo.png",
    apple: "/imp-doc/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd data={[famebrosOrganizationSchema, websiteSchema]} />
      </head>
      <body
        className={`${inter.variable} ${bricolage.variable} ${ibmPlexMono.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
