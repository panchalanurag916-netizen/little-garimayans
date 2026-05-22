'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return

    const dot  = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')

    const cursor = { x: 0, y: 0 }
    const pos    = { x: 0, y: 0 }

    const updateCursor = (e: MouseEvent) => {
      cursor.x = e.clientX
      cursor.y = e.clientY
      gsap.set(dot, { x: cursor.x, y: cursor.y })
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    let rafId: number
    function loop() {
      pos.x = lerp(pos.x, cursor.x, 0.12)
      pos.y = lerp(pos.y, cursor.y, 0.12)
      gsap.set(ring, { x: pos.x, y: pos.y })
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    document.addEventListener('mousemove', updateCursor)

    /* Hover effects */
    const hover = (scale: number, opacity: number) => () => {
      gsap.to(ring, { width: 60 * scale, height: 60 * scale, opacity, duration: 0.3 })
    }

    const targets = document.querySelectorAll('a, button, [data-cursor-hover]')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', hover(1.6, 0.5))
      el.addEventListener('mouseleave', hover(1, 1))
    })

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  aria-hidden="true" />
      <div id="cursor-ring" aria-hidden="true" />
    </>
  )
}
