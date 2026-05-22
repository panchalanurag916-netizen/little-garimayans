'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PROGRAMS, INDIAN_STATES } from '@/lib/utils'

const STEPS = ['Child Details', 'Parent Details', 'Preferences', 'Confirm']

export function AdmissionForm() {
  const router = useRouter()
  const [step, setStep]       = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const [form, setForm] = useState({
    studentName:     '',
    dateOfBirth:     '',
    program:         '',
    parentName:      '',
    parentEmail:     '',
    parentPhone:     '',
    address:         '',
    preferredBranch: '',
    visitDate:       '',
    message:         '',
  })

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const submit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admissions', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message || 'Something went wrong')
      router.push('/thank-you?type=admission')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:border-brand-red focus:outline-none font-body text-brand-dark bg-white transition-colors duration-200 text-sm'
  const labelCls = 'block text-xs font-bold text-brand-dark/70 uppercase tracking-wider mb-1.5 font-body'

  return (
    <div className="bg-white rounded-4xl shadow-xl p-8 md:p-10">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-10">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display flex-shrink-0 transition-all duration-300 ${
                i <= step ? 'text-white' : 'bg-gray-100 text-gray-400'
              }`}
              style={i <= step ? { background: 'linear-gradient(135deg, #99292D, #EE3869)' } : {}}
            >
              {i < step ? '✓' : i + 1}
            </div>
            <span className={`text-xs font-semibold font-body hidden md:block ${i === step ? 'text-brand-red' : 'text-gray-400'}`}>
              {s}
            </span>
            {i < STEPS.length - 1 && (
              <div className="flex-1 h-0.5 rounded-full" style={{ background: i < step ? '#99292D' : '#E5E7EB' }} />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: Child */}
      {step === 0 && (
        <div className="space-y-5">
          <h3 className="font-display font-bold text-brand-dark text-xl mb-6">Child&apos;s Details</h3>
          <div>
            <label className={labelCls}>Child&apos;s Full Name *</label>
            <input className={inputCls} value={form.studentName} onChange={(e) => set('studentName', e.target.value)} placeholder="Enter child's full name" />
          </div>
          <div>
            <label className={labelCls}>Date of Birth *</label>
            <input type="date" className={inputCls} value={form.dateOfBirth} onChange={(e) => set('dateOfBirth', e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Program *</label>
            <select className={inputCls} value={form.program} onChange={(e) => set('program', e.target.value)}>
              <option value="">Select Program</option>
              {PROGRAMS.map((p) => (
                <option key={p.id} value={p.id}>{p.emoji} {p.label} ({p.age})</option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Step 1: Parent */}
      {step === 1 && (
        <div className="space-y-5">
          <h3 className="font-display font-bold text-brand-dark text-xl mb-6">Parent / Guardian Details</h3>
          <div>
            <label className={labelCls}>Parent&apos;s Full Name *</label>
            <input className={inputCls} value={form.parentName} onChange={(e) => set('parentName', e.target.value)} placeholder="Enter your full name" />
          </div>
          <div>
            <label className={labelCls}>Email Address *</label>
            <input type="email" className={inputCls} value={form.parentEmail} onChange={(e) => set('parentEmail', e.target.value)} placeholder="your@email.com" />
          </div>
          <div>
            <label className={labelCls}>Mobile Number *</label>
            <input type="tel" className={inputCls} value={form.parentPhone} onChange={(e) => set('parentPhone', e.target.value)} placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <label className={labelCls}>Home Address *</label>
            <textarea rows={3} className={inputCls} value={form.address} onChange={(e) => set('address', e.target.value)} placeholder="Street, City, State" />
          </div>
        </div>
      )}

      {/* Step 2: Preferences */}
      {step === 2 && (
        <div className="space-y-5">
          <h3 className="font-display font-bold text-brand-dark text-xl mb-6">Your Preferences</h3>
          <div>
            <label className={labelCls}>Preferred Branch / City *</label>
            <input className={inputCls} value={form.preferredBranch} onChange={(e) => set('preferredBranch', e.target.value)} placeholder="e.g. Andheri West, Mumbai" />
          </div>
          <div>
            <label className={labelCls}>Preferred School Visit Date</label>
            <input type="date" className={inputCls} value={form.visitDate} onChange={(e) => set('visitDate', e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Any Message / Special Requirements</label>
            <textarea rows={4} className={inputCls} value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us anything special about your child..." />
          </div>
        </div>
      )}

      {/* Step 3: Confirm */}
      {step === 3 && (
        <div>
          <h3 className="font-display font-bold text-brand-dark text-xl mb-6">Confirm Your Application</h3>
          <div className="space-y-3 mb-6">
            {[
              { label: 'Child',     value: form.studentName },
              { label: 'DOB',       value: form.dateOfBirth },
              { label: 'Program',   value: PROGRAMS.find((p) => p.id === form.program)?.label || form.program },
              { label: 'Parent',    value: form.parentName },
              { label: 'Email',     value: form.parentEmail },
              { label: 'Phone',     value: form.parentPhone },
              { label: 'Branch',    value: form.preferredBranch },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-xs font-bold text-brand-soft uppercase tracking-wider font-body">{label}</span>
                <span className="text-sm font-semibold text-brand-dark font-body">{value || '—'}</span>
              </div>
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mb-4 font-body">{error}</p>}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8 gap-4">
        {step > 0 && (
          <button onClick={back} className="px-6 py-3 rounded-full border-2 border-gray-200 text-brand-dark font-semibold font-body hover:border-brand-red hover:text-brand-red transition-colors">
            ← Back
          </button>
        )}
        <div className={step === 0 ? 'w-full' : 'flex-1'}>
          {step < STEPS.length - 1 ? (
            <button
              onClick={next}
              disabled={step === 0 && (!form.studentName || !form.dateOfBirth || !form.program)}
              className="w-full py-3.5 rounded-full font-display font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={loading}
              className="w-full py-3.5 rounded-full font-display font-bold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}
            >
              {loading ? 'Submitting...' : '✨ Submit Application'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
