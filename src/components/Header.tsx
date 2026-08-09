
import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Phone, MapPin } from 'lucide-react'
import { cn } from '../lib/utils'
import { MagneticButton } from './MagneticButton'

const navLinks = [
  { label: 'Menus', href: '#menus' },
  { label: 'Private Events', href: '#private-events' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reservations', href: '#reservations' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-obelix-ivory/95 backdrop-blur-md py-3 shadow-sm'
            : 'bg-transparent py-6'
        )}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          <a
            href="#"
            className={cn(
              'font-display text-2xl md:text-3xl font-semibold tracking-wide transition-colors duration-300',
              isScrolled ? 'text-obelix-charcoal' : 'text-obelix-cream'
            )}
          >
            Obélix
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  'font-body text-xs font-medium tracking-[0.2em] uppercase link-underline transition-colors duration-300',
                  isScrolled
                    ? 'text-obelix-charcoal hover:text-obelix-burgundy'
                    : 'text-obelix-cream/90 hover:text-obelix-cream'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://www.instagram.com/obelixchicago"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'transition-colors duration-300',
                isScrolled
                  ? 'text-obelix-charcoal hover:text-obelix-burgundy'
                  : 'text-obelix-cream/90 hover:text-obelix-cream'
              )}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <MagneticButton
              href="https://www.opentable.com/r/obelix-reservations-chicago?restref=1242919&lang=en-US"
              variant={isScrolled ? 'primary' : 'secondary'}
              className="!py-3 !px-6"
            >
              Reserve
            </MagneticButton>
          </div>

          <button
            className={cn(
              'lg:hidden p-2 transition-colors duration-300',
              isScrolled ? 'text-obelix-charcoal' : 'text-obelix-cream'
            )}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-obelix-charcoal transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] lg:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="h-full flex flex-col p-8">
          <div className="flex items-center justify-between mb-16">
            <span className="font-display text-2xl font-semibold text-obelix-cream">
              Obélix
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-obelix-cream p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-8 flex-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-display text-4xl text-obelix-cream hover:text-obelix-gold transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-6">
            <a
              href="tel:+13128775348"
              className="flex items-center gap-3 text-obelix-cream/80 hover:text-obelix-gold transition-colors"
            >
              <Phone size={18} />
              <span className="font-body text-sm">(312) 877-5348</span>
            </a>
            <a
              href="https://maps.google.com/?q=700+N+Sedgwick+St+Chicago+IL+60654"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-obelix-cream/80 hover:text-obelix-gold transition-colors"
            >
              <MapPin size={18} />
              <span className="font-body text-sm">
                700 N Sedgwick St, Chicago
              </span>
            </a>
            <a
              href="https://www.instagram.com/obelixchicago"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-obelix-cream/80 hover:text-obelix-gold transition-colors"
            >
              <Instagram size={18} />
              <span className="font-body text-sm">@obelixchicago</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
