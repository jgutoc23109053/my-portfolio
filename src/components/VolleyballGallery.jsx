import RevealOnScroll from './RevealOnScroll'

// ✏️ EDIT ME — captions & years below are editable. Photos load automatically
// from  public/images/volleyball/  (vb-1.jpg ... vb-5.jpg).
// `ratio` matches each photo's NATIVE aspect ratio so nothing is stretched or cropped.
const ACHIEVEMENTS = [
  {
    image: '/images/volleyball/vb-1.jpg',
    ratio: '1070 / 599',
    year: '2024',
    title: 'Night League — At the Net',
    description: 'Wearing the #23 jersey, holding the net during an evening league match.',
  },
  {
    image: '/images/volleyball/vb-2.jpg',
    ratio: '2048 / 1536',
    year: '2024',
    title: 'Team CON-FIRM',
    description: 'Squad photo with my CON-FIRM Volleyball teammates — jersey #23, ball in hand.',
  },
  {
    image: '/images/volleyball/vb-3.jpg',
    ratio: '1536 / 2048',
    year: '2024',
    title: 'Ready to Serve',
    description: 'Portrait in the yellow CON-FIRM #23 jersey, moments before the game.',
  },
  {
    image: '/images/volleyball/vb-4.jpg',
    ratio: '2048 / 1152',
    year: '2023',
    title: 'Tournament Brotherhood',
    description: 'Side by side with fellow athletes from different teams during tournament season.',
  },
  {
    image: '/images/volleyball/vb-5.jpg',
    ratio: '1080 / 810',
    year: '2025',
    title: 'Game-Day Spike',
    description: 'Attacking over the net — match action featured by The College Forum.',
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
      <div className="achievement-photo" style={{ aspectRatio: item.ratio }}>
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
