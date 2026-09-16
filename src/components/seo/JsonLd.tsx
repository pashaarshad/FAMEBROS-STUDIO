import React from "react";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Pre-configured Organization & LocalBusiness Schemas for Famebros Studio
export const famebrosOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.famebrosstudio.com/#organization",
  "name": "Famebros Studio",
  "legalName": "Famebros Studio",
  "alternateName": ["Famebros", "Famebros Agency", "Famebros Studio Mumbai", "Famebros Studio Mulund"],
  "url": "https://www.famebrosstudio.com/",
  "logo": "https://www.famebrosstudio.com/imp-doc/logo.png",
  "image": "https://www.famebrosstudio.com/imp-doc/logo.png",
  "description": "Famebros Studio is a social media marketing and content production agency based in Mulund, Mumbai, providing social media management, content creation, influencer marketing, Meta Ads, brand shoots and performance marketing.",
  "telephone": "+91-9137923145",
  "email": "growth@famebrosstudio.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mulund West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400080",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.1726,
    "longitude": 72.9565
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Mulund, Mumbai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Mumbai Metropolitan Region"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/famebros.studio",
    "https://www.linkedin.com/company/famebros-studio",
    "https://www.youtube.com/@famebrosstudio"
  ],
  "founder": [
    {
      "@type": "Person",
      "name": "Sultan Sayed",
      "jobTitle": "Founder"
    },
    {
      "@type": "Person",
      "name": "Bilal Sayed",
      "jobTitle": "Co-Founder"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Social Media & Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Management",
          "description": "Comprehensive social media strategy, content creation, scheduling and community management in Mulund & Mumbai."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Content Creation & Reels Production",
          "description": "High-converting short-form video creation, Instagram reels production, scripting, and cinema-grade editing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Influencer Marketing",
          "description": "End-to-end influencer campaigns with 1,000+ top creators and celebrity networks in Mumbai."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Meta Ads & Performance Marketing",
          "description": "High-ROI Facebook & Instagram ad campaigns designed to generate direct enquiries and revenue growth."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Shoots",
          "description": "On-location commercial shoots, product photography, and video storytelling for brands."
        }
      }
    ]
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.famebrosstudio.com/#website",
  "url": "https://www.famebrosstudio.com/",
  "name": "Famebros Studio",
  "description": "Social Media Marketing & Content Agency in Mulund, Mumbai",
  "publisher": {
    "@id": "https://www.famebrosstudio.com/#organization"
  }
};
