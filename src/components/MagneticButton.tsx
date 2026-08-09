import { useRef, useEffect, type ReactNode, type RefObject } from 'react'
import gsap from 'gsap'
import { cn } from '../lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  onClick?: () => void
}

export function MagneticButton({
  children,
  className,
  variant = 'primary',
  href,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    const content = contentRef.current
    if (!button || !content) return

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as globalThis.MouseEvent
      const rect = button.getBoundingClientRect()
      const x = mouseEvent.clientX - rect.left - rect.width / 2
      const y = mouseEvent.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      })

      gsap.to(content, {
        x: x * 0.15,
        y: y * 0.15,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      })

      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const baseStyles =
    'relative inline-flex items-center justify-center px-8 py-4 font-body text-sm font-medium tracking-widest uppercase transition-colors overflow-hidden rounded-sm'

  const variants = {
    primary:
      'bg-obelix-burgundy text-obelix-cream hover:bg-obelix-burgundy-dark',
    secondary:
      'bg-obelix-gold text-obelix-charcoal hover:bg-obelix-gold-light',
    outline:
      'border border-obelix-charcoal text-obelix-charcoal hover:bg-obelix-charcoal hover:text-obelix-cream',
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <a
        ref={buttonRef as RefObject<HTMLAnchorElement>}
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <span ref={contentRef} className="relative z-10">
          {children}
        </span>
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={classes}
    >
      <span ref={contentRef} className="relative z-10">
        {children}
      </span>
    </button>
  )
}
