"use client";

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

interface CaseStudyItem {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  headline: string;
  metric: string;
  problem: string;
  strategy: string;
  results: string;
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  imageUrl?: string;
  videoUrl?: string;
  isLocked?: boolean;
}

export default function AdminCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudyItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    clientName: '',
    industry: 'Hospitality',
    headline: '',
    metric: '',
    problem: '',
    strategy: '',
    results: '',
    testimonialQuote: '',
    testimonialAuthor: '',
    testimonialRole: 'Owner',
    imageUrl: '',
    videoUrl: '',
  });

  const fetchCaseStudies = async () => {
    try {
      const res = await fetch('/api/case-studies');
      const data = await res.json();
      if (data.success) {
        setCaseStudies(data.data || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const res = await fetch('/api/case-studies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setShowModal(false);
        setFormData({
          clientName: '',
          industry: 'Hospitality',
          headline: '',
          metric: '',
          problem: '',
          strategy: '',
          results: '',
          testimonialQuote: '',
          testimonialAuthor: '',
          testimonialRole: 'Owner',
          imageUrl: '',
          videoUrl: '',
        });
        fetchCaseStudies();
      } else {
        setError(data.message || 'Failed to save case study');
      }
    } catch (err) {
      console.error(err);
      setError('Connection error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, isLocked?: boolean) => {
    if (isLocked) {
      alert('This baseline case study is locked and cannot be deleted.');
      return;
    }

    if (!confirm('Are you sure you want to delete this case study?')) return;

    try {
      const res = await fetch(`/api/case-studies/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok && data.success) {
        fetchCaseStudies();
      } else {
        alert(data.message || 'Failed to delete');
      }
    } catch (e) {
      console.error(e);
      alert('Error deleting case study');
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-display font-black text-2xl uppercase tracking-wider text-white">
              Case Studies Manager
            </h1>
            <p className="text-xs text-white/60">
              Add new dynamic case studies or view existing locked baseline case studies.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            + Add New Case Study
          </button>
        </div>

        {/* List of Case Studies */}
        {loading ? (
          <div className="text-center py-12 text-xs font-mono text-white/50">Loading Case Studies...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.id || cs.slug}
                className={`p-6 rounded-2xl border transition-all ${
                  cs.isLocked
                    ? 'bg-[#141418] border-white/10'
                    : 'bg-[#1a1a22] border-[#F59A57]/30 hover:border-[#F59A57]'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#F59A57] bg-[#F59A57]/10 px-2.5 py-1 rounded-full border border-[#F59A57]/20">
                    {cs.industry}
                  </span>
                  {cs.isLocked ? (
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded flex items-center gap-1 border border-amber-400/20">
                      🔒 Baseline Locked
                    </span>
                  ) : (
                    <button
                      onClick={() => handleDelete(cs.id, cs.isLocked)}
                      className="text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 px-2.5 py-1 rounded border border-red-500/20 transition-colors"
                    >
                      🗑️ Delete
                    </button>
                  )}
                </div>

                <h3 className="font-bold text-base text-white mb-2 leading-tight">
                  {cs.headline}
                </h3>
                <p className="text-xs text-white/70 mb-4 line-clamp-2">{cs.problem}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs">
                  <span className="font-extrabold text-[#F59A57]">{cs.metric}</span>
                  <span className="text-white/50">{cs.clientName}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for Creating New Case Study */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-white my-8 max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  Add New Case Study
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white/60 hover:text-white text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleCreate} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Client / Brand Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Royal Dining Cafe"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Industry Category *</label>
                    <input
                      type="text"
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      placeholder="e.g. Hospitality & Dining"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Headline *</label>
                  <input
                    type="text"
                    required
                    value={formData.headline}
                    onChange={(e) => setFormData({ ...formData, headline: e.target.value })}
                    placeholder="e.g. How Royal Cafe Grew Weekend Bookings by 200%"
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Primary Metric Highlight *</label>
                  <input
                    type="text"
                    required
                    value={formData.metric}
                    onChange={(e) => setFormData({ ...formData, metric: e.target.value })}
                    placeholder="e.g. +200% Booking Increase"
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">The Problem / Challenge *</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    placeholder="Describe the problem before Famebros Studio..."
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Strategy & Execution *</label>
                  <textarea
                    rows={2}
                    required
                    value={formData.strategy}
                    onChange={(e) => setFormData({ ...formData, strategy: e.target.value })}
                    placeholder="Describe the video shoot & marketing strategy implemented..."
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Measurable Results *</label>
                  <input
                    type="text"
                    required
                    value={formData.results}
                    onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                    placeholder="e.g. Generated 1.5M views and filled all weekend tables."
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Client Testimonial Quote</label>
                    <input
                      type="text"
                      value={formData.testimonialQuote}
                      onChange={(e) => setFormData({ ...formData, testimonialQuote: e.target.value })}
                      placeholder="e.g. Famebros Studio transformed our social media!"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Client Author & Role</label>
                    <input
                      type="text"
                      value={formData.testimonialAuthor}
                      onChange={(e) => setFormData({ ...formData, testimonialAuthor: e.target.value })}
                      placeholder="e.g. Vikram Joshi (Owner)"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save Case Study'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
