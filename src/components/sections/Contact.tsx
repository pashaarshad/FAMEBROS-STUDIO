"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brandName: "",
    category: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#FFFFFF] py-24 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[640px] mx-auto px-5">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-mono-custom text-[11px] tracking-[0.25em] uppercase text-[#F59A57] font-bold mb-4">
            GET IN TOUCH
          </p>
          <h2 className="font-display font-extrabold text-[#0A0A0A] text-[34px] md:text-[42px] leading-[1.1] mb-4">
            Let&apos;s grow your business.
          </h2>
          <p className="text-[#55555A] text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Connect directly on WhatsApp for an instant response, or drop your details in the quick form below.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#FAFAFA] border border-black/5 rounded-3xl p-6 md:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.01)] relative">
          
          {!isSubmitted ? (
            <div className="space-y-8">
              
              {/* PRIMARY ACTION: WHATSAPP DIRECT */}
              <div className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl p-5 text-center flex flex-col items-center">
                <span className="text-[10px] font-mono-custom font-extrabold text-[#25D366] tracking-widest uppercase mb-2">
                  RECOMMENDED & FASTEST
                </span>
                <h3 className="font-display font-bold text-[#0A0A0A] text-[15px] mb-3">
                  Start an instant conversation on WhatsApp
                </h3>
                
                <a 
                  href="https://wa.me/919892384424?text=Hi%2C%20I%20visited%20your%20website.%20I%20want%20to%20grow%20my%20business.%20Please%20contact%20me%20back." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl font-extrabold text-[15px] transition-all hover:scale-[1.02] shadow-[0_6px_20px_rgba(37,211,102,0.25)] select-none"
                >
                  <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.623-1.023-5.086-2.884-6.949C16.528 2.021 14.069.996 11.45.996c-5.441 0-9.87 4.372-9.874 9.802-.001 1.77.476 3.498 1.381 5.012l-1.02 3.731 3.864-.997c1.517.844 3.197 1.288 4.866 1.288zm9.585-7.054c-.26-.13-1.534-.757-1.772-.843-.238-.087-.41-.13-.583.13-.172.26-.667.844-.818 1.017-.151.173-.303.195-.563.065-.26-.13-1.099-.405-2.094-1.291-.774-.69-1.297-1.543-1.449-1.803-.151-.26-.016-.4.113-.53.117-.117.26-.303.39-.455.13-.151.173-.26.26-.433.087-.173.043-.325-.022-.455-.065-.13-.583-1.407-.798-1.927-.21-.505-.44-.436-.607-.444-.156-.008-.335-.009-.514-.009s-.47.067-.716.335c-.246.268-.94.92-.94 2.247s.965 2.607 1.1 2.79c.135.184 1.902 2.903 4.606 4.07.643.277 1.144.443 1.535.568.646.205 1.233.176 1.7.106.518-.077 1.534-.627 1.75-1.233.217-.606.217-1.125.151-1.233-.065-.108-.238-.173-.497-.303z" />
                  </svg>
                  Inquire via WhatsApp Now
                </a>
              </div>

              {/* DIVIDER */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] bg-black/5 flex-grow" />
                <span className="text-[10px] font-mono-custom tracking-widest text-[#55555A] uppercase font-bold">
                  OR SEND A QUICK EMAIL ENQUIRY
                </span>
                <div className="h-[1px] bg-black/5 flex-grow" />
              </div>

              {/* FORM FIELDS */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#55555A] font-semibold mb-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-black/10 rounded-xl p-3 text-[#0A0A0A] text-sm focus:border-[#F59A57] focus:outline-none transition-all placeholder:text-gray-400"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#55555A] font-semibold mb-2">WhatsApp / Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-black/10 rounded-xl p-3 text-[#0A0A0A] text-sm focus:border-[#F59A57] focus:outline-none transition-all placeholder:text-gray-400"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#55555A] font-semibold mb-2">Business / Brand Name</label>
                    <input 
                      type="text" 
                      placeholder="Brand name"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full bg-white border border-black/10 rounded-xl p-3 text-[#0A0A0A] text-sm focus:border-[#F59A57] focus:outline-none transition-all placeholder:text-gray-400"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#55555A] font-semibold mb-2">Business Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-white border border-black/10 rounded-xl p-3 text-[#0A0A0A] text-sm focus:border-[#F59A57] focus:outline-none transition-all"
                      required
                      suppressHydrationWarning
                    >
                      <option value="">Select Category</option>
                      <option value="Restaurants">Restaurants / Cafes</option>
                      <option value="Resorts & Hotels">Resorts & Hotels</option>
                      <option value="Gyms & Fitness">Gyms & Fitness</option>
                      <option value="Retail Showrooms">Retail Showrooms</option>
                      <option value="Executive Branding">Executive Branding</option>
                      <option value="Other">Other Business</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#55555A] font-semibold mb-2">What can we help you with? (Optional)</label>
                  <textarea 
                    placeholder="Briefly describe your business goals or challenge"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-white border border-black/10 rounded-xl p-3 text-[#0A0A0A] text-sm focus:border-[#F59A57] focus:outline-none transition-all resize-none placeholder:text-gray-400"
                    suppressHydrationWarning
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-[#0A0A0B] hover:bg-[#1C1C21] text-white rounded-xl font-bold text-sm transition-all hover:scale-[1.01]"
                  suppressHydrationWarning
                >
                  Submit Enquiry Form &rarr;
                </button>
              </form>

            </div>
          ) : (
            /* SUCCESS SCREEN */
            <div className="text-center py-10 space-y-6">
              <div className="w-16 h-16 bg-[#249E98]/10 text-[#249E98] border border-[#249E98]/30 rounded-full flex items-center justify-center text-3xl mx-auto">
                ✓
              </div>
              <div>
                <h3 className="font-display font-extrabold text-[#0A0A0A] text-2xl mb-2">Enquiry Sent!</h3>
                <p className="text-[#55555A] text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you. We have received your details and will get back to you within 24 hours. For an immediate reply, please click below to connect with us on WhatsApp.
                </p>
              </div>
              <div className="flex flex-col gap-3 max-w-xs mx-auto pt-4">
                <a 
                  href="https://wa.me/919892384424?text=Hi%2C%20I%20visited%20your%20website.%20I%20want%20to%20grow%20my%20business.%20Please%20contact%20me%20back." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl font-bold text-sm text-center shadow-lg transition-all"
                >
                  Continue on WhatsApp
                </a>
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", phone: "", brandName: "", category: "", message: "" });
                  }}
                  className="w-full py-3 border border-black/10 text-[#0A0A0A] rounded-xl font-bold text-sm hover:bg-black/5 transition-all"
                >
                  Back to Form
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
