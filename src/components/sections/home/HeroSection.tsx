'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { Sparkles, ArrowRight } from 'lucide-react'

export function HeroSection() {
  const sectionRef  = useRef<HTMLElement>(null)
  const farRef      = useRef<HTMLDivElement>(null)
  const midRef      = useRef<HTMLDivElement>(null)
  const nearRef     = useRef<HTMLDivElement>(null)

  /* ── Entrance timeline ─────────────────── */
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.15 })
    tl.from('.h-badge',  { opacity:0, y:-28, duration:.6, ease:'back.out(2)'  })
      .from('.h-line1',  { opacity:0, y: 80, duration:.9, ease:'power4.out'   }, '-=.3')
      .from('.h-line2',  { opacity:0, y: 80, duration:.9, ease:'power4.out'   }, '-=.65')
      .from('.h-line3',  { opacity:0, y: 80, duration:.9, ease:'power4.out'   }, '-=.65')
      .from('.h-sub',    { opacity:0, y: 30, duration:.7, ease:'power3.out'   }, '-=.4')
      .from('.h-btns',   { opacity:0, y: 30, duration:.6, ease:'power3.out'   }, '-=.4')
      .from('.h-trust',  { opacity:0, y: 20, stagger:.08, duration:.5,        }, '-=.3')
    return () => { tl.kill() }
  }, [])

  /* ── Multi-layer mouse parallax (depth) ─ */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      /* far layer moves slowest → nearest moves fastest */
      gsap.to(farRef.current,  { x: nx*10,  y: ny*7,  duration:2.0, ease:'power2.out' })
      gsap.to(midRef.current,  { x: nx*22,  y: ny*14, duration:1.6, ease:'power2.out' })
      gsap.to(nearRef.current, { x: nx*38,  y: ny*24, duration:1.2, ease:'power2.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#060215' }}
    >

      {/* ══ DEPTH LAYER 1 — FAR BACKGROUND (sky + nebula) ══════ */}
      <div ref={farRef} className="absolute inset-[-8%] z-[1] will-change-transform pointer-events-none">
        {/* Base cosmic sky */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 100% 90% at 50% 110%, #0a1f40 0%, #0c0830 40%, #060215 80%)',
        }}/>
        {/* Golden horizon glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(250,162,27,0.22) 0%, transparent 60%)',
        }}/>
        {/* Purple aurora top */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 120% 50% at 50% -10%, rgba(120,40,180,0.20) 0%, transparent 60%)',
        }}/>
        {/* Teal aurora right */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 50% 60% at 100% 40%, rgba(23,153,143,0.16) 0%, transparent 60%)',
        }}/>
        {/* Pink left glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 45% 55% at 0% 60%, rgba(238,56,105,0.14) 0%, transparent 60%)',
        }}/>

        {/* ── Tiny star field ── */}
        {Array.from({length:60},(_,i)=>({
          x: (i*37+13)%100, y: (i*53+7)%100,
          s: i%5===0?2.5:i%3===0?2:1.5,
          o: 0.4+((i*17)%60)/100,
          d: 1.5+(i*0.12)%2.5,
        })).map((st,i)=>(
          <div key={i} className="absolute rounded-full bg-white" style={{
            left:`${st.x}%`, top:`${st.y}%`,
            width:st.s, height:st.s, opacity:st.o,
            animation:`twinkle ${st.d}s ${(i*0.11)%3}s ease-in-out infinite`,
          }}/>
        ))}
      </div>

      {/* ══ DEPTH LAYER 2 — MID (nebula clouds + large orbs) ═══ */}
      <div ref={midRef} className="absolute inset-[-6%] z-[2] will-change-transform pointer-events-none">
        {/* Big nebula cloud top-left */}
        <div className="absolute" style={{
          top:'-5%', left:'-8%', width:'55%', height:'55%',
          background:'radial-gradient(ellipse, rgba(100,30,200,0.18) 0%, rgba(40,10,120,0.08) 50%, transparent 70%)',
          filter:'blur(30px)',
          animation:'drift-right 18s ease-in-out infinite',
        }}/>
        {/* Orange-gold nebula bottom-right */}
        <div className="absolute" style={{
          bottom:'-8%', right:'-6%', width:'60%', height:'50%',
          background:'radial-gradient(ellipse, rgba(250,120,20,0.16) 0%, rgba(200,80,10,0.06) 50%, transparent 70%)',
          filter:'blur(35px)',
          animation:'drift-left 22s ease-in-out infinite',
        }}/>
        {/* Teal nebula mid-right */}
        <div className="absolute" style={{
          top:'20%', right:'-4%', width:'40%', height:'40%',
          background:'radial-gradient(ellipse, rgba(23,153,143,0.15) 0%, transparent 65%)',
          filter:'blur(28px)',
          animation:'orb-pulse 10s ease-in-out infinite',
        }}/>
        {/* Floating large translucent spheres */}
        {[
          {c:'rgba(250,162,27,0.12)', s:240, t:'8%',  l:'5%',  dur:9, dl:0  },
          {c:'rgba(238,56,105,0.10)', s:180, t:'55%', l:'82%', dur:12,dl:1.5},
          {c:'rgba(23,153,143,0.10)', s:160, t:'70%', l:'5%',  dur:8, dl:0.8},
          {c:'rgba(45,93,138,0.12)',  s:200, t:'5%',  l:'75%', dur:11,dl:2  },
        ].map((o,i)=>(
          <div key={i} className="absolute rounded-full" style={{
            top:o.t, left:o.l, width:o.s, height:o.s,
            background:o.c, filter:'blur(60px)',
            animation:`orb-pulse ${o.dur}s ${o.dl}s ease-in-out infinite`,
          }}/>
        ))}
      </div>

      {/* ══ DEPTH LAYER 3 — NEAR (sparkles + accent glows) ═════ */}
      <div ref={nearRef} className="absolute inset-[-4%] z-[3] will-change-transform pointer-events-none">
        {/* Sparkle cross-stars */}
        {[
          {t:'12%',l:'10%',c:'#FAA21B',s:18,dl:0.3},{t:'20%',l:'88%',c:'#EE3869',s:14,dl:1.1},
          {t:'70%',l:'90%',c:'#17998F',s:16,dl:0.7},{t:'78%',l:'8%', c:'#FAA21B',s:14,dl:2.0},
          {t:'42%',l:'95%',c:'#EE3869',s:12,dl:1.3},{t:'48%',l:'2%', c:'#17998F',s:12,dl:0.6},
        ].map((cs,i)=>(
          <div key={i} style={{
            position:'absolute', top:cs.t, left:cs.l,
            animation:`twinkle 3s ${cs.dl}s ease-in-out infinite`,
          }}>
            <svg viewBox="0 0 24 24" width={cs.s} height={cs.s}
              style={{filter:`drop-shadow(0 0 6px ${cs.c})`}}>
              <path d="M12 2L13.8 9.2L21 12L13.8 14.8L12 22L10.2 14.8L3 12L10.2 9.2Z" fill={cs.c}/>
            </svg>
          </div>
        ))}
        {/* Hot bright glow dots */}
        {[
          {t:'15%',l:'18%',c:'#FAA21B',s:6},{t:'25%',l:'80%',c:'#EE3869',s:5},
          {t:'65%',l:'85%',c:'#17998F',s:6},{t:'72%',l:'14%',c:'#2D5D8A',s:5},
        ].map((d,i)=>(
          <div key={i} className="absolute rounded-full" style={{
            top:d.t, left:d.l, width:d.s, height:d.s, background:d.c,
            boxShadow:`0 0 ${d.s*4}px ${d.s*2}px ${d.c}`,
            animation:`twinkle ${2+i*0.4}s ${i*0.7}s ease-in-out infinite`,
          }}/>
        ))}
      </div>

      {/* ══ Edge vignette for depth ══════════════════════════════ */}
      <div className="absolute inset-0 z-[4] pointer-events-none" style={{
        background:'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 25%, rgba(4,1,20,0.70) 100%)',
      }}/>

      {/* ══ BOTTOM LAYERED TERRAIN (CSS landscape depth) ════════ */}
      <div className="absolute bottom-0 left-0 right-0 z-[6] pointer-events-none" style={{lineHeight:0}}>
        {/* Mountains far */}
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none"
          style={{display:'block',width:'100%',height:160,opacity:.12}}>
          <path d="M0,120 L180,40 L360,100 L540,20 L720,80 L900,30 L1080,90 L1260,45 L1440,85 L1440,160 L0,160Z"
            fill="#4080C0"/>
        </svg>
        {/* Hills mid */}
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none"
          style={{display:'block',width:'100%',height:120,marginTop:-80,opacity:.18}}>
          <path d="M0,80 C200,20 400,90 600,50 C800,15 1000,75 1200,45 C1340,25 1400,60 1440,50 L1440,120 L0,120Z"
            fill="#17998F"/>
        </svg>
        {/* Near hills */}
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none"
          style={{display:'block',width:'100%',height:90,marginTop:-55,opacity:.22}}>
          <path d="M0,60 C320,10 640,70 960,35 C1200,10 1360,55 1440,40 L1440,90 L0,90Z"
            fill="#2D5D8A"/>
        </svg>
        {/* Cream transition */}
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
          style={{display:'block',width:'100%',height:80,marginTop:-40}}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80Z" fill="#FDFBF8"/>
        </svg>
      </div>

      {/* ══════════════ HERO CONTENT ══════════════════════════════ */}
      <div className="relative z-[10] text-center px-6 max-w-5xl mx-auto"
        style={{paddingTop:'7rem', paddingBottom:'9rem'}}>

        {/* Top badge */}
        <div className="h-badge inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full" style={{
          background:'rgba(250,162,27,0.10)',
          border:'1px solid rgba(250,162,27,0.40)',
          backdropFilter:'blur(14px)',
        }}>
          <Sparkles className="w-4 h-4 text-yellow-400"/>
          <span className="font-body text-yellow-300 text-xs font-bold tracking-[.18em] uppercase">
            India&apos;s Most Loved Preschool Brand
          </span>
          <Sparkles className="w-4 h-4 text-yellow-400"/>
        </div>

        {/* ── BIG DISPLAY HEADLINE (Lilita One) ── */}
        <div style={{marginBottom:'0.3em'}}>
          <div className="h-line1 font-hero text-white block leading-[1.0]"
            style={{
              fontSize:'clamp(3.4rem,9vw,8.5rem)',
              textShadow:'0 4px 0 rgba(0,0,0,.5), 0 8px 40px rgba(0,0,0,.4)',
              letterSpacing:'-0.01em',
            }}>
            Where Little
          </div>

          {/* Animated gradient word */}
          <div className="h-line2 font-hero block leading-[0.95]"
            style={{
              fontSize:'clamp(4.2rem,12vw,11.5rem)',
              background:'linear-gradient(135deg,#FAA21B 0%,#F5921A 30%,#EE3869 65%,#FAA21B 100%)',
              backgroundSize:'300% auto',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              animation:'gradient-text 4s ease infinite',
              filter:'drop-shadow(0 4px 28px rgba(250,162,27,0.60))',
              letterSpacing:'-0.01em',
            }}>
            Dreams
          </div>

          <div className="h-line3 font-hero text-white block leading-[1.0]"
            style={{
              fontSize:'clamp(3.4rem,9vw,8.5rem)',
              textShadow:'0 4px 0 rgba(0,0,0,.5), 0 8px 40px rgba(0,0,0,.4)',
              letterSpacing:'-0.01em',
            }}>
            Begin ✨
          </div>
        </div>

        {/* Sub */}
        <p className="h-sub font-body font-medium text-white/65 mx-auto mb-10 leading-relaxed"
          style={{fontSize:'clamp(1rem,2vw,1.2rem)', maxWidth:520, marginTop:'1.5rem'}}>
          Nurturing India&apos;s future through the{' '}
          <span className="font-bold" style={{
            fontFamily:'var(--font-hero)', fontSize:'1.15em',
            background:'linear-gradient(135deg,#FAA21B,#17998F)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
          }}>SPACE</span>{' '}
          framework — one magical childhood at a time.
        </p>

        {/* CTAs */}
        <div className="h-btns flex flex-wrap items-center justify-center gap-4 mb-12">
          <Link href="/admissions"
            className="group inline-flex items-center gap-2.5 font-body font-bold text-white text-base rounded-full transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            style={{padding:'14px 34px',
              background:'linear-gradient(135deg,#99292D,#EE3869)',
              boxShadow:'0 8px 30px rgba(238,56,105,.50), 0 0 0 0 rgba(238,56,105,.3)',
            }}>
            <Sparkles className="w-4 h-4"/> Book a School Tour
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
          </Link>
          <Link href="/programs"
            className="inline-flex items-center gap-2 font-body font-bold text-white text-base rounded-full transition-all duration-300 hover:-translate-y-2"
            style={{padding:'14px 34px',
              background:'rgba(255,255,255,0.08)',
              border:'1.5px solid rgba(255,255,255,0.25)',
              backdropFilter:'blur(14px)',
            }}>
            Explore Programs
          </Link>
          <Link href="/franchise"
            className="inline-flex items-center gap-2 font-body font-bold text-[#1a1a1a] text-base rounded-full transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            style={{padding:'14px 34px',
              background:'linear-gradient(135deg,#FAA21B,#F07D15)',
              boxShadow:'0 8px 30px rgba(250,162,27,.45)',
            }}>
            🏫 Own a Franchise
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            {emoji:'👶',text:'5,000+ Happy Kids',     glow:'#EE3869'},
            {emoji:'🏆',text:'Award-Winning',          glow:'#FAA21B'},
            {emoji:'📍',text:'50+ Centers Pan India', glow:'#17998F'},
            {emoji:'❤️',text:'CBSE Aligned',           glow:'#2D5D8A'},
          ].map(({emoji,text,glow})=>(
            <div key={text} className="h-trust flex items-center gap-2 font-body text-sm font-semibold text-white/80 rounded-full"
              style={{padding:'8px 18px',
                background:'rgba(255,255,255,0.07)',
                border:`1px solid ${glow}50`,
                backdropFilter:'blur(12px)',
              }}>
              <span style={{fontSize:16}}>{emoji}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-[88px] left-1/2 z-[10] flex flex-col items-center gap-1 text-white/40 text-xs font-body tracking-widest uppercase"
        style={{transform:'translateX(-50%)', animation:'bounce-soft 2.5s ease-in-out infinite'}}>
        <span>Scroll</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}
