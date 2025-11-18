import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Kinetic Commerce',
    tag: 'Brand + Site',
    color: 'from-sky-500/20 to-violet-500/20',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1740&auto=format&fit=crop',
  },
  {
    title: 'Play Studio',
    tag: 'Portfolio',
    color: 'from-emerald-500/20 to-cyan-500/20',
    image: 'https://images.unsplash.com/photo-1643240150868-5c4e1834ff75?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQbGF5JTIwU3R1ZGlvfGVufDB8MHx8fDE3NjM0NDg5NzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'LightOS',
    tag: 'Product UI',
    color: 'from-amber-500/20 to-pink-500/20',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1740&auto=format&fit=crop',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Selected Work</h2>
          <p className="text-white/60 text-sm">Minimal layouts. Motion-led interactions.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.color}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              viewport={{ once: true }}
            >
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/70 text-xs uppercase tracking-widest">{p.tag}</p>
                <h3 className="text-white text-lg font-medium">{p.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
