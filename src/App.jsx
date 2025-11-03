import React from 'react'
import HeaderHero from './components/HeaderHero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 scroll-smooth">
      <HeaderHero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
