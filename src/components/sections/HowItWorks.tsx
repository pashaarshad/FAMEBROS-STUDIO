"use client";

const steps = [
  {
    step: "01",
    title: "Deep Brand Audit & Blueprint",
    desc: "We analyze your audience, local competitor gaps, and construct a tailored growth blueprint targeting high-intent inbound leads.",
    color: "bg-[#249E98]"
  },
  {
    step: "02",
    title: "Scriptwriting & Hook Design",
    desc: "We write high-retention scripts featuring strong visual hooks in the first 3 seconds, keeping viewers glued until the call-to-action.",
    color: "bg-[#F59A57]"
  },
  {
    step: "03",
    title: "On-Site Cinematic Shoot",
    desc: "Our production team visits your physical location (resort, restaurant, showroom) for a cinematic shoot. You focus on running your business, we film.",
    color: "bg-[#249E98]"
  },
  {
    step: "04",
    title: "Paced Editing & Distribution",
    desc: "We edit with snappy pacing, sound design, and subtitles. We handle scheduling, posting, and captioning across Instagram, YouTube & Facebook.",
    color: "bg-[#F59A57]"
  },
  {
    step: "05",
    title: "WhatsApp & Enquiry Funnels",
    desc: "We convert viral reach into actual revenue by setting up automated comment-to-DM funnels, driving prospective clients straight to your sales team.",
    color: "bg-[#249E98]"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 border-t border-black/5 relative">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
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
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line (Desktop only) */}
          <div className="absolute left-[50%] top-2 bottom-2 w-[1px] bg-black/5 hidden md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={item.step} 
                  className={`flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-12 relative z-10 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text card */}
                  <div className="w-full md:w-[45%]">
                    <div className="bg-[#FAFAFA] border border-black/5 rounded-2xl p-6 md:p-8 hover:border-black/10 hover:shadow-sm transition-all">
                      <span className="font-mono font-extrabold text-[12px] text-[#249E98] tracking-widest block mb-2">
                        STEP {item.step}
                      </span>
                      <h3 className="font-display font-extrabold text-[#0A0A0A] text-lg mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#55555A] text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot (Desktop only) */}
                  <div className="absolute left-[50%] -translate-x-[50%] w-10 h-10 rounded-full border border-black/5 bg-white flex items-center justify-center font-bold text-xs text-[#0A0A0A] hidden md:flex shadow-inner">
                    {item.step}
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
