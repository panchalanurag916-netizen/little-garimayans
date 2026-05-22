import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    description: 'Read the full article on The Little Garimayans blog.',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-full mb-5 font-body text-brand-gold border border-brand-gold/40">
              SPACE Framework
            </span>
            <h1 className="font-display font-bold text-white text-4xl mb-4">{title}</h1>
            <div className="flex items-center justify-center gap-4 text-white/50 text-sm font-body">
              <span>The Little Garimayans Team</span>
              <span>·</span>
              <span>May 15, 2024</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>

        <article className="section-pad max-w-3xl mx-auto px-6">
          <div className="prose-brand">
            <p className="text-xl text-brand-soft font-body leading-relaxed mb-8">
              Early childhood education is the foundation upon which all future learning is built.
              At The Little Garimayans, we&apos;ve developed the SPACE framework — a research-backed
              approach that nurtures five critical dimensions of child development.
            </p>
            <h2>What is the SPACE Framework?</h2>
            <p>The SPACE framework stands for Social, Physical, Academic, Creative, and Emotional development...</p>
            <h3>Social Development</h3>
            <p>Children naturally learn through play and interaction. Our approach...</p>
            <h3>Physical Development</h3>
            <p>Movement is learning. Through yoga, dance, and outdoor play...</p>
          </div>

          <div className="mt-12 p-8 rounded-4xl text-center" style={{ background: 'linear-gradient(135deg, #FFF8E7, #FFF0E0)' }}>
            <p className="font-display font-bold text-brand-dark text-xl mb-4">
              Want to learn more about our programs?
            </p>
            <Link href="/admissions" className="inline-block px-8 py-4 rounded-full font-display font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #99292D, #EE3869)' }}>
              Book a School Tour →
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
