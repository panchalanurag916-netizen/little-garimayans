import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { FranchiseForm } from '@/components/forms/FranchiseForm'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'

export const metadata: Metadata = {
  title: 'Franchise',
  description: 'Own a Little Garimayans franchise. Low investment, high ROI, lifetime support. Join India\'s fastest-growing preschool brand.',
}

const whyUs = [
  { emoji: '📈', title: 'Proven ROI',           desc: 'Average break-even in 12–18 months with strong recurring revenue from monthly fee model.' },
  { emoji: '🎓', title: 'Complete Training',     desc: 'Full onboarding, curriculum training, operations manual, and ongoing academic support.' },
  { emoji: '🎨', title: 'Brand Identity',        desc: 'Premium design, marketing materials, digital campaigns — everything done for you.' },
  { emoji: '📱', title: 'Tech Platform',         desc: 'Ready-to-use parent app, admin dashboard, and attendance management system.' },
  { emoji: '🌐', title: 'National Network',      desc: 'Be part of a growing family of 50+ partners and benefit from collective brand power.' },
  { emoji: '🔒', title: 'Territory Protection',  desc: 'Exclusive territory rights to protect your investment and customer base.' },
  { emoji: '📊', title: 'Demand Driven',         desc: 'Quality preschool is one of India\'s most recession-proof, high-demand businesses.' },
  { emoji: '💼', title: 'Professional Support',  desc: 'Dedicated franchise relationship manager assigned to every partner.' },
]

const models = [
  {
    title:      'Playschool Model',
    investment: '₹15–25 Lakhs',
    area:       '1500–2500 sq.ft',
    students:   '50–80 children',
    highlight:  false,
    color:      '#2D5D8A',
  },
  {
    title:      'Full Campus Model',
    investment: '₹25–50 Lakhs',
    area:       '3000–5000 sq.ft',
    students:   '100–200 children',
    highlight:  true,
    color:      '#99292D',
  },
  {
    title:      'Day Care + School',
    investment: '₹20–35 Lakhs',
    area:       '2500–4000 sq.ft',
    students:   '80–120 children',
    highlight:  false,
    color:      '#17998F',
  },
]

const steps = [
  { n: '01', title: 'Enquiry',           desc: 'Fill the franchise form. Our team will call within 48 hrs.' },
  { n: '02', title: 'Discovery Call',    desc: 'Detailed discussion about your city, budget, and goals.' },
  { n: '03', title: 'Business Plan',     desc: 'Personalized ROI projection for your location.' },
  { n: '04', title: 'Site Visit & Sign', desc: 'Visit our centers, sign the franchise agreement.' },
  { n: '05', title: 'Setup & Training',  desc: 'We set up the center with you and train your team.' },
  { n: '06', title: 'Grand Opening!',    desc: 'Launch your center with our marketing support.' },
]

export default function FranchisePage() {
  return (
    <>
      <Header />
      <main className="pt-20">

        {/* Hero — startup investment page style */}
        <div className="relative py-28 px-6 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d0612 0%, #1a0918 50%, #0a1628 100%)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-brand-gold/15 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-brand-pink/15 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <SectionBadge color="gold" className="mb-5">Franchise Opportunity</SectionBadge>
            <h1 className="font-display font-bold text-white mb-5" style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}>
              Build a Business That{' '}
              <span className="text-brand-gold">Changes Lives</span>
            </h1>
            <p className="text-white/70 font-body text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
              India&apos;s fastest-growing preschool brand. Low investment, strong returns, lifetime support.
              Join our mission to nurture India&apos;s future.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { target: 50,   suffix: '+', label: 'Active Partners' },
                { target: 18,   suffix: 'M', label: 'Avg Break-Even' },
                { target: 100,  suffix: '+', label: 'Cities Targeted' },
              ].map(({ target, suffix, label }) => (
                <div key={label} className="text-center px-8 py-4 rounded-2xl" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)' }}>
                  <AnimatedCounter target={target} suffix={suffix}
                    className="block font-display font-bold text-brand-gold text-3xl"
                  />
                  <p className="text-sm text-white/60 font-body mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Franchise models */}
        <section className="section-pad section-max">
          <div className="text-center mb-12">
            <SectionBadge color="blue" className="mb-4">Choose Your Model</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Franchise <span className="text-gradient-brand">Investment Models</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {models.map(({ title, investment, area, students, highlight, color }) => (
              <div
                key={title}
                className={`rounded-4xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  highlight
                    ? 'text-white shadow-xl scale-105'
                    : 'bg-white shadow-card hover:shadow-card-hover'
                }`}
                style={highlight ? { background: 'linear-gradient(135deg, #99292D, #EE3869)' } : {}}
              >
                {highlight && (
                  <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-white mb-4 font-body">
                    ⭐ Most Popular
                  </span>
                )}
                <h3 className={`font-display font-bold text-2xl mb-6 ${highlight ? 'text-white' : 'text-brand-dark'}`}>{title}</h3>
                {[
                  { label: 'Investment',       value: investment },
                  { label: 'Space Required',   value: area },
                  { label: 'Student Capacity', value: students },
                ].map(({ label, value }) => (
                  <div key={label} className={`flex justify-between py-3 border-b ${highlight ? 'border-white/20' : 'border-gray-100'}`}>
                    <span className={`text-xs font-body font-bold uppercase tracking-wider ${highlight ? 'text-white/65' : 'text-brand-soft'}`}>{label}</span>
                    <span className={`text-sm font-bold font-display ${highlight ? 'text-white' : ''}`} style={!highlight ? { color } : {}}>{value}</span>
                  </div>
                ))}
                <a href="#franchise-form" className={`mt-6 flex items-center justify-center py-3.5 rounded-2xl font-display font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                  highlight ? 'bg-white text-brand-red' : 'text-white'
                }`}
                style={!highlight ? { background: color } : {}}>
                  Get Details →
                </a>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-12">
            <SectionBadge color="teal" className="mb-4">Why Us</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              What You Get as a <span className="text-gradient-brand">Partner</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {whyUs.map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-display font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-brand-soft font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="text-center mb-12">
            <SectionBadge color="pink" className="mb-4">The Process</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Your Path to <span className="text-gradient-brand">Opening Day</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="flex gap-4 p-6 bg-white rounded-3xl shadow-card">
                <span className="font-display font-bold text-4xl text-brand-gold/30 flex-shrink-0 leading-none">{n}</span>
                <div>
                  <h3 className="font-display font-bold text-brand-dark mb-1">{title}</h3>
                  <p className="text-sm text-brand-soft font-body leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Franchise Form */}
        <div id="franchise-form" style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFF0F7)', padding: '80px 24px' }}>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <SectionBadge className="mb-4">Apply Now</SectionBadge>
              <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                Start Your Franchise Journey
              </h2>
              <p className="text-brand-soft font-body mt-3">Our franchise team will contact you within 48 hours.</p>
            </div>
            <FranchiseForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
