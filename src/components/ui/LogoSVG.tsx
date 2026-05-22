import { cn } from '@/lib/utils'

interface Props {
  className?: string
  glowing?:   boolean
}

export function LogoSVG({ className, glowing }: Props) {
  return (
    <svg
      className={cn('h-auto', glowing && 'drop-shadow-[0_0_24px_rgba(250,162,27,0.6)]', className)}
      viewBox="0 0 200 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="The Little Garimayans logo"
    >
      {/* Sun / Rays */}
      <circle cx="100" cy="38" r="22" fill="#FAA21B"/>
      <line x1="100" y1="6"   x2="100" y2="0"   stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <line x1="126" y1="14"  x2="132" y2="8"   stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <line x1="140" y1="38"  x2="148" y2="38"  stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <line x1="74"  y1="14"  x2="68"  y2="8"   stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <line x1="60"  y1="38"  x2="52"  y2="38"  stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <line x1="130" y1="26"  x2="136" y2="20"  stroke="#FAA21B" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="70"  y1="26"  x2="64"  y2="20"  stroke="#FAA21B" strokeWidth="3.5" strokeLinecap="round"/>
      {/* Horizon arcs */}
      <path d="M 67 60 A 33 33 0 0 1 133 60" fill="none" stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <path d="M 57 60 A 43 43 0 0 1 143 60" fill="none" stroke="#FAA21B" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 47 60 A 53 53 0 0 1 153 60" fill="none" stroke="#FAA21B" strokeWidth="3" strokeLinecap="round"/>
      {/* Children bodies */}
      <path d="M 100 76 Q 48 71 44 124 Q 41 154 92 163 L 100 163 Z" fill="#99292D"/>
      <path d="M 100 76 Q 152 71 156 124 Q 159 154 108 163 L 100 163 Z" fill="#EE3869"/>
      {/* Left child */}
      <circle cx="68"  cy="103" r="10"  fill="white"/>
      <rect x="63" y="113" width="10" height="20" rx="5" fill="white"/>
      <line x1="44" y1="124" x2="63" y2="119" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      <line x1="92" y1="124" x2="73" y2="119" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      <line x1="63" y1="133" x2="55" y2="152" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      <line x1="73" y1="133" x2="81" y2="152" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      {/* Right child */}
      <circle cx="132" cy="103" r="10" fill="white"/>
      <path d="M 120 113 L 144 113 L 150 158 L 114 158 Z" fill="white"/>
      <line x1="108" y1="124" x2="120" y2="119" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      <line x1="156" y1="124" x2="144" y2="119" stroke="white" strokeWidth="5" strokeLinecap="round"/>
      {/* Center spark */}
      <circle cx="100" cy="167" r="4" fill="#FAA21B"/>
      <line x1="100" y1="161" x2="100" y2="153" stroke="#FAA21B" strokeWidth="2.5"/>
      <line x1="93"  y1="163" x2="87"  y2="157" stroke="#FAA21B" strokeWidth="2.5"/>
      <line x1="107" y1="163" x2="113" y2="157" stroke="#FAA21B" strokeWidth="2.5"/>
      <circle cx="100" cy="172" r="2.5" fill="#FAA21B" opacity="0.7"/>
      {/* Ground / base bar */}
      <rect x="46" y="188" width="108" height="10" rx="4" fill="#1A1A2E"/>
      {/* Rainbow arcs */}
      <path d="M 46 198 Q 46 222 100 220" fill="none" stroke="#2D5D8A" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 46 198 Q 46 228 100 226" fill="none" stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <path d="M 46 198 Q 46 234 100 232" fill="none" stroke="#99292D" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 154 198 Q 154 222 100 220" fill="none" stroke="#EE3869" strokeWidth="6" strokeLinecap="round"/>
      <path d="M 154 198 Q 154 228 100 226" fill="none" stroke="#FAA21B" strokeWidth="5" strokeLinecap="round"/>
      <path d="M 154 198 Q 154 234 100 232" fill="none" stroke="#2D5D8A" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  )
}
