import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface ImageRevealProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  parallax?: boolean
}

export function ImageReveal({
  src,
  alt,
  className,
  aspectRatio = 'aspect-[4/5]',
  parallax = true,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const image = imageRef.current
    const overlay = overlayRef.current
    if (!container || !image || !overlay) return

    gsap.set(overlay, { scaleY: 1, transformOrigin: 'top' })
    gsap.set(image, { scale: 1.2 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    tl.to(overlay, {
      scaleY: 0,
      duration: 1.2,
      ease: 'power4.inOut',
    }).to(
      image,
      {
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      0
    )

    if (parallax) {
      gsap.to(image, {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill()
      })
    }
  }, [parallax])

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', aspectRatio, className)}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
        loading="lazy"
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-obelix-burgundy z-10 will-change-transform"
      />
    </div>
  )
}
