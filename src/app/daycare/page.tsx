import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Daycare',
  description: 'Safe, nurturing daycare at The Little Garimayans. Extended hours for working parents, with CCTV, trained caregivers, and premium facilities.',
}

const features = [
  { emoji:'🔒', title:'100% Safe',           desc:'CCTV-monitored, trained caregivers, and child-proofed environment at every center.' },
  { emoji:'🍱', title:'Nutritious Meals',     desc:'Healthy, balanced meals and snacks prepared fresh daily. Allergy-aware menus.' },
  { emoji:'😴', title:'Rest Time',            desc:'Comfortable sleeping areas with dedicated caregivers for rest and nap time.' },
  { emoji:'📱', title:'Parent Updates',       desc:'Real-time WhatsApp updates, photos, and daily activity reports to keep you informed.' },
  { emoji:'🎨', title:'Structured Play',      desc:'Guided activities, crafts, and play to engage and develop children through the day.' },
  { emoji:'❤️', title:'Emotional Support',   desc:'Trained caregivers who provide warmth, stability, and emotional security all day long.' },
]

const timings = [
  { title:'Standard Day',   time:'7:00 AM – 1:00 PM',   desc:'Includes preschool program + lunch' },
  { title:'Extended Day',   time:'7:00 AM – 4:00 PM',   desc:'Standard + afternoon activities & snack' },
]

export default function DaycarePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #17998F 0%, #0D7A72 100%)' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-48 h-48 bg-white rounded-full blur-2xl" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">🏡</div>
            <SectionBadge color="gold" className="mb-5">Daycare Program</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              A Safe Home Away from Home
            </h1>
            <p className="text-white/85 font-body text-lg leading-relaxed">
              For working parents who want the best for their child — safe, nurturing, and enriching care from early morning to evening.
            </p>
          </div>
        </div>

        <section className="section-pad section-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {timings.map(({ title, time, desc }) => (
              <div key={title} className="p-8 bg-white rounded-3xl shadow-card text-center hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
                <h3 className="font-display font-bold text-brand-teal text-xl mb-2">{title}</h3>
                <p className="font-display font-bold text-brand-dark text-lg mb-2">{time}</p>
                <p className="text-sm text-brand-soft font-body">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <SectionBadge color="teal" className="mb-4">What We Offer</SectionBadge>
            <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
              Premium Care, <span className="text-gradient-teal">Peace of Mind</span>
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
        </section>

        <div className="py-16 px-6 text-center" style={{ background: 'linear-gradient(135deg, #17998F, #0D7A72)' }}>
          <h2 className="font-display font-bold text-white text-3xl mb-4">Check Daycare Availability</h2>
          <p className="text-white/80 mb-8 font-body">Limited spots per center. Reach out to enquire about availability near you.</p>
          <Link href="/contact" className="px-10 py-4 rounded-full font-display font-bold text-brand-teal bg-white hover:-translate-y-1 transition-all duration-300 inline-block">
            Enquire Now →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
