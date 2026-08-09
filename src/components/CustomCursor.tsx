import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    if (!cursor || !dot) return

    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(dot, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      })

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: 'power3.out',
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, dot], {
        opacity: 1,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, dot], {
        opacity: 0,
        duration: 0.3,
      })
    }

    const handleLinkEnter = () => setIsHovering(true)
    const handleLinkLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkEnter)
      el.addEventListener('mouseleave', handleLinkLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkEnter)
        el.removeEventListener('mouseleave', handleLinkLeave)
      })
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-300 ease-out mix-blend-difference ${
          isHovering
            ? 'w-16 h-16 border-obelix-cream'
            : 'w-10 h-10 border-obelix-cream/50'
        }`}
        style={{ opacity: 0 }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-obelix-cream mix-blend-difference"
        style={{ opacity: 0 }}
      />
    </>
  )
}
