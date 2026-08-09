
import { Instagram } from 'lucide-react'

const footerLinks = [
  { label: 'Menus', href: '#menus' },
  { label: 'Private Events', href: '#private-events' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reservations', href: '#reservations' },
]

const externalLinks = [
  { label: 'Gift Cards', href: 'https://www.toasttab.com/obelix-700-north-sedgwick-street/giftcards' },
  { label: 'Pastry To-Go', href: 'https://www.exploretock.com/obelix-chicago' },
  { label: 'OpenTable', href: 'https://www.opentable.com/r/obelix-reservations-chicago?restref=1242919&lang=en-US' },
]

export function Footer() {
  return (
    <footer className="bg-obelix-charcoal text-obelix-cream py-20">
      <div className="w-full px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-5xl md:text-6xl">Obélix</h2>
            <p className="font-body text-sm text-obelix-cream/70 max-w-md leading-relaxed">
              Contemporary French dining in Chicago's River North neighborhood.
              Led by Oliver & Nicolas Poilevey with Executive Chef Sam
              Handwerger.
            </p>
            <a
              href="https://www.instagram.com/obelixchicago"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-obelix-cream/80 hover:text-obelix-gold transition-colors"
              aria-label="Follow Obélix on Instagram"
            >
              <Instagram size={18} />
              <span className="font-body text-sm">@obelixchicago</span>
            </a>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-obelix-gold mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-obelix-cream/80 hover:text-obelix-cream transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-obelix-gold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-obelix-cream/80 hover:text-obelix-cream transition-colors link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-obelix-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-obelix-cream/50">
            © {new Date().getFullYear()} Obélix Chicago. All rights reserved.
          </p>
          <p className="font-body text-xs text-obelix-cream/50">
            700 N Sedgwick St, Chicago, IL 60654
          </p>
        </div>
      </div>
    </footer>
  )
}
