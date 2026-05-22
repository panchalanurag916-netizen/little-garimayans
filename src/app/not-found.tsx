import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LogoSVG } from '@/components/ui/LogoSVG'

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center px-6"
        style={{ background: 'linear-gradient(135deg, #0d0612, #1a0918)' }}>
        <div className="max-w-xl w-full text-center">
          <div className="flex justify-center mb-8">
            <LogoSVG className="w-20 h-auto" glowing />
          </div>
          <div className="font-display font-bold text-brand-gold mb-4" style={{ fontSize: '8rem', lineHeight: 1 }}>
            404
          </div>
          <h1 className="font-display font-bold text-white text-3xl mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-white/60 font-body text-lg leading-relaxed mb-10">
            Even little explorers get lost sometimes! The page you&apos;re looking for
            has wandered off. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-8 py-4 rounded-full font-display font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
              🏠 Go Home
            </Link>
            <Link href="/admissions" className="px-8 py-4 rounded-full font-display font-bold border-2 border-white/30 text-white hover:bg-white/10 transition-colors">
              ✨ Enroll Your Child
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
