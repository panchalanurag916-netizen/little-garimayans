'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: 'My daughter transformed completely after joining Little Garimayans. She\'s more confident, creative, and genuinely loves going to school every day. The SPACE framework is truly remarkable!',
    name:  'Priya Sharma',
    role:  'Parent · Mumbai',
    avatar:'P',
    color: '#EE3869',
    stars: 5,
  },
  {
    quote: 'The teachers genuinely care about each child. My son\'s language skills improved dramatically in just 3 months. Best decision we ever made for his early education.',
    name:  'Rahul Mehta',
    role:  'Parent · Pune',
    avatar:'R',
    color: '#2D5D8A',
    stars: 5,
  },
  {
    quote: 'As a franchise owner, I\'ve seen incredible growth both personally and professionally. The HQ support is outstanding. Proud to be part of this beautiful mission!',
    name:  'Anjali Patel',
    role:  'Franchise Owner · Ahmedabad',
    avatar:'A',
    color: '#17998F',
    stars: 5,
  },
  {
    quote: 'The holistic approach to early education is outstanding. My child comes home excited about what she learned every day. Worth every rupee — and so much more.',
    name:  'Suresh Kumar',
    role:  'Parent · Bengaluru',
    avatar:'S',
    color: '#FAA21B',
    stars: 5,
  },
  {
    quote: 'What sets Little Garimayans apart is the warmth. The teachers know every child by name and truly invest in their growth. My son went from shy to confident in 6 months.',
    name:  'Meera Iyer',
    role:  'Parent · Chennai',
    avatar:'M',
    color: '#99292D',
    stars: 5,
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testi-header', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.testi-header', start: 'top 80%', once: true },
      })
      ScrollTrigger.batch('.testi-card', {
        start: 'top 84%',
        onEnter: (els) => gsap.fromTo(els,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, stagger: 0.14, duration: 0.7, ease: 'power3.out' }
        ),
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  /* Visible testimonials — show 3 at a time on large screens */
  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ]

  return (
    <div ref={ref} style={{ background: 'linear-gradient(135deg, #FFF8F0 0%, #FFF0F7 100%)', padding: '100px 0' }}>
      <div className="section-max px-6 md:px-12">

        {/* Header */}
        <div className="testi-header text-center mb-16">
          <SectionBadge color="pink" className="mb-5">Parent Stories</SectionBadge>
          <h2 className="font-hero text-brand-dark mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', lineHeight: 1.1 }}>
            Voices of{' '}
            <span style={{ background:'linear-gradient(135deg,#EE3869,#17998F)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Our Community</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="testi-card bg-white rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-display text-5xl text-brand-gold/30 leading-none mb-3">"</div>

              {/* Text */}
              <p className="text-brand-soft leading-relaxed text-sm mb-6 font-body italic">{t.quote}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 font-display"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-sm font-display">{t.name}</p>
                  <p className="text-xs text-brand-soft font-body">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-brand-red/30 flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-all duration-200"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{ background: i === active ? '#99292D' : '#D1D5DB', width: i === active ? '24px' : '8px' }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-brand-red/30 flex items-center justify-center text-brand-red hover:bg-brand-red hover:text-white transition-all duration-200"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
