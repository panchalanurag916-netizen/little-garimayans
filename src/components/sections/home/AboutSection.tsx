'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { Shield, Award, Globe, Heart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const badges = [
  { icon: Heart,  bg: '#FFF0F0', label: '5,000+ Happy Families',       color: '#EE3869' },
  { icon: Award,  bg: '#FFF8E7', label: 'Award-Winning Curriculum',     color: '#FAA21B' },
  { icon: Globe,  bg: '#E8F7F6', label: '50+ Centers Across India',     color: '#17998F' },
  { icon: Shield, bg: '#EDF2FF', label: 'Certified & Safe Environment', color: '#2D5D8A' },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Parallax depth: bg moves 30% slower than content ── */
      gsap.to(bgRef.current, {
        y: '-28%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: 1.2,
        },
      })

      /* ── Content entrance animations ── */
      gsap.from('.about-left', {
        opacity: 0, x: -60, duration: 1.0, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-left', start: 'top 78%', once: true },
      })
      gsap.from('.about-right', {
        opacity: 0, x: 60, duration: 1.0, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: '.about-right', start: 'top 78%', once: true },
      })
      gsap.from('.badge-item', {
        opacity: 0, y: 24, stagger: 0.12, duration: 0.7, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: '.badges-wrap', start: 'top 82%', once: true },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{ background: '#FDFBF8' }}
    >
      {/* ── Parallax background depth layer ── */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: 'transform' }}
      >
        {/* Large teal orb — top right */}
        <div className="absolute" style={{
          top: '-10%', right: '-5%', width: 560, height: 560,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(23,153,143,0.18) 0%, rgba(23,153,143,0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}/>
        {/* Gold orb — bottom left */}
        <div className="absolute" style={{
          bottom: '-15%', left: '-8%', width: 480, height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(250,162,27,0.20) 0%, rgba(250,162,27,0.07) 50%, transparent 70%)',
          filter: 'blur(55px)',
        }}/>
        {/* Pink orb — center right */}
        <div className="absolute" style={{
          top: '30%', right: '15%', width: 320, height: 320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(238,56,105,0.12) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }}/>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage: `radial-gradient(circle, #17998F 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}/>
      </div>

      {/* ── Content (closer z-plane) ── */}
      <div className="section-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="about-left">
            <SectionBadge className="mb-5">Our Story</SectionBadge>
            <h2 className="font-hero text-brand-dark mb-6" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              Where Every Child&apos;s{' '}
              <span style={{ background:'linear-gradient(135deg,#EE3869,#FAA21B)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Journey</span>{' '}
              Begins
            </h2>
            <p className="text-brand-soft leading-relaxed mb-5 font-body">
              At The Little Garimayans, we believe every child is born with limitless potential.
              Our carefully crafted{' '}
              <strong className="text-brand-red">SPACE framework</strong> nurtures Social, Physical, Academic,
              Creative, and Emotional dimensions — preparing children not just for school, but for life.
            </p>
            <p className="text-brand-soft leading-relaxed mb-8 font-body">
              Founded on the principle that early childhood shapes a nation&apos;s future, we bring
              world-class pedagogy to every corner of India through our growing franchise network.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['SPACE Framework', 'Play-Based Learning', 'Holistic Development', 'Child-Centric'].map(label => (
                <span key={label} className="px-4 py-2 rounded-full text-sm font-semibold bg-white text-brand-dark font-body border border-brand-gold/30 shadow-sm">
                  {label}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-white text-base transition-all duration-300 hover:-translate-y-1.5 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)', boxShadow: '0 12px 36px rgba(153,41,45,.30)' }}
            >
              🌱 Discover Our Approach
            </Link>
          </div>

          {/* Right */}
          <div className="about-right flex flex-col gap-6">
            {/* Hero stat card — floats above BG */}
            <div
              className="rounded-4xl p-10 text-center text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #99292D 0%, #5C1222 50%, #EE3869 100%)',
                boxShadow: '0 32px 80px rgba(153,41,45,0.35), 0 8px 24px rgba(0,0,0,0.15)',
                transform: 'translateZ(0)',
              }}
            >
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/5"/>
              <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/4"/>
              {/* Floating shine streak */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)' }}/>
              <div className="relative z-10">
                <AnimatedCounter target={5} suffix="+" className="block font-display font-bold text-brand-gold" style={{ fontSize: '5rem', lineHeight: 1 }} />
                <p className="font-semibold opacity-85 mt-2 font-body">Years of Excellence in Early Education</p>
                <div className="flex justify-center gap-8 mt-8">
                  <div>
                    <AnimatedCounter target={50}  suffix="+" className="block font-display font-bold text-2xl"/>
                    <p className="text-xs opacity-70 font-body mt-1">Centers</p>
                  </div>
                  <div className="w-px bg-white/20"/>
                  <div>
                    <AnimatedCounter target={200} suffix="+" className="block font-display font-bold text-2xl"/>
                    <p className="text-xs opacity-70 font-body mt-1">Educators</p>
                  </div>
                  <div className="w-px bg-white/20"/>
                  <div>
                    <AnimatedCounter target={98}  suffix="%" className="block font-display font-bold text-2xl"/>
                    <p className="text-xs opacity-70 font-body mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="badges-wrap grid grid-cols-2 gap-4">
              {badges.map(({ icon: Icon, bg, label, color }) => (
                <div
                  key={label}
                  className="badge-item flex items-center gap-3 p-4 bg-white rounded-2xl hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon className="w-5 h-5" style={{ color }}/>
                  </div>
                  <span className="text-sm font-semibold text-brand-dark font-body">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
