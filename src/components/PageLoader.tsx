import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loader = loaderRef.current
    const text = textRef.current
    if (!loader || !text) return

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false)
      },
    })

    tl.fromTo(
      text,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
      .to(text, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        delay: 0.8,
        ease: 'power3.in',
      })
      .to(
        loader,
        {
          clipPath: 'inset(0 0 100% 0)',
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.2'
      )

    return () => {
      tl.kill()
    }
  }, [])

  if (!isLoading) return null

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-obelix-burgundy flex items-center justify-center"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      <div
        ref={textRef}
        className="text-center"
      >
        <h2 className="font-display text-5xl md:text-7xl text-obelix-cream mb-4">
          Obélix
        </h2>
        <p className="font-body text-xs tracking-[0.4em] uppercase text-obelix-gold">
          Chicago
        </p>
      </div>
    </div>
  )
}
