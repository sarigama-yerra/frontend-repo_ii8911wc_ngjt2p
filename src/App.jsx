import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Marquee from './components/Marquee'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(56,189,248,0.12),transparent),radial-gradient(600px_300px_at_90%_10%,rgba(139,92,246,0.12),transparent)]" />

      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <Contact />

      <footer className="py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Alick — Web & Motion Designer
      </footer>
    </div>
  )
}

export default App