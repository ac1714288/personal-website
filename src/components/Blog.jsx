import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../lib/contentful'
import './Blog.css'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  return (
    <section id="blog" className="blog">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eyebrow">Writing</p>
          <h2 className="section-title">Blog</h2>
        </div>
        <div className="blog-grid">
          {posts.slice(0, 3).map((post, i) => (
            <article className="blog-card" key={i}>
              <span className="blog-tag">{post.tag}</span>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <div className="blog-footer">
                <span className="blog-date">{post.date}</span>
                <Link to={`/blog/${post.slug}`} className="blog-read-more">Read more →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
