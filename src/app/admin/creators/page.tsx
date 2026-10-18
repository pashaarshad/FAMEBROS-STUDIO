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
  const [editingItem, setEditingItem] = useState<CreatorItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

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

  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      name: '',
      handle: '',
      niche: 'Fashion & Lifestyle',
      followerCount: '150K',
      avatarUrl: '/professional photos for profile picture.jpg.jpeg',
      platform: 'Instagram',
      location: 'Mumbai',
    });
    setError('');
    setShowModal(true);
  };

  const openEditModal = (c: CreatorItem) => {
    setEditingItem(c);
    setFormData({
      name: c.name || '',
      handle: c.handle || '',
      niche: c.niche || 'Fashion & Lifestyle',
      followerCount: c.followerCount || '150K',
      avatarUrl: c.avatarUrl || '/professional photos for profile picture.jpg.jpeg',
      platform: c.platform || 'Instagram',
      location: c.location || 'Mumbai',
    });
    setError('');
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const url = editingItem ? `/api/creators/${editingItem.id}` : '/api/creators';
      const method = editingItem ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setShowModal(false);
        setEditingItem(null);
        setSuccessMsg(editingItem ? '✅ Creator profile updated!' : '✅ Creator profile added!');
        fetchCreators();
        setTimeout(() => setSuccessMsg(''), 3000);
      } else {
        setError(data.message || 'Failed to save creator');
      }
    } catch (err) {
      console.error(err);
      setError('Connection error');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}" from creator network?`)) return;

    try {
      const res = await fetch(`/api/creators/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(`✅ "${name}" removed.`);
        fetchCreators();
        setTimeout(() => setSuccessMsg(''), 3000);
      } else {
        alert(data.message || 'Failed to delete');
      }
    } catch (e) {
      console.error(e);
      alert('Error deleting creator');
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
              Full CMS Control — Add, edit, or remove influencer and creator profiles ({creators.length} total).
            </p>
          </div>

          <button
            onClick={openCreateModal}
            className="px-5 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            + Add Creator Profile
          </button>
        </div>

        {successMsg && (
          <div className="px-4 py-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold">
            {successMsg}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-xs font-mono text-white/50">Loading Creator Network...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators.map((c) => (
              <div
                key={c.id}
                className="p-5 bg-[#141419] border border-white/10 hover:border-[#F59A57]/50 rounded-2xl flex flex-col justify-between gap-4 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={c.avatarUrl}
                      alt={c.name}
                      className="w-12 h-12 rounded-full object-cover border border-white/20"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/imp-doc/logo.png'; }}
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

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={() => openEditModal(c)}
                    className="text-xs text-[#F59A57] hover:text-[#FFAE70] bg-[#F59A57]/10 hover:bg-[#F59A57]/20 px-2.5 py-1 rounded border border-[#F59A57]/20 transition-colors font-semibold"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(c.id, c.name)}
                    className="text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 px-2.5 py-1 rounded border border-red-500/20 transition-colors font-semibold"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for adding/editing creator */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white my-8">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="font-display font-extrabold text-xl uppercase tracking-wider text-white">
                  {editingItem ? 'Edit Creator Profile' : 'Add Creator Profile'}
                </h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setEditingItem(null);
                  }}
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

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
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
                    onClick={() => {
                      setShowModal(false);
                      setEditingItem(null);
                    }}
                    className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : editingItem ? 'Save Changes' : 'Add Creator Profile'}
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
