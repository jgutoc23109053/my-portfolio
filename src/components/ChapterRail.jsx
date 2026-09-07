import { useEffect, useState } from 'react'
import { CHAPTERS } from '../chapters'

export default function ChapterRail() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="chapter-rail" aria-label="Chapters">
      {CHAPTERS.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className={`rail-item${active === c.id ? ' active' : ''}`}
        >
          <span className="rail-dot" />
          <span className="rail-num">{c.num}</span>
          <span className="rail-label">{c.label}</span>
        </a>
      ))}
    </nav>
  )
}
