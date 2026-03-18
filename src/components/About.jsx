import './About.css'

export default function About() {
  return (
    <section id="about" className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">About</p>
        <h1 className="hero-name">Adeniran<br />Coker</h1>
        <div className="hero-bio">
          <p>I am a researcher, thinker, and builder, someone who believes that the best ideas live at the intersection of technical rigour and human curiosity.</p>
          <p>By training I am a civil engineer. By disposition I am drawn to big questions — about systems, sustainability, and the decisions that shape the world we inhabit.</p>
          <p>Outside the lab I am just as restless: reading widely, taking long road trips, exploring food and culture, and looking for the kinds of conversations that change how you see things.</p>
          <p>I am building toward a career in strategic consulting where I can bring analytical depth to complex problems and help organisations make smarter, more resilient decisions.</p>
        </div>
        <div className="hero-actions">
          <a href="#contact" className="hero-btn-primary">Get in Touch</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/ac1714288" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:ac171@illiois.edu">Email</a>
          <a href="https://linkedin.com/in/adeniran-coker" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=9d1ARFkAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">Scholar</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Adeniran Coker" className="hero-photo" />
      </div>
    </section>
  )
}
