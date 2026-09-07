import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Volleyball from './components/VolleyballGallery'
import OJT from './components/OJTGallery'
import Hobbies from './components/Hobbies'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Volleyball />
      <OJT />
      <Hobbies />
      <TechStack />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}
