import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionReveal } from '../components/SectionReveal'
import { MagneticButton } from '../components/MagneticButton'
import { Clock, MapPin, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const hours = [
  { day: 'Sunday', hours: '10:30 am – 2 pm, 5 – 9 pm' },
  { day: 'Monday', hours: '11:30 am – 2:30 pm, 5 – 10 pm' },
  { day: 'Tuesday', hours: 'Closed' },
  { day: 'Wednesday', hours: 'Closed' },
  { day: 'Thursday', hours: '11:30 am – 2:30 pm, 5 – 10 pm' },
  { day: 'Friday', hours: '11:30 am – 2:30 pm, 5 – 10 pm' },
  { day: 'Saturday', hours: '10:30 am – 2 pm, 5 – 10 pm' },
]

export function Reservations() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    gsap.fromTo(
      map,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: {
          trigger: map,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section
      id="reservations"
      className="relative py-32 md:py-40 bg-obelix-ivory"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <SectionReveal className="space-y-10">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-obelix-burgundy mb-6">
                Visit Us
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-obelix-charcoal leading-[1.1] mb-6">
                Reserve Your
                <br />
                <span className="italic">Table</span>
              </h2>
              <p className="font-body text-base md:text-lg text-obelix-charcoal/80 leading-relaxed">
                Reservations are available 30 days in advance via OpenTable.
                Walk-ins are welcome at the bar when space allows.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://maps.google.com/?q=700+N+Sedgwick+St+Chicago+IL+60654"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-obelix-charcoal hover:text-obelix-burgundy transition-colors"
              >
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <span className="font-body text-base">
                  700 N Sedgwick St
                  <br />
                  Chicago, IL 60654
                </span>
              </a>

              <a
                href="tel:+13128775348"
                className="flex items-center gap-4 text-obelix-charcoal hover:text-obelix-burgundy transition-colors"
              >
                <Phone className="flex-shrink-0" size={20} />
                <span className="font-body text-base">(312) 877-5348</span>
              </a>

              <div className="flex items-start gap-4 text-obelix-charcoal">
                <Clock className="flex-shrink-0 mt-1" size={20} />
                <div className="space-y-2">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between gap-8 font-body text-sm md:text-base"
                    >
                      <span className="font-medium w-24">{item.day}</span>
                      <span className="text-obelix-charcoal/70">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton
                href="https://www.opentable.com/r/obelix-reservations-chicago?restref=1242919&lang=en-US"
                variant="primary"
              >
                Book on OpenTable
              </MagneticButton>
              <MagneticButton
                href="https://www.exploretock.com/obelix-chicago"
                variant="outline"
              >
                Pastry To-Go
              </MagneticButton>
            </div>
          </SectionReveal>

          <div
            ref={mapRef}
            className="relative min-h-[400px] lg:min-h-full rounded-sm overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.865204576655!2d-87.63964892397977!3d41.89443887124113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd354ce9e6a5b%3A0xd18abec2e57c535!2sOb%C3%A9lix!5e0!3m2!1sen!2sus!4v1723200000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Obélix location map"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
