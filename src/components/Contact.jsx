import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s build something crisp</h3>
              <p className="mt-2 text-white/70 max-w-md">Available for portfolio sites, product pages, and motion-led brand moments. I keep it minimal and make it move.</p>
            </div>

            <motion.a
              href="mailto:hello@alick.design"
              className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-4 text-slate-900 font-medium hover:bg-white/90 transition"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2"><Mail size={18} /> hello@alick.design</span>
              <span className="rounded-full bg-slate-900/10 p-2 group-hover:translate-x-1 transition-transform"><ArrowRight size={18} /></span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
