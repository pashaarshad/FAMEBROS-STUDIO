"use client";

import { useEffect, useState, useRef } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

interface BrandItem {
  id: string;
  name: string;
  logoUrl: string;
  isLocked: boolean;
}

export default function AdminBrandsPage() {
  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [brandName, setBrandName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchBrands = async () => {
    try {
      const res = await fetch('/api/brands');
      const json = await res.json();
      if (json.success) setBrands(json.data || []);
    } catch {
      console.error('Failed to fetch brands');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBrands(); }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Local preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
    setUploadedUrl('');
    setError('');

    // Upload immediately
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('type', 'image');

      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const json = await res.json();

      if (json.success) {
        setUploadedUrl(json.url);
      } else {
        setError(json.error || 'Upload failed');
        setPreviewUrl('');
      }
    } catch {
      setError('Upload failed. Please try again.');
      setPreviewUrl('');
    } finally {
      setUploading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName.trim()) { setError('Brand name is required'); return; }
    if (!uploadedUrl) { setError('Please upload a logo image first'); return; }

    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/brands', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: brandName.trim(), logoUrl: uploadedUrl }),
      });
      const json = await res.json();
      if (json.success) {
        setSuccessMsg(`✅ "${brandName}" added successfully!`);
        resetModal();
        fetchBrands();
        setTimeout(() => setSuccessMsg(''), 4000);
      } else {
        setError(json.error || 'Failed to save');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Remove "${name}" from the brands list?`)) return;
    try {
      const res = await fetch(`/api/brands?id=${id}`, { method: 'DELETE' });
      const json = await res.json();
      if (json.success) {
        setSuccessMsg(`✅ "${name}" removed.`);
        fetchBrands();
        setTimeout(() => setSuccessMsg(''), 3000);
      } else {
        alert(json.error || 'Failed to delete');
      }
    } catch {
      alert('Network error');
    }
  };

  const resetModal = () => {
    setShowModal(false);
    setBrandName('');
    setPreviewUrl('');
    setUploadedUrl('');
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const lockedBrands = brands.filter((b) => b.isLocked);
  const newBrands = brands.filter((b) => !b.isLocked);

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* ─── Header ─────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="font-display font-black text-2xl uppercase tracking-wider text-white">
              🏷️ Brand Logos
            </h1>
            <p className="text-xs text-white/50 mt-1">
              {lockedBrands.length} baseline brands (locked) · {newBrands.length} added by you
            </p>
          </div>
          <button
            onClick={() => { setShowModal(true); setError(''); }}
            className="px-5 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-lg"
          >
            + Add New Brand
          </button>
        </div>

        {/* Success message */}
        {successMsg && (
          <div className="px-4 py-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold">
            {successMsg}
          </div>
        )}

        {loading ? (
          <div className="text-center py-16 text-xs text-white/40">Loading brands…</div>
        ) : (
          <>
            {/* ─── Newly Added Brands ─── */}
            {newBrands.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#F59A57] mb-4">
                  ✅ Your Added Brands ({newBrands.length})
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {newBrands.map((brand) => (
                    <div
                      key={brand.id}
                      className="bg-[#141419] border border-[#F59A57]/30 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[120px] group relative"
                    >
                      <img
                        src={brand.logoUrl}
                        alt={brand.name}
                        className="max-h-12 max-w-full object-contain mb-3"
                      />
                      <span className="text-[10px] text-white/60 font-mono text-center">
                        {brand.name}
                      </span>
                      <button
                        onClick={() => handleDelete(brand.id, brand.name)}
                        className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/40"
                        title="Remove brand"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─── Baseline Locked Brands ─── */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">
                🔒 Baseline Brands — Locked ({lockedBrands.length})
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {lockedBrands.map((brand) => (
                  <div
                    key={brand.id}
                    className="bg-[#141419] border border-white/8 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[120px] opacity-70"
                  >
                    <img
                      src={brand.logoUrl}
                      alt={brand.name}
                      className="max-h-12 max-w-full object-contain mb-3"
                    />
                    <span className="text-[10px] text-white/40 font-mono text-center">
                      {brand.name}
                    </span>
                    <span className="text-[9px] text-amber-400/60 mt-1">🔒 Locked</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ─── Add Brand Modal ─────────────────────────────────────── */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#14141a] border border-white/15 rounded-3xl p-6 sm:p-8 max-w-md w-full text-white">
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <h2 className="font-display font-extrabold text-xl uppercase tracking-wider">
                  Add New Brand
                </h2>
                <button onClick={resetModal} className="text-white/50 hover:text-white text-xl font-bold">✕</button>
              </div>

              {error && (
                <div className="mb-4 px-4 py-3 bg-red-500/20 border border-red-500/30 text-red-300 text-xs rounded-xl">
                  {error}
                </div>
              )}

              <form onSubmit={handleAdd} className="space-y-5">
                {/* Brand Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-2">
                    Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Zomato, Nike, Local Bakery"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#F59A57]"
                  />
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-[#F59A57] mb-2">
                    Brand Logo *
                  </label>

                  {/* Drop zone */}
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      previewUrl
                        ? 'border-emerald-500/50 bg-emerald-500/5'
                        : 'border-white/20 hover:border-[#F59A57]/50 bg-white/3 hover:bg-white/5'
                    }`}
                  >
                    {previewUrl ? (
                      <div className="flex flex-col items-center gap-3">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-h-20 max-w-full object-contain"
                        />
                        {uploading ? (
                          <span className="text-xs text-amber-400 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full border-2 border-amber-400 border-t-transparent animate-spin" />
                            Uploading…
                          </span>
                        ) : uploadedUrl ? (
                          <span className="text-xs text-emerald-400">✅ Uploaded</span>
                        ) : null}
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setPreviewUrl(''); setUploadedUrl(''); if (fileInputRef.current) fileInputRef.current.value = ''; }}
                          className="text-xs text-white/40 hover:text-red-400 transition-colors"
                        >
                          Remove & choose different
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 py-4">
                        <span className="text-4xl">🖼️</span>
                        <p className="text-sm font-bold text-white/70">Click to upload logo</p>
                        <p className="text-xs text-white/40">PNG, JPG, WebP, SVG · Max 5 MB</p>
                      </div>
                    )}
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={resetModal}
                    className="px-5 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold text-sm text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving || uploading || !uploadedUrl}
                    className="px-6 py-3 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold text-sm rounded-xl hover:scale-105 transition-all shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    {saving ? 'Saving…' : '+ Add Brand'}
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
