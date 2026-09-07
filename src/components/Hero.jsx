import { useMemo } from 'react'
import RevealOnScroll from './RevealOnScroll'

export default function Hero() {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 8 + 6}s`,
      delay: `${Math.random() * 10}s`,
    }))
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="hero-particle"
            style={{ left: p.left, width: p.size, height: p.size, animationDuration: p.duration, animationDelay: p.delay }}
          />
        ))}
      </div>
      <div className="hero-content">
        <RevealOnScroll className="hero-image-wrapper">
          <div className="hero-image-ring" />
          {/* Replace public/profile.jpg with your own photo (keep the same file name) */}
          <img src="/profile.jpg" alt="Jake Gutoc" className="hero-image" />
        </RevealOnScroll>
        <RevealOnScroll className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Jake <span className="text-accent">Gutoc</span>
          </h1>
          <p className="hero-tagline">Computer Science Student &amp; Volleyball Athlete</p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={() => scrollTo('#projects')}>View My Work</button>
            <button className="btn btn-outline" onClick={() => scrollTo('#volleyball')}>My Achievements</button>
          </div>
        </RevealOnScroll>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
