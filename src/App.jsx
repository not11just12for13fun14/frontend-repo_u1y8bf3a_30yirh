import Hero from './components/Hero'
import Features from './components/Features'
import Dashboards from './components/Dashboards'
import BookingDemo from './components/BookingDemo'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold tracking-tight">MedBook SaaS</div>
          <nav className="flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#dashboards" className="hover:text-white transition">Dashboards</a>
            <a href="#book" className="hover:text-white transition">Book</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero/>
        <Features/>
        <Dashboards/>
        <BookingDemo/>
      </main>
      <footer className="py-10 text-center text-slate-400 border-t border-white/10">© {new Date().getFullYear()} MedBook SaaS</footer>
    </div>
  )
}

export default App
