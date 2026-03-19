import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../lib/contentful'
import Contact from '../components/Contact'
import './BlogPage.css'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Contentful error:', err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <section className="blog-page-hero">
        <p className="section-eyebrow">Writing</p>
        <h1 className="blog-page-title">Blog</h1>
      </section>

      <section className="blog-page-list">
        <div className="section-inner">
          {loading ? (
            <p className="blog-page-loading">Loading...</p>
          ) : (
            posts.map((post) => (
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
            ))
          )}
        </div>
      </section>

      <Contact />
    </>
  )
}
