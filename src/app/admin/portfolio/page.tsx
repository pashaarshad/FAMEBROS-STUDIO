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
  sections?: string[];
  isLocked?: boolean;
}

// Locked baseline videos already embedded in the website
const LOCKED_VIDEOS: PortfolioItem[] = [
  {
    id: 'locked_1', title: 'Restaurant Growth Reel', category: 'Restaurant',
    clientName: 'Rahul Mehta', thumbnailUrl: '/vedios-hero/1st__poster.jpg',
    videoUrl: '/vedios-hero/1st_.mp4', description: 'Restaurant business transformation reel.',
    metricValue: '+240%', metricLabel: 'Revenue', sections: ['what-our-clients-say', 'work'], isLocked: true,
  },
  {
    id: 'locked_2', title: 'Retail Business Campaign', category: 'Retail',
    clientName: 'Neha Sharma', thumbnailUrl: '/vedios-hero/2nd_poster.jpg',
    videoUrl: '/vedios-hero/2nd.mp4', description: 'Retail brand enquiry generation campaign.',
    metricValue: '3.2X', metricLabel: 'Enquiries', sections: ['what-our-clients-say', 'work'], isLocked: true,
  },
  {
    id: 'locked_3', title: 'Gym Membership Growth', category: 'Fitness',
    clientName: 'Amit Verma', thumbnailUrl: '/vedios-hero/3rd_poster.jpg',
    videoUrl: '/vedios-hero/3rd.mp4', description: 'Gym membership growth through reels.',
    metricValue: '+180%', metricLabel: 'Memberships', sections: ['what-our-clients-say', 'work'], isLocked: true,
  },
];

const AVAILABLE_SECTIONS = [
  { id: 'what-our-clients-say', label: 'What Our Clients Say (Testimonials)' },
  { id: 'work', label: 'Work & Portfolio Showcase' },
  { id: 'hero', label: 'Hero Production Banner' },
];

type UploadState = 'idle' | 'uploading' | 'done' | 'error';

export default function AdminPortfolioPage() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<PortfolioItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Client Testimonial',
    clientName: '',
    description: '',
    metricLabel: 'Growth Result',
    metricValue: '',
  });

  const [selectedSections, setSelectedSections] = useState<string[]>(['what-our-clients-say', 'work']);

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

  // ── Handle section toggle in form ───────────────────────────────
  const toggleFormSection = (secId: string) => {
    setSelectedSections((prev) =>
      prev.includes(secId) ? prev.filter((s) => s !== secId) : [...prev, secId]
    );
  };

  // ── Handle section toggle on existing card in real-time ──────────
  const toggleCardSection = async (item: PortfolioItem, secId: string) => {
    if (item.isLocked) {
      alert('Baseline videos are locked and pre-assigned.');
      return;
    }

    const currentSecs = item.sections || ['what-our-clients-say', 'work'];
    const newSecs = currentSecs.includes(secId)
      ? currentSecs.filter((s) => s !== secId)
      : [...currentSecs, secId];

    try {
      const res = await fetch(`/api/portfolio/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sections: newSecs }),
      });
      const data = await res.json();
      if (data.success) {
        fetchPortfolio();
      }
    } catch (e) {
      console.error('Failed to update sections:', e);
    }
  };

  const handleDelete = async (id: string, isLocked?: boolean) => {
    if (isLocked) {
      alert('Baseline videos are locked and cannot be deleted.');
      return;
    }
    if (!confirm('Are you sure you want to delete this video?')) return;

    try {
      const res = await fetch(`/api/portfolio/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (res.ok && data.success) fetchPortfolio();
      else alert(data.message || 'Failed to delete');
    } catch (e) {
      console.error(e);
      alert('Error deleting video');
    }
  };

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
          sections: selectedSections,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg('✅ Video added and assigned to selected sections!');
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
    setFormData({ title: '', category: 'Client Testimonial', clientName: '', description: '', metricLabel: 'Growth Result', metricValue: '' });
    setSelectedSections(['what-our-clients-say', 'work']);
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
              🎬 Portfolio & Videos Manager
            </h1>
            <p className="text-xs text-white/60 mt-1">
              Upload videos, assign them to website sections (e.g. &quot;What Our Clients Say&quot;), and click to play &amp; verify.
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
          <div className="text-center py-12 text-xs text-white/40">Loading portfolio &amp; video data…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allItems.map((item) => {
              const activeSecs = item.sections || ['what-our-clients-say', 'work'];

              return (
                <div
                  key={item.id}
                  className={`bg-[#141419] border rounded-2xl overflow-hidden flex flex-col transition-all hover:border-[#F59A57]/60 ${
                    item.isLocked ? 'border-white/10 opacity-90' : 'border-[#F59A57]/30'
                  }`}
                >
                  {/* Thumbnail & Interactive Video Play Overlay */}
                  <div
                    onClick={() => {
                      if (item.videoUrl) setPlayingVideo(item);
                    }}
                    className="relative aspect-video bg-black cursor-pointer group overflow-hidden"
                  >
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/imp-doc/logo.png'; }}
                    />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                      <div className="w-12 h-12 rounded-full bg-[#F59A57] text-black flex items-center justify-center font-bold text-lg shadow-xl group-hover:scale-110 transition-transform pl-0.5">
                        ▶
                      </div>
                    </div>

                    <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/80 px-2.5 py-1 rounded-md border border-white/20">
                      Click to Play Video
                    </span>

                    {item.isLocked ? (
                      <span className="absolute top-2 right-2 text-[10px] font-bold text-amber-400 bg-black/80 px-2 py-1 rounded-lg border border-amber-400/30">
                        🔒 Baseline Locked
                      </span>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item.id, item.isLocked);
                        }}
                        className="absolute top-2 right-2 text-[10px] font-bold text-red-400 bg-black/80 hover:bg-red-500 hover:text-white px-2 py-1 rounded-lg border border-red-500/30 transition-colors"
                      >
                        🗑️ Delete
                      </button>
                    )}
                  </div>

                  {/* Card Content & Section Tick-Boxes */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-extrabold text-[#F59A57] uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold text-white/50">
                          {item.clientName}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-white mb-1 leading-tight">{item.title}</h3>
                      <p className="text-xs text-white/60 mb-4 line-clamp-2">{item.description}</p>
                    </div>

                    {/* Section Assignment Checkboxes / Pills */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block">
                        Assigned Website Sections (Click to toggle):
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {AVAILABLE_SECTIONS.map((sec) => {
                          const isAssigned = activeSecs.includes(sec.id);
                          return (
                            <button
                              key={sec.id}
                              type="button"
                              onClick={() => toggleCardSection(item, sec.id)}
                              className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1 ${
                                isAssigned
                                  ? 'bg-[#F59A57]/20 border-[#F59A57] text-[#F59A57]'
                                  : 'bg-white/5 border-white/10 text-white/40 hover:text-white'
                              }`}
                            >
                              <span>{isAssigned ? '✓' : '+'}</span>
                              <span>{sec.id === 'what-our-clients-say' ? 'What Our Clients Say' : sec.id === 'work' ? 'Portfolio Work' : 'Hero Banner'}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ─── Video Player Modal ─────────────────────────────────── */}
        {playingVideo && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#14141a] border border-white/20 rounded-3xl p-6 max-w-2xl w-full text-white relative shadow-2xl">
              <button
                onClick={() => setPlayingVideo(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold z-30"
              >
                ✕
              </button>

              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F59A57] bg-[#F59A57]/10 px-2.5 py-1 rounded-full border border-[#F59A57]/20">
                  {playingVideo.category} • {playingVideo.clientName}
                </span>
                <h2 className="font-display font-extrabold text-xl text-white mt-2">
                  {playingVideo.title}
                </h2>
              </div>

              <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-4 relative border border-white/10 shadow-inner">
                {playingVideo.videoUrl ? (
                  <video
                    src={playingVideo.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/50 text-xs">
                    <p className="text-2xl mb-2">⚠️</p>
                    No video file URL attached. Poster thumbnail only.
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-white/70">
                <p className="line-clamp-2">{playingVideo.description}</p>
                <button
                  onClick={() => setPlayingVideo(null)}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs whitespace-nowrap ml-4"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── Add Video Modal ─────────────────────────────────────── */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center p-4 overflow-y-auto">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-white my-8">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="font-display font-extrabold text-xl uppercase tracking-wider">
                  Add New Video to Website
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
                      placeholder="e.g. Salon, Jewellery, Dining"
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
                    placeholder="e.g. Ali Salon"
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                {/* Section Placement Selection (Checkboxes) */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57]">
                    Select Website Section Placement *
                  </label>
                  <p className="text-xs text-white/50 mb-3">
                    Tick the section(s) where this video should automatically appear:
                  </p>

                  <div className="space-y-2">
                    {AVAILABLE_SECTIONS.map((sec) => (
                      <label
                        key={sec.id}
                        onClick={() => toggleFormSection(sec.id)}
                        className="flex items-center gap-3 p-2.5 rounded-xl border border-white/10 hover:border-[#F59A57]/50 cursor-pointer bg-white/5 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSections.includes(sec.id)}
                          onChange={() => {}} // Handled by label click
                          className="w-4 h-4 accent-[#F59A57] rounded cursor-pointer"
                        />
                        <span className="text-xs font-bold text-white">{sec.label}</span>
                      </label>
                    ))}
                  </div>
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
                    placeholder="Brief description of the client video…"
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
                      placeholder="e.g. Growth Result"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Metric Value</label>
                    <input
                      type="text" value={formData.metricValue}
                      onChange={(e) => setFormData({ ...formData, metricValue: e.target.value })}
                      placeholder="e.g. +240% or 10X Inquiries"
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
