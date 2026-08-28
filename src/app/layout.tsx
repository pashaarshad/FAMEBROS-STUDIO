import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  title: "Famebros Studio | We build brands designed to grow for years",
  description: "A premium creative production studio focusing on brand building, storytelling, and organic growth.",
  icons: {
    icon: "/imp-doc/logo.png",
    shortcut: "/imp-doc/logo.png",
    apple: "/imp-doc/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${bricolage.variable} ${ibmPlexMono.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
