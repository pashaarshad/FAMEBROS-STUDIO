"use client";

const steps = [
  {
    step: "01",
    title: "Analyse & Understand",
    desc: "We deeply analyze your business, market position, competitors and audience to find real growth opportunities.",
    boldTitle: "ANALYSE",
    boldDesc: "We study your business, market, competitors and audience.",
    image: "/engine_analyse.jpg"
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "We create a custom content and growth strategy with clear goals, messaging and roadmap.",
    boldTitle: "STRATEGISE",
    boldDesc: "We create a custom strategy with clear goals, messaging and roadmap.",
    image: "/engine_strategise.jpg"
  },
  {
    step: "03",
    title: "Create & Produce",
    desc: "Our in-house team shoots, designs and produces high quality content that connects and converts.",
    boldTitle: "CREATE",
    boldDesc: "We shoot, design and produce high quality content that tells your story.",
    image: "/engine_create.jpg"
  },
  {
    step: "04",
    title: "Publish & Grow",
    desc: "We publish consistently, optimize and grow your audience organically with smart distribution.",
    boldTitle: "DISTRIBUTE",
    boldDesc: "We publish consistently and grow your audience across the right platforms.",
    image: "/engine_distribute.jpg"
  },
  {
    step: "05",
    title: "Track & Optimise",
    desc: "We track performance in real time and continuously optimize content and strategy for better results.",
    boldTitle: "MEASURE",
    boldDesc: "We track performance, analyze results and continuously optimize.",
    image: "/engine_measure.jpg"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#FFFFFF] py-24 border-t border-black/5 relative overflow-hidden">
      
      {/* Self-contained CSS stylesheet for dashed flowing connector line */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawPath {
          from {
            stroke-dashoffset: 24;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .flow-curve-path {
          stroke-dasharray: 6 4;
          animation: drawPath 1.5s linear infinite;
        }
      `}} />

      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            THE FAMEBROS GROWTH ENGINE
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[34px] md:text-[44px] leading-[1.1]">
            Our process for predictable scaling.
          </h2>
          <p className="text-[#55555A] text-sm md:text-base mt-4 max-w-lg leading-relaxed">
            A structured, repeatable methodology from initial competitor auditing to daily lead attribution.
          </p>
        </div>

        {/* Steps Flow Timeline */}
        <div className="relative max-w-5xl mx-auto flex flex-col gap-24 md:gap-32">
          {steps.map((item, idx) => {
            const isEvenRow = idx % 2 === 0;
            const isLastRow = idx === steps.length - 1;

            return (
              <div 
                key={item.step} 
                className="relative flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-16 z-10"
              >
                
                {/* 1. LEFT CARD */}
                <div className="w-full md:w-[47%] flex flex-col justify-center">
                  {isEvenRow ? (
                    // Dark card (Left Column on Even rows: 1, 3, 5)
                    <div className="bg-[#0A0A0C] rounded-3xl p-8 min-h-[240px] relative overflow-hidden flex flex-col justify-end border border-white/10 shadow-lg group">
                      {/* Image backdrop */}
                      <img 
                        src={item.image} 
                        alt={item.boldTitle} 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-103 transition-transform duration-700 ease-out z-0" 
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
                      
                      <div className="relative z-20">
                        <h3 className="font-display font-extrabold text-white text-[24px] tracking-wide mb-2 uppercase">
                          {item.boldTitle}
                        </h3>
                        <p className="text-white/80 text-[13px] leading-relaxed max-w-sm">
                          {item.boldDesc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // White card (Left Column on Odd rows: 2, 4)
                    <div className="bg-white border border-black/5 rounded-3xl p-8 min-h-[240px] flex flex-col justify-center shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-[#F59A57]/30 transition-all duration-300">
                      <span className="font-mono font-extrabold text-[13px] text-[#F59A57] tracking-widest block mb-1">
                        {item.step}
                      </span>
                      <h4 className="font-display font-extrabold text-[#0A0A0A] text-lg md:text-xl mb-3">
                        {item.title}
                      </h4>
                      <p className="text-[#55555A] text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* 2. RIGHT CARD */}
                <div className="w-full md:w-[47%] flex flex-col justify-center">
                  {!isEvenRow ? (
                    // Dark card (Right Column on Odd rows: 2, 4)
                    <div className="bg-[#0A0A0C] rounded-3xl p-8 min-h-[240px] relative overflow-hidden flex flex-col justify-end border border-white/10 shadow-lg group">
                      {/* Image backdrop */}
                      <img 
                        src={item.image} 
                        alt={item.boldTitle} 
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-103 transition-transform duration-700 ease-out z-0" 
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
                      
                      <div className="relative z-20">
                        <h3 className="font-display font-extrabold text-white text-[24px] tracking-wide mb-2 uppercase">
                          {item.boldTitle}
                        </h3>
                        <p className="text-white/80 text-[13px] leading-relaxed max-w-sm">
                          {item.boldDesc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // White card (Right Column on Even rows: 1, 3, 5)
                    <div className="bg-white border border-black/5 rounded-3xl p-8 min-h-[240px] flex flex-col justify-center shadow-[0_4px_25px_rgba(0,0,0,0.015)] hover:shadow-md hover:border-[#F59A57]/30 transition-all duration-300">
                      <span className="font-mono font-extrabold text-[13px] text-[#F59A57] tracking-widest block mb-1">
                        {item.step}
                      </span>
                      <h4 className="font-display font-extrabold text-[#0A0A0A] text-lg md:text-xl mb-3">
                        {item.title}
                      </h4>
                      <p className="text-[#55555A] text-[13px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* 3. DYNAMIC INTER-ROW SVG ZIGZAG ARROWS (Desktop only) */}
                {!isLastRow && (
                  isEvenRow ? (
                    // Left-to-Right Sweeping Dotted Arrow
                    <div className="absolute left-[50%] -translate-x-[50%] top-[90%] h-[120px] w-[140px] pointer-events-none z-30 hidden md:block">
                      <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
                        <path 
                          d="M 20,10 C 70,10 70,110 120,110" 
                          stroke="#F59A57" 
                          strokeWidth="2.2" 
                          strokeLinecap="round"
                          strokeDasharray="5 4" 
                          className="flow-curve-path" 
                        />
                        {/* Orange Arrow Head */}
                        <path 
                          d="M 110,98 L 120,110 L 108,118" 
                          stroke="#F59A57" 
                          strokeWidth="2.2" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  ) : (
                    // Right-to-Left Sweeping Dotted Arrow
                    <div className="absolute left-[50%] -translate-x-[50%] top-[90%] h-[120px] w-[140px] pointer-events-none z-30 hidden md:block">
                      <svg className="w-full h-full" viewBox="0 0 140 120" fill="none">
                        <path 
                          d="M 120,10 C 70,10 70,110 20,110" 
                          stroke="#F59A57" 
                          strokeWidth="2.2" 
                          strokeLinecap="round"
                          strokeDasharray="5 4" 
                          className="flow-curve-path" 
                        />
                        {/* Orange Arrow Head */}
                        <path 
                          d="M 32,98 L 20,110 L 30,118" 
                          stroke="#F59A57" 
                          strokeWidth="2.2" 
                          fill="none" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )
                )}

              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
