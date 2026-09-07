import RevealOnScroll from './RevealOnScroll'

const TECH_ITEMS = [
  {
    name: 'HTML5', desc: 'Semantic structure & markup',
    svg: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6L6 42L24 38L42 42L40 6L24 2L8 6Z" stroke="currentColor" strokeWidth="2"/><text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="monospace">&lt;/&gt;</text></svg>,
  },
  {
    name: 'CSS3', desc: 'Styling, Grid, animations',
    svg: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="36" height="36" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M14 20H34M14 28H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  },
  {
    name: 'React', desc: 'Component-based UI',
    svg: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/><ellipse cx="24" cy="24" rx="18" ry="7" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/><line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/><text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="8" fontWeight="bold" fontFamily="monospace">Rc</text></svg>,
  },
  {
    name: 'Vite', desc: 'Build tool & dev server',
    svg: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 40L28 8L42 8L20 40Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M16 40H28L22 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity="0.5"/></svg>,
  },
  {
    name: 'Web3Forms', desc: 'Email API service',
    svg: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M6 18H42" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="14" r="1.5" fill="currentColor"/><circle cx="18" cy="14" r="1.5" fill="currentColor"/><circle cx="24" cy="14" r="1.5" fill="currentColor"/><path d="M14 28L20 24L26 30L34 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    name: 'Vercel', desc: 'Cloud hosting & CDN',
    svg: <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 38L24 8L44 38H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M14 38L24 22L34 38" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" opacity="0.4"/></svg>,
  },
]

export default function TechStack() {
  return (
    <section className="section tech-stack" id="tech-stack">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">Powered By</p>
            <h2 className="section-title">Tech <span className="text-accent">Stack</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="tech-grid">
            {TECH_ITEMS.map(item => (
              <div className="tech-card" key={item.name}>
                <div className="tech-icon-wrap">{item.svg}</div>
                <h4 className="tech-name">{item.name}</h4>
                <p className="tech-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}