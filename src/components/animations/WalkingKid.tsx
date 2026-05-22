'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Simple, cute chibi kid ──────────────────────────────────── */
function KidSVG({ walking, flip }: { walking: boolean; flip: boolean }) {
  const dur = walking ? '0.45s' : '2s'
  const inf = 'ease-in-out infinite'

  return (
    <svg
      viewBox="0 0 80 112"
      width={88}
      height={123}
      style={{
        transform: flip ? 'scaleX(-1)' : 'scaleX(1)',
        transition: 'transform 0.15s',
        overflow: 'visible',
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.38))',
      }}
    >
      <defs>
        <radialGradient id="cSkin" cx="35%" cy="28%" r="70%">
          <stop offset="0%"   stopColor="#FFF2DC"/>
          <stop offset="100%" stopColor="#E8A060"/>
        </radialGradient>
        <radialGradient id="cUniform" cx="30%" cy="15%" r="75%">
          <stop offset="0%"   stopColor="#C83040"/>
          <stop offset="100%" stopColor="#5A1015"/>
        </radialGradient>
        <radialGradient id="cPants" cx="30%" cy="10%" r="70%">
          <stop offset="0%"   stopColor="#4A84C8"/>
          <stop offset="100%" stopColor="#0E2840"/>
        </radialGradient>
        <radialGradient id="cBag" cx="30%" cy="15%" r="68%">
          <stop offset="0%"   stopColor="#FF6888"/>
          <stop offset="100%" stopColor="#780028"/>
        </radialGradient>
        <radialGradient id="cHair" cx="35%" cy="5%" r="75%">
          <stop offset="0%"   stopColor="#8B5E30"/>
          <stop offset="100%" stopColor="#251008"/>
        </radialGradient>
        <radialGradient id="cShoe" cx="30%" cy="20%" r="65%">
          <stop offset="0%"   stopColor="#505070"/>
          <stop offset="100%" stopColor="#1A1A2E"/>
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="40" cy="110" rx="28" ry="5" fill="rgba(0,0,0,0.18)"/>

      {/* BACKPACK — left side = character's back when walking right */}
      <rect x="10" y="60" width="18" height="24" rx="6" fill="url(#cBag)"/>
      <rect x="13" y="55" width="12" height="8"  rx="4" fill="url(#cBag)" opacity="0.9"/>
      <rect x="14" y="72" width="10" height="7"  rx="3" fill="rgba(255,255,255,0.22)"/>
      <ellipse cx="23" cy="65" rx="3" ry="2" fill="rgba(255,255,255,0.22)"/>

      {/* LEFT ARM */}
      <g style={{ transformBox:'fill-box', transformOrigin:'50% 8%', animation:`cAL ${dur} ${inf}` }}>
        <ellipse cx="17" cy="72" rx="7.5" ry="16" fill="url(#cUniform)"/>
        <circle  cx="17" cy="88"  r="9"   fill="url(#cSkin)"/>
        <ellipse cx="15" cy="84"  rx="4"  ry="3"  fill="rgba(255,255,255,0.35)"/>
      </g>

      {/* RIGHT ARM */}
      <g style={{ transformBox:'fill-box', transformOrigin:'50% 8%', animation:`cAR ${dur} ${inf}` }}>
        <ellipse cx="63" cy="72" rx="7.5" ry="16" fill="url(#cUniform)"/>
        <circle  cx="63" cy="88"  r="9"   fill="url(#cSkin)"/>
        <ellipse cx="65" cy="84"  rx="4"  ry="3"  fill="rgba(255,255,255,0.35)"/>
      </g>

      {/* BODY */}
      <rect x="22" y="58" width="36" height="32" rx="14" fill="url(#cUniform)"/>
      <ellipse cx="33" cy="66" rx="10" ry="6" fill="rgba(255,255,255,0.16)"/>
      {/* V collar */}
      <path d="M32,60 L40,70 L48,60" stroke="rgba(255,255,255,0.45)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* TLG badge */}
      <circle cx="40" cy="78" r="8" fill="rgba(255,255,255,0.20)"/>
      <text x="40" y="82" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold" fontFamily="sans-serif">TLG</text>

      {/* LEFT LEG */}
      <g style={{ transformBox:'fill-box', transformOrigin:'50% 2%', animation:`cLL ${dur} ${inf}` }}>
        <rect x="24" y="87" width="14" height="22" rx="7" fill="url(#cPants)"/>
        <ellipse cx="24" cy="93" rx="3" ry="7" fill="rgba(255,255,255,0.12)"/>
        <ellipse cx="31" cy="111" rx="14" ry="7" fill="url(#cShoe)"/>
        <ellipse cx="28" cy="108" rx="7" ry="3"  fill="rgba(255,255,255,0.18)"/>
      </g>

      {/* RIGHT LEG */}
      <g style={{ transformBox:'fill-box', transformOrigin:'50% 2%', animation:`cLR ${dur} ${inf}` }}>
        <rect x="42" y="87" width="14" height="22" rx="7" fill="url(#cPants)"/>
        <ellipse cx="42" cy="93" rx="3" ry="7" fill="rgba(255,255,255,0.12)"/>
        <ellipse cx="49" cy="111" rx="14" ry="7" fill="url(#cShoe)"/>
        <ellipse cx="46" cy="108" rx="7" ry="3"  fill="rgba(255,255,255,0.18)"/>
      </g>

      {/* NECK */}
      <rect x="33" y="51" width="14" height="11" rx="7" fill="url(#cSkin)"/>

      {/* HEAD */}
      <circle cx="40" cy="28" r="26" fill="url(#cSkin)"/>
      {/* Specular highlight */}
      <ellipse cx="30" cy="16" rx="12" ry="8"  fill="rgba(255,255,255,0.55)"/>
      <ellipse cx="27" cy="13" rx="5"  ry="3.5" fill="rgba(255,255,255,0.72)"/>
      {/* Rim shadow */}
      <ellipse cx="50" cy="38" rx="10" ry="7"  fill="rgba(0,0,0,0.08)"/>

      {/* HAIR */}
      <path d="M16,26 Q14,3 40,2 Q66,3 64,26 Q58,12 40,12 Q22,12 16,26Z" fill="url(#cHair)"/>
      <ellipse cx="16" cy="28" rx="8" ry="14" fill="url(#cHair)"/>
      <ellipse cx="64" cy="28" rx="8" ry="14" fill="url(#cHair)"/>
      <ellipse cx="31" cy="7"  rx="14" ry="5"  fill="rgba(255,255,255,0.18)"/>

      {/* CAP */}
      <ellipse cx="40" cy="10" rx="34" ry="6" fill="#99292D"/>
      <rect x="18" y="4" width="44" height="9" rx="3" fill="#99292D"/>
      <rect x="18" y="4" width="44" height="2" rx="1" fill="rgba(255,255,255,0.15)"/>
      <path d="M58,7 Q64,14 57,24" stroke="#FAA21B" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="57" cy="25" r="4.5" fill="#FAA21B"/>
      <circle cx="57" cy="25" r="4.5" fill="none" stroke="rgba(255,200,50,0.6)" strokeWidth="2.5"/>
      <line x1="55" y1="30" x2="54" y2="37" stroke="#FAA21B" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="57" y1="30" x2="57" y2="38" stroke="#FAA21B" strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="59" y1="30" x2="60" y2="37" stroke="#FAA21B" strokeWidth="1.8" strokeLinecap="round"/>

      {/* EARS */}
      <ellipse cx="14" cy="30" rx="7" ry="10" fill="url(#cSkin)"/>
      <ellipse cx="14" cy="30" rx="3.5" ry="6"  fill="#D48848" opacity="0.5"/>
      <ellipse cx="66" cy="30" rx="7" ry="10" fill="url(#cSkin)"/>
      <ellipse cx="66" cy="30" rx="3.5" ry="6"  fill="#D48848" opacity="0.5"/>

      {/* ── EYES — biggest feature, Disney huge ── */}
      {/* Left eye */}
      <ellipse cx="32" cy="28" rx="9" ry="11" fill="white"/>
      <circle  cx="34" cy="29" r="7.5" fill="#2A1600"/>
      <circle  cx="34" cy="29" r="4.5" fill="#050200"/>
      {/* Shine */}
      <circle  cx="37" cy="24" r="3.2" fill="white"/>
      <circle  cx="31" cy="32" r="1.5" fill="rgba(255,255,255,0.70)"/>
      {/* Lid */}
      <path d="M23,20 Q32,14 41,20" stroke="#1A0A00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Right eye */}
      <ellipse cx="48" cy="28" rx="9" ry="11" fill="white"/>
      <circle  cx="46" cy="29" r="7.5" fill="#2A1600"/>
      <circle  cx="46" cy="29" r="4.5" fill="#050200"/>
      <circle  cx="43" cy="24" r="3.2" fill="white"/>
      <circle  cx="49" cy="32" r="1.5" fill="rgba(255,255,255,0.70)"/>
      <path d="M39,20 Q48,14 57,20" stroke="#1A0A00" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* CHEEKS */}
      <ellipse cx="22" cy="38" rx="10" ry="7" fill="#FF4466" opacity="0.20"/>
      <ellipse cx="58" cy="38" rx="10" ry="7" fill="#FF4466" opacity="0.20"/>

      {/* NOSE */}
      <circle cx="40" cy="36" r="2.2" fill="#C07840" opacity="0.55"/>

      {/* SMILE */}
      <path d="M30,43 Q40,54 50,43" stroke="#8A3010" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M33,44 Q40,50 47,44" fill="rgba(255,255,255,0.85)"/>

      <style>{`
        @keyframes cLL { 0%,100%{transform:rotate(-28deg)} 50%{transform:rotate(28deg)} }
        @keyframes cLR { 0%,100%{transform:rotate(28deg)}  50%{transform:rotate(-28deg)} }
        @keyframes cAL { 0%,100%{transform:rotate(30deg)}  50%{transform:rotate(-30deg)} }
        @keyframes cAR { 0%,100%{transform:rotate(-30deg)} 50%{transform:rotate(30deg)} }
      `}</style>
    </svg>
  )
}

export function WalkingKid() {
  const kidRef   = useRef<HTMLDivElement>(null)
  const [walking, setWalking]   = useState(false)
  const [flipLeft, setFlipLeft] = useState(false)
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const KID_W  = 88
    const MARGIN = 16

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start:   'top top',
      end:     'bottom bottom',
      onUpdate(self) {
        const x = MARGIN + self.progress * (window.innerWidth - KID_W - MARGIN * 2)
        gsap.to(kidRef.current, { x, duration: 0.4, ease: 'power2.out' })

        const v = self.getVelocity()
        if (Math.abs(v) > 8) {
          setWalking(true)
          setFlipLeft(v < 0)
          if (stopTimer.current) clearTimeout(stopTimer.current)
          stopTimer.current = setTimeout(() => setWalking(false), 260)
        }
      },
    })

    return () => { trigger.kill() }
  }, [])

  return (
    /* Outer wrapper: fixed to viewport bottom, height = SVG only (speech bubble is outside flow) */
    <div
      ref={kidRef}
      style={{
        position:      'fixed',
        bottom:        0,
        left:          0,
        zIndex:        9998,
        width:         88,
        height:        123,
        pointerEvents: 'none',
        userSelect:    'none',
        overflow:      'visible',
      }}
    >
      {/* Speech bubble — sits ABOVE the fixed div, outside its bounds */}
      {!walking && (
        <div style={{
          position:    'absolute',
          bottom:      'calc(100% + 4px)',
          left:        '50%',
          transform:   'translateX(-50%)',
          background:  'white',
          color:       '#1A1A2E',
          fontSize:    11,
          fontFamily:  'var(--font-display)',
          fontWeight:  700,
          padding:     '5px 13px',
          borderRadius: 20,
          whiteSpace:  'nowrap',
          boxShadow:   '0 4px 20px rgba(0,0,0,0.16), 0 0 0 1.5px rgba(250,162,27,0.5)',
          animation:   'float-gentle 2.5s ease-in-out infinite',
        }}>
          ✨ Hi there!
          <span style={{
            position:    'absolute',
            bottom:      -8,
            left:        '50%',
            transform:   'translateX(-50%)',
            width:       0,
            height:      0,
            borderLeft:  '7px solid transparent',
            borderRight: '7px solid transparent',
            borderTop:   '8px solid white',
          }}/>
        </div>
      )}
      <KidSVG walking={walking} flip={flipLeft} />
    </div>
  )
}
