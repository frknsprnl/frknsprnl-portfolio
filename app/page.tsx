'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import ExperienceSection from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useScrollSpy } from '@/hooks/useScrollSpy'

export default function Home() {
  useScrollSpy()

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

