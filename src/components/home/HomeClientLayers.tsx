'use client'

import dynamic from 'next/dynamic'

const FloatingElements = dynamic(
  () => import('@/components/animations/FloatingElements').then(m => m.FloatingElements),
  { ssr: false }
)

const WalkingKid = dynamic(
  () => import('@/components/animations/WalkingKid').then(m => m.WalkingKid),
  { ssr: false }
)

export function HomeClientLayers() {
  return (
    <>
      <FloatingElements />
      <WalkingKid />
    </>
  )
}
