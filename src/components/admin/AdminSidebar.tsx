'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoSVG } from '@/components/ui/LogoSVG'
import {
  LayoutDashboard, Users, Building2, FileText,
  Image, Calendar, MessageSquare, Settings, LogOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/admin/dashboard',   icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/admissions',  icon: Users,           label: 'Admissions' },
  { href: '/admin/franchise',   icon: Building2,       label: 'Franchise Leads' },
  { href: '/admin/contacts',    icon: MessageSquare,   label: 'Contact Enquiries' },
  { href: '/admin/blog',        icon: FileText,        label: 'Blog' },
  { href: '/admin/gallery',     icon: Image,           label: 'Gallery' },
  { href: '/admin/events',      icon: Calendar,        label: 'Events' },
  { href: '/admin/settings',    icon: Settings,        label: 'Settings' },
]

export function AdminSidebar() {
  const pathname = usePathname()

  const logout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' })
    window.location.href = '/admin/login'
  }

  return (
    <aside className="admin-sidebar flex flex-col sticky top-0 h-screen">
      {/* Brand */}
      <div className="p-5 border-b border-white/6">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <LogoSVG className="w-9 h-auto" />
          <div>
            <p className="text-xs text-white/40 font-body">Admin Panel</p>
            <p className="text-sm font-display font-bold text-brand-gold">Little Garimayans</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {nav.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn('admin-nav-link', pathname.startsWith(href) && href !== '/admin' && 'active')}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {label}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/6">
        <button
          onClick={logout}
          className="admin-nav-link w-full text-left text-red-400 hover:text-red-300 hover:bg-red-500/10"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
