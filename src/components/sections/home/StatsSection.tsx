'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { target: 5000, suffix: '+', label: 'Happy Children' },
  { target: 50,   suffix: '+', label: 'Centers Across India' },
  { target: 98,   suffix: '%', label: 'Parent Satisfaction' },
  { target: 200,  suffix: '+', label: 'Trained Educators' },
  { target: 5,    suffix: '+', label: 'Years of Excellence' },
]

/* Big ghost numbers in the far background layer */
const GHOSTS = ['5K', '50', '98', '200', '5']

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Background parallaxes upward slower → appears deeper */
      gsap.to(bgRef.current, {
        y: '-35%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: 1.5,
        },
      })
      gsap.from('.stat-item', {
        opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.stat-item', start: 'top 82%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #6B0E14 0%, #99292D 40%, #C42060 80%, #EE3869 100%)' }}
    >
      {/* ── Far depth layer — ghost numbers + orbs ── */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none" style={{ willChange:'transform' }}>
        {/* Giant ghost numbers — far back, blurred */}
        {GHOSTS.map((g, i) => (
          <div key={i} className="absolute select-none" style={{
            left: `${8 + i * 19}%`,
            top:  `${10 + (i % 2) * 40}%`,
            fontSize: 'clamp(5rem, 14vw, 11rem)',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.04)',
            lineHeight: 1,
            filter: 'blur(2px)',
            userSelect: 'none',
          }}>
            {g}
          </div>
        ))}
        {/* Large gold orb — top left */}
        <div className="absolute" style={{
          top:'-20%', left:'-5%', width:500, height:500, borderRadius:'50%',
          background:'radial-gradient(circle,rgba(250,162,27,0.22) 0%,transparent 65%)',
          filter:'blur(80px)',
        }}/>
        {/* Deep shadow orb — bottom right */}
        <div className="absolute" style={{
          bottom:'-20%', right:'-5%', width:450, height:450, borderRadius:'50%',
          background:'radial-gradient(circle,rgba(100,0,40,0.45) 0%,transparent 65%)',
          filter:'blur(70px)',
        }}/>
        {/* Centre shine streak */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{
          background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.20),transparent)',
        }}/>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{
          background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)',
        }}/>
      </div>

      {/* ── Stat content — closer z-plane ── */}
      <div className="section-max px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {STATS.map(({ target, suffix, label }) => (
            <div
              key={label}
              className="stat-item text-white group"
            >
              {/* Number with glowing shadow */}
              <div
                className="font-display font-bold text-brand-gold mb-2"
                style={{
                  fontSize: 'clamp(2.5rem,5vw,3.8rem)',
                  lineHeight: 1,
                  textShadow: '0 4px 24px rgba(250,162,27,0.55)',
                  filter: 'drop-shadow(0 0 20px rgba(250,162,27,0.35))',
                }}
              >
                <AnimatedCounter target={target} suffix={suffix}/>
              </div>
              {/* Label bar */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-0.5 rounded-full bg-white/30"/>
                <p className="text-sm font-semibold opacity-85 font-body">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
