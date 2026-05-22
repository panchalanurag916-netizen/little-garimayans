'use client'

import { useEffect, useState } from 'react'
import { formatDate } from '@/lib/utils'

interface ContactRecord {
  _id: string; name: string; email: string; phone?: string
  subject: string; type: string; status: string; createdAt: string
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<ContactRecord[]>([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    fetch('/api/contact?limit=50')
      .then((r) => r.json())
      .then((d) => { if (d.success) setContacts(d.data?.contacts || []) })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="p-6 md:p-8">
      <h1 className="font-display font-bold text-white text-2xl mb-8">Contact Enquiries</h1>
      <div className="rounded-2xl border border-white/6 overflow-hidden" style={{ background: '#0f1117' }}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead><tr className="border-b border-white/6">
              {['Name','Email','Phone','Subject','Type','Status','Date'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-bold text-white/40 uppercase tracking-wider font-body">{h}</th>
              ))}
            </tr></thead>
            <tbody className="divide-y divide-white/5">
              {loading ? <tr><td colSpan={7} className="px-4 py-10 text-center text-white/30 text-sm font-body">Loading...</td></tr>
              : contacts.length === 0 ? <tr><td colSpan={7} className="px-4 py-10 text-center text-white/30 text-sm font-body">No enquiries yet</td></tr>
              : contacts.map((c) => (
                <tr key={c._id} className="hover:bg-white/3 transition-colors">
                  <td className="px-4 py-3 text-sm font-semibold text-white font-body">{c.name}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{c.email}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body">{c.phone || '—'}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body max-w-xs truncate">{c.subject}</td>
                  <td className="px-4 py-3 text-sm text-white/60 font-body capitalize">{c.type}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full font-body ${c.status === 'new' ? 'bg-blue-500/15 text-blue-400' : 'bg-gray-500/15 text-gray-400'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-white/40 font-body">{formatDate(c.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
