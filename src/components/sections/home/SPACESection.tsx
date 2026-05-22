'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { Tilt3DCard }   from '@/components/ui/Tilt3DCard'

gsap.registerPlugin(ScrollTrigger)

const SPACE = [
  { letter:'S', word:'Social',    emoji:'🤝', color:'#17998F', bg:'linear-gradient(135deg,#17998F,#0D7A72)', desc:'Building friendships, empathy, and communication through play-based learning and group activities that shape lifelong social skills.' },
  { letter:'P', word:'Physical',  emoji:'🏃', color:'#2D5D8A', bg:'linear-gradient(135deg,#2D5D8A,#1A3A5C)', desc:'Developing motor skills, coordination, and healthy habits through movement, yoga, dance, and joyful outdoor exploration.' },
  { letter:'A', word:'Academic',  emoji:'🔤', color:'#FAA21B', bg:'linear-gradient(135deg,#FAA21B,#E08A10)', desc:'Igniting curiosity in language, mathematics, and science through hands-on discovery and age-appropriate challenges.' },
  { letter:'C', word:'Creative',  emoji:'🎨', color:'#EE3869', bg:'linear-gradient(135deg,#EE3869,#C42060)', desc:'Unleashing imagination through art, music, drama, and storytelling — celebrating every child\'s unique creative voice.' },
  { letter:'E', word:'Emotional', emoji:'💛', color:'#99292D', bg:'linear-gradient(135deg,#99292D,#7B1B20)', desc:'Building resilience, self-confidence, and emotional intelligence in a nurturing, loving, and psychologically safe environment.' },
]

/* orb positions for the 5 SPACE colors */
const ORBS = [
  { color:'rgba(23,153,143,0.22)',  w:500, h:400, top:'-8%',  left:'-5%'  },
  { color:'rgba(45,93,138,0.18)',   w:420, h:420, top:'40%',  left:'60%'  },
  { color:'rgba(250,162,27,0.20)',  w:380, h:380, top:'70%',  left:'5%'   },
  { color:'rgba(238,56,105,0.16)', w:350, h:350, top:'10%',  left:'75%'  },
  { color:'rgba(153,41,45,0.18)',   w:300, h:300, top:'55%',  left:'30%'  },
]

export function SPACESection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Parallax depth ── */
      gsap.to(bgRef.current, {
        y: '-32%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end:   'bottom top',
          scrub: 1.4,
        },
      })

      gsap.from('.space-header', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.space-header', start: 'top 80%', once: true },
      })
      ScrollTrigger.batch('.space-card', {
        start: 'top 84%',
        onEnter: (els) => gsap.fromTo(els,
          { opacity: 0, y: 60, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
        ),
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(170deg,#0A1628 0%,#0E1D40 45%,#0C1832 100%)', padding: '110px 0' }}
    >
      {/* ── Parallax background orbs ── */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        {ORBS.map((o, i) => (
          <div key={i} className="absolute" style={{
            top: o.top, left: o.left,
            width: o.w, height: o.h,
            borderRadius: '50%',
            background: `radial-gradient(ellipse, ${o.color} 0%, transparent 65%)`,
            filter: 'blur(70px)',
          }}/>
        ))}
        {/* Star field */}
        {Array.from({length:40},(_,i)=>({
          x:(i*47+11)%100, y:(i*61+19)%100,
          s:i%4===0?2:1.5, o:0.25+((i*13)%40)/100,
        })).map((st,i)=>(
          <div key={i} className="absolute rounded-full bg-white" style={{
            left:`${st.x}%`, top:`${st.y}%`,
            width:st.s, height:st.s, opacity:st.o,
          }}/>
        ))}
        {/* Horizontal aurora lines */}
        <div className="absolute" style={{
          top:'25%', left:0, right:0, height:1,
          background:'linear-gradient(90deg,transparent,rgba(23,153,143,0.25),rgba(45,93,138,0.25),transparent)',
          filter:'blur(2px)',
        }}/>
        <div className="absolute" style={{
          top:'65%', left:0, right:0, height:1,
          background:'linear-gradient(90deg,transparent,rgba(250,162,27,0.20),rgba(238,56,105,0.20),transparent)',
          filter:'blur(2px)',
        }}/>
      </div>

      {/* ── Content ── */}
      <div className="section-max px-6 md:px-12 relative z-10">
        <div className="space-header text-center mb-16">
          <SectionBadge color="teal" className="mb-5">Our Framework</SectionBadge>
          <h2 className="font-hero text-white mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', lineHeight: 1.1 }}>
            The{' '}
            <span style={{ background:'linear-gradient(135deg,#FAA21B,#EE3869,#17998F)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>SPACE</span>{' '}
            Framework
          </h2>
          <p className="text-white/60 max-w-xl mx-auto font-body leading-relaxed">
            A holistic, research-backed approach to early childhood development —
            nurturing every dimension of your child&apos;s growth.
          </p>
        </div>

        {/* Cards — float above the dark cosmic BG */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" style={{ perspective: '1200px' }}>
          {SPACE.map(({ letter, word, emoji, color, bg, desc }) => (
            <Tilt3DCard
              key={letter}
              className="space-card group rounded-3xl p-6 text-center cursor-default"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
                border: `1px solid rgba(255,255,255,0.10)`,
                borderTop: `3px solid ${color}`,
                boxShadow: `0 20px 60px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.20)`,
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: bg, boxShadow: `0 8px 24px ${color}55` }}
              >
                {emoji}
              </div>
              <div className="font-display font-bold mb-1" style={{ fontSize: '2.2rem', color }}>
                {letter}
              </div>
              <div className="font-display font-bold text-white text-lg mb-3">{word}</div>
              <p className="text-sm text-white/60 leading-relaxed font-body">{desc}</p>
              <div className="mt-4 h-0.5 rounded-full mx-auto transition-all duration-400 group-hover:w-12 w-0" style={{ background: bg }}/>
            </Tilt3DCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-display font-bold text-white/70 italic">
            "We don&apos;t just teach children to read —{' '}
            <span className="text-gradient-brand not-italic">we inspire them to think.</span>"
          </p>
        </div>
      </div>
    </div>
  )
}
