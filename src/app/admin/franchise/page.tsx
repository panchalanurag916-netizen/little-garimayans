'use client'

import { useEffect, useState } from 'react'
import { formatDate } from '@/lib/utils'

interface FranchiseLead {
  _id: string; fullName: string; email: string; phone: string
  city: string; state: string; budget: string; propertyStatus: string; status: string; createdAt: string
}

const STATUS_COLORS: Record<string, string> = {
  new:              'bg-blue-500/15 text-blue-400',
  contacted:        'bg-yellow-500/15 text-yellow-400',
  'meeting-scheduled':'bg-purple-500/15 text-purple-400',
  qualified:        'bg-green-500/15 text-green-400',
  closed:           'bg-teal-500/15 text-teal-400',
  lost:             'bg-red-500/15 text-red-400',
}

export default function AdminFranchisePage() {
  const [leads, setLeads]   = useState<FranchiseLead[]>([])
  const [total, setTotal]   = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/franchise?limit=50')
      .then((r) => r.json())
      .then((d) => { if (d.success) { setLeads(d.data.leads); setTotal(d.data.total) } })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display font-bold text-white text-2xl">Franchise Leads</h1>
          <p className="text-white/40 font-body text-sm mt-1">{total} total leads</p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: '#0f1117' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-white/6">
              {['Name','Email','Phone','City','State','Budget','Property','Status','Date'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider font-body">{h}</th>
              ))}
            </tr></thead>
            <tbody className="divide-y divide-white/5">
              {loading ? <tr><td colSpan={9} className="px-4 py-10 text-center text-white/30 text-sm font-body">Loading...</td></tr>
              : leads.map((l) => (
                <tr key={l._id} className="hover:bg-white/3 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-white font-body">{l.fullName}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{l.email}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{l.phone}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{l.city}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{l.state}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{l.budget}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{l.propertyStatus}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full font-body ${STATUS_COLORS[l.status] || 'bg-gray-500/15 text-gray-400'}`}>{l.status}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-white/40 font-body">{formatDate(l.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
