import './About.css'

export default function About() {
  return (
    <section id="about" className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Researcher</p>
        <h1 className="hero-name">Adeniran<br />Coker</h1>
        <p className="hero-bio">
          I am a researcher passionate about [your research area]. My work focuses on
          [brief description of your research interests and goals]. Currently affiliated
          with the University of Illinois Urbana-Champaign.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="hero-btn-primary">Get in Touch</a>
          <a href="#publications" className="hero-btn-outline">Publications</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/ac1714288" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:your@email.com">Email</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://scholar.google.com" target="_blank" rel="noreferrer">Scholar</a>
        </div>
      </div>
      <div className="hero-right">
        {/* Replace with: <img src="/your-photo.jpg" alt="Adeniran Coker" className="hero-photo" /> */}
        <div className="hero-photo-placeholder">AC</div>
      </div>
    </section>
  )
}
