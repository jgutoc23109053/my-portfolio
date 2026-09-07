import RevealOnScroll from './RevealOnScroll'

const GROUPS = [
  {
    title: 'Development',
    note: 'The languages and tools I build with',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'GitHub', 'Java'],
  },
  {
    title: 'Design & Tools',
    note: 'How I plan, draft, and present',
    tags: ['UI/UX Design', 'Graphics Design', 'Google Workspace', 'Excel'],
  },
  {
    title: 'Athlete & Soft Skills',
    note: 'Trained on the court, applied everywhere',
    tags: ['Teamwork', 'Discipline', 'Leadership', 'Coachability', 'Adaptability'],
  },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <RevealOnScroll>
          <header className="beat">
            <span className="beat-index">03</span>
            <div>
              <h2 className="beat-title">The toolbox</h2>
              <p className="beat-sub">Everything I bring to a team — technical, creative, and human skills.</p>
            </div>
          </header>
        </RevealOnScroll>

        <div className="bento">
          {GROUPS.map((g, i) => (
            <RevealOnScroll
              key={g.title}
              className={`${i === 2 ? 'span-12' : 'span-6'} tile skills-tile`}
            >
              <div className="skills-head">
                <h3 className="skills-title">{g.title}</h3>
                <p className="skills-note">{g.note}</p>
              </div>
              <div className="chip-row">
                {g.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    <span className="chip-dot" />
                    {tag}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
