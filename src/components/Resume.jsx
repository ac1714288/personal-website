import './Resume.css'

const education = [
  {
    degree: 'Ph.D. in Civil Engineering',
    school: 'University of Illinois Urbana-Champaign',
    year: '2025 – Present',
  },
    {
    degree: 'M.Sc. in Civil Engineering',
    school: 'University of New Hampshire',
    year: '2023 – 2025',
  },
  {
    degree: 'B.Sc. in Civil Engineering',
    school: 'Federal University of Agricultural, Abeokuta',
    year: '2014 – 2019',
  },
]

const experience = [
  {
    role: 'Graduate Research Assistant',
    org: 'University of Illinois Urbana-Champaign',
    year: '2025 – Present',
    desc: 'Brief description of your research work and contributions.',
  },
  {
    role: 'Graduate Assistant',
    org: 'University of New Hampshire',
    year: '2023 – 2025',
    desc: 'Evalauted the low temperature performance of sustainable pavement materials.',
  },
]

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="section-inner">
        <div className="resume-header">
          <div>
            <p className="section-eyebrow">Background</p>
            <h2 className="section-title">Resume</h2>
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
