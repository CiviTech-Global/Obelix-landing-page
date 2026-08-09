import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ChevronDown } from 'lucide-react'
import { MagneticButton } from '../components/MagneticButton'
import { assetUrl } from '../lib/utils'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const image1Ref = useRef<HTMLImageElement>(null)
  const image2Ref = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const heroImages = [
    assetUrl('/images/obelix-14.jpg'),
    assetUrl('/images/obelix-07.jpg'),
    assetUrl('/images/obelix-03.jpg'),
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [currentImage, heroImages.length])

  useEffect(() => {
    const img1 = image1Ref.current
    const img2 = image2Ref.current
    if (!img1 || !img2) return

    const currentImg = currentImage % 2 === 0 ? img1 : img2
    const prevImg = currentImage % 2 === 0 ? img2 : img1

    gsap.fromTo(
      currentImg,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.8, ease: 'power2.out' }
    )

    gsap.to(prevImg, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
    })
  }, [currentImage])

  useEffect(() => {
    const section = sectionRef.current
    const overlay = overlayRef.current
    const content = contentRef.current
    if (!section || !overlay || !content) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(overlay, { opacity: 1 }, { opacity: 0.5, duration: 1.5 })
      .fromTo(
        content.querySelectorAll('.hero-reveal'),
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15 },
        '-=0.8'
      )
      .fromTo(
        '.scroll-indicator',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )

    gsap.to([image1Ref.current, image2Ref.current], {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Images with crossfade */}
      <div className="absolute inset-0">
        <img
          ref={image1Ref}
          src={heroImages[0]}
          alt="Obélix restaurant interior"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />
        <img
          ref={image2Ref}
          src={heroImages[1]}
          alt="Obélix cuisine"
          className="absolute inset-0 w-full h-full object-cover will-change-transform opacity-0"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-obelix-charcoal/60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obelix-charcoal/40 via-transparent to-obelix-charcoal/70" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <p className="hero-reveal font-body text-xs md:text-sm tracking-[0.3em] uppercase text-obelix-gold-light mb-6">
          French Restaurant • Chicago
        </p>

        <h1 className="hero-reveal font-display text-6xl md:text-8xl lg:text-[10rem] text-obelix-cream leading-[0.9] mb-8">
          Obélix
        </h1>

        <p className="hero-reveal max-w-xl font-body text-base md:text-lg text-obelix-cream/90 font-light leading-relaxed mb-10">
          A contemporary French restaurant in the heart of River North, where
          classic technique meets Chicago soul.
        </p>

        <div className="hero-reveal flex flex-col sm:flex-row items-center gap-4">
          <MagneticButton
            href="https://www.opentable.com/r/obelix-reservations-chicago?restref=1242919&lang=en-US"
            variant="secondary"
          >
            Reserve a Table
          </MagneticButton>
          <MagneticButton
            href="#menus"
            variant="outline"
            className="!text-obelix-cream !border-obelix-cream hover:!bg-obelix-cream hover:!text-obelix-charcoal"
          >
            View Menus
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#story"
        className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-obelix-cream/80 hover:text-obelix-cream transition-colors"
      >
        <span className="font-body text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>

      {/* Image indicators */}
      <div className="absolute bottom-10 right-10 z-10 hidden md:flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentImage(index)
            }}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === currentImage
                ? 'bg-obelix-gold'
                : 'bg-obelix-cream/30 hover:bg-obelix-cream/50'
            }`}
            aria-label={`Show hero image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
