import './Interests.css'

const interests = [
  {
    label: 'Philosophy',
    description: 'Drawn to questions of ethics, knowledge, and the nature of things — especially where they intersect with science and society.',
  },
  {
    label: 'Nature',
    description: 'Finding clarity outdoors whether hiking, watching the sky, or simply being somewhere quiet and green.',
  },
  {
    label: 'Road Trips',
    description: 'There is something freeing about long drives, open roads, and discovering places without a fixed plan.',
  },
  {
    label: 'Culture',
    description: 'Fascinated by how people live, what they believe, and the traditions and stories that shape communities.',
  },
  {
    label: 'Arts',
    description: 'Appreciating how art visual, musical, literary captures what language alone cannot.',
  },
  {
    label: 'Food',
    description: 'Food is culture on a plate. Always curious to try something new or understand the story behind a dish.',
  },
]

export default function Interests() {
  return (
    <section id="interests" className="interests">
      <div className="section-inner">
        <p className="section-eyebrow">Beyond the Lab</p>
        <h2 className="section-title">Interests</h2>
        <div className="interests-grid">
          {interests.map((item, i) => (
            <div className="interest-item" key={i}>
              <p className="interest-label">{item.label}</p>
              <p className="interest-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
