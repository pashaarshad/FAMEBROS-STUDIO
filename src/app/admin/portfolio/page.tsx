"use client";

import { useEffect, useState, useRef } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { ALL_CODE_VIDEOS } from '@/lib/portfolioConstants';

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
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [playingVideo, setPlayingVideo] = useState<PortfolioItem | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Emergency PIN Dialog state (PIN: 6565)
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [pinTarget, setPinTarget] = useState<'single' | 'all'>('single');
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [pinLoading, setPinLoading] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Client Testimonial',
    clientName: '',
    description: '',
    metricLabel: 'Growth Result',
    metricValue: '',
    videoUrl: '',
    thumbnailUrl: '',
  });

  const [selectedSections, setSelectedSections] = useState<string[]>(['what-our-clients-say', 'work']);

  // Upload state for thumbnail only (video upload is locked)
  const [thumbFile, setThumbFile] = useState<File | null>(null);
  const [thumbPreview, setThumbPreview] = useState('');
  const [thumbUrl, setThumbUrl] = useState('');
  const [thumbState, setThumbState] = useState<UploadState>('idle');

  const thumbRef = useRef<HTMLInputElement>(null);

  // ── Fetch portfolio items from DB with deduplication ───────────
  const fetchPortfolio = async () => {
    try {
      const res = await fetch('/api/portfolio');
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        // Strict deduplication by videoUrl so each video only appears once
        const seen = new Set<string>();
        const unique = data.data.filter((item: PortfolioItem) => {
          const key = item.videoUrl ? item.videoUrl.trim() : item.id;
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        setItems(unique);
      }
    } catch { /* silent */ }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchPortfolio(); }, []);

  // ── Handle Emergency Reset with PIN 6565 ──────────────────────
  const openResetSingleModal = () => {
    setPinTarget('single');
    setPinInput('');
    setPinError('');
    setPinModalOpen(true);
  };

  const openResetAllModal = () => {
    setPinTarget('all');
    setPinInput('');
    setPinError('');
    setPinModalOpen(true);
  };

  const handleConfirmPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() !== '6565') {
      setPinError('❌ Incorrect Emergency PIN. Please enter 6565.');
      return;
    }

    setPinLoading(true);
    setPinError('');

    try {
      if (pinTarget === 'single') {
        const targetVideoUrl = editingItem?.videoUrl || formData.videoUrl;
        const res = await fetch('/api/portfolio/reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pin: '6565', videoUrl: targetVideoUrl }),
        });
        const data = await res.json();

        if (data.success) {
          const defaultData = ALL_CODE_VIDEOS.find((v) => v.videoUrl === targetVideoUrl);
          if (defaultData) {
            setFormData({
              title: defaultData.title,
              category: defaultData.category,
              clientName: defaultData.clientName,
              description: defaultData.description,
              metricLabel: defaultData.metricLabel,
              metricValue: defaultData.metricValue,
              videoUrl: defaultData.videoUrl,
              thumbnailUrl: defaultData.thumbnailUrl,
            });
            setSelectedSections(defaultData.sections || ['what-our-clients-say', 'work']);
            setThumbPreview(defaultData.thumbnailUrl);
            setThumbUrl(defaultData.thumbnailUrl);
            setThumbState('done');
          }
          setSuccessMsg(`✅ "${defaultData?.title || 'Video'}" restored to default content!`);
          setPinModalOpen(false);
          fetchPortfolio();
          setTimeout(() => setSuccessMsg(''), 4000);
        } else {
          setPinError(data.message || 'Failed to restore default content');
        }
      } else {
        const res = await fetch('/api/portfolio/reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pin: '6565' }),
        });
        const data = await res.json();

        if (data.success) {
          setSuccessMsg('✅ All 18 portfolio items restored to pristine defaults!');
          setPinModalOpen(false);
          setShowModal(false);
          fetchPortfolio();
          setTimeout(() => setSuccessMsg(''), 4000);
        } else {
          setPinError(data.message || 'Failed to reset all items');
        }
      }
    } catch {
      setPinError('Connection error contacting server');
    } finally {
      setPinLoading(false);
    }
  };

  // ── Handle open modal ──────────────────────────────────────────
  const openCreateModal = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Client Testimonial',
      clientName: '',
      description: '',
      metricLabel: 'Growth Result',
      metricValue: '',
      videoUrl: items[0]?.videoUrl || '/vedios/business client testimonial/Video-60156.mp4',
      thumbnailUrl: items[0]?.thumbnailUrl || '/vedios/business client testimonial/Video-60156_poster.jpg',
    });
    setSelectedSections(['what-our-clients-say', 'work']);
    setThumbFile(null);
    setThumbPreview('');
    setThumbUrl('');
    setThumbState('idle');
    setError('');
    setShowModal(true);
  };

  const openEditModal = (item: PortfolioItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      category: item.category || 'Client Testimonial',
      clientName: item.clientName || '',
      description: item.description || '',
      metricLabel: item.metricLabel || 'Growth Result',
      metricValue: item.metricValue || '',
      videoUrl: item.videoUrl || '',
      thumbnailUrl: item.thumbnailUrl || '',
    });
    setSelectedSections(item.sections || ['what-our-clients-say', 'work']);
    setThumbFile(null);
    setThumbPreview(item.thumbnailUrl || '');
    setThumbUrl(item.thumbnailUrl || '');
    setThumbState(item.thumbnailUrl ? 'done' : 'idle');
    setError('');
    setShowModal(true);
  };

  // ── Handle section toggle in form ───────────────────────────────
  const toggleFormSection = (secId: string) => {
    setSelectedSections((prev) =>
      prev.includes(secId) ? prev.filter((s) => s !== secId) : [...prev, secId]
    );
  };

  // ── Handle section toggle on existing card in real-time ──────────
  const toggleCardSection = async (item: PortfolioItem, secId: string) => {
    const currentSecs = item.sections || ['what-our-clients-say', 'work'];
    const newSecs = currentSecs.includes(secId)
      ? currentSecs.filter((s) => s !== secId)
      : [...currentSecs, secId];

    try {
      const res = await fetch(`/api/portfolio/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...item,
          sections: newSecs,
        }),
      });
      const data = await res.json();
      if (data.success) {
        fetchPortfolio();
      }
    } catch (e) {
      console.error('Failed to update sections:', e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this video item?')) return;

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

  // ── Save form to DB (Create or Update textual info) ────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) { setError('Title is required'); return; }

    setSaving(true);
    setError('');
    try {
      const url = editingItem ? `/api/portfolio/${editingItem.id}` : '/api/portfolio';
      const method = editingItem ? 'PUT' : 'POST';

      const finalThumb = thumbUrl || formData.thumbnailUrl || editingItem?.thumbnailUrl || '/vedios-hero/1st__poster.jpg';
      const finalVideo = formData.videoUrl || editingItem?.videoUrl || '';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          category: formData.category,
          clientName: formData.clientName,
          description: formData.description,
          metricLabel: formData.metricLabel,
          metricValue: formData.metricValue,
          thumbnailUrl: finalThumb,
          videoUrl: finalVideo,
          sections: selectedSections,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(editingItem ? '✅ Video details updated successfully!' : '✅ Video entry created!');
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
    setEditingItem(null);
    setFormData({
      title: '',
      category: 'Client Testimonial',
      clientName: '',
      description: '',
      metricLabel: 'Growth Result',
      metricValue: '',
      videoUrl: '',
      thumbnailUrl: '',
    });
    setSelectedSections(['what-our-clients-say', 'work']);
    setThumbFile(null); setThumbPreview(''); setThumbUrl(''); setThumbState('idle');
    setError('');
    if (thumbRef.current) thumbRef.current.value = '';
  };

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
              Full CMS Control — All {items.length} codebase videos displayed. Video uploads are locked; textual info and section assignments are 100% editable.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={openResetAllModal}
              className="px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5"
              title="Emergency restore all 18 videos back to pristine default content (PIN 6565)"
            >
              <span>↺</span>
              <span>Put All Default Content</span>
            </button>
            <button
              onClick={openCreateModal}
              className="px-5 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
            >
              + Add / Configure Video
            </button>
          </div>
        </div>

        {successMsg && (
          <div className="px-4 py-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold">
            {successMsg}
          </div>
        )}

        {/* ─── Videos Grid ───────────────────────────────────────── */}
        {loading ? (
          <div className="text-center py-12 text-xs text-white/40">Loading all codebase videos…</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => {
              const activeSecs = item.sections || ['what-our-clients-say', 'work'];

              return (
                <div
                  key={item.id}
                  className="bg-[#141419] border border-[#F59A57]/30 hover:border-[#F59A57] rounded-2xl overflow-hidden flex flex-col transition-all group"
                >
                  {/* Thumbnail & Interactive Video Play Overlay */}
                  <div
                    onClick={() => {
                      if (item.videoUrl) setPlayingVideo(item);
                    }}
                    className="relative aspect-video bg-black cursor-pointer overflow-hidden"
                  >
                    <img
                      src={item.thumbnailUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/vedios-hero/1st__poster.jpg'; }}
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

                    <div className="absolute top-2 right-2 flex items-center gap-1.5 z-20">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditModal(item);
                        }}
                        className="text-[10px] font-bold text-[#F59A57] bg-black/80 hover:bg-[#F59A57] hover:text-black px-2.5 py-1 rounded-lg border border-[#F59A57]/40 transition-colors shadow-lg"
                      >
                        ✏️ Edit Details
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(item.id);
                        }}
                        className="text-[10px] font-bold text-red-400 bg-black/80 hover:bg-red-500 hover:text-white px-2.5 py-1 rounded-lg border border-red-500/40 transition-colors shadow-lg"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>

                  {/* Card Content & Section Tick-Boxes */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-extrabold text-[#F59A57] uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold text-white/50">
                          {item.clientName}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-white mb-1 leading-tight">{item.title}</h3>
                      <p className="text-xs text-white/60 mb-3 line-clamp-2">{item.description}</p>

                      {item.metricValue && (
                        <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg mb-3">
                          <span className="text-xs font-extrabold text-[#F59A57]">{item.metricValue}</span>
                          {item.metricLabel && <span className="text-[10px] text-white/50">{item.metricLabel}</span>}
                        </div>
                      )}
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

              {/* HTML5 Video Element */}
              <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-4 border border-white/10 flex items-center justify-center">
                {playingVideo.videoUrl ? (
                  <video
                    src={playingVideo.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center p-8 text-white/40 text-xs">
                    No video file attached
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

        {/* ─── Edit / Configure Video Modal ───────────────────────── */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-start justify-center p-4 overflow-y-auto">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-white my-8">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div>
                  <h2 className="font-display font-extrabold text-xl uppercase tracking-wider">
                    {editingItem ? 'Edit Video Details' : 'Configure Video Entry'}
                  </h2>
                  <p className="text-xs text-white/50 mt-0.5">
                    Customize title, client, story description, and section placements.
                  </p>
                </div>
                <button onClick={resetModal} className="text-white/50 hover:text-white text-xl font-bold">✕</button>
              </div>

              {error && (
                <div className="mb-4 px-4 py-3 bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Video Asset - Locked Indicator */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57]">
                      Video Media Asset
                    </label>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      🔒 Video Upload Locked
                    </span>
                  </div>
                  <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <span className="text-xl">🎬</span>
                      <div className="overflow-hidden">
                        <p className="text-xs font-mono font-bold text-white truncate">
                          {formData.videoUrl || 'Pre-rendered Video Asset in Codebase'}
                        </p>
                        <p className="text-[10px] text-white/40">
                          Pre-rendered HD stream asset in codebase
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 bg-black/50 px-2 py-1 rounded border border-white/10 shrink-0">
                      Protected
                    </span>
                  </div>
                  <p className="text-[10px] text-white/40 mt-1">
                    Direct video uploads are locked. All textual information (title, client, category, story, metrics, and section placement) is fully editable.
                  </p>
                </div>

                {/* Title + Client Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Title *</label>
                    <input
                      type="text" required value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Ali Salon"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Client / Brand Name *</label>
                    <input
                      type="text" required value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Ali Salon"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Category / Industry *</label>
                  <input
                    type="text" required value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    placeholder="e.g. Salon & Grooming or Restaurant"
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Description / Client Story</label>
                  <textarea
                    rows={2} value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="e.g. 25 Years in Business. No Social Presence."
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                {/* Metric Label + Value */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Metric Label</label>
                    <input
                      type="text" value={formData.metricLabel}
                      onChange={(e) => setFormData({ ...formData, metricLabel: e.target.value })}
                      placeholder="e.g. Inquiry Growth"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">Metric Value</label>
                    <input
                      type="text" value={formData.metricValue}
                      onChange={(e) => setFormData({ ...formData, metricValue: e.target.value })}
                      placeholder="e.g. 10X More Inquiries With Us"
                      className="w-full px-3 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-[#F59A57]"
                    />
                  </div>
                </div>

                {/* Section Assignments */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">
                    Target Website Sections
                  </label>
                  <p className="text-[11px] text-white/50 mb-3">
                    Tick the section(s) where this video should automatically appear on the website:
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
                          onChange={() => {}}
                          className="w-4 h-4 accent-[#F59A57] rounded cursor-pointer"
                        />
                        <span className="text-xs font-bold text-white">{sec.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Thumbnail Image */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-1.5">
                    Poster / Thumbnail Image
                  </label>
                  <div
                    onClick={() => thumbRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                      thumbState === 'done' || thumbPreview
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : 'border-white/20 hover:border-[#F59A57]/50'
                    }`}
                  >
                    {thumbPreview ? (
                      <div className="flex items-center gap-4">
                        <img src={thumbPreview} alt="thumb" className="h-16 w-24 object-cover rounded-lg" />
                        <div className="text-left">
                          <p className="text-xs font-bold text-white">{thumbFile?.name || 'Existing Poster'}</p>
                          {thumbState === 'uploading' && <p className="text-xs text-amber-400 flex items-center gap-1.5 mt-1"><span className="w-3 h-3 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />Uploading…</p>}
                          {(thumbState === 'done' || !thumbFile) && <p className="text-xs text-emerald-400 mt-1">✅ Ready (Click to change image)</p>}
                          {thumbState === 'error' && <p className="text-xs text-red-400 mt-1">❌ Failed</p>}
                        </div>
                      </div>
                    ) : (
                      <div className="py-3">
                        <p className="text-2xl mb-1">🖼️</p>
                        <p className="text-xs font-bold text-white/60">Click to upload custom thumbnail</p>
                        <p className="text-[10px] text-white/30">PNG, JPG, WebP (max 5 MB)</p>
                      </div>
                    )}
                  </div>
                  <input ref={thumbRef} type="file" accept="image/*" onChange={handleThumbSelect} className="hidden" />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 pt-2">
                  {editingItem ? (
                    <button
                      type="button"
                      onClick={openResetSingleModal}
                      className="px-4 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                      title="Reset this video back to baseline default content (PIN 6565)"
                    >
                      <span>↺</span>
                      <span>Put Default Content</span>
                    </button>
                  ) : <div />}

                  <div className="flex items-center justify-end gap-3">
                    <button type="button" onClick={resetModal}
                      className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm text-white transition-colors">
                      Cancel
                    </button>
                    <button type="submit" disabled={saving || thumbState === 'uploading'}
                      className="px-6 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-sm rounded-xl hover:scale-105 transition-all shadow-lg disabled:opacity-40 disabled:scale-100">
                      {saving ? 'Saving…' : editingItem ? 'Save Changes' : '+ Save Video'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ─── Emergency PIN Dialog (PIN: 6565) ───────────────────── */}
        {pinModalOpen && (
          <div className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#1c1c24] border border-amber-500/40 rounded-3xl p-6 sm:p-7 max-w-sm w-full text-white shadow-2xl relative">
              <button
                type="button"
                onClick={() => { setPinModalOpen(false); setPinInput(''); setPinError(''); }}
                className="absolute top-4 right-4 text-white/50 hover:text-white font-bold"
              >
                ✕
              </button>

              <div className="text-center mb-5">
                <div className="w-14 h-14 mx-auto mb-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center text-2xl">
                  🔐
                </div>
                <h3 className="font-display font-extrabold text-lg text-white">
                  {pinTarget === 'all' ? 'Reset All to Default' : 'Put Default Content'}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {pinTarget === 'all'
                    ? 'Enter emergency PIN to restore all 18 codebase videos to pristine defaults.'
                    : `Enter emergency PIN to restore original default content for "${editingItem?.title || 'this video'}".`}
                </p>
              </div>

              <form onSubmit={handleConfirmPin} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-amber-400 text-center mb-2">
                    Enter Emergency PIN (6565)
                  </label>
                  <input
                    type="password"
                    maxLength={6}
                    value={pinInput}
                    onChange={(e) => { setPinInput(e.target.value); setPinError(''); }}
                    placeholder="Enter PIN"
                    autoFocus
                    className="w-full text-center tracking-widest text-xl font-mono px-4 py-3 bg-black/60 border border-white/20 focus:border-amber-400 rounded-xl text-white outline-none"
                  />
                  {pinError && (
                    <p className="text-xs text-red-400 text-center mt-2 font-medium">{pinError}</p>
                  )}
                </div>

                <div className="flex gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => { setPinModalOpen(false); setPinInput(''); setPinError(''); }}
                    className="flex-1 py-3 bg-white/10 hover:bg-white/15 text-white/70 font-bold text-xs rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={pinLoading || !pinInput}
                    className="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl transition-all shadow-md disabled:opacity-40"
                  >
                    {pinLoading ? 'Restoring…' : 'Confirm (6565)'}
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
