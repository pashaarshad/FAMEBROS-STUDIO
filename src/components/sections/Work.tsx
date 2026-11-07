"use client";

import { useRef, useState } from "react";
import { useSiteContent } from "@/context/SiteContentContext";

const businessWorkItems = [
  {
    videoUrl: "/vedios/business client testimonial/Video-60156.mp4",
    img: "/vedios/business client testimonial/Video-60156_poster.webp",
    title: "Ali & Hussain Salon Social Media Growth",
    desc: "Famebros Studio manages the salon’s complete social media presence, helping build stronger online visibility, consistent content and business growth.",
    metric: "10X More Inquiries With Us"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-68531.mp4",
    img: "/vedios/business client testimonial/Video-68531_poster.webp",
    title: "SK Furniture Social Media Growth",
    desc: "Famebros Studio manages SK Furniture’s social media, building stronger online visibility through consistent content and marketing.",
    metric: "Social Media Management"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-71170.mp4",
    img: "/vedios/business client testimonial/Video-71170_poster.webp",
    title: "Arabian Collection",
    desc: "Mumbai, Dubai & Hyderabad",
    metric: "600K+ Followers | 3 Years With Us"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-71381.mp4",
    img: "/vedios/business client testimonial/Video-71381_poster.webp",
    title: "Jolly Honest Tailor Social Media Growth",
    desc: "Famebros Studio manages Jolly Honest Tailor’s social media, building stronger online visibility through consistent content, reels and marketing.",
    metric: "Social Media Management"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-74493.mp4",
    img: "/vedios/business client testimonial/Video-74493_poster.webp",
    title: "Al Ahmed Perfume Social Media & Business Growth",
    desc: "The owner of Al Ahmed Perfume shares how Famebros Studio manages the brand’s content and social media to strengthen its online presence and support business growth.",
    metric: "Social Media Growth"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-4099.mp4",
    img: "/vedios/business client testimonial/Video-4099_poster.webp",
    title: "Mirror Salon Social Media Growth",
    desc: "The owner of Mirror Salon shares how Famebros Studio managed the salon’s social media and grew the account significantly within just a few months.",
    metric: "Few Months"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-37410.mp4",
    img: "/vedios/business client testimonial/Video-37410_poster.webp",
    title: "Shree Mahalaxmi Jewellers Social Media & Business Growth",
    desc: "Famebros Studio helped Shree Mahalaxmi Jewellers cross 10K followers while building a stronger online presence and supporting rapid business growth.",
    metric: "10x Business Growth"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-41182.mp4",
    img: "/vedios/business client testimonial/Video-41182_poster.webp",
    title: "Jolly Honest Tailor Content Production",
    desc: "Famebros Studio creates and produces content for Jolly Honest Tailor, including brand shoots and campaign videos.",
    metric: "Social Media Marketing"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-58243.mp4",
    img: "/vedios/business client testimonial/Video-58243_poster.webp",
    title: "IDS Architects Social Media Growth",
    desc: "Famebros Studio helped IDS Architects grow to 10K followers in just 1 month through strategic social media content, including owner-led rapid-fire reels.",
    metric: "10K in 1 Month"
  },
  {
    videoUrl: "/vedios/business client testimonial/Video-74649.mp4",
    img: "/vedios/business client testimonial/Video-74649_poster.webp",
    title: "Kanchanmala Jewellers Social Media Growth",
    desc: "The owner of Kanchanmala Jewellers shares how Famebros Studio helped the brand reach 10K followers while supporting stronger social media presence and business growth.",
    metric: "10K+ Followers"
  },
  {
    videoUrl: "/vedios-hero/1st_.mp4",
    img: "/vedios-hero/1st__poster.jpg",
    title: "Celebrity Influencer Collaboration with Jay Bhanushali",
    desc: "Celebrity Jay Bhanushali worked with Famebros Studio for a brand influencer collaboration and content shoot.",
    metric: "Celebrity Collaboration"
  },
  {
    videoUrl: "/vedios-hero/2nd.mp4",
    img: "/vedios-hero/2nd_poster.jpg",
    title: "Mika Singh Reel Content Creation",
    desc: "Bollywood singer Mika Singh regularly works with Famebros Studio for reel content creation and shoots.",
    metric: "Ongoing"
  },
  {
    videoUrl: "/vedios-hero/3rd.mp4",
    img: "/vedios-hero/3rd_poster.jpg",
    title: "How Famebros Studio Manages Arabian Collection’s Social Media",
    desc: "Famebros Studio manages social media marketing for Arabian Collection across Mumbai, Hyderabad and Dubai, helping strengthen their online presence and brand growth.",
    metric: "3 Cities"
  },
  {
    videoUrl: "/vedios-hero/4th.mp4",
    img: "/vedios-hero/4th_poster.jpg",
    title: "Mahi Vij Influencer Brand Collaboration",
    desc: "Famebros Studio managed an influencer marketing collaboration with celebrity Mahi Vij for a brand campaign.",
    metric: "Celebrity Collaboration"
  }
];


export default function Work() {
  const { portfolio } = useSiteContent();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Dynamic portfolio items from database / SiteContentContext
  const assignedPortfolio = portfolio.filter((p) => {
    if (!p.sections || p.sections.length === 0) return true;
    return p.sections.includes('what-our-clients-say') || p.sections.includes('work');
  });

  // Guarantee each client testimonial video appears only ONCE
  const seenWorkUrls = new Set<string>();
  const uniqueAssigned = assignedPortfolio.filter((p) => {
    const key = p.videoUrl ? p.videoUrl.trim() : p.title;
    if (seenWorkUrls.has(key)) return false;
    seenWorkUrls.add(key);
    return true;
  });

  const displayWorkItems = uniqueAssigned.length > 0
    ? uniqueAssigned.map((p) => ({
        videoUrl: p.videoUrl || '',
        img: p.thumbnailUrl || '/vedios-hero/1st__poster.jpg',
        title: p.title,
        desc: p.description || p.clientName,
        metric: p.metricValue || 'Growth Partner',
      }))
    : businessWorkItems;

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };


  const handleCardClick = (idx: number) => {
    if (activeIdx === idx) {
      const video = videoRefs.current[idx];
      if (video) {
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
          video.muted = true;
          setActiveIdx(null);
        }
      }
      return;
    }

    if (activeIdx !== null) {
      const prevVideo = videoRefs.current[activeIdx];
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.muted = true;
      }
    }

    setActiveIdx(idx);

    setTimeout(() => {
      const video = videoRefs.current[idx];
      if (video) {
        video.muted = false;
        video.play().catch(() => {});
      }
    }, 50);
  };

  return (
    <section id="what-our-clients-say" className="bg-[#FAF6F0] py-24 border-t border-black/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-4">
              CLIENT TESTIMONIALS &bull; PROOF OF GROWTH
            </p>
            <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[42px] leading-[1.1] mb-3">
              What Our <span className="text-[#F59A57]">Clients Say.</span>
            </h2>
            <p className="text-[#55555A] text-sm font-semibold">
              Real businesses. Cinematic content. Real bottom line scaling.
            </p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll left"
              suppressHydrationWarning
            >
              ←
            </button>
            <button 
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A] hover:border-[#F59A57] hover:text-[#F59A57] transition-all"
              aria-label="Scroll right"
              suppressHydrationWarning
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div 
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        >
          {displayWorkItems.map((item, idx) => {
            const isActive = activeIdx === idx;
            
            return (
              <div 
                key={idx}
                onClick={() => handleCardClick(idx)}
                className="flex-shrink-0 w-[220px] snap-start group cursor-pointer"
              >
                {/* Media Card */}
                <div className={`relative aspect-[9/16] rounded-2xl border transition-all duration-300 overflow-hidden bg-black shadow-lg ${isActive ? 'border-[#F59A57] scale-102 shadow-[0_4px_30px_rgba(245,154,87,0.15)]' : 'border-black/5 group-hover:-translate-y-1.5 group-hover:border-[#F59A57]/40'}`}>
                  
                  {/* Poster Image Banner */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 z-0 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-90'}`}
                  />

                  {/* Video player - only rendered and played on-demand when user clicks */}
                  {isActive && (
                    <video
                      ref={(el) => { videoRefs.current[idx] = el; }}
                      src={item.videoUrl}
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover z-20"
                    />
                  )}

                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

                  {/* Play Button Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center z-30 transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="w-12 h-12 rounded-full border border-white/40 bg-black/40 flex items-center justify-center text-white pl-0.5 group-hover:scale-110 group-hover:bg-[#F59A57] group-hover:border-[#F59A57] group-hover:text-[#050505] transition-all backdrop-blur-sm shadow-md">
                      ▶
                    </div>
                  </div>

                  {/* Text Details Overlay */}
                  <div className={`absolute bottom-5 left-5 right-5 z-30 font-display transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <span className="text-[15px] font-extrabold text-white block uppercase tracking-wide mb-0.5">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-white/70 block mb-3 font-medium">
                      {item.desc}
                    </span>
                    <div className="bg-[#F59A57] text-[#050505] text-[9.5px] font-extrabold px-2.5 py-1 rounded-md inline-block uppercase tracking-wider">
                      {item.metric}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
