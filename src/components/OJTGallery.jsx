import RevealOnScroll from './RevealOnScroll'

// Real OJT deployment — PNP Agoo (Agoo Municipal Police Station, La Union).
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
    span: 'span-8',
    caption: 'Equipment handover with station personnel during our deployment at PNP Agoo.',
  },
  {
    image: '/images/ojt/ojt-1.jpg',
    ratio: '1152 / 2048',
    caption: 'Cutting and assembling laminated reminder stickers and IDs for the station.',
  },
  {
    image: '/images/ojt/ojt-3.jpg',
    ratio: '1532 / 2048',
    caption: 'Handling station records with personnel and fellow trainees.',
  },
]

const LOG_CHIPS = ['Records encoding', 'Media transfers', 'Station artwork', 'Lamination & IDs']

function OJTPhoto({ photo, className = '' }) {
  const handleImgError = (e) => {
    e.target.closest('.photo-tile').classList.add('is-placeholder')
    e.target.style.display = 'none'
  }

  return (
    <figure className={`photo-tile tile ${className}`}>
      <img
        src={photo.image}
        alt={photo.caption}
        style={{ aspectRatio: photo.ratio }}
        loading="lazy"
        onError={handleImgError}
      />
      <figcaption className="photo-cap">
        <span className="photo-title">{photo.caption}</span>
      </figcaption>
    </figure>
  )
}

export default function OJTGallery() {
  return (
    <section className="section" id="ojt">
      <div className="container">
        <RevealOnScroll>
          <header className="beat">
            <span className="beat-index">06</span>
            <div>
              <h2 className="beat-title">The badge</h2>
              <p className="beat-sub">My OJT logbook — real clerical, media, and artwork work inside a police station.</p>
            </div>
          </header>
        </RevealOnScroll>

        <div className="bento">
          <RevealOnScroll className="span-5 tile">
            <p className="tile-label">Deployment</p>
            <div className="ojt-meta">
              <div className="ojt-meta-row">
                <span className="fact-key">Station</span>
                <span className="fact-val">{OJT_INFO.company}</span>
              </div>
              <div className="ojt-meta-row">
                <span className="fact-key">Role</span>
                <span className="fact-val">{OJT_INFO.role}</span>
              </div>
              <div className="ojt-meta-row">
                <span className="fact-key">Location</span>
                <span className="fact-val">{OJT_INFO.location}</span>
              </div>
            </div>
            <p className="body-text ojt-summary">{OJT_INFO.summary}</p>
          </RevealOnScroll>

          <RevealOnScroll className="span-7 tile">
            <p className="tile-label">Key highlights</p>
            <ul className="ojt-highlights">
              {OJT_INFO.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll className={PHOTOS[0].span}>
            <OJTPhoto photo={PHOTOS[0]} />
          </RevealOnScroll>

          <RevealOnScroll className="span-4 tile">
            <p className="tile-label">Also in the log</p>
            <div className="chip-row">
              {LOG_CHIPS.map((c) => (
                <span className="chip chip-sm" key={c}>{c}</span>
              ))}
            </div>
            <p className="body-text">
              Between the big tasks were the small ones that kept the station moving —
              every sticker laminated and every file renamed was part of the service.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll className="ojt-duo">
          <OJTPhoto photo={PHOTOS[1]} />
          <OJTPhoto photo={PHOTOS[2]} />
        </RevealOnScroll>
      </div>
    </section>
  )
}
