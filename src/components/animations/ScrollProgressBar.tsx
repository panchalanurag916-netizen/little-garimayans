'use client'

import { useEffect } from 'react'

export function ScrollProgressBar() {
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return

    function update() {
      const scrollTop  = window.scrollY
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight
      const progress   = docHeight > 0 ? scrollTop / docHeight : 0
      bar!.style.transform = `scaleX(${progress})`
    }

    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <div id="scroll-progress" aria-hidden="true" />
}
