import Publications from '../components/Publications'
import Contact from '../components/Contact'
import './ResearchPage.css'

const researchAreas = [
  {
    label: 'Life Cycle Assessment',
    description: 'Evaluating the environmental and economic performance of infrastructure systems across their full life cycle to support sustainable decision-making.',
  },
  {
    label: 'Data Analytics & Machine Learning',
    description: 'Applying advanced quantitative modeling and machine learning to generate evidence-based insights for infrastructure planning and investment.',
  },
  {
    label: 'Infrastructure Systems',
    description: 'Optimizing the performance, resilience, and sustainability of civil infrastructure through integrated technical and policy analysis.',
  },
]

const profiles = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=9d1ARFkAAAAJ&hl=en&oi=ao' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/adeniran-coker' },
  { label: 'GitHub', href: 'https://github.com/ac1714288' },
]

export default function ResearchPage() {
  return (
    <>
      <section className="research-hero">
        <div className="research-hero-inner">
          <p className="section-eyebrow">Work</p>
          <h1 className="research-hero-title">Research</h1>
          <p className="research-hero-bio">
            I am a PhD student in Civil Engineering at the University of Illinois Urbana-Champaign
            and a Research Assistant at the Illinois Center for Transportation. I hold an M.Sc. in
            Civil Engineering from the University of New Hampshire.
          </p>
          <p className="research-hero-bio">
            My research applies life cycle assessment, cost analysis, and advanced data analytics
            to evaluate and optimize the environmental and economic performance of infrastructure
            systems. I combine quantitative modeling and machine learning to generate insights that
            support evidence-based infrastructure planning and investment decisions.
          </p>
        </div>
      </section>

      <section className="research-areas">
        <div className="section-inner">
          <p className="section-eyebrow">Focus</p>
          <h2 className="section-title">Research Areas</h2>
          <div className="research-areas-grid">
            {researchAreas.map((area, i) => (
              <div className="research-area-card" key={i}>
                <p className="research-area-label">{area.label}</p>
                <p className="research-area-desc">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="research-profiles">
        <div className="section-inner">
          <p className="section-eyebrow">Find Me</p>
          <h2 className="section-title">Research Profiles</h2>
          <div className="research-profiles-list">
            {profiles.map((p, i) => (
              <a key={i} href={p.href} target="_blank" rel="noreferrer" className="research-profile-link">
                <span>{p.label}</span>
                <span className="research-profile-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Publications />
      <Contact />
    </>
  )
}
