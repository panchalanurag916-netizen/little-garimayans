'use client'

import { useRef, ReactNode, MouseEvent } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number   // 1–15, default 8
  shine?: boolean
}

export function Tilt3DCard({ children, className = '', style = {}, intensity = 8, shine = true }: Props) {
  const cardRef  = useRef<HTMLDivElement>(null)
  const shineRef = useRef<HTMLDivElement>(null)

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el   = cardRef.current
    const sh   = shineRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx   = rect.left + rect.width  / 2
    const cy   = rect.top  + rect.height / 2
    const dx   = (e.clientX - cx) / (rect.width  / 2)   // -1 … 1
    const dy   = (e.clientY - cy) / (rect.height / 2)   // -1 … 1
    el.style.transform = `perspective(900px) rotateY(${dx * intensity}deg) rotateX(${-dy * intensity}deg) scale3d(1.03,1.03,1.03)`
    if (sh) {
      sh.style.opacity   = '1'
      sh.style.background = `radial-gradient(circle at ${((dx + 1) / 2) * 100}% ${((dy + 1) / 2) * 100}%, rgba(255,255,255,0.28) 0%, transparent 65%)`
    }
  }

  function onLeave() {
    const el = cardRef.current
    const sh = shineRef.current
    if (el) el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
    if (sh) sh.style.opacity = '0'
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        willChange: 'transform',
        position: 'relative',
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      {shine && (
        <div
          ref={shineRef}
          style={{
            position: 'absolute', inset: 0, borderRadius: 'inherit',
            pointerEvents: 'none', opacity: 0, transition: 'opacity 0.2s',
            zIndex: 10,
          }}
        />
      )}
    </div>
  )
}
