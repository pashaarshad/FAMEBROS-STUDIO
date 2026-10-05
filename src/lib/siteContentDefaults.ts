/**
 * Default text values for every editable section of the Famebros Studio website.
 * These are used as fallbacks when MongoDB has no override stored.
 * Keys must match what the admin panel reads/writes.
 */

export type SectionDefaults = Record<string, Record<string, string>>;

export const SITE_CONTENT_DEFAULTS: SectionDefaults = {
  // ─── NAVBAR ──────────────────────────────────────────────────────────────────
  navbar: {
    cta_label: 'Book a Free Call',
    cta_link: '#contact',
  },

  // ─── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: 'Mumbai\'s Leading Social Media & Content Agency',
    headline_line1: 'We don\'t just grow views.',
    headline_line2: 'We grow businesses.',
    subheadline:
      'Social media strategy, content production, influencer marketing and performance campaigns — designed to turn attention into trust, enquiries and growth.',
    cta_primary: 'Start Growing Today',
    cta_secondary: 'See Our Work',
    stat_1_number: '50+',
    stat_1_label: 'Brands Grown',
    stat_2_number: '3X',
    stat_2_label: 'Avg Growth',
    stat_3_number: '5Cr+',
    stat_3_label: 'Views Generated',
  },

  // ─── ABOUT ───────────────────────────────────────────────────────────────────
  about: {
    eyebrow: 'About Famebros Studio',
    headline: 'We Build Brands That Actually Grow',
    body:
      'Famebros Studio is a social media marketing and content production agency based in Mulund, Mumbai. We combine strategy, creativity and performance marketing to grow real businesses — not just follower counts.',
    cta_label: 'Our Story',
  },

  // ─── WHY CHOOSE US ───────────────────────────────────────────────────────────
  why_choose_us: {
    eyebrow: 'Why Famebros',
    headline: 'Not Just Another Agency',
    reason_1_title: 'In-House Content Production',
    reason_1_body:
      'Full studio setup with videographers, editors and creative directors — no outsourcing, no delays.',
    reason_2_title: 'Influencer Network of 500+',
    reason_2_body:
      'Niche-specific creators across Mumbai and Pan-India for authentic brand amplification.',
    reason_3_title: 'Growth-Focused Strategy',
    reason_3_body:
      'Every piece of content is tied to a business goal — enquiries, footfall, or direct sales.',
    reason_4_title: 'Transparent Reporting',
    reason_4_body:
      'Monthly reports covering reach, engagement, leads generated and conversions — no fluff.',
  },

  // ─── WHY WE EXIST ────────────────────────────────────────────────────────────
  why_we_exist: {
    eyebrow: 'Our Mission',
    headline: 'Great Businesses Deserve to Be Seen',
    body:
      'Too many brilliant local businesses stay invisible online. We exist to change that — by giving them the content strategy, production quality and marketing systems that national brands use.',
  },

  // ─── BRANDING COMPARISON ─────────────────────────────────────────────────────
  branding_comparison: {
    eyebrow: 'The Famebros Difference',
    headline: 'What Makes Us Different',
    old_label: 'Generic Agencies',
    new_label: 'Famebros Studio',
    compare_1_old: 'Stock photos & recycled content',
    compare_1_new: 'Original shoots & brand-specific storytelling',
    compare_2_old: 'Vanity metrics (likes, reach)',
    compare_2_new: 'Business outcomes (enquiries, sales, footfall)',
    compare_3_old: 'One-size content calendar',
    compare_3_new: 'Custom strategy per brand goal',
    compare_4_old: 'No influencer access',
    compare_4_new: 'Curated network of 500+ creators',
  },

  // ─── ORGANIC GROWTH ──────────────────────────────────────────────────────────
  organic_growth: {
    eyebrow: 'Organic Growth',
    headline: 'Content That Compounds Over Time',
    body:
      'Unlike paid ads that stop the moment you stop paying, our content strategy builds long-term brand authority. Every post, reel, and story adds to your brand equity.',
  },

  // ─── HOW IT WORKS ────────────────────────────────────────────────────────────
  how_it_works: {
    eyebrow: 'Our Process',
    headline: 'How We Grow Your Business',
    step_1_title: 'Discovery Call',
    step_1_body: 'We understand your business, audience, and growth goals.',
    step_2_title: 'Custom Strategy',
    step_2_body: 'We craft a tailored content and marketing plan unique to your brand.',
    step_3_title: 'Content Production',
    step_3_body: 'Our in-house team shoots, edits, and delivers high-quality content.',
    step_4_title: 'Publish & Amplify',
    step_4_body: 'We post strategically and amplify with influencers and performance ads.',
    step_5_title: 'Measure & Optimise',
    step_5_body: 'Monthly reporting + continuous optimisation to keep growth compounding.',
  },

  // ─── STORYTELLING ────────────────────────────────────────────────────────────
  storytelling: {
    eyebrow: 'Brand Storytelling',
    headline: 'Every Brand Has a Story Worth Telling',
    body:
      'We turn your brand\'s journey, values, and products into compelling visual content that connects emotionally with your audience and drives real business results.',
  },

  // ─── ECOSYSTEM ───────────────────────────────────────────────────────────────
  ecosystem: {
    eyebrow: 'Full-Service Ecosystem',
    headline: 'Everything You Need. One Team.',
    body:
      'From concept to camera, from posting to paid campaigns — we are your complete social media and content partner, so you never need to juggle multiple vendors again.',
  },

  // ─── FOUNDER ─────────────────────────────────────────────────────────────────
  founder: {
    eyebrow: 'Our Founders',
    headline: 'Built by People Who Have Done It',
    founder_1_name: 'Sultan Sayed',
    founder_1_role: 'Founder & CEO',
    founder_1_bio:
      'Sultan leads strategy, client growth, and the creative vision of Famebros Studio. With years of experience growing brands across Mumbai, he turns business challenges into social media success stories.',
    founder_2_name: 'Bilal Sayed',
    founder_2_role: 'Co-Founder & Head of Content',
    founder_2_bio:
      'Bilal heads content production, influencer partnerships, and campaign execution — ensuring every brand we work with tells its story in the most compelling way possible.',
  },

  // ─── FAQ ─────────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: 'FAQs',
    headline: 'Questions We Get Asked a Lot',
    q1: 'What services does Famebros Studio offer?',
    a1: 'We provide social media management, content creation, reels production, influencer marketing, Meta Ads, brand shoots, and performance marketing — all under one roof.',
    q2: 'Do you work with small local businesses?',
    a2: 'Absolutely. We work with local restaurants, salons, jewellery stores, gyms, resorts and more. Our strategies are built around real business growth, not just follower numbers.',
    q3: 'How long before we see results?',
    a3: 'Most clients start seeing increased engagement and enquiries within the first 30-60 days. Significant business growth typically follows over 3-6 months of consistent content strategy.',
    q4: 'Do you offer a trial before committing?',
    a4: 'Yes! We offer a trial brand shoot so you can experience our production quality firsthand. Reach out to book yours.',
    q5: 'Where are you based?',
    a5: 'We are based in Mulund West, Mumbai and serve clients across Mumbai and pan-India.',
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────────
  contact: {
    eyebrow: 'Get in Touch',
    headline: 'Let\'s Grow Your Business',
    subheadline:
      'Tell us about your brand and goals. We\'ll come back with a strategy that actually works.',
    phone: '+91 98201 XXXXX',
    email: 'hello@famebrosstudio.com',
    address: 'Mulund West, Mumbai - 400080',
    cta_label: 'Send Message',
    whatsapp_number: '919820100000',
  },

  // ─── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    tagline: 'We don\'t just grow views. We grow businesses.',
    copyright: '© 2025 Famebros Studio. All rights reserved.',
    address: 'Mulund West, Mumbai - 400080',
    phone: '+91 98201 XXXXX',
    email: 'hello@famebrosstudio.com',
  },

  // ─── INFLUENCER PAGE ─────────────────────────────────────────────────────────
  influencer: {
    eyebrow: 'Influencer Marketing',
    headline: '500+ Creators. Infinite Reach.',
    subheadline:
      'Niche-specific influencers handpicked for your brand — from micro-creators to celebrity endorsers.',
    cta_label: 'Partner With Us',
    stat_1_number: '500+',
    stat_1_label: 'Active Creators',
    stat_2_number: '2Cr+',
    stat_2_label: 'Combined Followers',
    stat_3_number: '98%',
    stat_3_label: 'Campaign Success Rate',
  },
};

/** Get a single value with fallback */
export function getDefault(section: string, key: string): string {
  return SITE_CONTENT_DEFAULTS[section]?.[key] ?? '';
}
