import RevealOnScroll from './RevealOnScroll'

const FACTS = [
  { label: 'Name', value: 'Jake Gutoc' },
  { label: 'Program', value: 'BS Computer Science' },
  { label: 'School', value: 'DMMMSU' },
  { label: 'Based in', value: 'Agoo, La Union' },
  { label: 'Court ID', value: '#23 · Team CON-FIRM' },
  { label: 'OJT', value: 'PNP Agoo — completed' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <RevealOnScroll>
          <header className="beat">
            <span className="beat-index">02</span>
            <div>
              <h2 className="beat-title">Who I am</h2>
              <p className="beat-sub">Student by day, athlete by sunset, developer after hours.</p>
            </div>
          </header>
        </RevealOnScroll>

        <div className="bento">
          <RevealOnScroll className="span-7 tile">
            <p className="tile-label">The story so far</p>
            <p className="body-text">
              I&rsquo;m Jake Gutoc, a Computer Science student and a dedicated volleyball athlete.
              The court has taught me discipline, teamwork, and how to stay composed under
              pressure — values I bring into every project I build. Off the court, I channel
              that same drive into front-end development, crafting responsive web experiences
              with HTML, CSS, and JavaScript while expanding my skills toward full-stack work.
            </p>
            <p className="body-text">
              Balancing athletics and academics has shaped how I approach challenges: with
              consistency, coachability, and a team-first mindset. My On-the-Job Training at
              PNP Agoo put those habits to the test on real station work — encoding official
              records, handling media files, and producing printed materials people actually
              use. Next up: more code, more court, and a career where both sides of my
              training meet.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="span-5 tile">
            <p className="tile-label">Quick facts</p>
            <ul className="fact-list">
              {FACTS.map((f) => (
                <li className="fact-row" key={f.label}>
                  <span className="fact-key">{f.label}</span>
                  <span className="fact-val">{f.value}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll className="span-4 tile tile-stat">
            <span className="stat-num">03</span>
            <span className="stat-text">campus projects shipped</span>
          </RevealOnScroll>
          <RevealOnScroll className="span-4 tile tile-stat">
            <span className="stat-num">12</span>
            <span className="stat-text">tools &amp; technologies in the kit</span>
          </RevealOnScroll>
          <RevealOnScroll className="span-4 tile tile-stat">
            <span className="stat-num">02</span>
            <span className="stat-text">worlds balanced — code &amp; court</span>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
