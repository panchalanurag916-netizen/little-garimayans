'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { Tilt3DCard }   from '@/components/ui/Tilt3DCard'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const PROGRAMS = [
  {
    emoji:  '🌱',
    title:  'Playgroup',
    age:    '2 – 3 Years',
    badge:  'Starting Out',
    colors: ['#FFF8E7', '#FFE8C0'],
    accentColor: '#FAA21B',
    sparkFocus: 'S + P + R',
    features: [
      'Sensory play & exploration',
      'Music & movement activities',
      'Teacher-child bonding',
      'Language stimulation',
      'Social skill foundations',
      'Practical life routines',
    ],
    href: '/programs#playgroup',
  },
  {
    emoji:  '🌸',
    title:  'Nursery',
    age:    '3 – 4 Years',
    badge:  'Most Popular',
    colors: ['#FFF0F5', '#FFD6E7'],
    accentColor: '#EE3869',
    sparkFocus: 'P + R + K',
    features: [
      'Vocabulary & oral expression',
      'Pre-writing strokes',
      'Number exposure & sorting',
      'Story participation & phonics',
      'Imaginative guided play',
      'SPARK curriculum integration',
    ],
    href: '/programs#nursery',
  },
  {
    emoji:  '🚀',
    title:  'LKG',
    age:    '4 – 5 Years',
    badge:  'Building Up',
    colors: ['#EDF2FF', '#D0DEF7'],
    accentColor: '#2D5D8A',
    features: [
      'Phonics & letter-sound association',
      'Number recognition & counting',
      'Patterns & sequencing',
      'Creativity & open-ended art',
      'Collaborative learning',
      'Early reading readiness',
    ],
    sparkFocus: 'A + K + P',
    href: '/programs#lkg',
  },
  {
    emoji:  '⭐',
    title:  'UKG',
    age:    '5 – 6 Years',
    badge:  'School Ready!',
    colors: ['#E8F7F6', '#C5EDE9'],
    accentColor: '#17998F',
    sparkFocus: 'K + R + A',
    features: [
      'Reading & writing readiness',
      'Number operations & reasoning',
      'Critical thinking & inquiry',
      'School readiness skills',
      'Leadership opportunities',
      'Communication confidence',
    ],
    href: '/programs#ukg',
  },
]

export function ProgramsSection() {
  const ref   = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: '-30%',
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: 1.3,
        },
      })
      gsap.from('.prog-header', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.prog-header', start: 'top 80%', once: true },
      })
      ScrollTrigger.batch('.prog-card', {
        start: 'top 84%',
        onEnter: (els) =>
          gsap.fromTo(els,
            { opacity: 0, y: 60, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.13, ease: 'power3.out' }
          ),
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: '#FAFBFF' }}>
      {/* ── Parallax depth layer ── */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none" style={{ willChange:'transform' }}>
        <div className="absolute" style={{ top:'-15%', left:'-10%', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle,rgba(45,93,138,0.14) 0%,transparent 65%)', filter:'blur(70px)' }}/>
        <div className="absolute" style={{ bottom:'-10%', right:'-8%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(238,56,105,0.13) 0%,transparent 65%)', filter:'blur(65px)' }}/>
        <div className="absolute" style={{ top:'40%', left:'40%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(250,162,27,0.12) 0%,transparent 65%)', filter:'blur(60px)' }}/>
        <div className="absolute" style={{ top:'10%', right:'20%', width:250, height:250, borderRadius:'50%', background:'radial-gradient(circle,rgba(23,153,143,0.11) 0%,transparent 65%)', filter:'blur(50px)' }}/>
      </div>

      <div className="section-max relative z-10 section-pad">
        <div className="prog-header text-center mb-16">
          <SectionBadge className="mb-5">Our Programs</SectionBadge>
          <h2 className="font-hero text-brand-dark mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', lineHeight: 1.1 }}>
            Age-Perfect{' '}
            <span style={{ background:'linear-gradient(135deg,#FAA21B,#F07D15)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Learning</span>
          </h2>
          <p className="text-brand-soft max-w-lg mx-auto font-body leading-relaxed">
            From Playgroup to UKG — every stage designed with the SPARK Curriculum
            for joyful, developmentally appropriate learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: '1400px' }}>
          {PROGRAMS.map(({ emoji, title, age, badge, colors, accentColor, features, sparkFocus, href }) => (
            <Tilt3DCard
              key={title}
              className="prog-card rounded-4xl overflow-hidden shadow-card"
              style={{ background: '#fff' }}
            >
              <Link href={href} className="group block h-full">
                {/* Card header */}
                <div
                  className="relative p-8 pb-6 text-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})` }}
                >
                  <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.85)', color: accentColor }}>
                    {badge}
                  </span>
                  <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full opacity-20" style={{ background: accentColor }} />
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-10" style={{ background: accentColor }} />
                  <div className="relative text-5xl mb-3 transition-transform duration-400 group-hover:scale-110 group-hover:rotate-6 inline-block">
                    {emoji}
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-xl mb-1">{title}</h3>
                  <p className="text-sm font-semibold font-body" style={{ color: accentColor }}>{age}</p>
                  {/* SPARK focus tag */}
                  <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold font-body"
                    style={{ background: `${accentColor}18`, color: accentColor }}>
                    SPARK: {sparkFocus}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <ul className="space-y-2.5 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-brand-soft font-body">
                        <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: accentColor }}>✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold font-display text-white transition-all duration-300 group-hover:gap-3"
                    style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Tilt3DCard>
          ))}
        </div>

        {/* NCF-FS note */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-sm text-brand-soft font-body text-center">
            All programs follow the <strong className="text-brand-dark">NCF-FS 2022</strong> framework with developmentally appropriate practices
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-brand-red font-semibold font-body hover:gap-3 transition-all duration-200"
          >
            View Detailed Curriculum & SPARK Mapping
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
