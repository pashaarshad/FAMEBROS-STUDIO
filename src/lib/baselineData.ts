export interface BaselineCaseStudy {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  headline: string;
  metric: string;
  problem: string;
  strategy: string;
  contentCreated: string;
  shoots: string;
  influencerMarketing: string;
  ads: string;
  results: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  imageUrl?: string;
  videoUrl?: string;
  isLocked: boolean;
}

export const baselineCaseStudies: BaselineCaseStudy[] = [
  {
    id: 'locked-1',
    slug: 'restaurant-revenue-growth',
    clientName: 'Rahul Mehta (Restaurant)',
    industry: 'Hospitality & Dining',
    headline: 'How a Mumbai Restaurant Scaled Revenue by +240% in 90 Days',
    metric: '+240% Revenue Growth',
    problem: 'The restaurant was struggling with low weekday foot traffic and low online visibility despite great food quality.',
    strategy: 'Implemented a 3-tier video content strategy combining mouth-watering cinematic food reels, food blogger tastings, and geo-targeted Meta ads.',
    contentCreated: '45 high-definition video reels showcasing chef specialties, cheese pulls, cocktail craft, and weekend ambiance.',
    shoots: '3 full-day on-location content shoots at the restaurant featuring professional lighting and food styling.',
    influencerMarketing: 'Partnered with 12 top Mumbai food bloggers and Instagram food influencers for hosted tasting sessions.',
    ads: 'Ran hyper-local Meta ad campaigns targeting food enthusiasts within a 7km radius offering weekend tasting reservations.',
    results: 'Achieved +240% increase in monthly revenue, over 1.2M video views, and a consistent 3-week waiting list for weekend dinners.',
    testimonialQuote: 'Famebros Studio transformed our restaurant. Our tables are booked every single weekend now!',
    testimonialAuthor: 'Rahul Mehta',
    testimonialRole: 'Restaurant Owner',
    imageUrl: '/vedios-hero/1st__poster.jpg',
    videoUrl: '/vedios-hero/1st_.mp4',
    isLocked: true,
  },
  {
    id: 'locked-2',
    slug: 'retail-enquiries-surge',
    clientName: 'Neha Sharma (Retail)',
    industry: 'Retail & Boutique',
    headline: '3.2X Enquiry Surge for Retail Brand via Instagram Reels',
    metric: '3.2X More Enquiries',
    problem: 'Outdated social media presence yielding zero direct sales inquiries or walk-in customers.',
    strategy: 'Revamped Instagram brand aesthetic with model lookbooks, product detail reels, and direct WhatsApp customer funnels.',
    contentCreated: '30 trendy outfit try-on reels, styling guides, and customer transformation videos.',
    shoots: '2 full fashion shoots with studio lighting and professional models.',
    influencerMarketing: 'Collaborated with 8 micro-fashion influencers across Mumbai for unboxing and styling reels.',
    ads: 'Click-to-WhatsApp Meta Ads targeting fashion-conscious women aged 22-40 in Mumbai.',
    results: 'Generated 3.2X more direct sales enquiries in 30 days than the store received in the previous 6 months.',
    testimonialQuote: 'We got more customer enquiries in 30 days with Famebros Studio than we got in 6 months prior.',
    testimonialAuthor: 'Neha Sharma',
    testimonialRole: 'Retail Store Owner',
    imageUrl: '/vedios-hero/2nd_poster.jpg',
    videoUrl: '/vedios-hero/2nd.mp4',
    isLocked: true,
  },
  {
    id: 'locked-3',
    slug: 'gym-membership-boost',
    clientName: 'Amit Verma (Gym)',
    industry: 'Fitness & Wellness',
    headline: '+180% Annual Gym Membership Growth Through Founder Videos',
    metric: '+180% Membership Growth',
    problem: 'High competition from neighborhood gyms and stagnant new member sign-ups.',
    strategy: 'Positioned the gym trainers as fitness authorities using transformation stories, workout reels, and trial pass ads.',
    contentCreated: '24 high-energy gym reels, member transformation stories, and trainer tip videos.',
    shoots: '2 action-packed shoots capturing morning and evening workout energy, equipment, and personal coaching.',
    influencerMarketing: 'Engaged local Mumbai fitness creators to host workout challenges at the gym.',
    ads: 'Free 3-Day Trial Pass campaigns targeting local fitness enthusiasts within 5km.',
    results: '+180% increase in annual gym memberships signed within 60 days.',
    testimonialQuote: 'Our membership base grew consistently every month after Famebros Studio took over our social media.',
    testimonialAuthor: 'Amit Verma',
    testimonialRole: 'Gym Owner',
    imageUrl: '/vedios-hero/3rd_poster.jpg',
    videoUrl: '/vedios-hero/3rd.mp4',
    isLocked: true,
  },
  {
    id: 'locked-4',
    slug: 'resort-booking-scale',
    clientName: 'Karan Malhotra (Resort)',
    industry: 'Travel & Hospitality',
    headline: '+3.7X Direct Resort Bookings via Immersive Drone & Travel Reels',
    metric: '+3.7X Direct Bookings',
    problem: 'Heavy reliance on third-party OTAs paying high commissions for weekend resort bookings.',
    strategy: 'Built a direct-to-resort social media engine using drone walkthrough reels and travel creator staycations.',
    contentCreated: '18 cinematic travel reels highlighting pool villas, sunsets, dining, and weekend getaways.',
    shoots: '2-day on-site drone and video production capturing the full resort experience.',
    influencerMarketing: 'Hosted 5 top travel couples for weekend getaway staycation reviews.',
    ads: 'Targeted weekend getaway Meta Ads aimed at Mumbai couples and corporate teams.',
    results: '+3.7X increase in direct resort bookings, saving over ₹2.5L in third-party OTA commissions.',
    testimonialQuote: 'Famebros Studio brought us direct high-paying guests every single week.',
    testimonialAuthor: 'Karan Malhotra',
    testimonialRole: 'Resort Owner',
    imageUrl: '/vedios-hero/4th_poster.jpg',
    videoUrl: '/vedios-hero/4th.mp4',
    isLocked: true,
  },
];
