import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import Contact from '../components/Contact'
import './BlogPage.css'

export default function BlogPage() {
  return (
    <>
      <section className="blog-page-hero">
        <p className="section-eyebrow">Writing</p>
        <h1 className="blog-page-title">Blog</h1>
      </section>

      <section className="blog-page-list">
        <div className="section-inner">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="blog-page-item">
              <div className="blog-page-item-left">
                <span className="blog-tag">{post.tag}</span>
                <h2 className="blog-page-item-title">{post.title}</h2>
                <p className="blog-page-item-summary">{post.summary}</p>
              </div>
              <div className="blog-page-item-right">
                <span className="blog-page-item-date">{post.date}</span>
                <span className="blog-page-item-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Contact />
    </>
  )
}
