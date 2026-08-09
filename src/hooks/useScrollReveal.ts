import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  y?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  start?: string
  end?: string
  scrub?: boolean | number
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const {
      y = 40,
      opacity = 0,
      duration = 1,
      delay = 0,
      stagger = 0.1,
      start = 'top 85%',
      end = 'bottom 20%',
      scrub = false,
    } = options

    const children = element.children.length > 0 ? element.children : [element]

    gsap.set(children, { y, opacity })

    const animation = gsap.to(children, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === element) st.kill()
      })
    }
  }, [options])

  return ref
}
