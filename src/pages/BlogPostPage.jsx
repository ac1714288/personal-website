import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getPost } from '../lib/contentful'
import Contact from '../components/Contact'
import './BlogPostPage.css'

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPost(slug).then((data) => {
      setPost(data)
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return <div className="post-not-found"><p>Loading...</p></div>
  }

  if (!post) {
    return (
      <div className="post-not-found">
        <p>Post not found.</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <>
      <article className="blog-post">
        <div className="blog-post-inner">
          <Link to="/blog" className="blog-post-back">← Blog</Link>
          <div className="blog-post-meta">
            <span className="blog-tag">{post.tag}</span>
            <span className="blog-post-date">{post.date}</span>
          </div>
          <h1 className="blog-post-title">{post.title}</h1>
          {post.image && (
            <img src={post.image} alt={post.imageAlt} className="blog-post-image" />
          )}
          <div className="blog-post-body">
            {documentToReactComponents(post.body)}
          </div>
        </div>
      </article>

      <Contact />
    </>
  )
}
