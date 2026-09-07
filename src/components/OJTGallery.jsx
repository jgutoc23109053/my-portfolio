import RevealOnScroll from './RevealOnScroll'

// Photos load automatically from  public/images/ojt/  (ojt-1.jpg ... ojt-3.jpg).
// `ratio` matches each photo's NATIVE aspect ratio so nothing is stretched.
const OJT_INFO = {
  company: 'PNP Agoo — Agoo Municipal Police Station',
  role: 'OJT Trainee (Student Intern)',
  location: 'Agoo, La Union',
  summary:
    'For my On-the-Job Training, I was deployed at PNP Agoo, the municipal police station of Agoo, La Union. Working alongside station personnel, I supported the day-to-day clerical and technical tasks that keep the station running — from encoding official records to handling digital files and producing printed materials for station use. The experience gave me a first-hand look at how discipline, accuracy, and public service come together in real government work, and it made me more detail-oriented, patient, and resourceful both as a student and as a future IT professional.',
  highlights: [
    'Encoded and organized the details of 49 barangay officials and Sangguniang Kabataan (SK) officials into the station\u2019s records.',
    'Assisted in transferring and organizing video files of PNP Agoo\u2019s raid operations for proper documentation.',
    'Designed and produced stickers for the police station, along with laminated reminder IDs for station use.',
    'Learned to handle sensitive records with care and follow proper data-handling procedures.',
  ],
}

const PHOTOS = [
  {
    image: '/images/ojt/ojt-2.jpg',
    ratio: '2048 / 1536',
    span: 'wide',
    caption: 'Equipment handover with station personnel during our deployment at PNP Agoo.',
  },
  {
    image: '/images/ojt/ojt-1.jpg',
    ratio: '1152 / 2048',
    span: 'half',
    caption: 'Cutting and assembling laminated reminder stickers and IDs for the station.',
  },
  {
    image: '/images/ojt/ojt-3.jpg',
    ratio: '1532 / 2048',
    span: 'half',
    caption: 'Handling station records with personnel and fellow trainees.',
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
                  <span className="ojt-meta-label">Location</span>
                  <span className="ojt-meta-value">{OJT_INFO.location}</span>
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
