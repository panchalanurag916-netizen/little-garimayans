'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { TrendingUp, Users, Headphones, MapPin, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { icon: TrendingUp, bg:'#FFF8E7', color:'#FAA21B', title:'Proven Business Model',  desc:'Tested, scalable model with strong ROI and growing demand for quality early education.' },
  { icon: Headphones, bg:'#FFF0F5', color:'#EE3869', title:'Lifetime Support',        desc:'Comprehensive onboarding, curriculum training, and ongoing academic team support — forever.' },
  { icon: Users,      bg:'#E8F7F6', color:'#17998F', title:'Brand Power',             desc:'National recognition, digital campaigns, and ready-to-use marketing materials from Day 1.' },
  { icon: MapPin,     bg:'#EDF2FF', color:'#2D5D8A', title:'Pan India Network',       desc:'Join a passionate community of 50+ franchise partners across India and growing.' },
]

const specs = [
  { label:'Investment',   value:'Affordable'   },
  { label:'Space Needed', value:'1500+ sq.ft'  },
  { label:'Break-Even',   value:'12–18 Months' },
  { label:'Support',      value:'Lifetime'     },
]

export function FranchiseTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Parallax depth ── */
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

      /* Safe entrance — autoAlpha starts hidden but reverts cleanly */
      gsap.fromTo('.fran-left-anim',
        { autoAlpha: 0, x: -50 },
        { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.fran-left-anim', start: 'top 80%', once: true } }
      )
      gsap.fromTo('.fran-right-anim',
        { autoAlpha: 0, x: 50 },
        { autoAlpha: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: '.fran-right-anim', start: 'top 80%', once: true } }
      )
      ScrollTrigger.batch('.benefit-item', {
        start: 'top 86%',
        onEnter: (els) => gsap.fromTo(els,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, stagger: 0.11, duration: 0.6, ease: 'power3.out' }
        ),
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: '#FFFBF5' }}
    >
      {/* ── Parallax depth layer ── */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none" style={{ willChange:'transform' }}>
        {/* Gold orb — top left */}
        <div className="absolute" style={{ top:'-10%', left:'-8%', width:560, height:560, borderRadius:'50%', background:'radial-gradient(circle,rgba(250,162,27,0.18) 0%,transparent 65%)', filter:'blur(70px)' }}/>
        {/* Red orb — bottom right */}
        <div className="absolute" style={{ bottom:'-15%', right:'-6%', width:480, height:480, borderRadius:'50%', background:'radial-gradient(circle,rgba(153,41,45,0.15) 0%,transparent 65%)', filter:'blur(65px)' }}/>
        {/* Teal accent */}
        <div className="absolute" style={{ top:'40%', right:'25%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(23,153,143,0.10) 0%,transparent 65%)', filter:'blur(55px)' }}/>
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:'radial-gradient(circle,#FAA21B 1px,transparent 1px)', backgroundSize:'52px 52px' }}/>
      </div>

      {/* ── Content ── */}
      <div className="section-max section-pad relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="fran-left-anim">
            <SectionBadge color="gold" className="mb-5">Franchise Opportunity</SectionBadge>
            <h2 className="font-hero text-brand-dark mb-5" style={{ fontSize:'clamp(2.4rem,5vw,4rem)', lineHeight: 1.1 }}>
              Own a{' '}
              <span style={{ background:'linear-gradient(135deg,#FAA21B,#EE3869)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Little Garimayans</span>{' '}
              Center
            </h2>
            <p className="text-brand-soft leading-relaxed mb-8 font-body">
              Join India&apos;s fastest-growing preschool franchise network. Build a thriving business
              while nurturing young minds in your community.
            </p>

            <div className="flex flex-col gap-4">
              {benefits.map(({ icon: Icon, bg, color, title, desc }) => (
                <div
                  key={title}
                  className="benefit-item flex items-start gap-4 p-5 bg-white rounded-2xl transition-all duration-300 hover:translate-x-2"
                  style={{ boxShadow:'0 4px 20px rgba(0,0,0,0.07)', border:'1px solid rgba(0,0,0,0.05)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
                    <Icon className="w-6 h-6" style={{ color }}/>
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1 font-display">{title}</h3>
                    <p className="text-sm text-brand-soft font-body leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="fran-right-anim">
            <div
              className="rounded-4xl p-10 text-white relative overflow-hidden"
              style={{
                background:'linear-gradient(135deg, #FAA21B 0%, #E08A10 60%, #99292D 100%)',
                boxShadow:'0 32px 80px rgba(250,162,27,0.30), 0 8px 24px rgba(0,0,0,0.12)',
              }}
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/8"/>
              <div className="absolute -bottom-16 -left-16 w-52 h-52 rounded-full bg-white/5"/>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.30),transparent)' }}/>

              <div className="relative z-10">
                <div className="text-4xl mb-4">🏫</div>
                <h3 className="font-display font-bold text-2xl mb-3">Start Your Own Center</h3>
                <p className="opacity-85 mb-8 font-body text-sm leading-relaxed">
                  Low investment, high impact. Be part of India&apos;s education revolution and
                  build a business that makes a difference.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {specs.map(({ label, value }) => (
                    <div key={label} className="rounded-2xl p-4" style={{ background:'rgba(255,255,255,0.12)' }}>
                      <p className="text-xs opacity-65 uppercase tracking-widest mb-1 font-body">{label}</p>
                      <p className="font-display font-bold text-lg">{value}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/franchise"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl font-display font-bold text-white border-2 border-white/40 hover:bg-white/15 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Apply for Franchise
                  <ArrowRight className="w-4 h-4"/>
                </Link>

                <p className="text-center text-xs opacity-60 mt-4 font-body">
                  Schedule a free discovery call with our franchise team →
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 p-5 bg-white rounded-2xl" style={{ boxShadow:'0 4px 20px rgba(0,0,0,0.08)' }}>
              <div className="flex -space-x-2">
                {['#99292D','#FAA21B','#17998F','#2D5D8A','#EE3869'].map((c) => (
                  <div key={c} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                    F
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-brand-dark font-body">
                <span className="text-brand-red font-bold">50+ franchise partners</span> across India already thriving!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
