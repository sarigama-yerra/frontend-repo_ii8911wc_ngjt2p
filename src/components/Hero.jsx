import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              className="text-4xl sm:text-6xl font-semibold tracking-tight text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Alick — Web & Motion Designer
            </motion.h1>
            <motion.p
              className="mt-5 text-lg text-white/70 max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              I craft minimal, kinetic interfaces and playful brand moments. Clean grids, bold type, and purposeful motion.
            </motion.p>

            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-white/80 hover:text-white hover:border-white/40 transition">
                Get in touch
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/40 to-slate-900" />
    </section>
  );
}
