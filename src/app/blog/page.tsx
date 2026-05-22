import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SectionBadge } from '@/components/ui/SectionBadge'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Parenting tips, early childhood education insights, SPACE framework articles, and expert advice from The Little Garimayans.',
}

const categories = ['All','Parenting Tips','Child Development','SPACE Framework','Activities','Franchise','Events']

const posts = [
  { slug:'space-framework-explained', emoji:'🧠', category:'SPACE Framework', title:'Understanding the SPACE Framework: A Complete Guide for Parents', excerpt:'Discover how our 5-pillar SPACE framework shapes every dimension of your child\'s development during the crucial early years.', date:'May 15, 2024', readTime:'7 min read', featured: true },
  { slug:'playgroup-benefits', emoji:'🌱', category:'Child Development', title:'Why Playgroup is the Most Important Year in Your Child\'s Life', excerpt:'Research shows the foundations of lifelong learning are built between ages 1.5–2.5. Here\'s what playgroup does for your child.', date:'May 10, 2024', readTime:'5 min read', featured: false },
  { slug:'sensory-play-ideas', emoji:'🎨', category:'Activities', title:'10 Sensory Play Activities to Do at Home With Your Toddler', excerpt:'Bring the Little Garimayans experience home! These 10 sensory activities stimulate your child\'s brain and creativity.', date:'May 5, 2024', readTime:'4 min read', featured: false },
  { slug:'franchise-success-story', emoji:'📈', category:'Franchise', title:'From Corporate Executive to Preschool Entrepreneur: Anjali\'s Story', excerpt:'Anjali Patel left a high-paying bank job to open a Little Garimayans center in Ahmedabad. 18 months later, she couldn\'t be happier.', date:'Apr 28, 2024', readTime:'6 min read', featured: false },
  { slug:'school-readiness', emoji:'🚀', category:'Child Development', title:'Is Your Child Ready for Kindergarten? 8 Signs to Look For', excerpt:'School readiness is about more than knowing ABCs. Here are the emotional, social, and cognitive signs that matter most.', date:'Apr 20, 2024', readTime:'5 min read', featured: false },
  { slug:'emotional-intelligence', emoji:'💛', category:'Parenting Tips', title:'How to Build Emotional Intelligence in Preschoolers', excerpt:'Emotional intelligence predicts success better than IQ. Learn 7 simple daily practices that build your child\'s EQ from age 2.', date:'Apr 12, 2024', readTime:'6 min read', featured: false },
]

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="relative py-24 px-6 text-center" style={{ background: 'linear-gradient(135deg, #1a0918, #10151f)' }}>
          <div className="relative z-10 max-w-2xl mx-auto">
            <SectionBadge color="teal" className="mb-5">Blog</SectionBadge>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}>
              Insights for <span className="text-brand-gold">Growing Families</span>
            </h1>
            <p className="text-white/70 font-body text-lg">
              Expert advice, parenting tips, and child development insights from our educators.
            </p>
          </div>
        </div>

        <section className="section-pad section-max">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-semibold font-body border-2 border-brand-teal/20 text-brand-dark hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all duration-200 first:bg-brand-teal first:text-white first:border-brand-teal">
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link href={`/blog/${featured.slug}`} className="block mb-10">
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-4xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-400 hover:-translate-y-2">
              <div className="flex items-center justify-center text-9xl p-16 bg-gradient-to-br from-brand-teal/10 to-brand-blue/10">
                {featured.emoji}
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal mb-4 font-body">{featured.category}</span>
                <h2 className="font-display font-bold text-brand-dark text-2xl mb-3 group-hover:text-brand-red transition-colors">{featured.title}</h2>
                <p className="text-brand-soft font-body text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-brand-soft font-body">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                  <span className="ml-auto text-brand-red font-semibold group-hover:translate-x-1 transition-transform">Read More →</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ slug, emoji, category, title, excerpt, date, readTime }) => (
              <Link key={slug} href={`/blog/${slug}`}
                className="group bg-white rounded-3xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-400 hover:-translate-y-2 block">
                <div className="flex items-center justify-center text-7xl p-8 bg-gradient-to-br from-brand-cream to-white">
                  {emoji}
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-brand-red font-body">{category}</span>
                  <h3 className="font-display font-bold text-brand-dark text-lg mt-2 mb-3 group-hover:text-brand-red transition-colors line-clamp-2">{title}</h3>
                  <p className="text-sm text-brand-soft font-body leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-brand-soft font-body">
                    <span>{date}</span>
                    <span>·</span>
                    <span>{readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
