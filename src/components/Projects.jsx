import { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Java', value: 'java' },
  { label: 'Web Dev', value: 'web' },
  { label: 'Design', value: 'design' },
]

// ✏️ EDIT ME — replace these sample entries with your own projects
const PROJECTS = [
  {
    year: '2024', icon: '🎮',
    title: 'Project One — Sample Java Project',
    role: 'Programmer',
    category: 'java',
    details: [
      'Replace this with a short description of your Java project — what it does and why it matters.',
      'Highlight the core features you built and the problems you solved.',
      'Mention any team collaboration, awards, or recognition the project received.',
    ],
    tech: ['Java', 'OOP', 'Sample Tech'],
  },
  {
    year: '2025', icon: '📋',
    title: 'Project Two — Sample Web Project',
    role: 'Front-End Developer',
    category: 'web',
    details: [
      'Describe your web development project here — its purpose, users, and impact.',
      'List key features such as dashboards, forms, authentication, or reporting.',
      'Include measurable outcomes if available (time saved, users served, etc.).',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Sample Tech'],
  },
  {
    year: '2025', icon: '🛒',
    title: 'Project Three — Sample Design Project',
    role: 'UI/UX Designer & Developer',
    category: 'web design',
    details: [
      'Showcase a design-focused project: the interface, experience, and visual system you created.',
      'Explain your design process — wireframes, mockups, iteration, and user feedback.',
      'Describe how the final product looked and performed across devices.',
    ],
    tech: ['UI/UX', 'Figma', 'Sample Tech'],
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
