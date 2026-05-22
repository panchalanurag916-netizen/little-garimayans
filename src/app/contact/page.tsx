import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'
import { ContactForm } from '@/components/forms/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Little Garimayans. Reach us by phone, email, or submit an enquiry online.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionBadge color="teal" className="mb-5">Contact Us</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              We&apos;d Love to{' '}
              <span className="text-brand-gold">Hear From You</span>
            </h1>
            <p className="text-white/70 font-body text-lg">
              Whether you&apos;re a parent, a franchise seeker, or a journalist — we&apos;re just a message away.
            </p>
          </div>
        </div>

        <section className="section-pad section-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: info */}
            <div>
              <SectionBadge color="red" className="mb-5">Get in Touch</SectionBadge>
              <h2 className="font-display font-bold text-brand-dark text-3xl mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5">
                {[
                  { icon: Phone,          label: 'Phone',      value: '+91-XXXXX-XXXXX',          href: 'tel:+91XXXXXXXXXX' },
                  { icon: Mail,           label: 'Email',      value: 'hello@littlegarimayans.in', href: 'mailto:hello@littlegarimayans.in' },
                  { icon: MapPin,         label: 'Address',    value: 'Pan India Operations — Head Office: [Your City]' },
                  { icon: Clock,          label: 'Hours',      value: 'Mon–Sat: 9:00 AM – 6:00 PM IST' },
                  { icon: MessageCircle,  label: 'WhatsApp',   value: '+91-XXXXX-XXXXX', href: 'https://wa.me/91XXXXXXXXXX' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-card">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-soft uppercase tracking-wider font-body">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-semibold text-brand-dark hover:text-brand-red transition-colors font-body">{value}</a>
                      ) : (
                        <p className="text-sm font-semibold text-brand-dark font-body">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
