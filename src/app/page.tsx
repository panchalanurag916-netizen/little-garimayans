import type { Metadata } from 'next'
import { Header }             from '@/components/layout/Header'
import { Footer }             from '@/components/layout/Footer'
import { HeroSection }        from '@/components/sections/home/HeroSection'
import { AboutSection }       from '@/components/sections/home/AboutSection'
import { SPACESection }       from '@/components/sections/home/SPACESection'
import { ProgramsSection }    from '@/components/sections/home/ProgramsSection'
import { StatsSection }       from '@/components/sections/home/StatsSection'
import { FranchiseTeaser }    from '@/components/sections/home/FranchiseTeaser'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { CTASection }         from '@/components/sections/home/CTASection'
import { HomeClientLayers }   from '@/components/home/HomeClientLayers'

export const metadata: Metadata = {
  title: 'The Little Garimayans — Where Little Dreams Begin',
  description:
    "India's premium preschool brand. Nurturing children through the SPACE framework. Enroll your child today or explore franchise opportunities.",
}

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ── Floating elements + walking kid (client-only) ── */}
      <HomeClientLayers />

      <main>
        <HeroSection />
        <AboutSection />
        {/* About (#FDFBF8) → SPACE (dark #0A1628) */}
        <div style={{ background: '#FDFBF8', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,0 C480,60 960,0 1440,40 L1440,60 L0,60 Z" fill="#0A1628" />
          </svg>
        </div>
        <SPACESection />
        {/* SPACE (dark #0C1832) → Programs (#FAFBFF) */}
        <div style={{ lineHeight: 0, background: '#0C1832' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0,40 C360,0 1080,60 1440,20 L1440,60 L0,60 Z" fill="#FAFBFF" />
          </svg>
        </div>
        <ProgramsSection />
        <StatsSection />
        <FranchiseTeaser />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
