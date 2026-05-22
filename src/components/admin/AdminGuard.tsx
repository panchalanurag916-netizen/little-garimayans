'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router   = useRouter()
  const pathname = usePathname()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    /* The login page is exempted */
    if (pathname === '/admin/login') { setChecking(false); return }

    /* Simple check: try to hit a protected endpoint */
    fetch('/api/admin/stats')
      .then((r) => {
        if (r.status === 401) router.replace('/admin/login')
        else setChecking(false)
      })
      .catch(() => router.replace('/admin/login'))
  }, [pathname, router])

  if (checking && pathname !== '/admin/login') {
    return (
      <div className="min-h-screen bg-[#0a0d14] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return <>{children}</>
}
