'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { INDIAN_STATES } from '@/lib/utils'

export function FranchiseForm() {
  const router  = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', city: '', state: '',
    budget: '', propertyStatus: '', experience: '', message: '',
  })

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res  = await fetch('/api/franchise', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      router.push('/thank-you?type=franchise')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const input = 'w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-gold focus:outline-none font-body text-brand-dark bg-white transition-colors text-sm'
  const label = 'block text-xs font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5 font-body'

  return (
    <form onSubmit={submit} className="bg-white rounded-4xl shadow-xl p-8 md:p-10 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={label}>Full Name *</label>
          <input className={input} required value={form.fullName} onChange={(e) => set('fullName', e.target.value)} placeholder="Your full name" />
        </div>
        <div>
          <label className={label}>Email *</label>
          <input type="email" className={input} required value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="email@example.com" />
        </div>
        <div>
          <label className={label}>Mobile Number *</label>
          <input type="tel" className={input} required value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <label className={label}>City *</label>
          <input className={input} required value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="Your city" />
        </div>
        <div>
          <label className={label}>State *</label>
          <select className={input} required value={form.state} onChange={(e) => set('state', e.target.value)}>
            <option value="">Select State</option>
            {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={label}>Investment Budget *</label>
          <select className={input} required value={form.budget} onChange={(e) => set('budget', e.target.value)}>
            <option value="">Select Budget</option>
            <option value="10-20L">₹10–20 Lakhs</option>
            <option value="20-35L">₹20–35 Lakhs</option>
            <option value="35-50L">₹35–50 Lakhs</option>
            <option value="50L+">₹50 Lakhs+</option>
          </select>
        </div>
        <div>
          <label className={label}>Property Status *</label>
          <select className={input} required value={form.propertyStatus} onChange={(e) => set('propertyStatus', e.target.value)}>
            <option value="">Select</option>
            <option value="owned">Own Property</option>
            <option value="rented">Can Rent</option>
            <option value="looking">Still Looking</option>
          </select>
        </div>
        <div>
          <label className={label}>Prior Business Experience</label>
          <select className={input} value={form.experience} onChange={(e) => set('experience', e.target.value)}>
            <option value="">Select</option>
            <option value="none">No Prior Experience</option>
            <option value="education">Education Sector</option>
            <option value="business">Other Business</option>
            <option value="franchise">Prior Franchise</option>
          </select>
        </div>
      </div>

      <div>
        <label className={label}>Message</label>
        <textarea rows={4} className={input} value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us your vision, goals, or any questions..." />
      </div>

      {error && <p className="text-red-500 text-sm font-body">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-2xl font-display font-bold text-white text-base transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
        style={{ background: 'linear-gradient(135deg, #FAA21B, #F07D15)', boxShadow: '0 8px 32px rgba(250,162,27,.35)' }}
      >
        {loading ? 'Sending Enquiry...' : '🏫 Submit Franchise Enquiry →'}
      </button>

      <p className="text-center text-xs text-brand-soft font-body">
        Our franchise team will reach out within 48 hours. No commitments required.
      </p>
    </form>
  )
}
