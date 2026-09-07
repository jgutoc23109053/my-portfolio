import RevealOnScroll from './RevealOnScroll'

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
    <section className="section" id="hobbies">
      <div className="container">
        <RevealOnScroll>
          <header className="beat">
            <span className="beat-index">07</span>
            <div>
              <h2 className="beat-title">Off court</h2>
              <p className="beat-sub">How I recharge when there&rsquo;s no training and no deadline.</p>
            </div>
          </header>
        </RevealOnScroll>

        <div className="bento">
          {HOBBIES.map((h) => (
            <RevealOnScroll key={h.title} className="span-3 tile hobby-tile">
              <span className="hobby-icon">{h.icon}</span>
              <h3 className="hobby-title">{h.title}</h3>
              <p className="hobby-desc">{h.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
