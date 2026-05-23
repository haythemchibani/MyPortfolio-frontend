'use client'

import Hero from '@/component/Hero'
import About from '@/component/About'
import Skills from '@/component/Skills'
import Projects from '@/component/Projects'
import Experience from '@/component/Experience'
import Education from '@/component/Education'
import Contact from '@/component/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}