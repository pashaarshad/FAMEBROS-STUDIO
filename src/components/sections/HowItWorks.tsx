"use client";

const steps = [
  {
    step: "01",
    title: "Deep Brand Audit & Blueprint",
    desc: "We analyze your audience, local competitor gaps, and construct a tailored growth blueprint targeting high-intent inbound leads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80", 
    color: "border-[#249E98]"
  },
  {
    step: "02",
    title: "Scriptwriting & Hook Design",
    desc: "We write high-retention scripts featuring strong visual hooks in the first 3 seconds, keeping viewers glued until the call-to-action.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500&q=80", 
    color: "border-[#F59A57]"
  },
  {
    step: "03",
    title: "On-Site Cinematic Shoot",
    desc: "Our production team visits your physical location (resort, restaurant, showroom) for a cinematic shoot. You focus on running your business, we film.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=500&q=80", 
    color: "border-[#249E98]"
  },
  {
    step: "04",
    title: "Paced Editing & Distribution",
    desc: "We edit with snappy pacing, sound design, and subtitles. We handle scheduling, posting, and captioning across Instagram, YouTube & Facebook.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&q=80", 
    color: "border-[#F59A57]"
  },
  {
    step: "05",
    title: "WhatsApp & Enquiry Funnels",
    desc: "We convert viral reach into actual revenue by setting up automated comment-to-DM funnels, driving prospective clients straight to your sales team.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=500&q=80", 
    color: "border-[#249E98]"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 border-t border-black/5 relative overflow-hidden">
      
      {/* Self-contained CSS stylesheet for dashed flowing connector line */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flowStepDash {
          from {
            stroke-dashoffset: 28;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flow-step-path {
          stroke-dasharray: 8 6;
          animation: flowStepDash 1.2s linear infinite;
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="font-mono-custom text-[10px] tracking-[0.2em] uppercase text-[#F59A57] mb-4">
            OUR WORKFLOW
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[32px] md:text-[40px] leading-[1.1]">
            How we scale your business.
          </h2>
          <p className="text-[#55555A] text-sm mt-4">
            A frictionless, full-service strategy from initial concept to trackable leads.
          </p>
        </div>

        {/* Steps Flow Timeline */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Animated Vertical Connector Line (Desktop only) */}
          <div className="absolute left-[50%] -translate-x-[50%] top-16 bottom-16 w-[2px] hidden md:block z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line 
                x1="1" y1="0" x2="1" y2="100%" 
                stroke="#F59A57" strokeWidth="2" 
                className="flow-step-path"
              />
            </svg>
          </div>

          <div className="space-y-20 md:space-y-24">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.step} 
                  className={`flex flex-col md:flex-row items-stretch md:justify-between gap-8 md:gap-16 relative z-10 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card Side */}
                  <div className="w-full md:w-[45%] flex flex-col justify-center">
                    <div className="bg-[#FAFAFA] border border-black/5 rounded-3xl p-6 md:p-8 hover:border-[#F59A57]/30 hover:shadow-md transition-all duration-300">
                      <span className="font-mono font-extrabold text-[12px] text-[#249E98] tracking-widest block mb-2">
                        STEP {item.step}
                      </span>
                      <h3 className="font-display font-extrabold text-[#0A0A0A] text-lg md:text-xl mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#55555A] text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot (Desktop only) */}
                  <div className="absolute left-[50%] -translate-x-[50%] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-black/5 bg-white flex items-center justify-center font-bold text-xs text-[#0A0A0A] hidden md:flex shadow-md z-20">
                    {item.step}
                    {/* Pulsing ring animation */}
                    <span className="absolute inset-0 rounded-full border border-[#F59A57] animate-ping opacity-25" style={{ animationDuration: '3s' }} />
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-[45%] rounded-3xl overflow-hidden border border-black/5 aspect-[16/10] md:aspect-[16/9] shadow-sm relative group bg-gradient-to-br from-[#F5F5F7] to-[#E5E7EB]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pulsing indicator at the bottom */}
        <div className="flex flex-col items-center justify-center mt-20 select-none">
          <span className="font-mono-custom text-[9px] tracking-[0.2em] text-[#55555A] uppercase mb-3">
            Inbound Leads Generated Below
          </span>
          <div className="w-8 h-8 rounded-full border border-[#F59A57]/30 flex items-center justify-center text-[#F59A57] animate-bounce text-[10px] font-bold">
            ▼
          </div>
        </div>

      </div>
    </section>
  );
}
