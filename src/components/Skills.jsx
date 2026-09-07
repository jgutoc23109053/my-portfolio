import RevealOnScroll from './RevealOnScroll'

// ✏️ EDIT ME — update your skills here
const CATEGORIES = [
  {
    title: 'Development',
    icon: '</>',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'GitHub', 'Java'],
  },
  {
    title: 'Design & Tools',
    icon: '★',
    tags: ['UI/UX Design', 'Google Workspace', 'Excel', 'Graphics Design'],
  },
  {
    title: 'Athlete & Soft Skills',
    icon: '🏐',
    tags: ['Teamwork', 'Discipline', 'Leadership', 'Coachability', 'Adaptability'],
  },
]

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">What I Work With</p>
            <h2 className="section-title">My <span className="text-accent">Skills</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="skills-grid">
            {CATEGORIES.map(cat => (
              <div className="skill-category" key={cat.title}>
                <h3 className="skill-category-title">
                  <span className="skill-icon">{cat.icon}</span> {cat.title}
                </h3>
                <div className="skill-tags">
                  {cat.tags.map(tag => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
