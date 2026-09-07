import RevealOnScroll from './RevealOnScroll'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="bento hero-bento">
          <RevealOnScroll className="span-8 tile tile-name">
            <p className="eyebrow">Hello, I&rsquo;m</p>
            <h1 className="hero-title">
              Jake <span className="hero-outline">Gutoc</span>
            </h1>
            <p className="hero-tagline">
              Computer Science Student <span className="tag-amp">&amp;</span> Volleyball Athlete
            </p>
            <p className="hero-loc">Agoo, La Union · Philippines</p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="#projects">See my work</a>
              <a className="btn btn-ghost" href="#contact">Get in touch</a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="span-4 row-2 tile tile-photo hero-photo">
            <img src="/profile.jpg" alt="Portrait of Jake Gutoc" />
            <span className="photo-badge">#23 · CON-FIRM</span>
          </RevealOnScroll>

          <RevealOnScroll className="span-4 tile tile-stat">
            <span className="stat-num">06</span>
            <span className="stat-text">years on the volleyball court</span>
          </RevealOnScroll>
          <RevealOnScroll className="span-4 tile tile-stat">
            <span className="stat-num">49</span>
            <span className="stat-text">official records encoded at PNP Agoo</span>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
