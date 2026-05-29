'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { LogoSVG } from '@/components/ui/LogoSVG'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/about',     label: 'About Us' },
  { href: '/programs',  label: 'Programs' },
  { href: '/admissions',label: 'Admissions' },
  {
    label: 'More',
    children: [
      { href: '/gallery',       label: '🖼️ Gallery' },
      { href: '/events',        label: '📅 Events' },
      { href: '/blog',          label: '📝 Blog' },
      { href: '/summer-camp',   label: '☀️ Summer Camp' },
      { href: '/daycare',       label: '🏡 Daycare' },
      { href: '/locations',     label: '📍 Locations' },
      { href: '/careers',       label: '💼 Careers' },
      { href: '/parent-portal', label: '👨‍👩‍👧 Parent Portal' },
    ],
  },
  { href: '/franchise', label: 'Franchise', highlight: true },
]

export function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [dropOpen, setDropOpen]     = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-xl shadow-sm'
    : 'bg-white/80 backdrop-blur-md'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          navBg
        )}
      >
        <div className="section-max px-6 md:px-10 flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <LogoSVG className="w-11 h-auto transition-transform duration-300 group-hover:scale-105" />
            <div className="leading-tight">
              <span className="block text-xs font-semibold tracking-widest uppercase opacity-70 font-body text-brand-dark">The Little</span>
              <span className="block text-lg font-body font-bold text-brand-red">Garimayans</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key="more" className="relative" onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-body text-brand-dark hover:text-brand-red"
                  >
                    {link.label}
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', dropOpen && 'rotate-180')} />
                  </button>
                  <AnimatePresence>
                    {dropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0,  scale: 1 }}
                        exit={{   opacity: 0, y: 8,  scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {link.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-brand-red hover:bg-brand-cream/50 transition-colors font-body"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-body',
                    link.highlight
                      ? 'bg-gradient-to-r from-brand-gold to-[#F07D15] text-white shadow-brand-gold hover:shadow-lg hover:-translate-y-0.5 ml-2'
                      : 'text-brand-dark hover:text-brand-red hover:bg-brand-cream'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/admissions"
              className="ml-2 px-5 py-2.5 rounded-full text-sm font-bold bg-gradient-to-r from-brand-red to-brand-pink text-white shadow-brand hover:shadow-brand-pink hover:-translate-y-0.5 transition-all duration-300 font-body"
            >
              Enroll Now ✨
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors text-brand-dark"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{   opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 26, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key="more-mobile">
                      <p className="px-4 py-2 text-xs font-bold tracking-widest text-gray-400 uppercase mt-4">More Pages</p>
                      {link.children.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="block px-4 py-3 text-base font-semibold text-brand-dark hover:text-brand-red hover:bg-brand-cream rounded-xl transition-colors font-body">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href!}
                      className="block px-4 py-3 text-xl font-bold text-brand-dark hover:text-brand-red hover:bg-brand-cream rounded-xl transition-colors font-body"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="mt-auto pt-8 flex flex-col gap-3">
                <Link href="/admissions" className="block text-center py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-brand-red to-brand-pink text-lg font-body">
                  ✨ Enroll Your Child
                </Link>
                <Link href="/franchise" className="block text-center py-4 rounded-2xl font-bold text-brand-dark border-2 border-brand-gold text-lg font-body">
                  🏫 Own a Franchise
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
