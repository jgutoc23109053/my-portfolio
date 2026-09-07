import RevealOnScroll from './RevealOnScroll'

// Photos load automatically from  public/images/volleyball/  (vb-1.jpg ... vb-5.jpg).
// `ratio` matches each photo's NATIVE aspect ratio so nothing is stretched or cropped.
const ACHIEVEMENTS = [
  {
    image: '/images/volleyball/vb-1.jpg',
    ratio: '1070 / 599',
    year: '2024',
    title: 'Night League — At the Net',
    description: 'Wearing the #23 jersey, holding the net during an evening league match.',
    span: 'span-6',
  },
  {
    image: '/images/volleyball/vb-4.jpg',
    ratio: '2048 / 1152',
    year: '2023',
    title: 'Tournament Brotherhood',
    description: 'Side by side with fellow athletes from different teams during tournament season.',
    span: 'span-6',
  },
  {
    image: '/images/volleyball/vb-2.jpg',
    ratio: '2048 / 1536',
    year: '2024',
    title: 'Team CON-FIRM',
    description: 'Squad photo with my CON-FIRM Volleyball teammates — jersey #23, ball in hand.',
    span: 'span-6',
  },
  {
    image: '/images/volleyball/vb-5.jpg',
    ratio: '1080 / 810',
    year: '2025',
    title: 'Game-Day Spike',
    description: 'Attacking over the net — match action featured by The College Forum.',
    span: 'span-6',
  },
  {
    image: '/images/volleyball/vb-3.jpg',
    ratio: '1536 / 2048',
    year: '2024',
    title: 'Ready to Serve',
    description: 'Portrait in the yellow CON-FIRM #23 jersey, moments before the game.',
    span: 'span-5',
  },
]

function PhotoTile({ item }) {
  const handleImgError = (e) => {
    e.target.closest('.photo-tile').classList.add('is-placeholder')
    e.target.style.display = 'none'
  }

  return (
    <figure className={`photo-tile tile ${item.span}`}>
      <img
        src={item.image}
        alt={item.title}
        style={{ aspectRatio: item.ratio }}
        loading="lazy"
        onError={handleImgError}
      />
      <figcaption className="photo-cap">
        <span className="photo-title">{item.title}</span>
        <span className="photo-year">{item.year}</span>
      </figcaption>
    </figure>
  )
}

export default function VolleyballGallery() {
  return (
    <section className="section" id="volleyball">
      <div className="container">
        <RevealOnScroll>
          <header className="beat">
            <span className="beat-index">05</span>
            <div>
              <h2 className="beat-title">On the court</h2>
              <p className="beat-sub">
                Volleyball built the discipline, resilience, and teamwork I bring to everything else.
              </p>
            </div>
          </header>
        </RevealOnScroll>

        <div className="bento">
          {ACHIEVEMENTS.map((item) => (
            <RevealOnScroll key={item.image} className={item.span}>
              <PhotoTile item={item} />
            </RevealOnScroll>
          ))}

          <RevealOnScroll className="span-7 tile vb-story">
            <p className="tile-label">The story</p>
            <h3 className="story-title">Jersey <span className="text-yellow">#23</span></h3>
            <p className="body-text">
              I play for Team CON-FIRM — a squad built from late-night trainings, weekend
              tournaments, and one unspoken rule: nobody drops the ball without a hand
              reaching to pick them up. Night leagues taught me to read the game under
              pressure, while tournament season taught me to respect every opponent.
            </p>
            <p className="body-text">
              One of my match spikes was even featured by The College Forum — a small
              milestone that reminded me the court is also a stage, and composure is
              part of the craft. Same lesson I apply to code: stay calm, keep swinging,
              and trust the reps.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
