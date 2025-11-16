import { Suspense } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const HERO_SPLINE = 'https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.35),transparent_40%)]" />
      </div>

      <div className="absolute inset-0">
        <Suspense fallback={<div className="w-full h-full" />}> 
          <Spline scene={HERO_SPLINE} className="w-full h-full" />
        </Suspense>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(56,189,248,0.35)]"
        >
          SaaS Doctor Booking Platform
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-sky-100/90 text-lg md:text-xl"
        >
          Multi-tenant clinics, role-based dashboards, calendar scheduling, secure patient booking.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#dashboards" className="inline-flex items-center rounded-md bg-sky-500/90 hover:bg-sky-400 text-white px-5 py-2.5 font-medium shadow-lg shadow-sky-500/20 transition">View Dashboards</a>
          <a href="#book" className="inline-flex items-center rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 font-medium backdrop-blur-md transition">Book Appointment</a>
        </motion.div>
      </div>
    </section>
  )
}
