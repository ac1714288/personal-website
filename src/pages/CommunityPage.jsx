import Contact from '../components/Contact'
import './CommunityPage.css'

const initiatives = [
  {
    eyebrow: 'Coming Soon',
    name: 'betterthanme.co',
    description:
      'A community built around the idea of continuous self-improvement becoming better than you were yesterday. Stay tuned.',
    status: 'coming-soon',
  },
  {
    eyebrow: 'Social Impact',
    name: 'The Big Difference',
    description:
      'A social impact organization committed to educating children across Africa equipping the next generation with the knowledge and tools to shape their future.',
    status: 'active',
  },
]

export default function CommunityPage() {
  return (
    <>
      <section className="community-hero">
        <div className="community-hero-inner">
          <p className="section-eyebrow">Community</p>
          <h1 className="community-hero-title">Building Together</h1>
          <p className="community-hero-bio">
            Beyond research and technology, I believe in the power of community to create lasting
            change. Here are the initiatives I am building and supporting.
          </p>
        </div>
      </section>

      <section className="community-initiatives">
        <div className="section-inner">
          <p className="section-eyebrow">Initiatives</p>
          <h2 className="section-title">What We're Building</h2>
          <div className="initiatives-grid">
            {initiatives.map((item, i) => (
              <div className="initiative-card" key={i}>
                <p className="initiative-eyebrow">{item.eyebrow}</p>
                <h3 className="initiative-name">{item.name}</h3>
                <p className="initiative-desc">{item.description}</p>
                {item.status === 'coming-soon' && (
                  <span className="initiative-badge">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
}
