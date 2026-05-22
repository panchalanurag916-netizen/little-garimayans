'use client'

import { useEffect, useState } from 'react'
import { formatDate, PROGRAMS } from '@/lib/utils'

interface Admission {
  _id: string
  studentName: string
  program: string
  parentName: string
  parentEmail: string
  parentPhone: string
  preferredBranch: string
  status: string
  createdAt: string
}

const STATUS_COLORS: Record<string, string> = {
  new:            'bg-blue-500/15 text-blue-400',
  contacted:      'bg-yellow-500/15 text-yellow-400',
  scheduled:      'bg-purple-500/15 text-purple-400',
  enrolled:       'bg-green-500/15 text-green-400',
  'not-interested':'bg-red-500/15 text-red-400',
}

export default function AdminAdmissionsPage() {
  const [admissions, setAdmissions] = useState<Admission[]>([])
  const [total, setTotal]   = useState(0)
  const [page, setPage]     = useState(1)
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('')

  useEffect(() => {
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), limit: '20' })
    if (statusFilter) params.set('status', statusFilter)
    fetch(`/api/admissions?${params}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.success) { setAdmissions(d.data.admissions); setTotal(d.data.total) }
      })
      .finally(() => setLoading(false))
  }, [page, statusFilter])

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display font-bold text-white text-2xl">Admissions</h1>
          <p className="text-white/40 font-body text-sm mt-1">{total} total enquiries</p>
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-body focus:outline-none focus:border-brand-gold"
            value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}>
            <option value="">All Status</option>
            {['new','contacted','scheduled','enrolled','not-interested'].map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <a href="/api/admissions?limit=10000"
            className="px-4 py-2 rounded-xl text-sm font-bold font-display text-white"
            style={{ background: 'linear-gradient(135deg, #17998F, #0D7A72)' }}>
            Export CSV
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: '#0f1117' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6">
                {['Student','Program','Parent','Phone','Branch','Status','Date'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider font-body">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr><td colSpan={7} className="px-4 py-10 text-center text-white/30 text-sm font-body">Loading...</td></tr>
              ) : admissions.length === 0 ? (
                <tr><td colSpan={7} className="px-4 py-10 text-center text-white/30 text-sm font-body">No records found</td></tr>
              ) : admissions.map((a) => (
                <tr key={a._id} className="hover:bg-white/3 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-white font-body">{a.studentName}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{PROGRAMS.find((p) => p.id === a.program)?.label || a.program}</td>
                  <td className="px-4 py-3">
                    <p className="text-sm text-white font-body">{a.parentName}</p>
                    <p className="text-xs text-white/40 font-body">{a.parentEmail}</p>
                  </td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{a.parentPhone}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{a.preferredBranch}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full font-body ${STATUS_COLORS[a.status] || 'bg-gray-500/15 text-gray-400'}`}>
                      {a.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-white/40 font-body">{formatDate(a.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {total > 20 && (
        <div className="flex justify-center gap-3 mt-5">
          <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
            className="px-4 py-2 rounded-xl border border-white/10 text-white text-sm font-body disabled:opacity-40">← Prev</button>
          <span className="px-4 py-2 text-white/40 text-sm font-body">Page {page}</span>
          <button onClick={() => setPage((p) => p + 1)} disabled={admissions.length < 20}
            className="px-4 py-2 rounded-xl border border-white/10 text-white text-sm font-body disabled:opacity-40">Next →</button>
        </div>
      )}
    </div>
  )
}
