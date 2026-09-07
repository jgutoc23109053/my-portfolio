import RevealOnScroll from './RevealOnScroll'

// ✏️ EDIT ME — your hobbies & interests
const HOBBIES = [
  {
    icon: '🏐',
    title: 'Volleyball',
    description: 'My main sport. Training, spiking, and competing — the court is where I reset and recharge.',
  },
  {
    icon: '💪',
    title: 'Fitness Training',
    description: 'Strength and conditioning work to stay game-ready. Discipline in the gym mirrors discipline in code.',
  },
  {
    icon: '🏀',
    title: 'Other Sports',
    description: 'I enjoy picking up other sports for fun — staying active and competitive keeps the athlete mindset sharp.',
  },
  {
    icon: '🎯',
    title: 'Skill Building',
    description: 'Exploring new tech, tutorials, and side experiments — always practicing, on and off the court.',
  },
]

export default function Hobbies() {
  return (
    <section className="section hobbies" id="hobbies">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">Beyond Code</p>
            <h2 className="section-title">Hobbies &amp; <span className="text-accent">Interests</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="hobbies-grid">
            {HOBBIES.map(hobby => (
              <div className="hobby-card" key={hobby.title}>
                <div className="hobby-icon">{hobby.icon}</div>
                <h3 className="hobby-title">{hobby.title}</h3>
                <p className="hobby-desc">{hobby.description}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
