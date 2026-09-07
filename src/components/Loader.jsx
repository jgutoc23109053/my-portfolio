export default function Loader() {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-ring">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" className="loader-track" />
            <circle cx="50" cy="50" r="45" className="loader-progress" />
          </svg>
        </div>
        <p className="loader-text">&lt;JG /&gt;</p>
        <p className="loader-sub">Loading portfolio...</p>
      </div>
    </div>
  )
}
