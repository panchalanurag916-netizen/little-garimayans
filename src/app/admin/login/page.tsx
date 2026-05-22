'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogoSVG } from '@/components/ui/LogoSVG'
import { Eye, EyeOff } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [form, setForm]       = useState({ email: '', password: '' })
  const [showPw, setShowPw]   = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const res  = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      router.push('/admin/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0d14] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <LogoSVG className="w-16 h-auto" glowing />
          </div>
          <h1 className="font-display font-bold text-white text-2xl">Admin Panel</h1>
          <p className="text-white/40 font-body text-sm mt-1">The Little Garimayans</p>
        </div>

        <form onSubmit={submit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-5">
          <div>
            <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2 font-body">Email</label>
            <input
              type="email" required
              className="w-full px-4 py-3.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-brand-gold text-sm font-body"
              placeholder="admin@littlegarimayans.in"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>

          <div className="relative">
            <label className="block text-xs font-bold text-white/50 uppercase tracking-wider mb-2 font-body">Password</label>
            <input
              type={showPw ? 'text' : 'password'} required
              className="w-full px-4 py-3.5 pr-12 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-brand-gold text-sm font-body"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
            />
            <button type="button" onClick={() => setShowPw(!showPw)}
              className="absolute right-3 top-10 text-white/30 hover:text-white/70 transition-colors">
              {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm font-body bg-red-500/10 px-4 py-2 rounded-xl">{error}</p>}

          <button type="submit" disabled={loading}
            className="w-full py-4 rounded-xl font-display font-bold text-white transition-all duration-300 disabled:opacity-50"
            style={{ background: 'linear-gradient(135deg, #FAA21B, #F07D15)' }}>
            {loading ? 'Signing In...' : 'Sign In →'}
          </button>
        </form>

        <p className="text-center text-xs text-white/20 font-body mt-6">
          © {new Date().getFullYear()} The Little Garimayans Pvt. Ltd.
        </p>
      </div>
    </div>
  )
}
