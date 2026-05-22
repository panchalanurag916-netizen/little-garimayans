import { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  children:  React.ReactNode
  color?:    'red' | 'gold' | 'pink' | 'teal' | 'blue'
  className?: string
  style?: CSSProperties
}

const colors = {
  red:  'from-brand-red  to-brand-pink',
  gold: 'from-brand-gold to-[#F07D15]',
  pink: 'from-brand-pink to-[#C42060]',
  teal: 'from-brand-teal to-[#0D7A72]',
  blue: 'from-brand-blue to-[#1A3A5C]',
}

export function SectionBadge({ children, color = 'red', className, style }: Props) {
  return (
    <span
      style={style}
      className={cn(
        'inline-block bg-gradient-to-r text-white px-5 py-1.5 rounded-full',
        'text-xs font-bold tracking-widest uppercase',
        colors[color],
        className
      )}
    >
      {children}
    </span>
  )
}
