import { Menu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <motion.a
              href="#top"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-5 w-5 rounded-md bg-gradient-to-tr from-sky-500 to-violet-500" />
              <span className="font-semibold tracking-tight">Alick</span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <a
                href="#work"
                className="inline-flex items-center gap-1 rounded-lg bg-white text-slate-900 px-3 py-2 font-medium hover:bg-white/90 transition"
              >
                See portfolio <ArrowUpRight size={16} />
              </a>
            </nav>

            <button className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white/80">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
