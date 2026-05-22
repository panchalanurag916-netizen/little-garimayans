import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for The Little Garimayans website and services.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <h1 className="font-display font-bold text-white text-4xl">Terms of Use</h1>
          <p className="text-white/60 font-body mt-3">Last updated: January 1, 2024</p>
        </div>
        <section className="section-pad max-w-4xl mx-auto px-6">
          <div className="prose-brand space-y-8 bg-white rounded-4xl shadow-card p-10">
            {[
              { title:'1. Acceptance of Terms', content:'By accessing and using the Little Garimayans website, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.' },
              { title:'2. Use of Website', content:'You may use this website for lawful purposes only. You agree not to use the site to transmit any harmful, offensive, or illegal content.' },
              { title:'3. Intellectual Property', content:'All content on this website, including text, graphics, logos, and images, is the property of The Little Garimayans and is protected by intellectual property laws.' },
              { title:'4. Franchise Information', content:'Information about franchise opportunities provided on this website is for general informational purposes. Specific franchise terms are governed by the Franchise Agreement.' },
              { title:'5. Admissions', content:'Submission of an online admission form does not guarantee enrollment. Enrollment is subject to seat availability, eligibility, and completion of the admissions process.' },
              { title:'6. Limitation of Liability', content:'The Little Garimayans shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.' },
              { title:'7. Changes to Terms', content:'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.' },
              { title:'8. Governing Law', content:'These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in [City], India.' },
            ].map(({ title, content }) => (
              <div key={title}>
                <h2 className="font-display font-bold text-brand-dark text-xl mb-3">{title}</h2>
                <p className="text-brand-soft font-body leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
