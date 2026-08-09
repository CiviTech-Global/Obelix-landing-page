import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitTextProps {
  children: string
  className?: string
  delay?: number
}

export function SplitText({ children, className = '', delay = 0 }: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const text = children
    element.innerHTML = text
      .split('')
      .map((char) => {
        if (char === ' ') return '<span class="inline-block">&nbsp;</span>'
        return `<span class="inline-block opacity-0 translate-y-full">${char}</span>`
      })
      .join('')

    const chars = element.querySelectorAll('span')

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.02,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === element) st.kill()
      })
    }
  }, [children, delay])

  return <span ref={ref} className={className}>{children}</span>
}
