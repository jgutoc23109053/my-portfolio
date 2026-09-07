import RevealOnScroll from './RevealOnScroll'

// ✏️ EDIT ME — your OJT details
// Photos load automatically from  public/images/ojt/  (ojt-1.jpg ... ojt-3.jpg).
// `ratio` matches each photo's NATIVE aspect ratio so nothing is stretched.
const OJT_INFO = {
  company: 'Company / Organization Name',
  role: 'OJT Trainee — Your Role',
  duration: 'e.g. January 2026 – April 2026',
  summary:
    'Replace this paragraph with an overview of your On-the-Job Training experience — the company you trained at, the team you worked with, and the kind of work you were assigned. Highlight what the placement exposed you to: real projects, tools used, workplace culture, and how it strengthened both your technical skills and professional confidence.',
  highlights: [
    'Replace with a key task or project you handled during OJT.',
    'Replace with a skill or tool you learned on the job.',
    'Replace with an achievement, evaluation rating, or positive feedback received.',
    'Replace with a teamwork or leadership moment worth mentioning.',
  ],
}

const PHOTOS = [
  {
    image: '/images/ojt/ojt-2.jpg',
    ratio: '2048 / 1536',
    span: 'wide',
    caption: 'Equipment and property handover with station personnel.',
  },
  {
    image: '/images/ojt/ojt-1.jpg',
    ratio: '1152 / 2048',
    span: 'half',
    caption: 'Assembling and laminating official IDs and office materials.',
  },
  {
    image: '/images/ojt/ojt-3.jpg',
    ratio: '1532 / 2048',
    span: 'half',
    caption: 'Records and document handling at the office.',
  },
]

function OJTPhoto({ photo }) {
  const handleImgError = (e) => {
    e.target.closest('.ojt-photo').classList.add('is-placeholder')
    e.target.style.display = 'none'
  }

  return (
    <figure className={`ojt-photo-card${photo.span === 'wide' ? ' wide' : ''}`}>
      <div className="ojt-photo" style={{ aspectRatio: photo.ratio }}>
        <img src={photo.image} alt={photo.caption} loading="lazy" onError={handleImgError} />
        <div className="achievement-placeholder">
          <span className="placeholder-icon">📷</span>
          <span className="placeholder-text">Photo coming soon</span>
        </div>
      </div>
      <figcaption className="ojt-caption">{photo.caption}</figcaption>
    </figure>
  )
}

export default function OJTGallery() {
  return (
    <section className="section ojt" id="ojt">
      <div className="container">
        <RevealOnScroll>
          <div className="section-header">
            <p className="section-label">Professional Experience</p>
            <h2 className="section-title">OJT <span className="text-accent">Performance</span></h2>
            <div className="section-line" />
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="ojt-content">
            <div className="ojt-info">
              <div className="ojt-meta">
                <div className="ojt-meta-item">
                  <span className="ojt-meta-label">Company</span>
                  <span className="ojt-meta-value">{OJT_INFO.company}</span>
                </div>
                <div className="ojt-meta-item">
                  <span className="ojt-meta-label">Role</span>
                  <span className="ojt-meta-value">{OJT_INFO.role}</span>
                </div>
                <div className="ojt-meta-item">
                  <span className="ojt-meta-label">Duration</span>
                  <span className="ojt-meta-value">{OJT_INFO.duration}</span>
                </div>
              </div>
              <p className="ojt-summary">{OJT_INFO.summary}</p>
              <h3 className="ojt-highlights-title">Key Highlights</h3>
              <ul className="ojt-highlights">
                {OJT_INFO.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            <div className="ojt-photos">
              {PHOTOS.map((photo, i) => <OJTPhoto key={i} photo={photo} />)}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
