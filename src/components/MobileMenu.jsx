import { useEffect, useState } from 'react'
import { CHAPTERS } from '../chapters'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className="mobile-bar">
        <a href="#home" className="mobile-logo" onClick={close}>
          JG<span className="mobile-logo-num">_23</span>
        </a>
        <button
          type="button"
          className={`burger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-overlay${open ? ' open' : ''}`} aria-hidden={!open}>
        <nav className="overlay-nav">
          {CHAPTERS.map((c, i) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="overlay-link"
              style={{ transitionDelay: open ? `${90 + i * 45}ms` : '0ms' }}
              onClick={close}
            >
              <span className="overlay-num">{c.num}</span>
              <span className="overlay-text">{c.label}</span>
            </a>
          ))}
        </nav>
        <p className="overlay-foot">Jake Gutoc — Agoo, La Union</p>
      </div>
    </>
  )
}
