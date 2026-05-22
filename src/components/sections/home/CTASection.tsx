import Link from 'next/link'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <div
      className="py-24 px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAA21B 0%, #E08A10 50%, #F07D15 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: '#fff', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: '#fff', transform: 'translate(-30%, 30%)' }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-sm font-bold tracking-widest uppercase text-brand-red/70 mb-3 font-body">Ready to Begin?</p>
        <h2 className="font-hero text-brand-dark mb-4" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', lineHeight: 1.1 }}>
          Shape India&apos;s Future Today
        </h2>
        <p className="text-brand-dark/70 mb-10 font-body font-medium text-lg leading-relaxed">
          Enroll your child or take the first step toward owning a franchise.
          The journey of a thousand miles begins with a single step.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-white text-base transition-all duration-300 hover:-translate-y-1"
            style={{ background: '#99292D', boxShadow: '0 8px 32px rgba(153,41,45,.35)' }}
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </Link>

          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold text-brand-dark text-base transition-all duration-300 hover:-translate-y-1 bg-white"
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,.1)' }}
          >
            ✨ Enroll Your Child
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="mailto:hello@littlegarimayans.in"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-display font-bold border-2 border-brand-dark/30 text-brand-dark text-base transition-all duration-300 hover:-translate-y-1 hover:border-brand-dark"
          >
            <Mail className="w-5 h-5" />
            Send Enquiry
          </a>
        </div>

        <p className="mt-8 text-sm text-brand-dark/50 font-body">
          📞 +91-XXXXX-XXXXX &nbsp;•&nbsp; 📧 hello@littlegarimayans.in &nbsp;•&nbsp; 📍 Pan India
        </p>
      </div>
    </div>
  )
}
