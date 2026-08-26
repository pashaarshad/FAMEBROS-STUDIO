"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    businessType: "",
    location: "",
    social: "",
    services: [] as string[],
    goals: [] as string[],
    challenge: "",
    currentSpend: "",
    revenue: "",
    budget: "",
    agencyExperience: "",
  });

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // Success state
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <section id="contact" className="bg-[#050505] py-20 border-t border-white/5 relative min-h-[400px]" />;
  }

  return (
    <section id="contact" className="bg-[#050505] py-20 border-t border-white/5 relative">
      <div className="max-w-[720px] mx-auto px-5">
        
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-mono-custom text-[10px] tracking-[0.16em] uppercase text-[#F59A57] mb-4">
            ENQUIRE
          </p>
          <h2 className="font-display font-extrabold text-white text-[32px] md:text-[40px] leading-[1.1] mb-4">
            Let&apos;s grow your business.
          </h2>
          <p className="text-[#A7A7A2] text-sm max-w-md mx-auto">
            Four quick steps. We&apos;ll come back within one working day with a strategy built around your business.
          </p>
        </div>

        {/* Progress bar */}
        {step < 5 && (
          <div className="flex gap-2 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  i <= step ? "bg-[#F59A57]" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-[#111416]/40 border border-white/10 rounded-2xl p-6 md:p-8">
          
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono-custom text-[10px] tracking-widest text-[#F59A57] font-semibold block mb-1">STEP 1 OF 4</span>
                <h3 className="font-display font-bold text-white text-lg">Let&apos;s start with you.</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Company / Brand Name</label>
                  <input 
                    type="text" 
                    placeholder="Business name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+91"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#F59A57] text-[#050505] rounded-lg font-semibold text-sm hover:bg-[#FF8A3D] transition-all"
                >
                  Continue &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono-custom text-[10px] tracking-widest text-[#F59A57] font-semibold block mb-1">STEP 2 OF 4</span>
                <h3 className="font-display font-bold text-white text-lg">About your business.</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">What does your business do?</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Retail store, clinic, D2C brand, service business"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">City / Location</label>
                  <input 
                    type="text" 
                    placeholder="Where is your business based?"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Website or Instagram</label>
                  <input 
                    type="text" 
                    placeholder="@yourbrand or yourwebsite.com"
                    value={formData.social}
                    onChange={(e) => setFormData({ ...formData, social: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                  />
                  <span className="text-[10px] text-[#6E716F] mt-1 block">We&apos;ll check this out before we connect.</span>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="px-6 py-3 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/5 transition-all"
                >
                  &larr; Back
                </button>
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#F59A57] text-[#050505] rounded-lg font-semibold text-sm hover:bg-[#FF8A3D] transition-all"
                >
                  Continue &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono-custom text-[10px] tracking-widest text-[#F59A57] font-semibold block mb-1">STEP 3 OF 4</span>
                <h3 className="font-display font-bold text-white text-lg">What do you need?</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-3">What you&apos;re interested in</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Organic Social Media Growth",
                      "Reel Shoot Booking",
                      "Event Reel Shoot",
                      "Influencer Marketing",
                      "Commercial Video",
                      "Creator Growth",
                      "Not sure yet",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleService(item)}
                        className={`text-xs px-4 py-2 rounded-full border transition-all ${
                          formData.services.includes(item)
                            ? "bg-white text-[#050505] border-white"
                            : "bg-transparent text-[#A7A7A2] border-white/10 hover:border-white/30"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-3">What are you trying to achieve?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Build brand recognition",
                      "More enquiries",
                      "More footfall",
                      "Grow followers",
                      "Online sales",
                      "Build founder brand",
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleGoal(item)}
                        className={`text-xs px-4 py-2 rounded-full border transition-all ${
                          formData.goals.includes(item)
                            ? "bg-white text-[#050505] border-white"
                            : "bg-transparent text-[#A7A7A2] border-white/10 hover:border-white/30"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">What&apos;s your biggest challenge right now?</label>
                  <textarea 
                    placeholder="Tell us what isn't working"
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    rows={3}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="px-6 py-3 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/5 transition-all"
                >
                  &larr; Back
                </button>
                <button 
                  type="button" 
                  onClick={handleNext}
                  className="px-6 py-3 bg-[#F59A57] text-[#050505] rounded-lg font-semibold text-sm hover:bg-[#FF8A3D] transition-all"
                >
                  Continue &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <span className="font-mono-custom text-[10px] tracking-widest text-[#F59A57] font-semibold block mb-1">STEP 4 OF 4</span>
                <h3 className="font-display font-bold text-white text-lg">Scale and budget.</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Current monthly marketing spend</label>
                  <select 
                    value={formData.currentSpend}
                    onChange={(e) => setFormData({ ...formData, currentSpend: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="none">Not spending yet</option>
                    <option value="under25">Under ₹25,000</option>
                    <option value="25-75">₹25,000 – ₹75,000</option>
                    <option value="75-200">₹75,000 – ₹2,00,000</option>
                    <option value="200plus">₹2,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Approximate monthly revenue</label>
                  <select 
                    value={formData.revenue}
                    onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="under5">Under ₹5 lakh</option>
                    <option value="5-15">₹5 – 15 lakh</option>
                    <option value="15-50">₹15 – 50 lakh</option>
                    <option value="50-100">₹50 lakh – 1 crore</option>
                    <option value="100plus">₹1 crore+</option>
                    <option value="secret">Prefer not to say</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Expected monthly budget for this</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                    required
                  >
                    <option value="">Select Option</option>
                    <option value="under30">Under ₹30,000</option>
                    <option value="30-60">₹30,000 – ₹60,000</option>
                    <option value="60-100">₹60,000 – ₹1,00,000</option>
                    <option value="100plus">₹1,00,000+</option>
                    <option value="unknown">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#A7A7A2] font-semibold mb-2">Have you worked with an agency before?</label>
                  <textarea 
                    placeholder="Optional — if it didn't go well, tell us why"
                    value={formData.agencyExperience}
                    onChange={(e) => setFormData({ ...formData, agencyExperience: e.target.value })}
                    rows={2}
                    className="w-full bg-[#111416] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#F59A57] focus:outline-none transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="px-6 py-3 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/5 transition-all"
                >
                  &larr; Back
                </button>
                <button 
                  type="submit"
                  className="px-6 py-3 bg-[#F59A57] text-[#050505] rounded-lg font-semibold text-sm hover:bg-[#FF8A3D] transition-all"
                >
                  Send Enquiry &rarr;
                </button>
              </div>
            </div>
          )}

          {/* Success screen */}
          {step === 5 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 bg-[#249E98]/10 text-[#249E98] border border-[#249E98]/30 rounded-full flex items-center justify-center text-3xl mx-auto">
                ✓
              </div>
              <div>
                <h3 className="font-display font-extrabold text-white text-xl mb-2">Thanks — we&apos;ve got it.</h3>
                <p className="text-[#A7A7A2] text-sm max-w-sm mx-auto">
                  Someone from our team will review your enquiry and get back to you within one working day.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                <a 
                  href="https://wa.me/919999999999" // Placeholder for sales whatsapp number
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3 bg-[#F59A57] text-[#050505] rounded-lg font-semibold text-sm hover:bg-[#FF8A3D] transition-all"
                >
                  Continue on WhatsApp &rarr;
                </a>
                <a 
                  href="#work"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-white/10 text-white rounded-lg font-semibold text-sm hover:bg-white/5 transition-all"
                >
                  Back to Homepage
                </a>
              </div>
            </div>
          )}

        </form>

      </div>
    </section>
  );
}
