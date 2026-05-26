import Particles from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <Skills />
        </div>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <Projects />
        </div>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <Experience />
        </div>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <Contact />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
