import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionReveal } from '../components/SectionReveal'
import { ImageReveal } from '../components/ImageReveal'
import { assetUrl } from '../lib/utils'
import { MagneticButton } from '../components/MagneticButton'
import { Users, Calendar, Wine } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const eventTypes = [
  {
    icon: Users,
    title: 'Full Buyouts',
    description:
      'Book the entire restaurant any day of the week for lunch or dinner. Tuesdays and Wednesdays offered at a discounted rate.',
  },
  {
    icon: Calendar,
    title: 'Large Parties',
    description:
      'Reserve a large table for special occasions or business meals, Thursday through Monday for brunch, lunch, and dinner.',
  },
  {
    icon: Wine,
    title: 'Customized Menus',
    description:
      'From coursed seated dinners to family-style feasts and cocktail receptions with hors d\'oeuvres.',
  },
]

export function PrivateEvents() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = imageContainerRef.current
    if (!container) return

    gsap.to(container, {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="private-events"
      className="relative py-32 md:py-40 bg-obelix-burgundy text-obelix-cream overflow-hidden"
    >
      <div className="relative z-10 w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div ref={imageContainerRef} className="relative will-change-transform">
            <ImageReveal
              src={assetUrl('/images/obelix-14.jpg')}
              alt="Obélix private dining room"
              aspectRatio="aspect-[4/5]"
              parallax={false}
            />
            <div className="absolute -bottom-8 -right-8 bg-obelix-gold text-obelix-charcoal p-8 hidden md:block">
              <p className="font-display text-5xl">Any</p>
              <p className="font-body text-xs tracking-[0.2em] uppercase">
                Day of the Week
              </p>
            </div>
          </div>

          <SectionReveal className="space-y-10">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-obelix-gold-light mb-6">
                Private Events
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
                Gather With Us
              </h2>
              <p className="font-body text-base md:text-lg text-obelix-cream/80 leading-relaxed">
                Our classic open floor plan and customizable menus make Obélix
                the ideal setting for celebrations, corporate dinners, and
                intimate gatherings.
              </p>
            </div>

            <div className="space-y-8">
              {eventTypes.map((event) => (
                <div
                  key={event.title}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-obelix-cream/30 flex items-center justify-center group-hover:bg-obelix-cream group-hover:text-obelix-burgundy transition-colors duration-300">
                    <event.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-sm text-obelix-cream/70 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <MagneticButton
              href="mailto:info@obelixchicago.com?subject=Private%20Event%20Inquiry"
              variant="secondary"
            >
              Plan Your Event
            </MagneticButton>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
