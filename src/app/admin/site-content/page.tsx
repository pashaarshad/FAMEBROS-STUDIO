"use client";

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { SITE_CONTENT_DEFAULTS } from '@/lib/siteContentDefaults';

interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
  isLocked?: boolean;
}

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  clientName: string;
  thumbnailUrl: string;
  videoUrl?: string;
  description: string;
  metricLabel?: string;
  metricValue?: string;
  isLocked?: boolean;
}

// Section mapping with section IDs for iframe scrolling
const SECTION_LIST = [
  { id: 'hero',                label: 'Hero Section',        emoji: '🏠', targetId: 'hero' },
  { id: 'about',               label: 'About Section',       emoji: 'ℹ️', targetId: 'about' },
  { id: 'why_choose_us',       label: 'Why Choose Us',       emoji: '⭐', targetId: 'why-choose-us' },
  { id: 'portfolio',           label: 'Portfolio & Videos',  emoji: '🎬', targetId: 'what-our-clients-say' },
  { id: 'brands',              label: 'Brand Logos',         emoji: '🏷️', targetId: 'clients' },
  { id: 'why_we_exist',        label: 'Why We Exist',        emoji: '💡', targetId: 'why-we-exist' },
  { id: 'branding_comparison', label: 'Branding Difference',emoji: '⚖️', targetId: 'branding-comparison' },
  { id: 'organic_growth',      label: 'Organic Growth',      emoji: '🌱', targetId: 'organic-growth' },
  { id: 'how_it_works',        label: 'How It Works',        emoji: '⚙️', targetId: 'how-it-works' },
  { id: 'storytelling',        label: 'Storytelling',        emoji: '📖', targetId: 'storytelling' },
  { id: 'ecosystem',           label: 'Ecosystem',           emoji: '🔄', targetId: 'ecosystem' },
  { id: 'founder',             label: 'Founders Section',    emoji: '👤', targetId: 'founder' },
  { id: 'faq',                 label: 'FAQ Section',         emoji: '❓', targetId: 'faq' },
  { id: 'contact',             label: 'Contact Section',     emoji: '📞', targetId: 'contact' },
  { id: 'footer',              label: 'Footer',              emoji: '📄', targetId: 'footer' },
];

const TEXTAREA_KEYS = new Set([
  'body', 'subheadline', 'bio', 'tagline', 'copyright',
  'a1', 'a2', 'a3', 'a4', 'a5',
  'founder_1_bio', 'founder_2_bio',
  'reason_1_body', 'reason_2_body', 'reason_3_body', 'reason_4_body',
  'step_1_body', 'step_2_body', 'step_3_body', 'step_4_body', 'step_5_body',
  'compare_1_new', 'compare_1_old', 'compare_2_new', 'compare_2_old',
  'compare_3_new', 'compare_3_old', 'compare_4_new', 'compare_4_old',
]);

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export default function VisualSiteEditorPage() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [allContent, setAllContent] = useState<Record<string, Record<string, string>>>(SITE_CONTENT_DEFAULTS);
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);
  const [publishStatus, setPublishStatus] = useState<string>('');
  const [hasUnsavedEdits, setHasUnsavedEdits] = useState(false);

  // Modal / inline adding states
  const [showAddBrandModal, setShowAddBrandModal] = useState(false);
  const [newBrandName, setNewBrandName] = useState('');
  const [newBrandLogoUrl, setNewBrandLogoUrl] = useState('');
  const [uploadingBrand, setUploadingBrand] = useState(false);

  const [showAddVideoModal, setShowAddVideoModal] = useState(false);
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newVideoClient, setNewVideoClient] = useState('');
  const [newVideoCategory, setNewVideoCategory] = useState('Restaurant');
  const [newVideoThumbUrl, setNewVideoThumbUrl] = useState('');
  const [newVideoMediaUrl, setNewVideoMediaUrl] = useState('');
  const [newVideoMetric, setNewVideoMetric] = useState('+150% Growth');
  const [uploadingThumb, setUploadingThumb] = useState(false);
  const [uploadingVideo, setUploadingVideo] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const brandFileRef = useRef<HTMLInputElement>(null);
  const videoThumbRef = useRef<HTMLInputElement>(null);
  const videoFileRef = useRef<HTMLInputElement>(null);

  // 1. Initial Load of DB Data
  useEffect(() => {
    async function loadData() {
      try {
        const [contentRes, brandsRes, portRes] = await Promise.all([
          fetch('/api/site-content'),
          fetch('/api/brands'),
          fetch('/api/portfolio'),
        ]);

        const [contentJson, brandsJson, portJson] = await Promise.all([
          contentRes.json(),
          brandsRes.json(),
          portRes.json(),
        ]);

        if (contentJson?.data) setAllContent(contentJson.data);
        if (brandsJson?.data) setBrands(brandsJson.data);
        if (portJson?.data) setPortfolio(portJson.data);
      } catch (e) {
        console.error('Failed to load initial editor data:', e);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Send live update to iframe whenever state changes
  const notifyIframe = useCallback((newContent: typeof allContent, newBrands: typeof brands, newPort: typeof portfolio) => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        {
          type: 'FAMEBROS_LIVE_UPDATE',
          allContent: newContent,
          brands: newBrands,
          portfolio: newPort,
        },
        '*'
      );
    }
  }, []);

  // Handle Text Input Changes
  const handleTextChange = (section: string, key: string, value: string) => {
    const updated = {
      ...allContent,
      [section]: {
        ...(allContent[section] || {}),
        [key]: value,
      },
    };
    setAllContent(updated);
    setHasUnsavedEdits(true);
    notifyIframe(updated, brands, portfolio);
  };

  // Scroll preview iframe to selected section
  const handleSectionSelect = (secId: string) => {
    setActiveSection(secId);
    const secObj = SECTION_LIST.find((s) => s.id === secId);
    if (secObj && iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        {
          type: 'FAMEBROS_SCROLL_TO_SECTION',
          sectionId: secObj.targetId,
        },
        '*'
      );
    }
  };

  // ─── FILE UPLOADS ────────────────────────────────────────────────────────────

  // Upload Brand Logo Image
  const handleBrandFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingBrand(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('type', 'image');

      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        setNewBrandLogoUrl(json.url);
      } else {
        alert(json.error || 'Brand logo upload failed');
      }
    } catch {
      alert('Upload failed');
    } finally {
      setUploadingBrand(false);
    }
  };

  // Submit New Brand Logo
  const handleAddBrandSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBrandName || !newBrandLogoUrl) return;

    try {
      const res = await fetch('/api/brands', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newBrandName, logoUrl: newBrandLogoUrl }),
      });
      const json = await res.json();
      if (json.success) {
        const updatedBrands = [...brands, json.data];
        setBrands(updatedBrands);
        notifyIframe(allContent, updatedBrands, portfolio);
        setShowAddBrandModal(false);
        setNewBrandName('');
        setNewBrandLogoUrl('');
      }
    } catch {
      alert('Failed to add brand');
    }
  };

  // Upload Video Thumbnail
  const handleVideoThumbSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingThumb(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('type', 'image');

      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        setNewVideoThumbUrl(json.url);
      } else {
        alert(json.error || 'Thumbnail upload failed');
      }
    } catch {
      alert('Upload failed');
    } finally {
      setUploadingThumb(false);
    }
  };

  // Upload Video File (MP4)
  const handleVideoFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingVideo(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('type', 'video');

      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        setNewVideoMediaUrl(json.url);
      } else {
        alert(json.error || 'Video upload failed');
      }
    } catch {
      alert('Upload failed');
    } finally {
      setUploadingVideo(false);
    }
  };

  // Submit New Portfolio Video
  const handleAddVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideoTitle || !newVideoThumbUrl) return;

    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newVideoTitle,
          clientName: newVideoClient || 'Client Partner',
          category: newVideoCategory,
          thumbnailUrl: newVideoThumbUrl,
          videoUrl: newVideoMediaUrl,
          metricValue: newVideoMetric,
          description: 'Client video shoot produced by Famebros Studio.',
        }),
      });
      const json = await res.json();
      if (json.success) {
        const updatedPort = [...portfolio, json.data];
        setPortfolio(updatedPort);
        notifyIframe(allContent, brands, updatedPort);
        setShowAddVideoModal(false);
        setNewVideoTitle('');
        setNewVideoClient('');
        setNewVideoThumbUrl('');
        setNewVideoMediaUrl('');
      }
    } catch {
      alert('Failed to add video');
    }
  };

  // ─── PUBLISH ALL EDITS TO MONGO DB ────────────────────────────────────────

  const handlePublishAll = async () => {
    setPublishing(true);
    setPublishStatus('');

    try {
      // Save every section in parallel
      const savePromises = Object.entries(allContent).map(([section, updates]) =>
        fetch('/api/site-content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ section, updates }),
        })
      );

      await Promise.all(savePromises);

      setHasUnsavedEdits(false);
      setPublishStatus('✅ Published Successfully to Live Website!');
      setTimeout(() => setPublishStatus(''), 4000);
    } catch (e) {
      console.error(e);
      setPublishStatus('❌ Publish Failed. Please try again.');
    } finally {
      setPublishing(false);
    }
  };

  const keyLabel = (key: string) =>
    key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  // Determine iframe width based on device toggle
  const iframeWidthClass =
    deviceMode === 'mobile'
      ? 'w-[375px] h-[750px] shadow-2xl rounded-[36px] border-[10px] border-zinc-800'
      : deviceMode === 'tablet'
      ? 'w-[768px] h-[900px] shadow-2xl rounded-2xl border-[8px] border-zinc-800'
      : 'w-full h-full rounded-none border-none';

  return (
    <div className="h-screen w-screen bg-[#0A0A0C] text-white flex flex-col overflow-hidden font-sans">
      
      {/* ─── TOP HEADER BAR ─────────────────────────────────────────────────── */}
      <header className="h-16 bg-[#121216] border-b border-white/10 px-4 sm:px-6 flex items-center justify-between z-30 shrink-0">
        
        {/* Left branding & Overview Link */}
        <div className="flex items-center gap-4">
          <Link
            href="/admin"
            className="flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg"
          >
            ← Overview
          </Link>
          <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-xl">✨</span>
            <span className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Visual Site Editor
            </span>
            <span className="hidden md:inline-block text-[10px] font-mono bg-[#F59A57]/20 text-[#F59A57] border border-[#F59A57]/30 px-2 py-0.5 rounded-full">
              Live Preview
            </span>
          </div>
        </div>

        {/* Center: Device Mode Switcher */}
        <div className="hidden md:flex items-center bg-[#1A1A20] border border-white/10 p-1 rounded-xl gap-1">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              deviceMode === 'desktop'
                ? 'bg-[#F59A57] text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            💻 Desktop
          </button>
          <button
            onClick={() => setDeviceMode('tablet')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              deviceMode === 'tablet'
                ? 'bg-[#F59A57] text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            📱 Tablet
          </button>
          <button
            onClick={() => setDeviceMode('mobile')}
            className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
              deviceMode === 'mobile'
                ? 'bg-[#F59A57] text-black shadow-md'
                : 'text-white/60 hover:text-white'
            }`}
          >
            📲 Mobile
          </button>
        </div>

        {/* Right: Publish Actions */}
        <div className="flex items-center gap-3">
          {publishStatus && (
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-lg animate-pulse hidden xs:inline-block">
              {publishStatus}
            </span>
          )}

          {hasUnsavedEdits && (
            <span className="text-[10px] font-bold text-amber-400 bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 rounded-md hidden lg:inline-block">
              ● Unsaved Edits
            </span>
          )}

          <button
            onClick={handlePublishAll}
            disabled={publishing}
            className="px-5 py-2 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#F59A57]/20 disabled:opacity-50"
          >
            {publishing ? 'Publishing…' : '🚀 Save & Publish'}
          </button>
        </div>
      </header>

      {/* ─── SPLIT VIEW BODY ────────────────────────────────────────────────── */}
      <div className="flex-1 flex min-h-0 overflow-hidden relative">

        {/* ─── LEFT PANEL: EDIT CONTROLS / INSPECTOR (~420px) ─────────────── */}
        <aside className="w-full md:w-[420px] lg:w-[450px] bg-[#141419] border-r border-white/10 flex flex-col shrink-0 z-20">
          
          {/* Section Picker Ribbon */}
          <div className="p-3 border-b border-white/10 bg-[#17171e] flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest shrink-0 pl-1">
              Section:
            </span>
            <select
              value={activeSection}
              onChange={(e) => handleSectionSelect(e.target.value)}
              className="w-full bg-[#0A0A0C] border border-white/20 text-white text-xs font-bold rounded-xl px-3 py-2 focus:outline-none focus:border-[#F59A57]"
            >
              {SECTION_LIST.map((sec) => (
                <option key={sec.id} value={sec.id}>
                  {sec.emoji} {sec.label}
                </option>
              ))}
            </select>
          </div>

          {/* Form Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">

            {/* Special Section Control: BRAND LOGOS */}
            {activeSection === 'brands' && (
              <div className="bg-[#1A1A22] border border-[#F59A57]/30 rounded-2xl p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm text-white flex items-center gap-2">
                      <span>🏷️</span> Brand Logos
                    </h3>
                    <p className="text-xs text-white/50">
                      {brands.length} logos configured
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAddBrandModal(true)}
                    className="px-3 py-1.5 bg-[#F59A57] text-black font-extrabold text-xs rounded-lg hover:scale-105 transition-all"
                  >
                    + Add Logo
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 max-h-44 overflow-y-auto pr-1">
                  {brands.map((b) => (
                    <div
                      key={b.id}
                      className="bg-[#0A0A0C] border border-white/10 p-2 rounded-xl flex flex-col items-center justify-center text-center"
                    >
                      <img src={b.logoUrl} alt={b.name} className="h-8 max-w-full object-contain mb-1" />
                      <span className="text-[9px] text-white/50 truncate w-full">{b.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Special Section Control: PORTFOLIO & VIDEOS */}
            {activeSection === 'portfolio' && (
              <div className="bg-[#1A1A22] border border-[#F59A57]/30 rounded-2xl p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm text-white flex items-center gap-2">
                      <span>🎬</span> Shoot Videos & Testimonials
                    </h3>
                    <p className="text-xs text-white/50">
                      {portfolio.length} videos configured
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAddVideoModal(true)}
                    className="px-3 py-1.5 bg-[#F59A57] text-black font-extrabold text-xs rounded-lg hover:scale-105 transition-all"
                  >
                    + Add Video
                  </button>
                </div>

                <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                  {portfolio.map((p) => (
                    <div
                      key={p.id}
                      className="bg-[#0A0A0C] border border-white/10 p-2.5 rounded-xl flex items-center gap-3"
                    >
                      <img src={p.thumbnailUrl} alt={p.title} className="w-12 h-9 object-cover rounded-lg bg-black" />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white truncate">{p.title}</p>
                        <p className="text-[10px] text-white/50">{p.category} &bull; {p.clientName}</p>
                      </div>
                      {p.isLocked && <span className="text-[9px] text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.5 rounded">Locked</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Text Inputs for Active Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F59A57]">
                  Text Controls
                </span>
                <span className="text-[10px] text-white/40">
                  Edits update live in preview →
                </span>
              </div>

              {Object.keys(SITE_CONTENT_DEFAULTS[activeSection] || {}).map((key) => {
                const isTextarea = TEXTAREA_KEYS.has(key);
                const value = allContent[activeSection]?.[key] ?? '';

                return (
                  <div key={key} className="bg-[#1A1A20] border border-white/10 rounded-xl p-3.5 space-y-1.5">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {keyLabel(key)}
                    </label>

                    {isTextarea ? (
                      <textarea
                        rows={3}
                        value={value}
                        onChange={(e) => handleTextChange(activeSection, key, e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#F59A57] resize-y"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleTextChange(activeSection, key, e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/15 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#F59A57]"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* ─── RIGHT PANEL: LIVE WEBSITE PREVIEW ──────────────────────────────── */}
        <main className="flex-1 bg-[#050507] flex items-center justify-center relative overflow-auto p-4 md:p-8">
          
          {loading ? (
            <div className="flex flex-col items-center gap-3 text-sm text-[#F59A57]">
              <span className="w-8 h-8 border-3 border-[#F59A57] border-t-transparent rounded-full animate-spin" />
              Loading Visual Editor…
            </div>
          ) : (
            <div className={`transition-all duration-300 ${iframeWidthClass} bg-black overflow-hidden flex items-center justify-center relative`}>
              <iframe
                ref={iframeRef}
                id="website-preview-frame"
                src="/?preview=true"
                className="w-full h-full border-none"
                title="Live Website Preview"
              />
            </div>
          )}

        </main>
      </div>

      {/* ─── ADD BRAND MODAL ───────────────────────────────────────────────── */}
      {showAddBrandModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 max-w-sm w-full text-white space-y-4">
            <h3 className="font-bold text-lg text-white">Add Brand Logo</h3>

            <form onSubmit={handleAddBrandSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-white/70 mb-1">Brand Name *</label>
                <input
                  type="text" required
                  value={newBrandName}
                  onChange={(e) => setNewBrandName(e.target.value)}
                  placeholder="e.g. Nike"
                  className="w-full bg-white/5 border border-white/15 rounded-xl p-3 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 mb-1">Logo Image File *</label>
                <input
                  ref={brandFileRef}
                  type="file" accept="image/*"
                  onChange={handleBrandFileSelect}
                  className="w-full text-xs text-white/60 bg-white/5 p-2 rounded-xl border border-white/15"
                />
                {uploadingBrand && <p className="text-[10px] text-amber-400 mt-1">Uploading logo image…</p>}
                {newBrandLogoUrl && <p className="text-[10px] text-emerald-400 mt-1">✅ Uploaded!</p>}
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddBrandModal(false)}
                  className="px-4 py-2 bg-white/10 text-xs font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newBrandLogoUrl || uploadingBrand}
                  className="px-4 py-2 bg-[#F59A57] text-black text-xs font-extrabold rounded-xl disabled:opacity-40"
                >
                  Add Brand
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ─── ADD VIDEO MODAL ───────────────────────────────────────────────── */}
      {showAddVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 max-w-md w-full text-white space-y-4">
            <h3 className="font-bold text-lg text-white">Add Portfolio Video</h3>

            <form onSubmit={handleAddVideoSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-white/70 mb-1">Title *</label>
                <input
                  type="text" required
                  value={newVideoTitle}
                  onChange={(e) => setNewVideoTitle(e.target.value)}
                  placeholder="e.g. Salon Campaign Reel"
                  className="w-full bg-white/5 border border-white/15 rounded-xl p-2.5 text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1">Client Name</label>
                  <input
                    type="text"
                    value={newVideoClient}
                    onChange={(e) => setNewVideoClient(e.target.value)}
                    placeholder="e.g. Glamour Studio"
                    className="w-full bg-white/5 border border-white/15 rounded-xl p-2.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/70 mb-1">Category</label>
                  <input
                    type="text"
                    value={newVideoCategory}
                    onChange={(e) => setNewVideoCategory(e.target.value)}
                    placeholder="e.g. Salon / Resort"
                    className="w-full bg-white/5 border border-white/15 rounded-xl p-2.5 text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 mb-1">Thumbnail Image *</label>
                <input
                  ref={videoThumbRef}
                  type="file" accept="image/*"
                  onChange={handleVideoThumbSelect}
                  className="w-full text-xs text-white/60 bg-white/5 p-2 rounded-xl border border-white/15"
                />
                {uploadingThumb && <p className="text-[10px] text-amber-400 mt-1">Uploading thumbnail…</p>}
                {newVideoThumbUrl && <p className="text-[10px] text-emerald-400 mt-1">✅ Thumbnail uploaded!</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-white/70 mb-1">Video File (MP4 - max 15MB)</label>
                <input
                  ref={videoFileRef}
                  type="file" accept="video/mp4"
                  onChange={handleVideoFileSelect}
                  className="w-full text-xs text-white/60 bg-white/5 p-2 rounded-xl border border-white/15"
                />
                {uploadingVideo && <p className="text-[10px] text-amber-400 mt-1">Uploading MP4 video file…</p>}
                {newVideoMediaUrl && <p className="text-[10px] text-emerald-400 mt-1">✅ Video uploaded!</p>}
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddVideoModal(false)}
                  className="px-4 py-2 bg-white/10 text-xs font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newVideoThumbUrl || uploadingThumb || uploadingVideo}
                  className="px-4 py-2 bg-[#F59A57] text-black text-xs font-extrabold rounded-xl disabled:opacity-40"
                >
                  Add Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
