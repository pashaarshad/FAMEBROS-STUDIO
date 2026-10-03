"use client";

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';

interface LeadItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  businessType: string;
  message?: string;
  serviceRequested?: string;
  status: 'New' | 'Contacted' | 'Converted' | 'Closed';
  createdAt?: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success) {
        setLeads(data.data || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await fetch('/api/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        fetchLeads();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-display font-black text-2xl uppercase tracking-wider text-white">
            Business Leads & Inquiries
          </h1>
          <p className="text-xs text-white/60">
            Real-time inquiries received via website contact forms and trial shoot bookings.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-xs font-mono text-white/50">Loading Inquiries...</div>
        ) : leads.length === 0 ? (
          <div className="p-8 text-center bg-[#141419] border border-white/10 rounded-2xl text-white/50 text-xs">
            No inquiries received yet.
          </div>
        ) : (
          <div className="overflow-x-auto bg-[#141419] border border-white/10 rounded-2xl">
            <table className="w-full text-left text-xs text-white/80">
              <thead className="bg-[#1a1a20] text-white uppercase text-[10px] font-bold tracking-wider border-b border-white/10">
                <tr>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Business / Service</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4">
                      <div className="font-bold text-white text-sm">{lead.name}</div>
                      <div className="text-white/60 font-mono">{lead.phone}</div>
                      <div className="text-white/40 text-[11px]">{lead.email}</div>
                    </td>

                    <td className="p-4">
                      <div className="font-bold text-[#F59A57]">{lead.businessType}</div>
                      <div className="text-white/60 text-[11px]">{lead.serviceRequested}</div>
                    </td>

                    <td className="p-4 max-w-xs">
                      <p className="line-clamp-2 text-white/70 italic">
                        &ldquo;{lead.message || 'No additional notes'}&rdquo;
                      </p>
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                          lead.status === 'New'
                            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                            : lead.status === 'Contacted'
                            ? 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                            : lead.status === 'Converted'
                            ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                            : 'bg-white/10 text-white/50 border border-white/20'
                        }`}
                      >
                        {lead.status}
                      </span>
                    </td>

                    <td className="p-4 text-right">
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        className="bg-white/10 border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-[#F59A57]"
                      >
                        <option value="New" className="bg-[#141419] text-white">New</option>
                        <option value="Contacted" className="bg-[#141419] text-white">Contacted</option>
                        <option value="Converted" className="bg-[#141419] text-white">Converted</option>
                        <option value="Closed" className="bg-[#141419] text-white">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
