import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-inner contact-inner">
        <div className="section-header">
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-text">
              Whether you have a research question, collaboration idea, or just want to connect —
              feel free to reach out.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:your@email.com">ac171@illiois.edu</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Office</span>
                <span>1611 Titan Drive, Rantoul, IL 61866<br />Illinois Center for Transportation</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Social</span>
                <div className="contact-socials">
                  <a href="https://github.com/ac1714288" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/adeniran-coker" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar</a>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="Your message..." />
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
