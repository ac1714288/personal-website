import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <p className="about-greeting">Hello, I'm</p>
          <h1 className="about-name">Adeniran Coker</h1>
          <p className="about-title">Researcher</p>
          <p className="about-bio">
            I am a researcher passionate about [your research area]. My work focuses on
            [brief description of your research interests and goals]. I am currently
            affiliated with [your institution/lab].
          </p>
          <div className="about-links">
            <a href="#contact" className="btn-primary">Get in Touch</a>
            <a href="#publications" className="btn-secondary">View Publications</a>
          </div>
          <div className="about-socials">
            <a href="https://github.com/ac1714288" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:your@email.com">Email</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar</a>
          </div>
        </div>
        <div className="about-photo">
          <div className="photo-placeholder">AC</div>
        </div>
      </div>
    </section>
  )
}
