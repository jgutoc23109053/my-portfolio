import ChapterRail from './components/ChapterRail'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Volleyball from './components/VolleyballGallery'
import OJT from './components/OJTGallery'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <ChapterRail />
      <MobileMenu />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Volleyball />
        <OJT />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
