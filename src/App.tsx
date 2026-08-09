import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from './hooks/useLenis'
import { Header } from './components/Header'
import { CustomCursor } from './components/CustomCursor'
import { PageLoader } from './components/PageLoader'
import { GrainOverlay } from './components/GrainOverlay'
import { Hero } from './sections/Hero'
import { Story } from './sections/Story'
import { Experience } from './sections/Experience'
import { Menus } from './sections/Menus'
import { PrivateEvents } from './sections/PrivateEvents'
import { Reservations } from './sections/Reservations'
import { Footer } from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useLenis()

  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener('load', handleLoad)

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="relative">
      <CustomCursor />
      <PageLoader />
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <Story />
        <Experience />
        <Menus />
        <PrivateEvents />
        <Reservations />
      </main>
      <Footer />
    </div>
  )
}

export default App
