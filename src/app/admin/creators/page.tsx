"use client";

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

interface CreatorItem {
  id: string;
  name: string;
  handle: string;
  niche: string;
  followerCount: string;
  avatarUrl: string;
  platform?: string;
  location?: string;
  isLocked?: boolean;
}

export default function AdminCreatorsPage() {
  const [creators, setCreators] = useState<CreatorItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    handle: '',
    niche: 'Fashion & Lifestyle',
    followerCount: '150K',
    avatarUrl: '/professional photos for profile picture.jpg.jpeg',
    platform: 'Instagram',
    location: 'Mumbai',
  });

  const fetchCreators = async () => {
    try {
      const res = await fetch('/api/creators');
      const data = await res.json();
      if (data.success) {
        setCreators(data.data || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCreators();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const res = await fetch('/api/creators', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setShowModal(false);
        setFormData({
          name: '',
          handle: '',
          niche: 'Fashion & Lifestyle',
          followerCount: '150K',
          avatarUrl: '/professional photos for profile picture.jpg.jpeg',
          platform: 'Instagram',
          location: 'Mumbai',
        });
        fetchCreators();
      } else {
        setError(data.message || 'Failed to add creator');
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
              Creator Network Manager
            </h1>
            <p className="text-xs text-white/60">
              Manage influencers, bloggers, creators, and celebrity partners.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            + Add Creator Profile
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-xs font-mono text-white/50">Loading Creator Network...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((c) => (
              <div
                key={c.id}
                className="p-5 bg-[#141419] border border-white/10 rounded-2xl flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={c.avatarUrl}
                    alt={c.name}
                    className="w-14 h-14 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-white">{c.name}</h3>
                    <p className="text-xs text-[#F59A57] font-semibold">{c.handle}</p>
                    <p className="text-[11px] text-white/50">{c.niche} &bull; {c.location || 'Mumbai'}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-display font-extrabold text-base text-white block">
                    {c.followerCount}
                  </span>
                  <span className="text-[10px] text-white/40 uppercase font-mono">Followers</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for adding new creator */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white my-8">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  Add Creator Profile
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Creator Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Roy"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Instagram Handle *</label>
                    <input
                      type="text"
                      required
                      value={formData.handle}
                      onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                      placeholder="e.g. @ananyastyle"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Niche Category *</label>
                    <input
                      type="text"
                      required
                      value={formData.niche}
                      onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                      placeholder="e.g. Food & Dining / Lifestyle"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1 text-white/80">Follower Count *</label>
                    <input
                      type="text"
                      required
                      value={formData.followerCount}
                      onChange={(e) => setFormData({ ...formData, followerCount: e.target.value })}
                      placeholder="e.g. 250K"
                      className="w-full p-3 bg-white/5 border border-white/15 rounded-xl text-white focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-1 text-white/80">Avatar Image URL *</label>
                  <input
                    type="text"
                    required
                    value={formData.avatarUrl}
                    onChange={(e) => setFormData({ ...formData, avatarUrl: e.target.value })}
                    placeholder="e.g. /professional photos for profile picture.jpg.jpeg"
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
                    {saving ? 'Saving...' : 'Add Creator Profile'}
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
