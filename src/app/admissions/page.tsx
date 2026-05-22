import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { AdmissionForm } from '@/components/forms/AdmissionForm'

export const metadata: Metadata = {
  title: 'Admissions',
  description: 'Apply for admission at The Little Garimayans. Multi-step online admission form for Playgroup, Nursery, Junior KG and Senior KG programs.',
}

const steps = [
  { step: 1, title: 'Apply Online',      desc: 'Fill in the admission form with your child\'s details.' },
  { step: 2, title: 'Get Confirmation',  desc: 'Receive an instant confirmation email with your application ID.' },
  { step: 3, title: 'School Tour',       desc: 'Schedule a campus visit to meet our educators and see the spaces.' },
  { step: 4, title: 'Enrollment Done!',  desc: 'Complete the enrollment process and welcome to the family!' },
]

export default function AdmissionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <div className="relative py-24 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/30 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionBadge color="pink" className="mb-5">Admissions Open</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Begin Your Child&apos;s{' '}
              <span className="text-brand-gold">SPACE</span>{' '}
              Journey
            </h1>
            <p className="text-white/70 font-body text-lg">
              Secure your child&apos;s spot at The Little Garimayans. Limited seats available per batch.
            </p>
          </div>
        </div>

        {/* Steps */}
        <section className="py-16 px-6" style={{ background: '#F6F1E7' }}>
          <div className="section-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 font-display"
                    style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
                    {step}
                  </div>
                  <h3 className="font-display font-bold text-brand-dark mb-1">{title}</h3>
                  <p className="text-xs text-brand-soft font-body leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="section-pad px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <SectionBadge className="mb-4">Online Admission Form</SectionBadge>
              <h2 className="font-display font-bold text-brand-dark" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                Fill in the Details
              </h2>
              <p className="text-brand-soft font-body mt-3">
                Takes less than 3 minutes. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <AdmissionForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
