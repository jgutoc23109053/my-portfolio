import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Java', value: 'java' },
  { label: 'Web Dev', value: 'web' },
  { label: 'Design', value: 'design' },
]

const PROJECTS = [
  {
    year: '2024', icon: '🎮',
    title: 'CCS Quest — Java 2D Platformer Game',
    role: 'Programmer',
    category: 'java',
    details: [
      'Built a simple 2D platformer game in Java as a school project, featuring levels, obstacle courses, and arcade-style gameplay.',
      'Applied basic OOP concepts — classes, methods, and loops — to program movement, jumping, and collision detection.',
      'Strengthened my logic and problem-solving by testing, debugging, and polishing the gameplay loop.',
    ],
    tech: ['Java', 'OOP', 'Game Logic'],
  },
  {
    year: '2025', icon: '📋',
    title: 'Magical Desenyos — Offline Event Management System',
    role: 'Front-End Developer',
    category: 'web',
    details: [
      'Developed an offline event management system for an event styling business using HTML, CSS, and JavaScript.',
      'Created pages for client records, vendor inventory, and event schedules with simple forms and input validation.',
      'Added report and invoice exports so the owner can track payments and records even without internet access.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    year: '2025', icon: '🛒',
    title: 'WishCart — Web-Based Shopping Organizer',
    role: 'Front-End Developer & Graphics Designer',
    category: 'web design',
    details: [
      'Designed and built a web app for saving and organizing product links from different online shopping sites.',
      'Implemented log-in and sign-up pages with basic input validation, plus a simple user profile dashboard.',
      'Practiced UI/UX design fundamentals to keep the layout clean, engaging, and responsive across devices.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeFilter))

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">What I've Built</p>
            <h2 className="section-title">My <span className="text-accent">Projects</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="project-filters">
            {FILTERS.map(f => (
              <button
                key={f.value}
                className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>
        <div className="projects-grid">
          {filtered.map((project) => (
            <div key={project.title} className="project-card fade-in">
              <div className="project-year">{project.year}</div>
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-role">{project.role}</p>
              <ul className="project-details">
                {project.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
              <div className="project-tech">
                {project.tech.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
