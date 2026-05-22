import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore photos and videos from The Little Garimayans — joyful learning moments, events, and campus life.',
}

const categories = ['All', 'Classroom', 'Events', 'Sports Day', 'Art & Craft', 'Graduation', 'Field Trips']

const placeholderImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  alt: `Gallery image ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  emoji: ['🎨','🎭','📚','🏃','🌸','⭐','🎵','🌿','🎪','🎠','🌈','🎯'][i],
  color: ['#FAA21B','#EE3869','#17998F','#2D5D8A','#99292D','#FAA21B','#EE3869','#17998F','#2D5D8A','#99292D','#EE3869','#17998F'][i],
}))

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionBadge color="pink" className="mb-5">Gallery</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Moments of <span className="text-brand-gold">Joy & Learning</span>
            </h1>
            <p className="text-white/70 font-body text-lg">
              A glimpse into the vibrant, joyful world of The Little Garimayans.
            </p>
          </div>
        </div>

        <section className="section-pad section-max">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat}
                className="px-5 py-2 rounded-full text-sm font-semibold font-body transition-all duration-200 border-2 border-brand-red/20 text-brand-dark hover:bg-brand-red hover:text-white hover:border-brand-red first:bg-brand-red first:text-white first:border-brand-red">
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid (placeholder) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {placeholderImages.map(({ id, alt, emoji, color }, i) => (
              <div
                key={id}
                className={`group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-400 cursor-pointer ${
                  [0, 3, 6, 9].includes(i) ? 'row-span-2' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, ${color}22, ${color}44)`,
                  minHeight: [0, 3, 6, 9].includes(i) ? '300px' : '160px',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-40 group-hover:opacity-60 transition-opacity">
                  {emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-xs font-semibold font-body">{alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-soft font-body text-sm">📸 New photos added every week. Follow us on Instagram for daily updates!</p>
            <a href="#" className="inline-flex items-center gap-2 mt-4 px-8 py-3 rounded-full font-display font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #E1306C, #C13584)' }}>
              Follow on Instagram
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
