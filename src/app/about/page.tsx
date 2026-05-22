import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { LogoSVG } from '@/components/ui/LogoSVG'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Little Garimayans mission, values, SPACE framework, and our dedicated team of early childhood educators.',
}

const values = [
  { emoji: '🌟', title: 'Child-Centric',   desc: 'Every decision, every activity, every interaction is designed around the child\'s wellbeing and growth.' },
  { emoji: '🧠', title: 'Research-Backed', desc: 'Our SPACE curriculum is built on the latest findings in early childhood development and neuroscience.' },
  { emoji: '💛', title: 'Warmth & Safety', desc: 'We create environments where children feel safe, loved, and free to explore without fear of failure.' },
  { emoji: '🌍', title: 'Inclusive',       desc: 'We celebrate diversity and create spaces where every child — regardless of background — can thrive.' },
  { emoji: '🚀', title: 'Future-Ready',    desc: 'We prepare children for a rapidly changing world through creativity, critical thinking, and adaptability.' },
  { emoji: '🤝', title: 'Community',       desc: 'We believe in building strong partnerships with parents and communities for holistic child development.' },
]

const milestones = [
  { year: '2018', event: 'The Little Garimayans founded with a single vision: redefine preschool education in India.' },
  { year: '2019', event: 'SPACE framework developed and first pilot centers launched across 3 cities.' },
  { year: '2020', event: 'Launched parent engagement portal and virtual learning modules during COVID-19.' },
  { year: '2021', event: 'Expanded to 20+ franchise centers. Crossed 2,000 enrolled children.' },
  { year: '2022', event: 'Received recognition as one of India\'s Top 10 Preschool Brands.' },
  { year: '2023', event: '50+ centers operational. 5,000+ happy children. Franchise available Pan India.' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">

        {/* Hero banner */}
        <div
          className="relative py-28 px-6 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d0612, #1a0918, #10151f)' }}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-brand-gold/20 blur-2xl" />
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-brand-pink/20 blur-2xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <LogoSVG className="w-20 h-auto" glowing />
            </div>
            <SectionBadge color="gold" className="mb-5">Our Story</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              About <span className="text-brand-gold">The Little</span>{' '}
              <span className="text-brand-pink">Garimayans</span>
            </h1>
            <p className="text-white/70 font-body text-lg leading-relaxed">
              A dream born from the belief that every Indian child deserves world-class early childhood education.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <section className="section-pad section-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="p-8 rounded-4xl" style={{ background: 'linear-gradient(135deg, #FFF8E7, #FFF0E0)' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="font-display font-bold text-brand-dark text-2xl mb-3">Our Mission</h2>
              <p className="text-brand-soft font-body leading-relaxed">
                To nurture India&apos;s youngest learners through the SPACE framework — creating safe, stimulating, and joyful
                environments where every child can discover their unique potential and grow into confident, compassionate,
                and creative individuals.
              </p>
            </div>
            <div className="p-8 rounded-4xl" style={{ background: 'linear-gradient(135deg, #EDF2FF, #E0E8FF)' }}>
              <div className="text-4xl mb-4">🔭</div>
              <h2 className="font-display font-bold text-brand-dark text-2xl mb-3">Our Vision</h2>
              <p className="text-brand-soft font-body leading-relaxed">
                To be India&apos;s most trusted and loved preschool brand — present in every city, town, and neighbourhood —
                touching 1 million children&apos;s lives by 2030 and setting a new gold standard for early childhood education
                across South Asia.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { target: 5000, suffix: '+', label: 'Happy Children' },
              { target: 50,   suffix: '+', label: 'Centers' },
              { target: 200,  suffix: '+', label: 'Educators' },
              { target: 5,    suffix: '+', label: 'Years' },
            ].map(({ target, suffix, label }) => (
              <div key={label} className="text-center p-6 bg-white rounded-3xl shadow-card">
                <AnimatedCounter target={target} suffix={suffix}
                  className="block font-display font-bold text-brand-red mb-1"
                  style={{ fontSize: '2.8rem', lineHeight: 1 }}
                />
                <p className="text-sm text-brand-soft font-body">{label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <SectionBadge color="teal" className="mb-4">What We Believe</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Our Core <span className="text-gradient-brand">Values</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {values.map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="font-display font-bold text-brand-dark text-lg mb-2">{title}</h3>
                <p className="text-sm text-brand-soft font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="text-center mb-12">
            <SectionBadge className="mb-4">Our Journey</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              A Journey of <span className="text-gradient-brand">Impact</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-gold/30 md:-translate-x-0.5" />
            <div className="flex flex-col gap-8">
              {milestones.map(({ year, event }, i) => (
                <div key={year} className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 pl-16 md:pl-0 md:pr-12 md:text-right" style={{ order: i % 2 === 0 ? 1 : 3 }}>
                    <div className="font-display font-bold text-brand-gold text-xl mb-1">{year}</div>
                    <p className="text-brand-soft font-body text-sm leading-relaxed">{event}</p>
                  </div>
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-brand-red border-4 border-white shadow-sm mt-1 flex-shrink-0" style={{ order: 2 }} />
                  <div className="hidden md:block md:w-1/2" style={{ order: i % 2 === 0 ? 3 : 1 }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
          <h2 className="font-display font-bold text-white text-3xl mb-4">Be Part of Our Story</h2>
          <p className="text-white/80 font-body mb-8">Enroll your child or join us as a franchise partner.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="px-8 py-4 rounded-full font-display font-bold text-brand-red bg-white hover:-translate-y-1 transition-all duration-300">
              ✨ Enroll Your Child
            </Link>
            <Link href="/franchise" className="px-8 py-4 rounded-full font-display font-bold text-white border-2 border-white/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              🏫 Franchise Enquiry
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
