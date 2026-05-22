import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Parent Portal',
  description: 'Access your child\'s progress, daily updates, attendance, and fee details on The Little Garimayans parent portal.',
}

const features = [
  { emoji:'📊', title:'Progress Reports',     desc:'Monthly detailed reports on your child\'s SPACE development milestones.' },
  { emoji:'📸', title:'Daily Photos',         desc:'Real-time photo updates from class activities shared securely.' },
  { emoji:'📅', title:'Attendance Tracker',   desc:'View daily attendance records and absence notifications instantly.' },
  { emoji:'💰', title:'Fee Management',       desc:'Pay fees online, download receipts, and track payment history.' },
  { emoji:'📢', title:'School Notices',       desc:'Circulars, event updates, and important school communications.' },
  { emoji:'💬', title:'Teacher Connect',      desc:'Direct messaging with your child\'s class teacher.' },
]

export default function ParentPortalPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #2D5D8A, #1A3A5C)' }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">👨‍👩‍👧</div>
            <SectionBadge color="gold" className="mb-5">Parent Portal</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Stay Connected with Your <span className="text-brand-gold">Child&apos;s World</span>
            </h1>
            <p className="text-white/70 font-body text-lg">
              Real-time updates, progress tracking, and direct teacher connect — all in one place.
            </p>
          </div>
        </div>

        <section className="section-pad section-max">
          <div className="text-center mb-12">
            <SectionBadge color="blue" className="mb-4">Portal Features</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Everything You Need, <span className="text-gradient-brand">At a Glance</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {features.map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-display font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-brand-soft font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-10 rounded-4xl" style={{ background: 'linear-gradient(135deg, #EDF2FF, #D0DEF7)' }}>
            <h2 className="font-display font-bold text-brand-dark text-2xl mb-3">Access the Portal</h2>
            <p className="text-brand-soft font-body mb-6">Portal access is provided after enrollment. Contact your center admin for login credentials.</p>
            <Link href="/contact" className="px-8 py-4 rounded-full font-display font-bold text-white inline-block"
              style={{ background: 'linear-gradient(135deg, #2D5D8A, #1A3A5C)' }}>
              Contact Your Center →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
