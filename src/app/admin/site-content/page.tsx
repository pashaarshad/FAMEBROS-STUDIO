"use client";

import { useEffect, useState, useCallback } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { SITE_CONTENT_DEFAULTS } from '@/lib/siteContentDefaults';

// Human-readable section labels
const SECTION_META: Record<string, { label: string; emoji: string }> = {
  navbar:              { label: 'Navigation Bar',       emoji: '🔗' },
  hero:                { label: 'Hero Section',         emoji: '🏠' },
  about:               { label: 'About Section',        emoji: 'ℹ️' },
  why_choose_us:       { label: 'Why Choose Us',        emoji: '⭐' },
  why_we_exist:        { label: 'Why We Exist',         emoji: '💡' },
  branding_comparison: { label: 'Branding Comparison',  emoji: '⚖️' },
  organic_growth:      { label: 'Organic Growth',       emoji: '🌱' },
  how_it_works:        { label: 'How It Works',         emoji: '⚙️' },
  storytelling:        { label: 'Storytelling',         emoji: '📖' },
  ecosystem:           { label: 'Ecosystem',            emoji: '🔄' },
  founder:             { label: 'Founders Section',     emoji: '👤' },
  faq:                 { label: 'FAQ Section',          emoji: '❓' },
  contact:             { label: 'Contact Section',      emoji: '📞' },
  footer:              { label: 'Footer',               emoji: '📄' },
  influencer:          { label: 'Influencer Page',      emoji: '🤳' },
};

// Keys that should use <textarea> instead of single-line input
const TEXTAREA_KEYS = new Set([
  'body', 'subheadline', 'bio', 'tagline', 'copyright',
  'a1', 'a2', 'a3', 'a4', 'a5',
  'founder_1_bio', 'founder_2_bio',
  'reason_1_body', 'reason_2_body', 'reason_3_body', 'reason_4_body',
  'step_1_body', 'step_2_body', 'step_3_body', 'step_4_body', 'step_5_body',
  'compare_1_new', 'compare_1_old', 'compare_2_new', 'compare_2_old',
  'compare_3_new', 'compare_3_old', 'compare_4_new', 'compare_4_old',
]);

export default function SiteContentAdminPage() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [sectionData, setSectionData] = useState<Record<string, string>>({});
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const sections = Object.keys(SITE_CONTENT_DEFAULTS);

  const loadSection = useCallback(async (section: string) => {
    setLoading(true);
    setSaveMsg('');
    try {
      const res = await fetch(`/api/site-content?section=${section}`);
      const json = await res.json();
      const data: Record<string, string> = json.data || {};
      setSectionData(data);
      setEditValues({ ...data });
    } catch {
      // fallback to defaults
      const defaults = SITE_CONTENT_DEFAULTS[section] || {};
      setSectionData(defaults);
      setEditValues({ ...defaults });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSection(activeSection);
  }, [activeSection, loadSection]);

  const handleChange = (key: string, value: string) => {
    setEditValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg('');
    try {
      const res = await fetch('/api/site-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section: activeSection, updates: editValues }),
      });
      const json = await res.json();
      if (json.success) {
        setSaveMsg('✅ Saved successfully!');
        setSectionData({ ...editValues });
      } else {
        setSaveMsg('❌ Save failed: ' + (json.error || 'Unknown error'));
      }
    } catch {
      setSaveMsg('❌ Network error. Please try again.');
    } finally {
      setSaving(false);
      setTimeout(() => setSaveMsg(''), 4000);
    }
  };

  const handleReset = () => {
    const defaults = SITE_CONTENT_DEFAULTS[activeSection] || {};
    setEditValues({ ...defaults });
    setSaveMsg('');
  };

  const isDirty = JSON.stringify(editValues) !== JSON.stringify(sectionData);
  const meta = SECTION_META[activeSection] || { label: activeSection, emoji: '📝' };

  // Helper: human label from key
  const keyLabel = (key: string) =>
    key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <AdminLayout>
      <div className="flex gap-6 min-h-[600px]">
        {/* ─── SIDEBAR ─────────────────────────────────────────── */}
        <aside className="w-56 shrink-0 hidden md:block">
          <div className="bg-[#141419] border border-white/10 rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                Sections
              </p>
            </div>
            <nav className="py-2">
              {sections.map((sec) => {
                const m = SECTION_META[sec] || { label: sec, emoji: '📝' };
                return (
                  <button
                    key={sec}
                    onClick={() => setActiveSection(sec)}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold flex items-center gap-2 transition-all ${
                      activeSection === sec
                        ? 'bg-[#F59A57] text-black'
                        : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{m.emoji}</span>
                    <span>{m.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* ─── MOBILE SECTION PICKER ───────────────────────────── */}
        <div className="md:hidden mb-4 w-full">
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
            className="w-full bg-[#141419] border border-white/20 text-white text-sm rounded-xl px-4 py-3"
          >
            {sections.map((sec) => {
              const m = SECTION_META[sec] || { label: sec, emoji: '📝' };
              return (
                <option key={sec} value={sec}>
                  {m.emoji} {m.label}
                </option>
              );
            })}
          </select>
        </div>

        {/* ─── EDITOR PANEL ────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h1 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-white">
                {meta.emoji} {meta.label}
              </h1>
              <p className="text-xs text-white/50 mt-0.5">
                Edit the text content shown in this section on the website.
              </p>
            </div>
            <div className="flex items-center gap-2">
              {isDirty && (
                <button
                  onClick={handleReset}
                  className="text-xs px-3 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-all"
                >
                  Reset to Default
                </button>
              )}
              <button
                onClick={handleSave}
                disabled={saving || !isDirty}
                className={`text-xs font-bold px-5 py-2.5 rounded-xl transition-all ${
                  isDirty && !saving
                    ? 'bg-[#F59A57] text-black hover:bg-[#e88a45]'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>

          {/* Save message */}
          {saveMsg && (
            <div
              className={`mb-4 px-4 py-3 rounded-xl text-xs font-bold ${
                saveMsg.startsWith('✅')
                  ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/15 border border-red-500/30 text-red-400'
              }`}
            >
              {saveMsg}
            </div>
          )}

          {/* Content Fields */}
          {loading ? (
            <div className="flex items-center gap-3 text-sm text-[#F59A57] py-12">
              <span className="w-4 h-4 rounded-full border-2 border-[#F59A57] border-t-transparent animate-spin" />
              Loading section content...
            </div>
          ) : (
            <div className="space-y-5">
              {Object.keys(SITE_CONTENT_DEFAULTS[activeSection] || {}).map((key) => {
                const isTextarea = TEXTAREA_KEYS.has(key);
                const value = editValues[key] ?? '';
                return (
                  <div key={key} className="bg-[#141419] border border-white/10 rounded-2xl p-5">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-2">
                      {keyLabel(key)}
                    </label>
                    {isTextarea ? (
                      <textarea
                        rows={3}
                        value={value}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F59A57] resize-y transition-colors"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="w-full bg-[#0A0A0C] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#F59A57] transition-colors"
                      />
                    )}
                    {/* Show default hint if value has changed */}
                    {value !== (SITE_CONTENT_DEFAULTS[activeSection]?.[key] ?? '') && (
                      <p className="mt-1.5 text-[10px] text-amber-400/70">
                        ✏️ Modified — default: &ldquo;
                        {(SITE_CONTENT_DEFAULTS[activeSection]?.[key] ?? '').slice(0, 80)}
                        {(SITE_CONTENT_DEFAULTS[activeSection]?.[key] ?? '').length > 80 ? '…' : ''}
                        &rdquo;
                      </p>
                    )}
                  </div>
                );
              })}

              {/* Sticky Save */}
              <div className="sticky bottom-6 z-10 flex justify-end pt-2">
                <button
                  onClick={handleSave}
                  disabled={saving || !isDirty}
                  className={`text-sm font-extrabold px-8 py-3.5 rounded-2xl shadow-2xl transition-all ${
                    isDirty && !saving
                      ? 'bg-[#F59A57] text-black hover:bg-[#e88a45] shadow-[#F59A57]/30'
                      : 'bg-white/10 text-white/40 cursor-not-allowed'
                  }`}
                >
                  {saving ? '⏳ Saving...' : '💾 Save Changes'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
