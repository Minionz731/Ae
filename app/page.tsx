'use client'

import { useEffect } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Work from '@/components/Work'
import Pricing from '@/components/Pricing'
import Extras from '@/components/Extras'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-ae-black text-ae-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Work />
      <Pricing />
      <Extras />
      <Contact />
      <Footer />
    </main>
  )
}
