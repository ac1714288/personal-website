import './Blog.css'

const posts = [
  {
    title: 'Your First Blog Post Title',
    date: 'March 1, 2026',
    summary: 'A brief introduction to what this post covers. Share your thoughts, research insights, or experiences here.',
    tag: 'Research',
  },
  {
    title: 'Reflections on [Topic]',
    date: 'February 10, 2026',
    summary: "Write about something you've learned, a conference you attended, or a topic you find interesting.",
    tag: 'Thoughts',
  },
  {
    title: 'How I Approach [Research Method]',
    date: 'January 20, 2026',
    summary: 'Share your methodology, tools, or workflow that other researchers might find useful.',
    tag: 'Methods',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="section-inner">
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">Thoughts, reflections, and research notes</p>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <article className="blog-card" key={i}>
              <span className="blog-tag">{post.tag}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <a href="#" className="blog-read-more">Read more →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
