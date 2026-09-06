"use client";

export default function CaseStudies() {
  return (
    <section className="py-24 bg-[#FFFFFF] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-3">
            FAMEBROS STUDIO &bull; CASE STUDIES
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[34px] md:text-[46px] leading-[1.08] mb-5">
            REAL BUSINESSES.<br />
            REAL CAMPAIGNS.<br />
            REAL GROWTH.
          </h2>
          <p className="text-[#55555A] text-base md:text-lg leading-relaxed">
            A collection of client growth stories from Famebros Studio, built around strategy, content, campaigns, referrals and long-term trust.
          </p>
        </div>

        {/* 3 Core Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="bg-[#FAFAFA] border border-black/10 rounded-2xl p-7 text-center shadow-xs">
            <div className="font-display text-4xl font-extrabold text-[#F59A57] mb-2">50+</div>
            <div className="font-mono-custom text-xs uppercase tracking-wider text-[#55555A] font-bold">CLIENTS</div>
          </div>
          <div className="bg-[#FAFAFA] border border-black/10 rounded-2xl p-7 text-center shadow-xs">
            <div className="font-display text-4xl font-extrabold text-[#249E98] mb-2">80%</div>
            <div className="font-mono-custom text-xs uppercase tracking-wider text-[#55555A] font-bold">NEW CLIENTS FROM REFERRALS</div>
          </div>
          <div className="bg-[#FAFAFA] border border-black/10 rounded-2xl p-7 text-center shadow-xs">
            <div className="font-display text-4xl font-extrabold text-[#F59A57] mb-2">36K+</div>
            <div className="font-mono-custom text-xs uppercase tracking-wider text-[#55555A] font-bold">COMBINED JEWELLERY AUDIENCE</div>
          </div>
        </div>

        <div className="bg-[#FAF6F0] border-l-4 border-[#249E98] border-y border-r border-black/10 rounded-2xl p-8 mb-16 shadow-xs max-w-3xl mx-auto text-center">
          <p className="font-display font-bold text-[#0A0A0A] text-xl md:text-2xl leading-relaxed">
            &ldquo;The goal is not simply to make social media bigger. The goal is to use social media to help make the business bigger.&rdquo;
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {/* CASE STUDY 01 */}
          <div className="bg-[#FAFAFA] border border-black/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="font-mono-custom text-xs font-bold text-[#F59A57] uppercase tracking-wider">
                CASE STUDY 01 &bull; JEWELLERY RETAIL
              </span>
              <span className="px-3 py-1 bg-[#249E98]/10 text-[#249E98] font-mono-custom text-xs font-bold rounded-md">
                1 Year+ Partnership
              </span>
            </div>
            <h3 className="font-display font-extrabold text-[#0A0A0A] text-2xl md:text-3xl mb-3">
              Shree Mahalaxmi Jewellers Group
            </h3>
            <p className="text-[#249E98] font-semibold text-base mb-6">
              One store became three. Small pages became a 36K+ combined audience. A trial became a long-term partnership.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#55555A] text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-[#0A0A0A] text-base mb-2">How It Started &amp; Scaled</h4>
                <p className="mb-4">
                  The client started with a trial of just one jewellery store to test whether our social media strategy could genuinely make a difference. After experiencing our planning, content strategy and execution, they trusted Famebros Studio with all three jewellery stores the very next month.
                </p>
                <p>
                  When we started, each page had approximately 500 to 1,000 followers. We shifted the focus from pure product photos to founder stories, jewellery buying behaviour, and festive marketing campaigns.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#0A0A0A] text-base mb-2">The Real In-Store Result</h4>
                <p className="mb-4">
                  When we first started, there were times when the stores were simply waiting for customers to walk in. Today, there are periods when the teams are continuously busy attending customers and managing stronger footfall.
                </p>
                <div className="p-4 bg-white rounded-xl border border-black/10 font-mono-custom text-xs space-y-1 text-[#0A0A0A]">
                  <div>&bull; Shree Mahalaxmi Jewellers, Kurla: <strong className="text-[#F59A57]">15K+</strong></div>
                  <div>&bull; Kanchanmala Jewellers, Chembur: <strong className="text-[#249E98]">12K+</strong></div>
                  <div>&bull; Mahalaxmi Jewellers: <strong className="text-[#F59A57]">9K+</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* CASE STUDY 02 */}
          <div className="bg-[#FAFAFA] border border-black/10 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="font-mono-custom text-xs font-bold text-[#F59A57] uppercase tracking-wider">
                CASE STUDY 02 &bull; FESTIVE FOOTFALL
              </span>
              <span className="px-3 py-1 bg-[#F59A57]/10 text-[#F59A57] font-mono-custom text-xs font-bold rounded-md">
                Viral Retail Campaign
              </span>
            </div>
            <h3 className="font-display font-extrabold text-[#0A0A0A] text-2xl md:text-3xl mb-3">
              Hazel Dryfruit &amp; Sweets
            </h3>
            <p className="text-[#F59A57] font-semibold text-base mb-6">
              The campaign where the owner asked us to stop boosting.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#55555A] text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-[#0A0A0A] text-base mb-2">What Famebros Studio Did</h4>
                <p className="mb-4">
                  Hazel Dryfruit &amp; Sweets was located outside Mumbai. Location did not stop Famebros from arranging a local freelance production team, writing high-hook scripts, coordinating the shoot with the owner, and launching targeted influencer marketing and Meta Ads around Raksha Bandhan buying behavior.
                </p>
                <p className="font-semibold text-[#0A0A0A]">
                  The objective was straightforward: bring more customers into the store.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <div className="p-6 bg-white rounded-2xl border-l-4 border-[#F59A57] border-y border-r border-black/10 shadow-xs">
                  <div className="font-display font-extrabold text-2xl md:text-3xl text-[#0A0A0A] mb-2">
                    &ldquo;Stop boosting. It&apos;s overcrowded.&rdquo;
                  </div>
                  <p className="text-xs text-[#55555A]">
                    Just one day before Raksha Bandhan, the store experienced extremely heavy footfall, moving people directly from their screens into the physical store.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CASE STUDY 03 & 04 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CASE 03 */}
            <div className="bg-[#FAFAFA] border border-black/10 rounded-3xl p-8 shadow-sm">
              <span className="font-mono-custom text-xs font-bold text-[#249E98] uppercase tracking-wider block mb-3">
                CASE STUDY 03 &bull; REACH BREAKTHROUGH
              </span>
              <h3 className="font-display font-bold text-[#0A0A0A] text-2xl mb-2">
                Raj Laxmi Jewellers
              </h3>
              <p className="text-[#249E98] font-semibold text-sm mb-4">
                A struggling page. Then 300K+ views on the first business reel.
              </p>
              <p className="text-[#55555A] text-sm leading-relaxed mb-6">
                Raj Laxmi Jewellers approached Famebros Studio with a page struggling to get reel reach. We coordinated with a local videographer, restructured the scripting, and optimized the hook &mdash; crossing 300,000+ views on the very first reel.
              </p>
              <div className="inline-block px-4 py-2 bg-[#249E98]/10 text-[#249E98] font-bold text-xs rounded-lg">
                300K+ Views on First New Reel
              </div>
            </div>

            {/* CASE 04 */}
            <div className="bg-[#FAFAFA] border border-black/10 rounded-3xl p-8 shadow-sm">
              <span className="font-mono-custom text-xs font-bold text-[#F59A57] uppercase tracking-wider block mb-3">
                CASE STUDY 04 &bull; FASHION RETAIL
              </span>
              <h3 className="font-display font-bold text-[#0A0A0A] text-2xl mb-2">
                Devi &amp; Company, Kanpur
              </h3>
              <p className="text-[#F59A57] font-semibold text-sm mb-4">
                Two established stores. A third store opening campaign.
              </p>
              <p className="text-[#55555A] text-sm leading-relaxed mb-6">
                Devi &amp; Company is a family fashion business in Kanpur. When opening their third store, they trusted Famebros Studio with complete launch strategy, shoot planning, promotional creatives, and digital distribution.
              </p>
              <div className="inline-block px-4 py-2 bg-[#F59A57]/10 text-[#F59A57] font-bold text-xs rounded-lg">
                Opening Campaign &bull; Complete Distribution
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
