import RevealOnScroll from './RevealOnScroll'

const PROJECTS = [
  {
    year: '2024',
    icon: '🧠',
    title: 'QuizBuddy — Java Quiz Application',
    role: 'Programmer',
    span: 'span-7',
    details: [
      'Built a Java quiz application that serves multiple-choice rounds from a question bank and scores answers instantly.',
      'Modeled questions, choices, and results as separate classes, keeping data apart from quiz logic.',
      'Added a post-round review screen that lists every missed item with the correct answer.',
    ],
    tech: ['Java', 'OOP', 'ArrayList', 'File I/O'],
  },
  {
    year: '2025',
    icon: '📚',
    title: 'StudySpace — Study Room Booking Web App',
    role: 'Front-End Developer',
    span: 'span-5',
    details: [
      'Developed a web app for reserving library study rooms, built around a weekly schedule grid of open and taken slots.',
      'Wrote client-side validation that blocks double bookings and invalid time ranges before submission.',
      'Designed a simple dashboard where students view, filter, and cancel upcoming reservations.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    year: '2025',
    icon: '🍜',
    title: 'CampusEats — Canteen Menu & Price Checker UI',
    role: 'UI/UX Designer & Developer',
    span: 'span-12',
    details: [
      'Designed a mobile-friendly interface for browsing canteen stalls, menus, and daily prices in one place.',
      'Implemented search plus category filters for meals, snacks, and drinks using a clean card layout with price tags.',
      'Applied basic UI/UX principles — consistent spacing, readable type, and a two-tap flow from menu to item details.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <RevealOnScroll>
          <header className="beat">
            <span className="beat-index">04</span>
            <div>
              <h2 className="beat-title">Campus builds</h2>
              <p className="beat-sub">Class projects that taught me the fundamentals — each one shipped, defended, and demoed.</p>
            </div>
          </header>
        </RevealOnScroll>

        <div className="bento">
          {PROJECTS.map((p) => (
            <RevealOnScroll key={p.title} className={`${p.span} tile project-tile`}>
              <div className="project-top">
                <span className="project-icon">{p.icon}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-role">Role — {p.role}</p>
              <ul className="project-points">
                {p.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div className="chip-row">
                {p.tech.map((t) => (
                  <span className="chip chip-sm" key={t}>{t}</span>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
