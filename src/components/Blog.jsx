import { Link } from 'react-router-dom'
import './Blog.css'

const posts = [
  {
    title: 'You don’t need to fit the part',
    date: 'February 26, 2026',
    summary: 'In this post, I reflect on the life of Claude Shannon and what it teaches us about intellectual depth and playfulness.',
    tag: 'Thoughts',
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
        <div className="section-header">
          <p className="section-eyebrow">Writing</p>
          <h2 className="section-title">Blog</h2>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <article className="blog-card" key={i}>
              <span className="blog-tag">{post.tag}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <Link to="/blog" className="blog-read-more">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
