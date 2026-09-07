import { useEffect, useRef, useCallback } from 'react'
import RevealOnScroll from './RevealOnScroll'

// ✏️ EDIT ME — update your stats here
const STATS = [
  { target: 3, label: 'Projects Built' },
  { target: 12, label: 'Technologies' },
  { target: 6, label: 'Years in Volleyball' },
  { target: 4, label: 'Years of Study' },
]

function AnimatedStat({ target, label }) {
  const elRef = useRef(null)
  const hasAnimated = useRef(false)

  const animate = useCallback(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true
    const startTime = performance.now()
    const duration = 1500
    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      elRef.current.textContent = Math.round(eased * target)
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [target])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) animate() },
      { threshold: 0.5 }
    )
    observer.observe(elRef.current.parentElement)
    return () => observer.disconnect()
  }, [animate])

  return (
    <div className="stat-card">
      <span className="stat-number" ref={elRef}>0</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">Get to Know Me</p>
            <h2 className="section-title">About <span className="text-accent">Me</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="about-content">
            <p>
              I'm Jake Gutoc, a Computer Science student and a dedicated volleyball athlete.
              The court has taught me discipline, teamwork, and how to stay composed under
              pressure — values I bring into every project I build. Off the court, I channel
              that same drive into front-end development, crafting responsive web experiences
              with HTML, CSS, and JavaScript while expanding my skills toward full-stack work.
            </p>
            <p>
              Balancing athletics and academics has shaped how I approach challenges: with
              consistency, coachability, and a team-first mindset. I am currently seeking an
              On-the-Job Training (OJT) opportunity where I can apply my adaptability,
              leadership, and growing technical skill set to meaningful tech projects — and
              keep raising my game, one serve and one commit at a time.
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="about-stats">
            {STATS.map(s => <AnimatedStat key={s.label} target={s.target} label={s.label} />)}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
