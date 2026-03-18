import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Research', to: '/research' },
  { label: 'Blog', to: '/blog' },
  { label: 'Community', to: '/community' },
]

function scrollToContact(e) {
  e.preventDefault()
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const close = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={close}>Adeniran Coker</Link>
      <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ label, to }) => (
          <li key={to}>
            <Link to={to} onClick={close} className={pathname === to ? 'active' : ''}>{label}</Link>
          </li>
        ))}
        <li>
          <a href="#contact" onClick={(e) => { scrollToContact(e); close() }}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}
