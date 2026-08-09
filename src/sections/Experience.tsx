import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ImageReveal } from '../components/ImageReveal'
import { SectionReveal } from '../components/SectionReveal'

gsap.registerPlugin(ScrollTrigger)

const highlights = [
  {
    title: 'Raw Bar',
    description:
      'Oysters, caviar sandwich, and bluefin tuna crudo — the finest starting point.',
    image: '/images/obelix-06.jpg',
  },
  {
    title: 'Duck & Foie Gras',
    description:
      'From the iconic Obélix Dog to dry-aged duck breast and foie-co.',
    image: '/images/obelix-07.jpg',
  },
  {
    title: 'Pastry',
    description:
      'Courtney Kenyon\'s pastry program brings French precision and playful indulgence.',
    image: '/images/obelix-03.jpg',
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current
    if (!cards) return

    const cardElements = cards.querySelectorAll('.experience-card')

    gsap.fromTo(
      cardElements,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-obelix-charcoal text-obelix-cream overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-obelix-burgundy/10 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-20">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-obelix-gold-light mb-6">
            The Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Three Reasons to
            <br />
            <span className="italic">Dine With Us</span>
          </h2>
        </SectionReveal>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="experience-card group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6">
                <ImageReveal
                  src={item.image}
                  alt={item.title}
                  aspectRatio="aspect-[4/5]"
                  parallax={false}
                />
                <div className="absolute inset-0 bg-obelix-burgundy/0 group-hover:bg-obelix-burgundy/20 transition-colors duration-500" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl text-obelix-gold">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <p className="font-body text-sm md:text-base text-obelix-cream/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
