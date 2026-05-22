import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of The Little Garimayans. Learn how we collect, use, and protect your personal data.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <h1 className="font-display font-bold text-white text-4xl">Privacy Policy</h1>
          <p className="text-white/60 font-body mt-3">Last updated: January 1, 2024</p>
        </div>
        <section className="section-pad max-w-4xl mx-auto px-6">
          <div className="prose-brand space-y-8 bg-white rounded-4xl shadow-card p-10">
            {[
              { title:'1. Information We Collect', content:'We collect information you provide directly to us, including name, email address, phone number, and child\'s details when you fill out admission forms, franchise enquiries, or contact forms on our website.' },
              { title:'2. How We Use Your Information', content:'We use the information we collect to process admissions, respond to franchise enquiries, send educational communications, provide customer support, and improve our services.' },
              { title:'3. Information Sharing', content:'We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website and services, as long as those parties agree to keep this information confidential.' },
              { title:'4. Data Security', content:'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
              { title:'5. Cookies', content:'Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings.' },
              { title:'6. Children\'s Privacy', content:'We are deeply committed to children\'s privacy. We do not collect personal data directly from children. All data collection is through parents or guardians who have provided explicit consent.' },
              { title:'7. Your Rights', content:'You have the right to access, update, or delete your personal information. Contact us at privacy@littlegarimayans.in to exercise these rights.' },
              { title:'8. Contact Us', content:'For privacy-related questions or concerns, contact us at: privacy@littlegarimayans.in or The Little Garimayans Pvt. Ltd., India.' },
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
