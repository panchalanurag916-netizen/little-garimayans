'use client'

import { useState } from 'react'

export function ContactForm() {
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)
  const [error, setError]       = useState('')
  const [form, setForm]         = useState({ name:'', email:'', phone:'', subject:'', message:'', type:'general' })

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const res  = await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inp = 'w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-teal focus:outline-none font-body text-brand-dark bg-white transition-colors text-sm'
  const lbl = 'block text-xs font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5 font-body'

  if (success) return (
    <div className="bg-white rounded-4xl shadow-xl p-10 text-center">
      <div className="text-6xl mb-4">🎉</div>
      <h3 className="font-display font-bold text-brand-dark text-2xl mb-3">Message Received!</h3>
      <p className="text-brand-soft font-body">We&apos;ll get back to you within 24 hours.</p>
    </div>
  )

  return (
    <form onSubmit={submit} className="bg-white rounded-4xl shadow-xl p-8 md:p-10 space-y-5">
      <h3 className="font-display font-bold text-brand-dark text-xl">Send a Message</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <label className={lbl}>Name *</label>
          <input className={inp} required value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Your full name" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className={lbl}>Email *</label>
          <input type="email" className={inp} required value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@email.com" />
        </div>
      </div>
      <div>
        <label className={lbl}>Phone</label>
        <input type="tel" className={inp} value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" />
      </div>
      <div>
        <label className={lbl}>Enquiry Type</label>
        <select className={inp} value={form.type} onChange={(e) => set('type', e.target.value)}>
          <option value="general">General Enquiry</option>
          <option value="admission">Admission</option>
          <option value="franchise">Franchise</option>
          <option value="career">Career</option>
          <option value="media">Media / Press</option>
        </select>
      </div>
      <div>
        <label className={lbl}>Subject *</label>
        <input className={inp} required value={form.subject} onChange={(e) => set('subject', e.target.value)} placeholder="What is your enquiry about?" />
      </div>
      <div>
        <label className={lbl}>Message *</label>
        <textarea rows={5} className={inp} required value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us how we can help..." />
      </div>
      {error && <p className="text-red-500 text-sm font-body">{error}</p>}
      <button type="submit" disabled={loading}
        className="w-full py-4 rounded-2xl font-display font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
        style={{ background: 'linear-gradient(135deg, #17998F, #0D7A72)' }}>
        {loading ? 'Sending...' : '✉️ Send Message →'}
      </button>
    </form>
  )
}
