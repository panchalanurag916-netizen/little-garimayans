import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'outline' | 'gold' | 'teal' | 'ghost' | 'dark'
type Size    = 'sm' | 'md' | 'lg' | 'xl'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-red to-brand-pink text-white shadow-[0_8px_32px_rgba(238,56,105,0.35)] hover:shadow-[0_16px_48px_rgba(238,56,105,0.5)] hover:-translate-y-1',
  secondary:
    'bg-white/10 text-white border-2 border-white/40 backdrop-blur-md hover:bg-white/20 hover:border-white hover:-translate-y-1',
  outline:
    'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white hover:-translate-y-1',
  gold:
    'bg-gradient-to-r from-brand-gold to-[#F07D15] text-white shadow-[0_8px_32px_rgba(250,162,27,0.35)] hover:shadow-[0_16px_48px_rgba(250,162,27,0.5)] hover:-translate-y-1',
  teal:
    'bg-gradient-to-r from-brand-teal to-[#0D7A72] text-white shadow-[0_8px_32px_rgba(23,153,143,0.35)] hover:shadow-[0_16px_48px_rgba(23,153,143,0.5)] hover:-translate-y-1',
  ghost:
    'text-brand-dark hover:bg-brand-cream hover:-translate-y-0.5',
  dark:
    'bg-brand-dark text-white hover:bg-gray-900 hover:-translate-y-1',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-6  py-2.5 text-sm  gap-1.5 rounded-full',
  md: 'px-8  py-3.5 text-sm  gap-2   rounded-full',
  lg: 'px-10 py-4   text-base gap-2   rounded-full',
  xl: 'px-12 py-5   text-lg  gap-2.5 rounded-full',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?:    Size
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'lg', loading, className, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-300 font-display cursor-pointer select-none',
        'focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2',
        'disabled:opacity-60 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        loading && 'pointer-events-none',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  )
)
Button.displayName = 'Button'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?:    Size
}

export function LinkButton({ variant = 'primary', size = 'lg', className, children, ...props }: LinkButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-300 font-display cursor-pointer select-none no-underline',
        'focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
