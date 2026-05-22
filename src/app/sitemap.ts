import { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://littlegarimayans.in'

const staticRoutes = [
  { url: '/',               priority: 1.0, changeFrequency: 'weekly'  as const },
  { url: '/about',          priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/programs',       priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/admissions',     priority: 0.9, changeFrequency: 'weekly'  as const },
  { url: '/franchise',      priority: 0.9, changeFrequency: 'weekly'  as const },
  { url: '/contact',        priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/gallery',        priority: 0.7, changeFrequency: 'weekly'  as const },
  { url: '/blog',           priority: 0.8, changeFrequency: 'daily'   as const },
  { url: '/events',         priority: 0.7, changeFrequency: 'weekly'  as const },
  { url: '/summer-camp',    priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/daycare',        priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/locations',      priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/careers',        priority: 0.6, changeFrequency: 'weekly'  as const },
  { url: '/parent-portal',  priority: 0.5, changeFrequency: 'monthly' as const },
  { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly'  as const },
  { url: '/terms',          priority: 0.3, changeFrequency: 'yearly'  as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ url, priority, changeFrequency }) => ({
    url:              `${BASE}${url}`,
    lastModified:     new Date(),
    changeFrequency,
    priority,
  }))
}
