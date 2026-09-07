import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Volleyball', href: '#volleyball' },
  { label: 'OJT', href: '#ojt' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollPos = window.scrollY + 120
      document.querySelectorAll('section[id]').forEach(section => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <span className="nav-logo" onClick={() => scrollTo('#hero')}>&lt;JG /&gt;</span>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <span
                className={`nav-link${active === item.href.slice(1) ? ' active' : ''}`}
                onClick={() => scrollTo(item.href)}
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
        <button
          className={`nav-toggle${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
