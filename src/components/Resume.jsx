import './Resume.css'

const education = [
  {
    degree: 'Ph.D. in [Your Field]',
    school: 'University of Illinois Urbana-Champaign',
    year: '2022 – Present',
  },
  {
    degree: 'B.Sc. in [Your Field]',
    school: 'Your Undergraduate Institution',
    year: '2018 – 2022',
  },
]

const experience = [
  {
    role: 'Graduate Research Assistant',
    org: 'University of Illinois Urbana-Champaign',
    year: '2022 – Present',
    desc: 'Brief description of your research work and contributions.',
  },
  {
    role: 'Research Intern',
    org: 'Organization Name',
    year: 'Summer 2021',
    desc: 'Brief description of internship work.',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="section-inner">
        <div className="resume-header">
          <div>
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle">Education & experience</p>
          </div>
          <a href="/resume.pdf" className="btn-primary" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">Education</h3>
          {education.map((item, i) => (
            <div className="resume-item" key={i}>
              <div className="resume-item-left">
                <span className="resume-year">{item.year}</span>
              </div>
              <div className="resume-item-right">
                <p className="resume-role">{item.degree}</p>
                <p className="resume-org">{item.school}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">Experience</h3>
          {experience.map((item, i) => (
            <div className="resume-item" key={i}>
              <div className="resume-item-left">
                <span className="resume-year">{item.year}</span>
              </div>
              <div className="resume-item-right">
                <p className="resume-role">{item.role}</p>
                <p className="resume-org">{item.org}</p>
                <p className="resume-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
