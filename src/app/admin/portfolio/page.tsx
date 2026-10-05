"use client";

import { useEffect, useState, useRef } from 'react';
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

// Locked baseline videos already embedded in the website
const LOCKED_VIDEOS: PortfolioItem[] = [
  {
    id: 'locked_1', title: 'Restaurant Growth Reel', category: 'Restaurant',
    clientName: 'Rahul Mehta', thumbnailUrl: '/vedios-hero/1st__poster.jpg',
    videoUrl: '/vedios-hero/1st_.mp4', description: 'Restaurant business transformation reel.',
    metricValue: '+240%', metricLabel: 'Revenue', isLocked: true,
  },
  {
    id: 'locked_2', title: 'Retail Business Campaign', category: 'Retail',
    clientName: 'Neha Sharma', thumbnailUrl: '/vedios-hero/2nd_poster.jpg',
    videoUrl: '/vedios-hero/2nd.mp4', description: 'Retail brand enquiry generation campaign.',
    metricValue: '3.2X', metricLabel: 'Enquiries', isLocked: true,
  },
  {
    id: 'locked_3', title: 'Gym Membership Growth', category: 'Fitness',
    clientName: 'Amit Verma', thumbnailUrl: '/vedios-hero/3rd_poster.jpg',
    videoUrl: '/vedios-hero/3rd.mp4', description: 'Gym membership growth through reels.',
    metricValue: '+180%', metricLabel: 'Memberships', isLocked: true,
  },
];

type UploadState = 'idle' | 'uploading' | 'done' | 'error';

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    clientName: '',
    description: '',
    metricLabel: '',
    metricValue: '',
  });

  // Upload state for thumbnail
  const [thumbFile, setThumbFile] = useState<File | null>(null);
  const [thumbPreview, setThumbPreview] = useState('');
  const [thumbUrl, setThumbUrl] = useState('');
  const [thumbState, setThumbState] = useState<UploadState>('idle');

  // Upload state for video
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoName, setVideoName] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [videoState, setVideoState] = useState<UploadState>('idle');
  const [videoProgress, setVideoProgress] = useState('');

  const thumbRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);

  // ── Fetch portfolio items from DB ──────────────────────────────
  const fetchPortfolio = async () => {
    try {
      const res = await fetch('/api/portfolio');
      const data = await res.json();
      if (data.success) setItems(data.data || []);
    } catch { /* silent */ }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchPortfolio(); }, []);

  // ── Handle thumbnail file select & auto-upload ─────────────────
  const handleThumbSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setThumbFile(file);
    setThumbPreview(URL.createObjectURL(file));
    setThumbUrl('');
    setThumbState('uploading');

    const fd = new FormData();
    fd.append('file', file);
    fd.append('type', 'image');
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) { setThumbUrl(json.url); setThumbState('done'); }
      else { setError(json.error || 'Thumbnail upload failed'); setThumbState('error'); }
    } catch { setError('Thumbnail upload failed'); setThumbState('error'); }
  };

  // ── Handle video file select & auto-upload ─────────────────────
  const handleVideoSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setVideoFile(file);
    setVideoName(file.name);
    setVideoUrl('');
    setVideoState('uploading');
    setVideoProgress(`Uploading ${(file.size / 1024 / 1024).toFixed(1)} MB…`);

    const fd = new FormData();
    fd.append('file', file);
    fd.append('type', 'video');
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        setVideoUrl(json.url);
        setVideoState('done');
        setVideoProgress(`✅ ${json.sizeMB} MB uploaded`);
      } else {
        setError(json.error || 'Video upload failed');
        setVideoState('error');
        setVideoProgress('');
      }
    } catch {
      setError('Video upload failed');
      setVideoState('error');
      setVideoProgress('');
    }
  };

  // ── Save form to DB ─────────────────────────────────────────────
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!thumbUrl) { setError('Please upload a thumbnail image'); return; }
    if (!formData.title) { setError('Title is required'); return; }

    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          thumbnailUrl: thumbUrl,
          videoUrl: videoUrl || '',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg('✅ Portfolio item added!');
        resetModal();
        fetchPortfolio();
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        setError(data.message || 'Failed to save');
      }
    } catch { setError('Network error'); }
    finally { setSaving(false); }
  };

  const resetModal = () => {
    setShowModal(false);
    setFormData({ title: '', category: '', clientName: '', description: '', metricLabel: '', metricValue: '' });
    setThumbFile(null); setThumbPreview(''); setThumbUrl(''); setThumbState('idle');
    setVideoFile(null); setVideoName(''); setVideoUrl(''); setVideoState('idle'); setVideoProgress('');
    setError('');
    if (thumbRef.current) thumbRef.current.value = '';
    if (videoRef.current) videoRef.current.value = '';
  };

  const allItems = [...LOCKED_VIDEOS, ...items];

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* ─── Header ────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-display font-black text-2xl uppercase tracking-wider text-white">
              🎬 Portfolio & Videos
            </h1>
            <p className="text-xs text-white/50 mt-1">
              {LOCKED_VIDEOS.length} baseline videos locked · {items.length} added by you
            </p>
          </div>
          <button
            onClick={() => { setShowModal(true); setError(''); }}
            className="px-5 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            + Add New Video
          </button>
        </div>

        {successMsg && (
          <div className="px-4 py-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold">
            {successMsg}
          </div>
        )}

        {/* ─── Videos Grid ───────────────────────────────────────── */}
        {loading ? (
          <div className="text-center py-12 text-xs text-white/40">Loading portfolio…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allItems.map((item) => (
              <div
                key={item.id}
                className={`bg-[#141419] border rounded-2xl overflow-hidden flex flex-col ${
                  item.isLocked ? 'border-white/8 opacity-75' : 'border-[#F59A57]/30'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-black">
                  <img
                    src={item.thumbnailUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/imp-doc/logo.png'; }}
                  />
                  {item.isLocked ? (
                    <span className="absolute top-2 right-2 text-[10px] font-bold text-amber-400 bg-black/80 px-2 py-1 rounded-lg border border-amber-400/30">
                      🔒 Locked
                    </span>
                  ) : (
                    <span className="absolute top-2 right-2 text-[10px] font-bold text-emerald-400 bg-black/80 px-2 py-1 rounded-lg border border-emerald-400/30">
                      ✅ Added
                    </span>
                  )}
                  {item.videoUrl && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] font-bold text-white/60 bg-black/70 px-2 py-0.5 rounded-md">
                      ▶ Video
                    </div>
                  )}
                </div>

                <div className="p-4 flex-grow">
                  <span className="text-[10px] font-bold text-[#F59A57] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-sm text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-white/50 line-clamp-2">{item.description}</p>
                  <div className="mt-3 pt-3 border-t border-white/8 flex justify-between items-center text-xs">
                    <span className="text-white/40">{item.clientName}</span>
                    {item.metricValue && (
                      <span className="font-extrabold text-emerald-400">{item.metricValue}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── Add Video Modal ─────────────────────────────────────── */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center p-4 overflow-y-auto">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-white my-8">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="font-display font-extrabold text-xl uppercase tracking-wider">
                  Add Portfolio Video
                </h2>
                <button onClick={resetModal} className="text-white/50 hover:text-white text-xl font-bold">✕</button>
              </div>

              {error && (
                <div className="mb-4 px-4 py-3 bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleCreate} className="space-y-5">

                {/* Title + Category */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Title *</label>
                    <input
                      type="text" required value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Salon Transformation Reel"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Category *</label>
                    <input
                      type="text" required value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g. Salon, Jewellery"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                {/* Client Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Client Name *</label>
                  <input
                    type="text" required value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="e.g. Glamour Studio"
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                {/* Thumbnail Upload */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">
                    Thumbnail Image * <span className="text-white/30 normal-case font-normal">(max 5 MB)</span>
                  </label>
                  <div
                    onClick={() => thumbRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                      thumbState === 'done'
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : 'border-white/20 hover:border-[#F59A57]/50'
                    }`}
                  >
                    {thumbPreview ? (
                      <div className="flex items-center gap-4">
                        <img src={thumbPreview} alt="thumb" className="h-16 w-24 object-cover rounded-lg" />
                        <div className="text-left">
                          <p className="text-xs font-bold text-white">{thumbFile?.name}</p>
                          {thumbState === 'uploading' && <p className="text-xs text-amber-400 flex items-center gap-1.5 mt-1"><span className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />Uploading…</p>}
                          {thumbState === 'done' && <p className="text-xs text-emerald-400 mt-1">✅ Uploaded</p>}
                          {thumbState === 'error' && <p className="text-xs text-red-400 mt-1">❌ Failed</p>}
                        </div>
                      </div>
                    ) : (
                      <div className="py-3">
                        <p className="text-2xl mb-1">🖼️</p>
                        <p className="text-xs font-bold text-white/60">Click to upload thumbnail</p>
                        <p className="text-[10px] text-white/30">PNG, JPG, WebP</p>
                      </div>
                    )}
                  </div>
                  <input ref={thumbRef} type="file" accept="image/*" onChange={handleThumbSelect} className="hidden" />
                </div>

                {/* Video Upload */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">
                    Video File <span className="text-white/30 normal-case font-normal">(MP4 · max 15 MB)</span>
                  </label>
                  <div
                    onClick={() => videoRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                      videoState === 'done'
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : videoState === 'uploading'
                        ? 'border-amber-400/50 bg-amber-400/5'
                        : 'border-white/20 hover:border-[#F59A57]/50'
                    }`}
                  >
                    {videoName ? (
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🎬</span>
                        <div className="text-left">
                          <p className="text-xs font-bold text-white truncate max-w-[240px]">{videoName}</p>
                          {videoProgress && (
                            <p className={`text-xs mt-1 flex items-center gap-1.5 ${
                              videoState === 'uploading' ? 'text-amber-400' :
                              videoState === 'done' ? 'text-emerald-400' : 'text-red-400'
                            }`}>
                              {videoState === 'uploading' && <span className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />}
                              {videoProgress}
                            </p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="py-3">
                        <p className="text-2xl mb-1">🎬</p>
                        <p className="text-xs font-bold text-white/60">Click to upload video</p>
                        <p className="text-[10px] text-white/30">MP4 only · max 15 MB</p>
                      </div>
                    )}
                  </div>
                  <input ref={videoRef} type="file" accept="video/mp4,video/webm" onChange={handleVideoSelect} className="hidden" />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Description</label>
                  <textarea
                    rows={2} value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description of the shoot…"
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57] resize-none"
                  />
                </div>

                {/* Metric */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Metric Label</label>
                    <input
                      type="text" value={formData.metricLabel}
                      onChange={(e) => setFormData({ ...formData, metricLabel: e.target.value })}
                      placeholder="e.g. Revenue"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Metric Value</label>
                    <input
                      type="text" value={formData.metricValue}
                      onChange={(e) => setFormData({ ...formData, metricValue: e.target.value })}
                      placeholder="e.g. +240%"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                  <button type="button" onClick={resetModal}
                    className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm text-white transition-colors">
                    Cancel
                  </button>
                  <button type="submit" disabled={saving || thumbState === 'uploading' || videoState === 'uploading'}
                    className="px-6 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-sm rounded-xl hover:scale-105 transition-all shadow-lg disabled:opacity-40 disabled:scale-100">
                    {saving ? 'Saving…' : '+ Add Video'}
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
