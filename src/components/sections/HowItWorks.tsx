"use client";

const steps = [
  {
    step: "01",
    tag: "ANALYSE",
    title: "Analyse & Understand",
    desc: "We deeply analyze your business, market position, competitors and audience to find real growth opportunities.",
    image: "/engine_analyse.jpg",
    accent: "#F59A57"
  },
  {
    step: "02",
    tag: "STRATEGISE",
    title: "Strategy & Planning",
    desc: "We create a custom content and growth strategy with clear goals, messaging and a structured roadmap.",
    image: "/engine_strategise.jpg",
    accent: "#249E98"
  },
  {
    step: "03",
    tag: "CREATE",
    title: "Create & Produce",
    desc: "Our in-house team shoots, designs and produces high-quality content that connects and converts.",
    image: "/engine_create.jpg",
    accent: "#F59A57"
  },
  {
    step: "04",
    tag: "DISTRIBUTE",
    title: "Publish & Grow",
    desc: "We publish consistently, optimize and grow your audience organically across the right platforms.",
    image: "/engine_distribute.jpg",
    accent: "#249E98"
  },
  {
    step: "05",
    tag: "MEASURE",
    title: "Track & Optimise",
    desc: "We track performance in real time, analyze results and continuously optimize for better business growth.",
    image: "/engine_measure.jpg",
    accent: "#F59A57"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FAF6F0] py-24 border-t border-black/5 relative overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            THE FAMEBROS GROWTH ENGINE
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[34px] md:text-[44px] leading-[1.1]">
            Our process for <span className="text-[#249E98]">predictable scaling.</span>
          </h2>
          <p className="text-[#55555A] text-sm md:text-base mt-4 max-w-lg leading-relaxed">
            A structured 5-step methodology built to take your brand from initial audit to consistent monthly revenue.
          </p>
        </div>

        {/* 5-Step Unified Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div 
              key={item.step} 
              className={`bg-white border border-black/5 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-black/15 transition-all duration-300 flex flex-col justify-between group ${
                idx === 3 || idx === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Image Header */}
                <div className="h-44 w-full relative overflow-hidden bg-[#0A0A0C]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0A0A0A] font-mono font-black text-xs px-3 py-1.5 rounded-lg shadow-sm">
                    STEP {item.step}
                  </div>

                  {/* Step Tag */}
                  <div 
                    className="absolute bottom-4 left-4 font-mono-custom text-[10px] font-extrabold tracking-widest px-2.5 py-1 rounded uppercase text-white"
                    style={{ backgroundColor: item.accent }}
                  >
                    {item.tag}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8">
                  <h3 className="font-display font-extrabold text-[#0A0A0A] text-xl mb-3 group-hover:text-[#F59A57] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#55555A] text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom Process Step Bar */}
              <div className="px-6 md:px-8 pb-6 pt-2 flex items-center justify-between border-t border-black/5 text-[11px] font-mono text-[#55555A]">
                <span>STAGE {item.step} / 05</span>
                <span className="text-[#F59A57] font-bold">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
