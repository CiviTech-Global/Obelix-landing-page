import { useRef, useEffect, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '../lib/utils'

gsap.registerPlugin(ScrollTrigger)

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  y?: number
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  stagger = 0.1,
  y = 40,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const childElements = Array.from(element.children)
    if (childElements.length === 0) return

    gsap.set(childElements, { y, opacity: 0 })

    const animation = gsap.to(childElements, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === element) st.kill()
      })
    }
  }, [delay, stagger, y])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}
