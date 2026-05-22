import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Find The Little Garimayans centers near you. 50+ locations across India.',
}

const cities = [
  { city:'Mumbai',     state:'Maharashtra', centers:8,  flagship:true },
  { city:'Pune',       state:'Maharashtra', centers:6,  flagship:false },
  { city:'Delhi NCR',  state:'Delhi',       centers:7,  flagship:true },
  { city:'Bengaluru',  state:'Karnataka',   centers:5,  flagship:false },
  { city:'Ahmedabad',  state:'Gujarat',     centers:5,  flagship:true },
  { city:'Hyderabad',  state:'Telangana',   centers:4,  flagship:false },
  { city:'Chennai',    state:'Tamil Nadu',  centers:3,  flagship:false },
  { city:'Jaipur',     state:'Rajasthan',   centers:3,  flagship:false },
  { city:'Surat',      state:'Gujarat',     centers:3,  flagship:false },
  { city:'Lucknow',    state:'UP',          centers:2,  flagship:false },
  { city:'Indore',     state:'MP',          centers:2,  flagship:false },
  { city:'Chandigarh', state:'Punjab',      centers:2,  flagship:false },
]

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionBadge color="teal" className="mb-5">Our Locations</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              50+ Centers <span className="text-brand-gold">Across India</span>
            </h1>
            <p className="text-white/70 font-body text-lg">Find a Little Garimayans center in your city. We&apos;re growing every month!</p>
          </div>
        </div>
        <section className="section-pad section-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map(({ city, state, centers, flagship }) => (
              <div key={city} className="p-6 bg-white rounded-3xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 relative">
                {flagship && (
                  <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full bg-brand-gold/15 text-brand-gold font-body">⭐ Flagship</span>
                )}
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-display font-bold text-brand-dark text-xl">{city}</h3>
                <p className="text-brand-soft text-sm font-body mb-3">{state}</p>
                <p className="text-brand-red font-bold text-sm font-body">{centers} center{centers > 1 ? 's' : ''}</p>
                <Link href="/contact" className="mt-4 block text-center py-2.5 rounded-xl text-sm font-bold font-display text-brand-red border-2 border-brand-red/20 hover:bg-brand-red hover:text-white transition-all duration-200">
                  Find Center →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 p-8 rounded-4xl text-center" style={{ background: 'linear-gradient(135deg, #FFF8E7, #FFF0E0)' }}>
            <h2 className="font-display font-bold text-brand-dark text-2xl mb-3">Don&apos;t See Your City?</h2>
            <p className="text-brand-soft font-body mb-6">We&apos;re expanding fast. You could be the one to bring Little Garimayans to your city through our franchise program!</p>
            <Link href="/franchise" className="px-8 py-4 rounded-full font-display font-bold text-white inline-block"
              style={{ background: 'linear-gradient(135deg, #FAA21B, #F07D15)' }}>
              🏫 Explore Franchise Opportunity
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
