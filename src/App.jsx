import Navbar from './components/Navbar'
import About from './components/About'
import Publications from './components/Publications'
import Resume from './components/Resume'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Interests from './components/Interests'
import Footer from './components/Footer'

function Divider() {
  return <div className="section-divider" />
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Divider />
        <Interests />
        <Divider />
        <Publications />
        <Divider />
        <Resume />
        <Divider />
        <Blog />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
