import Link from 'next/link'
import { LogoSVG } from '@/components/ui/LogoSVG'
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react'

const footerLinks = {
  Programs: [
    { href: '/programs#playgroup', label: 'Playgroup (1.5–2.5 yrs)' },
    { href: '/programs#nursery',   label: 'Nursery (2.5–3.5 yrs)' },
    { href: '/programs#jr-kg',     label: 'Junior KG (3.5–4.5 yrs)' },
    { href: '/programs#sr-kg',     label: 'Senior KG (4.5–6 yrs)' },
    { href: '/daycare',            label: 'Daycare Program' },
    { href: '/summer-camp',        label: 'Summer Camp' },
  ],
  Company: [
    { href: '/about',        label: 'About Us' },
    { href: '/gallery',      label: 'Gallery' },
    { href: '/events',       label: 'Events' },
    { href: '/blog',         label: 'Blog' },
    { href: '/careers',      label: 'Careers' },
    { href: '/locations',    label: 'Locations' },
  ],
  Support: [
    { href: '/admissions',    label: 'Admissions' },
    { href: '/franchise',     label: 'Franchise' },
    { href: '/parent-portal', label: 'Parent Portal' },
    { href: '/contact',       label: 'Contact Us' },
    { href: '/privacy-policy',label: 'Privacy Policy' },
    { href: '/terms',         label: 'Terms of Use' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer */}
      <div className="section-max px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <LogoSVG className="w-14 h-auto" />
              <div>
                <p className="text-xs tracking-widest uppercase opacity-50 font-body">The Little</p>
                <p className="text-xl font-display font-bold text-brand-gold">Garimayans</p>
              </div>
            </div>
            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-xs font-body">
              Nurturing India's Future, One SPACE at a Time. World-class early childhood education through our growing network of franchise centers across India.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Instagram,      label: 'Instagram', href: '#' },
                { icon: Facebook,       label: 'Facebook',  href: '#' },
                { icon: Youtube,        label: 'YouTube',   href: '#' },
                { icon: MessageCircle,  label: 'WhatsApp',  href: 'https://wa.me/91XXXXXXXXXX' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/60 hover:bg-brand-gold hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-bold tracking-widest uppercase text-brand-gold mb-5 font-body">{title}</p>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/55 hover:text-brand-gold transition-colors duration-200 font-body"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="border-t border-white/8 pt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin,  label: 'Pan India', value: 'Multiple Locations Across India' },
              { icon: Phone,   label: 'Call Us',   value: '+91-XXXXX-XXXXX', href: 'tel:+91XXXXXXXXXX' },
              { icon: Mail,    label: 'Email',     value: 'hello@littlegarimayans.in', href: 'mailto:hello@littlegarimayans.in' },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/40 font-body">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-semibold text-white/80 hover:text-brand-gold transition-colors font-body">{value}</a>
                  ) : (
                    <p className="text-sm font-semibold text-white/80 font-body">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35 font-body">
            © {new Date().getFullYear()} The Little Garimayans Pvt. Ltd. All Rights Reserved.
          </p>
          <p className="text-xs text-white/35 font-body">
            Nurturing India&apos;s Future, One SPACE at a Time.
          </p>
        </div>
      </div>
    </footer>
  )
}
