import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LogoSVG } from '@/components/ui/LogoSVG'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your enquiry. The Little Garimayans team will be in touch soon.',
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen flex items-center justify-center px-6"
        style={{ background: 'linear-gradient(135deg, #F6F1E7 0%, #FFF0F5 100%)' }}>
        <div className="max-w-lg w-full text-center">
          <div className="flex justify-center mb-8">
            <LogoSVG className="w-24 h-auto" glowing />
          </div>

          <div className="text-6xl mb-6 animate-bounce-soft">🎉</div>

          <h1 className="font-display font-bold text-brand-dark text-4xl mb-4">
            Thank You!
          </h1>
          <p className="text-brand-soft font-body text-lg leading-relaxed mb-8">
            We&apos;ve received your enquiry and our team will reach out to you within{' '}
            <strong className="text-brand-red">24–48 hours</strong>. Please check your email for a confirmation.
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-card mb-8">
            <p className="text-sm font-bold text-brand-soft uppercase tracking-widest mb-4 font-body">What happens next?</p>
            <div className="flex flex-col gap-4 text-left">
              {[
                { step: '1', text: 'Check your email for a confirmation message' },
                { step: '2', text: 'Our team will call you within 24–48 hours' },
                { step: '3', text: 'Schedule a school tour or discovery call' },
                { step: '4', text: 'Welcome to The Little Garimayans family! 🌟' },
              ].map(({ step, text }) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 font-display"
                    style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
                    {step}
                  </span>
                  <p className="text-sm text-brand-dark font-body">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="px-8 py-3.5 rounded-full font-display font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
              Back to Home
            </Link>
            <Link href="/programs" className="px-8 py-3.5 rounded-full font-display font-bold text-brand-dark border-2 border-brand-gold/40 hover:border-brand-gold transition-colors">
              Explore Programs
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
