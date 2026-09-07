import RevealOnScroll from './RevealOnScroll'

// ✏️ EDIT ME — your volleyball achievements
// HOW TO ADD PHOTOS: drop your images into  public/images/volleyball/
// named vb-1.jpg, vb-2.jpg ... vb-6.jpg — they will appear automatically.
// Update the captions and years below to match each photo.
const ACHIEVEMENTS = [
  {
    image: '/images/volleyball/vb-1.jpg',
    year: '2023',
    title: 'Achievement Title 1',
    description: 'Replace with a short caption — e.g. tournament name, your position, and what made this moment special.',
  },
  {
    image: '/images/volleyball/vb-2.jpg',
    year: '2023',
    title: 'Achievement Title 2',
    description: 'Replace with a short caption — e.g. awards received, team name, or memorable match highlights.',
  },
  {
    image: '/images/volleyball/vb-3.jpg',
    year: '2024',
    title: 'Achievement Title 3',
    description: 'Replace with a short caption — e.g. Best Attacker, Team Captain recognition, or championship run.',
  },
  {
    image: '/images/volleyball/vb-4.jpg',
    year: '2024',
    title: 'Achievement Title 4',
    description: 'Replace with a short caption for this achievement photo.',
  },
  {
    image: '/images/volleyball/vb-5.jpg',
    year: '2025',
    title: 'Achievement Title 5',
    description: 'Replace with a short caption for this achievement photo.',
  },
  {
    image: '/images/volleyball/vb-6.jpg',
    year: '2025',
    title: 'Achievement Title 6',
    description: 'Replace with a short caption for this achievement photo.',
  },
]

function AchievementCard({ item }) {
  const handleImgError = (e) => {
    // Photo not added yet — show placeholder instead
    e.target.closest('.achievement-photo').classList.add('is-placeholder')
    e.target.style.display = 'none'
  }

  return (
    <div className="achievement-card">
      <div className="achievement-photo">
        <img src={item.image} alt={item.title} loading="lazy" onError={handleImgError} />
        <div className="achievement-placeholder">
          <span className="placeholder-icon">📷</span>
          <span className="placeholder-text">Photo coming soon</span>
        </div>
        <span className="achievement-year">{item.year}</span>
      </div>
      <div className="achievement-body">
        <h3 className="achievement-title">{item.title}</h3>
        <p className="achievement-desc">{item.description}</p>
      </div>
    </div>
  )
}

export default function VolleyballGallery() {
  return (
    <section className="section volleyball" id="volleyball">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">Student-Athlete Life</p>
            <h2 className="section-title">Volleyball <span className="text-accent">Achievements</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="section-intro">
            More than a sport — volleyball built the discipline, resilience, and teamwork
            I bring to everything I do. These are the moments and milestones from my
            journey on the court.
          </p>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="achievement-grid">
            {ACHIEVEMENTS.map((item, i) => <AchievementCard key={i} item={item} />)}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
