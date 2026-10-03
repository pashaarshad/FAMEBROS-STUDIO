"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    caseStudies: 0,
    portfolio: 0,
    creators: 0,
    leads: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const [csRes, portRes, crRes, leadRes] = await Promise.all([
          fetch('/api/case-studies'),
          fetch('/api/portfolio'),
          fetch('/api/creators'),
          fetch('/api/leads'),
        ]);

        const [csData, portData, crData, leadData] = await Promise.all([
          csRes.json(),
          portRes.json(),
          crRes.json(),
          leadRes.json(),
        ]);

        setStats({
          caseStudies: csData.data?.length || 0,
          portfolio: portData.data?.length || 0,
          creators: crData.data?.length || 0,
          leads: leadData.data?.length || 0,
        });
      } catch (e) {
        console.error('Error loading admin stats:', e);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-white/10 to-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl">
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-wider text-white">
              Welcome to Famebros CMS
            </h1>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              Manage your platform content, case studies, shoots, creator network, and business leads.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-2 rounded-xl text-emerald-400 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            MongoDB Backend Ready
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/admin/case-studies"
            className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#F59A57] transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">📈</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1 transition-transform">
                Manage &rarr;
              </span>
            </div>
            <div className="font-display font-black text-3xl text-white mb-1">
              {loading ? '...' : stats.caseStudies}
            </div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Total Case Studies
            </div>
          </Link>

          <Link
            href="/admin/portfolio"
            className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#F59A57] transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">🎬</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1 transition-transform">
                Manage &rarr;
              </span>
            </div>
            <div className="font-display font-black text-3xl text-white mb-1">
              {loading ? '...' : stats.portfolio}
            </div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Portfolio Shoot Media
            </div>
          </Link>

          <Link
            href="/admin/creators"
            className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#F59A57] transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">🤳</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1 transition-transform">
                Manage &rarr;
              </span>
            </div>
            <div className="font-display font-black text-3xl text-white mb-1">
              {loading ? '...' : stats.creators}
            </div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Creator Network Profiles
            </div>
          </Link>

          <Link
            href="/admin/leads"
            className="p-6 rounded-2xl bg-[#141419] border border-white/10 hover:border-[#F59A57] transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">📞</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59A57] group-hover:translate-x-1 transition-transform">
                View &rarr;
              </span>
            </div>
            <div className="font-display font-black text-3xl text-white mb-1">
              {loading ? '...' : stats.leads}
            </div>
            <div className="text-xs font-bold text-white/60 uppercase tracking-wider">
              Business Inquiries
            </div>
          </Link>
        </div>

        {/* Dynamic Content Lock Policy Banner */}
        <div className="p-6 rounded-2xl bg-[#16161d] border border-white/10 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">🔒</span>
            <h2 className="font-bold text-base uppercase text-white">
              Baseline Content Protection & Locking Policy
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            All original baseline case studies (e.g. Restaurant +240%, Retail 3.2X, Gym +180%, Resort +3.7X) and core agency branding details are <strong className="text-white">LOCKED</strong> to prevent accidental editing or deletion. New case studies, shoots, and creators added through this dashboard will be dynamically saved to MongoDB and integrated across the website.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/admin/case-studies"
            className="p-4 bg-gradient-to-r from-[#F59A57] to-[#FF8A3D] text-black font-extrabold rounded-xl text-center text-xs uppercase tracking-wider hover:scale-[1.02] transition-transform"
          >
            + Add New Case Study
          </Link>
          <Link
            href="/admin/portfolio"
            className="p-4 bg-white/10 border border-white/20 text-white font-extrabold rounded-xl text-center text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            + Add Shoot Media
          </Link>
          <Link
            href="/admin/creators"
            className="p-4 bg-white/10 border border-white/20 text-white font-extrabold rounded-xl text-center text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
          >
            + Add Creator Profile
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}
