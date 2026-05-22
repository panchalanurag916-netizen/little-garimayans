'use client'

import { useEffect, useRef, ReactNode } from 'react'
import type LenisType from 'lenis'

interface Props { children: ReactNode }

export function SmoothScrollProvider({ children }: Props) {
  const lenisRef = useRef<LenisType | null>(null)

  useEffect(() => {
    let rafId: number

    async function init() {
      const Lenis = (await import('lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })
      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)

      /* Connect GSAP ScrollTrigger to Lenis */
      lenis.on('scroll', () => {
        if (typeof window !== 'undefined') {
          import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
            ScrollTrigger.update()
          })
        }
      })
    }

    init()

    return () => {
      cancelAnimationFrame(rafId)
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}
