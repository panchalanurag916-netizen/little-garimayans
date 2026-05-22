'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/* ── 6 cubes pinned to left/right rails ─────────────────────── */
const CUBES = [
  { c: '#FAA21B', s: 42, x: '1.5%', y: '12%', spd: 9,  dl: 0,   anim: 'spin-3d'      },
  { c: '#EE3869', s: 30, x: '93%',  y: '28%', spd: 12, dl: 1.4, anim: 'spin-3d-alt'  },
  { c: '#17998F', s: 36, x: '2%',   y: '52%', spd: 10, dl: 0.7, anim: 'spin-3d-fast' },
  { c: '#2D5D8A', s: 26, x: '94%',  y: '66%', spd: 11, dl: 2.0, anim: 'spin-3d-alt'  },
  { c: '#99292D', s: 32, x: '1.5%', y: '82%', spd: 8,  dl: 1.1, anim: 'spin-3d'      },
  { c: '#FAA21B', s: 24, x: '93%',  y: '88%', spd: 14, dl: 0.4, anim: 'spin-3d-fast' },
]

function Cube({ c, s, x, y, spd, dl, anim }: (typeof CUBES)[0]) {
  const h = s / 2
  const face = (transform: string, lightness: number) => ({
    position: 'absolute' as const,
    width: s, height: s, inset: 0,
    transform,
    background: c,
    opacity: lightness,
    border: '1.5px solid rgba(255,255,255,0.30)',
  })

  return (
    <div style={{ position: 'fixed', left: x, top: y, width: s, height: s, perspective: 700, zIndex: 40, pointerEvents: 'none' }}>
      <div style={{
        width: s, height: s,
        transformStyle: 'preserve-3d',
        animation: `${anim} ${spd}s ${dl}s linear infinite`,
        filter: `drop-shadow(0 8px 18px ${c}80)`,
      }}>
        <div style={face(`translateZ(${h}px)`,              0.90)} />
        <div style={face(`rotateY(180deg) translateZ(${h}px)`, 0.38)} />
        <div style={face(`rotateY(-90deg) translateZ(${h}px)`, 0.55)} />
        <div style={face(`rotateY(90deg)  translateZ(${h}px)`, 0.68)} />
        <div style={face(`rotateX(90deg)  translateZ(${h}px)`, 0.92)} />
        <div style={face(`rotateX(-90deg) translateZ(${h}px)`, 0.28)} />
      </div>
    </div>
  )
}

export function FloatingElements() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth  - 0.5) * 2
      const ny = (e.clientY / window.innerHeight - 0.5) * 2
      if (wrapRef.current) gsap.to(wrapRef.current, { x: nx * 12, y: ny * 8, duration: 1.6, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div ref={wrapRef} style={{ willChange: 'transform' }}>
      {CUBES.map((c, i) => <Cube key={i} {...c} />)}
    </div>
  )
}
