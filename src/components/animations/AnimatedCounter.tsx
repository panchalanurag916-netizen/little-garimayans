'use client'

import { CSSProperties, useEffect, useRef, useState } from 'react'

interface Props {
  target:   number
  suffix?:  string
  prefix?:  string
  duration?: number
  className?: string
  style?: CSSProperties
}

export function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2.2, className, style }: Props) {
  const [count, setCount] = useState(0)
  const ref    = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start     = performance.now()
          const totalMs   = duration * 1000

          function tick(now: number) {
            const elapsed  = now - start
            const progress = Math.min(elapsed / totalMs, 1)
            const eased    = 1 - Math.pow(1 - progress, 4)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  )
}
