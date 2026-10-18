"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    caseStudies: 0,
    portfolio: 0,
  });
  const [loading, setLoading] = useState(true);
  const [dbStatus, setDbStatus] = useState<'connected' | 'offline' | 'checking'>('checking');

  useEffect(() => {
    async function loadStats() {
      try {
        const [csRes, portRes] = await Promise.all([
          fetch('/api/case-studies'),
          fetch('/api/portfolio'),
        ]);

        const [csData, portData] = await Promise.all([
          csRes.json(),
          portRes.json(),
        ]);

        setStats({
          caseStudies: csData.data?.length || 0,
          portfolio: portData.data?.length || 0,
        });
        setDbStatus('connected');
      } catch (e) {
        console.error('Error loading admin stats:', e);
        setDbStatus('offline');
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8">

        {/* ─── Welcome Header ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Famebros Site Manager
            </h1>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Edit website content, manage case studies, and update portfolio media.
            </p>
          </div>

          <div
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold ${
              dbStatus === 'connected'
                ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                : dbStatus === 'offline'
                ? 'bg-red-500/15 border-red-500/30 text-red-400'
                : 'bg-white/10 border-white/20 text-white/60'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                dbStatus === 'connected'
                  ? 'bg-emerald-400 animate-pulse'
                  : dbStatus === 'offline'
                  ? 'bg-red-400'
                  : 'bg-white/40'
              }`}
            />
            {dbStatus === 'connected'
              ? 'MongoDB Connected'
              : dbStatus === 'offline'
              ? 'Database Offline'
              : 'Checking…'}
          </div>
        </div>

        {/* ─── Primary Action — Visual Live Editor ───────────────────── */}
        <Link
          href="/admin/site-content"
          className="block p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#F59A57]/25 via-[#F59A57]/10 to-transparent border border-[#F59A57]/50 hover:border-[#F59A57] transition-all group shadow-xl"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-3xl">✨</span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#F59A57] text-black px-2.5 py-1 rounded-md">
                Live Preview Mode
              </span>
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
              Open Visual Editor &rarr;
            </span>
          </div>
          <div className="font-display font-black text-xl sm:text-2xl text-white mb-2">
            Visual Live Website Editor (Hostinger / Builder Style)
          </div>
          <div className="text-xs sm:text-sm text-white/70 leading-relaxed">
            See your website directly inside the dashboard with a live split-screen preview. Edit headings, subheadings, paragraphs, brand logos, and shoot videos on the left — and watch your live site update instantly in real time on the right! Click &ldquo;Save &amp; Publish&rdquo; to send edits live to MongoDB.
          </div>
        </Link>

        {/* ─── Secondary Cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link
            href="/admin/case-studies"
            className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#F59A57] transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">📈</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1 transition-transform">
                Manage →
              </span>
            </div>
            <div className="font-display font-black text-3xl text-white mb-1">
              {loading ? '…' : stats.caseStudies}
            </div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Case Studies
            </div>
            <p className="text-xs text-white/40 mt-2">
              Full access — view, edit, add, or delete any case study on the website.
            </p>
          </Link>

          <Link
            href="/admin/portfolio"
            className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#F59A57] transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">🎬</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1 transition-transform">
                Manage →
              </span>
            </div>
            <div className="font-display font-black text-3xl text-white mb-1">
              {loading ? '…' : stats.portfolio}
            </div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Portfolio & Shoot Videos
            </div>
            <p className="text-xs text-white/40 mt-2">
              Full access — edit details, toggle section placements, upload new, or delete any video.
            </p>
          </Link>

          <Link
            href="/admin/brands"
            className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#F59A57] transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">🏷️</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1 transition-transform">
                Manage →
              </span>
            </div>
            <div className="font-display font-black text-3xl text-white mb-1">Live</div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Brand Logos
            </div>
            <p className="text-xs text-white/40 mt-2">
              Full access — add or remove client logos displayed in the marquee.
            </p>
          </Link>
        </div>

        {/* ─── Full Access CMS Info ─────────────────────────────────────── */}
        <div className="p-6 rounded-2xl bg-[#16161d] border border-white/10 space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xl">⚡</span>
            <h2 className="font-bold text-sm uppercase tracking-wider text-white">
              Full Access CMS Control
            </h2>
          </div>
          <ul className="text-xs text-white/60 leading-relaxed space-y-1.5">
            <li>
              <strong className="text-white/80">Site Content &amp; Headlines</strong> — 100% of text across every section (Hero, About, Why Choose Us, Storytelling, FAQ, Navbar, etc.) is fully customizable in both direct and live split-screen editor modes.
            </li>
            <li>
              <strong className="text-white/80">Case Studies &amp; Clients</strong> — All case studies can be edited, customized, added, or deleted directly by the admin.
            </li>
            <li>
              <strong className="text-white/80">Videos &amp; Section Placement</strong> — Play preview, edit title/client, toggle checkboxes to assign videos to sections (such as &ldquo;What Our Clients Say&rdquo; or &ldquo;Portfolio Work&rdquo;), or delete videos anytime.
            </li>
            <li>
              <strong className="text-white/80">Brand Marquee &amp; Creator Network</strong> — Upload new partner logos and creator profiles or remove existing ones with single-click deletion.
            </li>
          </ul>
        </div>

        {/* ─── Quick Actions ────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            href="/admin/site-content"
            className="p-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-xl text-center text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform"
          >
            ✏️ Edit Website Text
          </Link>
          <Link
            href="/admin/case-studies"
            className="p-4 bg-white/10 border border-white/20 text-white font-extrabold rounded-xl text-center text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            + Add Case Study
          </Link>
          <Link
            href="/admin/portfolio"
            className="p-4 bg-white/10 border border-white/20 text-white font-extrabold rounded-xl text-center text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            + Add Video
          </Link>
          <Link
            href="/admin/brands"
            className="p-4 bg-white/10 border border-white/20 text-white font-extrabold rounded-xl text-center text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            + Add Brand Logo
          </Link>
        </div>

      </div>
    </AdminLayout>
  );
}
