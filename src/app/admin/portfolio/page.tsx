"use client";

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

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

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    category: 'Restaurant',
    clientName: '',
    thumbnailUrl: '',
    videoUrl: '',
    description: '',
    metricLabel: 'Revenue',
    metricValue: '+150%',
  });

  const fetchPortfolio = async () => {
    try {
      const res = await fetch('/api/portfolio');
      const data = await res.json();
      if (data.success) {
        setItems(data.data || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setShowModal(false);
        setFormData({
          title: '',
          category: 'Restaurant',
          clientName: '',
          thumbnailUrl: '',
          videoUrl: '',
          description: '',
          metricLabel: 'Revenue',
          metricValue: '+150%',
        });
        fetchPortfolio();
      } else {
        setError(data.message || 'Failed to add portfolio item');
      }
    } catch (err) {
      console.error(err);
      setError('Connection error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-display font-black text-2xl uppercase tracking-wider text-white">
              Portfolio & Shoot Media Manager
            </h1>
            <p className="text-xs text-white/60">
              Manage shoot videos, product photography, reels, and brand media.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            + Add Shoot Media
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-xs font-mono text-white/50">Loading Portfolio Media...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#141419] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-video bg-black">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {item.isLocked && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold text-amber-400 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded border border-amber-400/30">
                      🔒 Baseline
                    </span>
                  )}
                </div>

                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#F59A57] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-sm text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/60 line-clamp-2">{item.description}</p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center text-xs">
                    <span className="text-white/50">{item.clientName}</span>
                    {item.metricValue && (
                      <span className="font-extrabold text-emerald-400">{item.metricValue}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for adding new shoot media */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white my-8">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  Add Shoot Media
                </h2>
                <button onClick={() => setShowModal(false)} className="text-white/60 hover:text-white text-lg font-bold">
                  ✕
                </button>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleCreate} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold mb-1 text-white/80">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Salon Transformation Reel"
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Category *</label>
                    <input
                      type="text"
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g. Salon / Resort"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Client Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Glamour Studio"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Thumbnail Image URL *</label>
                  <input
                    type="text"
                    required
                    value={formData.thumbnailUrl}
                    onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                    placeholder="e.g. /vedios-hero/1st__poster.jpg"
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Video URL (MP4 / Link)</label>
                  <input
                    type="text"
                    value={formData.videoUrl}
                    onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                    placeholder="e.g. /vedios-hero/1st_.mp4"
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Description</label>
                  <textarea
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description of the shoot..."
                    className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                  />
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
                    {saving ? 'Saving...' : 'Add Shoot Media'}
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
