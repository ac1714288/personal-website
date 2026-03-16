import './About.css'

export default function About() {
  return (
    <section id="about" className="hero">
      <div className="hero-left">
        <p className="hero-eyebrow">Researcher</p>
        <h1 className="hero-name">Adeniran<br />Coker</h1>
        <p className="hero-bio">
          I am a PhD candidate in Civil Engineering at the University of Illinois Urbana-Champaign and a Research Assistant at the Illinois Center for Transportation. I hold an M.Sc. in Civil Engineering from the University of New Hampshire.
          My research applies life cycle assessment, cost analysis, and advanced data analytics to evaluate and optimize the environmental and economic performance of infrastructure systems. I combine quantitative modeling and machine learning to generate insights that support evidence-based infrastructure planning and investment decisions.
          I am passionate about translating complex technical analysis into practical insights that inform policy, guide industry strategy, and improve infrastructure sustainability.
          After completing my PhD, I aim to pursue a career in strategic and management consulting, helping organizations address complex challenges, improve operational efficiency, and build resilient, sustainable infrastructure systems.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="hero-btn-primary">Get in Touch</a>
          <a href="#publications" className="hero-btn-outline">Publications</a>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/ac1714288" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:adeniran.coker@illinois.edu">Email</a>
          <a href="https://linkedin.com/in/adeniran-coker" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=9d1ARFkAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer">Scholar</a>
        </div>
      </div>
      <div className="hero-right">
        <img src="/background Image.jpg" alt="Adeniran Coker" className="hero-photo" />
      </div>
    </section>
  )
}
