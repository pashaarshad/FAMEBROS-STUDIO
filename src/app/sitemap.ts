import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.famebrosstudio.com';
  const currentDate = new Date();

  // Core pages
  const coreRoutes = [
    '',
    '/about-famebros-studio',
    '/case-studies',
    '/shoot',
    '/influencer',
    '/creator',
    '/book-shoot',
  ];

  // Service & Location SEO pages
  const serviceRoutes = [
    '/social-media-agency-mulund',
    '/social-media-agency-mumbai',
    '/social-media-management',
    '/influencer-marketing-agency-mumbai',
    '/content-creation-agency-mumbai',
    '/meta-ads-agency-mumbai',
    '/reels-production-mumbai',
    '/brand-shoots-mumbai',
    '/performance-marketing-agency-mumbai',
  ];

  // Industry SEO pages
  const industryRoutes = [
    '/restaurant-social-media-marketing-mumbai',
    '/salon-social-media-marketing-mumbai',
    '/fashion-social-media-agency-mumbai',
    '/resort-social-media-marketing',
    '/jewellery-social-media-marketing-mumbai',
  ];

  // Individual Case Study pages
  const caseStudyRoutes = [
    '/case-studies/restaurant-revenue-growth',
    '/case-studies/retail-enquiries-surge',
    '/case-studies/gym-membership-boost',
    '/case-studies/resort-booking-scale',
  ];

  const allRoutes = [...coreRoutes, ...serviceRoutes, ...industryRoutes, ...caseStudyRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/social-media-agency') ? 0.9 : 0.8,
  }));
}
