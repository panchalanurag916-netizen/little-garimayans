'use client'

import { useEffect, useState } from 'react'
import { Users, Building2, MessageSquare, TrendingUp } from 'lucide-react'
import { formatDate } from '@/lib/utils'

interface Stats {
  admissions: { total: number; new: number }
  franchise:  { total: number; new: number }
  contacts:   { total: number; new: number }
  recentAdmissions: Array<{ studentName: string; program: string; parentEmail: string; createdAt: string }>
  recentFranchise:  Array<{ fullName: string; city: string; state: string; budget: string; createdAt: string }>
}

export default function AdminDashboard() {
  const [stats, setStats]   = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((r) => r.json())
      .then((d) => { if (d.success) setStats(d.data) })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="p-8 text-white/40 font-body">Loading dashboard...</div>
  )

  const cards = [
    { label: 'Total Admissions', value: stats?.admissions.total ?? 0, new: stats?.admissions.new ?? 0, icon: Users,         color: '#EE3869', bg: 'rgba(238,56,105,0.12)' },
    { label: 'Franchise Leads',  value: stats?.franchise.total  ?? 0, new: stats?.franchise.new  ?? 0, icon: Building2,     color: '#FAA21B', bg: 'rgba(250,162,27,0.12)' },
    { label: 'Contact Enquiries',value: stats?.contacts.total   ?? 0, new: stats?.contacts.new   ?? 0, icon: MessageSquare, color: '#17998F', bg: 'rgba(23,153,143,0.12)' },
    { label: 'New This Month',   value: (stats?.admissions.new ?? 0) + (stats?.franchise.new ?? 0), new: 0, icon: TrendingUp, color: '#2D5D8A', bg: 'rgba(45,93,138,0.12)' },
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="font-display font-bold text-white text-2xl">Dashboard</h1>
        <p className="text-white/40 font-body text-sm mt-1">Welcome back to The Little Garimayans admin panel.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {cards.map(({ label, value, new: newCount, icon: Icon, color, bg }) => (
          <div key={label} className="rounded-2xl p-5 border border-white/6" style={{ background: '#0f1117' }}>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              {newCount > 0 && (
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-green-500/15 text-green-400 font-body">
                  +{newCount} new
                </span>
              )}
            </div>
            <p className="font-display font-bold text-3xl text-white mb-1">{value}</p>
            <p className="text-xs text-white/40 font-body">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Admissions */}
        <div className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: '#0f1117' }}>
          <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
            <h2 className="font-display font-bold text-white">Recent Admissions</h2>
            <a href="/admin/admissions" className="text-xs text-brand-gold hover:underline font-body">View all →</a>
          </div>
          <div className="divide-y divide-white/5">
            {(stats?.recentAdmissions ?? []).map((a, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white font-body">{a.studentName}</p>
                  <p className="text-xs text-white/40 font-body">{a.program} · {a.parentEmail}</p>
                </div>
                <p className="text-xs text-white/30 font-body">{formatDate(a.createdAt)}</p>
              </div>
            ))}
            {!stats?.recentAdmissions?.length && (
              <p className="px-5 py-8 text-center text-white/30 text-sm font-body">No admissions yet</p>
            )}
          </div>
        </div>

        {/* Recent Franchise */}
        <div className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: '#0f1117' }}>
          <div className="px-5 py-4 border-b border-white/6 flex items-center justify-between">
            <h2 className="font-display font-bold text-white">Recent Franchise Leads</h2>
            <a href="/admin/franchise" className="text-xs text-brand-gold hover:underline font-body">View all →</a>
          </div>
          <div className="divide-y divide-white/5">
            {(stats?.recentFranchise ?? []).map((f, i) => (
              <div key={i} className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white font-body">{f.fullName}</p>
                  <p className="text-xs text-white/40 font-body">{f.city}, {f.state} · {f.budget}</p>
                </div>
                <p className="text-xs text-white/30 font-body">{formatDate(f.createdAt)}</p>
              </div>
            ))}
            {!stats?.recentFranchise?.length && (
              <p className="px-5 py-8 text-center text-white/30 text-sm font-body">No franchise leads yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
