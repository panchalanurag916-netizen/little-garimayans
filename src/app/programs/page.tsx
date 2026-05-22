import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Explore age-appropriate programs at The Little Garimayans — Playgroup, Nursery, Junior KG, Senior KG, Daycare, and Summer Camp.',
}

const programs = [
  {
    id: 'playgroup',
    emoji: '🌱', title: 'Playgroup', age: '1.5 – 2.5 years',
    tagline: 'First Steps Into Learning',
    color: '#FAA21B',
    bg: 'linear-gradient(135deg, #FFF8E7, #FFE8C0)',
    features: [
      'Sensory play activities for cognitive development',
      'Parent-child bonding sessions every week',
      'Music, rhythm & movement classes',
      'Language stimulation through stories & songs',
      'Social skill foundations & peer interaction',
      'Gentle routine-building and independence',
    ],
    outcomes: ['Develops attachment security', 'Builds sensory awareness', 'Sparks early curiosity'],
  },
  {
    id: 'nursery',
    emoji: '🌸', title: 'Nursery', age: '2.5 – 3.5 years',
    tagline: 'Building Curiosity & Confidence',
    color: '#EE3869',
    bg: 'linear-gradient(135deg, #FFF0F5, #FFD6E7)',
    features: [
      'Pre-reading and phonics introduction',
      'Number concepts, sorting & pattern recognition',
      'Creative arts, craft & free expression',
      'Outdoor exploration & nature play',
      'Full SPACE framework integration',
      'Emotional intelligence activities',
    ],
    outcomes: ['Builds pre-literacy skills', 'Develops number sense', 'Grows creative confidence'],
  },
  {
    id: 'jr-kg',
    emoji: '🚀', title: 'Junior KG', age: '3.5 – 4.5 years',
    tagline: 'Growing & Exploring',
    color: '#2D5D8A',
    bg: 'linear-gradient(135deg, #EDF2FF, #D0DEF7)',
    features: [
      'Pre-writing and alphabet recognition',
      'Math readiness and logical thinking',
      'Science exploration and experimentation',
      'Yoga, movement & fine motor skills',
      'Digital literacy basics',
      'Leadership and presentation skills',
    ],
    outcomes: ['Builds writing readiness', 'Develops logical mind', 'Grows physical confidence'],
  },
  {
    id: 'sr-kg',
    emoji: '⭐', title: 'Senior KG', age: '4.5 – 6 years',
    tagline: 'School-Readiness & Beyond',
    color: '#17998F',
    bg: 'linear-gradient(135deg, #E8F7F6, #C5EDE9)',
    features: [
      'Full reading and writing readiness',
      'Advanced STEM exploration',
      'School interview preparation',
      'Leadership, confidence & public speaking',
      'Digital literacy and creative computing',
      'Project-based collaborative learning',
    ],
    outcomes: ['100% school ready', 'Strong academic foundation', 'Confident communicators'],
  },
]

const differentiators = [
  { emoji: '🧬', title: 'Research-Backed', desc: 'Built on neuroscience & child development research' },
  { emoji: '👩‍🏫', title: 'Expert Educators', desc: 'Trained, certified, passionate teachers' },
  { emoji: '🌿', title: 'Safe Environment', desc: 'CCTV, trained staff, child-safe infrastructure' },
  { emoji: '📱', title: 'Parent Connect', desc: 'Daily updates, photos & progress reports' },
  { emoji: '🎨', title: 'Creative Spaces', desc: 'Purpose-built zones for every SPACE dimension' },
  { emoji: '🌏', title: 'Global Standards', desc: 'International curriculum, Indian heart' },
]

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <div className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/30 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <SectionBadge color="gold" className="mb-5">Our Programs</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Age-Perfect <span className="text-brand-gold">Learning</span> Journeys
            </h1>
            <p className="text-white/70 font-body text-lg">
              Every stage of childhood deserves the right environment. Our programs grow with your child.
            </p>
          </div>
        </div>

        {/* Programs */}
        <section className="section-pad section-max">
          <div className="flex flex-col gap-16">
            {programs.map(({ id, emoji, title, age, tagline, color, bg, features, outcomes }, idx) => (
              <div
                key={id}
                id={id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                {/* Visual */}
                <div className={`${idx % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="rounded-4xl p-12 text-center relative overflow-hidden" style={{ background: bg }}>
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30" style={{ background: color }} />
                    <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20" style={{ background: color }} />
                    <div className="relative">
                      <div className="text-8xl mb-4">{emoji}</div>
                      <h2 className="font-display font-bold text-brand-dark text-3xl mb-1">{title}</h2>
                      <p className="font-semibold font-body" style={{ color }}>{age}</p>
                      <p className="text-brand-soft font-body mt-2 text-sm">{tagline}</p>

                      <div className="flex justify-center gap-3 mt-6 flex-wrap">
                        {outcomes.map((o) => (
                          <span key={o} className="text-xs px-3 py-1.5 rounded-full font-semibold text-white font-body" style={{ background: color }}>
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <SectionBadge style={{ background: color }} className="mb-5">
                    Ages {age}
                  </SectionBadge>
                  <h2 className="font-display font-bold text-brand-dark text-3xl mb-4">{title}</h2>
                  <p className="text-brand-soft font-body leading-relaxed mb-6">{tagline}</p>
                  <ul className="space-y-3 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 font-body text-brand-soft">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white mt-0.5" style={{ background: color }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-white transition-all duration-300 hover:-translate-y-1"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 8px 32px ${color}40` }}
                  >
                    Enroll for {title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why us */}
        <div className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFF0F7)' }}>
          <div className="section-max">
            <div className="text-center mb-12">
              <SectionBadge color="teal" className="mb-4">Why Choose Us</SectionBadge>
              <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                What Makes Us <span className="text-gradient-brand">Different</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {differentiators.map(({ emoji, title, desc }) => (
                <div key={title} className="p-6 bg-white rounded-3xl shadow-card text-center hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
                  <div className="text-4xl mb-3">{emoji}</div>
                  <h3 className="font-display font-bold text-brand-dark mb-2">{title}</h3>
                  <p className="text-sm text-brand-soft font-body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
          <h2 className="font-display font-bold text-white text-3xl mb-4">Ready to Enroll?</h2>
          <p className="text-white/80 mb-8 font-body">Schedule a free school tour and see the magic for yourself.</p>
          <Link href="/admissions" className="px-10 py-4 rounded-full font-display font-bold text-brand-red bg-white hover:-translate-y-1 transition-all duration-300 inline-block">
            ✨ Book a School Tour
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
