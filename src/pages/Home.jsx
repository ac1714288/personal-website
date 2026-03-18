import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import './Home.css'

const Globe = lazy(() => import('../components/Globe'))

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <img
          src={`${import.meta.env.BASE_URL}profile.jpg`}
          alt=""
          className="home-hero-bg"
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <Suspense fallback={null}>
            <Globe />
          </Suspense>
          <p className="home-hero-tagline">Think · Read · Act · Impact</p>
          <h1 className="hero-name">Adeniran Coker</h1>
          <div className="hero-actions">
            <a href="#contact" className="hero-btn-primary">Get in Touch</a>
            <Link to="/about" className="hero-btn-outline">About Me</Link>
          </div>
        </div>
      </section>

      <section className="home-about" id="about-summary">
        <div className="home-about-inner">
          <h2 className="section-title">About Me</h2>
          <p className="home-about-text">
            I am an aspiring speaker, writer, and consultant, currently pursuing a PhD in Civil Engineering at the University of Illinois Urbana-Champaign. My work focuses on developing innovative, data-driven solutions for sustainable infrastructure.
            I am deeply passionate about what I do because it sits at the intersection of social impact and technological innovation where ideas can translate into real, measurable change.
            At my core, I believe in the potential of people and the power of continuous growth. I see life as being on a journey of learning, evolving, and becoming better intentionally.
            If any of this resonates with you, I invite you to join me on this journey.
          </p>
          <Link to="/about" className="home-about-link">Read full profile →</Link>
        </div>
      </section>

      <Blog />
      <Contact />
    </>
  )
}
