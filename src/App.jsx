import Navbar from './components/Navbar'
import About from './components/About'
import Publications from './components/Publications'
import Resume from './components/Resume'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Interests from './components/Interests'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Interests />
        <Publications />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
