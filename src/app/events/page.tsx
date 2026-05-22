import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming events, workshops, and celebrations at The Little Garimayans.',
}

const events = [
  { emoji:'🎪', title:"Annual Day 2024",           date:"June 15, 2024",      location:"All Centers",           category:"Annual",      open:true },
  { emoji:'🌱', title:"Nursery Orientation",        date:"June 8, 2024",       location:"Pan India",             category:"Admission",   open:true },
  { emoji:'🖌️', title:"Little Artists Workshop",   date:"June 22, 2024",      location:"Mumbai, Pune, Delhi",   category:"Workshop",    open:true },
  { emoji:'📖', title:"Parents' Reading Circle",    date:"June 29, 2024",      location:"Online",                category:"Parents",     open:false },
  { emoji:'🏃', title:"Sports & Wellness Day",     date:"July 6, 2024",       location:"All Centers",           category:"Sports",      open:true },
  { emoji:'🎵', title:"Music & Movement Fest",     date:"July 20, 2024",      location:"Ahmedabad, Surat",      category:"Cultural",    open:true },
]

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionBadge color="gold" className="mb-5">Events</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Upcoming <span className="text-brand-gold">Events & Celebrations</span>
            </h1>
            <p className="text-white/70 font-body text-lg">Join us for magical moments, learning workshops, and community celebrations.</p>
          </div>
        </div>
        <section className="section-pad section-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(({ emoji, title, date, location, category, open }) => (
              <div key={title} className="bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="h-40 flex items-center justify-center text-7xl" style={{ background: 'linear-gradient(135deg, #FFF8E7, #FFF0F5)' }}>{emoji}</div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-cream text-brand-red font-body">{category}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full font-body ${open ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                      {open ? 'Registration Open' : 'Coming Soon'}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-lg mb-2">{title}</h3>
                  <p className="text-sm text-brand-soft font-body mb-1">📅 {date}</p>
                  <p className="text-sm text-brand-soft font-body mb-5">📍 {location}</p>
                  {open && (
                    <Link href="/contact" className="block text-center py-3 rounded-2xl font-display font-bold text-white text-sm"
                      style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
                      Register Now →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
