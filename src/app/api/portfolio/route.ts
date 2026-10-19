import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import PortfolioItem from '@/models/PortfolioItem';
import { isAuthenticated } from '@/lib/auth';

const ALL_CODE_VIDEOS = [
  // ── 1. Business Client Testimonials (From "What Our Clients Say" / Work.tsx)
  {
    title: 'Ali Salon',
    category: 'Salon & Grooming',
    clientName: 'Ali Salon',
    thumbnailUrl: '/vedios/business client testimonial/Video-60156_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-60156.mp4',
    description: '25 Years in Business. No Social Presence.',
    metricLabel: 'Inquiry Growth',
    metricValue: '10X More Inquiries With Us',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'SK Furniture',
    category: 'Furniture & Interior',
    clientName: 'SK Furniture',
    thumbnailUrl: '/vedios/business client testimonial/Video-68531_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-68531.mp4',
    description: 'Customer Queues Despite an Offbeat Location',
    metricLabel: 'Follower Growth',
    metricValue: '10K+ Followers in 6 Months',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'Arabian Collection',
    category: 'Fashion & Luxury',
    clientName: 'Arabian Collection',
    thumbnailUrl: '/vedios/business client testimonial/Video-71170_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-71170.mp4',
    description: 'Mumbai, Dubai & Hyderabad',
    metricLabel: 'Community Size',
    metricValue: '600K+ Followers | 3 Years With Us',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'Jolly Honest Tailor',
    category: 'Bespoke Tailoring',
    clientName: 'Jolly Honest Tailor',
    thumbnailUrl: '/vedios/business client testimonial/Video-71381_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-71381.mp4',
    description: '50 Years in Business',
    metricLabel: 'Partnership',
    metricValue: '3 Years With Us',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'Al Ahmed Perfumes',
    category: 'Fragrance & Luxury',
    clientName: 'Al Ahmed',
    thumbnailUrl: '/vedios/business client testimonial/Video-74493_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-74493.mp4',
    description: "India's Top Perfume Brand",
    metricLabel: 'Partnership',
    metricValue: '3 Years With Us',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'Mulund Fine Dine Bistro',
    category: 'Hospitality & Dining',
    clientName: 'Gourmet Bistro',
    thumbnailUrl: '/vedios/business client testimonial/Video-4099_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-4099.mp4',
    description: 'Real Growth. Real Results.',
    metricLabel: 'Growth Partner',
    metricValue: 'With Famebros',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'Heritage Gold & Diamonds',
    category: 'Jewellery & Luxury',
    clientName: 'Jewellery Client',
    thumbnailUrl: '/vedios/business client testimonial/Video-37410_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-37410.mp4',
    description: 'Real Growth. Real Results.',
    metricLabel: 'Growth Partner',
    metricValue: 'With Famebros',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'Bridal Couture House',
    category: 'Fashion & Bridal',
    clientName: 'Couture Client',
    thumbnailUrl: '/vedios/business client testimonial/Video-41182_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-41182.mp4',
    description: 'Real Growth. Real Results.',
    metricLabel: 'Growth Partner',
    metricValue: 'With Famebros',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'Multi-Outlet Retail Hub',
    category: 'Retail & Lifestyle',
    clientName: 'Retail Client',
    thumbnailUrl: '/vedios/business client testimonial/Video-58243_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-58243.mp4',
    description: 'Real Growth. Real Results.',
    metricLabel: 'Growth Partner',
    metricValue: 'With Famebros',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },
  {
    title: 'SK Furniture - Production Reel',
    category: 'Furniture & Interior',
    clientName: 'SK Furniture',
    thumbnailUrl: '/vedios/business client testimonial/Video-74649_poster.jpg',
    videoUrl: '/vedios/business client testimonial/Video-74649.mp4',
    description: '10K in 6 Months with Targeted Reels',
    metricLabel: 'Follower Growth',
    metricValue: '10K+ Followers in 6 Months',
    sections: ['what-our-clients-say', 'work'],
    isCustom: true,
  },

  // ── 2. Hero Production Showcase Videos (Hero.tsx)
  {
    title: 'Restaurant Growth Reel',
    category: 'Restaurant & Hospitality',
    clientName: 'Rahul Mehta',
    thumbnailUrl: '/vedios-hero/1st__poster.jpg',
    videoUrl: '/vedios-hero/1st_.mp4',
    description: 'Our restaurant sales grew like never before.',
    metricLabel: 'Revenue Growth',
    metricValue: '+240%',
    sections: ['hero', 'work'],
    isCustom: true,
  },
  {
    title: 'Retail Business Campaign',
    category: 'Retail & Fashion',
    clientName: 'Neha Sharma',
    thumbnailUrl: '/vedios-hero/2nd_poster.jpg',
    videoUrl: '/vedios-hero/2nd.mp4',
    description: 'More enquiries in 30 days than we got in 6 months.',
    metricLabel: 'More Enquiries',
    metricValue: '3.2X',
    sections: ['hero', 'work'],
    isCustom: true,
  },
  {
    title: 'Gym Membership Growth',
    category: 'Fitness & Gym',
    clientName: 'Amit Verma',
    thumbnailUrl: '/vedios-hero/3rd_poster.jpg',
    videoUrl: '/vedios-hero/3rd.mp4',
    description: 'Memberships increased consistently every month.',
    metricLabel: 'Membership Growth',
    metricValue: '+180%',
    sections: ['hero', 'work'],
    isCustom: true,
  },
  {
    title: 'Resort Villa Aerial Walkthrough',
    category: 'Travel & Resort',
    clientName: 'Karan Malhotra',
    thumbnailUrl: '/vedios-hero/4th_poster.jpg',
    videoUrl: '/vedios-hero/4th.mp4',
    description: 'We now get quality bookings every week.',
    metricLabel: 'Bookings Increase',
    metricValue: '+3.7X',
    sections: ['hero', 'work'],
    isCustom: true,
  },

  // ── 3. Behind-The-Scenes Production Videos (ShootClient.tsx)
  {
    title: 'Location Scouting',
    category: 'Behind-The-Scenes',
    clientName: 'Famebros Production',
    thumbnailUrl: '/vedios-for-BEHIND THE SCENES/igexport-DS4gQZ4CJ-7_poster.jpg',
    videoUrl: '/vedios-for-BEHIND THE SCENES/igexport-DS4gQZ4CJ-7.mp4',
    description: 'Optimizing natural light and backdrop for high-conversion reels.',
    metricLabel: 'Production',
    metricValue: '4K Cinema',
    sections: ['work'],
    isCustom: true,
  },
  {
    title: 'On-Site Scripting',
    category: 'Behind-The-Scenes',
    clientName: 'Famebros Production',
    thumbnailUrl: '/vedios-for-BEHIND THE SCENES/igexport-DSXrgRoiIcV_poster.jpg',
    videoUrl: '/vedios-for-BEHIND THE SCENES/igexport-DSXrgRoiIcV.mp4',
    description: 'Real-time script tweaks for natural hook delivery.',
    metricLabel: 'Scripting',
    metricValue: 'Director Cut',
    sections: ['work'],
    isCustom: true,
  },
  {
    title: 'Behind-The-Lens Production',
    category: 'Behind-The-Scenes',
    clientName: 'Famebros Production',
    thumbnailUrl: '/vedios-for-BEHIND THE SCENES/igexport-DSewUY2iJXU_poster.jpg',
    videoUrl: '/vedios-for-BEHIND THE SCENES/igexport-DSewUY2iJXU.mp4',
    description: 'Crew coordination and multi-angle camera tracking.',
    metricLabel: 'Cinematography',
    metricValue: 'Multi-Angle',
    sections: ['work'],
    isCustom: true,
  },
  {
    title: 'Master Export & Delivery',
    category: 'Behind-The-Scenes',
    clientName: 'Famebros Production',
    thumbnailUrl: '/vedios-for-BEHIND THE SCENES/igexport-DV0pcB3iN0q_poster.jpg',
    videoUrl: '/vedios-for-BEHIND THE SCENES/igexport-DV0pcB3iN0q.mp4',
    description: 'Ready-to-publish 4K vertical Reels optimized for Instagram algorithms.',
    metricLabel: 'Delivery',
    metricValue: 'High-Bitrate',
    sections: ['work'],
    isCustom: true,
  },
];

export async function GET() {
  try {
    const conn = await connectToDatabase();

    if (conn) {
      // Find existing items in database
      const existingDocs = await PortfolioItem.find({}).lean();
      const existingUrls = new Set(existingDocs.map((d) => d.videoUrl));

      // Find any videos from ALL_CODE_VIDEOS that are not in DB yet
      const missing = ALL_CODE_VIDEOS.filter((v) => !existingUrls.has(v.videoUrl));
      if (missing.length > 0) {
        await PortfolioItem.insertMany(missing);
      }

      const docs = await PortfolioItem.find({}).sort({ createdAt: 1 }).lean();
      const mongoItems = docs.map((doc) => ({
        ...doc,
        id: doc._id.toString(),
        isLocked: false,
      }));

      return NextResponse.json({ success: true, data: mongoItems });
    }

    // Fallback if DB offline
    const fallback = ALL_CODE_VIDEOS.map((p, i) => ({
      ...p,
      id: `p_${i}`,
      isLocked: false,
    }));
    return NextResponse.json({ success: true, data: fallback });
  } catch (error) {
    console.error('GET Portfolio Error:', error);
    const fallback = ALL_CODE_VIDEOS.map((p, i) => ({
      ...p,
      id: `p_${i}`,
      isLocked: false,
    }));
    return NextResponse.json({ success: true, data: fallback });
  }
}

export async function POST(request: Request) {
  try {
    const auth = await isAuthenticated();
    if (!auth) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'MongoDB connection not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { title, category, clientName, thumbnailUrl, videoUrl, description, metricLabel, metricValue, sections } = body;

    if (!title || !category || !clientName || !thumbnailUrl) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const newItem = await PortfolioItem.create({
      title,
      category,
      clientName,
      thumbnailUrl,
      videoUrl: videoUrl || '',
      description: description || '',
      metricLabel: metricLabel || '',
      metricValue: metricValue || '',
      sections: Array.isArray(sections) && sections.length > 0 ? sections : ['what-our-clients-say', 'work'],
      isCustom: true,
    });

    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error) {
    console.error('POST Portfolio Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to create portfolio item' }, { status: 500 });
  }
}
