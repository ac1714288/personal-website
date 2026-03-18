import { useParams, Link } from 'react-router-dom'
import { posts } from '../data/posts'
import Contact from '../components/Contact'
import './BlogPostPage.css'

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

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
          <div className="blog-post-body">
            {post.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <Contact />
    </>
  )
}
