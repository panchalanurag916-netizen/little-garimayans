import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join The Little Garimayans team. We are hiring preschool teachers, curriculum designers, and operations staff across India.',
}

const openings = [
  { title:'Preschool Teacher',      location:'Mumbai, Pune, Delhi',  type:'Full-time', dept:'Academics' },
  { title:'Center Head',            location:'Bengaluru, Chennai',   type:'Full-time', dept:'Operations' },
  { title:'Curriculum Developer',   location:'Remote / Head Office', type:'Full-time', dept:'Academics' },
  { title:'Franchise Relations Mgr',location:'Pan India',            type:'Full-time', dept:'Franchise' },
  { title:'Marketing Executive',    location:'Head Office',          type:'Full-time', dept:'Marketing' },
  { title:'Admissions Counsellor',  location:'Multiple Cities',      type:'Full-time', dept:'Admissions' },
]

const perks = [
  { emoji:'💸', label:'Competitive Pay' }, { emoji:'📚', label:'Continuous Learning' },
  { emoji:'🏥', label:'Health Benefits' }, { emoji:'🌴', label:'Paid Leaves' },
  { emoji:'🤝', label:'Great Team' },      { emoji:'🚀', label:'Growth Path' },
]

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #2D5D8A, #1A3A5C)' }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionBadge color="gold" className="mb-5">Join Our Team</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Shape the Future of <span className="text-brand-gold">Education</span>
            </h1>
            <p className="text-white/70 font-body text-lg">
              Join a passionate team dedicated to nurturing India&apos;s youngest minds. Make a difference every single day.
            </p>
          </div>
        </div>

        <section className="section-pad section-max">
          <div className="text-center mb-12">
            <SectionBadge color="blue" className="mb-4">Current Openings</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Find Your <span className="text-gradient-brand">Perfect Role</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 mb-20">
            {openings.map(({ title, location, type, dept }) => (
              <div key={title} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 gap-4">
                <div>
                  <h3 className="font-display font-bold text-brand-dark text-lg">{title}</h3>
                  <p className="text-sm text-brand-soft font-body mt-1">📍 {location} &nbsp;·&nbsp; {type} &nbsp;·&nbsp; {dept}</p>
                </div>
                <Link href="/contact?type=career"
                  className="flex-shrink-0 px-6 py-3 rounded-full font-display font-bold text-white text-sm"
                  style={{ background: 'linear-gradient(135deg, #2D5D8A, #1A3A5C)' }}>
                  Apply Now →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">Why Work With Us?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {perks.map(({ emoji, label }) => (
                <div key={label} className="flex items-center gap-2 px-5 py-3 bg-white rounded-full shadow-card text-sm font-semibold text-brand-dark font-body">
                  <span>{emoji}</span>{label}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
