import './Publications.css'

const publications = [
  {
    title: 'Your Paper Title Here',
    authors: 'Coker, A., Author, B., & Author, C.',
    journal: 'Journal of Example Research',
    year: 2024,
    doi: '#',
    pdf: '#',
  },
  {
    title: 'Another Research Paper Title',
    authors: 'Coker, A., & Co-author, D.',
    journal: 'Conference on Research Topics',
    year: 2023,
    doi: '#',
    pdf: '#',
  },
  {
    title: 'Earlier Work on a Related Topic',
    authors: 'Coker, A., Author, E., & Author, F.',
    journal: 'International Journal of Studies',
    year: 2022,
    doi: '#',
    pdf: null,
  },
]

export default function Publications() {
  return (
    <section id="publications" className="publications">
      <div className="section-inner">
        <h2 className="section-title">Publications</h2>
        <p className="section-subtitle">Peer-reviewed research and conference papers</p>
        <div className="pub-list">
          {publications.map((pub, i) => (
            <div className="pub-item" key={i}>
              <span className="pub-year">{pub.year}</span>
              <div className="pub-details">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">{pub.journal}</p>
                <div className="pub-links">
                  {pub.doi && <a href={pub.doi} target="_blank" rel="noreferrer">DOI</a>}
                  {pub.pdf && <a href={pub.pdf} target="_blank" rel="noreferrer">PDF</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
