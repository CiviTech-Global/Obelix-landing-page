import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionReveal } from '../components/SectionReveal'
import { assetUrl } from '../lib/utils'
import { ImageReveal } from '../components/ImageReveal'
import { SplitText } from '../components/SplitText'

gsap.registerPlugin(ScrollTrigger)

export function Story() {
  const sectionRef = useRef<HTMLElement>(null)
  const quoteRef = useRef<HTMLQuoteElement>(null)

  useEffect(() => {
    const quote = quoteRef.current
    if (!quote) return

    gsap.fromTo(
      quote,
      { opacity: 0.2 },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: quote,
          start: 'top 80%',
          end: 'center 50%',
          scrub: true,
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative py-32 md:py-40 bg-obelix-ivory"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <SectionReveal className="order-2 lg:order-1 space-y-8">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-obelix-burgundy">
              Our Story
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-obelix-charcoal leading-[1.1]">
              French Tradition,
              <br />
              <span className="italic text-obelix-burgundy">Chicago Heart</span>
            </h2>

            <div className="space-y-6 font-body text-base md:text-lg text-obelix-charcoal/80 leading-relaxed">
              <p>
                Obélix is the vision of brothers Oliver and Nicolas Poilevey,
                sons of the legendary Chef Jean-Claude Poilevey of Le Bouchon.
                Raised in Chicago's kitchens, Oliver began his career at age 13
                at La Sardine before honing his craft in France, Hawaii, Los
                Angeles, and at Chicago's Alinea and The Publican.
              </p>
              <p>
                Today, alongside Executive Chef Sam Handwerger — whose journey
                includes three-Michelin-starred Alinea and one-starred Claudia —
                Obélix brings together rigorous French technique with the
                warmth and creativity of modern Chicago dining.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-3 gap-8 border-t border-obelix-charcoal/10">
              <div>
                <p className="font-display text-3xl md:text-4xl text-obelix-burgundy">
                  4.5
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-obelix-charcoal/60 mt-1">
                  Google Rating
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-obelix-burgundy">
                  $100+
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-obelix-charcoal/60 mt-1">
                  Per Person
                </p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-obelix-burgundy">
                  30
                </p>
                <p className="font-body text-xs tracking-widest uppercase text-obelix-charcoal/60 mt-1">
                  Days Advance
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <ImageReveal
              src={assetUrl('/images/obelix-11.jpg')}
              alt="Obélix kitchen team at work"
              aspectRatio="aspect-[3/4]"
              className="mt-12"
            />
            <ImageReveal
              src={assetUrl('/images/obelix-28.jpg')}
              alt="Obélix signature dish"
              aspectRatio="aspect-[3/4]"
            />
          </div>
        </div>

        <blockquote
          ref={quoteRef}
          className="mt-32 md:mt-40 text-center max-w-4xl mx-auto"
        >
          <p className="font-display text-3xl md:text-5xl lg:text-6xl text-obelix-charcoal leading-[1.2] italic">
            <SplitText>
              "More fun than fussy. French at its core, but unmistakably Chicago."
            </SplitText>
          </p>
        </blockquote>
      </div>
    </section>
  )
}
