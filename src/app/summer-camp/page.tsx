import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Summer Camp',
  description: 'The Little Garimayans Summer Camp — 4 weeks of adventure, creativity, and learning for kids aged 2–8.',
}

const activities = [
  { emoji:'🎨', title:'Art Studio',       desc:'Painting, sculpting, origami and creative expression every day.' },
  { emoji:'🌿', title:'Nature Explorers', desc:'Outdoor learning, gardening, and discovery walks.' },
  { emoji:'🎵', title:'Music & Dance',    desc:'Rhythm, instruments, and movement classes with live music.' },
  { emoji:'📚', title:'Story Time',       desc:'Interactive storytelling, puppetry, and book exploration.' },
  { emoji:'🍳', title:'Little Chefs',     desc:'Fun cooking and baking activities teaching life skills.' },
  { emoji:'🏋️', title:'Yoga & Fitness',  desc:'Morning yoga, sports, and movement for healthy bodies.' },
  { emoji:'💻', title:'Digital Creators', desc:'Age-appropriate coding games and digital storytelling.' },
  { emoji:'🎭', title:'Drama & Theatre',  desc:'Role-play, skits, and mini-performances building confidence.' },
]

export default function SummerCampPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-28 px-6 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #FAA21B 0%, #E08A10 50%, #F07D15 100%)' }}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="text-6xl mb-4">☀️</div>
            <SectionBadge color="red" className="mb-5">Summer 2024</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}>
              The Most Magical Summer of Their Lives
            </h1>
            <p className="text-white/85 font-body text-xl leading-relaxed mb-8">
              4 weeks of adventure, creativity, discovery, and pure joy. For ages 2–8.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[{ label:'Duration', value:'4 Weeks' }, { label:'Age', value:'2–8 Years' }, { label:'Timing', value:'9 AM – 1 PM' }].map(({ label, value }) => (
                <div key={label} className="text-center px-8 py-4 rounded-2xl bg-white/15 backdrop-blur-sm">
                  <p className="font-display font-bold text-2xl text-white">{value}</p>
                  <p className="text-sm text-white/70 font-body">{label}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-block px-10 py-4 rounded-full font-display font-bold text-brand-gold bg-white hover:-translate-y-1 transition-all duration-300">
              Register for Summer Camp →
            </Link>
          </div>
        </div>

        <section className="section-pad section-max">
          <div className="text-center mb-12">
            <SectionBadge color="gold" className="mb-4">Activities</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              A World of <span className="text-gradient-gold">Adventure</span> Awaits
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {activities.map(({ emoji, title, desc }) => (
              <div key={title} className="p-6 bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="text-4xl mb-3">{emoji}</div>
                <h3 className="font-display font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-xs text-brand-soft font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #FAA21B, #F07D15)' }}>
          <h2 className="font-display font-bold text-white text-3xl mb-4">Limited Spots Available!</h2>
          <p className="text-white/80 mb-8 font-body">Early-bird registration is now open. Secure your child&apos;s spot today.</p>
          <Link href="/contact" className="px-10 py-4 rounded-full font-display font-bold text-brand-gold bg-brand-dark hover:-translate-y-1 transition-all duration-300 inline-block">
            Register Now →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
